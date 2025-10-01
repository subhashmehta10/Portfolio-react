import { useEffect, useState } from 'react';
import Project1 from '../assets/Image/Project1.png';
import Project2 from '../assets/Image/Project2.png';
import Project3 from '../assets/Image/Project 3.png';

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  // Animate project cards when they enter viewport
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.project.card'));
    if (!('IntersectionObserver' in window) || cards.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('in-view');
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    cards.forEach((el, idx) => {
      el.style.setProperty('--reveal-delay', `${idx * 120}ms`);
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowAll((v) => !v);
  };

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title">Selected Work</h2>
          {isMobile && (
            <button className="btn secondary" onClick={handleToggle} aria-expanded={showAll}>
              {showAll ? 'Show Less' : 'See All'}
            </button>
          )}
        </div>
        <div className="grid projects">

          {/* Project 1 */}
          <article className="project card reveal-left" aria-labelledby="p1-title">
            <div className="thumb">
              <img
                loading="lazy"
                src={Project1}
                alt="Online Shoping Website"
              />
            </div>
            <div className="tags">
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">JavaScript</span>
            </div>
            <h3 id="p1-title">Online Shoping Website</h3>
            <p className="lead">
              This online shopping website is a modern, responsive platform designed using HTML, CSS, and JavaScript to deliver a smooth and engaging user experience. It features a clean layout, intuitive navigation, and dynamic functionality such as product filtering, interactive buttons, and real-time search.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">View more</a>
              <a className="btn secondary" href="https://e-commerce-online-shoping.vercel.app/">Go to Project</a>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project card reveal-up" aria-labelledby="p2-title">
            <div className="thumb">
              <img
                loading="lazy"
                src={Project2}
                alt="Team collaboration app preview"
              />
            </div>
            <div className="tags">
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">Javascript</span>
            </div>
            <h3 id="p2-title">Classroom Scheduler</h3>
            <p className="lead">
              Our Classroom Scheduler is a smart and efficient web-based tool designed using HTML, CSS, and JavaScript to simplify timetable management for schools, colleges, and coaching centers.The interface is clean and user-friendly, allowing administrators or faculty to assign subjects, teachers, and classrooms with ease.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">View more</a>
              <a className="btn secondary" href="#">GitHub</a>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project card reveal-right" aria-labelledby="p3-title" style={isMobile && !showAll ? { display: 'none' } : undefined}>
            <div className="thumb">
              <img
                loading="lazy"
                src={Project3}
                alt="E-commerce storefront preview"
              />
            </div>
            <div className="tags">
              <span className="chip">HTML</span>
              <span className="chip">CSS</span>
              <span className="chip">Javascript</span>
            </div>
            <h3 id="p3-title">Trading Website Cryptex</h3>
            <p className="lead">
              Cryptex is a sleek and responsive cryptocurrency trading platform developed using HTML, CSS, and JavaScript. Designed to simulate real-time trading experiences, it offers users a clean interface to view market trends, track crypto prices.JavaScript powers key functionalities like live price updates, buy/sell simulations, and user alerts
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">View more</a>
              <a className="btn secondary" href="https://trading-website-cryptex.vercel.app/">Go to Project</a>
            </div>
          </article>


        </div>
      </div>
    </section>
  );
}

export default Projects;
