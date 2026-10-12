# HMIS 3D | Next-Gen Hospital Management Information System Presentation

A client-facing, interactive 3D PowerPoint-style presentation web application engineered for executive product demonstrations, hospital directors, Chief Medical Officers (CMOs), and healthcare administrators.

Built with **React 19**, **TypeScript**, **Vite**, **Three.js**, and modern **Claymorphism CSS Design Tokens**.

---

## 🏥 Key Highlights

- **PowerPoint-Style Slide Deck**: 28 structured, full-screen interactive slides covering the complete hospital continuum of care.
- **Interactive 3D Hospital Complex**: Real-time Three.js isometric hospital campus with interactive raycasting, department selection, and soft claymorphism shaders.
- **Claymorphism Visual System**: Soft pastel gradients (lavender, sky blue, peach, mint, porcelain white) with dual-layered ambient shadows, inner highlights, and tactile buttons.
- **Presenter Control Suite**:
  - Full keyboard shortcuts (`←` / `→` / `Space` to navigate, `N` for Presenter Notes, `G` for All Slides Grid, `F` for Fullscreen).
  - Searchable Table of Contents with section filters.
  - Slide-out Presenter Notes drawer with clinical and administrative talking cues.
  - Auto-Play slideshow mode.
- **Interactive Simulators on Every Slide**:
  - **Slide 02**: 6-Stakeholder Ecosystem Wheel (Doctors, Nurses, Patients, Admins, Pharmacy, Labs)
  - **Slide 04**: 6-Layer Modular System Architecture Explorer
  - **Slide 05**: 8-Milestone Longitudinal Patient Care Journey
  - **Slide 08**: Granular Role-Based Access Control (RBAC) Permission Matrix across 13 roles
  - **Slide 09**: Patient 360 EHR Profile with Critical Allergy Interlock
  - **Slide 10**: OPD Appointment Roster & Waiting Lounge Digital TV Display Simulator
  - **Slide 11**: 4-Tier Acuity Emergency Triage Playbook (Red / Orange / Yellow / Green)
  - **Slide 12**: Doctor Consultation Desk with SOAP Notes & e-Prescription allergy check
  - **Slide 14**: Interactive 12-Bed Isometric Ward Census with occupancy status filters
  - **Slide 15**: Bedside Nursing Station with e-MAR 5-Rights medication check-off & Vitals EWS
  - **Slide 16**: Laboratory LIS Specimen Tracking & Panic Value Trigger
  - **Slide 17**: Zero-Footprint HTML5 DICOM PACS Viewer Simulator with CT windowing
  - **Slide 18**: Blood Bank ABO/Rh Component Inventory & Cold-Chain Monitoring
  - **Slide 19**: Pharmacy FEFO Batch Dispensing & Automated Reorder PO triggers
  - **Slide 20**: Itemized Inpatient Billing Ledger & TPA Cashless Split-Billing Calculator
  - **Slide 21**: Healthcare HR 24/7 Rotational Duty Rosters & Physician Credentialing
  - **Slide 22**: Medical Records Department (MRD) ICD-10 Index & Medico-Legal Case Vault
  - **Slide 23**: Executive MIS & Business Intelligence Dashboard (Today / MTD / YTD)
  - **Slide 24**: Administrator Control Center with Live Service Heartbeat & Policy Toggles
  - **Slide 25**: Immutable Forensic Audit Trails with Zero-Trust Security
  - **Slide 26**: 99.99% High Availability Cluster Topology with Failover Simulation
  - **Slide 27**: Master Hospital Workflow Mega-Map uniting all 16 clinical & financial nodes
  - **Slide 28**: Value Proposition, 8-Week Phased Roadmap, and Demo Request with celebration confetti

---

## 🚀 Quick Start & Development

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation
```bash
# Clone or navigate to the project directory
cd "f:/MVC/HMIS Flow/3D HMIS"

# Install dependencies
npm install
```

