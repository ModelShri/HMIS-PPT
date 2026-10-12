import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  RotateCw, 
  CheckCircle2, 
  CloudRain, 
  Cpu, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export const Slide26ReliabilityInfra: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'Node A (Primary)' | 'Node B (Failover)'>('Node A (Primary)');
  const [isFailingOver, setIsFailingOver] = useState(false);

  const simulateFailover = () => {
    setIsFailingOver(true);
    setTimeout(() => {
      setActiveNode(prev => prev === 'Node A (Primary)' ? 'Node B (Failover)' : 'Node A (Primary)');
      setIsFailingOver(false);
    }, 1800);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '28px', height: '100%' }}>
      {/* Left: Interactive High Availability Infrastructure Topology */}
      <div className="clay-card" style={{ padding: '24px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="clay-icon-bubble" style={{ color: '#dc2626' }}>
              <Server size={20} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-heading)', color: '#0f172a' }}>
                99.99% High Availability Topology
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Clustered Database Failover & Redundant Infrastructure</span>
            </div>
          </div>

          <button
            onClick={simulateFailover}
            disabled={isFailingOver}
            className="clay-button clay-button-primary"
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            <RotateCw size={14} className={isFailingOver ? 'clay-float' : ''} />
            <span>{isFailingOver ? 'Switching Clustered Nodes...' : 'Test Auto-Failover'}</span>
          </button>
        </div>

        {/* Visual Topology Diagram */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, justifyContent: 'center' }}>
          {/* Layer 1: Edge Load Balancer */}
          <div style={{ padding: '12px 18px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#dbeafe', color: '#1d4ed8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '0.85rem', color: '#0f172a' }}>Redundant Hardware Load Balancers</strong>
                <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>Round-Robin SSL Offloading & Instant Health Probes</span>
              </div>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#16a34a', background: '#dcfce7', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
              ONLINE (ACTIVE)
            </span>
          </div>

          {/* Layer 2: Stateless Application Farm */}
          <div style={{ padding: '12px 18px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#e0e7ff', color: '#4338ca', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Cpu size={16} />
              </div>
              <div>
                <strong style={{ fontSize: '0.85rem', color: '#0f172a' }}>Auto-Scaling Application Instance Pool</strong>
                <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block' }}>4 Stateless Clustered Nodes (Container Orchestrated)</span>
              </div>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#16a34a', background: '#dcfce7', padding: '3px 8px', borderRadius: 'var(--radius-pill)' }}>
              4 / 4 HEALTHY
            </span>
          </div>

          {/* Layer 3: Clustered Database Nodes */}
          <div style={{ padding: '14px 18px', background: '#eff6ff', borderRadius: 'var(--radius-md)', border: '2px solid #3b5bdb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#3b5bdb', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Database size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>Clustered Database Engine</strong>
                <span style={{ fontSize: '0.75rem', color: '#3b5bdb', fontWeight: 700, display: 'block' }}>
                  Current Active Leader: {activeNode}
                </span>
              </div>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#15803d', background: '#dcfce7', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}>
              SYNCHRONOUS REPLICA OK
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
          <span>Automated database leader election without manual human intervention</span>
          <span style={{ color: '#059669', fontWeight: 600 }}>✓ Zero Transactional Drift</span>
        </div>
      </div>

      {/* Right: Disaster Recovery Metrics & SLAs */}
      <div className="clay-card clay-card-lavender" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1e293b', fontWeight: 800 }}>
          Business Continuity Guarantees (SLA)
        </h4>

        {/* SLA Benchmarks */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ padding: '16px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', boxShadow: 'var(--clay-shadow-sm)' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase' }}>
              Recovery Point Objective (RPO)
            </span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>
              &lt; 60 Secs
            </div>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Maximum data loss in worst-case disaster</span>
          </div>

          <div style={{ padding: '16px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', boxShadow: 'var(--clay-shadow-sm)' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase' }}>
              Recovery Time Objective (RTO)
            </span>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>
              &lt; 15 Mins
            </div>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Full hospital system operational recovery</span>
          </div>
        </div>

        {/* Backup Safeguard Card */}
        <div style={{ background: '#ffffff', borderRadius: 'var(--radius-md)', padding: '16px', border: '1px solid #e2e8f0', boxShadow: 'var(--clay-shadow-sm)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <strong style={{ fontSize: '0.85rem', color: '#0f172a' }}>Automated Multi-Zone Backup Strategy:</strong>
          <div style={{ fontSize: '0.8rem', color: '#334155' }}>• Hourly differential transaction backups</div>
          <div style={{ fontSize: '0.8rem', color: '#334155' }}>• Daily full database snapshots with AES-256 encryption</div>
          <div style={{ fontSize: '0.8rem', color: '#334155' }}>• Geo-redundant replication to offsite air-gapped facility</div>
        </div>

        <div style={{ marginTop: 'auto', padding: '12px', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', fontSize: '0.78rem', color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
          <span>Compatible with on-premise hospital datacenters and secure private clouds.</span>
        </div>
      </div>
    </div>
  );
};
