import IMG from "../assets/IMG.jpg";

function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-head">
          <h2 id="about-title">About</h2>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 3fr", gap: "1.5rem" }}>
          <div className="card">
            <img loading="lazy" alt="Portrait" src={IMG} style={{ borderRadius: "12px" }}/>
          </div>
          <div className="card">
            <p className="lead">
              I'm a frontend-leaning full-stack developer who loves building
              clean, accessible interfaces and the systems that power them.
            </p>
            <p>
              When I'm not coding, you can find me sketching UI ideas, writing
              dev notes, or playing games.
            </p>
            <div className="hero-cta">
              <a className="btn" href="#contact">Hire Me</a>
              <a className="btn secondary" href="#">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
