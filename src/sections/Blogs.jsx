// src/sections/Blogs.jsx
import { useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './Blogs.css';

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <section className="blogs" id="blogs">
      <div className="blogs__inner">

        <div className="blogs__header">
          <span className="blogs__label">06 — Blog</span>
          <h2 className="blogs__title">
            Thoughts &amp; <em>Writing</em>
          </h2>
          <p className="blogs__subtitle">
            Things I've learned, built, and broken — written down so I don't forget.
          </p>
        </div>

        <div className="blogs__grid">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              onClick={() => navigate(`/blog/${blog.id}`)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function BlogCard({ blog, index, onClick }) {
  return (
    <article
      className="blog-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Read: ${blog.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="blog-card__top">
        <span className="blog-card__number">{String(index + 1).padStart(2, '0')}</span>
        <div className="blog-card__badges">
          <span className="blog-card__tag">{blog.tag}</span>
          <span className="blog-card__date">{blog.date}</span>
        </div>
      </div>

      <h3 className="blog-card__title">{blog.title}</h3>

      <p className="blog-card__preview">{blog.preview}</p>

      <div className="blog-card__footer">
        <span className="blog-card__read-time">{blog.readTime}</span>
        <span className="blog-card__cta">
          Read More <span className="blog-card__arrow">→</span>
        </span>
      </div>
    </article>
  );
}