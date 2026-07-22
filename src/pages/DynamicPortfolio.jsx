import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Github, ExternalLink, Cpu, Layers, Mail, FileText, 
  Award, BookOpen, Send, CheckCircle, RefreshCw,
  Code, Database, Brain, ArrowUpRight, Check, MapPin, Calendar, 
  Menu, X, Sun, Moon, ShieldAlert, CpuIcon, Linkedin
} from 'lucide-react';
import './DynamicPortfolio.css';

// ── Custom CountUp Sub-Component ───────────────────────────
function CountUp({ end, duration = 1200, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;

    function run(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - startValue) + startValue));
      if (progress < 1) {
        requestAnimationFrame(run);
      }
    }

    requestAnimationFrame(run);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// ── Interactive AI Neural Core Canvas ────────────────────────
function NeuralCore({ mouse }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width = (canvas.width = 300);
    let height = (canvas.height = 300);

    const particles = [];
    const coreCount = 18;
    for (let i = 0; i < coreCount; i++) {
      particles.push({
        angle: (Math.PI * 2 * i) / coreCount,
        distance: Math.random() * 40 + 50,
        speed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2.5 + 1.5,
        pulseOffset: Math.random() * Math.PI
      });
    }

    let corePulse = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      corePulse += 0.03;

      // Glow backing
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 110);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0.08)');
      grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 110, 0, Math.PI * 2);
      ctx.fill();

      // Outer rings
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.arc(cx, cy, 95 + Math.sin(corePulse) * 4, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.12)';
      ctx.setLineDash([40, 30]);
      ctx.beginPath();
      ctx.arc(cx, cy, 120 - Math.cos(corePulse) * 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Orbiting particles
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
      particles.forEach((p, idx) => {
        p.angle += p.speed;
        const dist = p.distance + Math.sin(corePulse + p.pulseOffset) * 8;
        const px = cx + Math.cos(p.angle) * dist;
        const py = cy + Math.sin(p.angle) * dist;

        // Draw connections to neighboring core elements
        particles.forEach((p2, idx2) => {
          if (idx !== idx2 && Math.abs(idx - idx2) < 3) {
            const dist2 = p2.distance + Math.sin(corePulse + p2.pulseOffset) * 8;
            const p2x = cx + Math.cos(p2.angle) * dist2;
            const p2y = cy + Math.sin(p2.angle) * dist2;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2x, p2y);
            ctx.stroke();
          }
        });

        // Draw nodes
        ctx.fillStyle = idx % 2 === 0 ? '#00F0FF' : '#39FF14';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central core
      const coreSize = 24 + Math.sin(corePulse * 2) * 2;
      const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, coreSize);
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.3, '#00F0FF');
      coreGrad.addColorStop(0.8, 'rgba(16, 185, 129, 0.6)');
      coreGrad.addColorStop(1, 'transparent');
      
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreSize, 0, Math.PI * 2);
      ctx.fill();

      // Connect nodes to mouse inside neural core box
      if (mouse.x && mouse.y) {
        const rect = canvas.getBoundingClientRect();
        const mx = mouse.x - rect.left;
        const my = mouse.y - rect.top;
        if (mx > 0 && mx < rect.width && my > 0 && my < rect.height) {
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(mx, my);
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(mx, my, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [mouse]);

  return (
    <div className="neural-core-wrapper">
      <NeuralCoreCanvas ref={canvasRef} />
      <div className="neural-core-labels text-xs">
        <span className="core-spec text-cyan">INTELLIGENCE MAP</span>
        <span className="core-spec text-green">COGNITIVE RESONANCE</span>
      </div>
    </div>
  );
}

const NeuralCoreCanvas = React.forwardRef((props, ref) => (
  <canvas ref={ref} className="neural-core-canvas" width="300" height="300" />
));

// ── Interactive Ambient Particle Grid ────────────────────────
function CyberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.5
      });
    }

    let mouse = { x: null, y: null, radius: 180 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = 'rgba(0, 240, 255, 0.2)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / mouse.radius)})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="cyber-canvas" />;
}

