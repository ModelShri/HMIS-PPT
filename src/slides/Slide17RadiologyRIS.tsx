import React, { useState } from 'react';
import { 
  Scan, 
  Eye, 
  ZoomIn, 
  RotateCw, 
  FileCheck, 
  Maximize2, 
  Layers, 
  SunMedium,
  CheckCircle2
} from 'lucide-react';

export const Slide17RadiologyRIS: React.FC = () => {
  const [windowPreset, setWindowPreset] = useState<'Lung' | 'Bone' | 'Brain' | 'Soft Tissue'>('Lung');
  const [zoomLevel, setZoomLevel] = useState(1);

  const modalities = [
    { code: 'CT-102', exam: 'Chest High-Resolution CT with Contrast', patient: 'David Miller', status: 'Reported', time: '09:30 AM' },
    { code: 'MRI-01', exam: 'Brain 3T MRI with Spectroscopy', patient: 'Arthur Chen', status: 'Scanning', time: '10:15 AM' },
    { code: 'XR-04', exam: 'Knee AP / Lateral Weight-Bearing', patient: 'Maria Santos', status: 'Scheduled', time: '11:00 AM' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '28px', height: '100%' }}>
      {/* Left: Interactive Zero-Footprint DICOM PACS Viewer Simulation */}
      <div className="clay-card" style={{ padding: '20px', background: '#090d16', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '14px', borderRadius: 'var(--radius-xl)' }}>
        {/* Viewer Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Scan size={18} style={{ color: '#38bdf8' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.04em' }}>
              DICOM PACS VIEWER · STUDY #CT-CHEST-99208
            </span>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {['Lung', 'Bone', 'Brain', 'Soft Tissue'].map((w) => (
              <button
                key={w}
                onClick={() => setWindowPreset(w as any)}
                style={{
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: windowPreset === w ? '#38bdf8' : 'rgba(255,255,255,0.06)',
                  color: windowPreset === w ? '#0f172a' : '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Scan Display Area (Simulated 3D CT Slice) */}
        <div style={{ flex: 1, position: 'relative', background: '#020617', borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
          {/* DICOM Overlay Metadata */}
          <div style={{ position: 'absolute', top: '10px', left: '12px', fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}>
            <div>PATIENT: Miller, Johnathan</div>
            <div>MRN: MED-9920841 · M / 54Y</div>
            <div>MODALITY: CT 128-Slice</div>
            <div>SLICE: 42 / 128 (Thickness: 1.0mm)</div>
          </div>

          <div style={{ position: 'absolute', top: '10px', right: '12px', fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', textAlign: 'right' }}>
            <div>METRO HOSPITAL PACS</div>
            <div>FOV: 350mm</div>
            <div>WL: -600 / WW: 1500 [{windowPreset}]</div>
          </div>

          {/* Graphical CT Chest Cross-Section Drawing */}
          <div style={{
            width: `${240 * zoomLevel}px`,
            height: `${240 * zoomLevel}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #334155 0%, #1e293b 45%, #0f172a 70%, #020617 100%)',
            border: '2px dashed #475569',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.3s ease',
          }}>
            {/* Vertebra */}
            <div style={{ position: 'absolute', top: '24px', width: '28px', height: '22px', background: '#cbd5e1', borderRadius: '4px', opacity: 0.8 }} />
            {/* Sternum */}
            <div style={{ position: 'absolute', bottom: '24px', width: '24px', height: '14px', background: '#cbd5e1', borderRadius: '4px', opacity: 0.8 }} />
            {/* Left Lung Field */}
            <div style={{ width: '60px', height: '100px', borderRadius: '40% 60% 60% 40%', background: '#020617', border: '1px solid #64748b', marginRight: '30px' }} />
            {/* Right Lung Field */}
            <div style={{ width: '60px', height: '100px', borderRadius: '60% 40% 40% 60%', background: '#020617', border: '1px solid #64748b' }} />
            {/* Heart Silhouette */}
            <div style={{ position: 'absolute', width: '45px', height: '45px', borderRadius: '50%', background: '#475569', opacity: 0.6 }} />
          </div>

          {/* Quick Viewer Controls */}
          <div style={{ position: 'absolute', bottom: '10px', left: '12px', display: 'flex', gap: '6px' }}>
            <button onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 1.6))} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.72rem' }}>
              Zoom In +
            </button>
            <button onClick={() => setZoomLevel(1)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#ffffff', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.72rem' }}>
              Reset 1:1
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: '#94a3b8' }}>
          <span>WADO-RS Web Streaming · Fast Zero-Footprint HTML5 Canvas</span>
          <span style={{ color: '#38bdf8' }}>✓ Diagnostic Quality Verified</span>
        </div>
      </div>

      {/* Right: Radiologist Structured Report */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase' }}>
              Diagnostic Radiology Report
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
              HRCT Thorax (Chest)
            </h3>
          </div>

          <span className="clay-badge clay-badge-mint">
            Verified & Signed
          </span>
        </div>

        {/* Structured Report Findings */}
        <div className="clay-inset-well" style={{ flex: 1, overflowY: 'auto', background: '#f8fafc', padding: '14px', fontSize: '0.82rem', lineHeight: 1.5, color: '#334155' }}>
          <strong style={{ display: 'block', color: '#0f172a', marginBottom: '4px' }}>
            FINDINGS:
          </strong>
          <p style={{ margin: '0 0 8px' }}>
            Both lung fields are clear of focal consolidation, ground-glass opacities, or suspicious pulmonary nodules. No pleural effusion or pneumothorax identified.
          </p>
          <strong style={{ display: 'block', color: '#0f172a', marginBottom: '4px' }}>
            MEDIASTINUM & CARDIOVASCULAR:
          </strong>
          <p style={{ margin: '0 0 8px' }}>
            Heart size within normal limits. Great vessels opacify normally. No mediastinal or hilar lymphadenopathy.
          </p>
          <strong style={{ display: 'block', color: '#0f172a', marginBottom: '4px' }}>
            IMPRESSION:
          </strong>
          <p style={{ margin: 0, fontWeight: 700, color: '#059669' }}>
            Normal high-resolution CT examination of the chest. No active cardiopulmonary pathology.
          </p>
        </div>

        {/* Radiologist Digital Signature */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#0f172a' }}>Dr. Raymond Ortiz, MD, FACR</div>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Consultant Radiologist · Digital Sign SHA-256</span>
          </div>

          <button
            onClick={() => alert('Diagnostic radiology report opened in printable PDF format.')}
            className="clay-button"
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            Print PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};
