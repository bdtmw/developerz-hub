'use client';
import { useEffect, useRef, useState } from 'react';

// Horizontal card slider with a progress bar and previous/next buttons.
export function ServiceSlider({ children }: { children: React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState({ width: 40, left: 0 });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const total = el.scrollWidth || 1;
      setBar({ width: Math.min(100, (el.clientWidth / total) * 100), left: (el.scrollLeft / total) * 100 });
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  const move = (direction: number) => track.current?.scrollBy({ left: direction * 484, behavior: 'smooth' });
  const atStart = bar.left < 0.5;
  const atEnd = bar.left + bar.width > 99.5;

  return <div className="sv-slider">
    <div className="sv-track" ref={track}>{children}</div>
    <div className="sv-controls">
      <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous services">←</button>
      <div className="sv-progress" aria-hidden="true"><span style={{ width: `${bar.width}%`, left: `${bar.left}%` }}/></div>
      <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="More services">→</button>
    </div>
  </div>;
}
