// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Stats from "./sections/Stats";
import Resume from "./sections/Resume";
import Blogs from "./sections/Blogs";          // ← new
import BlogDetail from "./pages/BlogDetail";    // ← new
import AllBlogs from "./pages/AllBlogs";
import "./styles/global.css";

// ── Main portfolio page ─────────────────────────────────────
// Handles hash-based scroll when navigating back from a blog post
function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        // Small delay lets the page fully render before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Education />
        <Stats />
        <Resume />
        <Blogs />     {/* ← add this */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// ── App with routing ────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<MainPage />} />
        <Route path="/blogs"     element={<AllBlogs />} />
        <Route path="/blog/:id"  element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;