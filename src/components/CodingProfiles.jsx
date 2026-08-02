import React from 'react'
import { ExternalLink } from './Icons'

const PROFILES = [
  {
    platform: "LeetCode (Knight Badge)",
    solved: "500+ problems",
    metric: "Peak Rating: 1962",
    percentile: "Top 4% globally among active competitors",
    url: "https://leetcode.com/prateekagr-1110/"
  },
  {
    platform: "GeeksforGeeks",
    solved: "650+ problems",
    metric: "Active profile",
    percentile: "Algorithmic practice and data structure implementations",
    url: "https://geeksforgeeks.org/user/prateekagr1110/"
  },
  {
    platform: "Codeforces",
    solved: "Competitive problems",
    metric: "Active participant",
    percentile: "Advanced data structures and real-time algorithmic competitions",
    url: "https://codeforces.com/profile/prateek_1110"
  },
  {
    platform: "CodeChef",
    solved: "Competitive problems",
    metric: "Active participant",
    percentile: "Combined CP problem count is over 300+ problems",
    url: "https://codechef.com/users/prateek11_10"
  }
]

export default function CodingProfiles() {
  return (
    <section id="profiles">
      <h2 className="section-title">Algorithmic Problem Solving</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6', maxWidth: '700px' }}>
        A solid foundation in computer science theory is key to building systems that scale. I have solved <strong>1,300+ algorithmic problems</strong> across major competitive programming platforms.
      </p>
      
      <div className="profiles-grid">
        {PROFILES.map((prof, idx) => (
          <div className="profile-card" key={idx}>
            <div>
              <div className="profile-name">{prof.platform}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{prof.percentile}</div>
            </div>

            <div className="profile-stat" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div>Solved: <strong>{prof.solved}</strong></div>
              <div>Status/Rating: <strong>{prof.metric}</strong></div>
            </div>

            <a 
              href={prof.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link" 
              style={{ width: 'fit-content' }}
            >
              View Profile <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
