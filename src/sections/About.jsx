import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import photo from './image.png';
import DataVisualizer from '../components/DataVisualizer';

// ── Smooth CountUp Counter with Intersection Observer ─────
function Counter({ max, suffix }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 1200; // 1.2s total count duration
    const frameRate = 16; // ~60fps
    const totalFrames = duration / frameRate;
    const stepAmount = Math.max(Math.ceil(max / totalFrames), 1);

    const timer = setInterval(() => {
      start += stepAmount;
      if (start >= max) {
        setCount(max);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [hasStarted, max]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const skillPills = [
    "Python", "PyTorch", "FastAPI", "PostgreSQL",
    "Qdrant", "NLP", "RAG", "LangChain"
  ];

  return (
    <section className="about" id="about">
      {/* Absolute Head Watermark for depth */}
      <div className="section-watermark">02</div>

      <div className="about__grid-layout">
        {/* Left Column: Rotating Spinner Photo Frame */}
        <div className="about__left-col">
          <div className="about__photo-container">
            <div className="about__photo-spinner" />
            <div className="about__photo-inner">
              <img
                src={photo}
                alt="Prateek Agrahari"
                className="about__photo"
              />
            </div>
          </div>
          <h2 className="about__name">Prateek Agrahari</h2>
          <span className="about__tag">Data &amp; ML Engineer</span>
        </div>

        {/* Right Column: Custom ML Systems Narrative */}
        <div className="about__right-col">
          <div className="about__header">
            <div className="section-label">02 — About</div>
            <h3 className="about__heading">Systems-Driven Machine Learning</h3>
          </div>

          <div className="about__text-block">
            <p>
              I'm a Data &amp; ML Engineer at IIT Jodhpur building systems that sit at the boundary of raw data and intelligent reasoning — retrieval pipelines, NLP models, and agentic AI workflows.
            </p>
            <p>
              My edge: I approach ML from a systems lens. I care about latency, data quality, pipeline reproducibility, and evaluation harnesses — not just training accuracy. Every project I ship is end-to-end and measurable.
            </p>
          </div>

          {/* Stats Cards Grid */}
        
          

          {/* Mini Skill Tags */}
          <div className="about__skill-pills">
            {skillPills.map((pill, idx) => (
              <span className="about__skill-pill" key={idx}>
                <span className="about__pill-dot" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <DataVisualizer />
    </section>
  );
}