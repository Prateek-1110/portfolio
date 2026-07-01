import React, { useState } from "react";
import "./DataVisualizer.css";

const languageData = [
  {
    subject: "C++",
    score: 95,
    color: "#8a2be2", // Purple
    description: "Primary choice for performance-critical systems, low-level optimizations, and advanced data structures. 500+ questions solved.",
    usecase: "Competitive Programming (Knight rating on LeetCode) and custom low-level algorithmic logic."
  },
  {
    subject: "SQL",
    score: 90,
    color: "#10b981", // Emerald
    description: "Expertise in PostgreSQL schema designs, complex recursive queries, indexing strategies, and transactional constraints.",
    usecase: "Call-graph indexing structures for codebase RAG and geo-spatial query processing."
  },
  {
    subject: "Python",
    score: 85,
    color: "#00ffff", // Cyan
    description: "Core language for ML modeling, deep learning workflows, backend services (FastAPI/Django), and scripting automation.",
    usecase: "FastAPI REST API design, PyTorch model pipelines, and automated news parsing scripts."
  },
  {
    subject: "JavaScript",
    score: 80,
    color: "#f97316", // Orange
    description: "Modern ES6+ frontend development, React state management, and real-time client components.",
    usecase: "Interactive analytics dashboards, dynamic particle animations, and theme toggling."
  },
  {
    subject: "TypeScript",
    score: 75,
    color: "#ec4899", // Glowing Pink
    description: "Type-safe systems architectures, Next.js routing, database migrations, and modular API service layers.",
    usecase: "Building robust, self-documenting service modules and web apps."
  }
];

const workloadData = [
  {
    label: "Retrieval & RAG Systems",
    percentage: 95,
    color: "#8a2be2", // Purple
    tools: ["Qdrant", "PostgreSQL", "AST Parsing", "Sentence-Transformers"],
    description: "Expert-level design of multi-stage retrieval fusing BM25 lexical search with dense vector embeddings and cross-encoder re-ranking."
  },
  {
    label: "Agentic AI Workflows",
    percentage: 90,
    color: "#00ffff", // Cyan
    tools: ["LangGraph", "LangChain", "LLM Intent Classifier", "Tool-Calling Loops"],
    description: "Production-grade stateful multi-agent architectures using cyclic graphs and deterministic router reasoning."
  },
  {
    label: "ETL & Data Pipelines",
    percentage: 85,
    color: "#10b981", // Emerald
    tools: ["FastAPI", "PostgreSQL", "DBSCAN Clustering", "Django Background Tasks"],
    description: "Robust high-throughput ingestion pipelines handling millions of geospatial and textual records."
  },
  {
    label: "Deep Learning & Vision",
    percentage: 75,
    color: "#f97316", // Orange
    tools: ["PyTorch", "DeepLabV3", "SAR AIS Data Fusion", "Semantic Segmentation"],
    description: "Deep understanding of computer vision segmentation models and data fusion algorithms."
  }
];

const pipelineData = [
  {
    dataset: "US Accident Records",
    volume: "3.0M+ Rows",
    scale: 100, // normalized percentage
    color: "#10b981",
    engine: "PostgreSQL / Django",
    latency: "Batch ETL",
    usecase: "Geospatial DBSCAN density clustering for traffic hotspot detection."
  },
  {
    dataset: "News Aggregation Feeds",
    volume: "150K+ Monthly",
    scale: 65,
    color: "#8a2be2",
    engine: "Python Ingestion Engine",
    latency: "< 2 mins",
    usecase: "LLM-based deduplication, text categorization, and auto-publishing pipelines."
  },
  {
    dataset: "Codebase Call Graphs",
    volume: "85K+ Edges",
    scale: 45,
    color: "#00ffff",
    engine: "PostgreSQL Graph Schema",
    latency: "AST-parsed",
    usecase: "Resolving caller-callee hierarchies for deterministic codebase RAG."
  },
  {
    dataset: "Satellite & SAR Frames",
    volume: "12K+ Images",
    scale: 25,
    color: "#f97316",
    engine: "PyTorch Segmenter",
    latency: "Real-time stream",
    usecase: "AI segmentation of oil spills fused with real-time AIS anomaly streams."
  }
];

