import React, { useState, useEffect } from 'react';

// Yeh component aapke custom cursor ko render aur manage karega
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // --- Mouse move event listener ---
    // Jab mouse move hoga, yeh function cursor ki position update karega
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Event listener ko window par add karna
    window.addEventListener('mousemove', handleMouseMove);

    // --- Hover effect event listeners ---
    // Jab cursor kisi link ya button par jayega
    const handleMouseEnter = () => setIsHovered(true);
    // Jab cursor kisi link ya button se hatega
    const handleMouseLeave = () => setIsHovered(false);

    // Sabhi interactive elements (links, buttons, etc.) ko select karna
    const interactiveElements = document.querySelectorAll(
      'a, button, .interactive-element'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // --- Cleanup function ---
    // Component ke unmount hone par event listeners ko remove karna
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []); // Yeh effect sirf ek baar run hoga (component mount hone par)

  // Custom cursor ka JSX
  return (
    <div
      className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default function App() {
  return (
    <>
      {/* Custom Cursor Component ko yahan render karein */}
      <CustomCursor />

      {/* CSS Styles for Custom Cursor */}
      <style>{`
        /* Custom cursor ki base styling */
        .custom-cursor {
          position: fixed;
          width: 302px;
          height: 302px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25), transparent 50%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none; /* Yeh zaroori hai taki cursor ke neeche ke elements click ho sakein */
          z-index: 9999;
          transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease, transform 0.1s ease-out;
        }
        
        /* Jab cursor kisi link ya button par hover karega */
        .custom-cursor.hovered {
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 40%);
        }

      `}</style>
    </>
  );
}

