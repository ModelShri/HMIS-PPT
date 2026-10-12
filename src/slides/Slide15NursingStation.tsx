import React, { useState } from 'react';
import { 
  HeartPulse, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Activity, 
  CheckSquare, 
  Square,
  Thermometer
} from 'lucide-react';

interface MedDose {
  id: string;
  drug: string;
  dose: string;
  route: string;
  scheduledTime: string;
  status: 'Given' | 'Pending' | 'Due Now';
  nurseSigned?: string;
}

export const Slide15NursingStation: React.FC = () => {
  const [meds, setMeds] = useState<MedDose[]>([
    { id: '1', drug: 'Ceftriaxone IV', dose: '1g in 100mL NS', route: 'IV Infusion', scheduledTime: '08:00 AM', status: 'Given', nurseSigned: 'Nurse Sarah (08:04 AM)' },
    { id: '2', drug: 'Enoxaparin Sodium', dose: '40mg (0.4mL)', route: 'Subcutaneous', scheduledTime: '10:00 AM', status: 'Given', nurseSigned: 'Nurse Sarah (10:02 AM)' },
    { id: '3', drug: 'Paracetamol IV', dose: '1000mg / 100mL', route: 'IV Infusion', scheduledTime: '02:00 PM', status: 'Due Now' },
    { id: '4', drug: 'Pantoprazole', dose: '40mg Tablet', route: 'Oral', scheduledTime: '08:00 PM', status: 'Pending' },
  ]);

  const toggleAdminister = (id: string) => {
    setMeds(meds.map(m => {
      if (m.id === id) {
        return m.status === 'Given' 
          ? { ...m, status: 'Pending', nurseSigned: undefined }
          : { ...m, status: 'Given', nurseSigned: 'Nurse Elena (Just Now)' };
      }
      return m;
    }));
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '28px', height: '100%' }}>
      {/* Left: e-MAR Electronic Medication Administration Record */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="clay-icon-bubble" style={{ color: '#e11d48' }}>
              <HeartPulse size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Bedside e-MAR Administration
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Patient: David Miller · Bed 302 Deluxe · Floor 3</span>
            </div>
          </div>

          <span className="clay-badge clay-badge-mint">
            Barcode Validated
          </span>
        </div>

        {/* 5 Rights Rule Banner */}
        <div style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <ShieldCheck size={18} style={{ color: '#059669', flexShrink: 0 }} />
          <span style={{ fontSize: '0.76rem', color: '#334155' }}>
            <strong>5 Rights Safeguard:</strong> Right Patient · Right Drug · Right Dose · Right Route · Right Time
          </span>
        </div>

        {/* Medication Schedule List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
          {meds.map(m => (
            <div
              key={m.id}
              onClick={() => toggleAdminister(m.id)}
              style={{
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                background: m.status === 'Given' ? '#f0fdf4' : m.status === 'Due Now' ? '#fff7ed' : '#ffffff',
                border: m.status === 'Given' ? '1px solid #86efac' : m.status === 'Due Now' ? '1px solid #fdba74' : '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ color: m.status === 'Given' ? '#16a34a' : '#94a3b8' }}>
                  {m.status === 'Given' ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>{m.drug}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>
                    {m.dose} · {m.route}
                  </span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-pill)',
                  background: m.status === 'Given' ? '#dcfce7' : m.status === 'Due Now' ? '#fed7aa' : '#f1f5f9',
                  color: m.status === 'Given' ? '#15803d' : m.status === 'Due Now' ? '#c2410c' : '#64748b',
                }}>
                  {m.scheduledTime} · {m.status}
                </span>
                {m.nurseSigned && (
                  <span style={{ display: 'block', fontSize: '0.68rem', color: '#059669', marginTop: '2px' }}>
                    ✓ {m.nurseSigned}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
          Click any medication dose above to simulate digital nurse administration check-off.
        </span>
      </div>

      {/* Right: Dynamic Vitals Monitoring & Early Warning Score (EWS) */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>
              Bedside Monitoring
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
              Vitals & EWS Alert Score
            </h3>
          </div>

          <div className="clay-badge clay-badge-mint">
            EWS Score: 0 (Normal)
          </div>
        </div>

        {/* 4 Vital Signs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <div className="clay-inset-well" style={{ padding: '12px' }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Activity size={14} style={{ color: '#3b5bdb' }} /> Blood Pressure
            </span>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>120 / 78 <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>mmHg</span></div>
            <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>Normal</span>
          </div>

          <div className="clay-inset-well" style={{ padding: '12px' }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <HeartPulse size={14} style={{ color: '#e11d48' }} /> Pulse / Heart Rate
            </span>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>72 <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>BPM</span></div>
            <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>Regular Sinus</span>
          </div>

          <div className="clay-inset-well" style={{ padding: '12px' }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Activity size={14} style={{ color: '#0284c7' }} /> SpO2 Oxygen
            </span>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>98 <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>%</span></div>
            <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>On Room Air</span>
          </div>

          <div className="clay-inset-well" style={{ padding: '12px' }}>
            <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Thermometer size={14} style={{ color: '#ea580c' }} /> Temperature
            </span>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>98.6 <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>°F</span></div>
            <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>Normothermic</span>
          </div>
        </div>

        {/* Nurse Shift Handover Checklist */}
        <div style={{ marginTop: 'auto', padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
          <strong style={{ fontSize: '0.78rem', color: '#1e293b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Shift Handover Endorsement (SBAR Format):
          </strong>
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#475569', lineHeight: 1.4 }}>
            Post-op Day 1. Surgical wound dry and intact. Urinary catheter removed at 06:00 AM. Tolerating oral liquids. IV cannula patent in left forearm.
          </p>
        </div>
      </div>
    </div>
  );
};
