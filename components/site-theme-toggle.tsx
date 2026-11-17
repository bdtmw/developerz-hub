'use client';
import { useEffect, useState } from 'react';

export function SiteThemeToggle() {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      setLight(localStorage.getItem('site-theme') === 'light');
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.classList.toggle('site-light', light);
    try { localStorage.setItem('site-theme', light ? 'light' : 'dark'); } catch {}
  }, [light, mounted]);

  if (!mounted) return null;

  return (
    <button
      className="site-theme-toggle"
      onClick={() => setLight(l => !l)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span aria-hidden="true">{light ? '☀' : '☾'}</span>
    </button>
  );
}
