import React, { useState } from 'react';
import { 
  FlaskConical, 
  Barcode, 
  Cpu, 
  AlertTriangle, 
  CheckCircle, 
  ShieldCheck, 
  FileCheck,
  Bell
} from 'lucide-react';

export const Slide16LaboratoryLIS: React.FC = () => {
  const [criticalAlert, setCriticalAlert] = useState(false);

  const testResults = [
    { param: 'Hemoglobin (Hb)', result: '13.8', unit: 'g/dL', refRange: '13.0 - 17.0', flag: 'NORMAL', color: '#10b981' },
    { param: 'Total Leukocyte Count (WBC)', result: '8,400', unit: '/mcL', refRange: '4,000 - 11,000', flag: 'NORMAL', color: '#10b981' },
    { param: 'Platelet Count', result: '240,000', unit: '/mcL', refRange: '150,000 - 450,000', flag: 'NORMAL', color: '#10b981' },
    { param: 'Serum Potassium (K+)', result: criticalAlert ? '6.8' : '4.2', unit: 'mmol/L', refRange: '3.5 - 5.0', flag: criticalAlert ? 'PANIC HIGH' : 'NORMAL', color: criticalAlert ? '#dc2626' : '#10b981' },
    { param: 'Serum Creatinine', result: '0.94', unit: 'mg/dL', refRange: '0.70 - 1.30', flag: 'NORMAL', color: '#10b981' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '28px', height: '100%' }}>
      {/* Left: Specimen Journey & Analyzers */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="clay-icon-bubble" style={{ color: '#7c3aed' }}>
              <FlaskConical size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Laboratory Information System (LIS)
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Automated Analyzer Interface & Phlebotomy</span>
            </div>
          </div>

          <button
            onClick={() => setCriticalAlert(!criticalAlert)}
            className="clay-badge clay-badge-pink"
            style={{ cursor: 'pointer', border: '1px solid #fca5a5' }}
          >
            <AlertTriangle size={12} />
            {criticalAlert ? 'Reset Normal' : 'Simulate Panic Lab Value'}
          </button>
        </div>

        {/* Critical Panic Value Alert Box */}
        {criticalAlert && (
          <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: '#fef2f2', border: '1px solid #fecaca', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <Bell size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.82rem', color: '#991b1b', display: 'block' }}>
                CRITICAL PANIC VALUE ALERT TRIGGERED:
              </strong>
              <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#b91c1c', lineHeight: 1.4 }}>
                Serum Potassium is 6.8 mmol/L (Normal 3.5-5.0). Automated urgent alert dispatched to Attending Physician phone & Nursing Station.
              </p>
            </div>
          </div>
        )}

        {/* Specimen Lifecycle 5-Phase Steps */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
          {[
            { step: '1. Order', desc: 'Doctor e-Requisition' },
            { step: '2. Barcode', desc: 'Phlebotomy Labeling' },
            { step: '3. Analyze', desc: 'Bidirectional Sync' },
            { step: '4. Validate', desc: 'Reference Check' },
            { step: '5. Signed', desc: 'Instant EHR Push' },
          ].map((st, i) => (
            <div key={i} style={{ textAlign: 'center', flex: 1 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7c3aed', display: 'block' }}>{st.step}</span>
              <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{st.desc}</span>
            </div>
          ))}
        </div>

        {/* Sample Analyzer Results Table */}
        <div style={{ border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', overflow: 'hidden', flex: 1 }}>
          <div style={{ display: 'flex', background: '#f8fafc', padding: '8px 12px', borderBottom: '1px solid #e2e8f0', fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            <div style={{ flex: 2 }}>Test Parameter</div>
            <div style={{ flex: 1 }}>Observed</div>
            <div style={{ flex: 1.2 }}>Reference Range</div>
            <div style={{ flex: 1 }}>Status Flag</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {testResults.map((t, idx) => (
              <div key={idx} style={{ display: 'flex', padding: '10px 12px', borderBottom: idx < testResults.length - 1 ? '1px solid #f1f5f9' : 'none', fontSize: '0.8rem', alignItems: 'center' }}>
                <div style={{ flex: 2, fontWeight: 600, color: '#1e293b' }}>{t.param}</div>
                <div style={{ flex: 1, fontWeight: 700, color: t.color }}>{t.result} {t.unit}</div>
                <div style={{ flex: 1.2, color: '#64748b', fontSize: '0.75rem' }}>{t.refRange}</div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: t.color, background: `${t.color}15`, padding: '2px 8px', borderRadius: 'var(--radius-pill)', border: `1px solid ${t.color}40` }}>
                    {t.flag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
          <span>Analyzer: Beckman Coulter AU5800 (Bidirectional Interface)</span>
          <span style={{ color: '#059669', fontWeight: 600 }}>✓ Digitally Signed by Pathologist</span>
        </div>
      </div>

      {/* Right: Barcode & Phlebotomy Specimen Traceability */}
      <div className="clay-card clay-card-lavender" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: 800 }}>
          Specimen Barcode & Chain of Custody
        </h4>

        {/* Visual Barcode Label Card */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '18px', boxShadow: 'var(--clay-shadow-sm)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7c3aed' }}>METRO HOSPITAL LIS</span>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>EDTA Whole Blood (Purple Top)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Barcode size={42} style={{ color: '#1e293b' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>
                *LAB-9920841-K*
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                David Miller · M / 54Y · Bed 302
              </span>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b' }}>
            <span>Collected: 07:45 AM (Nurse Sarah)</span>
            <span>Received LIS: 08:02 AM</span>
          </div>
        </div>

        {/* Security and Quality Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle size={16} style={{ color: '#059669', flexShrink: 0 }} />
            <span>Zero manual entry errors via direct instrument RS232/TCP interface</span>
          </div>
          <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle size={16} style={{ color: '#059669', flexShrink: 0 }} />
            <span>Automated delta check compares values with patient past tests</span>
          </div>
          <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle size={16} style={{ color: '#059669', flexShrink: 0 }} />
            <span>Results instantly available in Doctor OPD desk & mobile EHR</span>
          </div>
        </div>
      </div>
    </div>
  );
};
