import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  X, 
  Lock, 
  UserCheck, 
  KeyRound,
  FileCheck,
  CheckCircle2
} from 'lucide-react';

interface RolePermission {
  role: string;
  category: string;
  scope: 'All Branches' | 'Assigned Branch' | 'Assigned Ward';
  desc: string;
  modules: {
    dashboard: boolean;
    registration: boolean;
    triage: boolean;
    op: boolean;
    ip: boolean;
    emr: boolean;
    clinical: boolean;
    diagnostics: boolean;
    billing: boolean;
    pharmacy: boolean;
    bloodbank: boolean;
    mrd: boolean;
    hr: boolean;
    masters: boolean;
  };
  crud: {
    save: boolean;
    update: boolean;
    modify: boolean;
    delete: boolean;
    cancel: boolean;
    print: boolean;
  };
}

export const Slide08RBAC: React.FC = () => {
  const roles: RolePermission[] = [
    {
      role: 'Super Administrator',
      category: 'Enterprise IT',
      scope: 'All Branches',
      desc: 'Unrestricted enterprise authority over all 21 HMIS modules, schema settings, tenant configs, and database audit logs.',
      modules: { dashboard: true, registration: true, triage: true, op: true, ip: true, emr: true, clinical: true, diagnostics: true, billing: true, pharmacy: true, bloodbank: true, mrd: true, hr: true, masters: true },
      crud: { save: true, update: true, modify: true, delete: true, cancel: true, print: true }
    },
    {
      role: 'Senior Consultant / Doctor',
      category: 'Clinical',
      scope: 'Assigned Branch',
      desc: 'Full clinical charting, diagnosis, e-prescriptions, lab ordering, and casesheet documentation. Strictly restricted from billing & master settings.',
      modules: { dashboard: true, registration: false, triage: true, op: true, ip: true, emr: true, clinical: true, diagnostics: true, billing: false, pharmacy: false, bloodbank: false, mrd: false, hr: false, masters: false },
      crud: { save: true, update: true, modify: true, delete: false, cancel: true, print: true }
    },
    {
      role: 'Staff Nurse (Inpatient / ICU)',
      category: 'Clinical Nursing',
      scope: 'Assigned Ward',
      desc: 'Bed census inspection, vital charts, triage assessments, nursing notes, and bedside medication administration.',
      modules: { dashboard: true, registration: false, triage: true, op: false, ip: true, emr: true, clinical: true, diagnostics: false, billing: false, pharmacy: false, bloodbank: false, mrd: false, hr: false, masters: false },
      crud: { save: true, update: true, modify: false, delete: false, cancel: false, print: true }
    },
    {
      role: 'Chief Pharmacist',
      category: 'Pharmacy & Formulary',
      scope: 'Assigned Branch',
      desc: 'FEFO stock allocation, POS dispensing, Goods Received Notes (GRN), and purchase order requisitions.',
      modules: { dashboard: true, registration: false, triage: false, op: false, ip: false, emr: false, clinical: false, diagnostics: false, billing: false, pharmacy: true, bloodbank: false, mrd: false, hr: false, masters: false },
      crud: { save: true, update: true, modify: true, delete: false, cancel: true, print: true }
    },
    {
      role: 'Billing & Cashier Executive',
      category: 'Revenue Cycle',
      scope: 'Assigned Branch',
      desc: 'OPD bills, IP advance receipts, insurance pre-authorization claims, and cash book reconciliation. No clinical chart access.',
      modules: { dashboard: true, registration: true, triage: false, op: true, ip: true, emr: false, clinical: false, diagnostics: false, billing: true, pharmacy: false, bloodbank: false, mrd: false, hr: false, masters: false },
      crud: { save: true, update: true, modify: false, delete: false, cancel: true, print: true }
    },
    {
      role: 'Laboratory / Radiology Tech',
      category: 'Diagnostics',
      scope: 'Assigned Branch',
      desc: 'Sample barcode verification, test result validation, radiology report uploads, and critical panic value alerts.',
      modules: { dashboard: true, registration: false, triage: false, op: false, ip: false, emr: false, clinical: false, diagnostics: true, billing: false, pharmacy: false, bloodbank: false, mrd: false, hr: false, masters: false },
      crud: { save: true, update: true, modify: true, delete: false, cancel: false, print: true }
    },
  ];

  const [selectedRole, setSelectedRole] = useState<RolePermission>(roles[0]);

  const moduleList = [
    { key: 'dashboard', label: 'Dashboard & Summary' },
    { key: 'registration', label: 'Patient Registration' },
    { key: 'triage', label: 'Emergency & Triage' },
    { key: 'op', label: 'Outpatient (OP)' },
    { key: 'ip', label: 'Inpatient & Bed Manager' },
    { key: 'emr', label: 'Casesheet & EMR' },
    { key: 'clinical', label: 'Clinical Departments' },
    { key: 'diagnostics', label: 'Diagnostics & Lab' },
    { key: 'billing', label: 'Billing & Finance' },
    { key: 'pharmacy', label: 'Pharmacy & Stock' },
    { key: 'bloodbank', label: 'Blood Bank Module' },
    { key: 'mrd', label: 'Medical Records (MRD)' },
    { key: 'hr', label: 'HRMS & Employee Portal' },
    { key: 'masters', label: 'Masters Configuration' },
  ];

  const crudList = [
    { key: 'save', label: 'Save (Insert)' },
    { key: 'update', label: 'Update (Edit)' },
    { key: 'modify', label: 'Modify Rights' },
    { key: 'delete', label: 'Delete Records' },
    { key: 'cancel', label: 'Cancel / Void' },
    { key: 'print', label: 'Print Reports' },
  ];

  return (
    <div className="rbac-slide-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '22px', height: '100%' }}>
      {/* Left: Role Selection Grid */}
      <div className="rbac-roles-col" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#1e293b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Admin_Master Role Security
          </h4>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4338ca', background: '#e0e7ff', padding: '2px 8px', borderRadius: 'var(--radius-pill)', border: '1.5px solid #818cf8' }}>
            ASP.NET Identity RBAC
          </span>
        </div>

        <div className="rbac-roles-list" style={{ display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto', paddingRight: '4px', maxHeight: '430px' }}>
          {roles.map((r) => {
            const isSelected = r.role === selectedRole.role;
            return (
              <div
                key={r.role}
                onClick={() => setSelectedRole(r)}
                style={{
                  padding: '10px 14px',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? '#f5f7ff' : '#ffffff',
                  border: isSelected ? '2.5px solid #4f46e5' : '2px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(99, 102, 241, 0.18)' : '0 2px 4px rgba(100, 116, 139, 0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div 
                    style={{ 
                      width: '34px', 
                      height: '34px', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isSelected ? '#4f46e5' : '#f1f5f9',
                      color: isSelected ? '#ffffff' : '#4f46e5',
                      border: `1.5px solid ${isSelected ? '#4f46e5' : '#cbd5e1'}`,
                      flexShrink: 0
                    }}
                  >
                    <UserCheck size={16} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.86rem', color: isSelected ? '#4338ca' : '#0f172a', fontWeight: 800 }}>
                      {r.role}
                    </h4>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                      {r.category} • {r.scope}
                    </span>
                  </div>
                </div>

                <span style={{ 
                  fontSize: '0.68rem', 
                  fontWeight: 700, 
                  padding: '2px 8px', 
                  borderRadius: 'var(--radius-pill)',
                  background: isSelected ? '#4338ca' : '#f1f5f9',
                  color: isSelected ? '#ffffff' : '#475569',
                  border: `1px solid ${isSelected ? '#4338ca' : '#cbd5e1'}`
                }}>
                  {isSelected ? 'Active' : 'Inspect'}
                </span>
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
          <KeyRound size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
          <span style={{ fontSize: '0.78rem', color: '#14532d', lineHeight: 1.4, fontWeight: 600 }}>
            Strict Principle of Least Privilege: Every route and controller validates Admin_Master boolean claims before execution.
          </span>
        </div>
      </div>

      {/* Right: Detailed Permissions Matrix with High-Contrast Borders */}
      <div 
        className="clay-card rbac-matrix-card" 
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
              Admin_Master Module Matrix
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
              {selectedRole.role}
            </h3>
            <span style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 500 }}>{selectedRole.desc}</span>
          </div>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            padding: '4px 12px', 
            borderRadius: 'var(--radius-pill)', 
            background: '#e0e7ff', 
            color: '#3730a3', 
            border: '2px solid #818cf8',
            fontSize: '0.74rem',
            fontWeight: 800 
          }}>
            <Lock size={13} />
            {selectedRole.scope}
          </div>
        </div>

        {/* Granular CRUD Rights Bar from Admin_Master */}
        <div style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '2px solid #cbd5e1' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
            Admin_Master Operational Flags (Save, Update, Modify, Delete, Cancel, Print):
          </span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {crudList.map((crud) => {
              // @ts-expect-error dynamic key
              const isAllowed = selectedRole.crud[crud.key];
              return (
                <span 
                  key={crud.key}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-pill)',
                    background: isAllowed ? '#dcfce7' : '#fee2e2',
                    color: isAllowed ? '#15803d' : '#b91c1c',
                    border: `1.5px solid ${isAllowed ? '#4ade80' : '#f87171'}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {isAllowed ? <Check size={12} /> : <X size={12} />}
                  {crud.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Module Access Grid with High-Contrast Green/Red Pills */}
        <div className="rbac-modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', overflowY: 'auto', maxHeight: '210px', paddingRight: '4px' }}>
          {moduleList.map((mod) => {
            // @ts-expect-error dynamic key
            const isGranted = selectedRole.modules[mod.key];
            return (
              <div
                key={mod.key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '7px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: isGranted ? '#f0fdf4' : '#fef2f2',
                  border: isGranted ? '1.5px solid #86efac' : '1.5px solid #fca5a5',
                }}
              >
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: isGranted ? '#14532d' : '#991b1b' }}>
                  {mod.label}
                </span>

                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: isGranted ? '#16a34a' : '#dc2626',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isGranted ? <Check size={12} /> : <X size={12} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security Audit Footer */}
        <div style={{ 
          marginTop: 'auto', 
          padding: '10px 14px', 
          borderRadius: 'var(--radius-md)', 
          background: '#eff6ff', 
          border: '2px solid #93c5fd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.76rem',
          color: '#1e40af'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <FileCheck size={16} style={{ color: '#2563eb' }} />
            Loaded via Raw ADO.NET SqlDataReader for High-Speed Zero-Mapping Overhead
          </span>
          <span style={{ fontWeight: 800 }}>
            Has(permission) Guard Active
          </span>
        </div>
      </div>
    </div>
  );
};
