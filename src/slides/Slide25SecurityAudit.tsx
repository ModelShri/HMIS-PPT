import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Search, 
  Key, 
  FileText, 
  CheckCircle2, 
  AlertOctagon,
  Eye
} from 'lucide-react';

export const Slide25SecurityAudit: React.FC = () => {
  const [filterAction, setFilterAction] = useState<string>('All');

  const auditEvents = [
    { timestamp: '10:42:15 AM', user: 'Dr. Sarah Lin (Cardio)', record: 'MED-9920841 (David Miller)', action: 'View EHR Chart', ip: '192.168.1.104', status: 'Authorized' },
    { timestamp: '10:43:02 AM', user: 'Dr. Sarah Lin (Cardio)', record: 'MED-9920841 (David Miller)', action: 'Prescribe Medication', ip: '192.168.1.104', status: 'Authorized' },
    { timestamp: '10:45:18 AM', user: 'Nurse Elena (ICU)', record: 'MED-9920841 (David Miller)', action: 'Administer e-MAR Dose', ip: '192.168.3.42', status: 'Authorized' },
    { timestamp: '10:48:33 AM', user: 'Cashier David (OPD-2)', record: 'MED-9931204 (Sophia Loren)', action: 'Collect Payment $120', ip: '192.168.1.12', status: 'Authorized' },
    { timestamp: '10:52:10 AM', user: 'Intern John Doe', record: 'MED-9944112 (VIP Case)', action: 'Unauthorized Chart View', ip: '192.168.2.88', status: 'BLOCKED & FLAGGED' },
  ];

  const filtered = filterAction === 'All' ? auditEvents : auditEvents.filter(a => a.action.includes(filterAction));

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '28px', height: '100%' }}>
      {/* Left: Immutable Live Audit Log Table */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="clay-icon-bubble" style={{ color: '#4f46e5' }}>
              <Lock size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Immutable Security Audit Log
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Tamper-Evident Forensic Healthcare Ledger</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {['All', 'View', 'Prescribe', 'Administer', 'Payment'].map((act) => (
              <button
                key={act}
                onClick={() => setFilterAction(act)}
                style={{
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  background: filterAction === act ? '#3b5bdb' : '#f1f5f9',
                  color: filterAction === act ? '#ffffff' : '#64748b',
                }}
              >
                {act}
              </button>
            ))}
          </div>
        </div>

        {/* Audit Log Table */}
        <div style={{ border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', overflow: 'hidden', flex: 1 }}>
          <div style={{ display: 'flex', background: '#f8fafc', padding: '8px 12px', borderBottom: '1px solid #e2e8f0', fontSize: '0.72rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            <div style={{ flex: 1 }}>Timestamp</div>
            <div style={{ flex: 1.6 }}>User Account</div>
            <div style={{ flex: 1.6 }}>Patient / Record</div>
            <div style={{ flex: 1.4 }}>Action</div>
            <div style={{ flex: 1 }}>Status</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {filtered.map((log, idx) => {
              const isBlocked = log.status.includes('BLOCKED');
              return (
                <div key={idx} style={{ display: 'flex', padding: '10px 12px', borderBottom: idx < filtered.length - 1 ? '1px solid #f1f5f9' : 'none', fontSize: '0.78rem', alignItems: 'center' }}>
                  <div style={{ flex: 1, fontFamily: 'var(--font-mono)', color: '#64748b', fontSize: '0.72rem' }}>{log.timestamp}</div>
                  <div style={{ flex: 1.6, fontWeight: 600, color: '#1e293b' }}>{log.user}</div>
                  <div style={{ flex: 1.6, color: '#475569', fontSize: '0.75rem' }}>{log.record}</div>
                  <div style={{ flex: 1.4, fontWeight: 600, color: '#0f172a' }}>{log.action}</div>
                  <div style={{ flex: 1 }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                      background: isBlocked ? '#fee2e2' : '#f0fdf4',
                      color: isBlocked ? '#dc2626' : '#15803d',
                      border: isBlocked ? '1px solid #fca5a5' : '1px solid #bbf7d0',
                    }}>
                      {log.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
          <span>Logs cannot be modified or deleted even by database administrators.</span>
          <span style={{ color: '#059669', fontWeight: 600 }}>✓ SHA-256 Checksum Chained</span>
        </div>
      </div>

      {/* Right: Defense in Depth Security Architecture */}
      <div className="clay-card clay-card-lavender" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: 800 }}>
          Defense-in-Depth Protection
        </h4>

        {/* 3 Core Security Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '14px', border: '1px solid #e2e8f0', boxShadow: 'var(--clay-shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4f46e5', marginBottom: '4px' }}>
              <ShieldCheck size={18} />
              <strong style={{ fontSize: '0.85rem' }}>Field-Level Data Encryption</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.78rem', color: '#475569', lineHeight: 1.4 }}>
              AES-256 encryption at rest for all diagnostic notes and patient personal identifiers (PII). TLS 1.3 encryption across all network sockets.
            </p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '14px', border: '1px solid #e2e8f0', boxShadow: 'var(--clay-shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#059669', marginBottom: '4px' }}>
              <Key size={18} />
              <strong style={{ fontSize: '0.85rem' }}>Zero-Trust Authorization</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.78rem', color: '#475569', lineHeight: 1.4 }}>
              Every API call verifies identity tokens, role privileges, and assigned branch scope independently without trusting client assumptions.
            </p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '14px', border: '1px solid #e2e8f0', boxShadow: 'var(--clay-shadow-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d97706', marginBottom: '4px' }}>
              <Eye size={18} />
              <strong style={{ fontSize: '0.85rem' }}>Automated Break-Glass Audits</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.78rem', color: '#475569', lineHeight: 1.4 }}>
              In critical emergency situations, clinicians can request emergency chart bypass ("Break-Glass"), which automatically notifies security leadership.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 'auto', padding: '12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', fontSize: '0.78rem', color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
          <span>Aligned with international healthcare data governance standards (HIPAA & GDPR principles).</span>
        </div>
      </div>
    </div>
  );
};
