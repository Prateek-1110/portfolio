import React, { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CodingProfiles from './components/CodingProfiles'
import Contact from './components/Contact'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [visitCount, setVisitCount] = useState(1)

  // Track page visits locally in browser storage
  useEffect(() => {
    try {
      const storedCount = localStorage.getItem('portfolio_visit_count')
      let newCount = 1
      if (storedCount) {
        newCount = parseInt(storedCount, 10) + 1
      }
      localStorage.setItem('portfolio_visit_count', newCount.toString())
      setVisitCount(newCount)
    } catch (e) {
      console.warn("Storage quota or accessibility error: ", e)
    }
  }, [])

  // Highlight current active section in nav during scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'metrics', 'experience', 'projects', 'skills', 'profiles', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'profiles', label: 'Coding' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-layout">
      {/* 1. Ticker Running Line (Top Header Banner) */}
      <div className="ticker-bar">
        <div className="ticker-wrap">
          <div className="ticker-content">
            <span className="ticker-item">📊 Welcome back! Local Visit Count: <span>{visitCount}</span> times</span>
            <span className="ticker-item">💻 Principal Domain: Data & ML Pipeline Systems Engineering</span>
            <span className="ticker-item">🎓 B.Tech Candidate · IIT Jodhpur</span>
            <span className="ticker-item">🏆 Peak rating: 1962 (Knight Badge) on LeetCode</span>
            <span className="ticker-item">⚡ 3M+ Geospatial Records Ingested & Processed</span>
            <span className="ticker-item">🎯 92% SAR Oil Spill Semantic Segmentation Accuracy</span>
            
            {/* Duplicated content for seamless loops */}
            <span className="ticker-item">📊 Welcome back! Local Visit Count: <span>{visitCount}</span> times</span>
            <span className="ticker-item">💻 Principal Domain: Data & ML Pipeline Systems Engineering</span>
            <span className="ticker-item">🎓 B.Tech Candidate · IIT Jodhpur</span>
            <span className="ticker-item">🏆 Peak rating: 1962 (Knight Badge) on LeetCode</span>
            <span className="ticker-item">⚡ 3M+ Geospatial Records Ingested & Processed</span>
            <span className="ticker-item">🎯 92% SAR Oil Spill Semantic Segmentation Accuracy</span>
          </div>
        </div>
      </div>

      {/* 2. Responsive Navigation Bar */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#about" className="nav-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}>
            <span>Prateek</span>.Agrahari()
          </a>

          <div className="nav-controls">
            {/* Nav Menu Items */}
            <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`nav-link btn-secondary ${activeSection === link.id ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Dark/Light mode theme switch */}
            <ThemeToggle />

            {/* Hamburger icon for mobile view */}
            <button 
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Core Content Sections */}
      <main>
        <Hero />
        <Metrics />
        <Experience />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Contact />
      </main>

      {/* 4. Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <h3>Prateek Agrahari</h3>
            <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>Data & ML Systems Engineer</p>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Prateek Agrahari. Built with React & custom CSS.
          </div>
        </div>
      </footer>
    </div>
  )
}
