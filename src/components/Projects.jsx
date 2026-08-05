import React, { useState, useEffect } from 'react'
import { Github, ExternalLink } from './Icons'

const PROJECTS = [
  {
    title: "Codebase Intelligence Engine",
    status: "Featured (2026)",
    category: "ML/AI",
    keyMetric: "92% File Hit Rate@3",
    pipeline: ["AST Chunking", "Qdrant/BM25 Hybrid", "RRF / Cross-Encoder", "PostgreSQL Call Graph", "Groq Llama-3.3"],
    technologies: ["Python", "FastAPI", "React", "Qdrant", "PostgreSQL", "Groq API / Ollama", "Sentence-Transformers"],
    github: "https://github.com/Prateek-1110/Rag_Codebase",
    live: "",
    caseStudy: {
      problem: "Traditional RAG systems fail on nested codebases because they treat code as plain text, resulting in a complete loss of structural hierarchy, function dependencies, and caller/callee metadata.",
      contribution: "Designed a multi-stage retrieval pipeline combining semantic search (Qdrant) and lexical keyword search (BM25) via Reciprocal Rank Fusion (RRF) and Cross-Encoder reranking (ms-marco-MiniLM). Implemented an LLM intent classifier to route query types, bypassing vector search for deterministic dependency queries by traversing a PostgreSQL call graph.",
      outcome: "Achieved a 92% File Hit Rate@3, deployed Groq with an automatic local Ollama fallback for rate-limit protection, and validated RAG metrics (Faithfulness: 0.91, Relevancy: 0.88) with under 1.2s p95 latency."
    }
  },
  {
    title: "Traffic Accident Hotspot Analyzer",
    status: "Active (2026)",
    category: "Data Engineering",
    keyMetric: "3M+ Records Ingested",
    pipeline: ["US Accidents Dataset", "Pandas ETL", "DBSCAN Clustering", "Random Forest Classifier", "Django Dashboard"],
    technologies: ["Python", "Django", "Pandas", "Scikit-Learn", "Folium / Leaflet.js", "Chart.js"],
    github: "https://github.com/Prateek-1110/traffic_analyser",
    live: "https://traffic-analyser.streamlit.app/",
    caseStudy: {
      problem: "Urban planners lacked interactive, granular tools to identify road accident clusters and predict real-time hazard severity based on temporal and environmental conditions.",
      contribution: "Built an end-to-end data pipeline: cleaned 3M+ accident records in Pandas, engineered time-cyclical features, identified hotspots using DBSCAN clustering with haversine distance, trained a Random Forest classifier, and developed a Django app with Leaflet.js maps and Chart.js dashboards.",
      outcome: "Successfully mapped collision hotspots with risk ratings and enabled live accident risk predictions on a responsive dashboard."
    }
  },
  {
    title: "Autonomous News Aggregator & Summarization Agent",
    status: "Active (2026)",
    category: "NLP / Pipelines",
    keyMetric: "40% Duplicates Filtered",
    pipeline: ["SerpAPI Crawl", "BeautifulSoup Parser", "BERT Deduplication", "Groq Llama-3.3", "React Progressive Stream"],
    technologies: ["Python", "Flask", "React", "Groq API (Llama 3.3)", "BERT / BART", "SerpAPI / BeautifulSoup"],
    github: "https://github.com/Prateek-1110/News_Automation",
    live: "https://prateektech.vercel.app/",
    caseStudy: {
      problem: "Real-time news monitoring pipelines faced high server startup latency due to local deep learning models, high duplicate content ratios, and page render lags.",
      contribution: "Built an autonomous news agent crawling local news across 22 metro regions. Implemented a BERT-based embedding model with cosine similarity thresholds to filter duplicate content by 40%. Ported summary generation to cloud-based Groq APIs (Llama-3.3), reducing startup latency from minutes to <0.1s, and designed a Flask multi-threaded publisher to stream summaries progressively.",
      outcome: "Achieved instantaneous server boot-up (<0.1s), cut duplicate content by 40%, and enabled real-time progressive news card rendering with authentic metadata-extracted images under 1 second of latency."
    }
  },
  {
    title: "AI-Powered Oil Spill Detection System",
    status: "Featured (2024)",
    category: "Computer Vision",
    keyMetric: "92% Detection Accuracy",
    pipeline: ["SAR Imagery", "DeepLabV3 Segmentor", "1M+ AIS Records", "AIS Anomaly Detection", "Telemetry Data Fusion"],
    technologies: ["DeepLabV3", "PyTorch", "Python", "AIS Vessel Tracking", "SAR Imagery", "scikit-learn"],
    github: "https://github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/",
    live: "",
    caseStudy: {
      problem: "Maritime pollution monitoring systems lacked integrated systems to cross-reference satellite radar oil spill boundaries with real-time vessel movement anomalies, hindering illegal discharge enforcement.",
      contribution: "Trained a DeepLabV3 semantic segmentation model in PyTorch on Synthetic Aperture Radar (SAR) imagery to automate spill detection. Built a vessel behavior analysis model on 1M+ AIS records to detect irregular movements (abrupt speed/route changes). Integrated both signals into a Python data fusion layer.",
      outcome: "Achieved a 92% detection accuracy and under 5-minute processing latency across 1,000+ km maritime regions, improving anomaly detection precision by 30% while cutting false alerts by 25%."
    }
  },
  {
    title: "Agentic ArXiv Research Assistant",
    status: "Active (2026)",
    category: "ML/AI",
    keyMetric: "Autonomous Intent Routing",
    pipeline: ["User Query", "Gemini Intent Router", "ArXiv Crawler & Parser", "ChromaDB Vector Store", "TinyBERT Reranking", "Cited Answer Gen"],
    technologies: ["Python", "FastAPI", "Gemini 1.5 Flash", "ChromaDB", "TinyBERT Reranker", "Sentence-Transformers"],
    github: "https://github.com/Prateek-1110/agentic_arxiv",
    live: "",
    caseStudy: {
      problem: "Traditional RAG research tools require manual paper retrieval, chunk mapping, and ingestion, creating high friction for multi-paper academic workflows.",
      contribution: "Built an agentic paper assistant from scratch (no LangChain or LangGraph) that routes queries dynamically using Gemini 1.5 Flash structured JSON. Programmed custom tools including an on-the-fly ArXiv PDF crawler/embedder, semantic search via ChromaDB (all-MiniLM-L6-v2), and reranking using ms-marco-TinyBERT.",
      outcome: "Successfully created an autonomous research system delivering cited, paper-grounded answers with high-precision TinyBERT reranking and low-latency API generation."
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
