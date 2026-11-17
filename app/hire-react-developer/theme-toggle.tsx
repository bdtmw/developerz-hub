'use client';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('lp-theme');
      if (stored === 'light') setLight(true);
      else if (stored === 'dark') setLight(false);
      else setLight(window.matchMedia('(prefers-color-scheme: light)').matches);
    } catch { /* private window */ }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const main = document.querySelector('.template-lp') as HTMLElement | null;
    if (light) {
      main?.classList.add('lp-light');
      document.body.classList.add('lp-light-body');
    } else {
      main?.classList.remove('lp-light');
      document.body.classList.remove('lp-light-body');
    }
    try { localStorage.setItem('lp-theme', light ? 'light' : 'dark'); } catch { /* */ }
  }, [light, mounted]);

  if (!mounted) return null;

  return (
    <button
      className={`lp-theme-btn${light ? ' is-light' : ''}`}
      onClick={() => setLight(l => !l)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span aria-hidden="true">{light ? '☀' : '☾'}</span>
      <span>{light ? 'Dark' : 'Light'}</span>
    </button>
  );
}
