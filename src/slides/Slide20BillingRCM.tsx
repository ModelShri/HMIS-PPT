import React, { useState } from 'react';
import { 
  Receipt, 
  CreditCard, 
  ShieldCheck, 
  Coins, 
  FileCheck, 
  CheckCircle2, 
  Calculator,
  Download,
  Wallet,
  ArrowRight
} from 'lucide-react';

export const Slide20BillingRCM: React.FC = () => {
  const [coveragePercent, setCoveragePercent] = useState<number>(80);
  const [advancePaid] = useState<number>(15000);

  const billItems = [
    { item: 'Deluxe Room Bed Charges (3 Nights @ ₹3,200/night)', dept: 'Ward Master', gross: 9600 },
    { item: 'Laparoscopic OT Surgery & Anesthesia Package', dept: 'OT Billing', gross: 42000 },
    { item: 'Consultant & Surgeon Round Evaluation Fees', dept: 'Clinical Care', gross: 8500 },
    { item: 'Inpatient Pharmacy Medications & Consumables', dept: 'Pharmacy Dispense', gross: 7420 },
    { item: 'Laboratory & High-Resolution Imaging Tests', dept: 'Diagnostics LIS/RIS', gross: 5800 },
  ];

  const totalGross = billItems.reduce((acc, curr) => acc + curr.gross, 0); // 73320
  const insurancePays = Math.round((totalGross * coveragePercent) / 100);
  const patientGrossShare = totalGross - insurancePays;
  const netPayableAtDischarge = Math.max(0, patientGrossShare - advancePaid);
  const refundDue = patientGrossShare < advancePaid ? advancePaid - patientGrossShare : 0;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '24px', height: '100%' }}>
      {/* Left: Itemized Bill Ledger & Breakdown */}
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
            <div className="clay-icon-bubble" style={{ border: '2px solid #0d9488', color: '#0d9488', background: '#f0fdfa' }}>
              <Receipt size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                Itemized Inpatient (IP) Billing Ledger
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                Patient: David Miller • Encounter #IP-2026-4412 • /Billing/IPList
              </span>
            </div>
          </div>

          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: 'var(--radius-pill)',
            background: '#ccfbf1',
            color: '#115e59',
            border: '2px solid #14b8a6'
          }}>
            Real-Time Charge Sync
          </span>
        </div>

        {/* Itemized Charge Stream Table with High-Contrast Borders */}
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
            <div style={{ flex: 2.8 }}>Service / Package Description</div>
            <div style={{ flex: 1.4 }}>Department</div>
            <div style={{ flex: 1.1, textAlign: 'right' }}>Amount (₹)</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {billItems.map((b, idx) => (
              <div 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  padding: '10px 14px', 
                  borderBottom: idx < billItems.length - 1 ? '1.5px solid #e2e8f0' : 'none', 
                  fontSize: '0.82rem', 
                  alignItems: 'center',
                  background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                }}
              >
                <div style={{ flex: 2.8, fontWeight: 700, color: '#0f172a' }}>{b.item}</div>
                <div style={{ flex: 1.4, color: '#475569', fontSize: '0.78rem', fontWeight: 600 }}>{b.dept}</div>
                <div style={{ flex: 1.1, textAlign: 'right', fontWeight: 800, color: '#0f172a' }}>₹{b.gross.toLocaleString('en-IN')}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gross Total Bar with Distinct Border */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '12px 16px', 
          background: '#f8fafc', 
          borderRadius: 'var(--radius-md)', 
          border: '2px solid #cbd5e1',
          boxShadow: '0 2px 6px rgba(100, 116, 139, 0.08)'
        }}>
          <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#1e293b' }}>
            Total Gross Hospital Charges (/Billing):
          </span>
          <span style={{ fontWeight: 900, fontSize: '1.35rem', color: '#0f172a' }}>
            ₹{totalGross.toLocaleString('en-IN')}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#475569', borderTop: '2px solid #e2e8f0', paddingTop: '10px', fontWeight: 600 }}>
          <span>Supports: OP Billing, Package Billing & User-Wise Collection (/Reports/UserWiseReport)</span>
          <span style={{ color: '#059669', fontWeight: 700 }}>✓ Zero Revenue Leakage</span>
        </div>
      </div>

      {/* Right: Insurance TPA Cashless Split Billing Simulator */}
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
              TPA Insurance & Advance Settlement
            </h4>
            <span style={{ fontSize: '0.74rem', color: '#4338ca', fontWeight: 600 }}>
              Sub-modules: /Billing/Insurance & /Patient/Advance_Collection
            </span>
          </div>
          <span style={{ 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            padding: '3px 8px', 
            borderRadius: 'var(--radius-pill)', 
            background: '#e0e7ff', 
            color: '#3730a3', 
            border: '1.5px solid #818cf8' 
          }}>
            Pre-Auth Approved
          </span>
        </div>

        {/* Coverage Slider Box with High-Contrast Border */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 'var(--radius-md)', 
          padding: '14px', 
          border: '2px solid #cbd5e1', 
          boxShadow: '0 3px 8px rgba(100, 116, 139, 0.1)' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase' }}>
              TPA Policy Coverage Slider:
            </span>
            <strong style={{ fontSize: '0.95rem', color: '#4f46e5' }}>{coveragePercent}% Covered by Insurer</strong>
          </div>
          <input
            type="range"
            min={50}
            max={100}
            step={5}
            value={coveragePercent}
            onChange={(e) => setCoveragePercent(Number(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '4px', fontWeight: 600 }}>
            <span>50% Co-Pay</span>
            <span>80% Standard TPA</span>
            <span>100% Full Cashless</span>
          </div>
        </div>

        {/* Split Breakdown Result with High-Contrast Green & Orange Borders */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ 
            padding: '14px', 
            background: '#f0fdf4', 
            borderRadius: 'var(--radius-md)', 
            border: '2px solid #16a34a', 
            boxShadow: '0 3px 8px rgba(22, 163, 74, 0.15)' 
          }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#14532d', textTransform: 'uppercase', display: 'block' }}>
              Insurer Pays (TPA Claim):
            </span>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#15803d', marginTop: '4px' }}>
              ₹{insurancePays.toLocaleString('en-IN')}
            </div>
            <span style={{ fontSize: '0.72rem', color: '#166534', fontWeight: 600 }}>Direct Cashless Settlement</span>
          </div>

          <div style={{ 
            padding: '14px', 
            background: '#fff7ed', 
            borderRadius: 'var(--radius-md)', 
            border: '2px solid #ea580c', 
            boxShadow: '0 3px 8px rgba(234, 88, 12, 0.15)' 
          }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7c2d12', textTransform: 'uppercase', display: 'block' }}>
              Patient Co-Pay Share:
            </span>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#c2410c', marginTop: '4px' }}>
              ₹{patientGrossShare.toLocaleString('en-IN')}
            </div>
            <span style={{ fontSize: '0.72rem', color: '#9a3412', fontWeight: 600 }}>Total Patient Responsibility</span>
          </div>
        </div>

        {/* IP Advance Offset Box with High-Contrast Border */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 'var(--radius-md)', 
          padding: '12px 14px', 
          border: '2px solid #cbd5e1', 
          boxShadow: '0 3px 8px rgba(100, 116, 139, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Wallet size={15} style={{ color: '#2563eb' }} />
              IP Advance Deposit (/Patient/Advance_Collection):
            </span>
            <strong style={{ fontSize: '0.85rem', color: '#059669' }}>-₹{advancePaid.toLocaleString('en-IN')}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid #e2e8f0', paddingTop: '6px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#1e293b' }}>
              Net Due at Discharge Terminal:
            </span>
            <strong style={{ fontSize: '1.1rem', color: netPayableAtDischarge > 0 ? '#dc2626' : '#059669', fontWeight: 900 }}>
              {netPayableAtDischarge > 0 ? `₹${netPayableAtDischarge.toLocaleString('en-IN')}` : `Refund: ₹${refundDue.toLocaleString('en-IN')}`}
            </strong>
          </div>
        </div>

        {/* Footer Financial Reconciliation Note */}
        <div style={{ 
          marginTop: 'auto', 
          padding: '10px 12px', 
          background: '#f8fafc', 
          borderRadius: 'var(--radius-md)', 
          border: '2px solid #cbd5e1', 
          fontSize: '0.76rem', 
          color: '#334155', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px' 
        }}>
          <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
          <span>
            Reconciles with Accounts & Cash/Bank Book (/Finance/CashTable & /Billing/RefundList).
          </span>
        </div>
      </div>
    </div>
  );
};
