import React, { useState, useEffect, useRef } from 'react';
import certificate1 from "../assets/Image/Certificates/Oracle.png";
import certificate2 from "../assets/Image/Certificates/Codsoft.jpg";
import certificate3 from "../assets/Image/Certificates/Certificate3.png";
import certificate4 from "../assets/Image/Certificates/Certificate4.png";
import certificate5 from "../assets/Image/Certificates/Certificate5.jpg";
import certificate6 from "../assets/Image/Certificates/Certificate6.jpg";
import certificate7 from "../assets/Image/Certificates/Certificate7 JavaScript.jpg";
import certificate8 from "../assets/Image/Certificates/Certificate8 Introduction_to_Cybersecurit.jpg";
import certificate9 from "../assets/Image/Certificates/Certificate Simplelearn.jpg";
import certificate10 from "../assets/Image/Certificates/Simplilearn certificate gpt.jpg";
import './Certificate.css';

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  // Auto-scroll functionality (only for tablet/desktop/laptop)
  useEffect(() => {
    if (isMobile) return; // Don't auto-scroll on mobile
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const scrollDirection = 1; // 1 for right, -1 for left

    const autoScroll = () => {
      scrollAmount += scrollSpeed * scrollDirection;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset scroll when reaching the end
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
    };

    const intervalId = setInterval(autoScroll, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, [isMobile]);

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
    {
      id: 9,
      name: "Introduction to AI and Generative AI",
      issuer: "Simplilearn & google cloud",
      date: "2025",
      image: certificate9,
      description: "This certificate is awarded by Simplilearn google cloud for completing the course Introduction to AI and Generative AI."
    },
    {
      id: 10,
      name: "Excel Automation using ChatGPT",
      issuer: "Simplilearn & Microsoft",
      date: "2025",
      image: certificate10,
      description:"This certificate is awarded by Simplilearn & Microsoft for completing the course Excel Automation using ChatGPT."
    },
  ];

  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const toggleShowAll = () => {
    if (isMobile) {
      // On mobile, show password modal first
      setShowPasswordModal(true);
      setPassword('');
      setPasswordError('');
    } else {
      // On desktop/tablet, directly toggle
      setShowAll(!showAll);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'Subhash2004') {
      setShowAll(true);
      setShowPasswordModal(false);
      setPassword('');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
    setPassword('');
    setPasswordError('');
  };

  const initialCount = isMobile ? 3 : 4;
  const displayedCertificates = showAll ? certificates : certificates.slice(0, initialCount);

  return (
    <section className="about-section">
      <h2>Certificates</h2>
      
      {/* Mobile Layout - Original Grid */}
      {isMobile ? (
        <>
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
        </>
      ) : (
        /* Desktop/Tablet Layout - Auto-scroll */
        <div className="certificates-scroll-container" ref={scrollContainerRef}>
          <div className="certificates-scroll-content">
            {certificates.map((cert) => (
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
            {/* Duplicate certificates for seamless loop */}
            {certificates.map((cert) => (
              <div key={`duplicate-${cert.id}`} className="certificate-card" onClick={() => openModal(cert)}>
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

      {/* Password Modal - Only for Mobile */}
      {showPasswordModal && isMobile && (
        <div className="password-modal-overlay" onClick={closePasswordModal}>
          <div className="password-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closePasswordModal}>×</button>
            <div className="password-modal-content">
              <h3>Enter Password</h3>
              <p>Please enter the password to view all certificates:</p>
              <form onSubmit={handlePasswordSubmit}>
                <div className="password-input-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                    autoFocus
                  />
                  {passwordError && <p className="password-error">{passwordError}</p>}
                </div>
                <div className="password-modal-buttons">
                  <button type="button" onClick={closePasswordModal} className="cancel-btn">
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
