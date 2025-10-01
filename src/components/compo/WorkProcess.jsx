
import React from 'react';

const workSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Understanding your goals, requirements, and target audience",
    icon: "🔍", // Placeholder for icons
  },
  {
    id: 2,
    title: "Planning",
    description: "Creating detailed project roadmap and technical specifications",
    icon: "📊",
  },
  {
    id: 3,
    title: "Development",
    description: "Building your solution with best practices and modern technologies",
    icon: "💻",
  },
  {
    id: 4,
    title: "Launch",
    description: "Testing, deployment, and ongoing support for your success",
    icon: "🚀",
  },
];

const WorkProcess = () => {
  if (typeof window !== 'undefined') {
    setTimeout(()=>{
      const container = document.querySelector('.work-steps');
      const items = container ? Array.from(container.querySelectorAll('.work-step')) : [];
      if (!('IntersectionObserver' in window) || items.length === 0) return;
      items.forEach((el, idx)=>{
        const dir = idx % 2 === 0 ? 'reveal-left' : 'reveal-right';
        el.classList.add('reveal', dir);
        el.style.setProperty('--reveal-delay', `${idx * 90}ms`);
      });
      const obs = new IntersectionObserver((entries)=>{
        entries.forEach((e)=>{ if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      items.forEach((el)=>obs.observe(el));
    },0);
  }
  return (
    <div className="work-process-container">
      <h1>My Work Process</h1>
      <p>A proven methodology that ensures quality results and client satisfaction</p>
      <div className="work-steps">
        {workSteps.map(step => (
          <div className="work-step" key={step.id}>
            <div className="icon">{step.icon}</div>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
            <span className="step-number">{`0${step.id}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
