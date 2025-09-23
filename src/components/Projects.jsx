import { useEffect, useState } from 'react';

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
          <article className="project card" aria-labelledby="p1-title">
            <div className="thumb">
              <img
                loading="lazy"
                src="./src/assets/Image/Project1.png"
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
              End-to-end platform for subscription analytics: cohort analysis,
              MRR trends, churn insights.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">View more</a>
              <a className="btn secondary" href="https://e-commerce-online-shoping.vercel.app/">Go to Project</a>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project card" aria-labelledby="p2-title">
            <div className="thumb">
              <img
                loading="lazy"
                src="./src/assets/Image/Project2.png"
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
              A realtime whiteboard and notes app with presence, comments, and
              role-based access.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">View more</a>
              <a className="btn secondary" href="#">GitHub</a>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project card" aria-labelledby="p3-title" style={isMobile && !showAll ? { display: 'none' } : undefined}>
            <div className="thumb">
              <img
                loading="lazy"
                src="./src/assets/Image/Project 3.png"
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
              Lightning-fast storefront with headless CMS, search, and
              server-side rendering.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">View more</a>
              <a className="btn secondary" href="https://trading-website-cryptex.vercel.app/">Go to Project</a>
            </div>
          </article>

          {/* Project 4 */}

        </div>
      </div>
    </section>
  );
}

export default Projects;
