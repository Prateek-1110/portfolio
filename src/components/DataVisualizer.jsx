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

const mlToolsData = [
  {
    name: "RAG Architecture",
    proficiency: 95,
    color: "#8a2be2",
    description: "Designing deterministic multi-stage retrieval-augmented generation systems.",
    details: "Implements dense-sparse vector hybrid indexing, Reciprocal Rank Fusion (RRF), AST parsing, and cross-encoder reranking algorithms."
  },
  {
    name: "LangChain / LangGraph",
    proficiency: 92,
    color: "#00ffff",
    description: "Building production-grade stateful multi-agent orchestrations.",
    details: "Utilizes cyclical graph states, conditional node routing, and parallel execution hierarchies for complex tool-calling loops."
  },
  {
    name: "PyTorch & CV models",
    proficiency: 85,
    color: "#10b981",
    description: "Building, training, and optimizing deep neural networks.",
    details: "Expertise in model segmentation (DeepLabV3), tensor manipulation, training loops, and multimodal data fusion architectures."
  },
  {
    name: "Qdrant Vector DB",
    proficiency: 88,
    color: "#ec4899",
    description: "Optimizing high-dimensional dense vector embeddings store.",
    details: "Designed payload filtering strategies, payload indexes, HNSW configurations, and collection clustering layouts."
  },
  {
    name: "HuggingFace Transformers",
    proficiency: 80,
    color: "#f97316",
    description: "Fine-tuning and deploying large language and vision models.",
    details: "Utilizes pipeline abstractions, tokenizer customizations, and parameter-efficient fine-tuning (PEFT/LoRA) modules."
  }
];

const pipelineStackData = [
  {
    stage: "Source",
    label: "Data Sources",
    color: "#8a2be2",
    tools: "CSV, RSS Feeds, SAR Imagery, APIs",
    desc: "Raw unstructured and structured inputs ingest pathways.",
    details: "Consumes 3M+ traffic records, real-time RSS blog feeds, and satellite SAR imagery streams."
  },
  {
    stage: "Ingest",
    label: "Ingestion Engine",
    color: "#00ffff",
    tools: "FastAPI, Python Streamers, AST",
    desc: "Parsing, filtering, and sanitizing incoming streams.",
    details: "Includes AST-based parser to break code repositories into syntax blocks and API stream endpoints with low latency."
  },
  {
    stage: "Store",
    label: "Storage Layers",
    color: "#10b981",
    tools: "PostgreSQL, Qdrant Vector DB",
    desc: "Indexing structured relational schemas and embeddings.",
    details: "Leverages custom relational graphs in PG SQL and high-dimensional vector collection spaces in Qdrant."
  },
  {
    stage: "Query",
    label: "Query Pipeline",
    color: "#f97316",
    tools: "Hybrid RRF, Cross-Encoder",
    desc: "Retrieval and search logic across indexes.",
    details: "Combines lexical keyword matching (BM25) with semantic vector search, resolving results via reranking models."
  },
  {
    stage: "Serve",
    label: "Service Layer",
    color: "#ec4899",
    tools: "Llama 3 (Groq), Leaflet Maps UI",
    desc: "Presenting insights and driving interactions.",
    details: "Feeds context into LLM models for codebase intelligence, and renders spatial traffic clusters on custom interactive maps."
  }
];

