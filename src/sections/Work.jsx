import React, { useState } from 'react';
import './Work.css';

const GitHubIcon = ({ size = 14 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.22 9.2 7.69 10.7.56.1.76-.24.76-.53v-1.85c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.66 2.56 2.04 2.56 2.04 1-.69 1.54-1.48 1.54-1.48-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.52.23 2.64.11 2.92.72.79 1.16 1.79 1.16 3.02 0 4.31-2.64 5.26-5.15 5.54.4.35.76 1.04.76 2.1v3.11c0 .29.2.64.77.53 4.46-1.5 7.68-5.72 7.68-10.7C23.25 5.48 18.27.5 12 .5z" />
  </svg>
);

const ExternalIcon = ({ size = 12 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={14}
    height={14}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const projects = [
  {
    num: '01',
    title: 'Codebase Intelligence Engine (Advanced RAG System)',
    desc: 'Engineered a production-grade Retrieval-Augmented Generation (RAG) system utilizing AST-based chunking, a custom call-graph PostgreSQL store, and a multi-stage hybrid retrieval pipeline (BM25 + Semantic Search + Cross-Encoder reranking) with Qdrant vector database for deterministic codebase intelligence.',
    tags: ['Python', 'FastAPI', 'Qdrant', 'PostgreSQL', 'RAG', 'NLP'],
    year: '2026',
    live: 'https://github.com/Prateek-1110/Rag_Codebase',
    github: 'https://github.com/Prateek-1110/Rag_Codebase',
  },
  {
    num: '02',
    title: 'Traffic Accident Hotspot Analyzer',
    desc: 'Ingested and processed 3M+ geospatial records using an ETL pipeline to detect hotspots via DBSCAN clustering. Engineered a Django dashboard with Leaflet maps and built a Random Forest classifier for real-time risk prediction.',
    tags: ['Python', 'Django', 'PostgreSQL', 'ETL', 'DBSCAN', 'Random Forest'],
    year: '2026',
    live: 'https://traffic-analyser.streamlit.app/',
    github: 'https://github.com/Prateek-1110/traffic_analyser',
  },
  {
    num: '03',
    title: 'AI-Powered Autonomous News Agent',
    desc: 'Designed a scalable data ingestion and NLP pipeline processing 5000+ articles/day. Engineered deduplication, LLM-based summary extraction, classification, and automated media publishing under a 2-minute latency.',
    tags: ['Python', 'Django', 'Data Pipeline', 'NLP', 'LLMs'],
    year: '2026',
    live: 'https://prateektech.vercel.app/',
    github: 'https://github.com/Prateek-1110/News_Automation/',
  },
  {
    num: '04',
    title: 'Oil Spill Detection System using AIS Fusion',
    desc: 'Developed an AI maritime monitoring system combining AIS anomaly detection, DeepLabV3 semantic segmentation, and SAR-AIS data fusion to segment oil spills with 92% accuracy across 1000+ km regions.',
    tags: ['DeepLabV3', 'PyTorch', 'SAR Imaging', 'Computer Vision'],
    year: '2024',
    live: 'https://prateektech.vercel.app/',
    github: 'https://github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/',
  },
];

const renderArchitectureSVG = (index) => {
  const arrowDef = (
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="var(--text-faint)" />
      </marker>
    </defs>
  );

  if (index === 0) {
    return (
      <svg viewBox="0 0 440 90" className="project-arch-svg">
        {arrowDef}
        <rect x="5" y="25" width="60" height="35" rx="6" className="arch-node arch-node--source" />
        <text x="35" y="47" textAnchor="middle" className="arch-text">Codebase</text>
        <path d="M 65,42.5 L 85,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="85" y="25" width="65" height="35" rx="6" className="arch-node" />
        <text x="117.5" y="42" textAnchor="middle" className="arch-text">Tree-sitter</text>
        <text x="117.5" y="52" textAnchor="middle" className="arch-subtext">AST Parser</text>
        <path d="M 150,42.5 L 170,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="170" y="25" width="70" height="35" rx="6" className="arch-node arch-node--db" />
        <text x="205" y="42" textAnchor="middle" className="arch-text">Qdrant / PG</text>
        <text x="205" y="52" textAnchor="middle" className="arch-subtext">Vector+Graph</text>
        <path d="M 240,42.5 L 260,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="260" y="25" width="65" height="35" rx="6" className="arch-node" />
        <text x="292.5" y="42" textAnchor="middle" className="arch-text">BM25+Dense</text>
        <text x="292.5" y="52" textAnchor="middle" className="arch-subtext">RRF Hybrid</text>
        <path d="M 325,42.5 L 345,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="345" y="25" width="55" height="35" rx="6" className="arch-node" />
        <text x="372.5" y="42" textAnchor="middle" className="arch-text">Cross-Encoder</text>
        <text x="372.5" y="52" textAnchor="middle" className="arch-subtext">Re-ranking</text>
        <path d="M 400,42.5 L 412,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="412" y="25" width="23" height="35" rx="4" className="arch-node arch-node--llm" />
        <text x="423.5" y="46" textAnchor="middle" className="arch-text">LLM</text>
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 440 90" className="project-arch-svg">
        {arrowDef}
        <rect x="5" y="25" width="60" height="35" rx="6" className="arch-node arch-node--source" />
        <text x="35" y="42" textAnchor="middle" className="arch-text">3M+ US</text>
        <text x="35" y="52" textAnchor="middle" className="arch-subtext">Accident CSV</text>
        <path d="M 65,42.5 L 90,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="90" y="25" width="70" height="35" rx="6" className="arch-node" />
        <text x="125" y="42" textAnchor="middle" className="arch-text">ETL Clean</text>
        <text x="125" y="52" textAnchor="middle" className="arch-subtext">Processing</text>
        <path d="M 160,42.5 L 185,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="185" y="25" width="75" height="35" rx="6" className="arch-node arch-node--db" />
        <text x="222.5" y="42" textAnchor="middle" className="arch-text">DBSCAN</text>
        <text x="222.5" y="52" textAnchor="middle" className="arch-subtext">Geospatial Cluster</text>
        <path d="M 260,42.5 L 285,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="285" y="25" width="70" height="35" rx="6" className="arch-node" />
        <text x="320" y="42" textAnchor="middle" className="arch-text">Random Forest</text>
        <text x="320" y="52" textAnchor="middle" className="arch-subtext">Risk Prediction</text>
        <path d="M 355,42.5 L 380,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="380" y="25" width="55" height="35" rx="6" className="arch-node arch-node--llm" />
        <text x="407.5" y="42" textAnchor="middle" className="arch-text">Django</text>
        <text x="407.5" y="52" textAnchor="middle" className="arch-subtext">Leaflet Map</text>
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 440 90" className="project-arch-svg">
        {arrowDef}
        <rect x="5" y="25" width="60" height="35" rx="6" className="arch-node arch-node--source" />
        <text x="35" y="42" textAnchor="middle" className="arch-text">20+ RSS</text>
        <text x="35" y="52" textAnchor="middle" className="arch-subtext">News Feeds</text>
        <path d="M 65,42.5 L 90,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="90" y="25" width="70" height="35" rx="6" className="arch-node" />
        <text x="125" y="42" textAnchor="middle" className="arch-text">Python Ingest</text>
        <text x="125" y="52" textAnchor="middle" className="arch-subtext">Request Streams</text>
        <path d="M 160,42.5 L 185,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="185" y="25" width="75" height="35" rx="6" className="arch-node arch-node--db" />
        <text x="222.5" y="42" textAnchor="middle" className="arch-text">Cosine Similarity</text>
        <text x="222.5" y="52" textAnchor="middle" className="arch-subtext">Deduplication</text>
        <path d="M 260,42.5 L 285,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="285" y="25" width="70" height="35" rx="6" className="arch-node" />
        <text x="320" y="42" textAnchor="middle" className="arch-text">LLM Engine</text>
        <text x="320" y="52" textAnchor="middle" className="arch-subtext">Summary/Tags</text>
        <path d="M 355,42.5 L 380,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="380" y="25" width="55" height="35" rx="6" className="arch-node arch-node--llm" />
        <text x="407.5" y="42" textAnchor="middle" className="arch-text">Automated</text>
        <text x="407.5" y="52" textAnchor="middle" className="arch-subtext">Publishing</text>
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg viewBox="0 0 440 90" className="project-arch-svg">
        {arrowDef}
        <rect x="5" y="25" width="60" height="35" rx="6" className="arch-node arch-node--source" />
        <text x="35" y="42" textAnchor="middle" className="arch-text">Satellite SAR</text>
        <text x="35" y="52" textAnchor="middle" className="arch-subtext">+ AIS Data</text>
        <path d="M 65,42.5 L 90,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="90" y="25" width="70" height="35" rx="6" className="arch-node" />
        <text x="125" y="42" textAnchor="middle" className="arch-text">SAR Filter</text>
        <text x="125" y="52" textAnchor="middle" className="arch-subtext">Preprocessing</text>
        <path d="M 160,42.5 L 185,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="185" y="25" width="75" height="35" rx="6" className="arch-node arch-node--db" />
        <text x="222.5" y="42" textAnchor="middle" className="arch-text">DeepLabV3</text>
        <text x="222.5" y="52" textAnchor="middle" className="arch-subtext">Segmentation</text>
        <path d="M 260,42.5 L 285,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="285" y="25" width="70" height="35" rx="6" className="arch-node" />
        <text x="320" y="42" textAnchor="middle" className="arch-text">SAR-AIS</text>
        <text x="320" y="52" textAnchor="middle" className="arch-subtext">Fusion</text>
        <path d="M 355,42.5 L 380,42.5" stroke="var(--text-faint)" strokeWidth="1" strokeDasharray="3,3" markerEnd="url(#arrow)" />
        
        <rect x="380" y="25" width="55" height="35" rx="6" className="arch-node arch-node--llm" />
        <text x="407.5" y="42" textAnchor="middle" className="arch-text">Anomaly</text>
        <text x="407.5" y="52" textAnchor="middle" className="arch-subtext">Alert Output</text>
      </svg>
    );
  }
  return null;
};

export default function Work() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="work" id="work">
      <div className="work__header">
        <div className="section-label">03 — Work</div>
        <h2 className="section-title">Selected projects</h2>
        <p className="work__subtitle">
          A curated set of things I've built, ranging from creative experiments to production systems. Click a project to explore its architecture.
        </p>
      </div>

      <div className="work__list">
        {projects.map((p, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div
              className={`project-row ${isExpanded ? 'project-row--expanded' : ''}`}
              key={i}
              onClick={() => toggleExpand(i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="project-row__summary">
                <div className="project-row__num">{p.num}</div>
                <div className="project-row__title-wrap">
                  <h3 className="project-row__title">{p.title}</h3>
                  <span className="project-row__year">{p.year}</span>
                </div>
                <div className={`project-row__arrow ${isExpanded ? 'project-row__arrow--expanded' : ''}`}>
                  ↓
                </div>
              </div>

              <div className={`project-row__drawer ${isExpanded ? 'project-row__drawer--active' : ''}`}>
                {isExpanded && (
                  <div className="project-row__drawer-content" onClick={(e) => e.stopPropagation()}>
                    <p className="project-row__desc">{p.desc}</p>
                    
                    <div className="project-row__arch-section">
                      <h4 className="project-row__arch-title">Data Ingest &amp; Systems Architecture</h4>
                      <div className="project-row__arch-svg-container">
                        {renderArchitectureSVG(i)}
                      </div>
                    </div>

                    <div className="project-row__footer-meta">
                      <div className="project-row__tags">
                        {p.tags.map((t, j) => (
                          <span className="project-tag" key={j}>{t}</span>
                        ))}
                      </div>

                      <div className="project-row__links">
                        {p.live && p.live !== p.github && (
                          <>
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link"
                            >
                              <ExternalIcon />
                              Live Demo
                            </a>
                            <span className="link-divider" />
                          </>
                        )}
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <GitHubIcon />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="work__footer">
        <span className="work__footer-text">
          These are just a few highlights —
        </span>
        <a
          href="https://github.com/Prateek-1110"
          target="_blank"
          rel="noopener noreferrer"
          className="work__all"
          data-hover
        >
          Browse all projects <ArrowIcon />
        </a>
      </div>
    </section>
  );
}