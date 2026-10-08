import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Hackathons from './components/Hackathons';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('anusiya_portfolio_theme');
    if (saved) return saved === 'dark';
    return false; // Default light theme: white + very light blue background
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('anusiya_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('anusiya_portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#EEF9FF] dark:bg-[#071325] text-[#0B2B52] dark:text-[#F1F5F9] transition-colors duration-300 relative selection:bg-[#08A9F5]/20 selection:text-[#08A9F5]">
      {/* Background Subtle Gradient & Global Bokeh Highlights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-200/30 to-cyan-200/20 blur-[90px] dark:opacity-10" />
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#08A9F5]/15 to-transparent blur-[110px] dark:opacity-10" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-cyan-300/15 to-sky-100/10 blur-[100px] dark:opacity-10" />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main>
          <Hero />
          <TechStack />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Hackathons />
          <ResumeCTA />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