export default function DataVisualizer() {
  const [activeTab, setActiveTab] = useState("language");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Math constants for SVG rendering
  const center = 100;
  const rMax = 70;
  const strokeWidth = 10;
  const gap = 16;

  // Radar chart coordinates calculator
  const getCoordinates = (data, scale = 1) => {
    const angleStep = (2 * Math.PI) / data.length;
    return data.map((item, idx) => {
      const angle = idx * angleStep - Math.PI / 2; // offset to top
      const r = (item.score / 100) * rMax * scale;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return { x, y, subject: item.subject, score: item.score, angle };
    });
  };

  // Helper to generate grid polygons
  const getPentagonPath = (r) => {
    const angleStep = (2 * Math.PI) / 5;
    const points = [];
    for (let i = 0; i < 5; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(" L ")} Z`;
  };

  // Radar chart coordinate points
  const radarPoints = getCoordinates(languageData);
  const radarPath = `M ${radarPoints.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;

  return (
    <div className="visualizer">
      <div className="visualizer__controls">
        <button
          className={`visualizer__tab ${activeTab === "language" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("language");
            setHoveredItem(null);
          }}
        >
          Languages
        </button>
        <button
          className={`visualizer__tab ${activeTab === "workload" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("workload");
            setHoveredItem(null);
          }}
        >
          ML / AI Competencies
        </button>
        <button
          className={`visualizer__tab ${activeTab === "pipeline" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("pipeline");
            setHoveredItem(null);
          }}
        >
          Data Pipeline Scale
        </button>
      </div>

      <div className="visualizer__content">
        {activeTab === "language" && (
          <div className="visualizer__grid">
            <div className="visualizer__chart-wrap">
              <svg className="radial-chart" viewBox="0 0 200 200">
                {/* Background grid concentric pentagons */}
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, i) => (
                  <path
                    key={i}
                    d={getPentagonPath(rMax * scale)}
                    fill="transparent"
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                    strokeDasharray="2,2"
                  />
                ))}

                {/* Grid axis lines */}
                {radarPoints.map((p, idx) => (
                  <line
                    key={idx}
                    x1={center}
                    y1={center}
                    x2={center + rMax * Math.cos(p.angle)}
                    y2={center + rMax * Math.sin(p.angle)}
                    stroke="var(--border-color)"
                    strokeWidth="0.8"
                    strokeOpacity="0.4"
                  />
                ))}

                {/* Core filled skill polygon */}
                <path
                  d={radarPath}
                  fill="rgba(138, 43, 226, 0.2)"
                  stroke="#8a2be2"
                  strokeWidth="1.5"
                  className="radar-poly"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(138, 43, 226, 0.4))",
                  }}
                />

                {/* Vertex points and interaction zones */}
                {radarPoints.map((p, idx) => {
                  const isHovered = hoveredItem === idx;
                  return (
                    <g
                      key={idx}
                      onMouseEnter={() => setHoveredItem(idx)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{ cursor: "pointer" }}
                    >
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={isHovered ? 5 : 3.5}
                        fill={languageData[idx].color}
                        stroke="var(--bg-card)"
                        strokeWidth="1"
                        style={{
                          transition: "r 0.3s, filter 0.3s",
                          filter: isHovered
                            ? `drop-shadow(0 0 6px ${languageData[idx].color})`
                            : "none",
                        }}
                      />
                    </g>
                  );
                })}

                {/* Labels around the radar */}
                {getCoordinates(languageData, 1.22).map((p, idx) => {
                  // align label dynamically
                  let anchor = "middle";
                  if (Math.abs(p.x - center) > 10) {
                    anchor = p.x > center ? "start" : "end";
                  }
                  return (
                    <text
                      key={idx}
                      x={p.x}
                      y={p.y + 3}
                      textAnchor={anchor}
                      className="radar-label"
                      fill={hoveredItem === idx ? "var(--text-color)" : "var(--text-muted)"}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "8.5px",
                        fontWeight: hoveredItem === idx ? "700" : "500",
                        transition: "fill 0.3s, font-weight 0.3s",
                      }}
                    >
                      {p.subject}
                    </text>
                  );
                })}
              </svg>
            </div>

            <div className="visualizer__legend">
              <h4 className="visualizer__subtitle">Interactive Language Proficiency</h4>
              <div className="legend-items">
                {languageData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`legend-item ${hoveredItem === idx ? "active" : ""}`}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="legend-item__header">
                      <span className="legend-item__dot" style={{ backgroundColor: item.color }}></span>
                      <span className="legend-item__name">{item.subject}</span>
                      <span className="legend-item__pct">{item.score}%</span>
                    </div>
                    <div className="legend-item__body">
                      <p className="legend-item__desc">{item.description}</p>
                      <p className="legend-item__desc legend-item__desc--bold">
                        <strong>Usecase:</strong> {item.usecase}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "workload" && (
          <div className="visualizer__grid">
            <div className="visualizer__chart-wrap">
              <svg className="radial-chart" viewBox="0 0 200 200">
                {workloadData.map((item, idx) => {
                  const radius = 80 - idx * gap;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (item.percentage / 100) * circumference;
                  const isHovered = hoveredItem === idx;

                  return (
                    <g
                      key={idx}
                      onMouseEnter={() => setHoveredItem(idx)}
                      onMouseLeave={() => setHoveredItem(null)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Background track */}
                      <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="transparent"
                        stroke="var(--bg-accent)"
                        strokeWidth={strokeWidth}
                        strokeOpacity="0.2"
                      />
                      {/* Glowing colored ring */}
                      <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        fill="transparent"
                        stroke={item.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${center} ${center})`}
                        style={{
                          transition: "stroke-width 0.3s, stroke-opacity 0.3s, filter 0.3s",
                          filter: isHovered ? `drop-shadow(0 0 6px ${item.color})` : "none",
                          strokeWidth: isHovered ? strokeWidth + 2 : strokeWidth,
                        }}
                      />
                    </g>
                  );
                })}
                {/* Center Label */}
                <text
                  x={center}
                  y={center - 5}
                  textAnchor="middle"
                  className="radial-chart__center-title"
                >
                  {hoveredItem !== null ? `${workloadData[hoveredItem].percentage}%` : "ML / AI"}
                </text>
                <text
                  x={center}
                  y={center + 15}
                  textAnchor="middle"
                  className="radial-chart__center-sub"
                >
                  {hoveredItem !== null ? "Expertise" : "Proficiency"}
                </text>
              </svg>
            </div>

            <div className="visualizer__legend">
              <h4 className="visualizer__subtitle">Interactive Competencies &amp; ML Architecture</h4>
              <div className="legend-items">
                {workloadData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`legend-item ${hoveredItem === idx ? "active" : ""}`}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="legend-item__header">
                      <span className="legend-item__dot" style={{ backgroundColor: item.color }}></span>
                      <span className="legend-item__name">{item.label}</span>
                      <span className="legend-item__pct">{item.percentage}%</span>
                    </div>
                    <div className="legend-item__body">
                      <p className="legend-item__desc">{item.description}</p>
                      <div className="legend-item__tools">
                        {item.tools.map((t, ti) => (
                          <span key={ti} className="legend-item__tool-chip">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "pipeline" && (
          <div className="visualizer__grid">
            <div className="visualizer__bar-chart">
              <h4 className="visualizer__subtitle">ETL Datasets &amp; Ingestion Throughput</h4>
              <div className="bar-groups">
                {pipelineData.map((item, idx) => {
                  const isHovered = hoveredItem === idx;
                  return (
                    <div
                      key={idx}
                      className="bar-group"
                      onMouseEnter={() => setHoveredItem(idx)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="bar-group__labels">
                        <span className="bar-group__name">{item.dataset}</span>
                        <span className="bar-group__volume">{item.volume}</span>
                      </div>
                      <div className="bar-group__track">
                        <div
                          className="bar-group__fill"
                          style={{
                            width: `${item.scale}%`,
                            backgroundColor: item.color,
                            boxShadow: isHovered ? `0 0 10px ${item.color}` : "none",
                            transition: "width 0.5s ease-out, box-shadow 0.3s"
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="visualizer__details">
              {hoveredItem !== null ? (
                <div className="details-card active" style={{ borderColor: pipelineData[hoveredItem].color }}>
                  <div className="details-card__header">
                    <span className="details-card__title">{pipelineData[hoveredItem].dataset}</span>
                    <span className="details-card__badge" style={{ backgroundColor: `${pipelineData[hoveredItem].color}22`, color: pipelineData[hoveredItem].color }}>
                      {pipelineData[hoveredItem].volume}
                    </span>
                  </div>
                  <div className="details-card__row">
                    <span className="details-card__label">Pipeline Engine:</span>
                    <span className="details-card__val">{pipelineData[hoveredItem].engine}</span>
                  </div>
                  <div className="details-card__row">
                    <span className="details-card__label">Latency Class:</span>
                    <span className="details-card__val">{pipelineData[hoveredItem].latency}</span>
                  </div>
                  <p className="details-card__desc">{pipelineData[hoveredItem].usecase}</p>
                </div>
              ) : (
                <div className="details-card details-card--placeholder">
                  <div className="placeholder-pulsar"></div>
                  <p>Hover over any dataset bar to inspect the custom pipeline engine details, latencies, and ingestion targets.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
