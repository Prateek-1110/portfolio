import React, { useState, useEffect } from 'react';
import './Work.css';

const GitHubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.22 9.2 7.69 10.7.56.1.76-.24.76-.53v-1.85c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.66 2.56 2.04 2.56 2.04 1-.69 1.54-1.48 1.54-1.48-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.52.23 2.64.11 2.92.72.79 1.16 1.79 1.16 3.02 0 4.31-2.64 5.26-5.15 5.54.4.35.76 1.04.76 2.1v3.11c0 .29.2.64.77.53 4.46-1.5 7.68-5.72 7.68-10.7C23.25 5.48 18.27.5 12 .5z" />
  </svg>
);

const ExternalIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const allProjects = [
  {
    num: '01',
    title: 'Codebase Intelligence Engine (Advanced RAG)',
    desc: 'Engineered a production-grade codebase RAG system using AST parsing, call-graph database stores, and multi-stage hybrid retrieval pipelines with rerankers.',
    details: 'A production-ready engine designed to ingest entire codebases, generate abstract syntax trees (ASTs), and map out complex dependency call graphs. It optimizes developer query answering using hybrid vector-lexical search (Qdrant & BM25), dense-sparse embeddings, and cross-encoder rerankers, reducing retrieval hallucinations by 45%.',
    tags: ['Python', 'FastAPI', 'Qdrant', 'PostgreSQL', 'RAG', 'NLP'],
    year: '2026',
    live: 'https://github.com/Prateek-1110/Rag_Codebase',
    github: 'https://github.com/Prateek-1110/Rag_Codebase',
    metric: '3M+ Vectors',
    category: 'ML/AI',
    featured: true,
    nodes: ['Codebase', 'AST Chunking', 'Qdrant Store', 'RRF Ranker', 'Llama 3']
  },
  {
    num: '02',
    title: 'Traffic Accident Hotspot Analyzer',
    desc: 'Ingested and processed 3M+ geospatial records with an ETL pipeline to detect accident hotspots via density clustering and predict risk levels.',
    details: 'An automated geospatial data pipeline parsing over 3 million historical accident reports. Implements DBSCAN density clustering to identify collision hotspots, coupled with Django-based map visualization and Scikit-Learn risk level prediction engines to aid urban traffic safety planners.',
    tags: ['Python', 'Django', 'PostgreSQL', 'ETL', 'DBSCAN', 'Scikit-Learn'],
    year: '2026',
    live: 'https://traffic-analyser.streamlit.app/',
    github: 'https://github.com/Prateek-1110/traffic_analyser',
    metric: '3M+ Rows',
    category: 'Data Engineering',
    nodes: ['CSV Ingestion', 'ETL Pandas', 'Postgres', 'DBSCAN', 'Django Map']
  },
  {
    num: '03',
    title: 'AI-Powered Autonomous News Agent',
    desc: 'Designed a scalable NLP data ingestion pipeline deduplicating feed articles and auto-publishing extracted summaries under a 2-minute latency budget.',
    details: 'A stateful automated NLP system that monitors RSS feeds, scrapes web article contents, deduplicates them using cosine similarity matrix matching, and summarizes key insights. Low latency streaming publishes articles dynamically to the site within 120 seconds of sourcing.',
    tags: ['Python', 'Django', 'Data Pipeline', 'NLP', 'LLMs', 'Vector Match'],
    year: '2026',
    live: 'https://prateektech.vercel.app/',
    github: 'https://github.com/Prateek-1110/News_Automation/',
    metric: '5k+ arts/day',
    category: 'NLP',
    nodes: ['RSS Feed', 'Scraping', 'Cosine Sim', 'LLM Summary', 'Publish']
  },
  {
    num: '04',
    title: 'Oil Spill Detection System',
    desc: 'Developed an AI maritime monitoring system combining AIS anomaly trackers, DeepLabV3 segmentation, and SAR-AIS satellite data fusion model layers.',
    details: 'An AI-powered maritime safety dashboard utilizing PyTorch and DeepLabV3 segmentation. Fuses SAR satellite radar imagery with real-time AIS telemetry streams, achieving a 92% pixel-level accuracy in delineating oil spills and generating immediate alerts for maritime responders.',
    tags: ['DeepLabV3', 'PyTorch', 'SAR Imaging', 'Computer Vision'],
    year: '2024',
    live: 'https://github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/',
    github: 'https://github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/',
    metric: '92% Acc',
    category: 'Computer Vision',
    featured: true,
    nodes: ['SAR + AIS', 'DeepLabV3', 'Flipped Conv', 'Data Fusion', 'Spill Alert']
  },
  {
    num: '05',
    title: 'Agentic ArXiv Research Assistant',
    desc: 'Developed a stateful multi-agent system utilizing LangGraph to search, retrieve, filter, and summarize ArXiv research papers with dynamic state routing.',
    details: 'A multi-agent autonomous system built on LangGraph. Uses dynamic state-based routing to filter, retrieve, and critique research papers from ArXiv. Orchestrates search queries, relevance verification loops, and critique agents to produce clean markdown literature reviews.',
    tags: ['LangGraph', 'LangChain', 'Python', 'ArXiv API', 'LLMs'],
    year: '2026',
    live: 'https://github.com/Prateek-1110/agentic_arxiv',
    github: 'https://github.com/Prateek-1110/agentic_arxiv',
    metric: 'Graph Routing',
    category: 'ML/AI',
    nodes: ['Search', 'Relevance Match', 'State Router', 'Summary Gen', 'Markdown Output']
  }
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Base projects showing in Bento Grid initially (all 5)
  const baseProjects = allProjects;

  const drawFlowchart = (nodes) => {
    return (
      <svg className="bento-arch-svg" viewBox="0 0 680 70">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="var(--text-faint)" />
          </marker>
        </defs>
        
        {nodes.map((node, idx) => {
          const x = 15 + idx * 135;
          const rectWidth = 100;
          const rectHeight = 32;
          
          return (
            <g key={idx}>
              {/* Node rectangle */}
              <rect
                x={x}
                y={15}
                width={rectWidth}
                height={rectHeight}
                rx={6}
                className={`bento-node ${idx === 0 ? 'node--source' : idx === nodes.length - 1 ? 'node--sink' : ''}`}
              />
              <text x={x + rectWidth / 2} y={35} textAnchor="middle" className="bento-node-text">
                {node}
              </text>
              
              {/* Connecting line */}
              {idx < nodes.length - 1 && (
                <path
                  d={`M ${x + rectWidth} 31 L ${x + 135} 31`}
                  className="bento-flow-edge"
                  markerEnd="url(#arrow)"
                />
              )}
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <section className="work" id="work">
      {/* Background Index Watermark */}
      <div className="section-watermark">04</div>

      <div className="work__header">
        <span className="section-label">04 — Projects</span>
        <h2 className="work__title">Featured Pipelines &amp; Codebases</h2>
      </div>

      {/* Bento Grid */}
      <div className="work__bento-grid">
        {baseProjects.map((p, idx) => {
          // Asymmetric mapping: 01 spans 2 cols, others span 1 col
          const isFeaturedLayout = p.num === '01';
          const cardClass = isFeaturedLayout 
            ? "bento-card bento-card--featured" 
            : "bento-card";

          return (
            <div 
              key={p.num} 
              className={cardClass} 
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(p)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveProject(p);
                }
              }}
            >
              <div className="bento-card__header">
                <span className="bento-card__num">{p.num}</span>
                <span className="bento-card__year">{p.year}</span>
              </div>

              <div className="bento-card__content">
                <h3 className="bento-card__title">{p.title}</h3>
                
                {/* SVG Architecture flowchart */}
                <div className="bento-card__arch">
                  {drawFlowchart(p.nodes)}
                </div>

                <p className="bento-card__desc">{p.desc}</p>

                <div className="bento-card__footer">
                  <div className="bento-card__tags">
                    {p.tags.map((t, i) => (
                      <span key={i} className="bento-card__tag-pill">{t}</span>
                    ))}
                  </div>

                  <div className="bento-card__links">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bento-icon-btn" 
                      aria-label="Github repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubIcon />
                    </a>
                    <a 
                      href={p.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bento-icon-btn" 
                      aria-label="Live Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Metric Callout Badge */}
              <div className="bento-card__metric">{p.metric}</div>
            </div>
          );
        })}
      </div>

      {/* External GitHub CTA */}
      <div className="work__browse-cta">
        <a 
          className="btn btn--ghost-animated"
          href="https://github.com/prateek-1110"
          target="_blank"
          rel="noreferrer"
        >
          Browse All Projects
        </a>
      </div>

      {/* Details Modal */}
      {activeProject && (
        <div className="project-modal" role="dialog" aria-modal="true">
          <div className="project-modal__backdrop" onClick={() => setActiveProject(null)} />
          <div className="project-modal__content">
            <button 
              className="project-modal__close" 
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="project-modal__header">
              <div className="project-modal__meta">
                <span className="project-modal__num">{activeProject.num}</span>
                <span className="project-modal__divider">•</span>
                <span className="project-modal__category">{activeProject.category}</span>
                <span className="project-modal__divider">•</span>
                <span className="project-modal__year">{activeProject.year}</span>
              </div>
              <h3 className="project-modal__title">{activeProject.title}</h3>
            </div>

            <div className="project-modal__body">
              {/* Metric Banner */}
              <div className="project-modal__metric-card">
                <span className="metric-card__label">Scale &amp; Output Focus</span>
                <span className="metric-card__value">{activeProject.metric}</span>
              </div>

              {/* Description */}
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">Overview &amp; Implementation</h4>
                <p className="project-modal__desc">{activeProject.details}</p>
              </div>

              {/* Flowchart architecture (hidden on mobile via CSS) */}
              <div className="project-modal__section project-modal__flowchart-section">
                <h4 className="project-modal__section-title">System Pipeline &amp; Data Flow</h4>
                <div className="project-modal__flowchart">
                  {drawFlowchart(activeProject.nodes)}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="project-modal__section">
                <h4 className="project-modal__section-title">Tech Stack</h4>
                <div className="project-modal__tags">
                  {activeProject.tags.map((t, i) => (
                    <span key={i} className="bento-card__tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-modal__footer">
              <a 
                href={activeProject.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn--filled-gradient project-modal__btn"
              >
                <GitHubIcon /> GitHub Codebase
              </a>
              <a 
                href={activeProject.live} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn--ghost-animated project-modal__btn"
              >
                <ExternalIcon /> Live Demonstration
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}