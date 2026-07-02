import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";

// ── Gauge Sub-Components ───────────────────────────────────

// Knight Speedometer Arc (Rating 1962 / 2500)
function SpeedometerArc({ value, max }) {
  const [offset, setOffset] = useState(157); // Arc length for r=50 is PI*r = 157
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasIntersected) return;
    const arcLength = Math.PI * 50; // 157
    const percent = value / max;
    const targetOffset = arcLength * (1 - percent);
    
    let start = 157;
    const step = (157 - targetOffset) / 50;
    const timer = setInterval(() => {
      start -= step;
      if (start <= targetOffset) {
        setOffset(targetOffset);
        clearInterval(timer);
      } else {
        setOffset(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, max, hasIntersected]);

  return (
    <div className="gauge-wrap" ref={containerRef}>
      <svg width="150" height="90" viewBox="0 0 150 90">
        {/* Gray Background Arc */}
        <path
          d="M 25 80 A 50 50 0 0 1 125 80"
          fill="none"
          stroke="var(--bg-alt)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Active Colored Arc */}
        <path
          d="M 25 80 A 50 50 0 0 1 125 80"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="157"
          strokeDashoffset={offset}
        />
        <text x="75" y="75" textAnchor="middle" className="gauge-text font-num">
          {value}
        </text>
        <text x="75" y="90" textAnchor="middle" className="gauge-sublabel">
          Max Rating
        </text>
      </svg>
    </div>
  );
}

// Percentile Bar for JEE (fills from right, so 98.5% is green, 1.5% is you)
function PercentileBar({ val }) {
  const [fillVal, setFillVal] = useState(0);
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasIntersected) return;
    const timer = setTimeout(() => {
      setFillVal(val); // animates via CSS transition
    }, 100);
    return () => clearTimeout(timer);
  }, [val, hasIntersected]);

  return (
    <div className="percentile-wrap" ref={containerRef}>
      <div className="percentile-track">
        <div 
          className="percentile-fill" 
          style={{ width: `${fillVal}%` }} 
        />
        <div className="percentile-marker" style={{ left: `${fillVal}%` }}>
          <div className="marker-tip">You</div>
        </div>
      </div>
      <div className="percentile-labels">
        <span>98.5% Base</span>
        <span>Top 1.5%</span>
      </div>
    </div>
  );
}

// Circular progress ring for CGPA
function CircularRing({ value, max }) {
  const [offset, setOffset] = useState(251.3); // Circumference for r=40 is 2*PI*40 = 251.3
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasIntersected) return;
    const circ = 2 * Math.PI * 40;
    const percent = value / max;
    const targetOffset = circ * (1 - percent);
    
    let start = 251.3;
    const step = (251.3 - targetOffset) / 50;
    const timer = setInterval(() => {
      start -= step;
      if (start <= targetOffset) {
        setOffset(targetOffset);
        clearInterval(timer);
      } else {
        setOffset(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, max, hasIntersected]);

  return (
    <div className="ring-wrap" ref={containerRef}>
      <svg width="110" height="110" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="var(--bg-alt)"
          strokeWidth="8"
        />
        {/* Active Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="var(--accent-secondary)"
          strokeWidth="8"
          strokeDasharray="251.3"
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="56" textAnchor="middle" className="ring-text font-num">
          {value}
        </text>
      </svg>
    </div>
  );
}

export default function Stats() {
  const [animateBars, setAnimateBars] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const codingStats = [
    { name: "GeeksforGeeks", count: 650, color: "var(--accent-secondary)", profile: "https://www.geeksforgeeks.org/user/prateekagr1110/" },
    { name: "LeetCode", count: 500, color: "var(--accent)", profile: "https://leetcode.com/prateekagr-1110/" },
    { name: "Codeforces", count: 175, color: "#F59E0B", profile: "https://codeforces.com/profile/prateek_1110" },
    { name: "CodeChef", count: 170, color: "var(--accent-tertiary)", profile: "https://www.codechef.com/users/prateek11_10" }
  ];

  return (
    <section className="stats-section" id="stats" ref={containerRef}>
      {/* Watermark head */}
      <div className="section-watermark">06</div>

      <div className="stats-header">
        <div className="section-label">06 — Stats</div>
        <h2 className="stats-title">Competitive Problem Solving</h2>
        <p className="stats-subtitle">
          Over 1,300+ problems solved across major algorithmic programming environments.
        </p>
      </div>

      <div className="stats-dashboard">
        {/* ONE grouped horizontal bar chart comparing problems solved */}
        <div className="stats-chart-card">
          <h4 className="stats-chart-title">Competitive Problem Solving — 1300+ Problems Total</h4>

          <div className="horizontal-bar-chart">
            {codingStats.map((stat, idx) => {
              const maxScale = 700;
              const widthPct = (stat.count / maxScale) * 100;

              return (
                <a key={idx} href={stat.profile} target="_blank" rel="noreferrer" className="bar-row-link">
                  <div className="bar-row">
                    <div className="bar-label">{stat.name}</div>
                    <div className="bar-track-container">
                      <div className="bar-track">
                        <div 
                          className="bar-fill" 
                          style={{ 
                            width: animateBars ? `${widthPct}%` : '0%',
                            background: stat.color
                          }} 
                        />
                      </div>
                    </div>
                    <div className="bar-value font-num" style={{ color: stat.color }}>
                      {stat.count}+
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* TWO-card row for notable achievements below chart */}
        <div className="achievements-row achievements-row--two">
          {/* Card 1: Knight rating speedometer */}
          <div className="achievement-card">
            <h5 className="achievement-title">LeetCode Knight</h5>
            <SpeedometerArc value={1962} max={2500} />
            <p className="achievement-desc">Top 4% globally among active competitors.</p>
          </div>

          {/* Card 2: IIT Jodhpur CGPA progress ring */}
          <div className="achievement-card">
            <h5 className="achievement-title">IIT Jodhpur</h5>
            <CircularRing value={7.63} max={10} />
            <p className="achievement-desc">B.Tech Computer Science (CGPA scale).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
