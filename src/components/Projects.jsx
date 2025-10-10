import { useEffect, useState } from 'react';
import Project1 from '../assets/Image/Project1.png';
import Project2 from '../assets/Image/Project2.png';
import Project3 from '../assets/Image/Project 3.png';
import ProjectModal from './ProjectModal';

function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Project data with detailed information
  const projectsData = [
    {
      id: 1,
      title: "Online Shopping Website",
      image: Project1,
      technologies: ["HTML", "CSS", "JavaScript"],
      overview: "A comprehensive e-commerce platform that provides users with a seamless online shopping experience. The website features modern design principles, responsive layout, and intuitive user interface that works perfectly across all devices.",
      features: [
        "Responsive design that works on desktop, tablet, and mobile devices",
        "Product catalog with advanced filtering and search functionality",
        "Shopping cart with add/remove items and quantity management",
        "User authentication and account management system",
        "Product reviews and ratings system",
        "Secure checkout process with multiple payment options",
        "Order tracking and history management",
        "Admin dashboard for inventory and order management"
      ],
      techDetails: [
        {
          name: "HTML5",
          description: "Semantic markup structure with accessibility features and SEO optimization"
        },
        {
          name: "CSS3",
          description: "Modern styling with Flexbox, Grid, animations, and responsive design principles"
        },
        {
          name: "JavaScript ES6+",
          description: "Dynamic functionality including DOM manipulation, API integration, and interactive features"
        }
      ],
      highlights: [
        "Achieved 95%+ mobile responsiveness across all devices",
        "Implemented advanced search with real-time filtering",
        "Created smooth animations and transitions for better UX",
        "Optimized for fast loading with lazy loading images",
        "Cross-browser compatibility ensured"
      ],
      challenges: "The main challenge was creating a seamless shopping experience while maintaining performance. I solved this by implementing efficient DOM manipulation techniques, optimizing image loading, and creating a modular JavaScript architecture that handles complex state management without external libraries.",
      liveUrl: "https://e-commerce-online-shoping.vercel.app/",
      githubUrl: null
    },
    {
      id: 2,
      title: "Classroom Scheduler",
      image: Project2,
      technologies: ["HTML", "CSS", "JavaScript"],
      overview: "An intelligent scheduling system designed for educational institutions to manage classroom assignments, teacher schedules, and course timetables efficiently. The system helps administrators optimize resource utilization and avoid scheduling conflicts.",
      features: [
        "Drag-and-drop interface for easy schedule management",
        "Conflict detection and resolution system",
        "Multi-user support with role-based access control",
        "Calendar view with monthly, weekly, and daily perspectives",
        "Automated scheduling suggestions based on constraints",
        "Resource allocation optimization",
        "Export functionality for schedules and reports",
        "Real-time notifications for schedule changes"
      ],
      techDetails: [
        {
          name: "HTML5",
          description: "Structured layout with semantic elements and form validation"
        },
        {
          name: "CSS3",
          description: "Custom grid system, animations, and responsive design for optimal viewing"
        },
        {
          name: "Vanilla JavaScript",
          description: "Complex scheduling algorithms, DOM manipulation, and local storage management"
        }
      ],
      highlights: [
        "Developed intelligent conflict detection algorithm",
        "Created intuitive drag-and-drop scheduling interface",
        "Implemented efficient data persistence using localStorage",
        "Built responsive design that works on all screen sizes",
        "Achieved 100% accessibility compliance"
      ],
      challenges: "The biggest challenge was creating an efficient algorithm to detect and resolve scheduling conflicts while maintaining optimal performance. I developed a custom algorithm that checks multiple constraints simultaneously and provides intelligent suggestions for conflict resolution.",
      liveUrl: null,
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Trading Website Cryptex",
      image: Project3,
      technologies: ["HTML", "CSS", "JavaScript"],
      overview: "A sophisticated cryptocurrency trading platform that simulates real-time trading experiences. Cryptex provides users with comprehensive market data, portfolio tracking, and trading simulation tools to help them understand cryptocurrency markets without financial risk.",
      features: [
        "Real-time cryptocurrency price tracking and updates",
        "Interactive trading dashboard with buy/sell functionality",
        "Portfolio management with profit/loss calculations",
        "Market analysis tools with charts and trends",
        "Price alerts and notifications system",
        "Trading history and transaction logs",
        "Multiple cryptocurrency support",
        "Responsive design for mobile trading"
      ],
      techDetails: [
        {
          name: "HTML5",
          description: "Semantic structure with data attributes for dynamic content management"
        },
        {
          name: "CSS3",
          description: "Advanced styling with CSS Grid, animations, and dark theme optimization"
        },
        {
          name: "JavaScript",
          description: "API integration, real-time data processing, and complex financial calculations"
        }
      ],
      highlights: [
        "Integrated real-time cryptocurrency API for live price updates",
        "Created sophisticated portfolio tracking with accurate P&L calculations",
        "Developed responsive design optimized for financial data visualization",
        "Implemented smooth animations for better user engagement",
        "Built comprehensive trading simulation without external dependencies"
      ],
      challenges: "The main challenge was handling real-time data updates while maintaining smooth performance and accurate financial calculations. I solved this by implementing efficient data caching, debounced API calls, and optimized DOM updates to ensure the platform remains responsive even with frequent price updates.",
      liveUrl: "https://trading-website-cryptex.vercel.app/",
      githubUrl: null
    }
  ];

  const handleViewMore = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  // Animate project cards when they enter viewport
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll('.project.card'));
    if (!('IntersectionObserver' in window) || cards.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('in-view');
            observer.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );
    cards.forEach((el, idx) => {
      el.style.setProperty('--reveal-delay', `${idx * 120}ms`);
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowAll((v) => !v);
  };

  return (
    <section id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title">Projects Work</h2>
        </div>
        <div className="grid projects">

          {/* Project 1 */}
          <article className="project card reveal-left" aria-labelledby="p1-title">
            <div className="thumb">
              <img
                loading="lazy"
                src={projectsData[0].image}
                alt={projectsData[0].title}
              />
            </div>
            <div className="tags">
              {projectsData[0].technologies.map((tech, index) => (
                <span key={index} className="chip">{tech}</span>
              ))}
            </div>
            <h3 id="p1-title">{projectsData[0].title}</h3>
            <p className="lead">
              {projectsData[0].overview.substring(0, 150)}...
            </p>
            <div className="hero-cta">
              <button className="btn" onClick={() => handleViewMore(1)}>View more</button>
              <a className="btn secondary" href={projectsData[0].liveUrl} target="_blank" rel="noopener noreferrer">Go to Project</a>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project card reveal-up" aria-labelledby="p2-title">
            <div className="thumb">
              <img
                loading="lazy"
                src={projectsData[1].image}
                alt={projectsData[1].title}
              />
            </div>
            <div className="tags">
              {projectsData[1].technologies.map((tech, index) => (
                <span key={index} className="chip">{tech}</span>
              ))}
            </div>
            <h3 id="p2-title">{projectsData[1].title}</h3>
            <p className="lead">
              {projectsData[1].overview.substring(0, 150)}...
            </p>
            <div className="hero-cta">
              <button className="btn" onClick={() => handleViewMore(2)}>View more</button>
              <a className="btn secondary" href={projectsData[1].githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project card reveal-right" aria-labelledby="p3-title" style={isMobile && !showAll ? { display: 'none' } : undefined}>
            <div className="thumb">
              <img
                loading="lazy"
                src={projectsData[2].image}
                alt={projectsData[2].title}
              />
            </div>
            <div className="tags">
              {projectsData[2].technologies.map((tech, index) => (
                <span key={index} className="chip">{tech}</span>
              ))}
            </div>
            <h3 id="p3-title">{projectsData[2].title}</h3>
            <p className="lead">
              {projectsData[2].overview.substring(0, 150)}...
            </p>
            <div className="hero-cta">
              <button className="btn" onClick={() => handleViewMore(3)}>View more</button>
              <a className="btn secondary" href={projectsData[2].liveUrl} target="_blank" rel="noopener noreferrer">Go to Project</a>
            </div>
          </article>


        </div>
        
        {isMobile && (
          <div className="see-all-container">
            <button className="see-all-btn" onClick={handleToggle}>
              {showAll ? 'Show Less' : 'See All'}
            </button>
          </div>
        )}
      </div>
      
      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default Projects;