// ── Scramble/Decrypt text Effect ─────────────────────────────
function DecryptedText({ text, active = false }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=?';

  useEffect(() => {
    if (!active) {
      setDisplayText(text);
      return;
    }
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "/" || char === "_") return char;
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iterations += 1/3;
      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [text, active]);

  return <span>{displayText}</span>;
}

// ── Typing Loop Hook ───────────────────────────────────────
function useTyping(words, speed = 80, pause = 1500) {
  const [wIdx, setWIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (words.length === 0) return;
    if (subIdx === words[wIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (subIdx === 0 && isDeleting) {
      setIsDeleting(false);
      setWIdx((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIdx, isDeleting, wIdx, words, speed, pause]);

  useEffect(() => {
    setText(words[wIdx].substring(0, subIdx));
  }, [subIdx, wIdx, words]);

  return text;
}

export default function DynamicPortfolioPage() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [liveStats, setLiveStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll Progress State
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scramble trigger
  const [decryptHeader, setDecryptHeader] = useState({});

  // Mouse coords relative to core
  const [mouseCoords, setMouseCoords] = useState({ x: null, y: null });

  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [formStatus, setFormStatus] = useState({ type: null, text: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);

  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Typing Words
  const typingWords = ["Data & ML Engineer", "RAG Systems Builder", "NLP Pipeline Architect", "Agentic AI Developer"];
  const typingText = useTyping(typingWords);

  // Fetch all portfolio data and live stats from API
  useEffect(() => {
    const loadAllData = async () => {
      try {
        const [portfolioRes, statsRes] = await Promise.all([
          axios.get('/api/portfolio-data'),
          axios.get('/api/live-stats')
        ]);
        setPortfolioData(portfolioRes.data);
        setLiveStats(statsRes.data);
      } catch (err) {
        console.error('Failed to load portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };
    loadAllData();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Handle Contact Submit
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMsg) {
      setFormStatus({ type: 'error', text: 'All fields are required.' });
      return;
    }

    setFormSubmitting(true);
    setFormStatus({ type: null, text: '' });

    try {
      const response = await axios.post('/api/contact', {
        name: formName,
        email: formEmail,
        message: formMsg
      });

      if (response.data.success) {
        setFormStatus({ type: 'success', text: response.data.message });
        setFormName('');
        setFormEmail('');
        setFormMsg('');
        
        // Confetti!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.8 },
          colors: ['#00F0FF', '#10B981', '#ffffff']
        });
      } else {
        setFormStatus({ type: 'error', text: 'Server received message but failed to process.' });
      }
    } catch (err) {
      setFormStatus({ type: 'error', text: 'Network error submitting contact request. Try again.' });
    } finally {
      setFormSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkHover = (id) => {
    setDecryptHeader(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setDecryptHeader(prev => ({ ...prev, [id]: false }));
    }, 800);
  };

  // Directly show all projects without category filters
  const filteredProjects = portfolioData?.projects || [];

  if (loading) {
    return (
      <div className="dynamic-loader">
        <div className="loader-bg-overlay" />
        <div className="loader-content-panel">
          <h2 className="loader-title">Preparing Portfolio</h2>
          <div className="loader-bar-container">
            <motion.div 
              className="loader-bar"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
          <span className="loader-subtext">Initializing modules...</span>
        </div>
      </div>
    );
  }

  const { about, experiences, skills, education, resumes, stats } = portfolioData;

  return (
    <div className="dynamic-root" data-theme={theme}>
      {/* Background canvas grid lines */}
      <CyberCanvas />

      {/* Navigation Header */}
      <header className="dynamic-header">
        {/* Scroll progress indicator bar */}
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

        <div 
          className="dynamic-logo font-display" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PRATEEK AGRAHARI<span> // </span>INTENT
        </div>
        
        <nav className="desktop-nav">
          {['about', 'experience', 'projects', 'skills', 'education', 'stats', 'contact'].map((sect) => (
            <button 
              key={sect} 
              onClick={() => scrollToSection(sect)} 
              onMouseEnter={() => handleLinkHover(sect)}
              className="nav-link"
            >
              <DecryptedText text={sect.toUpperCase()} active={decryptHeader[sect]} />
            </button>
          ))}
          <Link to="/static" className="nav-btn">Static Mode</Link>
          
          {/* Theme Control Toggle */}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(prev => !prev)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {['about', 'experience', 'projects', 'skills', 'education', 'stats', 'contact'].map((sect) => (
              <button key={sect} onClick={() => scrollToSection(sect)} className="mobile-link">
                {sect.toUpperCase()}
              </button>
            ))}
            <div className="mobile-menu-footer">
              <Link to="/static" className="mobile-link-btn">Static Mode</Link>
              <button onClick={toggleTheme} className="theme-toggle-btn mobile-theme-btn" aria-label="Toggle theme">
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="dynamic-hero" id="hero">
        <div className="hero-cyber-grid">
          {/* Left panel: Info */}
          <div className="hero-info-panel">
            <h1 className="hero-heading font-display">
              PRATEEK <span className="neon-text text-green">AGRAHARI</span>
            </h1>
            
            <h3 className="hero-typing">
              Specializing in <span className="text-cyan font-bold">"{typingText}"</span>
            </h3>
            
            <p className="hero-subtext">
              {about.tag}. Designing stateful AI architectures, hybrid RAG retrievers, and high-performance ingestion engines.
            </p>

            <div className="hero-ctas">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="cyber-btn btn-primary"
              >
                Explore Creations <ArrowUpRight size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="cyber-btn btn-secondary"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right panel: Core Character AI Node */}
          <div 
            className="hero-avatar-panel"
            onMouseMove={(e) => setMouseCoords({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setMouseCoords({ x: null, y: null })}
          >
            <div className="avatar-frame">
              <h4 className="avatar-title text-green">
                <CpuIcon size={14} className="animate-spin text-green" /> COGNITIVE MAP: SYNCHRONIZED
              </h4>
              <NeuralCore mouse={mouseCoords} />
              <p className="avatar-desc text-xs text-center text-faint">
                Interactive neural core mapping. Drag mouse to connect nodes.
              </p>
            </div>
          </div>
        </div>

        {/* Live Metrics Bar (Aligned with Static Version) */}
        <div className="hero__metrics">
          <div className="hero__metric-item">
            <span className="hero__metric-num text-cyan font-num"><CountUp end={3} suffix="M+" /></span>
            <span className="hero__metric-label">Geospatial Records Ingested (Traffic Hotspots)</span>
          </div>
          <span className="hero__metric-divider">|</span>
          <div className="hero__metric-item">
            <span className="hero__metric-num text-green font-num"><CountUp end={92} suffix="%" /></span>
            <span className="hero__metric-label">Pixel Accuracy (SAR Oil Spill Detection)</span>
          </div>
          <span className="hero__metric-divider">|</span>
          <div className="hero__metric-item">
            <span className="hero__metric-num text-orange font-num"><CountUp end={5} suffix="+" /></span>
            <span className="hero__metric-label">End-to-End AI/Data Pipelines Built</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="dynamic-section" id="about">
        <div className="section-header">
          <span className="section-number text-cyan">01 /</span>
          <h2 
            className="section-title font-display" 
            onMouseEnter={() => handleLinkHover('about-h')}
          >
            <DecryptedText text="CONTEXT ABOUT ME" active={decryptHeader['about-h']} />
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-bio-panel">
            {about.bio.map((para, i) => (
              <p key={i} className="about-paragraph">{para}</p>
            ))}
            <div className="about-bullets">
              <div className="about-bullet">
                <Cpu size={16} className="text-cyan" /> Computational Frameworks: Low-latency execution logic.
              </div>
              <div className="about-bullet">
                <Layers size={16} className="text-green" /> Ingestion Pipelines: Dynamic, reproducible structures.
              </div>
              <div className="about-bullet">
                <Brain size={16} className="text-orange" /> Reasoning Nodes: AST analysis and LangGraph orchestration.
              </div>
            </div>
          </div>
          <div className="about-skills-tagcloud">
            <h4 className="text-green mb-4">Core Competencies:</h4>
            <div className="skill-pills-container">
              {about.skillPills.map((pill, i) => (
                <motion.span 
                  key={i} 
                  className="skill-pill"
                  whileHover={{ scale: 1.06, borderColor: '#00F0FF', boxShadow: '0 0 12px rgba(0, 240, 255, 0.3)' }}
                >
                  <span className="pill-dot bg-cyan" />
                  {pill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="dynamic-section" id="experience">
        <div className="section-header">
          <span className="section-number text-green">02 /</span>
          <h2 
            className="section-title font-display"
            onMouseEnter={() => handleLinkHover('exp-h')}
          >
            <DecryptedText text="JOURNEY & EXPERIENCE" active={decryptHeader['exp-h']} />
          </h2>
        </div>
        
        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              className="timeline-item"
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot" />
                <div className="timeline-connector" />
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="timeline-company text-cyan">{exp.company}</span>
                  <span className="timeline-type">{exp.type}</span>
                  <span className="timeline-duration"><Calendar size={12} /> {exp.duration}</span>
                </div>
                <h3 className="timeline-role font-display">{exp.role}</h3>
                <span className="timeline-location"><MapPin size={12} /> {exp.location}</span>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="dynamic-section" id="projects">
        <div className="section-header">
          <span className="section-number text-orange">03 /</span>
          <h2 
            className="section-title font-display"
            onMouseEnter={() => handleLinkHover('proj-h')}
          >
            <DecryptedText text="SELECTED PROJECTS" active={decryptHeader['proj-h']} />
          </h2>
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {filteredProjects.map((proj, idx) => (
            <motion.div 
              key={idx}
              layoutId={`proj-${proj.num}`}
              className={`project-card ${proj.featured ? 'featured' : ''}`}
              whileHover={{ y: -8, borderColor: '#00F0FF', boxShadow: '0 8px 30px rgba(0, 240, 255, 0.15)' }}
              onClick={() => { setActiveProject(proj); }}
            >
              <div className="project-card-header">
                <span className="project-num text-cyan">{proj.num}</span>
                <span className="project-metric text-green">{proj.metric}</span>
              </div>
              <h3 className="project-card-title font-display">{proj.title}</h3>
              <p className="project-card-desc">{proj.desc}</p>
              
              <div className="project-tags">
                {proj.tags.slice(0, 4).map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-pill">{tag}</span>
                ))}
              </div>

              <div className="project-card-footer text-cyan">
                View Project Details <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div 
                className="modal-container"
                initial={{ scale: 0.93, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.93, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <div className="cyber-badge text-cyan">
                    PROJECT DESIGN // {activeProject.num}
                  </div>
                  <button className="modal-close" onClick={() => { setActiveProject(null); }} aria-label="Close modal"><X size={20} /></button>
                </div>

                <h2 className="modal-title font-display">{activeProject.title}</h2>
                <div className="modal-meta text-faint mb-4">
                  <span>Category: {activeProject.category}</span>
                  <span> | Release Year: {activeProject.year}</span>
                </div>

                <h4 className="text-green mb-2">Abstract:</h4>
                <p className="modal-details">{activeProject.details}</p>

                {/* Call graph visualizer */}
                {activeProject.nodes && (
                  <div className="modal-nodes-visualizer">
                    <h4 className="text-orange mb-3">System Dataflow:</h4>
                    <div className="nodes-flow-container">
                      {activeProject.nodes.map((node, nIdx) => (
                        <React.Fragment key={nIdx}>
                          <div className="flow-node">
                            <span className="flow-node-dot" />
                            {node}
                          </div>
                          {nIdx < activeProject.nodes.length - 1 && (
                            <div className="flow-arrow text-cyan">→</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-tags-container mt-4">
                  <h4 className="text-green mb-2">Technologies Used:</h4>
                  <div className="project-tags">
                    {activeProject.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {activeProject.github && (
                    <a href={activeProject.github} target="_blank" rel="noreferrer" className="modal-btn btn-github">
                      <Github size={16} /> Source Code
                    </a>
                  )}
                  {activeProject.live && (
                    <a href={activeProject.live} target="_blank" rel="noreferrer" className="modal-btn btn-live">
                      <ExternalLink size={16} /> Live Prototype
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Tech Stack Competencies */}
      <section className="dynamic-section" id="skills">
        <div className="section-header">
          <span className="section-number text-cyan">04 /</span>
          <h2 
            className="section-title font-display"
            onMouseEnter={() => handleLinkHover('sk-h')}
          >
            <DecryptedText text="DOMAINS & MEDIUMS" active={decryptHeader['sk-h']} />
          </h2>
        </div>
        
        <div className="skills-grid-layout">
          {skills.map((cat, i) => {
            const catIcons = [
              <Code size={20} className="text-cyan" />,
              <Brain size={20} className="text-green" />,
              <Database size={20} className="text-orange" />,
              <Cpu size={20} className="text-cyan" />
            ];

            return (
              <motion.div 
                key={i}
                className="skills-cat-panel"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="skills-cat-header">
                  {catIcons[i % catIcons.length]}
                  <h3 className="skills-cat-title">{cat.label}</h3>
                </div>
                <div className="skills-cat-list">
                  {cat.skills.map((skill, j) => (
                    <div className="skills-cat-item" key={j}>
                      <span className="item-tick text-green"><Check size={12} /></span>
                      <span className="item-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Education Timeline */}
      <section className="dynamic-section" id="education">
        <div className="section-header">
          <span className="section-number text-green">05 /</span>
          <h2 
            className="section-title font-display"
            onMouseEnter={() => handleLinkHover('edu-h')}
          >
            <DecryptedText text="ACADEMIC FOUNDATIONS" active={decryptHeader['edu-h']} />
          </h2>
        </div>
        
        <div className="edu-timeline-layout">
          {education.map((item, idx) => (
            <motion.div 
              key={idx}
              className="edu-panel"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="edu-panel-header">
                <span className="edu-panel-tag text-green">{item.tag}</span>
                <span className="edu-panel-duration">{item.duration}</span>
              </div>
              <h3 className="edu-panel-degree font-display">{item.degree}</h3>
              <p className="edu-panel-inst text-cyan">{item.institution}</p>
              <span className="edu-panel-grade text-orange">{item.grade}</span>
              <ul className="edu-panel-highlights">
                {item.highlights.map((high, hIdx) => (
                  <li key={hIdx}>{high}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Problem Solving stats dashboard */}
      <section className="dynamic-section" id="stats">
        <div className="section-header">
          <span className="section-number text-orange">06 /</span>
          <h2 
            className="section-title font-display"
            onMouseEnter={() => handleLinkHover('st-h')}
          >
            <DecryptedText text="QUANTIFIABLE METRICS" active={decryptHeader['st-h']} />
          </h2>
        </div>
        
        <div className="stats-dashboard-layout">
          {/* Solving counts progress bars */}
          <div className="problems-chart-panel">
            <h3 className="panel-title text-cyan mb-4">Algorithm Problems Solved (1,300+ Problems)</h3>
            <div className="problems-rows">
              {stats.codingStats.map((stat, i) => {
                const maxVal = 700;
                const widthPct = (stat.count / maxVal) * 100;
                return (
                  <div key={i} className="problems-row-item">
                    <div className="problems-row-info">
                      <span className="row-name">{stat.name}</span>
                      <span className="row-count font-num" style={{ color: stat.color }}>{stat.count}+</span>
                    </div>
                    <div className="progress-track">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${widthPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        style={{ backgroundColor: stat.color }}
                      />
                    </div>
                    <div className="profiles-links mt-2">
                      {stat.profiles.map((p, pIdx) => (
                        <a 
                          key={pIdx} 
                          href={p.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="profile-badge" 
                          style={{ '--badge-color': stat.color }}
                        >
                          {p.label} <ArrowUpRight size={10} />
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievement Speedometers & Rings */}
          <div className="achievements-panel">
            <div className="achieve-item-card">
              <h4 className="achieve-label text-cyan">LeetCode Rating:</h4>
              <div className="achieve-numerical font-display text-green">1962</div>
              <p className="achieve-note">{stats.achievements.leetcodeKnight.desc}</p>
            </div>
            
            <div className="achieve-item-card">
              <h4 className="achieve-label text-orange">Academic Performance (CGPA):</h4>
              <div className="achieve-numerical font-display text-cyan">7.63</div>
              <p className="achieve-note">{stats.achievements.cgpa.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resumes Section */}
      <section className="dynamic-section" id="resumes">
        <div className="section-header">
          <span className="section-number text-cyan">07 /</span>
          <h2 
            className="section-title font-display"
            onMouseEnter={() => handleLinkHover('res-h')}
          >
            <DecryptedText text="ARCHIVED RESUMES" active={decryptHeader['res-h']} />
          </h2>
        </div>
        
        <div className="resume-grid-layout">
          {resumes.map((resume, i) => (
            <motion.div 
              className="dynamic-resume-card" 
              key={i}
              whileHover={{ y: -5, borderColor: '#00F0FF', boxShadow: '0 5px 20px rgba(0, 240, 255, 0.12)' }}
            >
              <div className="resume-card-head">
                <span className="resume-symbol text-green">{resume.icon}</span>
                <span className="resume-label">{resume.label}</span>
              </div>
              <h3 className="resume-role font-display">{resume.role}</h3>
              <div className="resume-tag-pills mt-2 mb-4">
                {resume.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="resume-tag-pill">{tag}</span>
                ))}
              </div>
              <div className="resume-actions">
                <a href={resume.viewUrl} target="_blank" rel="noreferrer" className="resume-btn-link text-cyan">
                  View Resume <ArrowUpRight size={14} />
                </a>
                <a href={resume.downloadUrl} target="_blank" rel="noreferrer" className="resume-btn-link text-green">
                  Download PDF <FileText size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="dynamic-section" id="contact">
        <div className="section-header">
          <span className="section-number text-green">08 /</span>
          <h2 
            className="section-title font-display"
            onMouseEnter={() => handleLinkHover('con-h')}
          >
            <DecryptedText text="INITIATE RESONANCE" active={decryptHeader['con-h']} />
          </h2>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info-panel">
            <h3 className="font-display text-cyan mb-4">Get In Touch</h3>
            <p className="mb-4">
              Send a message to discuss collaborative projects, career opportunities, or systems design. Responses are typically returned within 12 hours.
            </p>
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <Mail size={16} className="text-green" />
                <a href="mailto:prateek.agengg1110@gmail.com" className="contact-link">prateek.agengg1110@gmail.com</a>
              </div>
              <div className="contact-detail-item">
                <Linkedin size={16} className="text-cyan" />
                <a href="https://www.linkedin.com/in/prateek1110/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn Profile</a>
              </div>
              <div className="contact-detail-item">
                <Github size={16} className="text-orange" />
                <a href="https://github.com/prateek-1110" target="_blank" rel="noreferrer" className="contact-link">GitHub Profile</a>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form onSubmit={handleContactSubmit} className="cyber-form">
              <div className="form-group">
                <label>Identity / Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Jane Doe" 
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email / Contact Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. host@domain.com" 
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message / Details</label>
                <textarea 
                  rows="4" 
                  placeholder="Describe your intent..." 
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  required
                />
              </div>

              {formStatus.text && (
                <div className={`form-status ${formStatus.type === 'success' ? 'status-success' : 'status-error'}`}>
                  {formStatus.type === 'success' ? <CheckCircle size={16} /> : <ShieldAlert size={16} />}
                  <span>{formStatus.text}</span>
                </div>
              )}

              <button type="submit" className="cyber-btn btn-primary w-full mt-3" disabled={formSubmitting}>
                {formSubmitting ? (
                  <>Transmitting Message... <RefreshCw size={16} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Cyber Footer */}
      <footer className="dynamic-footer">
        <div className="footer-left">
          © {new Date().getFullYear()} PRATEEK AGRAHARI. DESIGNED & BUILT BY HAND.
        </div>
        <div className="footer-right">
          CURATED DESIGN // ELEGANT IMPLEMENTATION
        </div>
      </footer>
    </div>
  );
}
