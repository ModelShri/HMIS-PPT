import React, { useState } from 'react';
import { 
  Maximize2, 
  Building2, 
  ArrowRight, 
  Activity, 
  Stethoscope, 
  Pill, 
  FlaskConical, 
  Receipt, 
  Bed, 
  Flame, 
  Users, 
  FileSpreadsheet, 
  Lock, 
  BarChart3,
  Calendar,
  Layers,
  Sparkles,
  Scissors,
  Droplets,
  Database
} from 'lucide-react';

interface MegaNode {
  id: string;
  name: string;
  category: 'Clinical' | 'Diagnostic' | 'Support' | 'Administrative';
  icon: React.ElementType;
  slideId: number;
  color: string;
  bgColor: string;
  route: string;
  description: string;
  inputs: string;
  outputs: string;
  connectedTo: string[];
}

interface Slide27WorkflowMegaMapProps {
  onJumpToSlide: (slideId: number) => void;
}

export const Slide27WorkflowMegaMap: React.FC<Slide27WorkflowMegaMapProps> = ({ onJumpToSlide }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const nodes: MegaNode[] = [
    { id: 'reg', name: 'Patient Registration', category: 'Administrative', icon: Users, slideId: 9, color: '#4f46e5', bgColor: '#eef2ff', route: '/Patient/Registration', description: 'Lifetime UHID master index, biometrics, emergency contact and allergy documentation.', inputs: 'National ID, Contact, Insurance Policy', outputs: 'UHID, Patient Barcode Wristband', connectedTo: ['Appointments', 'Emergency & Triage', 'Billing & Finance'] },
    { id: 'appt', name: 'Appointment & Queue', category: 'Administrative', icon: Calendar, slideId: 10, color: '#0284c7', bgColor: '#e0f2fe', route: '/Appointment/Book', description: 'Doctor specialty scheduling, token generation, and digital waiting lounge monitors.', inputs: 'Doctor Rosters, Walk-in / Online Booking', outputs: 'Digital Token, Estimated Wait Time', connectedTo: ['OPD Doctor Desk', 'Patient Registration'] },
    { id: 'er', name: 'Emergency & Triage', category: 'Clinical', icon: Flame, slideId: 11, color: '#dc2626', bgColor: '#fef2f2', route: '/Patient/Triage', description: '4-level triage acuity, rapid trauma registration, and direct resuscitation bypass.', inputs: 'Ambulance Arrival, Trauma Vitals', outputs: 'Trauma Team Alert, Emergency Orders', connectedTo: ['Bed Manager', 'Diagnostics LIS', 'Operations & OT'] },
    { id: 'opd', name: 'Outpatient (OP) Desk', category: 'Clinical', icon: Stethoscope, slideId: 12, color: '#059669', bgColor: '#dcfce7', route: '/Patient/OP', description: 'Clinician SOAP documentation, Doctor Desk consultation, ICD-10 diagnostics, and e-Rx.', inputs: 'Triage Vitals, Chief Complaints', outputs: 'e-Prescriptions, Lab Requisitions, IP Referrals', connectedTo: ['Pharmacy & Stock', 'Diagnostics LIS', 'Radiology RIS'] },
    { id: 'ipd', name: 'Inpatient (IP) Journey', category: 'Clinical', icon: Bed, slideId: 13, color: '#0284c7', bgColor: '#e0f2fe', route: '/Patient/IP', description: 'Inpatient admission, clinical progress care plans, attending consultant rounds, and discharge.', inputs: 'Doctor Admission Order, Bed Class', outputs: 'Casesheet, Clinical Notes, Daily Room Tariffs', connectedTo: ['Bed Manager', 'Clinical Nursing', 'Billing & Finance'] },
    { id: 'beds', name: 'Bed Manager & Census', category: 'Support', icon: Bed, slideId: 14, color: '#d97706', bgColor: '#fef3c7', route: '/Patient/BedManager', description: 'Interactive visual bed matrix: ICU, General, Deluxe suites, occupancy and cleaning states.', inputs: 'Admission & Transfer Events', outputs: 'Real-Time Bed State (Occupied/Cleaning/Free)', connectedTo: ['Inpatient Journey', 'Emergency & Triage', 'Housekeeping'] },
    { id: 'nurse', name: 'Clinical Nurse Desk', category: 'Clinical', icon: Activity, slideId: 15, color: '#e11d48', bgColor: '#ffe4e6', route: '/Clinical/NurseDesk', description: 'Bedside 5-rights medication verification, vital charting, and shift handovers.', inputs: 'Doctor Medical Orders, Pharmacy Meds', outputs: 'Signed e-MAR Record, Vitals Chart', connectedTo: ['Inpatient Journey', 'Pharmacy & Stock'] },
    { id: 'lis', name: 'Diagnostics Laboratory', category: 'Diagnostic', icon: FlaskConical, slideId: 16, color: '#7c3aed', bgColor: '#f3e8ff', route: '/Diagnostics/Lab', description: 'Barcode sample tracking, bidirectional analyzer sync, and panic value triggers.', inputs: 'Blood / Specimen Tubes', outputs: 'Verified Results, Panic SMS Alerts', connectedTo: ['OPD Desk', 'Inpatient Journey', 'Billing & Finance'] },
    { id: 'ris', name: 'Radiology RIS/PACS', category: 'Diagnostic', icon: Layers, slideId: 17, color: '#0284c7', bgColor: '#e0f2fe', route: '/Diagnostics/Radiology', description: 'Modality worklists, zero-footprint web DICOM viewer, and structured signed reports.', inputs: 'Diagnostic Scan Orders', outputs: 'PACS DICOM Images, Signed Radiologist Reports', connectedTo: ['OPD Desk', 'Inpatient Journey'] },
    { id: 'blood', name: 'Blood Bank Module', category: 'Support', icon: Droplets, slideId: 18, color: '#dc2626', bgColor: '#fee2e2', route: '/BloodBank/Dashboard', description: 'ABO/Rh inventory, cross-matching compatibility, and cold-chain temperature logs.', inputs: 'Donor Units, Transfusion Requests', outputs: 'Cross-Matched PRBC/FFP Bags', connectedTo: ['Emergency & Triage', 'Operations & OT', 'Inpatient Journey'] },
    { id: 'pharm', name: 'Pharmacy & Stock', category: 'Support', icon: Pill, slideId: 19, color: '#d97706', bgColor: '#fef3c7', route: '/PharmacyStock/Index', description: 'FEFO batch dispensing, automated PO generation, GRN matching, and POS sales.', inputs: 'Doctor e-Prescriptions, Supplier POs', outputs: 'Dispensed Drug Batches, Auto-Bill Feed', connectedTo: ['OPD Desk', 'Clinical Nurse Desk', 'Billing & Finance'] },
    { id: 'bill', name: 'Billing & Finance', category: 'Administrative', icon: Receipt, slideId: 20, color: '#0d9488', bgColor: '#ccfbf1', route: '/Billing/BillingDashboard', description: 'Itemized revenue ledger, insurance cashless pre-auth, IP advance, and refund management.', inputs: 'Department Service Feeds, IP Advance, TPA Limits', outputs: 'Final Discharge Invoices, Receipts, MIS Ledger', connectedTo: ['Inpatient Journey', 'Pharmacy & Stock', 'Diagnostics Laboratory'] },
    { id: 'ot', name: 'Operations & OT', category: 'Clinical', icon: Scissors, slideId: 26, color: '#8b5cf6', bgColor: '#f5f3ff', route: '/OT/Scheduling', description: 'Surgery scheduling, surgeon & anesthetist assignment, and postoperative PACU registry.', inputs: 'Surgical Referral, Pre-Op Clearance', outputs: 'OT Surgery Log, Consumables Ledger', connectedTo: ['Inpatient Journey', 'Blood Bank Module', 'Billing & Finance'] },
    { id: 'mrd', name: 'Medical Records (MRD)', category: 'Administrative', icon: FileSpreadsheet, slideId: 22, color: '#0284c7', bgColor: '#e0f2fe', route: '/MRD/Tracking', description: 'ICD-10 coding, document upload, file movement tracking, and certificates.', inputs: 'Discharge Summaries, Death/Birth Data', outputs: 'Archived Dossiers, Epidemiological Reports', connectedTo: ['Inpatient Journey', 'Admin Masters'] },
    { id: 'hr', name: 'HRMS & Employee Portal', category: 'Administrative', icon: Users, slideId: 21, color: '#4f46e5', bgColor: '#eef2ff', route: '/HR/Index', description: '24/7 duty rosters, attendance register, loans/advances, payroll, and credentialing.', inputs: 'Shift Requirements, Biometric Logs', outputs: 'Active Duty Roster, Salary Slips', connectedTo: ['All Clinical Departments'] },
    { id: 'masters', name: 'Masters Configuration', category: 'Administrative', icon: Database, slideId: 6, color: '#b45309', bgColor: '#fef3c7', route: '/Master/Department', description: 'Department, Ward, Bed, Doctor, Tariff, Tax, Payment Mode, and Discount masters.', inputs: 'Institutional Governance Policies', outputs: 'Versioned Master Rates & Tax Rules', connectedTo: ['All Hospital Departments'] },
  ];

  const [activeNode, setActiveNode] = useState<MegaNode>(nodes[0]);

  const filteredNodes = selectedCategory === 'All' ? nodes : nodes.filter(n => n.category === selectedCategory);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(14px, 2vw, 24px)', height: '100%' }}>
      {/* Left: Interactive 16-Module Mega Topology Grid with High-Contrast Borders */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h4 style={{ margin: 0, fontSize: 'var(--font-size-h4)', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              HMIS Master Architecture Topology (16 Core Modules)
            </h4>
            <span style={{ fontSize: 'var(--font-size-sm)', color: '#64748b', fontWeight: 600 }}>
              Select any node to inspect upstream inputs, downstream outputs, and ASP.NET Core routes
            </span>
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['All', 'Clinical', 'Diagnostic', 'Support', 'Administrative'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  border: selectedCategory === cat ? '1.5px solid #3b5bdb' : '1.5px solid #cbd5e1',
                  cursor: 'pointer',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  background: selectedCategory === cat ? '#3b5bdb' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  boxShadow: '0 2px 4px rgba(100, 116, 139, 0.08)',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 16-Node Interactive Grid with High-Contrast Distinct Borders */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(110px, 14vw, 150px), 1fr))', gap: '8px', flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
          {filteredNodes.map(n => {
            const isSelected = n.id === activeNode.id;
            const Icon = n.icon;

            return (
              <div
                key={n.id}
                onClick={() => setActiveNode(n)}
                style={{
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? '#ffffff' : n.bgColor,
                  border: isSelected ? `2.5px solid ${n.color}` : '2px solid #cbd5e1',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  transition: 'all 0.15s ease',
                  transform: isSelected ? 'scale(1.02)' : 'none',
                  boxShadow: isSelected ? `0 6px 16px ${n.color}33` : '0 2px 6px rgba(100, 116, 139, 0.06)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: n.color, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={15} />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: n.color, textTransform: 'uppercase' }}>
                    {n.category.slice(0, 5)}
                  </span>
                </div>

                <div>
                  <h4 style={{ margin: 0, fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                    {n.name}
                  </h4>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                    {n.route}
                  </span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid #cbd5e1', paddingTop: '4px' }}>
                  <span style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 600 }}>Slide {n.slideId.toString().padStart(2, '0')}</span>
                  <ArrowRight size={12} style={{ color: n.color }} />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ padding: '8px 14px', background: '#ffffff', borderRadius: 'var(--radius-pill)', border: '2px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: '#475569', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <Sparkles size={14} style={{ color: '#4f46e5' }} />
            All 16 nodes share a unified ASP.NET Core ApplicationDbContext & ADO.NET query engine.
          </span>
          <span style={{ color: '#059669', fontWeight: 800 }}>100% Interconnected Architecture</span>
        </div>
      </div>

      {/* Right: Selected Mega Node Detailed Inspector with High-Contrast Borders */}
      <div 
        className="clay-card" 
        style={{ 
          padding: '22px', 
          background: '#ffffff', 
          border: '2px solid #94a3b8',
          display: 'flex', 
          flexDirection: 'column', 
          gap: '14px',
          boxShadow: '0 8px 24px rgba(100, 116, 139, 0.15)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '50%', 
                background: activeNode.bgColor, 
                color: activeNode.color,
                border: `2px solid ${activeNode.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {React.createElement(activeNode.icon, { size: 24 })}
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: activeNode.color, textTransform: 'uppercase' }}>
                {activeNode.category} Module • {activeNode.route}
              </span>
              <h3 style={{ margin: '2px 0 0', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                {activeNode.name}
              </h3>
            </div>
          </div>

          <button
            onClick={() => onJumpToSlide(activeNode.slideId)}
            className="clay-button clay-button-primary"
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            Open Slide #{activeNode.slideId}
          </button>
        </div>

        <p style={{ margin: 0, fontSize: '0.86rem', color: '#334155', lineHeight: 1.45, fontWeight: 500 }}>
          {activeNode.description}
        </p>

        {/* Upstream & Downstream Data Flow with Distinct Borders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', display: 'block' }}>
              Upstream Ingested Inputs:
            </span>
            <strong style={{ fontSize: '0.85rem', color: '#0f172a', marginTop: '2px', display: 'block' }}>
              {activeNode.inputs}
            </strong>
          </div>

          <div style={{ padding: '12px 14px', background: '#f0fdf4', borderRadius: 'var(--radius-md)', border: '2px solid #86efac' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', display: 'block' }}>
              Downstream Dispatched Outputs:
            </span>
            <strong style={{ fontSize: '0.85rem', color: '#15803d', marginTop: '2px', display: 'block' }}>
              {activeNode.outputs}
            </strong>
          </div>
        </div>

        {/* Connected Modules List */}
        <div>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Direct Bi-Directional Synchronizations:
          </span>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {activeNode.connectedTo.map((c, i) => (
              <span 
                key={i} 
                style={{ 
                  fontSize: '0.74rem', 
                  fontWeight: 700, 
                  color: '#3730a3', 
                  background: '#e0e7ff', 
                  padding: '3px 10px', 
                  borderRadius: 'var(--radius-pill)',
                  border: '1.5px solid #818cf8'
                }}
              >
                ↔ {c}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto', borderTop: '2px solid #e2e8f0', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>
            Ready for hospital enterprise demonstration.
          </span>
          <button
            onClick={() => onJumpToSlide(activeNode.slideId)}
            className="clay-button"
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
