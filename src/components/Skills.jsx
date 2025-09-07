function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head">
          <h2 id="skills-title">Skills</h2>
        </div>
        <div className="grid skills">
          <div className="skill"><strong>JavaScript / TypeScript</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>React / Next.js</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>Node / Express</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>CSS / Tailwind</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>SQL / Prisma</strong><span className="chip">Intermediate</span></div>
          <div className="skill"><strong>UX / Accessibility</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>Testing (Jest, RTL)</strong><span className="chip">Intermediate</span></div>
          <div className="skill"><strong>Cloud (Vercel, AWS)</strong><span className="chip">Intermediate</span></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
