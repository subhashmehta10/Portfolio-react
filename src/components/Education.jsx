function EducationItem({ degree, school, start, end, location, details }) {
  return (
    <li className="t-item card">
      <div className="t-dot"></div>
      <h3>
        {degree} · {school}
      </h3>
      <p
        className="lead"
        style={{ margin: ".2rem 0", color: "var(--muted)" }}
      >
        {start} — {end} · {location}
      </p>
      <ul>
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </li>
  );
}

export default function EducationTimeline() {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const root = document.getElementById('education');
      const items = root ? Array.from(root.querySelectorAll('.t-item.card')) : [];
      if (!('IntersectionObserver' in window) || items.length === 0) return;
      items.forEach((el, idx) => {
        const dir = idx % 2 === 0 ? 'reveal-left' : 'reveal-right';
        el.classList.add('reveal', dir);
        el.style.setProperty('--reveal-delay', `${idx * 90}ms`);
      });
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      items.forEach((el) => obs.observe(el));
    }, 0);
  }
  const education = [
    {
      degree: "B.Tech",
      school: "Prestige Institute of Management and Research",
      start: "2023",
      end: "2026",
      location: "bhopal, Madhya Pradesh",
      details: [
        "Branch: Computer Science and Engineering",
        "CGPA: Appearing...",
      ],
    },
    {
      degree: "Diploma",
      school: "Government Polytechnic college, koderma",
      start: "2020",
      end: "2023",
      location: "Koderma, Jharkhand",
      details: [
        "Branch: Computer Science",
      ],
    },
    {
      degree: "MATRIX (10th Grade)",
      school: "MS Utkarmit Babhandi Aurangabad",
      start: "2019",
      end: "2020",
      location: "Bihar",
    },
  ];

  return (
    <section id="education" aria-labelledby="edu-title">
      <div className="container">
        <div className="section-head">
          <h2 id="edu-title">Education</h2>
        </div>
        <ol className="timeline">
          {education.map((edu, idx) => (
            <EducationItem key={idx} {...edu} />
          ))}
        </ol>
      </div>
    </section>
  );
}
