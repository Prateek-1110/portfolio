import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import photo from './WhatsApp Image 2026-04-11 at 15.53.26.jpeg';
import DataVisualizer from '../components/DataVisualizer';

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
    const duration = 1200; // ms
    const stepTime = Math.max(Math.floor(duration / max), 30);
    const timer = setInterval(() => {
      start += 1;
      if (start >= max) {
        setCount(max);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, max]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__left">
        <div className="section-label">02 — About</div>

        <div className="about__img-wrap">
          <img
            src={photo}
            alt="Prateek Agrahari"
            className="about__photo"
          />
        </div>

        <h2 className="about__name">Prateek Agrahari</h2>
        <p className="about__role">Data &amp; ML Engineer</p>
      </div>

      <div className="about__right">
        <h3 className="about__title">About</h3>
        <p className="about__body">
          I am a <strong>Data &amp; ML Engineer</strong> specializing in computational logic, scalable data architecture, and applied machine learning. I design systems that ingest, transform, and retrieve complex datasets at scale.
        </p>
        <p className="about__body">
          Currently pursuing my B.Tech at IIT Jodhpur, I focus on the intersection of data engineering, systems development, and deep learning. I enjoy bridging the gap between raw data pipelines and intelligent LLM-driven reasoning.
        </p>
        <p className="about__body">
          When I'm not coding, I play chess, read books, and enjoy quiet time exploring new computational concepts.
        </p>

        <div className="about__stats">
          <div className="about__stat">
            <span className="stat-num">
              <Counter max={3} suffix="M+" />
            </span>
            <span className="stat-label">Records processed</span>
          </div>
          <div className="about__stat">
            <span className="stat-num">
              <Counter max={5} suffix="+" />
            </span>
            <span className="stat-label">ML Pipelines built</span>
          </div>
        </div>
      </div>

      <DataVisualizer />
    </section>
  );
}