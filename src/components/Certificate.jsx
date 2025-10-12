import React, { useState, useEffect } from 'react';
import certificate1 from "../assets/Image/Oracle.png";
import certificate2 from "../assets/Image/Codsoft.jpg";
import certificate3 from "../assets/Image/Certificate3.png";
import certificate4 from "../assets/Image/Certificate4.png";
import certificate5 from "../assets/Image/Certificate5.jpg";
import certificate6 from "../assets/Image/Certificate6.jpg";
import certificate7 from "../assets/Image/Certificate7 JavaScript.jpg";
import certificate8 from "../assets/Image/Certificate8 Introduction_to_Cybersecurit.jpg";
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
      name: "Oracle Cloud Infrastructure 2025 Certified Al Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      image: certificate4,
      description: "This certifies that the above named is recognized by Oracle Corporation as Oracle Certified."
    },
    {
      id: 2,
      name: "Oracle Cloud Infrastructure 2025 Certified Generative Al",
      issuer: "Oracle",
      date: "2025",
      image: certificate1,
      description: "This certifies that the above named is recognized by Oracle Corporation as Oracle Certified."
    },
    {
      id: 3,
      name: "Web Development",
      issuer: "CodeSoft",
      date: "2024",
      image: certificate2,
      description: " Comprehensive web development course covering HTML, CSS, JavaScript, React, Node.js, and databases"
    },
    {
      id: 4,
      name: "JavaScript Essential",
      issuer: "CISCO Netwroks",
      date: "2024",
      image: certificate7,
      description: "My Government initiative to promote awareness about India's space missions"
    },
    {
      id: 5,
      name: "Cyber Security",
      issuer: "CISCO Netwroks",
      date: "2023",
      image: certificate8,
      description: "My Government initiative to promote awareness about India's space missions"
    },
    {
      id: 6,
      name: "Front End Development - HTML",
      issuer: "Great Learning",
      date: "2023",
      image: certificate3,
      description: "Full-stack web development covering HTML, CSS, JavaScript, Node.js, and databases"
    },
    {
      id: 7,
      name: "Chandrayan MahaQuiz",
      issuer: "ISRO",
      date: "2023",
      image: certificate5,
      description: "My Government initiative to promote awareness about India's space missions"
    },
    
    {
      id: 8,
      name: "Full Stack Development",
      issuer: "ShineSkill Software pvt Ltd",
      date: "2022",
      image: certificate6,
      description: "Make you a full stack web developer with HTML, CSS, JavaScript, React, Node.js, MongoDB"
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
                <div className="modal-issuer-section">
                  <p className="modal-issuer">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
                  <button 
                    className="modal-download-btn"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = selectedCertificate.image;
                      link.download = `${selectedCertificate.name}.png`;
                      link.click();
                    }}
                  >
                    📥 Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
