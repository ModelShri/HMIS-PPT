import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { SLIDES_DATA } from '../data/slidesData';
import { LucideIcon } from './LucideIcon';

interface TableOfContentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export const TableOfContentsModal: React.FC<TableOfContentsModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('All');

  if (!isOpen) return null;

  const sections = ['All', ...Array.from(new Set(SLIDES_DATA.map((s) => s.section)))];

  const filteredSlides = SLIDES_DATA.filter((slide) => {
    const matchesSearch =
      slide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      slide.badge.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSection = selectedSection === 'All' || slide.section === selectedSection;
    return matchesSearch && matchesSection;
  });

  return (
    <div className="toc-overlay" onClick={onClose}>
      <div className="toc-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="toc-header">
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', margin: 0, fontSize: '1.4rem' }}>
              Presentation Slide Deck
            </h2>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.85rem' }}>
              Jump directly to any of the 28 HMIS architecture, clinical, or operational slides.
            </p>
          </div>

          <button
            onClick={onClose}
            className="footer-btn-nav"
            style={{ width: '38px', height: '38px' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ padding: '16px 28px', background: '#ffffff', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search slides, workflows, or modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid #cbd5e1',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                background: '#f8fafc',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  background: selectedSection === sec ? '#3b5bdb' : '#f1f5f9',
                  color: selectedSection === sec ? '#ffffff' : '#475569',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {sec.replace('Section ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Slides Grid */}
        <div className="toc-grid">
          {filteredSlides.map((slide) => {
            const isActive = slide.id === currentSlide;
            return (
              <div
                key={slide.id}
                className={`toc-card ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
              >
                <div className="toc-card-header">
                  <span className="toc-card-section">{slide.badge}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>
                    #{slide.id.toString().padStart(2, '0')}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div className="clay-icon-bubble" style={{ width: '36px', height: '36px' }}>
                    <LucideIcon name={slide.iconName} size={18} />
                  </div>
                  <h4 className="toc-card-title">{slide.title}</h4>
                </div>

                <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {slide.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
