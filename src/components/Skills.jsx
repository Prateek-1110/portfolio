import React from 'react'

const LANGUAGES = [
  {
    name: "Python",
    percentage: 95,
    example: "FastAPI endpoints, PyTorch models, ETL pipelines",
    useCase: "95% — Core language for models, agents, pipelines"
  },
  {
    name: "SQL",
    percentage: 90,
    example: "Recursive CTEs, geo-spatial queries, DB indexing",
    useCase: "90% — PostgreSQL schema designs, AST relational mappings"
  },
  {
    name: "C++",
    percentage: 90,
    example: "Algorithms, competitive coding, performance logic",
    useCase: "90% — Systems optimization, complex data structures"
  },
  {
    name: "JavaScript",
    percentage: 80,
    example: "ES6+, React state, client modules, tickers",
    useCase: "80% — Modern frontend components, user dashboards"
  },
  {
    name: "TypeScript",
    percentage: 75,
    example: "Type-safe APIs, Next.js structures, interface models",
    useCase: "75% — Robust type contracts, modular server layouts"
  }
]

const DOMAINS = [
  {
    title: "Machine Learning & Agentic AI",
    skills: [
      "<strong>RAG Architecture (95%):</strong> Dense-sparse hybrid vector indexing, RRF ranking, AST parsing, cross-encoder rerankers",
      "<strong>LangChain & LangGraph (92%):</strong> Cyclical agent graph states, conditional node routing, multi-agent hierarchies",
      "<strong>PyTorch & CV (85%):</strong> Deep model training, semantic segmentation (DeepLabV3), tensor workflows, sensor data fusion",
      "<strong>Transformers (80%):</strong> LLM fine-tuning, Custom tokenization, PEFT/LoRA modules, HuggingFace pipeline deployment"
    ]
  },
  {
    title: "Data Engineering & Systems",
    skills: [
      "<strong>Vector Databases (88%):</strong> Qdrant Vector DB (HNSW configs, payload filter indices, cluster layouts, embedding storage)",
      "<strong>Databases:</strong> PostgreSQL (relational schemas, indices), MongoDB, Redis (caching / message brokers)",
      "<strong>DevOps & Containers:</strong> Docker virtualization, Kubernetes clusters, stateful deployments"
    ]
  },
  {
    title: "Software & Web Engineering",
    skills: [
      "<strong>Backend Frameworks:</strong> FastAPI, Django (REST), Node.js server architectures",
      "<strong>Frontend Libraries:</strong> React, Next.js, HTML5, CSS3, Tailwind CSS integration",
      "<strong>System Design:</strong> RESTful microservices, state machines, automated evaluations"
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills & Competencies</h2>
      
      <div className="skills-container">
        {/* Programming Languages column */}
        <div className="skills-languages">
          <h3>Programming Languages</h3>
          <div className="language-list">
            {LANGUAGES.map((lang, idx) => (
              <div className="language-item" key={idx}>
                <div className="language-info">
                  <span>{lang.name}</span>
                  <span style={{ color: 'var(--accent)' }}>{lang.percentage}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${lang.percentage}%` }}></div>
                </div>
                <div className="language-example">
                  {lang.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Competencies column */}
        <div className="skills-domains">
          <h3>Domain Competencies</h3>
          <div className="domain-grid">
            {DOMAINS.map((domain, idx) => (
              <div className="domain-card" key={idx}>
                <h4>{domain.title}</h4>
                <ul className="domain-skills">
                  {domain.skills.map((skill, sIdx) => (
                    <li key={sIdx} dangerouslySetInnerHTML={{ __html: skill }}></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
