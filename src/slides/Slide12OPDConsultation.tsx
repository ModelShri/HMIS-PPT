import React, { useState } from 'react';
import { 
  Stethoscope, 
  FileText, 
  AlertTriangle, 
  Pill, 
  CheckCircle2, 
  Plus, 
  Send, 
  ShieldCheck,
  Search
} from 'lucide-react';

export const Slide12OPDConsultation: React.FC = () => {
  const [soapSection, setSoapSection] = useState<'S' | 'O' | 'A' | 'P'>('A');
  const [allergyWarning, setAllergyWarning] = useState<string | null>(null);

  const [prescriptions, setPrescriptions] = useState([
    { name: 'Amlodipine 5mg Tablet', sig: '1 Tab Daily in Morning', duration: '30 Days', route: 'Oral' },
    { name: 'Metformin 500mg Tablet', sig: '1 Tab Twice Daily with Meals', duration: '30 Days', route: 'Oral' },
  ]);

  const testContraindication = () => {
    setAllergyWarning('CONTRAINDICATION DETECTED: Patient Johnathan Miller has a documented severe anaphylactic allergy to Penicillins. "Amoxicillin 500mg" was BLOCKED by the safety engine.');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.3fr', gap: '28px', height: '100%' }}>
      {/* Left: SOAP Clinical Documentation Desk */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="clay-icon-bubble" style={{ color: '#4f46e5' }}>
              <Stethoscope size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Clinician Consultation Desk
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Patient: Johnathan Miller (UHID: MED-9920841)</span>
            </div>
          </div>

          <span className="clay-badge clay-badge-lavender">
            Cardiology OPD
          </span>
        </div>

        {/* SOAP Tabs */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {[
            { id: 'S', label: 'Subjective (History)' },
            { id: 'O', label: 'Objective (Vitals/Exam)' },
            { id: 'A', label: 'Assessment (ICD-10)' },
            { id: 'P', label: 'Plan & Orders' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSoapSection(tab.id as any)}
              style={{
                flex: 1,
                padding: '8px 4px',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 700,
                background: soapSection === tab.id ? '#4f46e5' : '#f1f5f9',
                color: soapSection === tab.id ? '#ffffff' : '#64748b',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SOAP Section Editor Preview */}
        <div className="clay-inset-well" style={{ flex: 1, overflowY: 'auto', background: '#f8fafc', padding: '14px' }}>
          {soapSection === 'S' && (
            <div>
              <strong style={{ fontSize: '0.8rem', color: '#4f46e5', display: 'block', marginBottom: '6px' }}>
                Chief Complaint & History of Present Illness:
              </strong>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155', lineHeight: 1.5 }}>
                Patient presents for 3-month routine follow-up of hypertension and diabetes. Complains of mild morning fatigue. Denies chest pain, palpitation, orthopnea, or ankle swelling.
              </p>
            </div>
          )}

          {soapSection === 'O' && (
            <div>
              <strong style={{ fontSize: '0.8rem', color: '#4f46e5', display: 'block', marginBottom: '6px' }}>
                Physical Examination & Triage Measurements:
              </strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '0.8rem', color: '#334155' }}>
                <div>• BP: 128/82 mmHg (Right Arm)</div>
                <div>• Pulse: 74 BPM, Regular</div>
                <div>• BMI: 27.2 kg/m²</div>
                <div>• Chest: Clear, S1 S2 heard</div>
              </div>
            </div>
          )}

          {soapSection === 'A' && (
            <div>
              <strong style={{ fontSize: '0.8rem', color: '#4f46e5', display: 'block', marginBottom: '6px' }}>
                ICD-10 Diagnostic Classifications:
              </strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span><strong>I10</strong> — Essential (primary) Hypertension</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>Confirmed</span>
                </div>
                <div style={{ padding: '8px 10px', background: '#ffffff', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between' }}>
                  <span><strong>E11.9</strong> — Type 2 Diabetes Mellitus without complications</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>Stable</span>
                </div>
              </div>
            </div>
          )}

          {soapSection === 'P' && (
            <div>
              <strong style={{ fontSize: '0.8rem', color: '#4f46e5', display: 'block', marginBottom: '6px' }}>
                Clinical Care Plan:
              </strong>
              <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155', lineHeight: 1.5 }}>
                Continue current antihypertensive and hypoglycemic regimen. Order fasting lipid panel and HbA1c prior to next visit in 12 weeks. Maintain low-sodium Mediterranean diet.
              </p>
            </div>
          )}
        </div>

        {/* 1-Click Diagnostics Requisition */}
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Instant Diagnostic Requisition:
          </span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontWeight: 600, color: '#334155' }}>+ Lipid Profile</span>
            <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontWeight: 600, color: '#334155' }}>+ HbA1c Glycated</span>
            <span style={{ fontSize: '0.75rem', background: '#f1f5f9', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontWeight: 600, color: '#334155' }}>+ Resting 12-Lead ECG</span>
          </div>
        </div>
      </div>

      {/* Right: Electronic Prescriptions & Safety Engine */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="clay-icon-bubble" style={{ color: '#059669' }}>
              <Pill size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Electronic Prescription (e-Rx)
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Connected directly to Hospital Pharmacy</span>
            </div>
          </div>

          <button
            onClick={testContraindication}
            className="clay-badge clay-badge-pink"
            style={{ cursor: 'pointer', border: '1px solid #fca5a5' }}
            title="Click to simulate drug allergy safety check"
          >
            <AlertTriangle size={12} />
            Test Allergy Safety Check
          </button>
        </div>

        {/* Contraindication Trigger Alert */}
        {allergyWarning && (
          <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: '#fef2f2', border: '1px solid #fecaca', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <AlertTriangle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.8rem', color: '#991b1b', display: 'block' }}>
                DRUG-ALLERGY SAFETY INTERLOCK TRIGGERED
              </strong>
              <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#b91c1c', lineHeight: 1.4 }}>
                {allergyWarning}
              </p>
            </div>
          </div>
        )}

        {/* Prescribed Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
          {prescriptions.map((p, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>{p.name}</strong>
                <span style={{ fontSize: '0.78rem', color: '#475569', display: 'block', marginTop: '2px' }}>
                  {p.sig} · {p.route}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#3b5bdb', background: '#e0e7ff', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
                  {p.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dispatch Action */}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#64748b' }}>
            <ShieldCheck size={16} style={{ color: '#059669' }} />
            Digitally signed with Clinician Key #MD-4821
          </div>

          <button
            onClick={() => alert('Prescription electronically transmitted to Central Outpatient Pharmacy Counter.')}
            className="clay-button clay-button-primary"
            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
          >
            <Send size={15} />
            <span>Transmit to Pharmacy</span>
          </button>
        </div>
      </div>
    </div>
  );
};
