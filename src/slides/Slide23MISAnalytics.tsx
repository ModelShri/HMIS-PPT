import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Bed, 
  Coins, 
  Clock, 
  Calendar, 
  Layers, 
  FileText
} from 'lucide-react';

export const Slide23MISAnalytics: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'Today' | 'MTD' | 'YTD'>('MTD');

  const metrics = {
    Today: {
      occupancy: '86.4%',
      alos: '3.6 Days',
      grossRev: '₹4,82,000',
      opdFootfall: '640',
      labTAT: '34 Mins',
      netMargin: '22.4%'
    },
    MTD: {
      occupancy: '84.8%',
      alos: '3.8 Days',
      grossRev: '₹1,24,00,000',
      opdFootfall: '14,800',
      labTAT: '38 Mins',
      netMargin: '24.1%'
    },
    YTD: {
      occupancy: '83.2%',
      alos: '4.1 Days',
      grossRev: '₹14,60,00,000',
      opdFootfall: '1,82,000',
      labTAT: '41 Mins',
      netMargin: '23.8%'
    }
  };

  const curr = metrics[timeframe];

  const deptRevenue = [
    { name: 'Surgical Operating Theatres (/OT)', share: 38, amount: '₹47,12,000', color: '#4f46e5' },
    { name: 'Hospital Pharmacy Dispensing (/Pharmacy)', share: 24, amount: '₹29,76,000', color: '#d97706' },
    { name: 'Inpatient Ward Bed Tariffs (/Patient/IP)', share: 18, amount: '₹22,32,000', color: '#0284c7' },
    { name: 'Laboratory & Radiology Imaging (/Diagnostics)', share: 14, amount: '₹17,36,000', color: '#7c3aed' },
    { name: 'Outpatient Consultations (/Patient/OP)', share: 6, amount: '₹7,44,000', color: '#059669' },
  ];

  const misModules = [
    { name: 'User-Wise Report', route: '/Reports/UserWiseReport' },
    { name: 'Financial MIS', route: '/Reports/Financial' },
    { name: 'Executive MIS', route: '/Reports/Executive' },
    { name: 'Clinical MIS', route: '/Reports/Clinical' },
    { name: 'Operations MIS', route: '/Reports/Operations' },
    { name: 'Diagnostics MIS', route: '/Reports/Diagnostics' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-module routes bar matching user's Reports & MIS Razor sidebar */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', marginRight: '4px' }}>
            Reports & MIS Suite (/Reports/*):
          </span>
          {misModules.map((m, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: '#ffffff',
                color: '#1e40af',
                border: '1.5px solid #93c5fd',
                whiteSpace: 'nowrap'
              }}
            >
              {m.name}
            </span>
          ))}
        </div>

        <span style={{ 
          fontSize: '0.72rem', 
          fontWeight: 800, 
          padding: '3px 10px', 
          borderRadius: 'var(--radius-pill)', 
          background: '#ecfdf5', 
          color: '#065f46', 
          border: '1.5px solid #34d399',
          flexShrink: 0
        }}>
          Real-Time SQL Analytics Engine
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left: Real-Time Executive KPI Grid with High-Contrast Borders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Executive Cockpit & Live Operations
              </h4>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                Instant operational, clinical, and fiscal telemetry without heavy database locks
              </span>
            </div>

            {/* Timeframe Switcher */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['Today', 'MTD', 'YTD'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeframe(t as any)}
                  style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: timeframe === t ? '2px solid #312e81' : '1.5px solid #cbd5e1',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    background: timeframe === t ? '#4f46e5' : '#ffffff',
                    color: timeframe === t ? '#ffffff' : '#475569',
                    boxShadow: '0 2px 4px rgba(100, 116, 139, 0.08)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Core KPI Tiles with High-Contrast Distinct Colored Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            <div className="clay-card clay-card-lavender" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '14px', border: '2.5px solid #818cf8' }}>
              <div className="clay-icon-bubble" style={{ border: '2px solid #4f46e5', color: '#4f46e5' }}>
                <Bed size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#475569', textTransform: 'uppercase', fontWeight: 800 }}>Bed Occupancy Rate</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>{curr.occupancy}</div>
                <span style={{ fontSize: '0.7rem', color: '#15803d', fontWeight: 700 }}>Optimal (80-88% Target)</span>
              </div>
            </div>

            <div className="clay-card clay-card-mint" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '14px', border: '2.5px solid #16a34a' }}>
              <div className="clay-icon-bubble" style={{ border: '2px solid #16a34a', color: '#16a34a' }}>
                <Clock size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#475569', textTransform: 'uppercase', fontWeight: 800 }}>Avg Length of Stay (ALOS)</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>{curr.alos}</div>
                <span style={{ fontSize: '0.7rem', color: '#15803d', fontWeight: 700 }}>Clinical Benchmark: 3.8 Days</span>
              </div>
            </div>

            <div className="clay-card clay-card-blue" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '14px', border: '2.5px solid #0284c7' }}>
              <div className="clay-icon-bubble" style={{ border: '2px solid #0284c7', color: '#0284c7' }}>
                <Coins size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#475569', textTransform: 'uppercase', fontWeight: 800 }}>Gross Billed Hospital Revenue</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>{curr.grossRev}</div>
                <span style={{ fontSize: '0.7rem', color: '#0369a1', fontWeight: 700 }}>Net Operating Margin: {curr.netMargin}</span>
              </div>
            </div>

            <div className="clay-card clay-card-peach" style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '14px', border: '2.5px solid #ea580c' }}>
              <div className="clay-icon-bubble" style={{ border: '2px solid #ea580c', color: '#ea580c' }}>
                <Activity size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#475569', textTransform: 'uppercase', fontWeight: 800 }}>OPD Encounters Footfall</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', lineHeight: 1.1 }}>{curr.opdFootfall}</div>
                <span style={{ fontSize: '0.7rem', color: '#c2410c', fontWeight: 700 }}>Lab TAT: {curr.labTAT}</span>
              </div>
            </div>
          </div>

          {/* Executive Summary Card with High-Contrast Border */}
          <div style={{ padding: '14px 16px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#e0e7ff', color: '#4f46e5', border: '1.5px solid #818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <TrendingUp size={20} />
            </div>
            <div>
              <strong style={{ fontSize: '0.85rem', color: '#0f172a', display: 'block' }}>
                Automated User-Wise Collection Reconciliation (/Reports/UserWiseReport)
              </strong>
              <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 500 }}>
                Every cashier shift settlement, counter receipt, and department transaction is cross-checked in real-time.
              </span>
            </div>
          </div>
        </div>

        {/* Right: Departmental Revenue Contribution Bar Charts with High-Contrast Borders */}
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
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase' }}>
                Financial MIS Analytics
              </span>
              <h3 style={{ margin: '2px 0 0', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Revenue Contribution by Stream
              </h3>
            </div>

            <span style={{ 
              fontSize: '0.74rem', 
              fontWeight: 800, 
              padding: '3px 10px', 
              borderRadius: 'var(--radius-pill)', 
              background: '#e0e7ff', 
              color: '#3730a3', 
              border: '1.5px solid #818cf8' 
            }}>
              {timeframe} Data
            </span>
          </div>

          {/* Visual Progress Bar Chart with High-Contrast Track Borders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'space-around' }}>
            {deptRevenue.map((d, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 700, color: '#1e293b' }}>{d.name}</span>
                  <span style={{ fontWeight: 800, color: d.color }}>{d.share}% ({d.amount})</span>
                </div>
                <div style={{ height: '12px', background: '#f1f5f9', borderRadius: 'var(--radius-pill)', overflow: 'hidden', border: '1.5px solid #cbd5e1' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${d.share}%`,
                      background: d.color,
                      borderRadius: 'var(--radius-pill)',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#475569', fontWeight: 600 }}>
            <span>Automated Daily MIS Reports exported to Excel & PDF</span>
            <span style={{ color: '#059669', fontWeight: 700 }}>✓ Audit Balanced</span>
          </div>
        </div>
      </div>
    </div>
  );
};
