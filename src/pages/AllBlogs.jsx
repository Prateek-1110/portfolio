// src/pages/AllBlogs.jsx
// Standalone page at /blogs — shows all posts, newest first.
// "Newest first" = reverse of the blogs.js array order
// (since you always add new posts at the END of that array).
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogs } from '../data/blogs';
import './AllBlogs.css';

export default function AllBlogs() {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Newest first — reverse array order (last added = first shown)
  const sorted = [...blogs].reverse();

  return (
    <div className="ab">

      {/* ── Sticky top bar ── */}
      <header className="ab__topbar">
        <button
          className="ab__back-btn"
          onClick={() => navigate({ pathname: '/', hash: 'blogs' })}
          aria-label="Back to portfolio"
        >
          <span className="ab__back-arrow">←</span>
          Back to Portfolio
        </button>

        <span className="ab__post-count">
          {blogs.length} {blogs.length === 1 ? 'post' : 'posts'}
        </span>
      </header>

      {/* ── Page header ── */}
      <main className="ab__main">
        <div className="ab__header">
          <span className="ab__label">Writing</span>
          <h1 className="ab__title">All Posts</h1>
          <p className="ab__subtitle">
            Everything I've written — research, engineering, and reflections.
          </p>
        </div>

        {/* ── Grid of all cards ── */}
        <div className="ab__grid">
          {sorted.map((blog, index) => (
            <article
              key={blog.id}
              className="ab__card"
              onClick={() => navigate(`/blog/${blog.id}`)}
              role="button"
              tabIndex={0}
              aria-label={`Read: ${blog.title}`}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/blog/${blog.id}`)}
            >
              <div className="ab__card-top">
                <span className="ab__card-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="ab__card-badges">
                  <span className="ab__card-tag">{blog.tag}</span>
                  <span className="ab__card-date">{blog.date}</span>
                </div>
              </div>

              <h2 className="ab__card-title">{blog.title}</h2>
              <p className="ab__card-preview">{blog.preview}</p>

              <div className="ab__card-footer">
                <span className="ab__card-readtime">{blog.readTime}</span>
                <span className="ab__card-cta">
                  Read More <span className="ab__card-arrow">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>

    </div>
  );
}