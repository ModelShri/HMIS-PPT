import React, { useState } from 'react';
import { 
  Laptop, 
  Cpu, 
  Workflow, 
  Database, 
  Share2, 
  Server, 
  ChevronRight,
  ShieldAlert,
  ArrowDownUp
} from 'lucide-react';

interface ArchLayer {
  id: string;
  number: string;
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  summary: string;
  components: string[];
  protocols: string[];
  resilienceFeature: string;
}

export const Slide04Architecture: React.FC = () => {
  const layers: ArchLayer[] = [
    {
      id: 'presentation',
      number: 'Layer 01',
      name: 'Presentation & Client Layer',
      icon: Laptop,
      color: '#4f46e5',
      bgColor: '#eef2ff',
      summary: 'Responsive interfaces tailored for clinician desktops, mobile tablet rounds, digital nurse station consoles, and patient check-in kiosks.',
      components: ['Doctor Workstation', 'Nursing Bedside Console', 'Front-Desk Queue Display', 'Pharmacy POS Terminal', 'Executive Analytics Portal'],
      protocols: ['HTTPS / TLS 1.3', 'WebSocket Push Alerts', 'Responsive Progressive Web App'],
      resilienceFeature: 'Offline-tolerant caching for OPD check-in during temporary LAN disruptions.'
    },
    {
      id: 'application',
      number: 'Layer 02',
      name: 'Application & Core Services Layer',
      icon: Cpu,
      color: '#0284c7',
      bgColor: '#e0f2fe',
      summary: 'Centralized business logic executing hospital policies, tariff calculations, role verification, and diagnostic validation.',
      components: ['RBAC Security Engine', 'Clinical Decision Support', 'Dynamic Tariff & Package Calculator', 'Formulary & FEFO Engine', 'Master Data Registry'],
      protocols: ['RESTful Web APIs', 'JSON / gRPC Services', 'Role Token Verification'],
      resilienceFeature: 'Stateless application instances behind automated load balancers.'
    },
    {
      id: 'workflow',
      number: 'Layer 03',
      name: 'Workflow Orchestration Layer',
      icon: Workflow,
      color: '#059669',
      bgColor: '#dcfce7',
      summary: 'Event-driven state machine coordinating complex multi-department patient transitions across clinical departments.',
      components: ['Emergency Fast-Track Flow', 'OPD Token State Manager', 'Inpatient Bed Transfer Pipeline', 'Lab Sample Lifecycle Tracker', 'Discharge Clearance Orchestrator'],
      protocols: ['Event-Driven Queue', 'Automated Timeout Triggers', 'State Machine Validation'],
      resilienceFeature: 'Idempotent workflow steps preventing accidental duplicate orders or charges.'
    },
    {
      id: 'data',
      number: 'Layer 04',
      name: 'Data & Persistence Layer',
      icon: Database,
      color: '#d97706',
      bgColor: '#fef3c7',
      summary: 'Secure relational database engine maintaining clinical longitudinal records, financial transactions, and partitioned immutable audit logs.',
      components: ['Longitudinal EHR Vault', 'Itemized Financial Ledger', 'Hospital Pharmacy Inventory', 'Permanent Audit Log Table', 'Multi-Branch Tenant Partitions'],
      protocols: ['SQL Server / PostgreSQL', 'Transparent Data Encryption (TDE)', 'Row-Level Branch Isolation'],
      resilienceFeature: 'ACID transactional guarantees ensuring financial and inventory balances never drift.'
    },
    {
      id: 'integration',
      number: 'Layer 05',
      name: 'Integration & Interoperability Layer',
      icon: Share2,
      color: '#7c3aed',
      bgColor: '#f3e8ff',
      summary: 'Standardized gateways bridging medical analyzers, PACS imaging servers, government portals, and payment providers.',
      components: ['Bidirectional LIS Analyzer Interface', 'DICOM PACS Gateway', 'HL7 / FHIR Health Exchange', 'SMS & WhatsApp Gateway', 'Payment Aggregator APIs'],
      protocols: ['HL7 v2.x / FHIR R4', 'DICOM C-STORE / WADO', 'ISO-8583 Banking APIs'],
      resilienceFeature: 'Store-and-forward message queues ensuring device telemetry is never dropped.'
    },
    {
      id: 'infrastructure',
      number: 'Layer 06',
      name: 'Infrastructure & Reliability Layer',
      icon: Server,
      color: '#dc2626',
      bgColor: '#fee2e2',
      summary: 'High-availability operational fabric supporting either private on-premises hospital servers or hybrid cloud hosting.',
      components: ['Active-Passive Database Cluster', 'Distributed Redis Memory Cache', 'Background Task Workers', 'Automated Snapshot Backups', 'Real-Time Health Monitoring'],
      protocols: ['Hardware Failover', 'Container Orchestration', '24/7 Telemetry Logs'],
      resilienceFeature: 'Sub-minute recovery point objective (RPO) with zero single points of failure.'
    }
  ];

  const [activeLayer, setActiveLayer] = useState<ArchLayer>(layers[0]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '28px', height: '100%' }}>
      {/* Left: 6 Layer Stack */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Interactive Architecture Stack
          </h4>
          <span style={{ fontSize: '0.78rem', color: '#3b5bdb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ArrowDownUp size={14} /> Bidirectional Data Flow
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, justifyContent: 'space-between' }}>
          {layers.map((l) => {
            const Icon = l.icon;
            const isSelected = activeLayer.id === l.id;
            return (
              <div
                key={l.id}
                onClick={() => setActiveLayer(l)}
                className={`clay-card ${isSelected ? 'clay-card-lavender' : ''}`}
                style={{
                  padding: '12px 18px',
                  cursor: 'pointer',
                  border: isSelected ? `2px solid ${l.color}` : '1px solid rgba(255,255,255,0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  transition: 'all 0.2s',
                }}
              >
                <div
                  className="clay-icon-bubble"
                  style={{ width: '38px', height: '38px', background: l.bgColor, color: l.color }}
                >
                  <Icon size={18} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: l.color, textTransform: 'uppercase' }}>
                      {l.number}
                    </span>
                    <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#0f172a', fontWeight: 700 }}>
                      {l.name}
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', display: 'block', marginTop: '2px' }}>
                    {l.summary.slice(0, 65)}...
                  </span>
                </div>

                <ChevronRight size={18} style={{ color: isSelected ? l.color : '#cbd5e1' }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Selected Layer Deep Dive */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '14px' }}>
          <div className="clay-icon-bubble clay-icon-bubble-lg" style={{ background: activeLayer.bgColor, color: activeLayer.color }}>
            {React.createElement(activeLayer.icon, { size: 28 })}
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: activeLayer.color, textTransform: 'uppercase' }}>
              {activeLayer.number} Inspection
            </span>
            <h3 style={{ margin: '2px 0 0', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
              {activeLayer.name}
            </h3>
          </div>
        </div>

        <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569', lineHeight: 1.5 }}>
          {activeLayer.summary}
        </p>

        {/* Microservices & Components */}
        <div>
          <h5 style={{ margin: '0 0 10px', fontSize: '0.8rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>
            Core Modules & Micro-Engines:
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {activeLayer.components.map((comp, idx) => (
              <div key={idx} style={{ padding: '8px 12px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0', fontSize: '0.82rem', fontWeight: 600, color: '#1e293b' }}>
                • {comp}
              </div>
            ))}
          </div>
        </div>

        {/* Protocols */}
        <div>
          <h5 style={{ margin: '0 0 8px', fontSize: '0.8rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em' }}>
            Protocols & Communication:
          </h5>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {activeLayer.protocols.map((proto, idx) => (
              <span key={idx} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4338ca', background: '#e0e7ff', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}>
                {proto}
              </span>
            ))}
          </div>
        </div>

        {/* Resilience Highlight */}
        <div style={{ marginTop: 'auto', padding: '12px 16px', background: activeLayer.bgColor, borderRadius: 'var(--radius-md)', border: `1px solid ${activeLayer.color}40`, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldAlert size={18} style={{ color: activeLayer.color, flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: activeLayer.color, textTransform: 'uppercase', display: 'block' }}>
              Enterprise High Availability
            </span>
            <span style={{ fontSize: '0.82rem', color: '#1e293b', fontWeight: 500 }}>
              {activeLayer.resilienceFeature}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
