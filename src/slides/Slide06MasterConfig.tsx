import React, { useState } from 'react';
import { 
  Database, 
  Layers, 
  Tag, 
  Bed, 
  Users, 
  CheckCircle,
  FileSpreadsheet,
  Settings2,
  Percent,
  CreditCard,
  ShieldCheck,
  Building2,
  Stethoscope
} from 'lucide-react';

export const Slide06MasterConfig: React.FC = () => {
  const masterCategories = [
    {
      id: 'department',
      title: 'Department Master',
      route: '/Master/Department',
      icon: Building2,
      color: '#4f46e5',
      count: '32 Clinical & Non-Clinical',
      description: 'Hierarchical mapping of Cardiology, General Medicine, Orthopedics, Pediatrics, Radiology, Pathology, and Nursing wards.',
      sampleData: [
        { code: 'DEP-01', name: 'Cardiology & Cath Lab', type: 'Clinical Super-Specialty', head: 'Dr. Sarah Lin, MD' },
        { code: 'DEP-02', name: 'General & Laparoscopic Surgery', type: 'Clinical Surgical', head: 'Dr. Marcus Vance, MS' },
        { code: 'DEP-03', name: 'Emergency & Trauma Care', type: 'Critical Care Unit', head: 'Dr. Elena Rostova, MD' },
      ]
    },
    {
      id: 'ward',
      title: 'Ward Master',
      route: '/Master/Ward',
      icon: Layers,
      color: '#0284c7',
      count: '14 Hospital Wards',
      description: 'Physical & logical ward configurations: Female Surgical Ward, Male Medical Ward, Pediatric ICU, Coronary Care Unit, and Daycare.',
      sampleData: [
        { code: 'WRD-ICU', name: 'Intensive Coronary Care Unit', type: 'Critical Care (Floor 3)', head: '1:1 Nurse Ratio' },
        { code: 'WRD-MSW', name: 'Male Surgical Ward', type: 'General Ward (Floor 2)', head: '1:5 Nurse Ratio' },
        { code: 'WRD-DLX', name: 'Deluxe Private Suite Ward', type: 'Executive Wing (Floor 4)', head: '1:2 Nurse Ratio' },
      ]
    },
    {
      id: 'bed',
      title: 'Bed Master',
      route: '/Master/Bed',
      icon: Bed,
      color: '#0891b2',
      count: '450 Configured Beds',
      description: 'Individual bed registry linked with Ward, Category (Oxygen, Ventilator, Normal), and real-time occupancy status.',
      sampleData: [
        { code: 'BED-301', name: 'ICU Bed 01 (Ventilator Attached)', type: 'Motorized Critical Bed', head: 'Daily: ₹6,500' },
        { code: 'BED-204', name: 'General Bed 04 (Oxygen Port)', type: 'Semi-Fowler Bed', head: 'Daily: ₹1,800' },
        { code: 'BED-412', name: 'Deluxe Suite Bed 12', type: 'Electric Luxury Bed', head: 'Daily: ₹4,200' },
      ]
    },
    {
      id: 'doctor',
      title: 'Doctor Master',
      route: '/Master/Doctor',
      icon: Stethoscope,
      color: '#059669',
      count: '84 Empanelled Specialists',
      description: 'Consultant roster with Department linkage, Consultation Fee, OPD Room Slot, and Digital Signature authentication.',
      sampleData: [
        { code: 'DOC-101', name: 'Dr. Sarah Lin, MD (Cardio)', type: 'OPD Room 104', head: 'Fee: ₹800 / Visit' },
        { code: 'DOC-102', name: 'Dr. Marcus Vance, MS (Ortho)', type: 'OPD Room 202', head: 'Fee: ₹750 / Visit' },
        { code: 'DOC-103', name: 'Dr. A. K. Sharma, MD (Medicine)', type: 'OPD Room 108', head: 'Fee: ₹600 / Visit' },
      ]
    },
    {
      id: 'tariff',
      title: 'Tariff Master',
      route: '/Master/Tariff',
      icon: Tag,
      color: '#d97706',
      count: '1,840 Procedure Codes',
      description: 'Standardized rate charts for OPD Consultations, IPD Bed Charges, OT Surgeries, Nursing charges, and Consumables.',
      sampleData: [
        { code: 'TRF-1001', name: 'Consultant First OPD Consultation', type: 'General Category', head: '₹800 Standard' },
        { code: 'TRF-3004', name: 'Laparoscopic Cholecystectomy Package', type: 'OT Surgical Package', head: '₹65,000 Standard' },
        { code: 'TRF-5021', name: 'Brain MRI with Contrast', type: 'Radiology / Imaging', head: '₹7,500 Standard' },
      ]
    },
    {
      id: 'tax',
      title: 'Tax Master',
      route: '/Master/Tax',
      icon: Percent,
      color: '#b45309',
      count: 'GST & HSN Tax Slabs',
      description: 'Statutory GST slabs (0%, 5%, 12%, 18%) mapped to Pharmacy consumables, Deluxe Room Tariffs, and Corporate Services.',
      sampleData: [
        { code: 'TAX-00', name: 'Exempt Clinical Healthcare Services', type: 'GST Nil (0%)', head: 'Applicable to IPD/OPD care' },
        { code: 'TAX-12', name: 'Standard Pharmacy Drugs & Consumables', type: 'GST 12% (CGST 6% + SGST 6%)', head: 'Pharma Item Slabs' },
        { code: 'TAX-18', name: 'Deluxe Room Rent (>₹5,000/day slab)', type: 'GST 18% Statutory', head: 'Luxury Hospital Beds' },
      ]
    },
    {
      id: 'paymentmode',
      title: 'Payment Mode Master',
      route: '/Master/PaymentMode',
      icon: CreditCard,
      color: '#7c3aed',
      count: '10 Mapped Settlement Channels',
      description: 'Cash, UPI QR Codes (PhonePe/GPay), POS Card Terminals, Net Banking, Cheque, and IP Advance Ledger settlement.',
      sampleData: [
        { code: 'PAY-UPI', name: 'Dynamic UPI QR Code Gateway', type: 'Instant Digital Payment', head: 'Zero Convenience Fee' },
        { code: 'PAY-CARD', name: 'HDFC / PineLabs EDC Machine', type: 'Debit & Credit Cards', head: 'Batch Auth Sync' },
        { code: 'PAY-IPADV', name: 'Patient Inpatient Advance Ledger', type: 'Internal Ledger Settlement', head: 'Real-Time Auto Debit' },
      ]
    },
    {
      id: 'discount',
      title: 'Discount Master',
      route: '/Master/Discount',
      icon: Tag,
      color: '#ea580c',
      count: 'Approval Matrix Tiers',
      description: 'Pre-approved discount policies: Staff / Family Concession, Senior Citizen, Charitable Trust, and Medical Director Concessions.',
      sampleData: [
        { code: 'DISC-SR', name: 'Senior Citizen Health Concession', type: '15% on Diagnostics', head: 'Auto Validated on Age' },
        { code: 'DISC-EMP', name: 'Hospital Staff & Dependent Scheme', type: '50% on OPD / IPD', head: 'HR Verification Locked' },
        { code: 'DISC-DIR', name: 'Managing Director Discretionary Relief', type: 'Custom / Full Waiver', head: 'Biometric / OTP Signoff' },
      ]
    },
    {
      id: 'insurance',
      title: 'Insurance & TPA Master',
      route: '/Master/Insurance',
      icon: ShieldCheck,
      color: '#2563eb',
      count: '28 Empanelled Payers',
      description: 'Comprehensive registry of TPAs (Medi Assist, Star Health, ICICI Lombard, Ayushman Bharat PM-JAY, CGHS, ECHS).',
      sampleData: [
        { code: 'TPA-STAR', name: 'Star Health & Allied Insurance', type: 'Cashless Pre-Auth Empanelled', head: 'Credit Period: 30 Days' },
        { code: 'TPA-PMJAY', name: 'Ayushman Bharat PM-JAY Scheme', type: 'Government Health Mission', head: 'Package Fixed Tariffs' },
        { code: 'TPA-MEDI', name: 'Medi Assist Insurance TPA Pvt Ltd', type: 'Corporate Cashless Desk', head: 'Real-Time Portal Link' },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(masterCategories[0]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.35fr', gap: '22px', height: '100%' }}>
      {/* Left: Category Selector matching user's exact Razor Masters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
          <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            HMIS Masters Registry (/Master/*)
          </h4>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4338ca', background: '#e0e7ff', padding: '2px 8px', borderRadius: 'var(--radius-pill)', border: '1.5px solid #818cf8' }}>
            9 Central Masters
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto', paddingRight: '4px', maxHeight: '420px' }}>
          {masterCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = cat.id === activeCategory.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 14px',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? '#f5f7ff' : '#ffffff',
                  border: isSelected ? `2.5px solid ${cat.color}` : '2px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(99, 102, 241, 0.18)' : '0 2px 4px rgba(100, 116, 139, 0.05)',
                }}
              >
                <div
                  style={{ 
                    width: '34px', 
                    height: '34px', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isSelected ? cat.color : '#f1f5f9',
                    color: isSelected ? '#ffffff' : cat.color,
                    border: `1.5px solid ${isSelected ? cat.color : '#cbd5e1'}`,
                    flexShrink: 0
                  }}
                >
                  <Icon size={17} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ margin: 0, fontSize: '0.86rem', color: isSelected ? cat.color : '#1e293b', fontWeight: 800 }}>
                      {cat.title}
                    </h4>
                    <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                      {cat.route}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                    {cat.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ 
          padding: '10px 14px', 
          background: '#f0fdf4', 
          borderRadius: 'var(--radius-md)', 
          border: '2px solid #86efac', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          marginTop: 'auto' 
        }}>
          <CheckCircle size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
          <span style={{ fontSize: '0.78rem', color: '#14532d', lineHeight: 1.4, fontWeight: 600 }}>
            Strict RBAC Governance: Only SuperAdmin & authorized Hospital roles can add or modify master rates.
          </span>
        </div>
      </div>

      {/* Right: Master Data Table Preview with High-Contrast Borders */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                background: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activeCategory.color,
                border: `2px solid ${activeCategory.color}`
              }}
            >
              {React.createElement(activeCategory.icon, { size: 22 })}
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                {activeCategory.title}
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>
                Controller: {activeCategory.route} • {activeCategory.count}
              </span>
            </div>
          </div>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            padding: '4px 12px', 
            borderRadius: 'var(--radius-pill)', 
            background: '#eff6ff', 
            color: '#1d4ed8', 
            border: '2px solid #93c5fd',
            fontSize: '0.75rem',
            fontWeight: 700 
          }}>
            <Settings2 size={14} />
            Versioned & Audited
          </div>
        </div>

        <p style={{ margin: 0, fontSize: '0.84rem', color: '#334155', lineHeight: 1.45, fontWeight: 500 }}>
          {activeCategory.description}
        </p>

        {/* Live Table Mockup with High-Contrast Border */}
        <div style={{ border: '2px solid #cbd5e1', borderRadius: 'var(--radius-md)', overflow: 'hidden', flex: 1, background: '#ffffff' }}>
          <div style={{ 
            display: 'flex', 
            background: '#e2e8f0', 
            padding: '10px 14px', 
            borderBottom: '2px solid #cbd5e1', 
            fontWeight: 800, 
            fontSize: '0.75rem', 
            color: '#1e293b', 
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            <div style={{ flex: 1.1 }}>Master Code</div>
            <div style={{ flex: 2 }}>Official Description</div>
            <div style={{ flex: 1.4 }}>Classification / Rate</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {activeCategory.sampleData.map((row: any, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  padding: '12px 14px', 
                  borderBottom: i < activeCategory.sampleData.length - 1 ? '1.5px solid #e2e8f0' : 'none', 
                  fontSize: '0.82rem', 
                  alignItems: 'center',
                  background: i % 2 === 0 ? '#ffffff' : '#f8fafc'
                }}
              >
                <div style={{ flex: 1.1, fontFamily: 'var(--font-mono)', fontWeight: 700, color: activeCategory.color }}>
                  {row.code}
                </div>
                <div style={{ flex: 2, fontWeight: 700, color: '#0f172a' }}>
                  {row.name}
                </div>
                <div style={{ flex: 1.4, color: '#334155', fontWeight: 600 }}>
                  {row.type}
                  {row.head && (
                    <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                      {row.head}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ 
          marginTop: 'auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          fontSize: '0.76rem', 
          color: '#475569', 
          borderTop: '2px solid #e2e8f0', 
          paddingTop: '10px',
          fontWeight: 600 
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileSpreadsheet size={16} style={{ color: '#059669' }} />
            Supports Excel Bulk Import & EF Core Migration Sync
          </span>
          <span style={{ color: '#2563eb', fontWeight: 700 }}>
            ASP.NET Core Identity Tied
          </span>
        </div>
      </div>
    </div>
  );
};
