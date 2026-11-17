'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

const slides = [
  {
    src: '/digital-future.webp',
    srcSet: '/digital-future-480.webp 480w, /digital-future-800.webp 800w, /digital-future.webp 1536w',
    alt: 'Futuristic chrome figure beside a glowing pink portal',
    label: 'IMAGINATION, ENGINEERED.',
  },
  {
    src: '/hero-team.webp',
    alt: 'Group of developers collaborating at computers',
    label: 'GROUP OF DEVELOPERS.',
  },
  {
    src: '/hero-receptionist.webp',
    alt: 'AI-powered receptionist interface',
    label: 'AI RECEPTIONIST.',
  },
  {
    src: '/hero-solo.webp',
    alt: 'Solo developer coding at night',
    label: 'SOLO DEVELOPER.',
  },
];

const INTERVAL = 5000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = useRef(false);

  const startTimer = useCallback(() => {
    if (reducedMotion.current) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(n => (n + 1) % slides.length), INTERVAL);
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = (i: number) => {
    setActive(i);
    startTimer(); // reset the countdown so it doesn't fire immediately after a manual tap
  };

  return (
    <figure className="hero-artwork hero-slideshow">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          srcSet={s.srcSet}
          sizes="(max-width: 760px) 90vw, 50vw"
          className={`hero-slide-img${i === active ? ' slide-active' : ''}`}
          alt={s.alt}
          width="1536"
          height="1024"
          decoding="async"
          fetchPriority={i === 0 ? 'high' : undefined}
          loading={i === 0 ? undefined : 'lazy'}
        />
      ))}
      <div className="hero-slide-dots" aria-hidden="true">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-slide-dot${i === active ? ' dot-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
      <figcaption>
        <span>{slides[active].label}</span>
        <span>01 / DEVELOPERZ HUB</span>
      </figcaption>
    </figure>
  );
}
