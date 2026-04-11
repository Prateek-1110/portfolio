import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

// ── New sections ──────────────────────────────────────────────
import Education from "./sections/Education";
import Stats from "./sections/Stats";
import Resume from "./sections/Resume";

import "./styles/global.css";

function App() {
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
