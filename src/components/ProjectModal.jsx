import { useEffect } from 'react';
import './ProjectModal.css';

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-header">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>
        
        <div className="modal-title-section">
          <h2 className="modal-title">{project.title}</h2>
          <div className="modal-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="modal-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Project Overview</h3>
            <p>{project.overview}</p>
          </div>

          <div className="modal-section">
            <h3>Key Features</h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Technologies Used</h3>
            <div className="tech-details">
              {project.techDetails.map((tech, index) => (
                <div key={index} className="tech-item">
                  <strong>{tech.name}:</strong> {tech.description}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Project Highlights</h3>
            <ul className="highlights-list">
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          {project.challenges && (
            <div className="modal-section">
              <h3>Challenges & Solutions</h3>
              <p>{project.challenges}</p>
            </div>
          )}

          <div className="modal-section">
            <h3>Project Links</h3>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                  🌐 Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                  📁 GitHub Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
