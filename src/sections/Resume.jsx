import React, { useState } from "react";
import "./Resume.css";

const resumes = [
  {
    role: "Web Developer",
    description:
      "Highlights full-stack projects, React, Django, REST APIs, and software engineering internship experience.",
    tags: ["React", "Django", "REST APIs", "DSA", "Full Stack"],
    viewUrl: "https://drive.google.com/file/d/1L9oN4Ubhe8gqiZl6UDqEcWb0zSgrCxvk/view?usp=sharing", // replace
    downloadUrl:
      "https://drive.google.com/file/d/1L9oN4Ubhe8gqiZl6UDqEcWb0zSgrCxvk/view?usp=sharing", // replace
    icon: "W",
    label: "SWE / Full Stack",
  },
  {
    role: "ML / AI Engineer",
    description:
      "Focuses on PyTorch, TensorFlow, NLP, RAG systems, transfer learning, and deep learning research projects.",
    tags: ["PyTorch", "TensorFlow", "NLP", "RAG", "Deep Learning"],
    viewUrl: "https://drive.google.com/file/d/1BbKTVsQgwGILnEgUbazcPGd4VBw1xIRl/view?usp=sharing", // replace
    downloadUrl:
      "https://drive.google.com/file/d/1BbKTVsQgwGILnEgUbazcPGd4VBw1xIRl/view?usp=sharing", // replace
    icon: "AI",
    label: "MLE / AI / Data Science",
  },
];

const Resume = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="resume-section" id="resume">
      <div className="resume-header">
        <div className="section-label">06 - Resume</div>
        <h2 className="resume-title">Resume versions</h2>
        <p className="resume-subtitle">
          Two tailored versions. Pick what best matches your role.
        </p>
      </div>

      <div className="resume-grid">
        {resumes.map((resume, index) => (
          <div
            className={`resume-card ${hoveredCard === index ? "hovered" : ""}`}
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="resume-card-top">
              <span className="resume-icon">{resume.icon}</span>
              <span className="resume-badge">{resume.label}</span>
            </div>

            <h3 className="resume-role">{resume.role}</h3>
            <p className="resume-desc">{resume.description}</p>

            <div className="resume-tags">
              {resume.tags.map((tag, i) => (
                <span className="resume-tag" key={i}>
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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
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
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
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

      <p className="resume-note">
        - Last updated April 2025
      </p>
    </section>
  );
};

export default Resume;
