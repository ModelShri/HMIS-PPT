import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  MessageSquare, 
  LayoutGrid, 
  Maximize2, 
  Columns, 
  Minus, 
  Plus, 
  MonitorPlay,
  RotateCcw
} from 'lucide-react';

interface PresentationFooterProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  onOpenTOC: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isRailCollapsed: boolean;
  onToggleRail: () => void;
}

export const PresentationFooter: React.FC<PresentationFooterProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  showNotes,
  onToggleNotes,
  onOpenTOC,
  isFullscreen,
  onToggleFullscreen,
  isRailCollapsed,
  onToggleRail,
}) => {
  const progressPercent = Math.round((currentSlide / totalSlides) * 100);

  return (
    <footer
      className="presentation-footer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 20px',
        background: '#ffffff',
        borderTop: '2px solid #cbd5e1',
        height: '42px',
        fontSize: '0.82rem',
        color: '#475569',
        userSelect: 'none',
        zIndex: 10
      }}
    >
      {/* Left Group: Slide Indicator & Language / ASP.NET Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* PowerPoint style Slide counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#1e293b' }}>
          <span>Slide {currentSlide} of {totalSlides}</span>
        </div>

        <div style={{ width: '1px', height: '18px', background: '#cbd5e1' }} />

        {/* Locale & ASP.NET Core Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem' }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            display: 'inline-block'
          }} />
          <span>ASP.NET Core MVC 9 Connected</span>
          <span style={{ color: '#94a3b8' }}>•</span>
          <span style={{ color: '#64748b' }}>English (India)</span>
        </div>
      </div>

      {/* Center Group: Prev / Next Buttons & Presentation Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          style={{
            background: currentSlide === 1 ? '#f1f5f9' : '#e2e8f0',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '3px 8px',
            cursor: currentSlide === 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: currentSlide === 1 ? '#94a3b8' : '#1e293b'
          }}
          title="Previous Slide (← or Backspace)"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Mini progress bar */}
        <div style={{
          width: '140px',
          height: '6px',
          background: '#e2e8f0',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progressPercent}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #2563eb, #7c3aed)',
            transition: 'width 0.3s ease'
          }} />
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          style={{
            background: currentSlide === totalSlides ? '#f1f5f9' : '#e2e8f0',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '3px 8px',
            cursor: currentSlide === totalSlides ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: currentSlide === totalSlides ? '#94a3b8' : '#1e293b'
          }}
          title="Next Slide (→ or Space)"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Right Group: PowerPoint View Controls (Notes, Comments, Sorter, Fullscreen, Zoom) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {/* Notes Button */}
        <button
          onClick={onToggleNotes}
          style={{
            background: showNotes ? '#dbeafe' : 'none',
            border: showNotes ? '1px solid #93c5fd' : 'none',
            borderRadius: '6px',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: showNotes ? '#1d4ed8' : '#475569',
            cursor: 'pointer'
          }}
          title="Toggle Presenter Notes (N)"
        >
          <FileText size={14} />
          <span>Notes</span>
        </button>

        {/* Grid / Sorter View */}
        <button
          onClick={onOpenTOC}
          style={{
            background: 'none',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: '#475569',
            cursor: 'pointer'
          }}
          title="Slide Sorter Grid (G)"
        >
          <LayoutGrid size={14} />
          <span>Slide Sorter</span>
        </button>

        {/* Thumbnail Sidebar Toggle */}
        <button
          onClick={onToggleRail}
          style={{
            background: !isRailCollapsed ? '#f1f5f9' : 'none',
            border: !isRailCollapsed ? '1px solid #cbd5e1' : 'none',
            borderRadius: '6px',
            padding: '4px 6px',
            display: 'flex',
            alignItems: 'center',
            color: '#475569',
            cursor: 'pointer'
          }}
          title="Toggle Left Slides Thumbnails Pane"
        >
          <Columns size={15} />
        </button>

        {/* Fullscreen Slideshow */}
        <button
          onClick={onToggleFullscreen}
          style={{
            background: isFullscreen ? '#dbeafe' : 'none',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 6px',
            display: 'flex',
            alignItems: 'center',
            color: isFullscreen ? '#1d4ed8' : '#475569',
            cursor: 'pointer'
          }}
          title="Slide Show Fullscreen (F)"
        >
          <MonitorPlay size={15} />
        </button>

        {/* Zoom Controls (like PowerPoint bottom right) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Minus size={13} style={{ cursor: 'pointer' }} />
          <div style={{
            width: '60px',
            height: '4px',
            background: '#cbd5e1',
            borderRadius: '2px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              left: '72%',
              top: '-4px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#2563eb'
            }} />
          </div>
          <Plus size={13} style={{ cursor: 'pointer' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, marginLeft: '2px' }}>72%</span>
        </div>
      </div>
    </footer>
  );
};
