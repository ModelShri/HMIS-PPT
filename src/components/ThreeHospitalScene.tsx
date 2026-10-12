import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHospitalSceneProps {
  interactive?: boolean;
  selectedDepartment?: string | null;
  onSelectDepartment?: (dept: string) => void;
  className?: string;
}

export const ThreeHospitalScene: React.FC<ThreeHospitalSceneProps> = ({
  selectedDepartment,
  onSelectDepartment,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // transparent to show pastel mesh background

    // Isometric Camera setup
    const aspect = width / height;
    const d = 14;
    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      1000
    );
    camera.position.set(24, 26, 24);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Soft Pastel Lighting for Claymorphism
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xfff8f0, 0x90b0e0, 0.9);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xfff5ea, 1.2);
    sunLight.position.set(20, 40, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 100;
    const sCam = 18;
    sunLight.shadow.camera.left = -sCam;
    sunLight.shadow.camera.right = sCam;
    sunLight.shadow.camera.top = sCam;
    sunLight.shadow.camera.bottom = -sCam;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.8);
    fillLight.position.set(-20, 20, -10);
    scene.add(fillLight);

    // 3. Materials (Soft pastel clay look)
    const clayMat = (color: number, roughness = 0.45) =>
      new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness: 0.05,
      });

    const groundMat = clayMat(0xeef2f7, 0.6);
    const mainBuildingMat = clayMat(0xffffff, 0.35);
    const emergencyMat = clayMat(0xffe3e3, 0.4);
    const labMat = clayMat(0xe0f2fe, 0.3);
    const opdMat = clayMat(0xe8f5e9, 0.4);
    const accentBlueMat = clayMat(0x4c6ef5, 0.3);
    const redCrossMat = clayMat(0xff4d4f, 0.2);
    const glassWindowMat = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd,
      roughness: 0.15,
      transmission: 0.6,
      thickness: 0.5,
    });
    const treeTrunkMat = clayMat(0x9a7b56, 0.8);
    const treeFoliageMat = clayMat(0x6ee7b7, 0.5);

    // Group for hospital complex
    const hospitalGroup = new THREE.Group();
    scene.add(hospitalGroup);

    // Base Island / Ground Platform (Rounded clay slab)
    const groundGeo = new THREE.CylinderGeometry(15, 15.5, 1.2, 32);
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.6;
    ground.receiveShadow = true;
    hospitalGroup.add(ground);

    // Decorative grass ring
    const grassGeo = new THREE.CylinderGeometry(14.6, 14.6, 0.2, 32);
    const grass = new THREE.Mesh(grassGeo, clayMat(0xdcfce7, 0.6));
    grass.position.y = 0.05;
    grass.receiveShadow = true;
    hospitalGroup.add(grass);

    // --- MAIN HOSPITAL TOWER (6 Floors) ---
    const towerGeo = new THREE.BoxGeometry(7, 9, 6);
    const tower = new THREE.Mesh(towerGeo, mainBuildingMat);
    tower.position.set(0, 4.5, -1);
    tower.castShadow = true;
    tower.receiveShadow = true;
    tower.userData = { dept: 'IPD' };
    hospitalGroup.add(tower);

    // Tower Roof Helipad
    const helipadGeo = new THREE.CylinderGeometry(2.4, 2.4, 0.3, 24);
    const helipad = new THREE.Mesh(helipadGeo, clayMat(0xf1f5f9, 0.3));
    helipad.position.set(0, 9.15, -1);
    helipad.receiveShadow = true;
    hospitalGroup.add(helipad);

    // Helipad "H" Marking
    const hBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 1.8), accentBlueMat);
    hBar1.position.set(-0.6, 9.35, -1);
    const hBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 1.8), accentBlueMat);
    hBar2.position.set(0.6, 9.35, -1);
    const hCross = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.08, 0.3), accentBlueMat);
    hCross.position.set(0, 9.35, -1);
    hospitalGroup.add(hBar1, hBar2, hCross);

    // Tower Windows Band
    for (let f = 1; f <= 4; f++) {
      const winGeo = new THREE.BoxGeometry(5.8, 0.8, 0.1);
      const winFront = new THREE.Mesh(winGeo, glassWindowMat);
      winFront.position.set(0, f * 1.7 + 1.2, 2.05 - 1);
      const winSide = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 4.6), glassWindowMat);
      winSide.position.set(3.55, f * 1.7 + 1.2, -1);
      hospitalGroup.add(winFront, winSide);
    }

    // --- EMERGENCY WING (Red Cross + Ambulance Bay) ---
    const erGeo = new THREE.BoxGeometry(4.5, 4.2, 5);
    const er = new THREE.Mesh(erGeo, emergencyMat);
    er.position.set(-5.5, 2.1, 0);
    er.castShadow = true;
    er.receiveShadow = true;
    er.userData = { dept: 'Emergency' };
    hospitalGroup.add(er);

    // Red Cross on ER Wall
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.5, 0.1), redCrossMat);
    crossV.position.set(-5.5, 2.6, 2.55);
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.35, 0.1), redCrossMat);
    crossH.position.set(-5.5, 2.6, 2.55);
    hospitalGroup.add(crossV, crossH);

    // ER Canopy
    const erCanopy = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.2, 2.2), accentBlueMat);
    erCanopy.position.set(-5.5, 1.8, 3.4);
    erCanopy.castShadow = true;
    hospitalGroup.add(erCanopy);

    // --- OPD CLINIC WING ---
    const opdGeo = new THREE.BoxGeometry(5, 5, 4.5);
    const opd = new THREE.Mesh(opdGeo, opdMat);
    opd.position.set(5.5, 2.5, -0.5);
    opd.castShadow = true;
    opd.receiveShadow = true;
    opd.userData = { dept: 'OPD' };
    hospitalGroup.add(opd);

    // OPD Sign Band
    const opdSign = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.6, 0.15), clayMat(0x38d9a9, 0.4));
    opdSign.position.set(5.5, 4.2, 1.8);
    hospitalGroup.add(opdSign);

    // --- DIAGNOSTICS & LAB PAVILION ---
    const labGeo = new THREE.BoxGeometry(4, 3.2, 4);
    const lab = new THREE.Mesh(labGeo, labMat);
    lab.position.set(2, 1.6, 4.5);
    lab.castShadow = true;
    lab.receiveShadow = true;
    lab.userData = { dept: 'Laboratory' };
    hospitalGroup.add(lab);

    // --- PHARMACY DRIVE & ENTRANCE ---
    const pharmGeo = new THREE.BoxGeometry(3.6, 2.6, 3.2);
    const pharm = new THREE.Mesh(pharmGeo, clayMat(0xffedd5, 0.3));
    pharm.position.set(-2.5, 1.3, 4.5);
    pharm.castShadow = true;
    pharm.receiveShadow = true;
    pharm.userData = { dept: 'Pharmacy' };
    hospitalGroup.add(pharm);

    // Green Rx Cross
    const rxV = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.9, 0.08), clayMat(0x10b981, 0.3));
    rxV.position.set(-2.5, 1.8, 6.15);
    const rxH = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.25, 0.08), clayMat(0x10b981, 0.3));
    rxH.position.set(-2.5, 1.8, 6.15);
    hospitalGroup.add(rxV, rxH);

    // --- CLAY TREES & PARK ACCENTS ---
    const addTree = (x: number, z: number, scale = 1) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * scale, 0.22 * scale, 1.2 * scale, 8), treeTrunkMat);
      trunk.position.set(x, 0.6 * scale, z);
      trunk.castShadow = true;

      const foliage = new THREE.Mesh(new THREE.DodecahedronGeometry(0.85 * scale, 1), treeFoliageMat);
      foliage.position.set(x, 1.5 * scale, z);
      foliage.castShadow = true;

      hospitalGroup.add(trunk, foliage);
    };

    addTree(-8, 5, 1.1);
    addTree(-9, 2.5, 0.9);
    addTree(8, 4, 1.2);
    addTree(9, 1, 0.85);
    addTree(8.5, -4, 1.0);
    addTree(-7, -5, 1.1);
    addTree(0, -7, 1.3);

    // --- AMBULANCE 3D MODEL ---
    const ambGroup = new THREE.Group();
    const ambBody = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 2.6), clayMat(0xffffff, 0.3));
    ambBody.position.y = 0.65;
    ambBody.castShadow = true;
    const ambStripe = new THREE.Mesh(new THREE.BoxGeometry(1.62, 0.2, 2.4), redCrossMat);
    ambStripe.position.y = 0.65;
    const ambBeacon = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.15, 8), redCrossMat);
    ambBeacon.position.set(0, 1.2, 0.3);
    ambGroup.add(ambBody, ambStripe, ambBeacon);
    ambGroup.position.set(-5.5, 0.1, 4.8);
    ambGroup.rotation.y = Math.PI * 0.1;
    hospitalGroup.add(ambGroup);

    // --- FLOATING CLAY MEDICAL CAPSULES / ICONS ---
    const capsuleGeo = new THREE.CapsuleGeometry(0.35, 0.6, 8, 16);
    const capsuleMat1 = clayMat(0x60a5fa, 0.2);
    const capsule = new THREE.Mesh(capsuleGeo, capsuleMat1);
    capsule.position.set(-3.5, 9.5, 3);
    capsule.rotation.z = 0.6;
    capsule.castShadow = true;
    scene.add(capsule);

    const heartMat = clayMat(0xf43f5e, 0.2);
    const heartBubble = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), heartMat);
    heartBubble.position.set(4, 8.5, 3.5);
    scene.add(heartBubble);

    // 4. Mouse / Touch Orbit Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let rotationSpeed = 0.005;
    let autoRotate = true;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      autoRotate = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      hospitalGroup.rotation.y += deltaX * rotationSpeed;
      prevMouseX = e.clientX;
    };

    const onMouseUp = () => {
      isDragging = false;
      // resume gentle auto-rotate after delay
      setTimeout(() => {
        autoRotate = true;
      }, 3000);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // 5. Raycasting for Department Selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (e: MouseEvent) => {
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hospitalGroup.children, true);

      for (const hit of intersects) {
        if (hit.object.userData && hit.object.userData.dept) {
          if (onSelectDepartment) {
            onSelectDepartment(hit.object.userData.dept);
          }
          break;
        }
      }
    };

    domElement.addEventListener('click', onClick);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle auto-rotation
      if (autoRotate) {
        hospitalGroup.rotation.y += 0.003;
      }

      // Floating items animation
      capsule.position.y = 9.5 + Math.sin(elapsed * 2) * 0.4;
      capsule.rotation.y = elapsed * 0.8;
      heartBubble.position.y = 8.5 + Math.cos(elapsed * 2.2) * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      const newAspect = newWidth / newHeight;

      camera.left = -d * newAspect;
      camera.right = d * newAspect;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, [onSelectDepartment]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none ${className}`}
      style={{ minHeight: '380px' }}
    />
  );
};
