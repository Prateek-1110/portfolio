import React from 'react';
import './Skills.css';

const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="skill-cat__icon">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const BrainIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="skill-cat__icon">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="skill-cat__icon">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const CpuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="skill-cat__icon">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const categories = [
  {
    label: 'Languages',
    skills: ['C++', 'Python', 'SQL', 'JavaScript', 'TypeScript'],
    icon: <CodeIcon />,
  },
  {
    label: 'Machine Learning & Agentic AI',
    skills: ['PyTorch', 'scikit-learn', 'Transformers', 'LangChain / LangGraph', 'MCP', 'NLP'],
    icon: <BrainIcon />,
  },
  {
    label: 'Data Engineering',
    skills: ['PostgreSQL', 'Qdrant', 'Redis', 'MongoDB', 'Docker', 'Kubernetes'],
    icon: <DatabaseIcon />,
  },
  {
    label: 'Software Engineering',
    skills: ['FastAPI', 'Django', 'Node.js', 'React', 'Next.js', 'Tailwind CSS'],
    icon: <CpuIcon />,
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Background Watermark */}
      <div className="section-watermark">05</div>

      <div className="skills__header">
        <div className="section-label">05 — Skills</div>
        <h2 className="skills__title">Tech Stack &amp; Competencies</h2>
      </div>

      <div className="skills__grid">
        {categories.map((cat, i) => (
          <div className="skill-cat" key={i}>
            <div className="skill-cat__header">
              {cat.icon}
              <div className="skill-cat__label">{cat.label}</div>
            </div>
            <div className="skill-cat__list">
              {cat.skills.map((s, j) => (
                <span className="skill-chip" key={j}>
                  <span className="skill-chip__dot" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
