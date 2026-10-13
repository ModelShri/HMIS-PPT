import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SLIDES_DATA } from './data/slidesData';
import { PresentationTopBar } from './components/PresentationTopBar';
import { PresentationFooter } from './components/PresentationFooter';
import { TableOfContentsModal } from './components/TableOfContentsModal';
import { PresenterNotesDrawer } from './components/PresenterNotesDrawer';
import { SlideThumbnailRail } from './components/SlideThumbnailRail';

// Slide Components Imports
import { Slide01Cover } from './slides/Slide01Cover';
import { Slide02Vision } from './slides/Slide02Vision';
import { Slide03Benefits } from './slides/Slide03Benefits';
import { Slide04Architecture } from './slides/Slide04Architecture';
import { Slide05PatientJourney } from './slides/Slide05PatientJourney';
import { Slide06MasterConfig } from './slides/Slide06MasterConfig';
import { Slide07MultiBranch } from './slides/Slide07MultiBranch';
import { Slide08RBAC } from './slides/Slide08RBAC';
import { Slide09PatientRecord } from './slides/Slide09PatientRecord';
import { Slide10AppointmentQueue } from './slides/Slide10AppointmentQueue';
import { Slide11EmergencyTriage } from './slides/Slide11EmergencyTriage';
import { Slide12OPDConsultation } from './slides/Slide12OPDConsultation';
import { Slide13IPDJourney } from './slides/Slide13IPDJourney';
import { Slide14BedManagement } from './slides/Slide14BedManagement';
import { Slide15NursingStation } from './slides/Slide15NursingStation';
import { Slide16LaboratoryLIS } from './slides/Slide16LaboratoryLIS';
import { Slide17RadiologyRIS } from './slides/Slide17RadiologyRIS';
import { Slide18BloodBank } from './slides/Slide18BloodBank';
import { Slide19PharmacyInventory } from './slides/Slide19PharmacyInventory';
import { Slide20BillingRCM } from './slides/Slide20BillingRCM';
import { Slide21HRRoster } from './slides/Slide21HRRoster';
import { Slide22MRDRecords } from './slides/Slide22MRDRecords';
import { Slide23MISAnalytics } from './slides/Slide23MISAnalytics';
import { Slide24AdminControl } from './slides/Slide24AdminControl';
import { Slide25SecurityAudit } from './slides/Slide25SecurityAudit';
import { Slide26ReliabilityInfra } from './slides/Slide26ReliabilityInfra';
import { Slide27WorkflowMegaMap } from './slides/Slide27WorkflowMegaMap';
import { Slide28WhyChooseUs } from './slides/Slide28WhyChooseUs';

