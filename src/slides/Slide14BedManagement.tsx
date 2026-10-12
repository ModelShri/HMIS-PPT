import React, { useState } from 'react';
import { 
  Bed, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  User, 
  Calendar, 
  Stethoscope, 
  DollarSign,
  Layers
} from 'lucide-react';

interface BedData {
  id: string;
  name: string;
  ward: 'ICU' | 'Deluxe' | 'Semi-Private' | 'General';
  status: 'Occupied' | 'Available' | 'Cleaning' | 'Reserved';
  patient?: string;
  uhid?: string;
  doctor?: string;
  admitDate?: string;
  elos?: string;
  dailyRate: string;
}

export const Slide14BedManagement: React.FC = () => {
  const [selectedWard, setSelectedWard] = useState<string>('All');

  const [beds] = useState<BedData[]>([
    { id: 'B-ICU-01', name: 'ICU Bed 01', ward: 'ICU', status: 'Occupied', patient: 'David Miller', uhid: 'MED-9920841', doctor: 'Dr. Sarah Lin', admitDate: '10-Oct-2026', elos: '4 Days', dailyRate: '₹6,500' },
    { id: 'B-ICU-02', name: 'ICU Bed 02', ward: 'ICU', status: 'Available', dailyRate: '₹6,500' },
    { id: 'B-DLX-301', name: 'Deluxe Suite 301', ward: 'Deluxe', status: 'Occupied', patient: 'Sophia Loren', uhid: 'MED-9931204', doctor: 'Dr. Marcus Vance', admitDate: '09-Oct-2026', elos: '2 Days', dailyRate: '₹4,200' },
    { id: 'B-DLX-302', name: 'Deluxe Suite 302', ward: 'Deluxe', status: 'Cleaning', dailyRate: '₹4,200' },
    { id: 'B-DLX-303', name: 'Deluxe Suite 303', ward: 'Deluxe', status: 'Reserved', patient: 'Arthur Pendelton (Booking)', doctor: 'Dr. Alan Grant', dailyRate: '₹4,200' },
    { id: 'B-SMP-201', name: 'Semi-Private 201-A', ward: 'Semi-Private', status: 'Occupied', patient: 'Chen Wei', uhid: 'MED-9944112', doctor: 'Dr. Elena Rostova', admitDate: '11-Oct-2026', elos: '3 Days', dailyRate: '₹2,600' },
    { id: 'B-SMP-202', name: 'Semi-Private 201-B', ward: 'Semi-Private', status: 'Available', dailyRate: '₹2,600' },
    { id: 'B-SMP-203', name: 'Semi-Private 202-A', ward: 'Semi-Private', status: 'Occupied', patient: 'Carlos Santana', uhid: 'MED-9912093', doctor: 'Dr. Alan Grant', admitDate: '08-Oct-2026', elos: '5 Days', dailyRate: '₹2,600' },
    { id: 'B-GEN-101', name: 'General Ward 01', ward: 'General', status: 'Occupied', patient: 'Fatima Al-Hassan', uhid: 'MED-9955102', doctor: 'Dr. Marcus Vance', admitDate: '11-Oct-2026', elos: '2 Days', dailyRate: '₹1,400' },
    { id: 'B-GEN-102', name: 'General Ward 02', ward: 'General', status: 'Available', dailyRate: '₹1,400' },
    { id: 'B-GEN-103', name: 'General Ward 03', ward: 'General', status: 'Available', dailyRate: '₹1,400' },
    { id: 'B-GEN-104', name: 'General Ward 04', ward: 'General', status: 'Occupied', patient: 'James Wilson', uhid: 'MED-9966144', doctor: 'Dr. Sarah Lin', admitDate: '10-Oct-2026', elos: '3 Days', dailyRate: '₹1,400' },
  ]);

  const [selectedBed, setSelectedBed] = useState<BedData>(beds[0]);

  const filteredBeds = selectedWard === 'All' ? beds : beds.filter(b => b.ward === selectedWard);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Occupied': return { bg: '#eff6ff', text: '#1d4ed8', border: '#60a5fa', badge: '#2563eb' };
      case 'Available': return { bg: '#f0fdf4', text: '#15803d', border: '#4ade80', badge: '#16a34a' };
      case 'Cleaning': return { bg: '#faf5ff', text: '#7e22ce', border: '#c084fc', badge: '#9333ea' };
      case 'Reserved': return { bg: '#fffbeb', text: '#b45309', border: '#f59e0b', badge: '#d97706' };
      default: return { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1', badge: '#64748b' };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-module routes bar matching user's Inpatient & Bed Manager sidebar */}
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
            Inpatient (IP) Modules:
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#eff6ff', color: '#1d4ed8', border: '1.5px solid #60a5fa' }}>
            Bed Manager (/Patient/BedManager)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            New IP Entry (/Patient/IP)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            IP Patient List (/Patient/IPList)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#047857', border: '1.5px solid #86efac' }}>
            IP Advance (/Patient/Advance_Collection)
          </span>
        </div>

        <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#e0e7ff', color: '#3730a3', border: '1.5px solid #818cf8' }}>
          Linked with Ward & Bed Masters
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left: Interactive 12-Bed Ward Layout with High-Contrast Borders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Interactive Ward Census Grid (/Patient/BedManager)
              </h4>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                Live visual occupancy matrix across ICU, Deluxe suites, Semi-Private and General wards
              </span>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['All', 'ICU', 'Deluxe', 'Semi-Private', 'General'].map(w => (
                <button
                  key={w}
                  onClick={() => setSelectedWard(w)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    border: selectedWard === w ? '1.5px solid #2563eb' : '1.5px solid #cbd5e1',
                    cursor: 'pointer',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    background: selectedWard === w ? '#2563eb' : '#ffffff',
                    color: selectedWard === w ? '#ffffff' : '#475569',
                    boxShadow: '0 2px 4px rgba(100, 116, 139, 0.08)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Status Legend with High-Contrast Border */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', background: '#ffffff', padding: '8px 14px', borderRadius: 'var(--radius-pill)', border: '2px solid #cbd5e1', boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)' }}>
            <span style={{ fontSize: '0.72rem', color: '#1e293b', fontWeight: 800 }}>BED STATUS:</span>
            <span style={{ fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px', color: '#1d4ed8', fontWeight: 700 }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} /> Occupied (6)</span>
            <span style={{ fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px', color: '#15803d', fontWeight: 700 }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a' }} /> Available (4)</span>
            <span style={{ fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px', color: '#7e22ce', fontWeight: 700 }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#9333ea' }} /> Cleaning (1)</span>
            <span style={{ fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px', color: '#b45309', fontWeight: 700 }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#d97706' }} /> Reserved (1)</span>
          </div>

          {/* 12-Bed Floor Matrix Grid with Distinct Borders */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', flex: 1 }}>
            {filteredBeds.map(b => {
              const isSelected = b.id === selectedBed.id;
              const style = getStatusColor(b.status);

              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedBed(b)}
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? '#ffffff' : style.bg,
                    border: isSelected ? '2.5px solid #2563eb' : `2px solid ${style.border}`,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    transition: 'all 0.15s ease',
                    transform: isSelected ? 'scale(1.02)' : 'none',
                    boxShadow: isSelected ? '0 6px 16px rgba(37, 99, 235, 0.2)' : '0 2px 6px rgba(100, 116, 139, 0.06)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: style.badge, color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Bed size={15} />
                    </div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, color: style.text, textTransform: 'uppercase' }}>
                      {b.status}
                    </span>
                  </div>

                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>
                      {b.name}
                    </h4>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>
                      {b.ward} • {b.dailyRate}/day
                    </span>
                  </div>

                  <div style={{ marginTop: 'auto', fontSize: '0.72rem', color: '#334155', borderTop: '1.5px solid #cbd5e1', paddingTop: '4px' }}>
                    {b.patient ? <strong style={{ color: '#0f172a' }}>{b.patient.split(' ')[0]} {b.patient.split(' ')[1] || ''}</strong> : <span style={{ color: '#16a34a', fontWeight: 700 }}>Vacant</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Bed Detail Inspector with High-Contrast Borders */}
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
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase' }}>
                Bed Details & Billing Tier
              </span>
              <h3 style={{ margin: '2px 0 0', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                {selectedBed.name}
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>Ward Category: {selectedBed.ward}</span>
            </div>

            <div style={{ 
              padding: '4px 12px', 
              borderRadius: 'var(--radius-pill)', 
              background: getStatusColor(selectedBed.status).bg, 
              color: getStatusColor(selectedBed.status).text, 
              border: `2px solid ${getStatusColor(selectedBed.status).border}`,
              fontSize: '0.75rem',
              fontWeight: 800
            }}>
              {selectedBed.status}
            </div>
          </div>

          {selectedBed.patient ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', display: 'block', fontWeight: 700 }}>Admitted Patient</span>
                <strong style={{ fontSize: '1.05rem', color: '#0f172a' }}>{selectedBed.patient}</strong>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#2563eb', marginTop: '2px', fontWeight: 700 }}>
                  UHID: {selectedBed.uhid}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <div style={{ padding: '10px 12px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>Primary Doctor</span>
                  <strong style={{ fontSize: '0.82rem', color: '#1e293b', display: 'block' }}>{selectedBed.doctor}</strong>
                </div>
                <div style={{ padding: '10px 12px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px solid #cbd5e1' }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>Admission Date</span>
                  <strong style={{ fontSize: '0.82rem', color: '#1e293b', display: 'block' }}>{selectedBed.admitDate}</strong>
                </div>
              </div>

              <div style={{ padding: '12px 14px', background: '#f0fdf4', borderRadius: 'var(--radius-md)', border: '2px solid #16a34a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: '#14532d', textTransform: 'uppercase', display: 'block', fontWeight: 800 }}>Daily Room Tariff</span>
                  <strong style={{ fontSize: '1.15rem', color: '#15803d', fontWeight: 900 }}>{selectedBed.dailyRate} / night</strong>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#166534', background: '#dcfce7', padding: '4px 10px', borderRadius: 'var(--radius-pill)', border: '1px solid #4ade80' }}>
                  ELOS: {selectedBed.elos}
                </span>
              </div>
            </div>
          ) : (
            <div style={{ padding: '28px', textAlign: 'center', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '2px dashed #cbd5e1' }}>
              <Bed size={36} style={{ color: '#94a3b8', margin: '0 auto 8px' }} />
              <h4 style={{ margin: 0, color: '#1e293b', fontSize: '1rem', fontWeight: 800 }}>Bed Currently {selectedBed.status}</h4>
              <p style={{ margin: '4px 0 0', fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                {selectedBed.status === 'Available' ? 'Ready for immediate patient allocation from /Patient/IP or Emergency.' : 'Housekeeping sanitization ticket in progress.'}
              </p>
            </div>
          )}

          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.76rem', color: '#475569', borderTop: '2px solid #e2e8f0', paddingTop: '10px', fontWeight: 600 }}>
            <Sparkles size={16} style={{ color: '#2563eb', flexShrink: 0 }} />
            Automatic bed charges sync to IP Billing ledger (/Billing/IPList) on midnight cycle.
          </div>
        </div>
      </div>
    </div>
  );
};
