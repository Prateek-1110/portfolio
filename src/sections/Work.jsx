import './Work.css';

const GitHubIcon = ({ size = 14 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.22 9.2 7.69 10.7.56.1.76-.24.76-.53v-1.85c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.66 2.56 2.04 2.56 2.04 1-.69 1.54-1.48 1.54-1.48-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.52.23 2.64.11 2.92.72.79 1.16 1.79 1.16 3.02 0 4.31-2.64 5.26-5.15 5.54.4.35.76 1.04.76 2.1v3.11c0 .29.2.64.77.53 4.46-1.5 7.68-5.72 7.68-10.7C23.25 5.48 18.27.5 12 .5z" />
  </svg>
);

const ExternalIcon = ({ size = 12 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={14}
    height={14}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const projects = [
    {
    num: '01',
    title: 'AI-Powered Autonomous News Agent',
    desc: 'Built an autonomous news scraping and NLP pipeline processing 5000+ articles/day from 20+ sources with deduplication, AI summarization, classification, SEO optimization, automated publishing, and AI-generated media delivery under 2-minute latency.',
    tags: ['Python', 'Django', 'Web Scrapping', 'NLP'],
    year: '2026',
    live: 'https://prateektech.vercel.app/',
    github: 'https://github.com/Prateek-1110/News_Automation/',
  },
   {
    num: '02',
    title: 'Uber Clone',
    desc: 'Full-stack real-time ride booking app built with Next.js and Firebase. Integrated Mapbox for live location search, secure authentication, and persistent ride tracking across devices.',
    tags: ['Next.js', 'Firebase', 'Mapbox', 'Firestore'],
    year: '2025',
    live: 'https://uber-clone-zeta-neon.vercel.app/',
    github: 'https://github.com/Prateek-1110/Uber_clone',
  },
  {
    num: '03',
    title: 'Traffic Accident Hotspot Analyzer',
    desc: 'Analyzed 3M+ US accident records using DBSCAN clustering for hotspot detection. Built a Django dashboard with Leaflet maps, Chart.js visualizations, and a Random Forest model for risk prediction.',
    tags: ['Python', 'Django', 'DBSCAN', 'Random Forest', 'Folium'],
    year: '2026',
    live: 'https://traffic-analyser.streamlit.app/',
    github: 'https://github.com/Prateek-1110/traffic_analyser',
  },
  {
    num: '04',
    title: 'Urban Luxe',
    desc: 'Scalable MERN e-commerce platform with product catalog, cart, and order workflows. Designed REST APIs and optimized state management using Redux.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
    year: '2025',
    live: 'https://ecommerce-lilac-eight-92.vercel.app/',
    github: 'https://github.com/Prateek-1110/Urban-Luxe',
  },
  {
    num: '05',
    title: ' AI-Powered Oil Spill Detection System',
    desc: 'Developed an AI-powered maritime monitoring system combining AIS anomaly detection, DeepLabV3 semantic segmentation, and SAR-AIS data fusion to detect oil spills with 92% accuracy, reduced false positives by 25%, and enabled scalable real-time monitoring across 1000+ km regions.',
    tags: ['DeeplabV3', 'SAR Imaging', 'AIS Data'],
    year: '2024',
    live: 'https://prateektech.vercel.app/',
    github: 'https://github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/',
  },
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work__header">
        <div className="section-label">03 — Work</div>
        <h2 className="section-title">Selected projects</h2>
        <p className="work__subtitle">
          A curated set of things I've built , ranging from creative experiments to production systems.
        </p>
      </div>

      <div className="work__list">
        {projects.map((p, i) => (
          <div className="project-row" key={i}>
            <div className="project-row__num">{p.num}</div>

            <div className="project-row__main">
              <div className="project-row__top">
                <h3 className="project-row__title">{p.title}</h3>
                <span className="project-row__year">{p.year}</span>
              </div>

              <p className="project-row__desc">{p.desc}</p>

              <div className="project-row__tags">
                {p.tags.map((t, j) => (
                  <span className="project-tag" key={j}>{t}</span>
                ))}
              </div>

              <div className="project-row__links">
                {p.live && p.live !== p.github && (
                  <>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalIcon />
                      Live
                    </a>
                    <span className="link-divider" />
                  </>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <GitHubIcon />
                  GitHub
                </a>
              </div>
            </div>

            <div className="project-row__arrow">↗</div>
          </div>
        ))}
      </div>

      <div className="work__footer">
        <span className="work__footer-text">
          These are just a few highlights —
        </span>
        <a
          href="https://github.com/Prateek-1110"
          target="_blank"
          rel="noopener noreferrer"
          className="work__all"
          data-hover
        >
          Browse all projects <ArrowIcon />
        </a>
      </div>
    </section>
  );
}