import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Falling white stars: spawn from top, shine at bottom, then disappear
if (typeof window !== 'undefined') {
  const initStars = () => {
    let disabled = false;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const makeStar = () => {
      if (disabled) return;
      // Cap concurrent stars on screen
      const active = document.querySelectorAll('.star').length;
      if (active >= 10) return;
      const star = document.createElement('div');
      star.className = 'star';
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const left = Math.random() * vw;
      const size = 3 + Math.random() * 4;
      const dur = 5 + Math.random() * 6;
      star.style.left = `${left}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--fall-dur', `${dur}s`);
      document.body.appendChild(star);

      const onFallEnd = () => {
        // Shine and fade out at bottom
        star.style.animation = 'star-shine 600ms ease-out forwards';
        star.addEventListener('animationend', () => star.remove(), { once: true });
      };
      star.addEventListener('animationend', onFallEnd, { once: true });
    };

    // spawn loop
    const spawn = () => {
      if (disabled) return;
      makeStar();
      // Slower spawn for fewer stars overall
      const next = 1800 + Math.random() * 2200; // 1.8s - 4.0s
      setTimeout(spawn, next);
    };
    spawn();

    // stop on visibility change to save CPU
    document.addEventListener('visibilitychange', () => {
      disabled = document.hidden;
      if (!disabled) spawn();
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStars, { once: true });
  } else {
    initStars();
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
