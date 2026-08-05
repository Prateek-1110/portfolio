import React from 'react'
import { ExternalLink } from './Icons'

// Platforms custom logos (official Simple Icons path coordinates)
const LeetCodeIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color: '#FFA116', flexShrink: 0 }}>
    <path d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.38 2.38c-1.34 1.34-3.535 1.34-4.876 0L5.33 11.758c-1.34-1.34-1.34-3.536 0-4.877L11.53.682a1.38 1.38 0 0 0-.003-1.955a1.37 1.37 0 0 0-1.951 0l-.004.004l-3.328 3.328c-.687.687-1.823.687-2.51 0a1.76 1.76 0 0 1 0-2.51l3.328-3.328C11.594.22 12.535 0 13.483 0z" />
  </svg>
)

const GeeksforGeeksIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color: '#2F8D46', flexShrink: 0 }}>
    <path d="M5.665 5.823c-.667 0-1.247.08-1.741.241-.495.161-.93.356-1.308.583l-.342-.566h-.666l-.075 4.132h.683a11.2 11.2 0 0 1 .433-1.341c.172-.445.394-.842.666-1.192a3.02 3.02 0 0 1 1-.833c.389-.21.855-.316 1.4-.316.594 0 1.124.122 1.59.366.467.24.873.597 1.217 1.075.339.461.6 1.036.783 1.724.184.69.275 1.458.275 2.308 0 .192-.006.38-.017.567H0v.608c.133.016.314.044.541.083.222.033.403.083.542.15a.748.748 0 0 1 .358.358c.067.15.1.328.1.534v.916c0 .666-.003 1.116-.008 1.35a22.14 22.14 0 0 1-.033.574 12.57 12.57 0 0 0 2.207.767 9.138 9.138 0 0 0 2.158.266c.755 0 1.483-.141 2.183-.425a5.46 5.46 0 0 0 1.832-1.208 5.815 5.815 0 0 0 1.258-1.924 6.09 6.09 0 0 0 .389-1.441h.946c.075.511.204.992.389 1.44.31.756.73 1.398 1.258 1.925a5.46 5.46 0 0 0 1.833 1.208c.7.284 1.427.425 2.182.425.705 0 1.425-.089 2.158-.266a12.57 12.57 0 0 0 2.208-.767c-.012-.15-.023-.341-.034-.575a66.751 66.751 0 0 1-.008-1.35v-.915c0-.206.033-.384.1-.534a.748.748 0 0 1 .358-.358c.14-.067.32-.117.542-.15.228-.039.408-.067.541-.083v-.608h-9.563a9.108 9.108 0 0 1-.017-.567c0-.85.092-1.619.275-2.308.183-.688.444-1.263.783-1.724.344-.478.75-.836 1.216-1.075.467-.244.997-.366 1.592-.366.544 0 1.01.105 1.399.316a3.02 3.02 0 0 1 1 .833c.272.35.494.747.666 1.192.144.37.294.848.433 1.341h.683l-.075-4.132h-.666l-.342.566c-.378-.227-.813-.422-1.308-.583-.494-.16-1.074-.241-1.741-.241z" />
  </svg>
)

const CodeforcesIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3z" fill="#318dcd" />
    <path d="M13.5 3A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15C9 3.672 9.673 3 10.5 3h3z" fill="#e22c2a" />
    <path d="M22.5 10.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" fill="#f7cb3e" />
  </svg>
)

const CodeChefIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ color: '#5B4638', flexShrink: 0 }}>
    <path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.153 9.0766.4236 8.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.8925 1.3516 0 .054-.054.1079-.054.1079-.4325.865-.4873 1.73-.325 2.5952.1621.5407.3786 1.0282.5408 1.5148.3785 1.0282.7578 2.0007.92 3.1362.1622.3244.3235.7571.4316 1.1897.2704.8651.542 1.8383 1.353 2.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.9733 1.5673-1.6221 2.865-1.8925.5195-.1093 1.081-.1497 1.6625-.1278a8.7733 8.7733 0 0 1 1.7988.2357c1.4599.3785 2.595 1.1358 2.6492 1.7846.0273.3549.0398.6952.0326 1.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.9733 1.0266-1.8382 1.6213-2.6492.9733-1.3518 1.8928-2.5962 1.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.0428 14.3788a9.8602 9.8602 0 0 0-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.811 1.8925l.0511 1.431c.6672-.3558 1.7326-.8747 3.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.044 1.6075 0 3.2682.5336 4.8767 1.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888zM11.256.0578c.1239-.0034.2538.01.379.0114-.23-.0022-.4588.0026-.6871.0156.103-.0061.2046-.0242.308-.027zm.4983.0156c.6552.014 1.3255.0711 2.0387.1803-.6834-.0987-1.3646-.1671-2.0387-.1803zm-1.3147.0554c-.076.0087-.1527.0133-.2285.0241-.8168.1167-1.7742.7015-2.75 1.045.3545-.1323.7143-.2957 1.0747-.4501C9.0765.4774 9.6705.207 z" />
  </svg>
)

