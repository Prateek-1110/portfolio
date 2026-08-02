import React from 'react'

const EXPERIENCE = [
  {
    role: "AI Evaluation Engineer (Part-time)",
    company: "AfterQuery Experts",
    duration: "Apr 2026 - Jun 2026 (3 months)",
    location: "Remote",
    achievements: [
      "Designed and validated SWE-bench-style software engineering tasks by reproducing real-world bugs, developing automated test harnesses, and creating reference implementations against private code repositories.",
      "Evaluated AI coding agents through machine-verifiable benchmarks, ensuring task correctness, reproducibility, and alignment with realistic software development workflows."
    ]
  },
  {
    role: "Algorithm Developer Intern",
    company: "Ready 2 Go Logistics Services",
    duration: "May 2025 - Jul 2025 (3 months)",
    location: "Gurugram, Haryana, India (Remote)",
    achievements: [
      "Optimized routing algorithms on large-scale logistics datasets (1M+ records), identifying performance bottlenecks that improved delivery efficiency by 25% and reduced average transit time by 18%.",
      "Enhanced core routing services for faster and more efficient carriage of logistics."
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    company: "School of Management and Entrepreneurship, IIT Jodhpur",
    duration: "Jan 2025 - Apr 2025 (4 months)",
    location: "Jodhpur, Rajasthan, India (On-site)",
    achievements: [
      "Developed a speaker-diarized NLP pipeline processing 40+ hours of raw audio (1,500+ minutes) across 30+ unique sources using PyTorch, pyannote.audio, and Librosa, achieving 95% transcription accuracy.",
      "Engineered a GPU-accelerated inference workflow with an automated Neural Machine Translation (NMT) layer, reducing manual transcription effort by 80% and qualitative analysis time by 60%."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {EXPERIENCE.map((item, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-marker"></div>
            <div className="timeline-header">
              <div className="timeline-role">{item.role}</div>
              <div className="timeline-company">{item.company}</div>
              <div className="timeline-duration">{item.duration} | {item.location}</div>
            </div>
            <ul className="timeline-achievements">
              {item.achievements.map((ach, achIdx) => (
                <li key={achIdx}>{ach}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
