import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Enter a valid email address.");
      return;
    }

    setStatus("Thanks! Your message has been Sucessfully Send.");
    form.reset();
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head">
          <h2 id="contact-title">Contact</h2>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1.2fr .8fr", gap: "1.2rem" }}>
          <form className="card" onSubmit={handleSubmit} noValidate>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Ada Lovelace" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@domain.com" required />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Tell me about your project..." required />
            </label>
            <div className="hero-cta">
              <button className="btn" type="submit">Send Message</button>
              {status && <span className="chip">{status}</span>}
            </div>
          </form>
          <aside className="card">
            <p><strong>Email:</strong> <a href="mailto:kumarmehta172@example.com">kumarmehta172@example.com</a></p>
            <p><strong>Location:</strong> Bhopal, Madhya Pradesh</p>
            <p><strong>Social:</strong></p>
            <p className="hero-cta" style={{ marginTop: ".4rem" }}>
              <a className="btn secondary" href="#">GitHub</a>
              <a className="btn secondary" href="https://www.linkedin.com/in/subhash-kumar-a75849227">LinkedIn</a>
              <a className="btn secondary" href="https://instagram.com/mehta.subhash10">Instagram</a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
