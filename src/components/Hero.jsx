import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, FileText, MapPin } from './Icons'

const ROLES = [
  "Data & ML Engineer",
  "RAG Systems Builder",
  "NLP Pipeline Architect",
  "Agentic AI Developer"
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setFade(true)
      }, 300) // Wait for fade-out to finish
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="hero-sec">
      <div className="hero-avatar-container">
        {/* Placeholder image that the user can replace by dropping a profile photo in assets/workspace */}
        <div className="hero-avatar">
          {/* PA Text avatar. If a photo exists, user can uncomment the image below: */}
          <span style={{ fontSize: '3.5rem', fontWeight: '800' }}>PA</span>
          { <img src="src\image.png" alt="Prateek Agrahari" /> }
        </div>
      </div>

      <div className="hero-info">
        <div className="hero-badge">
          <MapPin size={14} /> IIT Jodhpur
        </div>
        
        <h1 className="hero-name">
          Hi, I'm <span>Prateek Agrahari</span>
        </h1>

        <div className="hero-titles">
          <span 
            style={{
              transition: 'opacity 0.3s ease',
              opacity: fade ? 1 : 0,
              display: 'inline-block'
            }}
          >
            {ROLES[roleIndex]}
          </span>
        </div>

        <div className="hero-bio">
          <p>
            Building production-grade ML pipelines, retrieval systems, and agentic AI — from raw data ingestion to intelligent LLM-driven output.
          </p>
          <blockquote>
            "My edge: I approach ML from a systems lens, focusing on latency, data quality, pipeline reproducibility, and evaluation harnesses — not just training accuracy. Every project I ship is end-to-end and measurable."
          </blockquote>
          <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <strong>Academic Tagline:</strong> IIT Jodhpur · B.Tech: Minor in AI '2027 (expected)
          </p>
        </div>

        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            <Mail size={16} /> Contact Me
          </a>
          <a 
            href="https://drive.google.com/file/d/1BbKTVsQgwGILnEgUbazcPGd4VBw1xIRl/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            <FileText size={16} /> View Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/prateek-1110" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/prateek1110/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:b23bb1033@iitj.ac.in" className="social-link" title="Email Direct">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
