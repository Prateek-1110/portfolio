// src/pages/BlogDetail.jsx
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './BlogDetail.css';

function MediumIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = blogs.findIndex((b) => b.id === parseInt(id, 10));
  const blog = blogs[currentIndex];
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const handleBack = () => {
    navigate({ pathname: '/', hash: '#blogs' });
  };

  if (!blog) {
    return (
      <div className="bd">
        <div className="bd__topbar">
          <button className="bd__back-btn" onClick={handleBack}>
            ← Back to Portfolio
          </button>
        </div>
        <div className="bd__not-found">
          <p>Blog post not found.</p>
          <button className="bd__back-btn" onClick={handleBack} style={{ marginTop: 24 }}>
            ← Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bd">

      {/* ── Sticky top bar ── */}
      <header className="bd__topbar">
        <button className="bd__back-btn" onClick={handleBack} aria-label="Back to portfolio">
          <span className="bd__back-arrow">←</span>
          Back to Portfolio
        </button>
      </header>

      {/* ── Main content ── */}
      <main className="bd__main">
        <article className="bd__article">

          {/* Title */}
          <h1 className="bd__title">{blog.title}</h1>

          {/* Divider */}
          <div className="bd__rule" aria-hidden />

          {/* Description */}
          <p className="bd__description">{blog.description}</p>

          {/* Read on Medium button */}
          {blog.mediumUrl && (
            <a
              className="bd__medium-btn"
              href={blog.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read this post on Medium"
            >
              <MediumIcon size={16} />
              <span>Read on Medium</span>
              <span className="bd__medium-arrow">↗</span>
            </a>
          )}

          {/* Bottom divider */}
          <div className="bd__rule" aria-hidden />

        </article>

        {/* ── Prev / Next navigation ── */}
        <nav className="bd__nav" aria-label="Blog navigation">
          <div className="bd__nav-slot bd__nav-slot--left">
            {prevBlog && (
              <button
                className="bd__nav-card"
                onClick={() => navigate(`/blog/${prevBlog.id}`)}
              >
                <span className="bd__nav-dir">← Previous</span>
                <span className="bd__nav-title">{prevBlog.title}</span>
              </button>
            )}
          </div>

          <div className="bd__nav-slot bd__nav-slot--right">
            {nextBlog && (
              <button
                className="bd__nav-card bd__nav-card--right"
                onClick={() => navigate(`/blog/${nextBlog.id}`)}
              >
                <span className="bd__nav-dir">Next →</span>
                <span className="bd__nav-title">{nextBlog.title}</span>
              </button>
            )}
          </div>
        </nav>

      </main>
    </div>
  );
}