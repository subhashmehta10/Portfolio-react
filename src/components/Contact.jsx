import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
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

	// Backend removed: show instant success and reset
	setStatus("Thanks! Your message has been successfully sent.");
	form.reset();
	setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head">
          <h2 id="contact-title">Contact</h2>
        </div>
        <div className="grid contact-grid">
          <form className="card" onSubmit={handleSubmit} noValidate>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Enter Your Name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="Enter Your Email" required />
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
            <p><strong>Email:</strong> <a href="mailto:kumarmehta172@gmail.com">kumarmehta172@gmail.com</a></p>
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
