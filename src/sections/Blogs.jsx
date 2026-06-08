// src/sections/Blogs.jsx
// Shows only the LATEST blog post on the main portfolio page.
// "Latest" = the last entry in blogs.js (always add new blogs at the END of that array).
// "View all posts" navigates to /blogs (separate page with full grid).
import { useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './Blogs.css';

export default function Blogs() {
  const navigate = useNavigate();
  const latest = blogs[blogs.length - 1]; // last in array = most recently added

  return (
    <section className="blogs" id="blogs">
      <div className="blogs__inner">

        <div className="blogs__header">
          <div className="blogs__title-row">
            <div>
              <span className="blogs__label">06 — Blog</span>
              <h2 className="blogs__title">Thoughts &amp; <em>Writing</em></h2>
            </div>

            <button
              className="blogs__view-all"
              onClick={() => navigate('/blogs')}
              aria-label="View all blog posts"
            >
              View all posts
              <span className="blogs__view-arrow">→</span>
            </button>
          </div>

          <p className="blogs__subtitle">
            Things I've learned, built, and broken — written down so I don't forget.
          </p>
        </div>

        {/* Single featured card — only the latest post */}
        <article
          className="blog-card blog-card--featured"
          onClick={() => navigate(`/blog/${latest.id}`)}
          role="button"
          tabIndex={0}
          aria-label={`Read: ${latest.title}`}
          onKeyDown={(e) => e.key === 'Enter' && navigate(`/blog/${latest.id}`)}
        >
          <div className="blog-card__top">
            <span className="blog-card__number blog-card__number--latest">Latest</span>
            <div className="blog-card__badges">
              <span className="blog-card__tag">{latest.tag}</span>
              <span className="blog-card__date">{latest.date}</span>
            </div>
          </div>

          <h3 className="blog-card__title">{latest.title}</h3>
          <p className="blog-card__preview">{latest.preview}</p>

          <div className="blog-card__footer">
            <span className="blog-card__read-time">{latest.readTime}</span>
            <span className="blog-card__cta">
              Read More <span className="blog-card__arrow">→</span>
            </span>
          </div>
        </article>

      </div>
    </section>
  );
}