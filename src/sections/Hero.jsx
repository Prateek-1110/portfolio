import { useRef } from 'react';
import ParticleSphere from '../components/ParticleSphere';
import HeroTerminal from '../components/HeroTerminal';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  const scrollToWork = () =>
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <ParticleSphere heroRef={heroRef} />

      <div className="hero__inner hero__inner--centered">
        <div className="hero__tag">
          <span className="hero__tag-line" />
          <span>IIT Jodhpur &nbsp;·&nbsp; B.Tech 2027</span>
        </div>

        <h1 className="hero__title">
          Prateek<br />
          <em>Agrahari</em>
        </h1>

        <p className="hero__role">
          Data &amp; ML Engineer
        </p>

        <p className="hero__sub">
          Building high-performance retrieval systems, scalable data pipelines, and applied ML models<span className="hero__sub-desktop"> &mdash; with a strong focus on software architecture and systems engineering.</span>
        </p>

        <div className="hero__cta">
          <button className="btn btn--dark" onClick={scrollToWork}>
            View my work
          </button>
          <button className="btn btn--outline" onClick={scrollToContact}>
            Get in touch
          </button>
        </div>

        <HeroTerminal />

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      <div className="hero__index">
        <span>01</span>
        <span className="hero__index-label">Intro</span>
      </div>
    </section>
  );
}