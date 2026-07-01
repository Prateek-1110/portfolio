import './Skills.css';

const categories = [
  {
    label: 'Languages',
    skills: ['C++', 'Python', 'SQL', 'JavaScript'],
  },
  {
    label: 'Machine Learning / AI',
    skills: ['PyTorch', 'scikit-learn', 'Transformers', 'NLP', 'RAG', 'Computer Vision'],
  },
  {
    label: 'Data Engineering',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Qdrant', 'Docker', 'Kubernetes'],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', 'Django', 'Node.js'],
  },
  {
    label: 'Frontend (Supporting)',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <div className="section-label">04 — Skills</div>
        <h2 className="section-title">Tech I work with</h2>
      </div>

      <div className="skills__grid">
        {categories.map((cat, i) => (
          <div className="skill-cat" key={i}>
            <div className="skill-cat__label">{cat.label}</div>
            <div className="skill-cat__list">
              {cat.skills.map((s, j) => (
                <span className="skill-chip" key={j}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
