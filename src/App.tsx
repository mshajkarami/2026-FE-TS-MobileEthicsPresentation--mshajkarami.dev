import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  LayoutGrid,
  Maximize2,
  Minimize2,
  StickyNote,
  X,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { SlideRenderer } from './components/SlideRenderer';
import { SLIDES } from './data/slidesData';

function formatElapsed(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const lastWheelRef = useRef<number>(0);

  const currentSlide = SLIDES[currentIndex];
  const progressPercent = ((currentIndex + 1) / SLIDES.length) * 100;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      // Ignore if fullscreen is blocked
    }
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not trigger shortcuts when typing inside an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowLeft' || e.key === 'Space' || e.key === 'PageDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowRight' || e.key === 'PageUp') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentIndex(SLIDES.length - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setShowOverview((prev) => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setShowNotes((prev) => !prev);
      } else if (e.key === 'Escape') {
        setShowOverview(false);
        setShowNotes(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, toggleFullscreen]);

  // Debounced wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelRef.current < 500) return;

      // Check if mouse is over scrollable inner container
      const target = e.target as HTMLElement;
      if (target.closest('.slide-body-viewport') || target.closest('.reviews-list') || target.closest('.code-editor-box')) {
        return;
      }

      if (e.deltaY > 30) {
        lastWheelRef.current = now;
        goNext();
      } else if (e.deltaY < -30) {
        lastWheelRef.current = now;
        goPrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);

  return (
    <div className="deck-root">
      {/* نوار بالایی اپلیکیشن */}
      <header className="deck-top-bar">
        <div className="top-bar-left">
          <div className="presentation-brand">
            <Sparkles size={16} className="text-sky" />
            <span>اخلاق در توسعه نرم‌افزار موبایل</span>
          </div>
          <span className="author-pill">صالح حاج‌کرمی</span>
          <span className="paper-badge mono">Springer ESE 2024</span>
        </div>

        <div className="top-bar-right">
          <button
            className={`top-btn ${showNotes ? 'active' : ''}`}
            onClick={() => setShowNotes((p) => !p)}
            title="یادداشت‌های نریشن گوینده (کلید N)"
          >
            <StickyNote size={14} />
            <span>سناریو و نریشن [N]</span>
          </button>

          <button
            className={`top-btn ${showOverview ? 'active' : ''}`}
            onClick={() => setShowOverview((p) => !p)}
            title="مشاهده شبکه اسلایدها (کلید G)"
          >
            <LayoutGrid size={14} />
            <span>فهرست اسلایدها [G]</span>
          </button>

          <button
            className="top-btn"
            onClick={toggleFullscreen}
            title="تمام صفحه (کلید F)"
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </div>
      </header>

      {/* ناحیه بوم اسلاید */}
      <main className="deck-stage-area">
        <div className="slide-canvas">
          {/* هدر اسلاید */}
          <div className="slide-header-box">
            <div>
              <div className="slide-category-tag">
                <BookOpen size={13} />
                <span>بخش {currentSlide.category.toUpperCase()} • اسلاید {currentSlide.number} از {SLIDES.length}</span>
              </div>
              <h2 className="slide-main-title">{currentSlide.title}</h2>
              <p className="slide-main-subtitle">{currentSlide.subtitle}</p>
            </div>
            <div className="slide-number-badge">
              <strong>{String(currentSlide.number).padStart(2, '0')}</strong>
              <span>/ {SLIDES.length}</span>
            </div>
          </div>

          {/* محتوای رندرشونده اسلاید */}
          <div className="slide-body-viewport">
            <SlideRenderer slide={currentSlide} />
          </div>

          {/* نوار پیام کلیدی اسلاید */}
          <div className="slide-takeaway-bar">
            <strong>نکته کلیدی:</strong>
            <span>{currentSlide.keyTakeaway}</span>
          </div>
        </div>
      </main>

      {/* نوار وضعیت پایینی (HUD) */}
      <footer className="deck-bottom-hud">
        {/* نوار پیشرفت افقی باریک */}
        <div className="progress-track-full">
          <div className="progress-fill-full" style={{ width: `${progressPercent}%` }} />
        </div>

        <div className="nav-buttons-group">
          <button
            className="nav-hud-btn"
            onClick={goPrev}
            disabled={currentIndex === 0}
            title="اسلاید قبلی (Arrow Right)"
          >
            <ChevronRight size={18} />
          </button>
          <button
            className="nav-hud-btn"
            onClick={goNext}
            disabled={currentIndex === SLIDES.length - 1}
            title="اسلاید بعدی (Arrow Left یا Space)"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        <div className="hud-center-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={13} className="text-sky" />
            <span className="mono">{formatElapsed(elapsedSeconds)}</span>
          </div>
          <span>•</span>
          <span>دانشکده فنی مهاجر • درس اخلاق حرفه‌ای مهندسی</span>
        </div>

        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          <span className="mono">{currentIndex + 1}</span> / <span className="mono">{SLIDES.length}</span>
        </div>
      </footer>

      {/* کشوی یادداشت‌های گوینده (سناریوی نریشن صالح) */}
      <aside className={`notes-drawer ${showNotes ? 'open' : ''}`}>
        <div className="notes-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <StickyNote size={16} className="text-sky" />
            <h4 style={{ fontSize: '14px', color: '#fff' }}>سناریوی گفتاری و نریشن صالح</h4>
          </div>
          <button className="top-btn" onClick={() => setShowNotes(false)}>
            <X size={14} />
          </button>
        </div>

        <div style={{ fontSize: '11px', color: 'var(--accent-sky)', marginBottom: '10px' }}>
          اسلاید {currentSlide.number}: {currentSlide.title} (مدت پیشنهادی: {currentSlide.durationMin} دقیقه)
        </div>

        <ul className="notes-list">
          {currentSlide.speakerNotes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </aside>

      {/* مودال شبکه مرور کلی اسلایدها */}
      {showOverview && (
        <div className="overview-modal-backdrop" onClick={() => setShowOverview(false)}>
          <div className="overview-modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid var(--border-glass)' }}>
              <h3 style={{ fontSize: '16px', color: '#fff' }}>فهرست و انتخاب سریع اسلایدها</h3>
              <button className="top-btn" onClick={() => setShowOverview(false)}>
                <X size={16} />
              </button>
            </div>

            <div className="overview-grid">
              {SLIDES.map((s, idx) => (
                <div
                  key={s.id}
                  className={`overview-thumb-card ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowOverview(false);
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span className="mono" style={{ fontSize: '11px', color: 'var(--accent-sky)', fontWeight: 800 }}>
                      #{s.number}
                    </span>
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{s.category}</span>
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{s.title}</div>
                  <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px' }}>{s.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
