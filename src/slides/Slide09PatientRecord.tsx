import React, { useState } from 'react';
import { 
  User, 
  AlertTriangle, 
  Heart, 
  Activity, 
  FileText, 
  Pill, 
  FlaskConical, 
  Calendar,
  ShieldCheck,
  Phone
} from 'lucide-react';

export const Slide09PatientRecord: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'vitals' | 'labs' | 'meds'>('timeline');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', height: '100%' }}>
      {/* Left: Patient Demographic Card & Allergies */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '2px solid #e2e8f0', paddingBottom: '14px' }}>
          <div className="clay-icon-bubble clay-icon-bubble-lg" style={{ background: '#dbeafe', color: '#1d4ed8', border: '2px solid #3b82f6' }}>
            <User size={30} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Johnathan E. Miller
              </h3>
              <span style={{ fontSize: '0.72rem', padding: '3px 8px', borderRadius: 'var(--radius-pill)', background: '#dcfce7', color: '#15803d', border: '1.5px solid #4ade80', fontWeight: 800 }}>
                Active EHR
              </span>
            </div>
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#2563eb' }}>
              UHID: MED-9920841 • /Patient/Search
            </span>
            <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '2px', fontWeight: 600 }}>
              54 Yrs • Male • Blood: O+ • DOB: 14-Aug-1972
            </div>
          </div>
        </div>

        {/* High-Alert Allergy Warnings */}
        <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: '#fef2f2', border: '1px solid #fecaca', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <AlertTriangle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ fontSize: '0.82rem', color: '#991b1b', display: 'block' }}>
              CRITICAL DOCUMENTED ALLERGIES:
            </strong>
            <div style={{ display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#fee2e2', color: '#b91c1c', padding: '3px 8px', borderRadius: 'var(--radius-pill)', border: '1px solid #fca5a5' }}>
                Penicillin (Anaphylaxis)
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#fee2e2', color: '#b91c1c', padding: '3px 8px', borderRadius: 'var(--radius-pill)', border: '1px solid #fca5a5' }}>
                Ibuprofen / NSAIDs (Bronchospasm)
              </span>
            </div>
          </div>
        </div>

        {/* Patient Key Demographics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          <div className="clay-inset-well" style={{ padding: '10px' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>Insurance / TPA</span>
            <strong style={{ fontSize: '0.85rem', color: '#1e293b' }}>BlueShield Corporate (Pre-Auth: $15,000)</strong>
          </div>
          <div className="clay-inset-well" style={{ padding: '10px' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>Emergency Contact</span>
            <span style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Phone size={12} /> Clara Miller (Wife)
            </span>
          </div>
        </div>

        {/* Chronic Conditions */}
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            Chronic Disease Registries:
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ fontSize: '0.76rem', background: '#f1f5f9', color: '#334155', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>
              Type 2 Diabetes (E11.9)
            </span>
            <span style={{ fontSize: '0.76rem', background: '#f1f5f9', color: '#334155', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>
              Essential Hypertension (I10)
            </span>
          </div>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#64748b' }}>
          <ShieldCheck size={14} style={{ color: '#059669' }} />
          National Patient Identity linked across all 4 branch campuses.
        </div>
      </div>

      {/* Right: Interactive Longitudinal Electronic Health Record (EHR) */}
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
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
          {[
            { id: 'timeline', label: 'Clinical Timeline', icon: Calendar },
            { id: 'vitals', label: 'Vitals & Charting', icon: Heart },
            { id: 'labs', label: 'Lab Reports', icon: FlaskConical },
            { id: 'meds', label: 'Active Medications', icon: Pill },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: isActive ? '2px solid #312e81' : '1.5px solid #cbd5e1',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  background: isActive ? '#4f46e5' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  transition: 'all 0.15s ease',
                  boxShadow: '0 2px 4px rgba(100, 116, 139, 0.08)'
                }}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {activeTab === 'timeline' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '12px', padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
                <div style={{ width: '8px', borderRadius: '4px', background: '#4f46e5', flexShrink: 0 }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>IPD Surgical Admission — Laparoscopic Appendectomy</strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>12-Oct-2026</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#475569' }}>
                    Attending: Dr. Alan Grant, MS. Ward: Surgical Deluxe Bed 302. Uneventful recovery. Full discharge summary signed (/Patient/DischargeSummary).
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
                <div style={{ width: '8px', borderRadius: '4px', background: '#16a34a', flexShrink: 0 }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>OPD Cardiology Follow-Up Visit (/Patient/OP)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>28-Aug-2026</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#475569' }}>
                    Attending: Dr. Sarah Lin, MD. ECG Normal Sinus Rhythm. Blood Pressure well controlled on Ramipril 5mg daily.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
                <div style={{ width: '8px', borderRadius: '4px', background: '#f59e0b', flexShrink: 0 }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>Comprehensive Annual Health Checkup</strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>15-Jan-2026</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#475569' }}>
                    Lipid panel elevated (Total Chol: 220 mg/dL). Chest X-Ray clear. Diet counseling initiated.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vitals' && (
            <div className="vitals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <div className="clay-inset-well">
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Blood Pressure (Sitting)</span>
                <div style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)', fontWeight: 800, color: '#1e293b', marginTop: '4px' }}>128 / 82 <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>mmHg</span></div>
                <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>Normal Range</span>
              </div>
              <div className="clay-inset-well">
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Heart Rate (Resting)</span>
                <div style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)', fontWeight: 800, color: '#e11d48', marginTop: '4px' }}>74 <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>BPM</span></div>
                <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>Regular Pulse</span>
              </div>
              <div className="clay-inset-well">
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Oxygen Saturation (SpO2)</span>
                <div style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)', fontWeight: 800, color: '#0284c7', marginTop: '4px' }}>99 <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>%</span></div>
                <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>Room Air</span>
              </div>
              <div className="clay-inset-well">
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Body Temperature</span>
                <div style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)', fontWeight: 800, color: '#ea580c', marginTop: '4px' }}>98.4 <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>°F</span></div>
                <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>Afebrile</span>
              </div>
            </div>
          )}

          {activeTab === 'labs' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                <div><strong>HbA1c (Glycated Hemoglobin)</strong> <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Ref: &lt; 5.7%</span></div>
                <div style={{ textAlign: 'right' }}><strong style={{ color: '#d97706' }}>6.4%</strong> <span style={{ fontSize: '0.7rem', color: '#d97706', display: 'block', fontWeight: 700 }}>BORDERLINE</span></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                <div><strong>Serum Creatinine</strong> <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Ref: 0.7 - 1.3 mg/dL</span></div>
                <div style={{ textAlign: 'right' }}><strong style={{ color: '#10b981' }}>0.92 mg/dL</strong> <span style={{ fontSize: '0.7rem', color: '#10b981', display: 'block', fontWeight: 700 }}>NORMAL</span></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}>
                <div><strong>Total Cholesterol</strong> <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>Ref: &lt; 200 mg/dL</span></div>
                <div style={{ textAlign: 'right' }}><strong style={{ color: '#dc2626' }}>218 mg/dL</strong> <span style={{ fontSize: '0.7rem', color: '#dc2626', display: 'block', fontWeight: 700 }}>HIGH</span></div>
              </div>
            </div>
          )}

          {activeTab === 'meds' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ padding: '10px 14px', background: '#f0fdf4', borderRadius: 'var(--radius-sm)', border: '1px solid #bbf7d0', fontSize: '0.85rem' }}>
                <strong style={{ color: '#166534' }}>Ramipril 5mg Tablet</strong>
                <span style={{ fontSize: '0.76rem', color: '#15803d', display: 'block' }}>1 tab once daily in morning for Hypertension (Last Refilled: 3 days ago)</span>
              </div>
              <div style={{ padding: '10px 14px', background: '#f0fdf4', borderRadius: 'var(--radius-sm)', border: '1px solid #bbf7d0', fontSize: '0.85rem' }}>
                <strong style={{ color: '#166534' }}>Metformin 500mg ER Tablet</strong>
                <span style={{ fontSize: '0.76rem', color: '#15803d', display: 'block' }}>1 tab twice daily with meals for Glycemic Control</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
