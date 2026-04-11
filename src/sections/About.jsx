import './About.css';
import photo from './WhatsApp Image 2026-04-11 at 15.53.26.jpeg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__left">
        <div className="section-label">02 — About</div>

        <div className="about__img-wrap">
          <img
            src={photo}
            alt="Prateek Agrahari"
            className="about__photo"
          />
        </div>

        <h2 className="about__name">Prateek </h2>
        <p className="about__role">Full Stack Developer and ML Enthusiast</p>
      </div>

      <div className="about__right">
        <h3 className="about__title">About</h3>
        <p className="about__body">
          I am a <strong>Full Stack Developer</strong> and an enthusiastic
          Machine Learning learner. I enjoy building scalable applications
          and experimenting with emerging technologies.
        </p>
        <p className="about__body">
          Currently pursuing my passion at the intersection of creative
          technology and engineering. I enjoy working on problems that require
          both analytical thinking and design sensibility.
        </p>
        <p className="about__body">
          When I'm not coding, I play chess, read books, and enjoy quiet time
          exploring new interests.
        </p>

        <div className="about__stats">
          <div className="about__stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects shipped</span>
          </div>
          <div className="about__stat">
            <span className="stat-num">2+</span>
            <span className="stat-label">Years building</span>
          </div>
          <div className="about__stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Coffees consumed</span>
          </div>
        </div>
      </div>
    </section>
  );
}