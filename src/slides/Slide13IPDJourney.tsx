import React, { useState } from 'react';
import { 
  BedDouble, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Coins, 
  Users, 
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';

export const Slide13IPDJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState(2);

  const stages = [
    {
      step: 1,
      title: 'Admission & Bed Assignment',
      actor: 'Admissions Desk & Nursing Supervisor',
      color: '#4f46e5',
      summary: 'Patient admitted from OPD or Emergency. Digital admission record created; bed assigned in Deluxe Wing Room 302.',
      deliverables: ['Admission Face Sheet', 'Bed Allocation Notice', 'Barcode Patient Wristband', 'Initial Deposit / TPA Pre-Auth']
    },
    {
      step: 2,
      title: 'Attending Physician Assessment',
      actor: 'Primary Consultant (Surgeon/Physician)',
      color: '#0284c7',
      summary: 'Comprehensive inpatient history, physical exam, pre-operative surgical clearance, and initial clinical order set.',
      deliverables: ['Clinical Admission Note', 'Initial Investigation Orders', 'Dietary & Activity Directives', 'DVT Prophylaxis Plan']
    },
    {
      step: 3,
      title: 'Daily Rounds & Care Delivery',
      actor: 'Attending Team & Ward Staff',
      color: '#059669',
      summary: 'Daily morning rounds, documentation of progress notes, adjustment of medication regimens, and nursing assessments.',
      deliverables: ['Daily Doctor Progress Note', 'e-MAR Medication Administration', 'Vitals Charting Every 4 Hours', 'Consumable Charges Recorded']
    },
    {
      step: 4,
      title: 'Multi-Department Discharge Clearance',
      actor: 'Ward Nurse, Pharmacy, Billing, TPA',
      color: '#d97706',
      summary: 'Consultant marks patient fit for discharge. System initiates automated 4-way clearance workflow without paper bottlenecks.',
      deliverables: ['Medical Discharge Order', 'Pharmacy Return Reconciliation', 'TPA Cashless Final Approval', 'Financial Ledger Zeroed Out']
    },
    {
      step: 5,
      title: 'Discharge Summary & Home Care',
      actor: 'Primary Physician & MRD',
      color: '#16a34a',
      summary: 'Standardized discharge summary with course in hospital, operation notes, discharge medications, and follow-up appointment.',
      deliverables: ['Printed & PDF Discharge Summary', 'Patient WhatsApp Link', 'Follow-up Date in OPD Calendar', 'Bed Marked for Cleaning']
    }
  ];

  const current = stages[activeStage];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '28px', height: '100%' }}>
      {/* Left: 5 IPD Progression Milestones */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h4 style={{ margin: '0 0 4px', fontSize: '0.95rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Inpatient Care Journey
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
          {stages.map((st, idx) => {
            const isSelected = idx === activeStage;
            return (
              <div
                key={st.step}
                onClick={() => setActiveStage(idx)}
                className={`clay-card ${isSelected ? 'clay-card-lavender' : ''}`}
                style={{
                  padding: '14px 16px',
                  cursor: 'pointer',
                  border: isSelected ? `2px solid ${st.color}` : '1px solid rgba(255,255,255,0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: isSelected ? st.color : '#e2e8f0',
                  color: isSelected ? '#ffffff' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  flexShrink: 0,
                }}>
                  {st.step}
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#0f172a', fontWeight: 700 }}>
                    {st.title}
                  </h4>
                  <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                    {st.actor}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="clay-card clay-card-mint" style={{ padding: '14px', marginTop: 'auto' }}>
          <strong style={{ fontSize: '0.82rem', color: '#065f46', display: 'block', marginBottom: '2px' }}>
            Automated Midnight Room Charges:
          </strong>
          <span style={{ fontSize: '0.78rem', color: '#047857' }}>
            Automated midnight batch daemon automatically posts room rent, nursing fees, and doctor visit charges to the patient running ledger.
          </span>
        </div>
      </div>

      {/* Right: Selected IPD Stage Inspection */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
          <div className="clay-icon-bubble clay-icon-bubble-lg" style={{ color: current.color }}>
            <BedDouble size={26} />
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: current.color, textTransform: 'uppercase' }}>
              Phase {current.step} of 5
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '1.35rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
              {current.title}
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Primary Responsibility: {current.actor}</span>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155', lineHeight: 1.55 }}>
          {current.summary}
        </p>

        {/* Deliverables / Checklist */}
        <div>
          <h5 style={{ margin: '0 0 10px', fontSize: '0.82rem', textTransform: 'uppercase', color: '#475569', letterSpacing: '0.05em' }}>
            Required Electronic Records & Checkpoints:
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {current.deliverables.map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.85rem', color: '#1e293b' }}>
                <CheckCircle2 size={16} style={{ color: current.color, flexShrink: 0 }} />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
            Zero-delay clearance cuts average discharge wait from 4 hours to 45 minutes.
          </span>
          <button
            onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
            className="clay-button clay-button-primary"
            style={{ padding: '8px 18px', fontSize: '0.82rem' }}
          >
            <span>Next Phase</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
