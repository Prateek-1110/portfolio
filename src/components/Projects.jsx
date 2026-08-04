import React, { useState, useEffect } from 'react'
import { Github, ExternalLink } from './Icons'

const PROJECTS = [
  {
    title: "Codebase Intelligence Engine (Advanced RAG)",
    status: "Featured (2026)",
    category: "ML/AI",
    keyMetric: "3M+ Vectors Indexed",
    pipeline: ["Codebase", "AST Chunking", "Qdrant Store", "RRF Ranker", "Llama 3"],
    technologies: ["Python", "FastAPI", "Qdrant Vector DB", "PostgreSQL", "RAG", "NLP"],
    github: "https://github.com/Prateek-1110/Rag_Codebase",
    live: "",
    caseStudy: {
      problem: "Querying large, nested codebases using standard LLMs suffers from structural context loss (e.g. tracing deep function call paths) and high rates of factual hallucination.",
      contribution: "Engineered a custom Abstract Syntax Tree (AST) chunking parser to divide codebases by syntax scope. Implemented a hierarchical call-graph index in PostgreSQL, integrated dense-sparse hybrid vector search (BM25 & Qdrant), and utilized cross-encoder rerankers to rank results.",
      outcome: "Reduced retrieval hallucinations by 45% and improved context precision on complex architectural code lookups."
    }
  },
  {
    title: "Traffic Accident Hotspot Analyzer",
    status: "Active (2026)",
    category: "Data Engineering",
    keyMetric: "3M+ Rows Ingested",
    pipeline: ["CSV Ingestion", "ETL Pandas", "Postgres", "DBSCAN", "Django Map"],
    technologies: ["Python", "Django", "PostgreSQL", "ETL", "DBSCAN Clustering", "Scikit-Learn"],
    github: "https://github.com/Prateek-1110/traffic_analyser",
    live: "https://traffic-analyser.streamlit.app/",
    caseStudy: {
      problem: "Urban planners lacked granular tools to digest geospatial collision reports and predict risk levels, leaving safety upgrades to guesswork.",
      contribution: "Ingested and cleaned over 3 million historical records using a custom Pandas/PostgreSQL ETL pipeline. Programmed DBSCAN density clustering to identify collision hotspots and trained a Random Forest model to predict risk severity based on weather and road attributes.",
      outcome: "Identified 120+ active safety hotspots and achieved an 85% accuracy score in predicting danger severity."
    }
  },
  {
    title: "AI-Powered Autonomous News Agent",
    status: "Active (2026)",
    category: "NLP / Pipelines",
    keyMetric: "5k+ articles / day",
    pipeline: ["RSS Feed", "Scraping", "Cosine Sim Deduplication", "LLM Summary", "Publish"],
    technologies: ["Python", "Django", "Data Pipeline", "NLP", "LLMs", "Vector Matching"],
    github: "https://github.com/Prateek-1110/News_Automation/",
    live: "https://prateektech.vercel.app/",
    caseStudy: {
      problem: "Real-time RSS feeds monitoring pipelines face high API cost overhead from processing duplicate posts and high feed-to-publish rendering latency.",
      contribution: "Designed a parallelized stateful news pipeline digesting 5k+ articles daily. Engineered a text deduplication filter using cosine similarity matrix matching, and integrated a parallelized LLM summary generation pipeline.",
      outcome: "Deduplicated feed articles by 60%, significantly lowering LLM API costs, and cut publication latency to under 120 seconds."
    }
  },
  {
    title: "Oil Spill Detection System",
    status: "Featured (2024)",
    category: "Computer Vision",
    keyMetric: "92% Pixel Accuracy",
    pipeline: ["SAR Imagery + AIS", "DeepLabV3 Segmentor", "Flipped Conv", "Data Fusion Layer", "Spill Alert"],
    technologies: ["DeepLabV3", "PyTorch", "SAR Imaging", "Computer Vision"],
    github: "https://github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/",
    live: "",
    caseStudy: {
      problem: "Satellite radar oil spill detection maps lack real-time vessel telemetry, making maritime pollution enforcement nearly impossible.",
      contribution: "Trained a DeepLabV3 semantic segmentation model in PyTorch on Synthetic Aperture Radar (SAR) imagery. Built a data fusion layer in Python to overlay real-time Automatic Identification System (AIS) telemetry streams onto spill boundaries.",
      outcome: "Delineated spills with 92% pixel-level segmentation accuracy and mapped coordinates to nearby ship transponders."
    }
  },
  {
    title: "Agentic ArXiv Research Assistant",
    status: "Active (2026)",
    category: "ML/AI",
    keyMetric: "Stateful Graph Routing",
    pipeline: ["Search Query", "Relevance Match", "State Router", "Summary Gen", "Markdown Output"],
    technologies: ["LangGraph", "LangChain", "Python", "ArXiv API", "LLMs"],
    github: "https://github.com/Prateek-1110/agentic_arxiv",
    live: "",
    caseStudy: {
      problem: "Researchers lose hours querying repositories and hand-filtering paper relevance, resulting in slow literature review workflows.",
      contribution: "Created a stateful cyclical agent graph using LangGraph. Structured logical nodes to run search queries, filter results for keyword/embedding relevance, dynamically route back for deeper search if relevancy is low, and invoke a critique agent.",
      outcome: "Automated the end-to-end literature review process, cutting manual research time by 3x."
    }
  }
]

