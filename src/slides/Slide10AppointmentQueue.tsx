import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  Volume2, 
  ArrowRight, 
  Tv, 
  CheckCircle2, 
  UserCheck 
} from 'lucide-react';

interface QueueToken {
  token: string;
  patientName: string;
  doctor: string;
  specialty: string;
  room: string;
  status: 'In Consultation' | 'Next in Line' | 'Waiting';
  waitTime: string;
}

export const Slide10AppointmentQueue: React.FC = () => {
  const [tokens] = useState<QueueToken[]>([
    { token: 'A-101', patientName: 'Robert Langdon', doctor: 'Dr. Sarah Lin', specialty: 'Cardiology', room: 'Room 102', status: 'In Consultation', waitTime: 'Current' },
    { token: 'A-102', patientName: 'Maria Santos', doctor: 'Dr. Sarah Lin', specialty: 'Cardiology', room: 'Room 102', status: 'Next in Line', waitTime: '4 mins' },
    { token: 'A-103', patientName: 'David Chen', doctor: 'Dr. Sarah Lin', specialty: 'Cardiology', room: 'Room 102', status: 'Waiting', waitTime: '18 mins' },
    { token: 'B-205', patientName: 'Emily Watson', doctor: 'Dr. Marcus Vance', specialty: 'Orthopedics', room: 'Room 204', status: 'In Consultation', waitTime: 'Current' },
    { token: 'B-206', patientName: 'Ahmed Al-Mansoor', doctor: 'Dr. Marcus Vance', specialty: 'Orthopedics', room: 'Room 204', status: 'Next in Line', waitTime: '6 mins' },
  ]);

  const [calledMessage, setCalledMessage] = useState<string | null>(null);

  const simulateCallNext = () => {
    setCalledMessage('Chime: "Token A-102, Maria Santos, please proceed to Cardiology Room 102"');
    setTimeout(() => {
      setCalledMessage(null);
    }, 4500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-module routes bar matching user's Appointment Razor sidebar */}
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
            Appointment Modules:
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Book Appointment (/Appointment/Book)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            View & Edit (/Appointment/Index)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Appointment Calendar (/Appointment/Calendar)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#eff6ff', color: '#2563eb', border: '1.5px solid #60a5fa' }}>
            Queue Management (/Patient/Queue)
          </span>
        </div>

        <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ecfdf5', color: '#065f46', border: '1.5px solid #34d399' }}>
          SMS & WhatsApp Chime Active
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left: Queue Management Console with High-Contrast Borders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Live OPD Department Token Queue
              </h4>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                Cardiology & Orthopedics Outpatient Consultation Desk
              </span>
            </div>

            <button
              type="button"
              onClick={simulateCallNext}
              className="clay-button clay-button-primary"
              style={{ padding: '8px 16px', fontSize: '0.82rem', border: '1.5px solid #312e81' }}
            >
              <Volume2 size={16} />
              <span>Call Next Token</span>
            </button>
          </div>

          {calledMessage && (
            <div style={{ padding: '10px 14px', background: '#dbeafe', borderRadius: 'var(--radius-sm)', border: '2px solid #3b82f6', color: '#1e40af', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Volume2 size={16} />
              <span>{calledMessage}</span>
            </div>
          )}

          {/* Tokens List with High-Contrast Distinct Borders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', flex: 1, paddingRight: '4px' }}>
            {tokens.map((t) => {
              const isConsulting = t.status === 'In Consultation';
              const isNext = t.status === 'Next in Line';

              return (
                <div
                  key={t.token}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: isConsulting ? '#f0fdf4' : isNext ? '#eff6ff' : '#ffffff',
                    border: isConsulting ? '2.5px solid #16a34a' : isNext ? '2.5px solid #2563eb' : '2px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: isConsulting ? '0 4px 12px rgba(22, 163, 74, 0.15)' : '0 2px 6px rgba(100, 116, 139, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: isConsulting ? '#16a34a' : '#2563eb',
                      background: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      border: `1.5px solid ${isConsulting ? '#86efac' : '#93c5fd'}`,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                    }}>
                      {t.token}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#0f172a', fontWeight: 800 }}>
                        {t.patientName}
                      </h4>
                      <span style={{ fontSize: '0.74rem', color: '#475569', fontWeight: 600 }}>
                        {t.doctor} • {t.room}
                      </span>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-pill)',
                      background: isConsulting ? '#dcfce7' : isNext ? '#dbeafe' : '#f1f5f9',
                      color: isConsulting ? '#15803d' : isNext ? '#1d4ed8' : '#475569',
                      border: isConsulting ? '1px solid #4ade80' : isNext ? '1px solid #60a5fa' : '1px solid #cbd5e1',
                    }}>
                      {t.status}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.72rem', color: '#64748b', marginTop: '2px', fontWeight: 600 }}>
                      Wait: {t.waitTime}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature summary with High-Contrast Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>Avg Doctor Consultation</span>
              <strong style={{ fontSize: '0.95rem', color: '#1e293b', display: 'block', marginTop: '2px' }}>11.4 mins</strong>
            </div>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>Waiting in OPD Lounge</span>
              <strong style={{ fontSize: '0.95rem', color: '#059669', display: 'block', marginTop: '2px' }}>18 Patients</strong>
            </div>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>Roster Schedule Delay</span>
              <strong style={{ fontSize: '0.95rem', color: '#2563eb', display: 'block', marginTop: '2px' }}>+4 mins (Normal)</strong>
            </div>
          </div>
        </div>

        {/* Right: Waiting Room Digital TV Display Simulator with Dark Border */}
        <div 
          className="clay-card" 
          style={{ 
            padding: '20px', 
            background: '#0f172a', 
            color: '#ffffff', 
            border: '2.5px solid #475569',
            display: 'flex', 
            flexDirection: 'column', 
            gap: '14px', 
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.4)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Tv size={18} style={{ color: '#38bdf8' }} />
              <span style={{ fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.05em' }}>
                WAITING LOUNGE DISPLAY
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              LIVE • FLOOR 1 OPD
            </div>
          </div>

          {/* Big Currently Called Token */}
          <div style={{ background: 'rgba(59, 130, 246, 0.15)', border: '1.5px solid rgba(59, 130, 246, 0.5)', borderRadius: 'var(--radius-lg)', padding: '18px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              NOW CONSULTING
            </span>
            <div style={{ fontSize: '3rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, margin: '6px 0' }}>
              A-101
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#93c5fd' }}>
              Room 102 • Dr. Sarah Lin (Cardiology)
            </div>
          </div>

          {/* Up Next Mini Table */}
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Next Preparing To Enter:
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', fontSize: '0.82rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#38bdf8' }}>A-102</span>
                <span>Maria Santos</span>
                <span style={{ color: '#4ade80', fontWeight: 700 }}>Next</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', fontSize: '0.82rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#38bdf8' }}>B-205</span>
                <span>Emily Watson</span>
                <span style={{ color: '#4ade80', fontWeight: 700 }}>Room 204</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '10px' }}>
            Automated SMS & WhatsApp notification triggered when patient is 2 tokens away.
          </div>
        </div>
      </div>
    </div>
  );
};
