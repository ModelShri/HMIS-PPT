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
    <footer className="presentation-footer">
      {/* Left Group: Slide Indicator & Language / ASP.NET Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.2vw, 16px)', flexShrink: 0 }}>
        {/* PowerPoint style Slide counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#1e293b', whiteSpace: 'nowrap' }}>
          <span>Slide {currentSlide} of {totalSlides}</span>
        </div>

        <div className="footer-desktop-status" style={{ width: '1px', height: '16px', background: '#cbd5e1' }} />

        {/* Locale & ASP.NET Core Indicator */}
        <div className="footer-desktop-status" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', whiteSpace: 'nowrap' }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#10b981',
            display: 'inline-block',
            flexShrink: 0
          }} />
          <span>ASP.NET Core Connected</span>
        </div>
      </div>

      {/* Center Group: Prev / Next Buttons & Presentation Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1.2vw, 12px)', flexShrink: 0 }}>
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          style={{
            background: currentSlide === 1 ? '#f1f5f9' : '#e2e8f0',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '4px 10px',
            cursor: currentSlide === 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: currentSlide === 1 ? '#94a3b8' : '#1e293b',
            minWidth: '32px',
            minHeight: '28px'
          }}
          title="Previous Slide (← or Backspace)"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Mini progress bar */}
        <div style={{
          width: 'clamp(60px, 10vw, 140px)',
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
            padding: '4px 10px',
            cursor: currentSlide === totalSlides ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: currentSlide === totalSlides ? '#94a3b8' : '#1e293b',
            minWidth: '32px',
            minHeight: '28px'
          }}
          title="Next Slide (→ or Space)"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Right Group: PowerPoint View Controls (Notes, Sorter, Rail Toggle, Fullscreen, Zoom) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(6px, 1vw, 12px)', flexShrink: 0 }}>
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
            gap: '5px',
            fontSize: '0.76rem',
            fontWeight: 600,
            color: showNotes ? '#1d4ed8' : '#475569',
            cursor: 'pointer'
          }}
          title="Toggle Presenter Notes (N)"
        >
          <FileText size={14} />
          <span className="footer-desktop-status">Notes</span>
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
            gap: '5px',
            fontSize: '0.76rem',
            fontWeight: 600,
            color: '#475569',
            cursor: 'pointer'
          }}
          title="Slide Sorter Grid (G)"
        >
          <LayoutGrid size={14} />
          <span className="footer-desktop-status">Sorter</span>
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

        {/* Zoom Controls (PowerPoint bottom right) */}
        <div className="footer-zoom-controls" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
          <Minus size={13} style={{ cursor: 'pointer' }} />
          <div style={{
            width: '50px',
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
