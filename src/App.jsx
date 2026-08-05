import React, { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import CodingProfiles from './components/CodingProfiles'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Highlight current active section in nav & calculate scroll progress during scrolling
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const percent = (window.scrollY / scrollHeight) * 100
        setScrollProgress(percent)
      } else {
        setScrollProgress(0)
      }

      // 2. Active Section Highlight
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'profiles', 'resume', 'contact']
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
    handleScroll() // Initialize on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'profiles', label: 'Coding' },
    { id: 'resume', label: 'Resume' },
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
      {/* 1. Responsive Fixed Navigation Bar with Scroll Progress Indicator */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <span>P.A</span>
          </a>

          <div className="nav-controls">
            {/* Nav Menu Items */}
            <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
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
        {/* Horizontal scroll progress bar */}
        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>
      </header>

      {/* 2. Core Content Sections */}
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>

      {/* 3. Footer */}
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
