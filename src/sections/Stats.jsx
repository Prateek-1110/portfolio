import React, { useState } from "react";
import "./Stats.css";

const statsData = [
  {
    platform: "LeetCode",
    handle: "prateekagr_1110",
    profileUrl: "https://leetcode.com/prateekagr-1110/",
    color: "#ffa116", // Gold
    solved: 500,
    metricLabel: "Max. Rating",
    metricValue: "1962 (Knight)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.8a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    )
  },
  {
    platform: "GeeksforGeeks",
    handle: "prateekagr1110",
    profileUrl: "https://www.geeksforgeeks.org/user/prateekagr1110/",
    color: "#2f8d46", // Green
    solved: 650,
    metricLabel: "Overall Score",
    metricValue: "2130",
    icon: (
      <img
        src="https://media.geeksforgeeks.org/gfg-gg-logo.svg"
        alt="GeeksforGeeks"
        width="18"
        height="18"
      />
    )
  },
  {
    platform: "CodeChef",
    handle: "prateek11_10",
    profileUrl: "https://www.codechef.com/users/prateek11_10",
    color: "#a05a2c", // Brown
    solved: 170,
    metricLabel: "Max. Rating",
    metricValue: "1553",
    icon: (
      <img
        src="https://cdn.codechef.com/images/cc-logo.svg"
        alt="CodeChef"
        width="18"
        height="18"
      />
    )
  }
];

export default function Stats() {
  const [hoveredBar, setHoveredBar] = useState(null);

  // Math dimensions for the SVG bar chart
  const height = 185;
  const width = 420;
  const maxSolved = 700; // max scale boundary

  return (
    <section className="stats-section" id="stats">
      <div className="stats-header">
        <div className="section-label">06 — Stats</div>
        <h2 className="stats-title">Coding Profiles</h2>
        <p className="stats-subtitle">
          Grouped performance comparison and problem-solving analytics across competitive platforms.
        </p>
      </div>

      <div className="stats-dashboard">
        <div className="stats-chart-card">
          <h4 className="stats-chart-title">Problems Solved Comparison</h4>
          
          <div className="stats-chart-wrap">
            <svg viewBox={`0 0 ${width} ${height}`} className="stats-svg-chart" style={{ width: "100%", height: "auto" }}>
              {/* Horizontal background scale grid lines */}
              {[150, 300, 450, 600].map((level, idx) => {
                const y = height - 30 - (level / maxSolved) * (height - 50);
                return (
                  <g key={idx}>
                    <line
                      x1="45"
                      y1={y}
                      x2={width - 20}
                      y2={y}
                      stroke="var(--border)"
                      strokeWidth="0.8"
                      strokeDasharray="3,3"
                    />
                    <text
                      x="35"
                      y={y + 3}
                      textAnchor="end"
                      fill="var(--text-faint)"
                      style={{ fontSize: "8px", fontFamily: "var(--font-body)" }}
                    >
                      {level}
                    </text>
                  </g>
                );
              })}

              {/* Bar groupings */}
              {statsData.map((item, idx) => {
                const barWidth = 45;
                const spacing = 110;
                const x = 70 + idx * spacing;
                const barHeight = (item.solved / maxSolved) * (height - 50);
                const y = height - 30 - barHeight;
                const isHovered = hoveredBar === idx;

                return (
                  <g
                    key={idx}
                    onMouseEnter={() => setHoveredBar(idx)}
                    onMouseLeave={() => setHoveredBar(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Shadow bar for background interaction */}
                    <rect
                      x={x - 10}
                      y="15"
                      width={barWidth + 20}
                      height={height - 45}
                      fill="transparent"
                    />
                    {/* Glowing background column */}
                    <rect
                      x={x}
                      y={y}
                      width={barWidth}
                      height={barHeight}
                      rx="4"
                      fill={item.color}
                      fillOpacity={isHovered ? "0.85" : "0.75"}
                      style={{
                        transition: "fill-opacity 0.2s, y 0.3s, height 0.3s, filter 0.3s",
                        filter: isHovered ? `drop-shadow(0 0 8px ${item.color})` : "none"
                      }}
                    />
                    {/* Value text above bar */}
                    <text
                      x={x + barWidth / 2}
                      y={y - 8}
                      textAnchor="middle"
                      fill={isHovered ? "var(--text)" : "var(--text-muted)"}
                      style={{
                        fontSize: "9.5px",
                        fontFamily: "var(--font-display)",
                        fontWeight: "700",
                        transition: "fill 0.2s"
                      }}
                    >
                      {item.solved}+
                    </text>
                    {/* Platform label at bottom */}
                    <text
                      x={x + barWidth / 2}
                      y={height - 12}
                      textAnchor="middle"
                      fill={isHovered ? "var(--text)" : "var(--text-muted)"}
                      style={{
                        fontSize: "9px",
                        fontFamily: "var(--font-body)",
                        fontWeight: "600",
                        transition: "fill 0.2s"
                      }}
                    >
                      {item.platform}
                    </text>
                  </g>
                );
              })}
              
              {/* Bottom solid base line */}
              <line
                x1="45"
                y1={height - 30}
                x2={width - 20}
                y2={height - 30}
                stroke="var(--border)"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>

        <div className="stats-details-list">
          {statsData.map((item, idx) => {
            const isHovered = hoveredBar === idx;
            return (
              <div
                key={idx}
                className={`stats-detail-card ${isHovered ? "active" : ""}`}
                style={{ borderColor: isHovered ? item.color : "var(--border)" }}
                onMouseEnter={() => setHoveredBar(idx)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="stats-detail-card__header">
                  <span className="stats-detail-icon" style={{ color: item.color }}>{item.icon}</span>
                  <h3 className="stats-detail-name">{item.platform}</h3>
                  <a
                    href={item.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stats-detail-link"
                    style={{ color: item.color }}
                  >
                    Verify Profile ↗
                  </a>
                </div>
                <div className="stats-detail-row">
                  <span className="stats-detail-label">Handle:</span>
                  <span className="stats-detail-val">@{item.handle}</span>
                </div>
                <div className="stats-detail-row">
                  <span className="stats-detail-label">{item.metricLabel}:</span>
                  <span className="stats-detail-val highlight-val">{item.metricValue}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
