import React, { useEffect, useState } from "react";
import TelegramFloat from "./compo/TelegramFloat";
import { Link } from "react-router-dom";
import IMG from "../assets/Image/IMG1.jpg";
import Subhash from "../assets/Image/Subhash CV.pdf";
import Map from "./Map";
import Certificate from "./Certificate";
import Footer from "./Footer";
import "../components/AboutPage.css";

function AboutPage() {
  const [useMainBackground, setUseMainBackground] = useState(true);
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Intersection Observer for My Journey section only
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe only journey timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.setProperty('--animation-delay', `${index * 0.2}s`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className={`about-page ${useMainBackground ? 'use-main-bg' : ''}`}>
      <TelegramFloat />
      {/* Navigation Header */}
      <nav className="about-nav">
        <div className="container">
          <Link to="/" className="back-btn">
            ← Back to Home
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setUseMainBackground((v) => !v)}
              aria-pressed={useMainBackground}
              title={useMainBackground ? 'Switch to About default theme' : 'Apply Main Page Theme'}
            >
              <span className={`theme-icon ${useMainBackground ? 'on' : 'off'}`} aria-hidden>
                {useMainBackground ? '🌙' : '✨'}
              </span>
              <span className="theme-label">
                {useMainBackground ? 'Use Main Theme' : 'Default Theme'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>About Me</h1>
              <p className="about-hero-subtitle">
                Frontend-leaning Full Stack Developer
              </p>
            </div>
            <div className="about-hero-image">
              <img src={IMG} alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="about-main">
        <div className="container">
          {/* Introduction */}
          <section className="about-section">
            <h2>Who Am I?</h2>
            <div className="about-content">
              <p>
                I'm a passionate frontend-leaning full-stack developer with a love for creating 
                clean, accessible, and user-friendly interfaces. My journey in web development 
                started with curiosity and has evolved into a deep passion for building 
                meaningful digital experiences.
              </p>
              <p>
                I specialize in modern web technologies including React, JavaScript, Node.js, 
                and various frontend frameworks. I believe in writing clean, maintainable code 
                and following best practices to deliver high-quality solutions.
              </p>
            </div>
          </section>

          {/* Skills & Expertise */}
          <section className="about-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React.js & Next.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js & Express</li>
                  <li>RESTful APIs</li>
                  <li>Database Design</li>
                  <li>Authentication</li>
                  <li>Server Management</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools & Technologies</h3>
                <ul>
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Postman</li>
                  <li>Chrome DevTools</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="about-section">
            <h2>My Development Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <h3>User-Centric Design</h3>
                <p>
                  I believe in putting users first. Every interface I create is designed 
                  with accessibility, usability, and user experience in mind.
                </p>
              </div>
              <div className="philosophy-item">
                <h3>Clean Code</h3>
                <p>
                  Writing maintainable, readable, and efficient code is not just a practice 
                  but a commitment to future developers and project sustainability.
                </p>
              </div>
              <div className="philosophy-item">
                <h3>Continuous Learning</h3>
                <p>
                  The tech world evolves rapidly, and I'm committed to staying updated 
                  with the latest technologies and best practices.
                </p>
              </div>
              <div className="philosophy-item">
                <h3>Collaboration</h3>
                <p>
                  Great products are built by great teams. I value open communication, 
                  feedback, and collaborative problem-solving.
                </p>
              </div>
            </div>
          </section>

          {/* Journey */}
          <section className="about-section">
            <h2>My Journey</h2>
            <div className="journey-timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>The Beginning</h3>
                  <p>
                    Started my coding journey with curiosity about how websites work. 
                    Began with HTML and CSS, creating simple static pages.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>JavaScript Discovery</h3>
                  <p>
                    Discovered the power of JavaScript and how it brings websites to life. 
                    Started building interactive applications and fell in love with programming.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>React & Modern Development</h3>
                  <p>
                    Embraced React and modern development practices. Started building 
                    complex applications and learned about state management, APIs, and more.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Full Stack Evolution</h3>
                  <p>
                    Expanded into backend development with Node.js, databases, and 
                    full-stack architecture. Now building complete web solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Certificates */}
          <Certificate />

          {/* Interests */}
          <section className="about-section">
            <h2>Beyond Coding</h2>
            <div className="interests-grid">
              <div className="interest-item">
                <h3> UI/UX Design</h3>
                <p>Sketching interface ideas and exploring design principles</p>
              </div>
              <div className="interest-item">
                <h3> Technical Writing</h3>
                <p>Writing development notes and sharing knowledge with the community</p>
              </div>
              <div className="interest-item">
                <h3>Gaming</h3>
                <p>Playing games for relaxation and inspiration for interactive experiences</p>
              </div>
              <div className="interest-item">
                <h3>Learning</h3>
                <p>Always exploring new technologies and development techniques</p>
              </div>
            </div>
          </section>

          {/* Call to Action and Map Row */}
          <section className="about-cta-map-row">
            <div className="cta-section">
              <h2>Let's Work Together</h2>
              <p>
                I'm always excited to work on new projects and collaborate with fellow developers 
                and designers. If you have an interesting project or just want to chat about 
                development, feel free to reach out!
              </p>
              <div className="cta-buttons">
                <Link to="/#contact" className="btn primary">Get In Touch</Link>
                <a href={Subhash} className="btn secondary" target="_blank">Download Resume</a>
              </div>
            </div>
            <div className="map-section">
              <Map />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
