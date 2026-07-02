import './Footer.css';

const icons = {
  github: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.4 0 12.07c0 5.32 3.44 9.83 8.2 11.42.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.3 3.5 1 .1-.79.42-1.3.77-1.6-2.67-.3-5.47-1.35-5.47-5.98 0-1.32.47-2.4 1.23-3.25-.12-.3-.53-1.53.12-3.2 0 0 1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24.65 1.67.24 2.9.12 3.2.77.85 1.23 1.93 1.23 3.25 0 4.64-2.8 5.67-5.48 5.97.43.38.81 1.12.81 2.25v3.34c0 .32.22.7.83.58A12.06 12.06 0 0 0 24 12.07C24 5.4 18.63 0 12 0z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
    </svg>
  ),
  leetcode: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193a3.095 3.095 0 0 1-.744-2.587 3.21 3.21 0 0 1 .429-1.083l.02-.039 3.855-4.126 3.856-4.126a3.006 3.006 0 0 1 4.204-.038l.02.019 2.01 1.971a1.36 1.36 0 0 0 1.918-.04 1.379 1.379 0 0 0-.04-1.917l-2.01-1.971a5.736 5.736 0 0 0-3.926-1.558zm3.87 9.176a1.377 1.377 0 0 0-1.375 1.375v2.868H5.044a1.377 1.377 0 0 0 0 2.753h12.316a1.377 1.377 0 0 0 1.375-1.375v-4.246a1.377 1.377 0 0 0-1.375-1.375z"/>
    </svg>
  ),
};

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Left Column: Logo + Copyright (Desktop only) */}
        <div className="footer__col footer__col--left">
          <span className="footer__logo" onClick={() => scrollTo('hero')}>
            PA<span>.</span>
          </span>
          <span className="footer__copy footer__copy--desktop">© 2026 Prateek Agrahari</span>
        </div>

        {/* Center Column: Quick Links */}
        <div className="footer__col footer__col--center">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><button onClick={() => scrollTo('about')}>About</button></li>
            <li><button onClick={() => scrollTo('work')}>Work</button></li>
            <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
            <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
          </ul>
        </div>

        {/* Right Column: Connect */}
        <div className="footer__col footer__col--right">
          <h4 className="footer__title">Connect</h4>
          <div className="footer__socials">
            <a href="https://github.com/prateek-1110" target="_blank" rel="noreferrer">
              <span className="footer__social-icon">{icons.github}</span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/prateek1110/" target="_blank" rel="noreferrer">
              <span className="footer__social-icon">{icons.linkedin}</span>
              LinkedIn
            </a>
            <a href="https://leetcode.com/prateekagr-1110/" target="_blank" rel="noreferrer">
              <span className="footer__social-icon">{icons.leetcode}</span>
              LeetCode
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        {/* Mobile only Copyright */}
        <span className="footer__copy footer__copy--mobile">© 2026 Prateek Agrahari</span>
        <p className="footer__human-line">
          Built with React &middot; Fueled by coffee and curiosity
        </p>
      </div>
    </footer>
  );
}