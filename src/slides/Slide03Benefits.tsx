import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Clock, 
  Coins, 
  CheckCircle2, 
  XCircle,
  FileCheck,
  LineChart,
  Repeat
} from 'lucide-react';

export const Slide03Benefits: React.FC = () => {
  const benefits = [
    {
      id: 'centralized',
      title: 'Centralized Operations',
      subtitle: 'Single cohesive hospital platform',
      icon: Building2,
      color: '#4f46e5',
      before: 'Fragmented departmental software, lost paper files, uncoordinated ward transfers.',
      after: 'Unified data model where clinical, pharmacy, and billing speak the same language.',
      highlights: [
        'Single Unique Hospital ID (UHID) across lifetime visits',
        'Consolidated master records for branches and departments',
        'Automated inter-departmental notification queues'
      ]
    },
    {
      id: 'clinical',
      title: 'Integrated Clinical Workflows',
      subtitle: 'Zero clinical ambiguity or delays',
      icon: ShieldCheck,
      color: '#059669',
      before: 'Handwritten prescriptions prone to dosage errors; delayed paper lab report delivery.',
      after: 'Digital e-Rx with drug interaction safeguards; real-time push of lab results to doctor screens.',
      highlights: [
        'Allergy contraindication checking at the point of ordering',
        'Clinical decision support with standard diagnostic protocols',
        'Bedside vitals & early warning indicators (EWS)'
      ]
    },
    {
      id: 'efficiency',
      title: 'Elimination of Manual Lag',
      subtitle: 'Streamlined staff productivity',
      icon: Clock,
      color: '#0284c7',
      before: 'Nurses spend 40% of their shift handwriting forms; receptionists face long queues.',
      after: 'One-click registrations, automated token calling, and automated charge posting.',
      highlights: [
        'Rapid OPD token generation under 15 seconds',
        'Pre-configured clinical templates by medical specialty',
        'Direct analyzer data ingestion without manual transcription'
      ]
    },
    {
      id: 'financial',
      title: 'Financial & Inventory Integrity',
      subtitle: 'Zero revenue loss or obsolete stock',
      icon: Coins,
      color: '#ea580c',
      before: 'Lost unbilled consumables; expired medications disposed due to lack of FEFO alerts.',
      after: 'Automated charge capture at point of administration; strict FEFO batch controls.',
      highlights: [
        'Every consumable deducted from stock is posted to patient ledger',
        'Insurance/TPA cashless approval tracking & co-pay split billing',
        'Automated purchase requisition when stock hits min thresholds'
      ]
    },
    {
      id: 'accountability',
      title: 'Auditability & Compliance',
      subtitle: 'Institutional accountability & governance',
      icon: FileCheck,
      color: '#7c3aed',
      before: 'No traceability of who edited medical records; difficult regulatory accreditation.',
      after: 'Immutable tamper-proof audit trails for every access, prescription, and financial change.',
      highlights: [
        'Role-based security ensuring least-privilege medical access',
        'Timestamped, digitally signed clinical progress notes',
        'Effortless generation of accreditation and epidemiological reports'
      ]
    },
    {
      id: 'analytics',
      title: 'Data-Driven Management',
      subtitle: 'Executive clarity across all branches',
      icon: LineChart,
      color: '#0d9488',
      before: 'Monthly manual tallying of revenue and occupancy with 2-week delays.',
      after: 'Live real-time dashboards showing bed census, doctor workload, and revenue.',
      highlights: [
        'Real-time bed occupancy and Average Length of Stay (ALOS)',
        'Branch-wise and doctor-wise comparative productivity',
        'Operational bottleneck alerts (e.g. ED wait time exceeding threshold)'
      ]
    }
  ];

  const [selectedId, setSelectedId] = useState(benefits[0].id);
  const activeBenefit = benefits.find((b) => b.id === selectedId) || benefits[0];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '28px', height: '100%' }}>
      {/* Left: List of 6 Qualitative Benefits */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h4 style={{ margin: '0 0 4px', fontSize: '1rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Operational Pillars (Click to Inspect)
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
          {benefits.map((b) => {
            const Icon = b.icon;
            const isSelected = b.id === selectedId;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedId(b.id)}
                className={`clay-card ${isSelected ? 'clay-card-lavender' : ''}`}
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  border: isSelected ? `2px solid ${b.color}` : '1px solid rgba(255,255,255,0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.2s',
                }}
              >
                <div
                  className="clay-icon-bubble"
                  style={{
                    width: '38px',
                    height: '38px',
                    color: b.color,
                    background: isSelected ? '#ffffff' : 'var(--surface-clay)',
                  }}
                >
                  <Icon size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '0.92rem', color: '#1e293b', fontWeight: 700 }}>
                    {b.title}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {b.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Comparative Impact Inspector */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
          <div className="clay-icon-bubble clay-icon-bubble-lg" style={{ color: activeBenefit.color }}>
            {React.createElement(activeBenefit.icon, { size: 28 })}
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: activeBenefit.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Benefit Deep-Dive
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
              {activeBenefit.title}
            </h3>
            <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{activeBenefit.subtitle}</span>
          </div>
        </div>

        {/* Before vs After Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', background: '#fff1f2', border: '1px solid #fecdd3' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e11d48', fontWeight: 700, fontSize: '0.82rem', marginBottom: '8px' }}>
              <XCircle size={16} />
              TRADITIONAL SILOED SYSTEM
            </div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#9f1239', lineHeight: 1.45 }}>
              {activeBenefit.before}
            </p>
          </div>

          <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontWeight: 700, fontSize: '0.82rem', marginBottom: '8px' }}>
              <CheckCircle2 size={16} />
              WITH HMIS PLATFORM
            </div>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#166534', lineHeight: 1.45 }}>
              {activeBenefit.after}
            </p>
          </div>
        </div>

        {/* Concrete Capabilities */}
        <div>
          <h5 style={{ margin: '0 0 10px', fontSize: '0.82rem', textTransform: 'uppercase', color: '#475569', letterSpacing: '0.05em' }}>
            Standard Standard Operating Procedures (SOPs):
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {activeBenefit.highlights.map((h, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.86rem', color: '#334155' }}>
                <Repeat size={16} style={{ color: activeBenefit.color, flexShrink: 0 }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
