import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "B.Tech, Bioscience & Bioengineering",
    institution: "Indian Institute of Technology Jodhpur",
    duration: "2023 - 2027(expected)",
    grade: "CGPA: 7.63 / 10",
    highlights: [
      "Specializing in Machine Learning , Deep learning",
      "Coursework: Deep Learning , Machine Learning , Probability & Statistics , Data Structures and Algorithms",
    ],
    logo: "01",
    tag: "Current",
  },
  {
    degree: "Senior Secondary (XII), PCM",
    institution: "Maharishi Vidya Mandir, Uttar Pradesh",
    duration: "2021 - 2022",
    grade: "Percentage: 93%",
    highlights: [
      "Physics , Chemistry , Mathematics" 
      ],
    logo: "02",
    tag: "Completed",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="edu-header">
        <div className="section-label">04 - Education</div>
        <h2 className="edu-title">Academic journey</h2>
        <p className="edu-subtitle">
          Foundations in engineering, computation, and problem-solving.
        </p>
      </div>

      <div className="edu-timeline">
        {educationData.map((item, index) => (
          <div className="edu-card" key={index}>
            <div className="edu-card-left">
              <div className="edu-icon">{item.logo}</div>
              <div className="edu-line" />
            </div>

            <div className="edu-card-right">
              <div className="edu-meta">
                <span className="edu-tag">{item.tag}</span>
                <span className="edu-duration">{item.duration}</span>
              </div>
              <h3 className="edu-degree">{item.degree}</h3>
              <p className="edu-institution">{item.institution}</p>
              <p className="edu-grade">{item.grade}</p>
              <ul className="edu-highlights">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
