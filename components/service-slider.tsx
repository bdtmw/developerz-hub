'use client';
import { Children, useEffect, useRef, useState } from 'react';

const pad = (n: number) => String(n).padStart(2, '0');

// Horizontal card slider with a counter, a progress bar and previous/next buttons.
export function ServiceSlider({ children, stepPx = 484, label = 'services' }: { children: React.ReactNode; stepPx?: number; label?: string }) {
  const total = Children.count(children);
  const track = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ progress: 0, seen: Math.min(total, 1), scrollable: true });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const progress = max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 1;
      // Count the cards whose right edge is inside the visible area.
      const viewRight = el.getBoundingClientRect().right;
      let seen = 0;
      for (const card of Array.from(el.children)) if (card.getBoundingClientRect().right <= viewRight + 2) seen++;
      setState({ progress, seen: Math.max(1, Math.min(total, seen)), scrollable: max > 0 });
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [total]);

  const move = (direction: number) => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: Math.max(0, Math.min(max, el.scrollLeft + direction * stepPx)), behavior: 'smooth' });
  };
  const atStart = state.progress < 0.01;
  const atEnd = state.progress > 0.99;

  return <div className="sv-slider">
    <div className="sv-track" ref={track}>{children}</div>
    <div className="sv-controls">
      <p className="sv-count" aria-live="polite"><b>{pad(state.seen)}</b><span aria-hidden="true">/</span>{pad(total)}<span className="sv-count-label">{label}</span></p>
      <div className="sv-progress" aria-hidden="true"><span style={{ transform: `scaleX(${0.12 + state.progress * 0.88})` }}/></div>
      <div className="sv-buttons">
        <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous services">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/></svg>
        </button>
        <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="More services">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    </div>
  </div>;
}
