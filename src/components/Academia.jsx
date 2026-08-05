import React from 'react'

const ACADEMIA_DATA = [
  {
    number: "01",
    status: "Current",
    years: "2023 - 2027 (Expected)",
    degree: "B.Tech, Bioscience & Bioengineering",
    institution: "Indian Institute of Technology Jodhpur",
    score: "CGPA: 7.63 / 10",
    courseworkLabel: "Relevant Coursework:",
    courses: ["Deep Learning", "Machine Learning", "Probability & Statistics", "Data Structures and Algorithms"]
  },
  {
    number: "02",
    status: "Completed",
    years: "2021 - 2022",
    degree: "Senior Secondary (XII), PCM",
    institution: "Maharishi Vidya Mandir, Uttar Pradesh",
    score: "Percentage: 93%",
    courseworkLabel: "Subjects:",
    courses: ["Physics", "Chemistry", "Mathematics"]
  }
]

export default function Academia() {
  return (
    <section id="academia" className="academia-section">
      <div className="about-section-indicator">
        {/* <span className="indicator-number">05</span>
        <span className="indicator-separator">—</span>
        <span className="indicator-text">ACADEMIA</span> */}
      </div>
      
      <h2 className="section-title">Academic Journey</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6', maxWidth: '700px' }}>
        Foundations in engineering, computation, and problem-solving.
      </p>

      <div className="academia-grid">
        {ACADEMIA_DATA.map((item, idx) => (
          <div className="academia-card" key={idx}>
            <span className="academia-number">{item.number}</span>
            
            <div className="academia-header">
              <span className={`academia-status ${item.status.toLowerCase() === 'current' ? 'status-active' : 'status-completed'}`}>
                {item.status.toLowerCase() === 'current' && <span className="academia-pulse-dot"></span>}
                {item.status}
              </span>
              <span className="academia-years">{item.years}</span>
            </div>

            <h3 className="academia-degree">{item.degree}</h3>
            <div className="academia-institution">{item.institution}</div>
            
            <div className="academia-score">
              <strong>{item.score}</strong>
            </div>

            <div className="academia-coursework">
              <span className="coursework-label">{item.courseworkLabel}</span>
              <div className="academia-pills">
                {item.courses.map((course, cIdx) => (
                  <span className="academia-pill" key={cIdx}>{course}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
