import React from "react";
import "./Stats.css";

const statsData = [
  {
    platform: "LeetCode",
    handle: "prateekagr_1110", // replace with your handle
    profileUrl: "https://leetcode.com/prateekagr-1110/", // replace
    stats: [
      { label: "Problems Solved", value: "400+" },
      { label: "Contest Rating", value: "1602" },
      // { label: "Global Rank", value: "Top --%" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.8a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    platform: "Codeforces",
    handle: "prateek_1110", // replace
    profileUrl: "https://codeforces.com/profile/prateek_1110", // replace
    stats: [
      // { label: "Rating", value: "--" },
      // { label: "Rank", value: "--" },
      { label: "Problems Solved", value: "175+" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
  {
    platform: "GeeksforGeeks",
    handle: "prateekagr1110", // replace
    profileUrl: "https://www.geeksforgeeks.org/user/prateekagr1110/", // replace
    stats: [
      { label: "Problems Solved", value: "650+" },
      { label: "Score", value: "2130" },
      // { label: "Institute Rank", value: "--" },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116 0 3.74 3.74 0 0 1-1.106-.695 3.517 3.517 0 0 1 0-5.12 3.74 3.74 0 0 1 1.106-.695 4.51 4.51 0 0 1 3.116 0c.42.16.8.395 1.104.695.23.213.422.465.565.745H24a5.96 5.96 0 0 0-.398-1.098 5.666 5.666 0 0 0-.863-1.224 5.965 5.965 0 0 0-1.353-1.012 6.01 6.01 0 0 0-1.764-.591V6h-1.545v1.56a6.01 6.01 0 0 0-1.764.59 5.965 5.965 0 0 0-1.353 1.013 5.666 5.666 0 0 0-.863 1.224A5.977 5.977 0 0 0 13.5 12a5.977 5.977 0 0 0 .547 2.613 5.666 5.666 0 0 0 .863 1.224 5.965 5.965 0 0 0 1.353 1.012 6.01 6.01 0 0 0 1.764.591V19h1.545v-1.56a6.01 6.01 0 0 0 1.764-.59 5.965 5.965 0 0 0 1.353-1.013c.344-.37.636-.79.863-1.224A5.96 5.96 0 0 0 24 13.5h-2.55zM2.55 14.315c.143.28.334.532.565.745.304.3.684.535 1.104.695a4.51 4.51 0 0 0 3.116 0c.42-.16.8-.395 1.106-.695a3.517 3.517 0 0 0 0-5.12 3.74 3.74 0 0 0-1.106-.695 4.51 4.51 0 0 0-3.116 0 3.691 3.691 0 0 0-1.104.695c-.23.213-.422.465-.565.745H0a5.96 5.96 0 0 1 .398-1.098c.227-.434.52-.854.863-1.224a5.965 5.965 0 0 1 1.353-1.012 6.01 6.01 0 0 1 1.764-.591V6H5.92v1.56a6.01 6.01 0 0 1 1.764.59 5.965 5.965 0 0 1 1.353 1.013 5.666 5.666 0 0 1 .863 1.224A5.977 5.977 0 0 1 10.5 12a5.977 5.977 0 0 1-.547 2.613 5.666 5.666 0 0 1-.863 1.224 5.965 5.965 0 0 1-1.353 1.012 6.01 6.01 0 0 1-1.764.591V19H4.378v-1.56a6.01 6.01 0 0 1-1.764-.59 5.965 5.965 0 0 1-1.353-1.013 5.666 5.666 0 0 1-.863-1.224A5.96 5.96 0 0 1 0 13.5h2.55z" />
      </svg>
    ),
  },
];

const Stats = () => {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-header">
        <div className="section-label">05 - Stats</div>
        <h2 className="stats-title">Coding Profiles</h2>
        <p className="stats-subtitle">
          Snapshot of my problem-solving activity across major platforms.
        </p>
      </div>

      <div className="stats-grid">
        {statsData.map((platform, index) => (
          <div className="stats-card" key={index}>
            <div className="stats-card-header">
              <div className="stats-platform-icon">
                {platform.icon}
              </div>
              <div className="stats-platform-info">
                <h3 className="stats-platform-name">{platform.platform}</h3>
                <span className="stats-handle">@{platform.handle}</span>
              </div>
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="stats-visit-btn"
              >
                Visit
              </a>
            </div>

            <div className="stats-numbers">
              {platform.stats.map((stat, i) => (
                <div className="stats-number-item" key={i}>
                  <span className="stats-value">{stat.value}</span>
                  <span className="stats-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
