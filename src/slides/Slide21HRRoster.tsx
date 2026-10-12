import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  Award, 
  Calendar, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2,
  FileCheck,
  UserCheck,
  CreditCard,
  Briefcase
} from 'lucide-react';

export const Slide21HRRoster: React.FC = () => {
  const [selectedShift, setSelectedShift] = useState<'Morning' | 'Evening' | 'Night'>('Morning');

  const rosters = {
    Morning: [
      { name: 'Dr. Sarah Lin, MD', role: 'Attending Cardiologist', room: 'OPD Room 102', shift: '07:00 AM - 03:00 PM', attendance: 'Present (Biometric 06:54 AM)' },
      { name: 'Dr. Marcus Vance, MS', role: 'Orthopedic Surgeon', room: 'OT Room 3 & OPD', shift: '07:00 AM - 03:00 PM', attendance: 'Present (Biometric 06:58 AM)' },
      { name: 'Nurse Elena Rostova', role: 'ICU Charge Nurse', room: 'Floor 3 ICU', shift: '07:00 AM - 03:00 PM', attendance: 'Present (Biometric 06:49 AM)' },
      { name: 'Nurse James Miller', role: 'Emergency Triage Nurse', room: 'Ground Floor ER', shift: '07:00 AM - 03:00 PM', attendance: 'Present (Biometric 06:52 AM)' },
    ],
    Evening: [
      { name: 'Dr. Raymond Ortiz, MD', role: 'Radiology Consultant', room: 'Imaging CT/MRI', shift: '03:00 PM - 11:00 PM', attendance: 'Scheduled On-Duty' },
      { name: 'Dr. Alan Grant, MS', role: 'Emergency Surgical MO', room: 'ER Trauma Bay', shift: '03:00 PM - 11:00 PM', attendance: 'Scheduled On-Duty' },
      { name: 'Nurse Priya Sharma', role: 'Floor 2 Ward Nurse', room: 'General Ward B', shift: '03:00 PM - 11:00 PM', attendance: 'Scheduled On-Duty' },
    ],
    Night: [
      { name: 'Dr. Kevin Zhao, MD', role: 'Night Hospitalist', room: 'Whole Campus Cover', shift: '11:00 PM - 07:00 AM', attendance: 'On-Call Roster' },
      { name: 'Nurse David Kim', role: 'ICU Night Duty', room: 'Floor 3 ICU', shift: '11:00 PM - 07:00 AM', attendance: 'On-Call Roster' },
    ]
  };

  const currentRoster = rosters[selectedShift];

  const credentialAlerts = [
    { doctor: 'Dr. Sarah Lin, MD', credential: 'State Medical Council Reg #MD-9821', expiry: 'Renewal due in 42 Days', status: 'Renewal In Progress', color: '#d97706', bg: '#fef3c7', border: '#f59e0b' },
    { doctor: 'Dr. Marcus Vance, MS', credential: 'BLS / ACLS Critical Care Certification', expiry: 'Valid until Oct-2027', status: 'Compliant & Verified', color: '#16a34a', bg: '#dcfce7', border: '#4ade80' },
    { doctor: 'Dr. Alan Grant, MS', credential: 'Medical Malpractice Indemnity Insurance', expiry: 'Valid until Mar-2027', status: 'Compliant & Verified', color: '#16a34a', bg: '#dcfce7', border: '#4ade80' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-module routes bar matching user's HR & Employee Management sidebar */}
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
            HR & Employee Suite:
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Employee Directory (/HR/Employees)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Shift Planner (/HR/Shifts)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Attendance Register (/HR/Attendance)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Payroll & Slips (/HR/Payroll)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#eff6ff', color: '#2563eb', border: '1.5px solid #60a5fa' }}>
            Employee Portal & Loans (/HR/EmployeePortal)
          </span>
        </div>

        <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ecfdf5', color: '#065f46', border: '1.5px solid #34d399' }}>
          Biometric Fingerprint Sync Active
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left: 24/7 Clinical Shift Duty Roster with High-Contrast Borders */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="clay-icon-bubble" style={{ border: '2px solid #4f46e5', color: '#4f46e5', background: '#eef2ff' }}>
                <Users size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                  Clinical Shift Planner & Biometrics (/HR/Shifts)
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>24/7 Rotational Coverage & Biometric Attendance Sync</span>
              </div>
            </div>

            {/* Shift Selectors with High-Contrast Active Borders */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['Morning', 'Evening', 'Night'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedShift(s as any)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: selectedShift === s ? '2px solid #3730a3' : '1.5px solid #cbd5e1',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: selectedShift === s ? '#4f46e5' : '#ffffff',
                    color: selectedShift === s ? '#ffffff' : '#475569',
                    boxShadow: '0 2px 4px rgba(100, 116, 139, 0.08)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {s} Shift
                </button>
              ))}
            </div>
          </div>

          {/* Staff Table with High-Contrast Border */}
          <div style={{ border: '2px solid #cbd5e1', borderRadius: 'var(--radius-md)', overflow: 'hidden', flex: 1, background: '#ffffff' }}>
            <div style={{ 
              display: 'flex', 
              background: '#e2e8f0', 
              padding: '10px 14px', 
              borderBottom: '2px solid #cbd5e1', 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              color: '#1e293b', 
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              <div style={{ flex: 2 }}>Healthcare Professional</div>
              <div style={{ flex: 1.5 }}>Designation & Area</div>
              <div style={{ flex: 1.2 }}>Shift Timing</div>
              <div style={{ flex: 1.5 }}>Attendance Status</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {currentRoster.map((r, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    padding: '12px 14px', 
                    borderBottom: idx < currentRoster.length - 1 ? '1.5px solid #e2e8f0' : 'none', 
                    fontSize: '0.82rem', 
                    alignItems: 'center',
                    background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                  }}
                >
                  <div style={{ flex: 2, fontWeight: 700, color: '#0f172a' }}>{r.name}</div>
                  <div style={{ flex: 1.5, color: '#475569', fontSize: '0.78rem', fontWeight: 600 }}>{r.role} ({r.room})</div>
                  <div style={{ flex: 1.2, color: '#64748b', fontSize: '0.74rem', fontWeight: 600 }}>{r.shift}</div>
                  <div style={{ flex: 1.5 }}>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: 700, 
                      color: '#15803d', 
                      background: '#dcfce7', 
                      padding: '3px 8px', 
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid #4ade80'
                    }}>
                      {r.attendance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#475569', borderTop: '2px solid #e2e8f0', paddingTop: '10px', fontWeight: 600 }}>
            <span>Synced with Biometric Machine & Overtime Logs (/HR/Overtime)</span>
            <span style={{ color: '#059669', fontWeight: 700 }}>✓ Zero Ghost Attendance</span>
          </div>
        </div>

        {/* Right: Physician Credentialing & Licensing Expiry Tracker */}
        <div 
          className="clay-card clay-card-lavender" 
          style={{ 
            padding: '22px', 
            border: '2.5px solid #818cf8', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '14px',
            boxShadow: '0 8px 24px rgba(129, 140, 248, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: 800 }}>
                Doctor Credentialing & Licensing
              </h4>
              <span style={{ fontSize: '0.74rem', color: '#4338ca', fontWeight: 600 }}>
                Sub-modules: /HR/Documents & /HR/IdCards
              </span>
            </div>
            <span style={{ 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              padding: '3px 8px', 
              borderRadius: 'var(--radius-pill)', 
              background: '#dcfce7', 
              color: '#15803d', 
              border: '1.5px solid #4ade80' 
            }}>
              Accreditation Ready
            </span>
          </div>

          <p style={{ margin: 0, fontSize: '0.82rem', color: '#334155', lineHeight: 1.45, fontWeight: 500 }}>
            Automated monitoring of state medical registrations, degree verifications, ACLS validity, and clinical practice privileges with auto 60-day renewal warnings.
          </p>

          {/* Credentials Cards with High-Contrast Distinct Borders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
            {credentialAlerts.map((c, i) => (
              <div 
                key={i} 
                style={{ 
                  background: '#ffffff', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '14px', 
                  border: '2px solid #cbd5e1', 
                  boxShadow: '0 3px 8px rgba(100, 116, 139, 0.1)' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>{c.doctor}</strong>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    color: c.color, 
                    background: c.bg, 
                    padding: '3px 8px', 
                    borderRadius: 'var(--radius-pill)',
                    border: `1.5px solid ${c.border}`
                  }}>
                    {c.status}
                  </span>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#334155', display: 'block', marginTop: '4px', fontWeight: 600 }}>
                  {c.credential}
                </span>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '4px', fontWeight: 600 }}>
                  {c.expiry}
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: 'auto', 
            padding: '12px', 
            background: '#ffffff', 
            borderRadius: 'var(--radius-md)', 
            border: '2px solid #cbd5e1', 
            fontSize: '0.78rem', 
            color: '#3730a3', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)'
          }}>
            <FileCheck size={18} style={{ color: '#4f46e5', flexShrink: 0 }} />
            <span style={{ fontWeight: 600 }}>
              Automatic alert dispatched to Medical Director & HR when licensing expiry approaches.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
