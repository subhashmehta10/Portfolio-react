function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title">
      <div className="container">
        <div className="section-head">
          <h2 id="exp-title">Experience</h2>
        </div>
        <ol className="timeline">
          <li className="t-item card">
            <div className="t-dot"></div>
            <h3>Network Security · Cisco</h3>
            <p className="lead" style={{ margin: ".2rem 0", color: "var(--muted)" }}>
              June 2024 · bhopal , madhya pradesh
            </p>
            <ul>
              <li>Highly skilled and motivated Network Security intern with a strong understanding of cyber security principles and protocols.</li>
              <li> Proficient in conducting vulnerability assessments and implementing effective security measures to protect systems and networks.</li>
              <li> Familiar with industry-leading security tools such as firewalls, intrusion detection systems, and encryption methods..</li>
            </ul>
          </li>
          <li className="t-item card">
            <div className="t-dot"></div>
            <h3>Web Development · ShineSkill Software Pvt Ltd</h3>
            <p className="lead" style={{ margin: ".2rem 0", color: "var(--muted)" }}>
              Aug 2022 — Oct 2022 · Ranchi , jharkhand
            </p>
            <ul>
              <li>Gain hands-on experience in web development using HTML , CSS, Php, and MYSQL.</li>
              <li>Worked on various projects, including e-commerce websites, blogs, and portfolio sites.</li>
              <li>Create responsive and visually appealing websites through coding and design techniques. </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Experience;
