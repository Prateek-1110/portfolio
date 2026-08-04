import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, FileText } from './Icons'

const ROLES = [
  "Data & ML Engineer",
  "RAG Systems Builder",
  "NLP Pipeline Architect",
  "Agentic AI Developer"
]

const METRICS = [
  {
    value: "3M+",
    label: "Geospatial Records Ingested",
    context: "Traffic Accident Hotspot Analyzer ETL pipeline"
  },
  {
    value: "92%",
    label: "Semantic Segmentation Accuracy",
    context: "SAR Oil Spill Detection DeepLabV3 model"
  },
  {
    value: "5+",
    label: "End-to-End AI/Data Pipelines",
    context: "Built for ingestion, deduplication, translation & evaluation"
  }
]

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
        setFade(true)
      }, 300)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="home-sec">
      <div className="home-content">
        <h1 className="home-name">
          Hi, I'm <span>Prateek Agrahari</span>
        </h1>

        <div className="home-titles">
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

        <p className="home-tagline">
          Building production-grade ML pipelines, retrieval systems, and agentic AI — from raw data ingestion to intelligent LLM-driven output.
        </p>

        <div className="home-ctas">
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

        <div className="home-socials">
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

      <div className="home-metrics">
        <div className="metrics-grid">
          {METRICS.map((item, idx) => (
            <div className="metric-card" key={idx}>
              <div className="metric-value">{item.value}</div>
              <div className="metric-label">{item.label}</div>
              <div className="metric-context">{item.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
