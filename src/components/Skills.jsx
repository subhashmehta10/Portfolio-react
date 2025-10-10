function Skills() {
  // Reveal on scroll
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const root = document.getElementById('skills');
      const items = root ? Array.from(root.querySelectorAll('.skill')) : [];
      if (!('IntersectionObserver' in window) || items.length === 0) return;
      items.forEach((el, idx) => {
        el.classList.add('reveal', idx % 2 === 0 ? 'reveal-left' : 'reveal-right');
        el.style.setProperty('--reveal-delay', `${idx * 80}ms`);
      });
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      items.forEach((el) => obs.observe(el));
    }, 0);
  }
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-head">
          <h2 id="skills-title">Skills</h2>
        </div>
        <div className="grid skills">
          <div className="skill"><strong>JavaScript</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>React / Next.js</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>Node / Express</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>CSS / Tailwind</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>SQL </strong><span className="chip">Intermediate</span></div>
          <div className="skill"><strong>UX / Accessibility</strong><span className="chip">Advanced</span></div>
          <div className="skill"><strong>Cloud (Vercel, AWS)</strong><span className="chip">Intermediate</span></div>
          <div className="skill"><strong>Communication (English, Hindi)</strong><span className="chip">Intermediate</span></div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
