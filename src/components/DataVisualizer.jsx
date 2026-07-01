import React, { useState } from "react";
import "./DataVisualizer.css";

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
  const [activeTab, setActiveTab] = useState("workload");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Concentric ring parameters
  const center = 100;
  const strokeWidth = 10;
  const gap = 16;

  return (
    <div className="visualizer">
      <div className="visualizer__controls">
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
        {activeTab === "workload" ? (
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
        ) : (
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
