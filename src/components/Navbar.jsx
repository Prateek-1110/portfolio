import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => scrollTo('hero')}>
        PA<span>.</span>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {['about', 'work', 'skills', 'education', 'stats', 'resume', 'contact'].map((id) => (
          <li key={id}>
            <button onClick={() => scrollTo(id)} className="navbar__link">
              {id}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={`navbar__burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
      </button>
    </nav>
  );
}
