import React from 'react'

// Custom icons for the resume card
const ViewIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const DownloadIcon = ({ size = 16, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

export default function Resume() {
  const RESUME_URL = "https://drive.google.com/file/d/1BbKTVsQgwGILnEgUbazcPGd4VBw1xIRl/view?usp=sharing";
  const SKILLS = ["PyTorch", "NLP", "RAG", "LLMs", "Transformers", "FastAPI"];

  return (
    <section id="resume" className="resume-section">
      <div className="about-section-indicator">
        {/* <span className="indicator-number">06</span>
        <span className="indicator-separator">—</span> */}
        {/* <span className="indicator-text">RESUME</span> */}
      </div>
      
      <h2 className="section-title">Resume</h2>

      <div className="resume-container">
        {/* Glow Dot Indicator */}
        <div className="resume-status-badge">
          <span className="status-dot"></span>
          <span className="status-text">ACTIVE — UPDATED AUGUST 2026</span>
        </div>

        {/* Glassmorphic Resume Card */}
        <div className="resume-card">
          <div className="resume-card-top-glow"></div>
          
          <div className="resume-card-content">
            <div className="resume-card-left">
              {/* Badge Icon */}
              <div className="resume-badge-wrapper">
                <div className="resume-badge">ML</div>
                <div className="resume-meta">
                  <span className="resume-role-tag">MLE / AI / DEEP LEARNING</span>
                  <span className="resume-file-info">PDF Format • 140 KB</span>
                </div>
              </div>
              
              <h3 className="resume-card-title">ML / AI Engineer Resume</h3>
              <p className="resume-card-desc">
                Clean, ATS-optimized, and highlighting end-to-end machine learning systems, data engineering pipelines, and competitive programming experience.
              </p>
              
              <div className="resume-skills-pills">
                {SKILLS.map((skill, idx) => (
                  <span className="resume-skill-pill" key={idx}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="resume-card-right">
              <a 
                href={RESUME_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary resume-btn-view"
              >
                <ViewIcon size={16} />
                <span>View Resume</span>
              </a>
              
              <a 
                href={RESUME_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary resume-btn-download"
              >
                <DownloadIcon size={16} />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
