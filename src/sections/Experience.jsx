import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "AI Evaluation Engineer",
    company: "AfterQuery Experts",
    type: "Part-time",
    duration: "Apr 2026 - Jun 2026 · 3 mos",
    location: "Remote",
    bullets: [
      "Designed and validated SWE-bench-style software engineering tasks by reproducing real-world bugs, developing automated test harnesses, and creating reference implementations against private code repositories.",
      "Evaluated AI coding agents through machine-verifiable benchmarks, ensuring task correctness, reproducibility, and alignment with realistic software development workflows."
    ]
  },
  {
    role: "Algorithm Developer Intern",
    company: "Ready 2 Go Logistics Services",
    type: "Internship",
    duration: "May 2025 - Jul 2025 · 3 mos",
    location: "Gurugram, Haryana, India · Remote",
    bullets: [
      "Optimized routing algorithms on large-scale logistics datasets (1M+ records), identifying performance bottlenecks that improved delivery efficiency by 25% and reduced average transit time by 18%.",
      "Worked as an Algorithm developer for enhancing routing services for faster and better carriage of Logistics."
    ]
  },
  {
    role: "Undergraduate Research Assistant",
    company: "School of Management and Entrepreneurship, IIT Jodhpur",
    type: "Full-time",
    duration: "Jan 2025 - Apr 2025 · 4 mos",
    location: "Jodhpur, Rajasthan, India · On-site",
    bullets: [
      "Developed a speaker-diarized NLP pipeline to process 40+ hours of raw field interviews from 30+ unique sources using PyTorch and pyannote.audio, enabling fully automated speaker segmentation and identification.",
      "Engineered a GPU-accelerated inference workflow on Google Colab by managing 5+ critical dependencies (Torch 2.4.1, Pyannote 3.3.1), processing 1,500+ minutes of audio with zero environment conflicts.",
      "Integrated an automated Neural Machine Translation (NMT) layer using deep-translator to generate a real-time Hindi-English parallel corpus, reducing qualitative analysis time by 60%.",
      "Achieved 95% transcription accuracy through a hybrid preprocessing pipeline using Librosa, Noisereduce, and AI-driven dynamic slicing for multi-speaker overlap resolution.",
      "Automated documentation and dataset preparation workflows using Pandas and Pydub, reducing manual transcription effort by 80% and delivering structured speaker-labeled datasets for downstream analysis."
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      {/* Background watermark */}
      <div className="section-watermark">03</div>

      <div className="experience__header">
        <span className="section-label">03 — Experience</span>
        <h2 className="experience__title">Work Experience</h2>
      </div>

      <div className="experience__timeline">
        {experiences.map((exp, idx) => (
          <div className="experience__item" key={idx}>
            <div className="experience__meta">
              <div className="experience__company-wrap">
                <span className="experience__company">{exp.company}</span>
                <span className="experience__type">{exp.type}</span>
              </div>
              <span className="experience__duration">{exp.duration}</span>
              <span className="experience__location">{exp.location}</span>
            </div>

            <div className="experience__card">
              <div className="experience__card-bullet" />
              <h3 className="experience__role">{exp.role}</h3>
              <ul className="experience__bullets">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
