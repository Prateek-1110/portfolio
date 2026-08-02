import React, { useState } from 'react'
import { Github, ExternalLink, ChevronDown, ChevronUp } from './Icons'

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
  const [expandedIndex, setExpandedIndex] = useState(null)

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === "All") return true
    // Direct match or partial category check
    return p.category.toLowerCase().includes(filter.toLowerCase().replace(' ', '')) || 
           filter.toLowerCase().includes(p.category.toLowerCase())
  })

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
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
              setExpandedIndex(null)
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj, idx) => {
          const isExpanded = expandedIndex === idx
          return (
            <div className="project-card" key={idx}>
              <div className="project-header">
                <span className="project-category">{proj.category}</span>
                <span className="project-status">{proj.status}</span>
              </div>

              <div>
                <h3 className="project-title">{proj.title}</h3>
                <div className="project-metric-pill" style={{ marginTop: '0.5rem' }}>
                  Metric: <strong>{proj.keyMetric}</strong>
                </div>
              </div>

              {/* Styled CSS horizontal pipeline flow */}
              <div className="pipeline-box">
                <div className="pipeline-flow">
                  {proj.pipeline.map((node, nodeIdx) => (
                    <React.Fragment key={nodeIdx}>
                      <span className="pipeline-node">{node}</span>
                      {nodeIdx < proj.pipeline.length - 1 && (
                        <span className="pipeline-arrow">➔</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="project-tags">
                {proj.technologies.map((tech, techIdx) => (
                  <span className="tag" key={techIdx}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} /> GitHub
                  </a>
                )}
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={16} /> Live App
                  </a>
                )}
              </div>

              <button className="case-study-trigger" onClick={() => toggleExpand(idx)}>
                {isExpanded ? (
                  <>Hide Case Study <ChevronUp size={16} /></>
                ) : (
                  <>View Case Study Details <ChevronDown size={16} /></>
                )}
              </button>

              {isExpanded && (
                <div className="case-study-content">
                  <div className="case-study-section">
                    <h4>The Problem</h4>
                    <p>{proj.caseStudy.problem}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>My Contribution</h4>
                    <p>{proj.caseStudy.contribution}</p>
                  </div>
                  <div className="case-study-section">
                    <h4>Measurable Outcome</h4>
                    <p>{proj.caseStudy.outcome}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
