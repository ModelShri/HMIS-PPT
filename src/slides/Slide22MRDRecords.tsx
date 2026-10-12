import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Search, 
  Archive, 
  Scale, 
  ShieldCheck, 
  FileText, 
  CheckCircle2,
  Lock,
  UploadCloud,
  FileCheck2,
  Award
} from 'lucide-react';

export const Slide22MRDRecords: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mrdRecords = [
    { mrn: 'MED-9920841', patient: 'David Miller', primaryDiag: 'Laparoscopic Appendectomy (K35.80)', icd: 'K35.80 / 47.01', dischargeDate: '12-Oct-2026', mlc: false, archiveStatus: 'Archived Tier-1' },
    { mrn: 'MED-9912093', patient: 'Carlos Santana', primaryDiag: 'Acute Coronary Syndrome / NSTEMI', icd: 'I21.4 / 88.56', dischargeDate: '10-Oct-2026', mlc: false, archiveStatus: 'Archived Tier-1' },
    { mrn: 'MED-9944112', patient: 'Chen Wei', primaryDiag: 'Road Traffic Injury / Femur Fracture', icd: 'S72.001A / 79.35', dischargeDate: '08-Oct-2026', mlc: true, archiveStatus: 'MLC Sealed Vault' },
    { mrn: 'MED-9931204', patient: 'Sophia Loren', primaryDiag: 'Elective Total Knee Arthroplasty', icd: 'M17.11 / 81.54', dischargeDate: '05-Oct-2026', mlc: false, archiveStatus: 'Archived Tier-1' },
  ];

  const filtered = mrdRecords.filter(r => 
    r.patient.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.mrn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.primaryDiag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '14px' }}>
      {/* Sub-module routes bar matching user's MRD Razor sidebar */}
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
            Medical Records (MRD) Suite:
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#eff6ff', color: '#1d4ed8', border: '1.5px solid #60a5fa' }}>
            Record Tracking (/MRD/Tracking)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Document Upload (/MRD/Upload)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            Documentation (/MRD/Documentation)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#1e40af', border: '1.5px solid #93c5fd' }}>
            File Movement (/MRD/Movement)
          </span>
          <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ffffff', color: '#047857', border: '1.5px solid #86efac' }}>
            Certificate Module (/Certificate/Index)
          </span>
        </div>

        <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: '#ecfdf5', color: '#065f46', border: '1.5px solid #34d399' }}>
          ICD-10 & Medico-Legal Vault
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left: Medical Records Archive & Search with High-Contrast Borders */}
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
              <div className="clay-icon-bubble" style={{ border: '2px solid #0284c7', color: '#0284c7', background: '#f0f9ff' }}>
                <FileSpreadsheet size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                  Medical Records & ICD-10 Registry
                </h3>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Archived Case Sheets, MLC Dossiers & Statutory Coding</span>
              </div>
            </div>

            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: 'var(--radius-pill)',
              background: '#e0f2fe',
              color: '#0369a1',
              border: '2px solid #38bdf8'
            }}>
              WORM Compliant Vault
            </span>
          </div>

          {/* Search input with High-Contrast Border */}
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search patient name, MRN, or ICD-10 code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px 9px 38px',
                borderRadius: 'var(--radius-pill)',
                border: '2px solid #cbd5e1',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '0.85rem',
                background: '#f8fafc',
                color: '#0f172a',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)'
              }}
            />
          </div>

          {/* MRD Records Table with High-Contrast Border */}
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
              <div style={{ flex: 1.2 }}>Patient / MRN</div>
              <div style={{ flex: 2.5 }}>Diagnosis & ICD-10 Code</div>
              <div style={{ flex: 1 }}>Discharged</div>
              <div style={{ flex: 1 }}>Legal Status</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {filtered.map((r, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    padding: '12px 14px', 
                    borderBottom: idx < filtered.length - 1 ? '1.5px solid #e2e8f0' : 'none', 
                    fontSize: '0.82rem', 
                    alignItems: 'center',
                    background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                  }}
                >
                  <div style={{ flex: 1.2 }}>
                    <strong style={{ display: 'block', color: '#0f172a' }}>{r.patient}</strong>
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#2563eb', fontWeight: 600 }}>{r.mrn}</span>
                  </div>
                  <div style={{ flex: 2.5 }}>
                    <span style={{ fontWeight: 700, color: '#1e293b', display: 'block' }}>{r.primaryDiag}</span>
                    <span style={{ fontSize: '0.74rem', color: '#059669', fontWeight: 800 }}>ICD: {r.icd}</span>
                  </div>
                  <div style={{ flex: 1, fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>
                    {r.dischargeDate}
                  </div>
                  <div style={{ flex: 1 }}>
                    {r.mlc ? (
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#dc2626', background: '#fee2e2', padding: '3px 8px', borderRadius: 'var(--radius-pill)', border: '1.5px solid #f87171', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                        <Scale size={12} /> MLC Sealed
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15803d', background: '#dcfce7', padding: '3px 8px', borderRadius: 'var(--radius-pill)', border: '1.5px solid #4ade80' }}>
                        Standard
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#475569', borderTop: '2px solid #e2e8f0', paddingTop: '10px', fontWeight: 600 }}>
            <span>Supports Digital Document Scans & File Movement Tracking (/MRD/Movement)</span>
            <span style={{ color: '#059669', fontWeight: 700 }}>✓ Legal Audit Certified</span>
          </div>
        </div>

        {/* Right: Statutory Registries & Retention Governance with High-Contrast Borders */}
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
            <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: 800 }}>
              Statutory Vaults & Certificates
            </h4>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: 'var(--radius-pill)', background: '#e0e7ff', color: '#3730a3', border: '1.5px solid #818cf8' }}>
              /Certificate/Index
            </span>
          </div>

          {/* Medico-Legal Case (MLC) Protocol Card with High-Contrast Red Border */}
          <div style={{ 
            background: '#ffffff', 
            borderRadius: 'var(--radius-md)', 
            padding: '14px', 
            border: '2px solid #f87171', 
            boxShadow: '0 3px 8px rgba(220, 38, 38, 0.1)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626' }}>
              <Scale size={18} />
              <strong style={{ fontSize: '0.86rem' }}>Medico-Legal Case (MLC) Protocol Vault</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.76rem', color: '#475569', lineHeight: 1.45 }}>
              Automated police intimation slips, chain-of-custody tracking, and post-mortem / injury reporting with tamper-proof electronic signatures.
            </p>
          </div>

          {/* Vital Statistics Registry Card with High-Contrast Border */}
          <div style={{ 
            background: '#ffffff', 
            borderRadius: 'var(--radius-md)', 
            padding: '14px', 
            border: '2px solid #cbd5e1', 
            boxShadow: '0 3px 8px rgba(100, 116, 139, 0.1)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '8px' 
          }}>
            <strong style={{ fontSize: '0.84rem', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Statutory Government Certificates (/Certificate):
            </strong>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#334155', background: '#f8fafc', padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #e2e8f0' }}>
                <span>• Birth Certificate Registration:</span>
                <strong style={{ color: '#059669' }}>Form 1 Mapped</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#334155', background: '#f8fafc', padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #e2e8f0' }}>
                <span>• Medical Cause of Death (MCCD):</span>
                <strong style={{ color: '#059669' }}>Form 4 / 4A Sealed</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#334155', background: '#f8fafc', padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #e2e8f0' }}>
                <span>• Medical Fitness / Disability Cert:</span>
                <strong style={{ color: '#2563eb' }}>QR Verified</strong>
              </div>
            </div>
          </div>

          <div style={{ 
            marginTop: 'auto', 
            padding: '12px', 
            background: '#f0fdf4', 
            borderRadius: 'var(--radius-md)', 
            border: '2px solid #86efac', 
            fontSize: '0.78rem', 
            color: '#14532d', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            boxShadow: '0 2px 6px rgba(34, 197, 94, 0.12)'
          }}>
            <CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
            <span style={{ fontWeight: 600 }}>
              Physical barcode tracking prevents lost physical folders with /MRD/Movement logs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
