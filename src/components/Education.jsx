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
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Prestige Institute of Management and Research",
      start: "2023",
      end: "2026",
      location: "bhopal, Madhya Pradesh",
      details: [
        "Branch: Computer Science and Engineering",
        "CGPA: Appearing...",
        "Thesis on scalable graph processing",
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
        "Scored 65.5%",
      ],
    },
    {
      degree: "MATRIX (10th Grade)",
      school: "MS Utkarmit Babhandi Aurangabad",
      start: "2019",
      end: "2020",
      location: "Bihar",
      details: [
        "Scored 76.4%",
      ],
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
