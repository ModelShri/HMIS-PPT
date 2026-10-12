import React, { useState } from 'react';
import { 
  Droplets, 
  Thermometer, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Heart,
  Search,
  Check,
  Activity
} from 'lucide-react';

interface BloodStock {
  group: string;
  prbcUnits: number;
  ffpUnits: number;
  plateletUnits: number;
  status: 'Adequate' | 'Low' | 'Critical';
}

export const Slide18BloodBank: React.FC = () => {
  const [bloodStocks] = useState<BloodStock[]>([
    { group: 'O Positive (O+)', prbcUnits: 42, ffpUnits: 28, plateletUnits: 14, status: 'Adequate' },
    { group: 'O Negative (O-)', prbcUnits: 6, ffpUnits: 8, plateletUnits: 3, status: 'Critical' },
    { group: 'A Positive (A+)', prbcUnits: 38, ffpUnits: 22, plateletUnits: 11, status: 'Adequate' },
    { group: 'A Negative (A-)', prbcUnits: 9, ffpUnits: 6, plateletUnits: 4, status: 'Low' },
    { group: 'B Positive (B+)', prbcUnits: 34, ffpUnits: 18, plateletUnits: 9, status: 'Adequate' },
    { group: 'B Negative (B-)', prbcUnits: 8, ffpUnits: 5, plateletUnits: 2, status: 'Low' },
    { group: 'AB Positive (AB+)', prbcUnits: 16, ffpUnits: 12, plateletUnits: 6, status: 'Adequate' },
    { group: 'AB Negative (AB-)', prbcUnits: 4, ffpUnits: 3, plateletUnits: 1, status: 'Critical' },
  ]);

  const [selectedGroup, setSelectedGroup] = useState<BloodStock>(bloodStocks[0]);

  const bloodBankModules = [
    { name: 'Donor Mgmt', route: '/BloodBank/Donors' },
    { name: 'Collections', route: '/BloodBank/Collections' },
    { name: 'Components', route: '/BloodBank/Components' },
    { name: 'Testing', route: '/BloodBank/Testing' },
    { name: 'Requests', route: '/BloodBank/Requests' },
    { name: 'Cross Match', route: '/BloodBank/CrossMatching' },
    { name: 'Blood Issue', route: '/BloodBank/Issue' },
    { name: 'Quality QC', route: '/BloodBank/QC' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-Module Badges Bar from Razor Sidebar */}
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
            Blood Bank Suite (/BloodBank/*):
          </span>
          {bloodBankModules.map((m, idx) => (
            <span 
              key={idx}
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: 'var(--radius-pill)',
                background: '#ffffff',
                color: '#be123c',
                border: '1.5px solid #fecdd3',
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
          background: '#ffe4e6', 
          color: '#9f1239', 
          border: '1.5px solid #f43f5e',
          flexShrink: 0
        }}>
          100% Barcoded ISBT-128
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left: ABO / Rh Blood Inventory Grid with High-Contrast Borders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                ABO & Rh Component Inventory (/BloodBank/Inventory)
              </h4>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                Live cold-chain monitored blood component reserves across 8 blood groups
              </span>
            </div>

            <span style={{ 
              fontSize: '0.72rem', 
              fontWeight: 700, 
              padding: '3px 8px', 
              borderRadius: 'var(--radius-pill)', 
              background: '#f0fdf4', 
              color: '#15803d', 
              border: '1.5px solid #86efac' 
            }}>
              Zero Cross-Match Mismatch
            </span>
          </div>

          {/* 8-Blood Group Grid with Distinct Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', flex: 1 }}>
            {bloodStocks.map(bs => {
              const isSelected = bs.group === selectedGroup.group;
              const isCrit = bs.status === 'Critical';

              return (
                <div
                  key={bs.group}
                  onClick={() => setSelectedGroup(bs)}
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? '#ffffff' : isCrit ? '#fef2f2' : '#ffffff',
                    border: isSelected ? '2.5px solid #e11d48' : isCrit ? '2px solid #ef4444' : '2px solid #cbd5e1',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    transition: 'all 0.15s ease',
                    boxShadow: isSelected ? '0 6px 16px rgba(225, 29, 72, 0.2)' : '0 2px 6px rgba(100, 116, 139, 0.08)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '50%', 
                      background: '#fee2e2', 
                      color: '#be123c', 
                      border: '1.5px solid #fda4af',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontWeight: 800, 
                      fontSize: '0.8rem' 
                    }}>
                      {bs.group.split(' ')[0]}
                    </div>
                    <span style={{ 
                      fontSize: '0.65rem', 
                      fontWeight: 800, 
                      padding: '2px 6px',
                      borderRadius: 'var(--radius-pill)',
                      background: isCrit ? '#fee2e2' : '#dcfce7',
                      color: isCrit ? '#dc2626' : '#15803d',
                      border: isCrit ? '1px solid #f87171' : '1px solid #4ade80',
                      textTransform: 'uppercase' 
                    }}>
                      {bs.status}
                    </span>
                  </div>

                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                      {bs.group}
                    </h4>
                    <span style={{ fontSize: '0.74rem', color: '#475569', fontWeight: 600 }}>
                      PRBC: <strong style={{ color: '#0f172a' }}>{bs.prbcUnits}</strong> Units
                    </span>
                  </div>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#475569', borderTop: '1.5px solid #e2e8f0', paddingTop: '4px', fontWeight: 600 }}>
                    <span>FFP: {bs.ffpUnits}</span>
                    <span>Plt: {bs.plateletUnits}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cold-Chain Temperatures with High-Contrast Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                <Thermometer size={14} style={{ color: '#dc2626' }} /> PRBC Storage (2°C - 6°C)
              </span>
              <strong style={{ fontSize: '1.05rem', color: '#16a34a', display: 'block', marginTop: '2px' }}>+4.1°C (Optimal)</strong>
            </div>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                <Thermometer size={14} style={{ color: '#0284c7' }} /> FFP Deep Freeze (-80°C)
              </span>
              <strong style={{ fontSize: '1.05rem', color: '#16a34a', display: 'block', marginTop: '2px' }}>-78.4°C (Safe)</strong>
            </div>
            <div style={{ padding: '10px 12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
              <span style={{ fontSize: '0.7rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                <Thermometer size={14} style={{ color: '#ea580c' }} /> Platelet Agitator (22°C)
              </span>
              <strong style={{ fontSize: '1.05rem', color: '#16a34a', display: 'block', marginTop: '2px' }}>+21.8°C (Agitating)</strong>
            </div>
          </div>
        </div>

        {/* Right: Cross-Match & Transfusion Safety Protocol with High-Contrast Borders */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
            <div 
              style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '50%', 
                background: '#fee2e2', 
                color: '#e11d48',
                border: '2px solid #e11d48',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Droplets size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>
                Group Inventory & Cross-Match Status
              </span>
              <h3 style={{ margin: '2px 0 0', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                {selectedGroup.group}
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>
                Total Available: {selectedGroup.prbcUnits + selectedGroup.ffpUnits + selectedGroup.plateletUnits} Bags Ready
              </span>
            </div>
          </div>

          {/* Detailed Component Breakdown with Distinct Borders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '0.84rem', color: '#0f172a' }}>Packed Red Blood Cells (PRBC)</strong>
                <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>Shelf Life: 35–42 Days • /BloodBank/Components</span>
              </div>
              <strong style={{ fontSize: '1.15rem', color: '#e11d48', fontWeight: 900 }}>{selectedGroup.prbcUnits} Units</strong>
            </div>

            <div style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '0.84rem', color: '#0f172a' }}>Fresh Frozen Plasma (FFP)</strong>
                <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>Shelf Life: 12 Months at -80°C • Cryo Split</span>
              </div>
              <strong style={{ fontSize: '1.15rem', color: '#0284c7', fontWeight: 900 }}>{selectedGroup.ffpUnits} Units</strong>
            </div>

            <div style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '0.84rem', color: '#0f172a' }}>Random Donor Platelets (RDP)</strong>
                <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>Shelf Life: 5 Days Constant Agitation</span>
              </div>
              <strong style={{ fontSize: '1.15rem', color: '#d97706', fontWeight: 900 }}>{selectedGroup.plateletUnits} Units</strong>
            </div>
          </div>

          {/* Compatibility & Barcode Verification with High-Contrast Green Border */}
          <div style={{ marginTop: 'auto', padding: '12px 14px', background: '#f0fdf4', borderRadius: 'var(--radius-md)', border: '2px solid #16a34a', boxShadow: '0 2px 6px rgba(22, 163, 74, 0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <ShieldCheck size={18} style={{ color: '#16a34a' }} />
              <strong style={{ fontSize: '0.82rem', color: '#14532d' }}>
                Dual-Technician Verification & Blood Issue (/BloodBank/Issue)
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.76rem', color: '#15803d', lineHeight: 1.45, fontWeight: 500 }}>
              Independent double-scanning of recipient bedside barcode and blood bag unit number before release, preventing ABO mismatch transfusion events. Full Quality Control audit logged in /BloodBank/QC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
