import React from 'react';
import IMG from "../assets/IMG.jpg";

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
  return (
    <main id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="kicker">Designer • Developer • Problem Solver</p>
          <h1>
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg,var(--brand),var(--brand-2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {/* <-- Apka Naam Yahan Daalein */}
              Subhash Mehta
            </span>
            . <br />I build delightful, accessible web experiences.
          </h1>
          <p className="lead">
            From concept to launch — I craft performant interfaces and robust
            systems. Currently open to freelance and full-time opportunities.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#work">View Projects</a>
            <a className="btn secondary" href="#contact">Get in Touch</a>
          </div>

          {/* --- Naye Social Links --- */}
          <div className="social-links">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              {/* <-- Apna GitHub link daalein */}
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              {/* <-- Apna LinkedIn link daalein */}
              <LinkedinIcon />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
              {/* <-- Apna Twitter/X link daalein */}
              <TwitterIcon />
            </a>
          </div>

        </div>
        <aside className="hero-card">
          {/* --- Profile Photo --- */}
          <img 
            src={IMG} // <-- Apni photo ka path yahan daalein (e.g., '/images/profile.png')
            alt="A photo of Your Name" className="profile-pic"
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