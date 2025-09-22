// import React from 'react';
// import { SiGooglemaps } from "react-icons/si";
// import { CiPhone } from "react-icons/ci";
// import { FaRegEnvelope } from "react-icons/fa6";
import './contact.css'

const Contacts = () => {
  return (
    <>
    <div>
        <h1 className='contact'>Contacts</h1>
    </div>
    <div className="contact-container">
        <br />
      <div className="contact-info">
        <h2>Contact</h2>
        <p>
          Have a project in mind? I'd love to hear about it.
        </p>
        <div className="info-item">
            <div className="icon"><SiGooglemaps /></div>
          <div>
            <strong>Address</strong>
            <p>Ratnagiri ,Bhopal(462022), India</p>
          </div>
        </div>
        <div className="info-item">
            <div className="icon"><CiPhone /></div>
          <div>
            <strong>Call Us</strong>
            <p>+919693431715</p>
          </div>
        </div>
        <div className="info-item">
          
            <div className="icon"><FaRegEnvelope /></div>
          
          <div>
            <strong>Email Us</strong>
            <p>Sugandhkumarkvs095@gmail.com</p>
          </div>
        </div>
        <div className="map-container">
          <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092183!2d144.95373621531853!3d-37.81720997975111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0d1b75%3A0x5045675218ceed1!2sDowntown!5e0!3m2!1sen!2sau!4v1614629268390!5m2!1sen!2sau"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <footer className="footer">
      <div className="footer-content">
        <p>© Copyright iPortfolio. All Rights Reserved</p>
      </div>
      <div className="scroll-to-top">
        <a href="#top">
          <button className="scroll-button">↑</button>
        </a>
      </div>
    </footer>
    
    </>
  );
};

export default Contacts;
