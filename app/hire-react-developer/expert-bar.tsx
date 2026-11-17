'use client';
import { useState, useEffect } from 'react';

export function ExpertBar() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const random = () => Math.floor(Math.random() * 9) + 4; // 4–12
    setCount(random());
    setMounted(true);
    document.body.classList.add('has-expert-bar');

    const id = setInterval(() => setCount(random()), 30000);
    return () => {
      clearInterval(id);
      document.body.classList.remove('has-expert-bar');
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="lp-expert-bar" role="status" aria-live="polite">
      <div className="lp-expert-bar-inner">
        <div className="lp-expert-bar-status">
          <span className="lp-expert-dot" aria-hidden="true" />
          <span>
            <strong>{count} experts</strong> available right now &middot; book in 10 minutes
          </span>
        </div>
        <div className="lp-expert-bar-ctas">
          <a href="#lp-form" className="lp-expert-btn-outline">Talk to PM</a>
          <a href="#lp-form" className="lp-expert-btn-fill">Fix React App Now &rarr;</a>
        </div>
      </div>
    </div>
  );
}
