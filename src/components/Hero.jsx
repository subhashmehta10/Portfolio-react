import React, { useEffect, useMemo, useRef, useState } from 'react';
import IMG from "../assets/Image/IMG1.jpg";
import heroVideo from "../assets/Image/hero_section_video.mp4";

// GitHub, LinkedIn, aur Twitter ke liye SVG Icons
// Aap chahein to 'react-icons' jaisi library ka istemal bhi kar sakte hain
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);




function Hero() {
  // Reusable typing component defined inline to avoid new files
  const TypingText = ({ texts, typeSpeed = 70, deleteSpeed = 45, pauseMs = 1200, className = "", loop = true, highlightText, highlightClass = "" }) => {
    const safeTexts = useMemo(() => (Array.isArray(texts) ? texts.filter(Boolean) : [String(texts || "")]), [texts]);
    const [textIndex, setTextIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
      const full = safeTexts[textIndex] || "";
      const atWordEnd = !isDeleting && displayed === full;
      const atStart = isDeleting && displayed === "";

      const step = () => {
        if (isDeleting) {
          setDisplayed(prev => prev.slice(0, -1));
        } else {
          setDisplayed(full.slice(0, displayed.length + 1));
        }
      };

      const schedule = (ms) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(step, ms);
      };

      if (atWordEnd) {
        // pause before deleting
        timerRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
        return () => clearTimeout(timerRef.current);
      }

      if (atStart) {
        // move to next word
        if (loop || textIndex < safeTexts.length - 1) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % safeTexts.length);
        }
        return;
      }

      schedule(isDeleting ? deleteSpeed : typeSpeed);
      return () => clearTimeout(timerRef.current);
    }, [displayed, isDeleting, pauseMs, safeTexts, textIndex, typeSpeed, deleteSpeed, loop]);

    // Reset when texts change
    useEffect(() => {
      setDisplayed("");
      setIsDeleting(false);
      setTextIndex(0);
    }, [safeTexts]);

    // Wrap only the highlighted substring if present in the displayed part
    if (highlightText && displayed.includes(highlightText)) {
      const idx = displayed.indexOf(highlightText);
      const before = displayed.slice(0, idx);
      const match = displayed.slice(idx, idx + highlightText.length);
      const after = displayed.slice(idx + highlightText.length);
      return (
        <span className={`typing ${className}`}>
          {before}
          <span className={highlightClass}>{match}</span>
          {after}
        </span>
      );
    }
    return <span className={`typing ${className}`}>{displayed}</span>;
  };

  return (
    <main id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <video
          className="hero-bg-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="container hero-grid">
        <div>
          <p className="kicker">
            Designer • Developer • Problem Solver
          </p>
          <h1>
            <span
              style={{
                color: "var(--text)",
              }}
            >
              <TypingText
                texts={["Hi, I'm Subhash Mehta."]}
                typeSpeed={80}
                deleteSpeed={50}
                pauseMs={1400}
                highlightText="Subhash Mehta"
                highlightClass="name-gradient"
              />
            </span>
            <br />I craft high performance React UIs with clean, reusable components.
          </h1>
          <p className="lead">
            React Developer focused on building fast, accessible user interfaces
            with modern tooling. I ship production ready apps with clean
            architecture and great developer experience.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#work">View Projects</a>
            <a className="btn secondary" href="#contact">Get in Touch</a>
          </div>

          {/* --- Naye Social Links --- */}
          <div className="social-links">
            <a href="https://github.com/subhashmehta10" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              {/* <-- Apna GitHub link daalein */}
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/mehta-subhash10/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              {/* <-- Apna LinkedIn link daalein */}
              <LinkedinIcon />
            </a>
            <a href="https://twitter.com/official_subh03" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
              {/* <-- Apna Twitter/X link daalein */}
              <TwitterIcon />
            </a>
          </div>

        </div>
        <aside className="hero-card">
          {/* --- Profile Photo --- */}
          <img
            src={IMG} // <-- Apni photo ka path yahan daalein (e.g., '/images/profile.png')
            alt="Subhash Mehta" className="profile-pic"
          />
          <div className="card">
            <strong>Now</strong>
            <p className="lead" style={{ margin: ".2rem 0 0" }}>
              Exploring <em>AI UX</em> and building tools that empower creators.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Hero;