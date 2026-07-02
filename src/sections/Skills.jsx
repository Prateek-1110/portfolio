import React from 'react';
import './Skills.css';

const categories = [
  {
    label: 'Languages',
    skills: ['C++', 'Python', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Machine Learning & Agentic AI',
    skills: ['PyTorch', 'scikit-learn', 'Transformers', 'LangChain / LangGraph', 'MCP', 'NLP'],
  },
  {
    label: 'Data Engineering',
    skills: ['PostgreSQL', 'Qdrant', 'Redis', 'MongoDB', 'Docker', 'Kubernetes'],
  },
  {
    label: 'Software Engineering',
    skills: ['FastAPI', 'Django', 'Node.js', 'React', 'Next.js', 'Tailwind CSS'],
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
            <div className="skill-cat__label">{cat.label}</div>
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
