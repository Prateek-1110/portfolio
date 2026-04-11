import { useRef } from 'react';
import ParticleSphere from '../components/ParticleSphere';
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
          Full Stack Developer &mdash; delving into Data Science
        </p>

        <p className="hero__sub">
          Building scalable systems and obsessing over clean architecture.
          Specializing in full-stack development, systems design, and
          algorithm optimization &mdash; now pushing into ML and beyond.
        </p>

        <div className="hero__cta">
          <button className="btn btn--dark" onClick={scrollToWork}>
            View my work
          </button>
          <button className="btn btn--outline" onClick={scrollToContact}>
            Get in touch
          </button>
        </div>

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