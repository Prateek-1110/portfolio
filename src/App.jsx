import React from "react";

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
import Experience from "./sections/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicPortfolioPage from "./pages/DynamicPortfolio";
import "./styles/global.css";

// ── Main portfolio page ─────────────────────────────────────
function MainPage() {
  return (
    <>
      <Navbar />
      <div className="ambient-background">
        <div className="ambient-blob ambient-blob--1" />
        <div className="ambient-blob ambient-blob--2" />
        <div className="ambient-blob ambient-blob--3" />
        <div className="grid-overlay" />
      </div>
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Stats />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// ── App ─────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DynamicPortfolioPage />} />
        <Route path="/static" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