export default function DataVisualizer() {
  const [activeTab, setActiveTab] = useState("language");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activePipelineIdx, setActivePipelineIdx] = useState(0);

  // Math constants for SVG rendering
  const center = 100;
  const rMax = 70;

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
          className={`visualizer__tab ${activeTab === "ml" ? "active" : ""}`}
          onClick={() => {
            setActiveTab("ml");
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
                    stroke="var(--border)"
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
                    stroke="var(--border)"
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
                        stroke="var(--bg)"
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
                      fill={hoveredItem === idx ? "var(--text)" : "var(--text-muted)"}
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

        {activeTab === "ml" && (
          <div className="visualizer__grid">
            <div className="visualizer__bar-chart">
              <h4 className="visualizer__subtitle">ML / AI Core Competency Proficiency</h4>
              <div className="bar-groups">
                {mlToolsData.map((item, idx) => {
                  const isHovered = hoveredItem === idx;
                  return (
                    <div
                      key={idx}
                      className={`bar-group ${isHovered ? "active" : ""}`}
                      onMouseEnter={() => setHoveredItem(idx)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="bar-group__labels">
                        <span className="bar-group__name">{item.name}</span>
                        <span className="bar-group__volume">{item.proficiency}%</span>
                      </div>
                      <div className="bar-group__track">
                        <div
                          className="bar-group__fill"
                          style={{
                            width: `${item.proficiency}%`,
                            backgroundColor: item.color,
                            boxShadow: isHovered ? `0 0 10px ${item.color}` : "none",
                            transition: "width 0.6s cubic-bezier(0.1, 1, 0.1, 1), box-shadow 0.3s"
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
                <div className="details-card active" style={{ borderColor: mlToolsData[hoveredItem].color }}>
                  <div className="details-card__header">
                    <span className="details-card__title">{mlToolsData[hoveredItem].name}</span>
                    <span className="details-card__badge" style={{ backgroundColor: `${mlToolsData[hoveredItem].color}22`, color: mlToolsData[hoveredItem].color }}>
                      {mlToolsData[hoveredItem].proficiency}%
                    </span>
                  </div>
                  <div className="details-card__row">
                    <span className="details-card__label">Role Focus:</span>
                    <span className="details-card__val">{mlToolsData[hoveredItem].description}</span>
                  </div>
                  <p className="details-card__desc">{mlToolsData[hoveredItem].details}</p>
                </div>
              ) : (
                <div className="details-card details-card--placeholder">
                  <div className="placeholder-pulsar"></div>
                  <p>Hover over any competency bar to inspect practical frameworks, implementation designs, and systems application context.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "pipeline" && (
          <div className="visualizer__grid visualizer__grid--vertical">
            <div className="visualizer__chart-wrap flex-column">
              <h4 className="visualizer__subtitle self-align-start w-100">Interactive Pipeline Topology</h4>
              
              <svg className="pipeline-stack-svg" viewBox="0 0 460 120" style={{ width: "100%", height: "auto" }}>
                <defs>
                  <marker id="arrow-pipeline" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="var(--text-faint)" />
                  </marker>
                </defs>

                {/* Connection paths with flowing dot dash effect */}
                {[0, 1, 2, 3].map((i) => {
                  const x1 = 40 + i * 95 + 16;
                  const x2 = 40 + (i + 1) * 95 - 16;
                  const isConnectingActive = activePipelineIdx === i || activePipelineIdx === i + 1;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={55}
                      x2={x2}
                      y2={55}
                      stroke={isConnectingActive ? "var(--text)" : "var(--border)"}
                      strokeWidth={isConnectingActive ? "1.5" : "1"}
                      strokeDasharray={isConnectingActive ? "4,4" : "2,2"}
                      markerEnd="url(#arrow-pipeline)"
                      style={{
                        transition: "stroke 0.3s ease, stroke-width 0.3s ease",
                      }}
                    />
                  );
                })}

                {/* Nodes */}
                {pipelineStackData.map((node, idx) => {
                  const cx = 40 + idx * 95;
                  const cy = 55;
                  const isActive = activePipelineIdx === idx;

                  return (
                    <g
                      key={idx}
                      onMouseEnter={() => setActivePipelineIdx(idx)}
                      onTouchStart={() => setActivePipelineIdx(idx)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Outer Ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={20}
                        fill="var(--bg-alt)"
                        stroke={isActive ? node.color : "var(--border)"}
                        strokeWidth={isActive ? "2.5" : "1.2"}
                        style={{
                          transition: "stroke 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease",
                          filter: isActive ? `drop-shadow(0 0 8px ${node.color})` : "none"
                        }}
                      />
                      {/* Inner Core */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={6}
                        fill={node.color}
                      />
                      {/* Label top */}
                      <text
                        x={cx}
                        y={25}
                        textAnchor="middle"
                        fill={isActive ? "var(--text)" : "var(--text-muted)"}
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "8.5px",
                          fontWeight: isActive ? "700" : "500",
                          transition: "fill 0.3s ease"
                        }}
                      >
                        {node.stage}
                      </text>
                      {/* Tool name bottom */}
                      <text
                        x={cx}
                        y={90}
                        textAnchor="middle"
                        fill="var(--text-faint)"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "7px",
                          fontWeight: "500"
                        }}
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="visualizer__details">
              <div className="details-card active" style={{ borderColor: pipelineStackData[activePipelineIdx].color }}>
                <div className="details-card__header">
                  <span className="details-card__title">{pipelineStackData[activePipelineIdx].label} ({pipelineStackData[activePipelineIdx].stage})</span>
                  <span className="details-card__badge" style={{ backgroundColor: `${pipelineStackData[activePipelineIdx].color}22`, color: pipelineStackData[activePipelineIdx].color }}>
                    Active Stage
                  </span>
                </div>
                <div className="details-card__row">
                  <span className="details-card__label">Tech Tools:</span>
                  <span className="details-card__val">{pipelineStackData[activePipelineIdx].tools}</span>
                </div>
                <div className="details-card__row">
                  <span className="details-card__label">Role Process:</span>
                  <span className="details-card__val">{pipelineStackData[activePipelineIdx].desc}</span>
                </div>
                <p className="details-card__desc">{pipelineStackData[activePipelineIdx].details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