const PROFILES = [
  {
    platform: "Leetcode(knight)",
    icon: <LeetCodeIcon />,
    solved: "500+ problems",
    metric: "Knight Badge",
    percentile: "Top 4% globally among active competitors",
    profiles: [
      {
        name: "LeetCode",
        icon: <LeetCodeIcon size={16} />,
        url: "https://leetcode.com/prateekagr-1110/"
      }
    ]
  },
  {
    platform: "GeeksforGeeks",
    icon: <GeeksforGeeksIcon />,
    solved: "650+ problems",
    metric: "Active contributor",
    percentile: "Algorithmic practice and data structure implementations",
    profiles: [
      {
        name: "GeeksforGeeks",
        icon: <GeeksforGeeksIcon size={16} />,
        url: "https://geeksforgeeks.org/user/prateekagr1110/"
      }
    ]
  },
  {
    platform: "Competitive Programming",
    isMerged: true,
    solved: "300+ problems",
    metric: "Active participant",
    percentile: "Advanced data structures and real-time algorithmic competitions",
    profiles: [
      {
        name: "Codeforces",
        icon: <CodeforcesIcon size={16} />,
        url: "https://codeforces.com/profile/prateek_1110"
      },
      {
        name: "CodeChef",
        icon: <CodeChefIcon size={16} />,
        url: "https://codechef.com/users/prateek11_10"
      }
    ]
  },
  {
    type: "gauge-semi",
    value: "1962",
    label: "LeetCode Knight",
    sublabel: "MAX RATING",
    context: "Top 4% globally among active competitors."
  },
  {
    type: "gauge-full",
    value: "7.63",
    label: "IIT Jodhpur : B.Tech'27",
    sublabel: "CGPA",
    context: "CGPA"
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
        {PROFILES.map((prof, idx) => {
          if (prof.type === 'gauge-semi') {
            return (
              <div className="profile-card gauge-card" key={idx}>
                <div className="gauge-header">{prof.label}</div>
                <div className="gauge-semi-container">
                  <svg viewBox="0 0 100 60" className="gauge-svg">
                    <path 
                      d="M 15 50 A 35 35 0 0 1 85 50" 
                      fill="none" 
                      stroke="var(--border)" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M 15 50 A 35 35 0 0 1 85 50" 
                      fill="none" 
                      stroke="var(--accent)" 
                      strokeWidth="6" 
                      strokeLinecap="round" 
                      strokeDasharray="110" 
                      strokeDashoffset={110 - (110 * 0.70)} 
                    />
                  </svg>
                  <div className="gauge-text-overlay">
                    <span className="gauge-value">{prof.value}</span>
                    <span className="gauge-sublabel">{prof.sublabel}</span>
                  </div>
                </div>
                <div className="gauge-context">{prof.context}</div>
              </div>
            )
          }

          if (prof.type === 'gauge-full') {
            return (
              <div className="profile-card gauge-card" key={idx}>
                <div className="gauge-header">{prof.label}</div>
                <div className="gauge-full-container">
                  <svg viewBox="0 0 100 100" className="gauge-svg-full">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="none" 
                      stroke="var(--border)" 
                      strokeWidth="6" 
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="38" 
                      fill="none" 
                      stroke="var(--accent)" 
                      strokeWidth="6" 
                      strokeDasharray="238.7" 
                      strokeDashoffset={238.7 - (238.7 * 0.763)} 
                      strokeLinecap="round" 
                      transform="rotate(-90 50 50)" 
                    />
                  </svg>
                  <div className="gauge-text-overlay-full">
                    <span className="gauge-value">{prof.value}</span>
                  </div>
                </div>
                <div className="gauge-context">{prof.sublabel}</div>
              </div>
            )
          }

          return (
            <div className="profile-card" key={idx}>
              <div>
                <div className="profile-name">
                  {prof.isMerged ? (
                    <span className="profile-icons-merged">
                      <CodeforcesIcon size={20} />
                      <CodeChefIcon size={20} />
                    </span>
                  ) : (
                    prof.icon
                  )}
                  <span>{prof.platform}</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  {prof.percentile}
                </div>
              </div>

              <div className="profile-stat" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '1rem' }}>
                <div>Solved: <strong>{prof.solved}</strong></div>
              </div>

              <div className="profile-links-grid">
                {prof.profiles.map((sub, sIdx) => (
                  <a 
                    key={sIdx}
                    href={sub.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-sublink"
                  >
                    {sub.icon} {sub.name} <ExternalLink size={12} />
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

