import React from 'react';
import { X, Lightbulb, CheckCircle2 } from 'lucide-react';
import type { SlideItem } from '../data/slidesData';

interface PresenterNotesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideItem;
}

export const PresenterNotesDrawer: React.FC<PresenterNotesDrawerProps> = ({
  isOpen,
  onClose,
  slide,
}) => {
  return (
    <aside className={`notes-drawer ${isOpen ? 'open' : ''}`}>
      {/* Header */}
      <div className="notes-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="clay-icon-bubble" style={{ width: '32px', height: '32px', color: '#f59e0b' }}>
            <Lightbulb size={16} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '0.95rem', fontFamily: 'var(--font-heading)' }}>
              Presenter Talking Points
            </h3>
            <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
              Slide {slide.id.toString().padStart(2, '0')} · {slide.badge}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="footer-btn-nav"
          style={{ width: '32px', height: '32px' }}
        >
          <X size={16} />
        </button>
      </div>

      {/* Body */}
      <div className="notes-body">
        <div style={{ marginBottom: '16px', padding: '12px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}>
          <strong style={{ display: 'block', fontSize: '0.85rem', color: '#1e293b', marginBottom: '4px' }}>
            {slide.title}
          </strong>
          <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
            {slide.subtitle}
          </span>
        </div>

        <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '12px' }}>
          Key Presentation Cues:
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {slide.presenterNotes.map((note, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>
                {note}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', padding: '14px', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)', border: '1px solid #c7d2fe' }}>
          <strong style={{ fontSize: '0.82rem', color: '#3730a3', display: 'block', marginBottom: '4px' }}>
            Meeting Tip for Doctors & Admins:
          </strong>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#4338ca', lineHeight: 1.4 }}>
            Highlight that this system eliminates paper redundancies and links directly to diagnostic labs and pharmacies without changing doctor diagnosis authority.
          </p>
        </div>
      </div>
    </aside>
  );
};
