import './Skills.css';

const categories = [
   {
    label: 'Languages',
    skills: ['C++', 'Python','Javascript'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'Django'],
  },
  {
    label: 'Data & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Redis'],
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
