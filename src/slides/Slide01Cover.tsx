import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  Users, 
  Cog, 
  BarChart3, 
  ShieldCheck, 
  Network, 
  Building, 
  Server, 
  TrendingUp,
  X,
  Sparkles,
  HeartPulse,
  ChevronRight
} from 'lucide-react';

interface Slide01CoverProps {
  onStart: () => void;
  onJumpToSlide: (slideId: number) => void;
}

export const Slide01Cover: React.FC<Slide01CoverProps> = ({ onStart, onJumpToSlide }) => {
  const [showOverviewModal, setShowOverviewModal] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  // 6 Interactive Hotspot badges mapped over the 3D hospital artwork
  const departmentHotspots = [
    {
      id: 'emergency',
      name: 'Emergency & Triage',
      slide: 11,
      style: { top: '30%', left: '4%' },
      color: '#ef4444',
      bgGlow: 'rgba(239, 68, 68, 0.25)',
      description: 'Code Red / Triage / Ambulance Intake'
    },
    {
      id: 'opd',
      name: 'OPD Clinic',
      slide: 12,
      style: { top: '8%', left: '16%' },
      color: '#3b82f6',
      bgGlow: 'rgba(59, 130, 246, 0.25)',
      description: 'Doctor Consultation & e-Prescription'
    },
    {
      id: 'ipd',
      name: 'IPD & Bed Manager',
      slide: 14,
      style: { top: '5%', left: '41%' },
      color: '#8b5cf6',
      bgGlow: 'rgba(139, 92, 246, 0.25)',
      description: 'Ward Census, Beds & Nursing Rounds'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy & Stock',
      slide: 19,
      style: { top: '7%', left: '64%' },
      color: '#f97316',
      bgGlow: 'rgba(249, 115, 22, 0.25)',
      description: 'FEFO Dispensing & POS Billing'
    },
    {
      id: 'laboratory',
      name: 'Laboratory LIS',
      slide: 16,
      style: { top: '21%', left: '81%' },
      color: '#10b981',
      bgGlow: 'rgba(16, 185, 129, 0.25)',
      description: 'Sample Barcodes, Analyser & Reports'
    },
    {
      id: 'radiology',
      name: 'Radiology RIS/PACS',
      slide: 17,
      style: { top: '44%', left: '84%' },
      color: '#06b6d4',
      bgGlow: 'rgba(6, 182, 212, 0.25)',
      description: 'DICOM Viewer & Modality Scheduling'
    },
  ];

  return (
    <div className="cover-slide-container" style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'radial-gradient(ellipse at 70% 30%, #eaf2ff 0%, #f4f8ff 50%, #e8f0fe 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '24px 32px 18px 32px',
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* Background soft clouds decor */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '150px',
        width: '320px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(30px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        left: '20%',
        width: '400px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(219, 234, 254, 0.7) 0%, rgba(255,255,255,0) 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* TOP & MIDDLE SECTION (Left Text & Right Hospital) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1.15fr',
        gap: '24px',
        alignItems: 'center',
        flex: 1,
        minHeight: 0,
        zIndex: 2
      }}>
        {/* LEFT COLUMN: Visual Brand, Headline, Cards, CTAs */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '12px',
          paddingRight: '12px'
        }}>
          {/* Top Header Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px rgba(37, 99, 235, 0.35)',
              color: '#ffffff',
              flexShrink: 0
            }}>
              <HeartPulse size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#0f2b5c',
                letterSpacing: '0.04em',
                lineHeight: 1.1
              }}>
                HMIS
              </div>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#475569',
                lineHeight: 1.2
              }}>
                Complete Hospital Solution
              </div>
            </div>
          </div>

          {/* Main Hero Typography */}
          <div style={{ marginTop: '6px' }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '4.4rem',
              fontWeight: 900,
              lineHeight: 0.95,
              color: '#0b2559',
              letterSpacing: '-0.04em',
              margin: '0 0 6px 0',
              textShadow: '0 2px 10px rgba(11, 37, 89, 0.08)'
            }}>
              HMIS
            </h1>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.1rem',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#122e66',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Hospital Management<br />Information System
            </h2>
            <p style={{
              fontSize: '1.08rem',
              fontWeight: 500,
              color: '#475569',
              margin: '8px 0 0 0',
              letterSpacing: '-0.01em'
            }}>
              One Integrated Platform. Smarter Healthcare.
            </p>
          </div>

          {/* 4 Feature Pill Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            marginTop: '4px',
            marginBottom: '4px'
          }}>
            {/* Card 1: Better Patient Care */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.92)',
              borderRadius: '16px',
              padding: '12px 8px',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)',
              border: '1.5px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#f3e8ff',
                color: '#8b5cf6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Users size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>Better</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#64748b', lineHeight: 1.2 }}>Patient Care</div>
              </div>
            </div>

            {/* Card 2: Efficient Operations */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.92)',
              borderRadius: '16px',
              padding: '12px 8px',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)',
              border: '1.5px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#e0f2fe',
                color: '#0284c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cog size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>Efficient</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#64748b', lineHeight: 1.2 }}>Operations</div>
              </div>
            </div>

            {/* Card 3: Real-time Information */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.92)',
              borderRadius: '16px',
              padding: '12px 8px',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)',
              border: '1.5px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#ffedd5',
                color: '#ea580c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BarChart3 size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>Real-time</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#64748b', lineHeight: 1.2 }}>Information</div>
              </div>
            </div>

            {/* Card 4: Secure & Reliable */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.92)',
              borderRadius: '16px',
              padding: '12px 8px',
              textAlign: 'center',
              boxShadow: '0 6px 18px rgba(15, 23, 42, 0.06)',
              border: '1.5px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.2 }}>Secure</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#64748b', lineHeight: 1.2 }}>& Reliable</div>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px' }}>
            {/* Explore the System button */}
            <button
              onClick={onStart}
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 50%, #c026d3 100%)',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.45), 0 2px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <span>Explore the System</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>

            {/* Watch Overview button */}
            <button
              onClick={() => setShowOverviewModal(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#1e293b',
                padding: '11px 22px',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1.5px solid #cbd5e1',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#94a3b8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Play size={12} fill="#2563eb" style={{ marginLeft: '1px' }} />
              </div>
              <span>Watch Overview</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Hospital with characters, ambulance & floating department badges */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            height: '100%',
            maxHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/assets/hospital_3d_hero.png"
              alt="Claymorphic Hospital Campus"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                userSelect: 'none',
                filter: 'drop-shadow(0 14px 32px rgba(15, 23, 42, 0.10))',
                clipPath: 'inset(0 0 16% 0)'
              }}
            />

            {/* Interactive Clickable Hotspots overlaying the 6 3D Badges */}
            {departmentHotspots.map((h) => {
              const isHovered = hoveredBadge === h.id;
              return (
                <div
                  key={h.id}
                  onClick={() => onJumpToSlide(h.slide)}
                  onMouseEnter={() => setHoveredBadge(h.id)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  style={{
                    position: 'absolute',
                    ...h.style,
                    cursor: 'pointer',
                    zIndex: 10,
                    transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                  title={`Click to jump to ${h.name} (Slide ${h.slide})`}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    background: isHovered ? h.bgGlow : 'transparent',
                    border: isHovered ? `2.5px solid ${h.color}` : '2px dashed rgba(255,255,255,0.4)',
                    boxShadow: isHovered ? `0 0 20px ${h.color}` : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}>
                    {isHovered && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-28px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#0f172a',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: '6px',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        zIndex: 30
                      }}>
                        Slide {h.slide}: {h.name} →
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Floating Dock Ribbon + Cursive Signature */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '8px',
        zIndex: 5
      }}>
        {/* Floating Dock Ribbon */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(12px)',
          borderRadius: '18px',
          border: '1.5px solid #cbd5e1',
          padding: '10px 22px',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#8b5cf6' }}>
              <Network size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>All Departments</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.1 }}>Connected</div>
            </div>
          </div>

          <div style={{ width: '1px', height: '24px', background: '#cbd5e1' }} />

          {/* Feature 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#f59e0b' }}>
              <Building size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Multi-Branch</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.1 }}>Support</div>
            </div>
          </div>

          <div style={{ width: '1px', height: '24px', background: '#cbd5e1' }} />

          {/* Feature 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#6366f1' }}>
              <Server size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Scalable</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.1 }}>Architecture</div>
            </div>
          </div>

          <div style={{ width: '1px', height: '24px', background: '#cbd5e1' }} />

          {/* Feature 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#ef4444' }}>
              <TrendingUp size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Data-driven</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', lineHeight: 1.1 }}>Decisions</div>
            </div>
          </div>
        </div>

        {/* Cursive Handwriting Signature */}
        <div style={{
          textAlign: 'right',
          paddingRight: '12px'
        }}>
          <div style={{
            fontFamily: "'Caveat', 'Dancing Script', cursive",
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 0.95,
            color: '#1e3a8a',
            transform: 'rotate(-3deg)',
            letterSpacing: '0.01em',
            textShadow: '0 2px 4px rgba(30, 58, 138, 0.10)'
          }}>
            Smarter Hospitals
          </div>
          <div style={{
            fontFamily: "'Caveat', 'Dancing Script', cursive",
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 0.95,
            color: '#1e3a8a',
            transform: 'rotate(-3deg)',
            letterSpacing: '0.01em',
            textShadow: '0 2px 4px rgba(30, 58, 138, 0.10)'
          }}>
            Healthier Tomorrow
          </div>
        </div>
      </div>

      {/* OVERVIEW VIDEO / TOUR MODAL */}
      {showOverviewModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '840px',
            border: '2px solid #cbd5e1',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1.5px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#f8fafc'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#dbeafe',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    HMIS System Overview & Core Capabilities
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>
                    Executive walkthrough of the 28 integrated modules
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowOverviewModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '8px'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '14px'
              }}>
                <div style={{
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1.5px solid #e2e8f0',
                  background: '#f8fafc'
                }}>
                  <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '1.4rem' }}>28 Modules</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>Unified Hospital OS</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
                    From Emergency Triage to IPD Discharge and Financial MIS.
                  </div>
                </div>

                <div style={{
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1.5px solid #e2e8f0',
                  background: '#f8fafc'
                }}>
                  <div style={{ color: '#16a34a', fontWeight: 800, fontSize: '1.4rem' }}>100% RBAC</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>Zero-Trust Audit Security</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
                    Strict role permissions synchronized with ASP.NET Core Identity.
                  </div>
                </div>

                <div style={{
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1.5px solid #e2e8f0',
                  background: '#f8fafc'
                }}>
                  <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.4rem' }}>Multi-Branch</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>Isolated Tenant Database</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
                    Central HQ oversight with localized branch operations.
                  </div>
                </div>
              </div>

              {/* Department Shortcut Grid */}
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', marginBottom: '10px' }}>
                  Quick Jump to Core Modules:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {departmentHotspots.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => {
                        setShowOverviewModal(false);
                        onJumpToSlide(d.slide);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1.5px solid #cbd5e1',
                        background: '#ffffff',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: d.color
                        }} />
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1e293b' }}>{d.name}</div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{d.description}</div>
                        </div>
                      </div>
                      <ChevronRight size={16} color="#94a3b8" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1.5px solid #e2e8f0',
              background: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Press Esc or click outside to dismiss
              </span>
              <button
                onClick={() => {
                  setShowOverviewModal(false);
                  onStart();
                }}
                style={{
                  background: '#2563eb',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Start Slide Presentation →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
