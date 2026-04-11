import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span className="footer__logo">PA<span>.</span></span>
        <span className="footer__copy">© 2026 Prateek Agrahari. All rights reserved.</span>
      </div>
      <div className="footer__right">
        <span>Built with React</span>
        <span className="footer__dot" />
        <span>Designed with care</span>
      </div>
    </footer>
  );
}
