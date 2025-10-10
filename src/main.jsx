import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MessageProvider } from './context/MessageContext.jsx';

// Hide Inspect option from right-click menu
if (typeof window !== 'undefined') {
  // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'J') ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Hide inspect option by intercepting context menu
  document.addEventListener('contextmenu', (e) => {
    // Create a custom context menu
    e.preventDefault();
    
    // Create custom context menu
    const customMenu = document.createElement('div');
    customMenu.style.cssText = `
      position: fixed;
      top: ${e.clientY}px;
      left: ${e.clientX}px;
      background: #2d3748;
      border: 1px solid #4a5568;
      border-radius: 4px;
      padding: 4px 0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 10000;
      min-width: 150px;
    `;
    
    // Add menu items (excluding inspect)
    const menuItems = [
      { text: 'Copy', action: () => document.execCommand('copy') },
      { text: 'Paste', action: () => document.execCommand('paste') },
      { text: 'Select All', action: () => document.execCommand('selectAll') },
      { text: 'Print', action: () => window.print() },
      { text: 'Save As', action: () => window.print() }
    ];
    
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.textContent = item.text;
      menuItem.style.cssText = `
        padding: 8px 16px;
        cursor: pointer;
        color: #e2e8f0;
        font-size: 14px;
        transition: background-color 0.2s;
      `;
      menuItem.addEventListener('mouseenter', () => {
        menuItem.style.backgroundColor = '#4a5568';
      });
      menuItem.addEventListener('mouseleave', () => {
        menuItem.style.backgroundColor = 'transparent';
      });
      menuItem.addEventListener('click', () => {
        item.action();
        document.body.removeChild(customMenu);
      });
      customMenu.appendChild(menuItem);
    });
    
    document.body.appendChild(customMenu);
    
    // Remove menu when clicking elsewhere
    const removeMenu = (event) => {
      if (!customMenu.contains(event.target)) {
        document.body.removeChild(customMenu);
        document.removeEventListener('click', removeMenu);
      }
    };
    
    setTimeout(() => {
      document.addEventListener('click', removeMenu);
    }, 100);
  });
}

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
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>,
)
