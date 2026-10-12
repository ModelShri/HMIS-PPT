import React, { useState } from 'react';
import { 
  Sliders, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  Database, 
  Printer, 
  CheckCircle2, 
  ToggleLeft, 
  ToggleRight,
  Palette,
  Building2,
  GitBranch,
  Wrench
} from 'lucide-react';

export const Slide24AdminControl: React.FC = () => {
  const [policies, setPolicies] = useState({
    enforce2FA: true,
    strictFEFO: true,
    midnightRoomPosting: true,
    emergencyOrderBypass: true,
    watermarkRecords: false,
  });

  const togglePolicy = (key: keyof typeof policies) => {
    setPolicies({ ...policies, [key]: !policies[key] });
  };

  const services = [
    { name: 'Primary Relational Database (SQL Server / EF Core)', status: 'Online', latency: '2.4 ms', icon: Database, color: '#16a34a' },
    { name: 'ASP.NET Identity User Session Manager (/Sessions)', status: 'Authenticated', latency: '0.8 ms', icon: Cpu, color: '#16a34a' },
    { name: 'Multi-Branch Master Sync Engine (/Branch)', status: 'Connected', latency: '1.2 ms', icon: GitBranch, color: '#16a34a' },
    { name: 'Hospital Print & Barcode Spooler Engine', status: 'Ready (0 Queued)', latency: 'Active', icon: Printer, color: '#16a34a' },
  ];

  const adminModules = [
    { name: 'Admin Tools', route: '/AdminMasters/Index' },
    { name: 'Hospitals', route: '/Hospital/List' },
    { name: 'Branches', route: '/Branch/Index' },
    { name: 'Pharmacies', route: '/Pharmacy/Masters' },
    { name: 'Theme Designer', route: '/ThemeDesigner/Index' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-module routes bar matching user's Administration sidebar */}
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
            Administration & Governance:
          </span>
          {adminModules.map((m, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: '#ffffff',
                color: '#1e40af',
                border: '1.5px solid #93c5fd'
              }}
            >
              {m.name} ({m.route})
            </span>
          ))}
        </div>

        <span style={{ fontSize: '0.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ecfdf5', color: '#065f46', border: '1.5px solid #34d399' }}>
          SuperAdmin Console Active
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left: Real-Time System Heartbeat Diagnostics with High-Contrast Borders */}
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
                <Sliders size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                  Admin Tools & Service Telemetry (/AdminMasters)
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Live Microservice Health & Daemon Workers</span>
              </div>
            </div>

            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: 'var(--radius-pill)',
              background: '#dcfce7',
              color: '#15803d',
              border: '2px solid #4ade80'
            }}>
              All daemons active
            </span>
          </div>

          {/* Live Service Diagnostics List with High-Contrast Borders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: '#ffffff',
                    border: '2px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 4px rgba(100, 116, 139, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#e0e7ff', color: '#4338ca', border: '1.5px solid #818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={17} />
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.86rem', color: '#0f172a' }}>{srv.name}</strong>
                      <span style={{ fontSize: '0.74rem', color: '#64748b', display: 'block', fontWeight: 600 }}>Latency: {srv.latency}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: srv.color }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#16a34a' }}>{srv.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Concurrent Sessions Bar with High-Contrast Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>Clinician Logins</span>
              <strong style={{ fontSize: '1.05rem', color: '#0f172a', display: 'block', marginTop: '2px' }}>184 Doctors</strong>
            </div>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>Active Wards</span>
              <strong style={{ fontSize: '1.05rem', color: '#0f172a', display: 'block', marginTop: '2px' }}>92 Terminals</strong>
            </div>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>Daily Transactions</span>
              <strong style={{ fontSize: '1.05rem', color: '#16a34a', display: 'block', marginTop: '2px' }}>148,200 Ops</strong>
            </div>
          </div>
        </div>

        {/* Right: Global Parameter & Hospital Policy Switches */}
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
          <div>
            <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: 800 }}>
              Global Hospital Policies (/System/Settings)
            </h4>
            <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: '#475569', lineHeight: 1.4, fontWeight: 500 }}>
              Toggle institutional business rules across all hospital branches with instant real-time hot-reloading.
            </p>
          </div>

          {/* Policy Switches with High-Contrast Distinct Borders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            {[
              { key: 'enforce2FA', title: 'Mandatory Two-Factor Auth (2FA)', desc: 'Requires SMS/App OTP for external or remote access' },
              { key: 'strictFEFO', title: 'Strict Pharmacy FEFO Lock', desc: 'Prevents dispensing newer batches when older exist' },
              { key: 'midnightRoomPosting', title: 'Midnight Auto Room Rent Daemon', desc: 'Automatically bills inpatient room rates at 00:00 AM' },
              { key: 'emergencyOrderBypass', title: 'Emergency Diagnostic Fast-Bypass', desc: 'Allows trauma lab orders prior to financial billing' },
              { key: 'watermarkRecords', title: 'Confidential Watermark on Exports', desc: 'Imprints requesting user name and timestamp on PDFs' },
            ].map((item) => {
              // @ts-expect-error dynamic key
              const isEnabled = policies[item.key];
              return (
                <div
                  key={item.key}
                  onClick={() => togglePolicy(item.key as any)}
                  style={{
                    background: '#ffffff',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid #cbd5e1',
                    boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.82rem', color: '#0f172a', display: 'block' }}>{item.title}</strong>
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{item.desc}</span>
                  </div>

                  <div style={{ color: isEnabled ? '#4f46e5' : '#94a3b8' }}>
                    {isEnabled ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ borderTop: '2px solid #cbd5e1', paddingTop: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#3730a3', fontWeight: 600 }}>
            <ShieldCheck size={18} style={{ color: '#4f46e5', flexShrink: 0 }} />
            <span>Theme Designer active at /ThemeDesigner/Index with real-time CSS variable synchronization.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
