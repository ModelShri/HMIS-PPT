import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  Receipt,
  Network,
  Server,
  Activity,
  Send,
  X,
  Clock,
  Layers,
  Phone,
  Mail,
  PhoneCall
} from 'lucide-react';

interface Slide28WhyChooseUsProps {
  onRestart: () => void;
  onJumpToSlide: (slideId: number) => void;
}

export const Slide28WhyChooseUs: React.FC<Slide28WhyChooseUsProps> = ({ onRestart, onJumpToSlide }) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    hospitalName: '',
    contactPerson: 'Srikanth Kumar',
    email: 'kumarsrikanth050595@gmail.com',
    phone: '8867670054',
    beds: '100 - 300 Beds',
  });

  const handleOpenModal = () => {
    setShowDemoModal(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 }
    });
    setTimeout(() => {
      setShowDemoModal(false);
      setSubmitted(false);
    }, 3000);
  };

  // 4 Core Value Pillars with distinct claymorphic color schemes
  const differentiators = [
    {
      title: 'Complete Clinical Safety',
      tag: 'CLINICAL PRECISION',
      desc: 'Zero handwritten errors, automated drug-allergy contraindication interlocks, and bedside barcode e-MAR verification.',
      bullet: 'Barcode Bedside e-MAR • Zero Illegible Rx',
      icon: <Activity size={22} />,
      bg: 'linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%)',
      border: '2.5px solid #3b82f6',
      shadow: '0 12px 28px rgba(59, 130, 246, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(37, 99, 235, 0.12)',
      titleColor: '#1e3a8a',
      tagBg: '#bfdbfe',
      tagColor: '#1d4ed8',
      iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      iconColor: '#ffffff',
      descColor: '#334155'
    },
    {
      title: 'Zero Revenue Leakage',
      tag: 'FINANCIAL INTEGRITY',
      desc: 'Automatic charge posting for all diagnostic investigations, pharmacy items, and ward days into an itemized ledger.',
      bullet: 'Automated Charge Posting • 0 Unbilled Tests',
      icon: <Receipt size={22} />,
      bg: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
      border: '2.5px solid #10b981',
      shadow: '0 12px 28px rgba(16, 185, 129, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(5, 150, 105, 0.12)',
      titleColor: '#065f46',
      tagBg: '#bbf7d0',
      tagColor: '#047857',
      iconBg: 'linear-gradient(135deg, #10b981, #059669)',
      iconColor: '#ffffff',
      descColor: '#334155'
    },
    {
      title: 'Enterprise Multi-Branch Scaling',
      tag: 'MULTI-TENANCY',
      desc: 'Unified administrative headquarters oversight with strict database-level operational isolation between satellite clinics.',
      bullet: 'HQ Central Oversight • Satellite Clinic Isolation',
      icon: <Network size={22} />,
      bg: 'linear-gradient(145deg, #fff7ed 0%, #ffedd5 100%)',
      border: '2.5px solid #f97316',
      shadow: '0 12px 28px rgba(249, 115, 22, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(194, 65, 12, 0.12)',
      titleColor: '#9a3412',
      tagBg: '#fed7aa',
      tagColor: '#c2410c',
      iconBg: 'linear-gradient(135deg, #f97316, #ea580c)',
      iconColor: '#ffffff',
      descColor: '#334155'
    },
    {
      title: '99.99% Reliability & Compliance',
      tag: 'HIGH AVAILABILITY',
      desc: 'Clustered failover nodes, automated hourly backups, sub-minute RPO, and immutable forensic audit trails.',
      bullet: 'Active Failover Nodes • Sub-Minute RPO',
      icon: <Server size={22} />,
      bg: 'linear-gradient(145deg, #faf5ff 0%, #f3e8ff 100%)',
      border: '2.5px solid #8b5cf6',
      shadow: '0 12px 28px rgba(139, 92, 246, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(126, 34, 206, 0.12)',
      titleColor: '#581c87',
      tagBg: '#e9d5ff',
      tagColor: '#7e22ce',
      iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      iconColor: '#ffffff',
      descColor: '#334155'
    },
  ];

  // 4 Implementation Timeline Phases with colorful clay cards
  const roadmap = [
    { 
      phase: 'Weeks 1–2', 
      title: 'Institutional Discovery', 
      desc: 'Specialties, doctor rosters, and tariff mapping.',
      bg: 'linear-gradient(145deg, #f0f9ff 0%, #e0f2fe 100%)',
      border: '2px solid #38bdf8',
      phaseColor: '#0284c7'
    },
    { 
      phase: 'Weeks 3–4', 
      title: 'Master Data & LIS Sync', 
      desc: 'Analyzer bidirectional testing & pharmacy formulary.',
      bg: 'linear-gradient(145deg, #faf5ff 0%, #ede9fe 100%)',
      border: '2px solid #a855f7',
      phaseColor: '#7c3aed'
    },
    { 
      phase: 'Weeks 5–6', 
      title: 'Pilot Ward Deployment', 
      desc: 'OPD, Pharmacy, and 1 Inpatient floor live.',
      bg: 'linear-gradient(145deg, #fffbeb 0%, #fef3c7 100%)',
      border: '2px solid #f59e0b',
      phaseColor: '#d97706'
    },
    { 
      phase: 'Weeks 7–8', 
      title: 'Enterprise Go-Live', 
      desc: 'All branches live with 24/7 bedside support.',
      bg: 'linear-gradient(145deg, #f0fdf4 0%, #dcfce7 100%)',
      border: '2px solid #22c55e',
      phaseColor: '#16a34a'
    },
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
      gap: 'clamp(16px, 2.5vw, 28px)',
      overflowY: 'auto',
      overflowX: 'hidden'
    }}>
      {/* Ambient background clay decor spheres */}
      <div style={{
        position: 'absolute',
        top: '-40px',
        left: '-30px',
        width: '260px',
        height: '260px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(191, 219, 254, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
        filter: 'blur(35px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        right: '25%',
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(233, 213, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
        filter: 'blur(35px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* LEFT COLUMN: Colorful 3D Claymorphic Pillars & Roadmap */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', zIndex: 1 }}>
        {/* Header Title with Clay Badge */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
            border: '2px solid #16a34a',
            borderRadius: '9999px',
            padding: '5px 14px',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 800,
            color: '#14532d',
            boxShadow: '0 4px 12px rgba(22, 163, 74, 0.18), inset 0 1px 2px rgba(255,255,255,0.8)',
            marginBottom: '6px'
          }}>
            <Sparkles size={14} />
            <span>The Proven Choice for Modern Healthcare</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.3rem, 2.5vw + 0.3rem, 1.9rem)',
            fontWeight: 800,
            color: '#0f172a',
            margin: '0 0 4px',
            letterSpacing: '-0.02em'
          }}>
            Why Hospital Leaders Choose Our HMIS
          </h2>
          <p style={{ margin: 0, fontSize: 'var(--font-size-body)', color: '#475569', fontWeight: 500 }}>
            Transforming hospital operations with an integrated, intelligent, and secure platform.
          </p>
        </div>

        {/* 4 Colored Claymorphic Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(150px, 20vw, 220px), 1fr))', gap: 'clamp(8px, 1.2vw, 14px)' }}>
          {differentiators.map((d, i) => (
            <div
              key={i}
              style={{
                background: d.bg,
                border: d.border,
                borderRadius: '20px',
                padding: '14px 16px',
                boxShadow: d.shadow,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top row with 3D Icon Bubble & Pill Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: d.iconBg,
                  color: d.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 14px rgba(0, 0, 0, 0.12), inset 0 2px 2px rgba(255,255,255,0.4)',
                  flexShrink: 0
                }}>
                  {d.icon}
                </div>

                <span style={{
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  background: d.tagBg,
                  color: d.tagColor,
                  padding: '3px 8px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}>
                  {d.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <strong style={{
                  fontSize: '0.92rem',
                  color: d.titleColor,
                  display: 'block',
                  fontWeight: 800,
                  marginBottom: '3px'
                }}>
                  {d.title}
                </strong>
                <p style={{
                  margin: 0,
                  fontSize: '0.78rem',
                  color: d.descColor,
                  lineHeight: 1.4,
                  fontWeight: 500
                }}>
                  {d.desc}
                </p>
              </div>

              {/* Bottom Feature Micro-pill */}
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: d.tagColor,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                borderTop: '1px solid rgba(0,0,0,0.06)',
                paddingTop: '6px'
              }}>
                <CheckCircle2 size={13} />
                <span>{d.bullet}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Phased Roadmap Timeline - Colored Clay Cards */}
        <div style={{ marginTop: 'auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '8px'
          }}>
            <Clock size={14} color="#64748b" />
            <h4 style={{
              margin: 0,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              color: '#475569',
              letterSpacing: '0.05em',
              fontWeight: 800
            }}>
              Phased Implementation Methodology (8-Week Rapid Go-Live)
            </h4>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(115px, 18vw, 160px), 1fr))', gap: 'clamp(6px, 1vw, 10px)' }}>
            {roadmap.map((rm, i) => (
              <div
                key={i}
                style={{
                  padding: '10px 12px',
                  background: rm.bg,
                  borderRadius: '14px',
                  border: rm.border,
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.05), inset 0 2px 2px rgba(255,255,255,0.8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px'
                }}
              >
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: rm.phaseColor,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  {rm.phase}
                </span>
                <strong style={{
                  fontSize: '0.78rem',
                  color: '#0f172a',
                  display: 'block',
                  fontWeight: 800
                }}>
                  {rm.title}
                </strong>
                <span style={{
                  fontSize: '0.68rem',
                  color: '#475569',
                  lineHeight: 1.3,
                  fontWeight: 500
                }}>
                  {rm.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Plush 3D Claymorphic Closing Card with 3D Action Buttons */}
      <div style={{
        background: 'linear-gradient(160deg, #f8faff 0%, #edf2ff 50%, #e0e7ff 100%)',
        border: '2.5px solid #818cf8',
        borderRadius: '26px',
        boxShadow: '0 20px 45px rgba(99, 102, 241, 0.22), inset 0 3px 6px rgba(255, 255, 255, 0.95), inset 0 -3px 6px rgba(99, 102, 241, 0.15)',
        padding: 'clamp(16px, 2.2vw, 28px) clamp(14px, 2vw, 24px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '340px'
      }}>
        {/* Soft background ambient glow */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(165, 180, 252, 0.4) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Plush 3D Icon Bubble */}
          <div style={{
            width: '68px',
            height: '68px',
            margin: '0 auto 14px',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 26px rgba(99, 102, 241, 0.4), inset 0 2px 4px rgba(255,255,255,0.4)',
            border: '2px solid rgba(255,255,255,0.6)'
          }}>
            <Building2 size={34} strokeWidth={2.2} />
          </div>

          <h3 style={{
            margin: '0 0 8px',
            fontSize: '1.65rem',
            fontFamily: 'var(--font-heading)',
            color: '#0f2b5c',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Thank You for Your Time
          </h3>
          <p style={{
            margin: 0,
            fontSize: '0.88rem',
            color: '#475569',
            lineHeight: 1.5,
            fontWeight: 500,
            padding: '0 8px'
          }}>
            Ready to upgrade your hospital workflows with our next-generation HMIS? Let us configure a customized sandbox demonstration for your clinical and administrative teams.
          </p>
        </div>

        {/* 3 Value Stats Badges (Like the mobile UI cards in Image 2) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          margin: '12px 0'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1.5px solid #c7d2fe',
            borderRadius: '14px',
            padding: '8px 4px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(99, 102, 241, 0.08)'
          }}>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#3b82f6' }}>28</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569' }}>Modules Live</div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1.5px solid #a7f3d0',
            borderRadius: '14px',
            padding: '8px 4px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(16, 185, 129, 0.08)'
          }}>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#10b981' }}>100%</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569' }}>RBAC Secure</div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1.5px solid #fde68a',
            borderRadius: '14px',
            padding: '8px 4px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(245, 158, 11, 0.08)'
          }}>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f59e0b' }}>0%</div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#475569' }}>Leakage</div>
          </div>
        </div>

        {/* Direct Contact & Demonstration Lead (Claymorphic) */}
        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
          border: '2px solid #60a5fa',
          borderRadius: '16px',
          padding: '10px 14px',
          margin: '4px 0 6px',
          boxShadow: '0 8px 18px rgba(37, 99, 235, 0.12), inset 0 2px 2px rgba(255, 255, 255, 0.95)',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div style={{
            fontSize: '0.68rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#1d4ed8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Sparkles size={12} style={{ color: '#2563eb' }} />
              Direct Demo & Contact Lead
            </span>
            <span style={{ fontSize: '0.62rem', padding: '2px 6px', background: '#dbeafe', color: '#1e40af', borderRadius: '6px', fontWeight: 800 }}>
              AVAILABLE
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <a
              href="tel:8867670054"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1.5px solid #bfdbfe',
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.84rem',
                textDecoration: 'none',
                boxShadow: '0 2px 4px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={12} />
                </div>
                <span>8867670054</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#2563eb', fontWeight: 800 }}>Call / WhatsApp →</span>
            </a>

            <a
              href="mailto:kumarsrikanth050595@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1.5px solid #bbf7d0',
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.78rem',
                textDecoration: 'none',
                boxShadow: '0 2px 4px rgba(15, 23, 42, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', minWidth: 0 }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={12} />
                </div>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>kumarsrikanth050595@gmail.com</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: '#16a34a', fontWeight: 800, flexShrink: 0 }}>Email →</span>
            </a>
          </div>
        </div>

        {/* 3D Clay Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Primary Action Button (Royal Blue Clay) */}
          <button
            onClick={handleOpenModal}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              color: '#ffffff',
              border: '2px solid #60a5fa',
              borderRadius: '9999px',
              padding: '14px 24px',
              fontSize: '1rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: '0 10px 24px rgba(37, 99, 235, 0.38), inset 0 2px 2px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <Calendar size={18} strokeWidth={2.5} />
            <span>Schedule Live Walkthrough</span>
            <Sparkles size={16} />
          </button>

          {/* Secondary Action Button (White/Lilac Plush Clay) */}
          <button
            onClick={onRestart}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#1e293b',
              border: '2px solid #c7d2fe',
              borderRadius: '9999px',
              padding: '12px 20px',
              fontSize: '0.92rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 6px 16px rgba(15, 23, 42, 0.06), inset 0 2px 2px rgba(255, 255, 255, 0.9)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f8fafc';
              e.currentTarget.style.borderColor = '#818cf8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.borderColor = '#c7d2fe';
            }}
          >
            <RotateCcw size={16} />
            <span>Restart Presentation (Slide 01)</span>
          </button>
        </div>

        {/* Quick jump to master architecture */}
        <div style={{
          textAlign: 'center',
          borderTop: '1.5px solid #cbd5e1',
          paddingTop: '10px',
          marginTop: '6px'
        }}>
          <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>
            Want to review the system map?
          </span>
          <button
            onClick={() => onJumpToSlide(27)}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              fontWeight: 800,
              fontSize: '0.78rem',
              cursor: 'pointer',
              marginLeft: '6px',
              textDecoration: 'underline'
            }}
          >
            Open Workflow Mega-Map (Slide 27) →
          </button>
        </div>
      </div>

      {/* Demo Request Modal Overlay with Claymorphism */}
      {showDemoModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }} onClick={() => setShowDemoModal(false)}>
          <div
            style={{
              width: '100%',
              maxWidth: '520px',
              background: 'linear-gradient(150deg, #ffffff 0%, #f8faff 100%)',
              padding: '28px',
              borderRadius: '24px',
              border: '2.5px solid #818cf8',
              boxShadow: '0 24px 60px rgba(15, 23, 42, 0.3), inset 0 2px 4px rgba(255,255,255,0.95)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.35rem', fontFamily: 'var(--font-heading)', fontWeight: 800, color: '#0f172a' }}>
                  Request HMIS Demonstration
                </h3>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  Our solution architects will prepare a bespoke trial for your hospital.
                </span>
              </div>
              <button
                onClick={() => setShowDemoModal(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1.5px solid #cbd5e1',
                  background: '#f1f5f9',
                  color: '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Direct Contact Banner inside modal */}
            <div style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #ecfdf5 100%)',
              border: '2px solid #60a5fa',
              borderRadius: '14px',
              padding: '10px 14px',
              marginBottom: '14px',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px'
            }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Direct Lead Contact & Demo Inquiries:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginTop: '3px' }}>
                  <a href="tel:8867670054" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', textDecoration: 'none' }}>
                    <Phone size={13} style={{ color: '#2563eb' }} />
                    <span>8867670054</span>
                  </a>
                  <span style={{ color: '#94a3b8' }}>•</span>
                  <a href="mailto:kumarsrikanth050595@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', textDecoration: 'none' }}>
                    <Mail size={13} style={{ color: '#059669' }} />
                    <span>kumarsrikanth050595@gmail.com</span>
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <a
                  href="tel:8867670054"
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  <PhoneCall size={12} /> Call Direct
                </a>
              </div>
            </div>

            {submitted ? (
              <div style={{ padding: '26px 20px', textAlign: 'center' }}>
                <CheckCircle2 size={48} style={{ color: '#10b981', margin: '0 auto 12px' }} />
                <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a', fontWeight: 800 }}>Demonstration Requested!</h4>
                <p style={{ margin: '8px 0 14px', fontSize: '0.88rem', color: '#64748b' }}>
                  Thank you! Your demo request has been routed directly to our lead architect. We will reach out within 24 hours.
                </p>
                <div style={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  gap: '6px',
                  background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
                  border: '1.5px solid #93c5fd',
                  borderRadius: '12px',
                  padding: '10px 18px',
                  fontSize: '0.85rem',
                  color: '#0f172a',
                  fontWeight: 700
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Phone size={14} style={{ color: '#2563eb' }} />
                    <a href="tel:8867670054" style={{ color: '#0f172a', textDecoration: 'none' }}>+91 8867670054</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <Mail size={14} style={{ color: '#059669' }} />
                    <a href="mailto:kumarsrikanth050595@gmail.com" style={{ color: '#0f172a', textDecoration: 'none' }}>kumarsrikanth050595@gmail.com</a>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                    Hospital / Healthcare Group Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. City General Hospital"
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '2px solid #cbd5e1',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      Lead Contact Person:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Srikanth Kumar"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '2px solid #cbd5e1',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      Hospital Bed Size:
                    </label>
                    <select
                      value={formData.beds}
                      onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '2px solid #cbd5e1',
                        fontSize: '0.9rem',
                        background: '#ffffff',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option>Under 100 Beds</option>
                      <option>100 - 300 Beds</option>
                      <option>300 - 600 Beds</option>
                      <option>600+ Beds (Multi-Campus)</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      Official Work Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="kumarsrikanth050595@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '2px solid #cbd5e1',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '4px' }}>
                      Phone / Mobile:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="8867670054"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '2px solid #cbd5e1',
                        fontSize: '0.9rem',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '10px',
                    padding: '13px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Send size={16} />
                  <span>Submit Demo Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