const CATEGORIES = ["All", "ML/AI", "Data Engineering", "NLP / Pipelines", "Computer Vision"]

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null)
      }
    }
    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeProject])

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === "All") return true
    return p.category.toLowerCase().includes(filter.toLowerCase().replace(' ', '')) || 
           filter.toLowerCase().includes(p.category.toLowerCase())
  })

  const handleCardClick = (e, proj) => {
    if (e.target.closest('a') || e.target.closest('button')) {
      return
    }
    setActiveProject(proj)
  }

  return (
    <section id="projects">
      <h2 className="section-title">Projects & Case Studies</h2>
      
      <div className="projects-filter">
        {CATEGORIES.map((cat, idx) => (
          <button 
            key={idx} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => {
              setFilter(cat)
              setActiveProject(null)
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj, idx) => {
          const isCenterCircle = proj.title.includes("Codebase Intelligence Engine")
          const cardClass = `project-card ${isCenterCircle ? 'center-circle' : ''}`
          
          return (
            <div 
              className={cardClass} 
              key={idx}
              onClick={(e) => handleCardClick(e, proj)}
            >
              <div className="project-card-main">
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-metric-pill" style={{ marginTop: '0.5rem' }}>
                  <strong>{proj.keyMetric}</strong>
                </div>
                <p className="project-description-preview">{proj.caseStudy.problem}</p>
              </div>

              <div className="project-card-footer">
                <span className="card-more-detail">More Detail ➔</span>
                {proj.github && (
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-github-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {activeProject && (
        <div className="project-modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close modal">
              &times;
            </button>
            
            <div className="modal-header">
              <span className="project-status">{activeProject.status}</span>
            </div>

            <h3 className="modal-title">{activeProject.title}</h3>
            
            <div className="project-metric-pill" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              <strong>{activeProject.keyMetric}</strong>
            </div>

            <div className="modal-section-title">System Pipeline</div>
            <div className="pipeline-flow-free">
              {activeProject.pipeline.map((node, nodeIdx) => (
                <React.Fragment key={nodeIdx}>
                  <span className="pipeline-node">{node}</span>
                  {nodeIdx < activeProject.pipeline.length - 1 && (
                    <span className="pipeline-arrow">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="modal-section-title" style={{ marginTop: '1.5rem' }}>Technologies</div>
            <div className="project-tags">
              {activeProject.technologies.map((tech, techIdx) => (
                <span className="tag" key={techIdx}>{tech}</span>
              ))}
            </div>

            <div className="modal-case-study">
              <div className="case-study-section">
                <h4>The Problem</h4>
                <p>{activeProject.caseStudy.problem}</p>
              </div>
              <div className="case-study-section">
                <h4>My Contribution</h4>
                <p>{activeProject.caseStudy.contribution}</p>
              </div>
              <div className="case-study-section">
                <h4>Measurable Outcome</h4>
                <p>{activeProject.caseStudy.outcome}</p>
              </div>
            </div>

            <div className="modal-links" style={{ marginTop: '2rem' }}>
              {activeProject.github && (
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Github size={18} /> View GitHub Code
                </a>
              )}
              {activeProject.live && (
                <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  <ExternalLink size={18} /> Launch Live App
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
