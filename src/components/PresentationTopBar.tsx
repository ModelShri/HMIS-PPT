import React, { useState } from 'react';
import { 
  Building2, 
  Grid, 
  Play, 
  Pause, 
  FileText, 
  Maximize, 
  Minimize, 
  Sparkles,
  Search
} from 'lucide-react';

interface PresentationTopBarProps {
  currentSlide: number;
  totalSlides: number;
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  onOpenTOC: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PresentationTopBar: React.FC<PresentationTopBarProps> = ({
  isAutoPlay,
  onToggleAutoPlay,
  showNotes,
  onToggleNotes,
  onOpenTOC,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="presentation-topbar">
      {/* Brand & Identity */}
      <div className="presentation-logo-group">
        <div className="presentation-logo-icon">
          <Building2 size={20} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="presentation-brand-title">
            HMIS
          </span>
          <span className="presentation-brand-sub">
            Enterprise Edition
          </span>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="presentation-search-box">
        <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }} />
        <input
          type="text"
          placeholder="Search slides, modules..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '6px 12px 6px 34px',
            borderRadius: '9999px',
            border: '1.5px solid #cbd5e1',
            background: 'rgba(255, 255, 255, 0.95)',
            fontSize: '0.8rem',
            color: '#1e293b',
            outline: 'none',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
          }}
        />
      </div>

      {/* Top Bar Presenter Actions */}
      <div className="presentation-top-actions">
        {/* Table of Contents / Slide Deck Grid */}
        <button
          onClick={onOpenTOC}
          className="top-action-btn"
          title="All Slides Grid (Press G)"
        >
          <Grid size={15} />
          <span>All Slides</span>
        </button>

        {/* Presenter Notes Toggle */}
        <button
          onClick={onToggleNotes}
          className={`top-action-btn ${showNotes ? 'active' : ''}`}
          title="Toggle Presenter Notes (Press N)"
        >
          <FileText size={15} />
          <span>Notes</span>
        </button>

        {/* Auto Play Slideshow */}
        <button
          onClick={onToggleAutoPlay}
          className={`top-action-btn ${isAutoPlay ? 'active' : ''}`}
          title="Auto-play Slideshow (7s per slide)"
        >
          {isAutoPlay ? <Pause size={15} /> : <Play size={15} />}
          <span>{isAutoPlay ? 'Auto Playing' : 'Auto Play'}</span>
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="top-action-btn"
          title="Toggle Fullscreen (Press F)"
        >
          {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
          <span>{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
        </button>

        {/* LIVE PRESENTATION Gradient Pill Button */}
        <button
          onClick={onToggleFullscreen}
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            padding: '6px 14px',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 800,
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)',
            transition: 'transform 0.15s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          title="Launch Live Fullscreen Presentation"
        >
          <Sparkles size={14} />
          <span style={{ display: 'inline-block' }}>LIVE</span>
        </button>
      </div>
    </header>
  );
};
