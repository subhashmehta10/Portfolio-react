function Projects() {
  return (
    <section id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title">Selected Work</h2>
          <a className="btn secondary" href="#">See All</a>
        </div>
        <div className="grid projects">

          {/* Project 1 */}
          <article className="project card" aria-labelledby="p1-title">
            <div className="thumb">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                alt="Dashboard app preview"
              />
            </div>
            <div className="tags">
              <span className="chip">React</span>
              <span className="chip">Node</span>
              <span className="chip">PostgreSQL</span>
            </div>
            <h3 id="p1-title">SaaS Analytics Dashboard</h3>
            <p className="lead">
              End-to-end platform for subscription analytics: cohort analysis,
              MRR trends, churn insights.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">Live</a>
              <a className="btn secondary" href="#">Case Study</a>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project card" aria-labelledby="p2-title">
            <div className="thumb">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Team collaboration app preview"
              />
            </div>
            <div className="tags">
              <span className="chip">Next.js</span>
              <span className="chip">Tailwind</span>
              <span className="chip">Prisma</span>
            </div>
            <h3 id="p2-title">Collab Workspace</h3>
            <p className="lead">
              A realtime whiteboard and notes app with presence, comments, and
              role-based access.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">Live</a>
              <a className="btn secondary" href="#">GitHub</a>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project card" aria-labelledby="p3-title">
            <div className="thumb">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?q=80&w=1200&auto=format&fit=crop"
                alt="E-commerce storefront preview"
              />
            </div>
            <div className="tags">
              <span className="chip">Vue</span>
              <span className="chip">Express</span>
              <span className="chip">Stripe</span>
            </div>
            <h3 id="p3-title">Headless Commerce</h3>
            <p className="lead">
              Lightning-fast storefront with headless CMS, search, and
              server-side rendering.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#">Live</a>
              <a className="btn secondary" href="#">Case Study</a>
            </div>
          </article>

          {/* Project 4 */}

        </div>
      </div>
    </section>
  );
}

export default Projects;
