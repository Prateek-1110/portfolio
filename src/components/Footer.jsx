import './Footer.css';

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Left Column: Logo + Copyright */}
        <div className="footer__col footer__col--left">
          <span className="footer__logo" onClick={() => scrollTo('hero')}>
            PA<span>.</span>
          </span>
          <span className="footer__copy">© 2026 Prateek Agrahari</span>
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

        {/* Right Column: Socials */}
        <div className="footer__col footer__col--right">
          <h4 className="footer__title">Connect</h4>
          <div className="footer__socials">
            <a href="https://github.com/prateek-1110" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/prateek1110/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://medium.com/@prateekagr_1110" target="_blank" rel="noreferrer">Medium</a>
            <a href="https://leetcode.com/prateekagr-1110/" target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__human-line">
          Built with React &middot; Designed with intent &middot; Fueled by coffee and curiosity
        </p>
      </div>
    </footer>
  );
}
