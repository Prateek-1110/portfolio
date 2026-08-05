import React from 'react'
import profileImg from '../image.png'

export default function About() {
  const SKILLS = [
    "Python", 
    "PyTorch", 
    "FastAPI", 
    "PostgreSQL", 
    "Qdrant", 
    "NLP", 
    "RAG", 
    "LangChain"
  ]

  return (
    <section id="about" className="about-sec">
      <div className="about-container">
        
        {/* Left Column: Profile Card */}
        <div className="about-profile-sidebar">
          <div className="about-card-glow-bg"></div>
          <div className="about-profile-card">
            <div className="hero-avatar-container">
              <div className="hero-avatar">
                <img src={profileImg} alt="Prateek Agrahari" />
              </div>
            </div>
            
            <div className="about-profile-details">
              <h3 className="about-profile-name">Prateek Agrahari</h3>
              <p className="about-profile-title">Machine Learning & Data Engineer</p>
            </div>
          </div>
        </div>

        {/* Right Column: About Details */}
        <div className="about-details">
          <div className="about-section-indicator">
            <span className="indicator-number">02</span>
            <span className="indicator-separator">—</span>
            <span className="indicator-text">ABOUT</span>
          </div>

          <h2 className="about-main-heading">
            Systems-Driven Machine Learning
          </h2>

          <div className="about-description">
            <p className="about-bio-lead">
              I'm a B.Tech student (Minor in AI) at IIT Jodhpur building systems that sit at the boundary of raw data and intelligent reasoning, retrieval pipelines, NLP models, and agentic AI workflows.
            </p>
            
            <p className="about-bio-edge">
              I approach ML from a systems lens. I care about latency, data quality, pipeline reproducibility, and evaluation harnesses, not just training accuracy. Every project I ship is end-to-end and measurable.
            </p>
          </div>

          <div className="about-skills-tags">
            {SKILLS.map((skill, idx) => (
              <span className="skill-pill" key={idx}>
                <span className="skill-pill-dot"></span>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
