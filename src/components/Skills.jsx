import React from 'react'

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript"]
  },
  {
    title: "Machine Learning & Agentic AI",
    skills: ["PyTorch", "scikit-learn", "Transformers", "LangChain / LangGraph", "MCP (Model Context Protocol)", "NLP"]
  },
  {
    title: "Data Engineering",
    skills: ["PostgreSQL", "Qdrant", "Redis", "MongoDB", "Docker", "Kubernetes"]
  },
  {
    title: "Software Engineering",
    skills: ["FastAPI", "Django", "Node.js","DBMS","Computer Networks"]
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills & Competencies</h2>
      
      <div className="skills-container">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div className="skills-card" key={idx}>
            <h3 className="skills-card-title">{category.title}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, sIdx) => (
                <span className="skills-tag" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
