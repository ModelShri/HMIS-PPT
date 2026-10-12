import React, { useState } from 'react';
import { 
  Flame, 
  AlertOctagon, 
  ShieldAlert, 
  Activity, 
  Bell, 
  Bed, 
  Clock, 
  CheckCircle2,
  Syringe,
  Ambulance
} from 'lucide-react';

interface TriageLevel {
  level: string;
  name: string;
  acuity: string;
  targetTime: string;
  color: string;
  bgColor: string;
  borderColor: string;
  criteria: string[];
  immediateAction: string;
  autoEscalation: string;
}

export const Slide11EmergencyTriage: React.FC = () => {
  const triageLevels: TriageLevel[] = [
    {
      level: 'Level 1',
      name: 'Resuscitation',
      acuity: 'Immediate Life Threat',
      targetTime: '0 mins (Immediate)',
      color: '#dc2626',
      bgColor: '#fef2f2',
      borderColor: '#f87171',
      criteria: ['Cardiac / Respiratory Arrest', 'Severe Polytrauma with Shock', 'Unresponsive / GCS < 8', 'Complete Airway Obstruction'],
      immediateAction: 'Direct transfer to Trauma Resuscitation Bay. Crash cart opened. Anesthesiologist & Trauma team paged.',
      autoEscalation: 'Immediate Code Blue / Trauma Alert auto-sent to ICU intensivist and surgical on-call.'
    },
    {
      level: 'Level 2',
      name: 'Emergent',
      acuity: 'Imminent Danger / Severe Pain',
      targetTime: '< 10 minutes',
      color: '#ea580c',
      bgColor: '#fff7ed',
      borderColor: '#fb923c',
      criteria: ['Acute Chest Pain (Suspected STEMI)', 'Stroke Symptoms within Window', 'Severe Respiratory Distress', 'Severe Sepsis with Hypotension'],
      immediateAction: 'Stat 12-lead ECG completed within 5 minutes. IV access established. Stat troponin and cardiac markers sent.',
      autoEscalation: 'Cath Lab and Stroke Neurology team receive automatic high-priority SMS notifications.'
    },
    {
      level: 'Level 3',
      name: 'Urgent',
      acuity: 'Potentially Serious',
      targetTime: '< 30 minutes',
      color: '#d97706',
      bgColor: '#fffbeb',
      borderColor: '#f59e0b',
      criteria: ['Moderate Abdominal Pain with Vomiting', 'Closed Long-Bone Fractures', 'Moderate Dehydration', 'High Fever in Vulnerable Groups'],
      immediateAction: 'Placed in ED Observation cubicle. Basic metabolic panel and targeted X-rays requisitioned.',
      autoEscalation: 'Assigned to ED Medical Officer queue with 20-minute vital reassessment timer.'
    },
    {
      level: 'Level 4',
      name: 'Less Urgent / Non-Urgent',
      acuity: 'Stable / Minor Ailment',
      targetTime: '< 60 minutes',
      color: '#16a34a',
      bgColor: '#f0fdf4',
      borderColor: '#4ade80',
      criteria: ['Minor Lacerations Requiring Suture', 'Mild Sprains & Strains', 'Routine Prescription Refill', 'Mild Upper Respiratory Symptoms'],
      immediateAction: 'Directed to ED Fast-Track or urgent care ambulatory zone. Vital signs re-checked.',
      autoEscalation: 'Handled by Urgent Care nurse practitioner or ambulatory ED physician.'
    }
  ];

  const [selectedTriage, setSelectedTriage] = useState<TriageLevel>(triageLevels[0]);

  const triageModules = [
    { name: 'New Assessment', route: '/Patient/Triage' },
    { name: 'Triage List', route: '/Patient/TriageList' },
    { name: 'Queue Management', route: '/Patient/Queue' },
    { name: 'Ambulance Registry', route: '/Ambulance/Index' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-module routes bar matching user's Emergency & Triage Razor sidebar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        background: '#f8fafc',
        border: '2px solid #cbd5e1',
        borderRadius: 'var(--radius-pill)',
        padding: '6px 14px',
        boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', marginRight: '4px' }}>
            Emergency & Triage Modules:
          </span>
          {triageModules.map((m, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: '#ffffff',
                color: '#b91c1c',
                border: '1.5px solid #fca5a5'
              }}
            >
              {m.name} ({m.route})
            </span>
          ))}
        </div>

        <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#fee2e2', color: '#dc2626', border: '1.5px solid #f87171' }}>
          Trauma Rapid Fast-Track Active
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '22px', flex: 1 }}>
        {/* Left: Triage Level Selector with High-Contrast Borders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Acuity Protocol Selector (/Patient/Triage)
            </h4>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: 'var(--radius-pill)', background: '#fef2f2', color: '#b91c1c', border: '1px solid #fca5a5' }}>
              Canadian / ESI Triage Standard
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
            {triageLevels.map((tl) => {
              const isSelected = tl.level === selectedTriage.level;
              return (
                <div
                  key={tl.level}
                  onClick={() => setSelectedTriage(tl)}
                  style={{
                    padding: '12px 14px',
                    cursor: 'pointer',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? '#ffffff' : tl.bgColor,
                    border: isSelected ? `2.5px solid ${tl.color}` : '2px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease',
                    boxShadow: isSelected ? `0 4px 12px ${tl.color}33` : '0 2px 4px rgba(100, 116, 139, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: tl.color,
                        boxShadow: `0 0 8px ${tl.color}80`,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <strong style={{ fontSize: '0.92rem', color: '#0f172a', display: 'block' }}>
                        {tl.level}: {tl.name}
                      </strong>
                      <span style={{ fontSize: '0.74rem', color: '#475569', fontWeight: 600 }}>
                        {tl.acuity}
                      </span>
                    </div>
                  </div>

                  <span style={{ 
                    fontSize: '0.74rem', 
                    fontWeight: 800, 
                    color: tl.color, 
                    background: '#ffffff', 
                    padding: '3px 8px', 
                    borderRadius: 'var(--radius-pill)', 
                    border: `1.5px solid ${tl.borderColor}` 
                  }}>
                    {tl.targetTime}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ padding: '12px 14px', background: '#eff6ff', borderRadius: 'var(--radius-md)', border: '2px solid #93c5fd', marginTop: 'auto' }}>
            <strong style={{ fontSize: '0.82rem', color: '#1e40af', display: 'block', marginBottom: '2px' }}>
              Rapid 15-Second Trauma Bypass:
            </strong>
            <span style={{ fontSize: '0.76rem', color: '#1d4ed8', lineHeight: 1.45, fontWeight: 500 }}>
              In critical trauma resuscitations, HMIS generates an instant temporary "John Doe / Trauma ID" in 1 click, allowing immediate blood transfusions and surgical orders without waiting for KYC.
            </span>
          </div>
        </div>

        {/* Right: Selected Acuity Action Playbook with High-Contrast Borders */}
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
                  background: selectedTriage.bgColor, 
                  color: selectedTriage.color,
                  border: `2px solid ${selectedTriage.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <AlertOctagon size={26} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: selectedTriage.color, textTransform: 'uppercase' }}>
                  {selectedTriage.level} Protocol • Target: {selectedTriage.targetTime}
                </span>
                <h3 style={{ margin: '2px 0 0', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                  {selectedTriage.name}
                </h3>
              </div>
            </div>

            <div style={{ 
              padding: '4px 10px', 
              borderRadius: 'var(--radius-pill)', 
              background: selectedTriage.bgColor, 
              color: selectedTriage.color, 
              border: `2px solid ${selectedTriage.borderColor}`,
              fontSize: '0.75rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Clock size={13} />
              {selectedTriage.targetTime}
            </div>
          </div>

          {/* Clinical Criteria */}
          <div>
            <h5 style={{ margin: '0 0 8px', fontSize: '0.78rem', textTransform: 'uppercase', color: '#1e293b', letterSpacing: '0.04em', fontWeight: 800 }}>
              Physiological Criteria & Red Flags:
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {selectedTriage.criteria.map((cr, idx) => (
                <div key={idx} style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1.5px solid #cbd5e1', fontSize: '0.8rem', color: '#0f172a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: selectedTriage.color }} />
                  <span>{cr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Immediate Resuscitation Action */}
          <div style={{ padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <Syringe size={16} style={{ color: selectedTriage.color }} />
              <strong style={{ fontSize: '0.8rem', color: '#0f172a', textTransform: 'uppercase' }}>
                Immediate Clinical Playbook:
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155', lineHeight: 1.45, fontWeight: 500 }}>
              {selectedTriage.immediateAction}
            </p>
          </div>

          {/* Automated Alert Escalation with High-Contrast Border */}
          <div style={{ marginTop: 'auto', padding: '12px 14px', background: selectedTriage.bgColor, borderRadius: 'var(--radius-md)', border: `2px solid ${selectedTriage.borderColor}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <Bell size={16} style={{ color: selectedTriage.color }} />
              <strong style={{ fontSize: '0.76rem', color: selectedTriage.color, textTransform: 'uppercase' }}>
                Automated Hospital Escalation:
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#0f172a', fontWeight: 700 }}>
              {selectedTriage.autoEscalation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
