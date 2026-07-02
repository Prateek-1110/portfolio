import React, { useState, useEffect, useRef } from 'react';
import PipelineDAG from '../components/PipelineDAG';
import './Hero.css';

// ── Custom CountUp Sub-Component ───────────────────────────
function CountUp({ end, duration = 1200, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;

    function run(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - startValue) + startValue));
      if (progress < 1) {
        requestAnimationFrame(run);
      }
    }

    requestAnimationFrame(run);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// ── Typing Loop Hook ───────────────────────────────────────
function useTypingAnimation(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (words.length === 0) return;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return text;
}

export default function Hero() {
  const heroRef = useRef(null);
  const words = ["Data & ML Engineer", "RAG Systems Builder", "NLP Pipeline Architect", "Agentic AI Developer"];
  const typingText = useTypingAnimation(words);

  const scrollToWork = () =>
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const titleWords = ["Prateek", "Agrahari"];
  let charCounter = 0;

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <PipelineDAG />

      <div className="hero__inner hero__inner--centered">
        <div className="hero__tag">
          <span className="hero__tag-line" />
          <span>IIT Jodhpur &nbsp;·&nbsp; B.Tech: Minor in AI'2027</span>
        </div>

        <h1 className="hero__title">
          {titleWords.map((word, wIdx) => (
            <span key={wIdx} className="hero__title-word">
              {word.split("").map((char) => {
                const currentIdx = charCounter;
                charCounter++;
                return (
                  <span
                    key={currentIdx}
                    className="hero__char"
                    style={{ animationDelay: `${currentIdx * 0.05}s` }}
                  >
                    {char}
                  </span>
                );
              })}
              {wIdx < titleWords.length - 1 && "\u00A0"}
            </span>
          ))}
        </h1>

        <p className="hero__role">
          {typingText}
          <span className="hero__cursor">|</span>
        </p>

        <p className="hero__sub">
          Building production-grade ML pipelines, retrieval systems, and agentic AI — from raw data ingestion to intelligent LLM-driven output.
        </p>

        <div className="hero__cta">
          <button className="btn btn--filled-gradient" onClick={scrollToWork}>
            View My Work
          </button>
          <button className="btn btn--ghost-animated" onClick={scrollToContact}>
            Get in touch
          </button>
        </div>

        {/* Live Metrics Bar */}
        <div className="hero__metrics">
          <div className="hero__metric-item">
            <CountUp end={3} suffix="M+" />
            <span className="hero__metric-label">Geospatial Records Ingested (Traffic Hotspots)</span>
          </div>
          <span className="hero__metric-divider">|</span>
          <div className="hero__metric-item">
            <CountUp end={92} suffix="%" />
            <span className="hero__metric-label">Pixel Accuracy (SAR Oil Spill Detection)</span>
          </div>
          <span className="hero__metric-divider">|</span>
          <div className="hero__metric-item">
            <CountUp end={5} suffix="+" />
            <span className="hero__metric-label">End-to-End AI/Data Pipelines Built</span>
          </div>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      <div className="hero__index">
        <span>01</span>
        <span className="hero__index-label">Intro</span>
      </div>
    </section>
  );
}