export const App: React.FC = () => {
  const [currentSlideId, setCurrentSlideId] = useState<number>(1);
  const [showTOC, setShowTOC] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isRailCollapsed, setIsRailCollapsed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 1024;
    }
    return false;
  });

  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA.find((s) => s.id === currentSlideId) || SLIDES_DATA[0];

  // Navigation handlers
  const handleNext = useCallback(() => {
    setCurrentSlideId((prev) => (prev < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideId((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handleJumpToSlide = useCallback((id: number) => {
    if (id >= 1 && id <= totalSlides) {
      setCurrentSlideId(id);
      if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
        setIsRailCollapsed(true);
      }
    }
  }, [totalSlides]);

  const handleRestart = useCallback(() => {
    setCurrentSlideId(1);
  }, []);

  // Fullscreen API toggle
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  // Keyboard Navigation & Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ': // Spacebar advances
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          handlePrev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setShowNotes((prev) => !prev);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setShowTOC((prev) => !prev);
          break;
        case 'Escape':
          setShowTOC(false);
          setShowNotes(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlideId((prev) => {
        if (prev < totalSlides) {
          return prev + 1;
        } else {
          setIsAutoPlay(false);
          return prev;
        }
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  // Render active slide component
  const renderSlideContent = () => {
    switch (currentSlideId) {
      case 1:
        return <Slide01Cover onStart={handleNext} onJumpToSlide={handleJumpToSlide} />;
      case 2:
        return <Slide02Vision onStart={handleNext} onJumpToSlide={handleJumpToSlide} />;
      case 3:
        return <Slide03Benefits />;
      case 4:
        return <Slide04Architecture />;
      case 5:
        return <Slide05PatientJourney />;
      case 6:
        return <Slide06MasterConfig />;
      case 7:
        return <Slide07MultiBranch />;
      case 8:
        return <Slide08RBAC />;
      case 9:
        return <Slide09PatientRecord />;
      case 10:
        return <Slide10AppointmentQueue />;
      case 11:
        return <Slide11EmergencyTriage />;
      case 12:
        return <Slide12OPDConsultation />;
      case 13:
        return <Slide13IPDJourney />;
      case 14:
        return <Slide14BedManagement />;
      case 15:
        return <Slide15NursingStation />;
      case 16:
        return <Slide16LaboratoryLIS />;
      case 17:
        return <Slide17RadiologyRIS />;
      case 18:
        return <Slide18BloodBank />;
      case 19:
        return <Slide19PharmacyInventory />;
      case 20:
        return <Slide20BillingRCM />;
      case 21:
        return <Slide21HRRoster />;
      case 22:
        return <Slide22MRDRecords />;
      case 23:
        return <Slide23MISAnalytics />;
      case 24:
        return <Slide24AdminControl />;
      case 25:
        return <Slide25SecurityAudit />;
      case 26:
        return <Slide26ReliabilityInfra />;
      case 27:
        return <Slide27WorkflowMegaMap onJumpToSlide={handleJumpToSlide} />;
      case 28:
        return <Slide28WhyChooseUs onRestart={handleRestart} onJumpToSlide={handleJumpToSlide} />;
      default:
        return <Slide01Cover onStart={handleNext} onJumpToSlide={handleJumpToSlide} />;
    }
  };

  return (
    <div className="presentation-shell">
      {/* Ambient Pastel 3D Shapes */}
      <div className="ambient-decor ambient-decor-1" />
      <div className="ambient-decor ambient-decor-2" />
      <div className="ambient-decor ambient-decor-3" />

      {/* Top Header Bar */}
      <PresentationTopBar
        currentSlide={currentSlideId}
        totalSlides={totalSlides}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={() => setIsAutoPlay(!isAutoPlay)}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onOpenTOC={() => setShowTOC(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* PowerPoint Workspace: Left Thumbnail Rail + Presentation Stage */}
      <div className="ppt-workspace">
        <SlideThumbnailRail
          currentSlide={currentSlideId}
          onSelectSlide={handleJumpToSlide}
          isCollapsed={isRailCollapsed}
          onToggleCollapse={() => setIsRailCollapsed(!isRailCollapsed)}
        />

        {/* Mobile/Tablet Backdrop for open Thumbnail Rail */}
        {!isRailCollapsed && (
          <div
            className="ppt-rail-backdrop"
            onClick={() => setIsRailCollapsed(true)}
            aria-hidden="true"
          />
        )}

        {/* Main 16:9 Slide Presentation Canvas */}
        <main className="presentation-stage">
          <div className={`slide-canvas ${currentSlideId === 1 || currentSlideId === 2 ? 'slide-canvas-cover' : ''}`}>
            {/* Slide Header (Except on Cover Slide and Slide 2 which has custom layout matching reference) */}
            {currentSlideId > 2 && (
              <div className="slide-header">
                <div className="slide-title-wrap">
                  <div className="slide-badge-row">
                    <span className="slide-section-badge">{currentSlide.section}</span>
                    <span className="slide-number-tag">
                      Slide {currentSlide.id.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="slide-title">{currentSlide.title}</h2>
                  <p className="slide-subtitle">{currentSlide.subtitle}</p>
                </div>

                <div className="clay-badge clay-badge-lavender">
                  {currentSlide.badge}
                </div>
              </div>
            )}

            {/* Slide Active Body Content */}
            <div className="slide-content">
              {renderSlideContent()}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Mid-Screen Floating Navigation Arrows (Both Sides) */}
      <button
        className="mobile-nav-arrow mobile-nav-prev"
        onClick={handlePrev}
        disabled={currentSlideId === 1}
        aria-label="Previous Slide"
        title="Previous Slide"
      >
        <ChevronLeft size={24} strokeWidth={2.6} />
      </button>

      <button
        className="mobile-nav-arrow mobile-nav-next"
        onClick={handleNext}
        disabled={currentSlideId === totalSlides}
        aria-label="Next Slide"
        title="Next Slide"
      >
        <ChevronRight size={24} strokeWidth={2.6} />
      </button>

      {/* Navigation Footer / PowerPoint Status Bar */}
      <PresentationFooter
        currentSlide={currentSlideId}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onOpenTOC={() => setShowTOC(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        isRailCollapsed={isRailCollapsed}
        onToggleRail={() => setIsRailCollapsed(!isRailCollapsed)}
      />

      {/* Table of Contents Grid Modal */}
      <TableOfContentsModal
        isOpen={showTOC}
        onClose={() => setShowTOC(false)}
        currentSlide={currentSlideId}
        onSelectSlide={handleJumpToSlide}
      />

      {/* Presenter Notes Drawer */}
      <PresenterNotesDrawer
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        slide={currentSlide}
      />
    </div>
  );
};

export default App;
