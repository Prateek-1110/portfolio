import React, { useState } from "react";
import "./Resume.css";

const resumes = [
  {
    role: "ML / AI Engineer Resume",
    description:
      "Tailored for deep learning positions, highlighting neural architectures, RAG systems, NLP model evaluations, and Vector Database indexing strategies.",
    tags: ["PyTorch", "NLP", "RAG", "LLMs", "Transformers"],
    viewUrl: "https://drive.google.com/file/d/1BbKTVsQgwGILnEgUbazcPGd4VBw1xIRl/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1BbKTVsQgwGILnEgUbazcPGd4VBw1xIRl/view?usp=sharing",
    icon: "ML",
    label: "MLE / AI / Deep Learning",
    themeColor: "cyan"
  },
  {
    role: "Data Engineer Resume",
    description:
      "Focused on database schema designs, automated ETL pipelines, distributed processing engines, and reproducible data workflows.",
    tags: ["SQL", "ETL Pipelines", "PostgreSQL", "Qdrant", "Docker"],
    viewUrl: "https://drive.google.com/file/d/1qU5S9AB01A3N2Aqh0z1TpuRnrLhGxcjW/view?usp=sharing",
    downloadUrl: "https://drive.google.com/file/d/1qU5S9AB01A3N2Aqh0z1TpuRnrLhGxcjW/view?usp=sharing",
    icon: "DE",
    label: "DE / Systems / Database",
    themeColor: "violet"
  }
];

export default function Resume() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="resume-section" id="resume">
      {/* Absolute watermark index */}
      <div className="section-watermark">08</div>

      <div className="resume-header">
        <div className="section-label">08 — Resume</div>
        <h2 className="resume-title">Tailored Professional Resumes</h2>
        
        {/* Pulsing maintained badge */}
        <div className="resume-status-badge">
          <span className="pulsing-green-dot" />
          <span className="badge-text">Active — Updated July 2026</span>
        </div>
      </div>

      <div className="resume-grid">
        {resumes.map((resume, index) => (
          <div
            className={`resume-card card-theme--${resume.themeColor} ${hoveredCard === index ? "hovered" : ""}`}
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Colored top accent bar */}
            <div className="resume-card-accent-bar" />

            <div className="resume-card-top">
              <span className="resume-icon">{resume.icon}</span>
              <span className="resume-badge">{resume.label}</span>
            </div>

            <h3 className="resume-role">{resume.role}</h3>
            <p className="resume-desc">{resume.description}</p>

            <div className="resume-tags">
              {resume.tags.map((tag, i) => (
                <span className="resume-tag-pill" key={i}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="resume-actions">
              <a
                href={resume.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn resume-btn-view"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View
              </a>
              <a
                href={resume.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn resume-btn-download"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
