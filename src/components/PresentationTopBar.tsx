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
    <header className="presentation-topbar" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 24px',
      background: 'rgba(255, 255, 255, 0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1.5px solid #cbd5e1',
      height: '56px',
      zIndex: 20
    }}>
      {/* Brand & Identity */}
      <div className="presentation-logo-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '11px',
          background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.35)'
        }}>
          <Building2 size={20} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f2b5c', letterSpacing: '-0.02em' }}>
            HMIS
          </span>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#1d4ed8',
            padding: '2px 8px',
            borderRadius: '9999px'
          }}>
            Enterprise Edition
          </span>
        </div>
      </div>

      {/* Search Input Bar (Matching Reference) */}
      <div style={{
        position: 'relative',
        width: '320px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Search size={15} color="#94a3b8" style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }} />
        <input
          type="text"
          placeholder="Search slides, modules or features..."
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
      <div className="presentation-top-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
          <span>Presenter Notes</span>
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
            padding: '6px 16px',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(124, 58, 237, 0.35)',
            transition: 'transform 0.15s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <Sparkles size={14} />
          <span>LIVE PRESENTATION</span>
        </button>
      </div>
    </header>
  );
};
