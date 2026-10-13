import React, { useState } from 'react';
import { 
  Building2, 
  Network, 
  ShieldCheck, 
  Repeat, 
  CheckCircle,
  MapPin,
  TrendingUp,
  Boxes
} from 'lucide-react';

interface BranchInfo {
  id: string;
  name: string;
  type: string;
  location: string;
  beds: number;
  occupancy: string;
  dailyOPD: number;
  pharmacySKUs: number;
  isolationStatus: string;
}

export const Slide07MultiBranch: React.FC = () => {
  const branches: BranchInfo[] = [
    {
      id: 'hq',
      name: 'Global Health Central HQ & Tertiary Campus',
      type: 'Group Headquarters & Main Hospital',
      location: 'Central Downtown',
      beds: 550,
      occupancy: '89.4%',
      dailyOPD: 1240,
      pharmacySKUs: 4200,
      isolationStatus: 'Full Group Administrative & Consolidated MIS Rights'
    },
    {
      id: 'suburb',
      name: 'Northgate Multi-Specialty Clinic',
      type: 'Secondary Care Facility',
      location: 'North District',
      beds: 120,
      occupancy: '74.2%',
      dailyOPD: 460,
      pharmacySKUs: 1850,
      isolationStatus: 'Restricted: Branch Staff cannot access HQ financial records'
    },
    {
      id: 'west',
      name: 'West Valley Day-Surgery & Diagnostic Hub',
      type: 'Day Surgery & Diagnostics',
      location: 'West Medical Park',
      beds: 40,
      occupancy: '92.0%',
      dailyOPD: 310,
      pharmacySKUs: 920,
      isolationStatus: 'Restricted: Patient data isolated to local encounters'
    },
    {
      id: 'east',
      name: 'East Hills Emergency & Urgent Care Center',
      type: 'Satellite Emergency Wing',
      location: 'East Highway Corridor',
      beds: 35,
      occupancy: '68.5%',
      dailyOPD: 280,
      pharmacySKUs: 840,
      isolationStatus: 'Restricted: Emergency records synced with HQ on transfer'
    }
  ];

  const [selectedBranch, setSelectedBranch] = useState<BranchInfo>(branches[0]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '28px', height: '100%' }}>
      {/* Left: Interactive Multi-Branch Topology */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Enterprise Branch Topology
          </h4>
          <span className="clay-badge clay-badge-mint">
            <Network size={13} />
            Hub & Spoke Model
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px', flex: 1 }}>
          {branches.map((b) => {
            const isSelected = b.id === selectedBranch.id;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedBranch(b)}
                className={`clay-card ${isSelected ? 'clay-card-lavender' : ''}`}
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #3b5bdb' : '1px solid rgba(255,255,255,0.85)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="clay-icon-bubble" style={{ width: '38px', height: '38px', color: '#3b5bdb' }}>
                    <Building2 size={18} />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#3b5bdb', background: '#e0e7ff', padding: '2px 8px', borderRadius: '12px' }}>
                    {b.id === 'hq' ? 'HEADQUARTERS' : 'BRANCH'}
                  </span>
                </div>

                <div>
                  <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#0f172a', fontWeight: 800, lineHeight: 1.3 }}>
                    {b.name}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    <MapPin size={13} /> {b.location}
                  </span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                  <span style={{ color: '#64748b' }}>Beds: <strong>{b.beds}</strong></span>
                  <span style={{ color: '#059669', fontWeight: 700 }}>Occupancy: {b.occupancy}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inter-Branch Transfer Banner */}
        <div className="clay-card clay-card-peach" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div className="clay-icon-bubble" style={{ color: '#ea580c' }}>
            <Repeat size={20} />
          </div>
          <div>
            <strong style={{ fontSize: '0.88rem', color: '#9a3412', display: 'block' }}>
              Inter-Branch Stock Transfer & Patient Routing
            </strong>
            <span style={{ fontSize: '0.78rem', color: '#c2410c' }}>
              Depleted inventory at branch clinics automatically indents emergency stock from Central HQ with electronic gate pass authorization.
            </span>
          </div>
        </div>
      </div>

      {/* Right: Branch Isolation & Scoping Rules */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
          <div className="clay-icon-bubble clay-icon-bubble-lg" style={{ color: '#3b5bdb' }}>
            <Building2 size={26} />
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#3b5bdb', textTransform: 'uppercase' }}>
              Branch Profile & Scope
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
              {selectedBranch.name}
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{selectedBranch.type}</span>
          </div>
        </div>

        {/* Live Operational Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 90px), 1fr))', gap: '8px' }}>
          <div className="clay-inset-well" style={{ padding: '10px' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>Inpatient Beds</span>
            <strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>{selectedBranch.beds}</strong>
          </div>
          <div className="clay-inset-well" style={{ padding: '10px' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>Daily OPD</span>
            <strong style={{ fontSize: '1.1rem', color: '#059669' }}>{selectedBranch.dailyOPD}</strong>
          </div>
          <div className="clay-inset-well" style={{ padding: '10px' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>Formulary Items</span>
            <strong style={{ fontSize: '1.1rem', color: '#7c3aed' }}>{selectedBranch.pharmacySKUs}</strong>
          </div>
        </div>

        {/* Data Isolation Safeguards */}
        <div>
          <h5 style={{ margin: '0 0 10px', fontSize: '0.82rem', textTransform: 'uppercase', color: '#475569', letterSpacing: '0.05em' }}>
            Backend Data Partitioning Rules:
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
              <ShieldCheck size={16} style={{ color: '#10b981', flexShrink: 0 }} />
              <span><strong>Tenant Scoping:</strong> SQL queries strictly append <code>BranchId</code> filter at database middleware.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
              <CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} />
              <span><strong>Cross-Branch EHR:</strong> Attending physician can request temporary 24h view-token for referred patients.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#334155' }}>
              <Boxes size={16} style={{ color: '#10b981', flexShrink: 0 }} />
              <span><strong>Stock Autonomy:</strong> Branch inventory managed independently with automated reorder from central store.</span>
            </div>
          </div>
        </div>

        {/* Isolation Status Badge */}
        <div style={{ marginTop: 'auto', padding: '12px 14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
            Active Access Policy:
          </span>
          <p style={{ margin: '4px 0 0', fontSize: '0.82rem', color: '#1e293b', fontWeight: 600 }}>
            {selectedBranch.isolationStatus}
          </p>
        </div>
      </div>
    </div>
  );
};
