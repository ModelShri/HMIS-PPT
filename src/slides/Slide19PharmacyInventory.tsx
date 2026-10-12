import React, { useState } from 'react';
import { 
  Pill, 
  Boxes, 
  CheckCircle2, 
  ArrowRight,
  ShoppingCart,
  Receipt,
  FileCheck2,
  Calendar,
  Layers,
  Calculator,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

export const Slide19PharmacyInventory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inventory' | 'purchasing' | 'billing'>('inventory');

  const inventory = [
    { sku: 'MED-101', name: 'Atorvastatin 20mg Tablets', batch: 'BT-8821', expiry: 'Nov-2027', stock: 1450, status: 'Healthy', fefoRank: '#1 Active' },
    { sku: 'MED-204', name: 'Amoxicillin + Clav 625mg', batch: 'BT-4410', expiry: 'Jan-2026', stock: 120, status: 'Reorder Now', fefoRank: '#1 Active' },
    { sku: 'MED-309', name: 'Paracetamol 1000mg IV Infusion', batch: 'BT-9092', expiry: 'Dec-2025', stock: 48, status: 'Critical Low', fefoRank: '#1 Active' },
    { sku: 'MED-412', name: 'Enoxaparin Sodium 40mg Prefilled', batch: 'BT-3129', expiry: 'Aug-2026', stock: 410, status: 'Healthy', fefoRank: '#1 Active' },
    { sku: 'MED-550', name: 'Ondansetron 4mg/2mL Ampoules', batch: 'BT-1022', expiry: 'Mar-2026', stock: 320, status: 'Healthy', fefoRank: '#1 Active' },
  ];

  const purchaseOrders = [
    { poNumber: 'PO-2026-8829', vendor: 'Pfizer BioPharma Ltd', amount: '₹1,45,200', items: '12 SKUs', status: 'Approved & Sent', grnStatus: 'Pending GRN' },
    { poNumber: 'PO-2026-8830', vendor: 'Cipla Healthcare Group', amount: '₹84,500', items: '6 SKUs', status: 'GRN Received', grnStatus: 'GRN #4412 Verified' },
    { poNumber: 'PO-2026-8831', vendor: 'Sun Pharma Distribution', amount: '₹2,10,000', items: '18 SKUs', status: 'Draft Indent', grnStatus: 'Awaiting Approval' },
  ];

  const posSales = [
    { invoiceNo: 'INV-PH-9921', patient: 'Rajesh Sharma (OPD)', items: 4, gross: '₹1,240', gst: '₹148', net: '₹1,388', payMode: 'UPI / Cash' },
    { invoiceNo: 'INV-PH-9922', patient: 'Pooja Verma (IPD-Bed 302)', items: 7, gross: '₹3,850', gst: '₹462', net: '₹4,312', payMode: 'IP Advance Ledger' },
    { invoiceNo: 'INV-PH-9923', patient: 'Dr. Walk-in OTC Dispense', items: 2, gross: '₹420', gst: '₹50', net: '₹470', payMode: 'Credit Card' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '16px' }}>
      {/* Top Module Sub-Navigation matching user's Razor sidebar modules */}
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
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', marginRight: '6px' }}>
            HMIS Pharmacy Modules:
          </span>

          <button 
            type="button"
            onClick={() => setActiveTab('inventory')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'inventory' ? '2px solid #d97706' : '1.5px solid #cbd5e1',
              background: activeTab === 'inventory' ? '#fef3c7' : '#ffffff',
              color: activeTab === 'inventory' ? '#92400e' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <Boxes size={15} />
            Inventory & FEFO Engine
          </button>

          <button 
            type="button"
            onClick={() => setActiveTab('purchasing')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'purchasing' ? '2px solid #2563eb' : '1.5px solid #cbd5e1',
              background: activeTab === 'purchasing' ? '#eff6ff' : '#ffffff',
              color: activeTab === 'purchasing' ? '#1e40af' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <ShoppingCart size={15} />
            Purchasing & GRN (/PharmacyPO)
          </button>

          <button 
            type="button"
            onClick={() => setActiveTab('billing')}
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: activeTab === 'billing' ? '2px solid #dc2626' : '1.5px solid #cbd5e1',
              background: activeTab === 'billing' ? '#fef2f2' : '#ffffff',
              color: activeTab === 'billing' ? '#991b1b' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
          >
            <Receipt size={15} />
            POS Billing & Sales (/PharmacyBilling)
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            padding: '4px 10px', 
            borderRadius: 'var(--radius-pill)', 
            background: '#ecfdf5', 
            color: '#065f46',
            border: '1.5px solid #34d399'
          }}>
            ✓ ASP.NET Core Active
          </span>
          <span style={{ 
            fontSize: '0.72rem', 
            fontWeight: 700, 
            padding: '4px 10px', 
            borderRadius: 'var(--radius-pill)', 
            background: '#e0e7ff', 
            color: '#3730a3',
            border: '1.5px solid #818cf8'
          }}>
            Multi-Branch Formulary
          </span>
        </div>
      </div>

      {/* Main Content Grid with High-Contrast Distinct Borders */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '22px', flex: 1 }}>
        {/* Left Card: Core Operational Workdesk */}
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
          {activeTab === 'inventory' && (
            <>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="clay-icon-bubble" style={{ border: '2px solid #d97706', color: '#d97706', background: '#fffbeb' }}>
                    <Pill size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                      Pharmacy Stock & FEFO Batch Engine
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                      Sub-modules: /PharmacyStock, /PharmacyFefo, /PharmacyBatch
                    </span>
                  </div>
                </div>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#fef3c7',
                  color: '#92400e',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  border: '2px solid #f59e0b'
                }}>
                  FEFO AUTO-LOCK ACTIVE
                </span>
              </div>

              {/* FEFO Highlight Banner with High-Contrast Border */}
              <div style={{ 
                padding: '12px 14px', 
                background: '#fffbeb', 
                borderRadius: 'var(--radius-sm)', 
                border: '2px solid #f59e0b', 
                display: 'flex', 
                gap: '10px', 
                alignItems: 'center',
                boxShadow: '0 2px 6px rgba(245, 158, 11, 0.15)'
              }}>
                <Boxes size={20} style={{ color: '#d97706', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', color: '#78350f', lineHeight: 1.45 }}>
                  <strong>FEFO Allocation Protocol:</strong> The dispensing terminal automatically locks and decrements the earliest-expiring batch first, completely preventing obsolete expired drug write-offs.
                </span>
              </div>

              {/* Stock Table with High-Contrast Borders */}
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
                  <div style={{ flex: 2.2 }}>Medicine / Molecule</div>
                  <div style={{ flex: 1.1 }}>Batch #</div>
                  <div style={{ flex: 1.1 }}>Expiry</div>
                  <div style={{ flex: 1.1 }}>In Stock</div>
                  <div style={{ flex: 1.1 }}>FEFO Rank</div>
                  <div style={{ flex: 1.2 }}>Stock Status</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {inventory.map((item, idx) => {
                    const isLow = item.status.includes('Low') || item.status.includes('Reorder');
                    return (
                      <div 
                        key={idx} 
                        style={{ 
                          display: 'flex', 
                          padding: '10px 14px', 
                          borderBottom: idx < inventory.length - 1 ? '1.5px solid #e2e8f0' : 'none', 
                          fontSize: '0.82rem', 
                          alignItems: 'center',
                          background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                        }}
                      >
                        <div style={{ flex: 2.2, fontWeight: 700, color: '#0f172a' }}>{item.name}</div>
                        <div style={{ flex: 1.1, fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#2563eb', fontWeight: 600 }}>{item.batch}</div>
                        <div style={{ flex: 1.1, color: '#475569', fontSize: '0.78rem', fontWeight: 600 }}>{item.expiry}</div>
                        <div style={{ flex: 1.1, fontWeight: 800, color: isLow ? '#dc2626' : '#0f172a' }}>{item.stock} Units</div>
                        <div style={{ flex: 1.1 }}>
                          <span style={{ 
                            fontSize: '0.7rem', 
                            fontWeight: 700, 
                            padding: '2px 8px', 
                            borderRadius: 'var(--radius-pill)', 
                            background: '#eff6ff', 
                            color: '#1d4ed8', 
                            border: '1.5px solid #93c5fd' 
                          }}>
                            {item.fefoRank}
                          </span>
                        </div>
                        <div style={{ flex: 1.2 }}>
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '3px 9px',
                            borderRadius: 'var(--radius-pill)',
                            background: isLow ? '#fee2e2' : '#dcfce7',
                            color: isLow ? '#b91c1c' : '#15803d',
                            border: isLow ? '1.5px solid #f87171' : '1.5px solid #4ade80',
                          }}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Micro Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#475569', borderTop: '2px solid #e2e8f0', paddingTop: '10px' }}>
                <span style={{ fontWeight: 600 }}>Connected to: /PharmacyStockTransfer & /PharmacyPhysicalStock</span>
                <span style={{ color: '#059669', fontWeight: 700 }}>✓ Zero Stock Discrepancy Verified</span>
              </div>
            </>
          )}

          {activeTab === 'purchasing' && (
            <>
              {/* Purchasing Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="clay-icon-bubble" style={{ border: '2px solid #2563eb', color: '#2563eb', background: '#eff6ff' }}>
                    <ShoppingCart size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                      Purchasing & Procurement Center
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                      Sub-modules: /PharmacyPO, /PharmacyGRN, /PharmacySupplierPayment
                    </span>
                  </div>
                </div>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#eff6ff',
                  color: '#1e40af',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  border: '2px solid #3b82f6'
                }}>
                  3 ACTIVE PURCHASE ORDERS
                </span>
              </div>

              {/* Purchase Orders Table */}
              <div style={{ border: '2px solid #cbd5e1', borderRadius: 'var(--radius-md)', overflow: 'hidden', flex: 1, background: '#ffffff' }}>
                <div style={{ 
                  display: 'flex', 
                  background: '#e2e8f0', 
                  padding: '10px 14px', 
                  borderBottom: '2px solid #cbd5e1', 
                  fontSize: '0.75rem', 
                  fontWeight: 800, 
                  color: '#1e293b', 
                  textTransform: 'uppercase'
                }}>
                  <div style={{ flex: 1.3 }}>PO Number</div>
                  <div style={{ flex: 2 }}>Vendor / Supplier</div>
                  <div style={{ flex: 1.1 }}>Amount</div>
                  <div style={{ flex: 1 }}>Items</div>
                  <div style={{ flex: 1.5 }}>GRN Verification</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {purchaseOrders.map((po, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        padding: '12px 14px', 
                        borderBottom: idx < purchaseOrders.length - 1 ? '1.5px solid #e2e8f0' : 'none', 
                        fontSize: '0.82rem', 
                        alignItems: 'center',
                        background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                      }}
                    >
                      <div style={{ flex: 1.3, fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#2563eb' }}>{po.poNumber}</div>
                      <div style={{ flex: 2, fontWeight: 600, color: '#0f172a' }}>{po.vendor}</div>
                      <div style={{ flex: 1.1, fontWeight: 800, color: '#059669' }}>{po.amount}</div>
                      <div style={{ flex: 1, color: '#475569', fontWeight: 600 }}>{po.items}</div>
                      <div style={{ flex: 1.5 }}>
                        <span style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 700, 
                          padding: '3px 8px', 
                          borderRadius: 'var(--radius-pill)', 
                          background: po.grnStatus.includes('Verified') ? '#dcfce7' : '#fef3c7', 
                          color: po.grnStatus.includes('Verified') ? '#15803d' : '#92400e', 
                          border: po.grnStatus.includes('Verified') ? '1.5px solid #4ade80' : '1.5px solid #f59e0b' 
                        }}>
                          {po.grnStatus}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#475569', borderTop: '2px solid #e2e8f0', paddingTop: '10px' }}>
                <span style={{ fontWeight: 600 }}>Integrated with /PharmacyPurchaseReturn (Debit Notes & Rejections)</span>
                <span style={{ color: '#2563eb', fontWeight: 700 }}>3-Way Match: PO ↔ GRN ↔ Invoice</span>
              </div>
            </>
          )}

          {activeTab === 'billing' && (
            <>
              {/* POS Billing Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="clay-icon-bubble" style={{ border: '2px solid #dc2626', color: '#dc2626', background: '#fef2f2' }}>
                    <Receipt size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                      POS Billing & Sales Register
                    </h3>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                      Sub-modules: /PharmacyBilling, /PharmacySalesReturn, /PharmacyPricing
                    </span>
                  </div>
                </div>

                <span style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#fef2f2',
                  color: '#991b1b',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  border: '2px solid #f87171'
                }}>
                  LIVE COUNTER TERMINAL
                </span>
              </div>

              {/* POS Sales Table */}
              <div style={{ border: '2px solid #cbd5e1', borderRadius: 'var(--radius-md)', overflow: 'hidden', flex: 1, background: '#ffffff' }}>
                <div style={{ 
                  display: 'flex', 
                  background: '#e2e8f0', 
                  padding: '10px 14px', 
                  borderBottom: '2px solid #cbd5e1', 
                  fontSize: '0.75rem', 
                  fontWeight: 800, 
                  color: '#1e293b', 
                  textTransform: 'uppercase'
                }}>
                  <div style={{ flex: 1.3 }}>Bill No</div>
                  <div style={{ flex: 2 }}>Patient / Encounter</div>
                  <div style={{ flex: 0.9 }}>Items</div>
                  <div style={{ flex: 1.1 }}>Net Total</div>
                  <div style={{ flex: 1.5 }}>Payment Mode</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {posSales.map((sale, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        display: 'flex', 
                        padding: '12px 14px', 
                        borderBottom: idx < posSales.length - 1 ? '1.5px solid #e2e8f0' : 'none', 
                        fontSize: '0.82rem', 
                        alignItems: 'center',
                        background: idx % 2 === 0 ? '#ffffff' : '#f8fafc'
                      }}
                    >
                      <div style={{ flex: 1.3, fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#0f172a' }}>{sale.invoiceNo}</div>
                      <div style={{ flex: 2, fontWeight: 600, color: '#334155' }}>{sale.patient}</div>
                      <div style={{ flex: 0.9, fontWeight: 700, color: '#64748b' }}>{sale.items} SKUs</div>
                      <div style={{ flex: 1.1, fontWeight: 800, color: '#dc2626' }}>{sale.net}</div>
                      <div style={{ flex: 1.5 }}>
                        <span style={{ 
                          fontSize: '0.72rem', 
                          fontWeight: 700, 
                          padding: '3px 8px', 
                          borderRadius: 'var(--radius-pill)', 
                          background: '#f1f5f9', 
                          color: '#1e293b', 
                          border: '1.5px solid #cbd5e1' 
                        }}>
                          {sale.payMode}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#475569', borderTop: '2px solid #e2e8f0', paddingTop: '10px' }}>
                <span style={{ fontWeight: 600 }}>Supports Barcode Scanning & Instant Thermal Bill Print</span>
                <span style={{ color: '#059669', fontWeight: 700 }}>Real-Time IP Advance Settlement</span>
              </div>
            </>
          )}
        </div>

        {/* Right Card: Multi-Tier Hierarchy, Auto-PO Engine & Tariff Rules */}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={18} style={{ color: '#4f46e5' }} />
              Formulary & Procurement Intelligence
            </h4>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4338ca', background: '#e0e7ff', border: '1.5px solid #818cf8', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
              UOM & REORDER ENGINE
            </span>
          </div>

          {/* Multi-Tier Unit Hierarchy Box with High-Contrast Border */}
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
            <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#4338ca', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Unit of Measure (UOM) Multi-Pack Hierarchy:
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', background: '#f8fafc', padding: '8px 10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #e2e8f0' }}>
              <span>1 Master Shipper (50 Boxes)</span>
              <ArrowRight size={14} style={{ color: '#6366f1' }} />
              <span>1 Box (10 Strips)</span>
              <ArrowRight size={14} style={{ color: '#6366f1' }} />
              <span>1 Strip (10 Tabs)</span>
            </div>
            <span style={{ fontSize: '0.73rem', color: '#475569', lineHeight: 1.4 }}>
              Purchase at Box level from vendor, inventory tracked at Strip level, dispensed at single Tablet level to wards.
            </span>
          </div>

          {/* Auto Purchase Reorder Trigger Box with High-Contrast Border */}
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Pending Auto-Reorder PO (/PharmacyPO):
              </span>
              <span style={{ fontSize: '0.72rem', color: '#b91c1c', fontWeight: 800, background: '#fee2e2', padding: '2px 8px', borderRadius: 'var(--radius-pill)', border: '1px solid #f87171' }}>
                2 SKUs Below Minimum
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.78rem', color: '#1e293b', display: 'flex', justifyContent: 'space-between', background: '#fef2f2', padding: '8px 10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #fca5a5' }}>
                <span style={{ fontWeight: 600 }}>Paracetamol IV (48 left &lt; 200 min)</span>
                <strong style={{ color: '#b91c1c' }}>PO #8829 Drafted (500 Units)</strong>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#1e293b', display: 'flex', justifyContent: 'space-between', background: '#fffbeb', padding: '8px 10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #fde68a' }}>
                <span style={{ fontWeight: 600 }}>Amoxicillin Clav (120 left &lt; 300 min)</span>
                <strong style={{ color: '#b45309' }}>PO #8830 Drafted (400 Units)</strong>
              </div>
            </div>
          </div>

          {/* Pricing & Margin Simulator Mini-Widget */}
          <div style={{ 
            background: '#ffffff', 
            borderRadius: 'var(--radius-md)', 
            padding: '14px', 
            border: '2px solid #cbd5e1', 
            boxShadow: '0 3px 8px rgba(100, 116, 139, 0.1)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#0369a1', textTransform: 'uppercase' }}>
                Price & Margin Simulator (/PharmacyPricing):
              </span>
              <span style={{ fontSize: '0.72rem', color: '#075985', fontWeight: 700 }}>Landing Cost Engine</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#334155', background: '#f0f9ff', padding: '6px 10px', borderRadius: 'var(--radius-sm)', border: '1.5px solid #bae6fd' }}>
              <span>MRP: ₹250.00</span>
              <span>Purchase: ₹162.00 (Incl GST 12%)</span>
              <strong style={{ color: '#0369a1' }}>Margin: 35.2%</strong>
            </div>
          </div>

          {/* Footer Verified Card with High-Contrast Green Border */}
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
            boxShadow: '0 2px 6px rgba(34, 197, 94, 0.15)'
          }}>
            <CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
            <span style={{ fontWeight: 600 }}>
              Automatic supplier quotation comparison & Pharmacy MIS reports (/PharmacyMIS).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
