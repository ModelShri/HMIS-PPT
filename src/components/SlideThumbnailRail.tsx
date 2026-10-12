import React, { useRef, useEffect } from 'react';
import { SLIDES_DATA, type SlideItem } from '../data/slidesData';
import { 
  Building2, 
  Compass, 
  Award, 
  Layers, 
  UserCheck, 
  Database, 
  Network, 
  ShieldCheck, 
  FileText, 
  Calendar, 
  AlertTriangle, 
  Stethoscope, 
  Activity, 
  Bed, 
  HeartHandshake, 
  FlaskConical, 
  Radio, 
  Droplet, 
  Pill, 
  Receipt, 
  Users, 
  FolderLock, 
  BarChart3, 
  Settings, 
  Lock, 
  Server, 
  Workflow, 
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SlideThumbnailRailProps {
  currentSlide: number;
  onSelectSlide: (slideId: number) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

// Icon helper
const getSlideIcon = (iconName: string, size = 16) => {
  switch (iconName) {
    case 'Building2': return <Building2 size={size} />;
    case 'Compass': return <Compass size={size} />;
    case 'Award': return <Award size={size} />;
    case 'Layers': return <Layers size={size} />;
    case 'UserCheck': return <UserCheck size={size} />;
    case 'Database': return <Database size={size} />;
    case 'Network': return <Network size={size} />;
    case 'ShieldCheck': return <ShieldCheck size={size} />;
    case 'FileText': return <FileText size={size} />;
    case 'Calendar': return <Calendar size={size} />;
    case 'AlertTriangle': return <AlertTriangle size={size} />;
    case 'Stethoscope': return <Stethoscope size={size} />;
    case 'Activity': return <Activity size={size} />;
    case 'Bed': return <Bed size={size} />;
    case 'HeartHandshake': return <HeartHandshake size={size} />;
    case 'FlaskConical': return <FlaskConical size={size} />;
    case 'Radio': return <Radio size={size} />;
    case 'Droplet': return <Droplet size={size} />;
    case 'Pill': return <Pill size={size} />;
    case 'Receipt': return <Receipt size={size} />;
    case 'Users': return <Users size={size} />;
    case 'FolderLock': return <FolderLock size={size} />;
    case 'BarChart3': return <BarChart3 size={size} />;
    case 'Settings': return <Settings size={size} />;
    case 'Lock': return <Lock size={size} />;
    case 'Server': return <Server size={size} />;
    case 'Workflow': return <Workflow size={size} />;
    case 'CheckCircle': return <CheckCircle size={size} />;
    default: return <Building2 size={size} />;
  }
};

// Section color map
const getSectionAccent = (section: string) => {
  if (section.includes('Introduction')) return '#3b82f6';
  if (section.includes('Architecture')) return '#6366f1';
  if (section.includes('Clinical')) return '#06b6d4';
  if (section.includes('Inpatient')) return '#8b5cf6';
  if (section.includes('Diagnostics')) return '#10b981';
  if (section.includes('Operations')) return '#f59e0b';
  if (section.includes('Governance')) return '#ef4444';
  if (section.includes('Summary')) return '#ec4899';
  return '#64748b';
};

export const SlideThumbnailRail: React.FC<SlideThumbnailRailProps> = ({
  currentSlide,
  onSelectSlide,
  isCollapsed,
  onToggleCollapse,
}) => {
  const activeItemRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active thumbnail into view
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [currentSlide]);

  if (isCollapsed) {
    return (
      <aside
        style={{
          width: '42px',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.92)',
          borderRight: '1.5px solid #cbd5e1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '12px',
          zIndex: 8,
          flexShrink: 0,
          transition: 'width 0.25s ease'
        }}
      >
        <button
          onClick={onToggleCollapse}
          title="Expand Slides Thumbnail Rail"
          style={{
            background: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#475569'
          }}
        >
          <ChevronRight size={18} />
        </button>
        <div style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          marginTop: '20px',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#64748b',
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}>
          Slide Thumbnails ({currentSlide}/{SLIDES_DATA.length})
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="ppt-thumbnail-rail"
      style={{
        width: '210px',
        height: '100%',
        background: '#f1f5f9',
        borderRight: '2px solid #cbd5e1',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 8,
        flexShrink: 0,
        boxSizing: 'border-box'
      }}
    >
      {/* Rail Header with collapse toggle */}
      <div style={{
        padding: '10px 12px',
        borderBottom: '1px solid #cbd5e1',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1e293b' }}>
            Slides
          </span>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            background: '#e2e8f0',
            color: '#475569',
            padding: '1px 6px',
            borderRadius: '10px'
          }}>
            {SLIDES_DATA.length}
          </span>
        </div>
        <button
          onClick={onToggleCollapse}
          title="Collapse Slides Panel"
          style={{
            background: 'none',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Vertical list of slide cards */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '10px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {SLIDES_DATA.map((slide: SlideItem) => {
          const isActive = slide.id === currentSlide;
          const accentColor = getSectionAccent(slide.section);

          return (
            <div
              key={slide.id}
              ref={isActive ? activeItemRef : null}
              onClick={() => onSelectSlide(slide.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'transform 0.15s ease'
              }}
            >
              {/* Slide Number Badge (on left, like PowerPoint) */}
              <div
                style={{
                  width: '20px',
                  textAlign: 'right',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 800 : 600,
                  color: isActive ? '#ea580c' : '#64748b',
                  flexShrink: 0
                }}
              >
                {slide.id}
              </div>

              {/* Slide Miniature Preview Card */}
              <div
                style={{
                  flex: 1,
                  aspectRatio: '16 / 9',
                  borderRadius: '6px',
                  background: '#ffffff',
                  border: isActive ? '2.5px solid #ea580c' : '1.5px solid #cbd5e1',
                  boxShadow: isActive
                    ? '0 0 0 2px rgba(234, 88, 12, 0.25), 0 4px 10px rgba(0, 0, 0, 0.08)'
                    : '0 2px 4px rgba(0, 0, 0, 0.04)',
                  padding: '6px 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {/* For Slide 1, render miniature of hero image */}
                {slide.id === 1 ? (
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '2px',
                        background: '#2563eb'
                      }} />
                      <span style={{
                        fontSize: '0.62rem',
                        fontWeight: 900,
                        color: '#0f2b5c',
                        letterSpacing: '-0.02em'
                      }}>
                        HMIS
                      </span>
                    </div>

                    <div style={{
                      fontSize: '0.52rem',
                      fontWeight: 800,
                      color: '#1e3a8a',
                      lineHeight: 1.1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      Hospital Management
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid #e2e8f0',
                      paddingTop: '2px'
                    }}>
                      <span style={{ fontSize: '0.48rem', color: '#64748b' }}>One Platform</span>
                      <span style={{
                        fontSize: '0.45rem',
                        color: '#ea580c',
                        fontWeight: 700
                      }}>
                        Cover
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Top row with section badge dot & icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: accentColor
                          }}
                        />
                        <span style={{
                          fontSize: '0.52rem',
                          fontWeight: 700,
                          color: '#475569',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}>
                          {slide.badge.split(' ')[0]}
                        </span>
                      </div>
                      <div style={{ color: accentColor, opacity: 0.85 }}>
                        {getSlideIcon(slide.iconName, 12)}
                      </div>
                    </div>

                    {/* Middle slide title preview */}
                    <div
                      style={{
                        fontSize: '0.58rem',
                        fontWeight: 700,
                        color: '#1e293b',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {slide.title}
                    </div>

                    {/* Bottom visual wireframe representation */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px',
                      opacity: 0.75
                    }}>
                      <div style={{
                        height: '4px',
                        flex: 1,
                        background: '#f1f5f9',
                        borderRadius: '2px'
                      }} />
                      <div style={{
                        height: '4px',
                        width: '16px',
                        background: accentColor,
                        borderRadius: '2px',
                        opacity: 0.6
                      }} />
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