### Run Locally
```bash
# Start local development server
npm run dev
```
Open [http://localhost:5175](http://localhost:5175) in your web browser.

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build
npm run preview
```

---

## ⌨️ Presentation Keyboard Controls

| Key | Action |
| --- | --- |
| `→` or `Space` | Advance to Next Slide |
| `←` or `Backspace` | Return to Previous Slide |
| `N` | Toggle Presenter Notes Drawer |
| `G` | Toggle Table of Contents / All Slides Grid |
| `F` | Toggle Fullscreen Mode |
| `Esc` | Close Modals & Overlays |

---

## 📂 Architecture & Directory Structure

```
3D HMIS/
├── public/
├── src/
│   ├── components/
│   │   ├── LucideIcon.tsx             # Dynamic icon renderer
│   │   ├── PresentationFooter.tsx     # Progress bar, counter & controls
│   │   ├── PresentationTopBar.tsx     # Brand header, actions & status
│   │   ├── PresenterNotesDrawer.tsx   # Slide-out clinical & admin notes
│   │   ├── TableOfContentsModal.tsx   # Searchable 28-slide grid overview
│   │   └── ThreeHospitalScene.tsx     # Three.js 3D isometric hospital campus
│   ├── data/
│   │   └── slidesData.ts              # Complete 28 slides metadata & talking points
│   ├── slides/
│   │   ├── Slide01Cover.tsx           # Cover with 3D campus & quick exploration
│   │   ├── Slide02Vision.tsx          # Stakeholder ecosystem wheel
│   │   ├── Slide03Benefits.tsx        # Qualitative benefits before/after
│   │   ├── Slide04Architecture.tsx    # 6-layer architecture explorer
│   │   ├── Slide05PatientJourney.tsx  # 8-milestone patient odyssey
│   │   ├── Slide06MasterConfig.tsx    # Master data governance & registries
│   │   ├── Slide07MultiBranch.tsx     # Multi-branch topology & data isolation
│   │   ├── Slide08RBAC.tsx            # 13 healthcare roles permission matrix
│   │   ├── Slide09PatientRecord.tsx   # Patient 360 EHR profile & allergies
│   │   ├── Slide10AppointmentQueue.tsx# Waiting lounge TV display simulator
│   │   ├── Slide11EmergencyTriage.tsx # 4-tier emergency acuity playbook
│   │   ├── Slide12OPDConsultation.tsx # SOAP doctor desk & e-Rx contraindications
│   │   ├── Slide13IPDJourney.tsx      # Inpatient ward progression & clearance
│   │   ├── Slide14BedManagement.tsx   # Interactive 12-bed ward census layout
│   │   ├── Slide15NursingStation.tsx  # e-MAR 5-rights & vitals EWS tracking
│   │   ├── Slide16LaboratoryLIS.tsx   # Barcode specimen tracking & panic values
│   │   ├── Slide17RadiologyRIS.tsx    # Zero-footprint DICOM PACS viewer
│   │   ├── Slide18BloodBank.tsx       # ABO/Rh component inventory & cold chain
│   │   ├── Slide19PharmacyInventory.tsx# FEFO batch dispensing & auto-PO triggers
│   │   ├── Slide20BillingRCM.tsx      # Inpatient itemized ledger & split billing
│   │   ├── Slide21HRRoster.tsx        # Rotational shift duty & credentialing
│   │   ├── Slide22MRDRecords.tsx      # ICD-10 coding & medico-legal case vault
│   │   ├── Slide23MISAnalytics.tsx    # Executive MIS dashboards (Today/MTD/YTD)
│   │   ├── Slide24AdminControl.tsx    # Service health heartbeats & policy toggles
│   │   ├── Slide25SecurityAudit.tsx   # Immutable audit trail & defense-in-depth
│   │   ├── Slide26ReliabilityInfra.tsx# 99.99% uptime cluster & failover test
│   │   ├── Slide27WorkflowMegaMap.tsx # 16-node master hospital topology map
│   │   └── Slide28WhyChooseUs.tsx     # Value proposition & confetti demo request
│   ├── styles/
│   │   ├── claymorphism.css           # 3D inflated cards, buttons, and bubbles
│   │   ├── slides.css                 # 16:9 responsive presentation stage
│   │   └── tokens.css                 # Pastel color palette & shadow tokens
│   ├── App.tsx                        # Main presentation state & routing
│   ├── index.css                      # Base resets and typography imports
│   └── main.tsx                       # React root entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── test.MD                            # Project specification & requirements
```

---

## 🛡️ Medical & Legal Disclaimer

*All patient identities, diagnostic readings, tariff amounts, and facility names displayed within this presentation application are fictional and designed strictly for product demonstration and architectural illustration purposes.*
