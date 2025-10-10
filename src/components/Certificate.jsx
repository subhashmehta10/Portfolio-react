import React, { useState, useEffect } from 'react';
import certificate1 from "../assets/Image/Oracle.png";
import certificate2 from "../assets/Image/Codsoft.jpg";
import './Certificate.css';

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  const certificates = [
    {
      id: 1,
      name: "Oracle Cloud Infrastructure 2025 Certified Generative Al",
      issuer: "Oracle",
      date: "2025",
      image: certificate1,
      description: "Complete React development course covering hooks, state management, and modern practices"
    },
    {
      id: 2,
      name: "Web Development",
      issuer: "CodeSoft",
      date: "2024",
      image: certificate2,
      description: "Comprehensive JavaScript course including ES6+, DOM manipulation, and async programming"
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      image: certificate1,
      description: "Full-stack web development covering HTML, CSS, JavaScript, Node.js, and databases"
    },
    {
      id: 4,
      name: "CSS Advanced Techniques",
      issuer: "MDN Web Docs",
      date: "2023",
      image: certificate1,
      description: "Advanced CSS including Flexbox, Grid, animations, and responsive design"
    },
    {
      id: 5,
      name: "Node.js Backend Development",
      issuer: "Pluralsight",
      date: "2024",
      image: certificate1,
      description: "Server-side JavaScript development with Express.js, MongoDB, and RESTful APIs"
    },
  ];

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const initialCount = isMobile ? 3 : 4;
  const displayedCertificates = showAll ? certificates : certificates.slice(0, initialCount);

  return (
    <section className="about-section">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {displayedCertificates.map((cert) => (
          <div key={cert.id} className="certificate-card" onClick={() => openModal(cert)}>
            <div className="certificate-image">
              <img src={cert.image} alt={cert.name} />
            </div>
            <div className="certificate-overlay">
              <h3>{cert.name}</h3>
              <p>{cert.issuer} • {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      {certificates.length > initialCount && (
        <div className="see-all-container">
          <button className="see-all-btn" onClick={toggleShowAll}>
            {showAll ? 'Show Less' : 'See All'}
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={closeModal}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedCertificate.image} alt={selectedCertificate.name} />
              </div>
              <div className="modal-details">
                <h3>{selectedCertificate.name}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
