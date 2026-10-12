import React, { useState } from 'react';
import { 
  Users, 
  Cog, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Network, 
  Building, 
  Database, 
  TrendingUp, 
  CheckCircle2,
  Compass
} from 'lucide-react';

interface Slide02VisionProps {
  onJumpToSlide?: (slideId: number) => void;
  onStart?: () => void;
}

export const Slide02Vision: React.FC<Slide02VisionProps> = ({ onJumpToSlide, onStart }) => {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  // 7 Interactive Hotspots mapped over the 3D hospital artwork
  const departmentHotspots = [
    { id: 'emergency', name: 'Emergency', slide: 11, style: { top: '38%', left: '3%' }, color: '#f43f5e' },
    { id: 'billing', name: 'Billing', slide: 20, style: { top: '65%', left: '3%' }, color: '#a855f7' },
    { id: 'opd', name: 'OPD', slide: 12, style: { top: '10%', left: '16%' }, color: '#0ea5e9' },
    { id: 'ipd', name: 'IPD', slide: 14, style: { top: '4%', left: '33%' }, color: '#8b5cf6' },
    { id: 'pharmacy', name: 'Pharmacy', slide: 19, style: { top: '10%', left: '50%' }, color: '#f97316' },
    { id: 'laboratory', name: 'Laboratory', slide: 16, style: { top: '30%', left: '66%' }, color: '#10b981' },
    { id: 'radiology', name: 'Radiology', slide: 17, style: { top: '56%', left: '63%' }, color: '#3b82f6' },
  ];

  const handleJump = (slide: number) => {
    if (onJumpToSlide) onJumpToSlide(slide);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'radial-gradient(ellipse at 70% 30%, #fdf4ff 0%, #f8faff 40%, #eff6ff 80%, #f0fdf4 100%)',
      borderRadius: 'var(--radius-xl)',
      padding: '20px 28px 16px 28px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      userSelect: 'none'
    }}>
      {/* Background Soft 3D Cloud Puffs */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '120px',
        width: '320px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(254, 205, 211, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
        filter: 'blur(35px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '80px',
        left: '-30px',
        width: '300px',
        height: '180px',
        background: 'radial-gradient(circle, rgba(243, 232, 255, 0.55) 0%, rgba(255, 255, 255, 0) 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* TOP HEADER ROW: Section Pill + Slide Counter + Strategic Vision Tag */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        zIndex: 2,
        marginBottom: '2px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            background: '#f3e8ff',
            border: '1.5px solid #d8b4fe',
            borderRadius: '9999px',
            padding: '3px 12px',
            fontSize: '0.72rem',
            fontWeight: 800,
            color: '#7e22ce',
            letterSpacing: '0.04em'
          }}>
            SECTION A : INTRODUCTION & VISION
          </div>
          <div style={{
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1.5px solid #cbd5e1',
            borderRadius: '9999px',
            padding: '3px 10px',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#475569'
          }}>
            Slide 02 / 28
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: '#fdf4ff',
          border: '1.5px solid #f0abfc',
          borderRadius: '9999px',
          padding: '4px 12px',
          fontSize: '0.72rem',
          fontWeight: 800,
          color: '#c026d3'
        }}>
          <Compass size={14} />
          <span>STRATEGIC VISION</span>
        </div>
      </div>

      {/* MIDDLE SECTION: Headline + Our Vision Card + 3D Hospital Artwork */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1.15fr',
        gap: '24px',
        alignItems: 'center',
        flex: 1,
        minHeight: 0,
        zIndex: 2
      }}>
        {/* LEFT COLUMN: Headline & "Our Vision" Card */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '14px'
        }}>
          {/* Main Title */}
          <div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.4rem',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0f2b5c',
              letterSpacing: '-0.03em',
              margin: '0 0 6px 0'
            }}>
              The Vision: Connected<br />
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Healthcare Ecosystem
              </span>
            </h1>
            <p style={{
              margin: 0,
              fontSize: '0.96rem',
              color: '#475569',
              fontWeight: 500
            }}>
              Eliminating silos between doctors, nurses, patients, diagnostics, and management.
            </p>
          </div>

          {/* "Our Vision" Plush Clay Card */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 255, 0.9) 100%)',
            border: '2px solid #c7d2fe',
            borderRadius: '22px',
            padding: '16px 20px',
            boxShadow: '0 12px 28px rgba(99, 102, 241, 0.12), inset 0 2px 4px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(99, 102, 241, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 14px rgba(139, 92, 246, 0.35), inset 0 2px 2px rgba(255, 255, 255, 0.4)'
              }}>
                <Compass size={18} strokeWidth={2.5} />
              </div>
              <strong style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: 'var(--font-heading)'
              }}>
                Our Vision
              </strong>
            </div>

            <p style={{
              margin: 0,
              fontSize: '0.86rem',
              color: '#334155',
              lineHeight: 1.5,
              fontWeight: 500
            }}>
              A fully integrated hospital management platform that connects clinical, administrative, and financial operations to deliver smarter, faster, and more efficient healthcare.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Hospital Campus with Floating Badges & Cursive Signature */}
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
            maxHeight: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/assets/hospital_3d_slide2.png"
              alt="Connected Healthcare Hospital Campus"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                userSelect: 'none',
                filter: 'drop-shadow(0 14px 32px rgba(15, 23, 42, 0.12))'
              }}
            />

            {/* Interactive Clickable Hotspots overlaying the 7 3D Badges */}
            {departmentHotspots.map((h) => {
              const isHovered = hoveredBadge === h.id;
              return (
                <div
                  key={h.id}
                  onClick={() => handleJump(h.slide)}
                  onMouseEnter={() => setHoveredBadge(h.id)}
                  onMouseLeave={() => setHoveredBadge(null)}
                  style={{
                    position: 'absolute',
                    ...h.style,
                    cursor: 'pointer',
                    zIndex: 10,
                    transform: isHovered ? 'scale(1.14)' : 'scale(1)',
                    transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                  title={`Click to jump to ${h.name} (Slide ${h.slide})`}
                >
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '16px',
                    background: isHovered ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
                    border: isHovered ? `2.5px solid ${h.color}` : '2px dashed rgba(255, 255, 255, 0.35)',
                    boxShadow: isHovered ? `0 0 18px ${h.color}` : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}>
                    {isHovered && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-26px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#0f172a',
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 8px',
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

      {/* 4 DISTINCT COLORED CLAYMORPHIC CARDS (Separate Color for Each Box) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginTop: '8px',
        marginBottom: '8px',
        zIndex: 2
      }}>
        {/* Card 1: Mint / Emerald Green (Better Patient Care) */}
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          border: '2px solid #86efac',
          borderRadius: '20px',
          padding: '13px 14px',
          boxShadow: '0 10px 22px rgba(16, 185, 129, 0.16), inset 0 2px 3px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(5, 150, 105, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'default'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {/* Header with circular 3D icon bubble */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(16, 185, 129, 0.35), inset 0 2px 2px rgba(255,255,255,0.4)',
              flexShrink: 0
            }}>
              <Users size={18} />
            </div>
            <strong style={{
              fontSize: '0.88rem',
              fontWeight: 800,
              color: '#065f46',
              lineHeight: 1.2
            }}>
              Better<br />Patient Care
            </strong>
          </div>

          {/* 3 Green Bullet Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#166534', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#16a34a" />
              <span>Seamless patient journey</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#166534', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#16a34a" />
              <span>Reduced waiting time</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#166534', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#16a34a" />
              <span>Improved care coordination</span>
            </div>
          </div>
        </div>

        {/* Card 2: Rose / Pink / Magenta (Efficient Operations) */}
        <div style={{
          background: 'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
          border: '2px solid #fecdd3',
          borderRadius: '20px',
          padding: '13px 14px',
          boxShadow: '0 10px 22px rgba(244, 63, 94, 0.16), inset 0 2px 3px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(225, 29, 72, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'default'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {/* Header with circular 3D icon bubble */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f43f5e, #e11d48)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(244, 63, 94, 0.35), inset 0 2px 2px rgba(255,255,255,0.4)',
              flexShrink: 0
            }}>
              <Cog size={18} />
            </div>
            <strong style={{
              fontSize: '0.88rem',
              fontWeight: 800,
              color: '#9f1239',
              lineHeight: 1.2
            }}>
              Efficient<br />Operations
            </strong>
          </div>

          {/* 3 Magenta Bullet Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#9f1239', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#e11d48" />
              <span>Digital workflows</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#9f1239', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#e11d48" />
              <span>Reduced manual work</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#9f1239', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#e11d48" />
              <span>Optimized resource utilization</span>
            </div>
          </div>
        </div>

        {/* Card 3: Warm Amber / Golden Yellow (Real-time Information) */}
        <div style={{
          background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
          border: '2px solid #fde68a',
          borderRadius: '20px',
          padding: '13px 14px',
          boxShadow: '0 10px 22px rgba(245, 158, 11, 0.16), inset 0 2px 3px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(217, 119, 6, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'default'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {/* Header with circular 3D icon bubble */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(245, 158, 11, 0.35), inset 0 2px 2px rgba(255,255,255,0.4)',
              flexShrink: 0
            }}>
              <BarChart3 size={18} />
            </div>
            <strong style={{
              fontSize: '0.88rem',
              fontWeight: 800,
              color: '#92400e',
              lineHeight: 1.2
            }}>
              Real-time<br />Information
            </strong>
          </div>

          {/* 3 Amber Bullet Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#92400e', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#d97706" />
              <span>Live data across departments</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#92400e', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#d97706" />
              <span>Better decision making</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#92400e', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#d97706" />
              <span>Complete operational visibility</span>
            </div>
          </div>
        </div>

        {/* Card 4: Royal Sky Blue (Secure & Reliable) */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          border: '2px solid #bae6fd',
          borderRadius: '20px',
          padding: '13px 14px',
          boxShadow: '0 10px 22px rgba(2, 132, 199, 0.16), inset 0 2px 3px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(3, 105, 161, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          cursor: 'default'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          {/* Header with circular 3D icon bubble */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(14, 165, 233, 0.35), inset 0 2px 2px rgba(255,255,255,0.4)',
              flexShrink: 0
            }}>
              <ShieldCheck size={18} />
            </div>
            <strong style={{
              fontSize: '0.88rem',
              fontWeight: 800,
              color: '#075985',
              lineHeight: 1.2
            }}>
              Secure &<br />Reliable
            </strong>
          </div>

          {/* 3 Blue Bullet Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#075985', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#0284c7" />
              <span>Role-based access</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#075985', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#0284c7" />
              <span>Audit logs & traceability</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#075985', fontWeight: 600 }}>
              <CheckCircle2 size={13} color="#0284c7" />
              <span>Data security & compliance</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM RIBBON: Translucent Dock with 5 Modules + Explore Button */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(12px)',
        borderRadius: '18px',
        border: '1.5px solid #cbd5e1',
        padding: '8px 18px',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        zIndex: 5
      }}>
        {/* Module 1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: '#e0f2fe',
            color: '#0284c7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Users size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Complete</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: 1.1 }}>Hospital Solution</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '22px', background: '#cbd5e1' }} />

        {/* Module 2 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: '#ffedd5',
            color: '#ea580c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Building size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Multi-Branch</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: 1.1 }}>Support</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '22px', background: '#cbd5e1' }} />

        {/* Module 3 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: '#e0e7ff',
            color: '#4f46e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Database size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Integrated</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: 1.1 }}>Modules</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '22px', background: '#cbd5e1' }} />

        {/* Module 4 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: '#f3e8ff',
            color: '#8b5cf6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Network size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Scalable</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: 1.1 }}>Architecture</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '22px', background: '#cbd5e1' }} />

        {/* Module 5 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: '#ffe4e6',
            color: '#e11d48',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TrendingUp size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.1 }}>Data-driven</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', lineHeight: 1.1 }}>Decisions</div>
          </div>
        </div>

        {/* Action Button: Explore the System */}
        <button
          onClick={onStart}
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #c026d3 100%)',
            color: '#ffffff',
            padding: '10px 22px',
            borderRadius: '9999px',
            fontSize: '0.9rem',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(124, 58, 237, 0.4), inset 0 1px 2px rgba(255,255,255,0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            marginLeft: '6px'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <span>Explore the System</span>
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
