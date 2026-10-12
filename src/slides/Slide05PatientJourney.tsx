import React, { useState } from 'react';
import { 
  UserCheck, 
  CalendarClock, 
  Stethoscope, 
  ClipboardList, 
  FlaskConical, 
  Receipt, 
  BedDouble, 
  CheckCircle2, 
  ArrowRight,
  Play
} from 'lucide-react';

interface JourneyStep {
  step: number;
  title: string;
  department: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  summary: string;
  inputs: string[];
  outputs: string[];
  systemAction: string;
}

export const Slide05PatientJourney: React.FC = () => {
  const steps: JourneyStep[] = [
    {
      step: 1,
      title: 'Registration & UHID Generation',
      department: 'Front Desk / Kiosk',
      icon: UserCheck,
      color: '#4f46e5',
      bgColor: '#eef2ff',
      summary: 'Patient arrives via walk-in or appointment. Front desk collects demographic data, photo, and government ID.',
      inputs: ['National ID / Passport', 'Demographic Details', 'Emergency Contact', 'Known Allergies'],
      outputs: ['Permanent UHID Card', 'Longitudinal EHR Master', 'Digital Barcode Wristband'],
      systemAction: 'Automated deduplication algorithm prevents duplicate medical record creation.'
    },
    {
      step: 2,
      title: 'Appointment & Digital Token',
      department: 'Queue Management',
      icon: CalendarClock,
      color: '#0284c7',
      bgColor: '#e0f2fe',
      summary: 'Patient is allocated to doctor specialty roster; digital token issued for waiting lounge digital displays.',
      inputs: ['Specialty Selection', 'Doctor Roster Slot', 'Triage Urgency Flag'],
      outputs: ['Digital Token #A-42', 'SMS Waiting Time Alert', 'OPD Lounge Queue Entry'],
      systemAction: 'Roster engine validates doctor on-duty status and calculates dynamic waiting estimate.'
    },
    {
      step: 3,
      title: 'Doctor OPD Consultation',
      department: 'Outpatient Clinic',
      icon: Stethoscope,
      color: '#059669',
      bgColor: '#dcfce7',
      summary: 'Physician reviews longitudinal history, records SOAP consultation notes, and selects ICD-10 diagnostic codes.',
      inputs: ['Vital Signs from Triage', 'Chief Complaints', 'Physical Examination'],
      outputs: ['Signed Clinical Encounter', 'ICD-10 Diagnostic Tag', 'Electronic Prescriptions'],
      systemAction: 'Clinical decision rules alert doctor if any prescribed drug conflicts with patient allergies.'
    },
    {
      step: 4,
      title: 'Electronic Clinical Orders',
      department: 'Clinical Order Entry',
      icon: ClipboardList,
      color: '#d97706',
      bgColor: '#fef3c7',
      summary: 'Physician triggers orders for diagnostic labs, imaging studies, and dispensary pharmaceuticals.',
      inputs: ['CBC + Lipid Profile Order', 'Chest X-Ray Order', 'Oral Antibiotic + Analgesic'],
      outputs: ['Phlebotomy Barcode Request', 'Radiology Modality Token', 'Pharmacy Dispense Indent'],
      systemAction: 'Orders instantly populate in destination department worklists across hospital network.'
    },
    {
      step: 5,
      title: 'Diagnostic Sample & Scans',
      department: 'LIS & RIS/PACS',
      icon: FlaskConical,
      color: '#7c3aed',
      bgColor: '#f3e8ff',
      summary: 'Lab processes barcoded blood tubes on automated analyzers; radiology captures digital DICOM scans.',
      inputs: ['Barcoded Blood Specimen', 'Modality Radiologist Scan'],
      outputs: ['Automated Lab Values', 'DICOM Image in PACS', 'Signed Diagnostic Reports'],
      systemAction: 'Normal values auto-verified; critical panic values trigger instant SMS to treating doctor.'
    },
    {
      step: 6,
      title: 'Billing & Cashless Clearance',
      department: 'Billing & Insurance',
      icon: Receipt,
      color: '#0d9488',
      bgColor: '#ccfbf1',
      summary: 'Hospital tariff engine aggregates doctor consultation, diagnostic tests, and pharmacy dispensed charges.',
      inputs: ['Itemized Order Feeds', 'TPA / Insurance Card', 'Corporate Policy Limits'],
      outputs: ['Cashless Pre-Auth Claim', 'Itemized Patient Invoice', 'Official Cash/Card Receipt'],
      systemAction: 'Split-billing calculator calculates insurer liability vs patient co-pay instantaneously.'
    },
    {
      step: 7,
      title: 'Inpatient Care (If Admitted)',
      department: 'IPD & Nursing Station',
      icon: BedDouble,
      color: '#e11d48',
      bgColor: '#ffe4e6',
      summary: 'If admission is required, bed is allocated in designated ward; nursing initiates care plan and e-MAR medication.',
      inputs: ['Doctor Admission Order', 'Bed Class Preference', 'Surgical Pre-op Clearance'],
      outputs: ['Ward Bed Allocation', 'Daily Nursing Progress Notes', 'Automated Room Charges'],
      systemAction: 'Real-time bed census updates hospital-wide dashboard from Available to Occupied.'
    },
    {
      step: 8,
      title: 'Discharge & Home Follow-Up',
      department: 'Discharge & MRD',
      icon: CheckCircle2,
      color: '#16a34a',
      bgColor: '#dcfce7',
      summary: 'Consultant clears discharge; digital discharge summary with medication instructions printed and sent via WhatsApp.',
      inputs: ['Physician Discharge Note', 'Pharmacy Home Meds', 'Financial Zero-Balance Clearance'],
      outputs: ['Digital Discharge Summary', 'Return Appointment Reminder', 'Archived Legal MRD Record'],
      systemAction: 'Bed is immediately marked as "Cleaning Required" for housekeeping dispatch.'
    }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '16px' }}>
      {/* Top: 8-Step Interactive Timeline Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        padding: '12px 18px',
        boxShadow: 'var(--clay-shadow-sm)',
        border: '1px solid rgba(255,255,255,0.9)',
        overflowX: 'auto',
      }}>
        {steps.map((st, i) => {
          const isCurrent = i === activeStepIndex;
          const isPast = i < activeStepIndex;
          const Icon = st.icon;

          return (
            <React.Fragment key={st.step}>
              <button
                onClick={() => setActiveStepIndex(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: isCurrent ? st.bgColor : isPast ? '#f1f5f9' : 'transparent',
                  border: isCurrent ? `2px solid ${st.color}` : '1px solid transparent',
                  borderRadius: 'var(--radius-pill)',
                  padding: '8px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
              >
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isCurrent ? st.color : isPast ? '#64748b' : '#cbd5e1',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Icon size={14} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, color: isCurrent ? st.color : '#64748b', textTransform: 'uppercase' }}>
                    Step {st.step}
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e293b', whiteSpace: 'nowrap' }}>
                    {st.title.split(' ')[0]} {st.title.split(' ')[1]}
                  </div>
                </div>
              </button>

              {i < steps.length - 1 && (
                <div style={{
                  height: '2px',
                  width: '20px',
                  background: isPast ? '#10b981' : '#e2e8f0',
                  flexShrink: 0,
                  margin: '0 2px',
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Main Content Area: Step Details & Data Flow */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', flex: 1 }}>
        {/* Left Card: Step Narrative & Action */}
        <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="clay-icon-bubble clay-icon-bubble-lg" style={{ background: activeStep.bgColor, color: activeStep.color }}>
                {React.createElement(activeStep.icon, { size: 28 })}
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: activeStep.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Milestone {activeStep.step} of 8 · {activeStep.department}
                </span>
                <h3 style={{ margin: '2px 0 0', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                  {activeStep.title}
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="footer-btn-nav"
                style={{ width: '36px', height: '36px' }}
                title="Previous Milestone"
              >
                ←
              </button>
              <button
                onClick={() => setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="footer-btn-nav"
                style={{ width: '36px', height: '36px' }}
                title="Next Milestone"
              >
                →
              </button>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: '0.92rem', color: '#334155', lineHeight: 1.55 }}>
            {activeStep.summary}
          </p>

          {/* Automated System Intelligence */}
          <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', background: activeStep.bgColor, border: `1px solid ${activeStep.color}35`, marginTop: 'auto' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: activeStep.color, textTransform: 'uppercase' }}>
              Automated System Safeguard:
            </span>
            <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a', marginTop: '4px' }}>
              {activeStep.systemAction}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Click next or step buttons to trace continuous electronic patient record.
            </span>
            <button
              onClick={() => setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="clay-button clay-button-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              <span>Advance Journey</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Card: Inputs vs Outputs Artifacts */}
        <div className="clay-card clay-card-lavender" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#1e293b', fontWeight: 800 }}>
            Departmental Inputs & Generated Artifacts
          </h4>

          {/* Inputs Box */}
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '14px', boxShadow: 'var(--clay-shadow-sm)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Incoming Clinical Data:
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {activeStep.inputs.map((inp, idx) => (
                <div key={idx} style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeStep.color }} />
                  {inp}
                </div>
              ))}
            </div>
          </div>

          {/* Outputs Box */}
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '14px', boxShadow: 'var(--clay-shadow-sm)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Electronic Records Generated:
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {activeStep.outputs.map((out, idx) => (
                <div key={idx} style={{ fontSize: '0.82rem', color: '#065f46', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} style={{ color: '#10b981' }} />
                  {out}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
