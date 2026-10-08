import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Send } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pb-2 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'glass-pill shadow-[0_10px_30px_rgba(8,169,245,0.12)] border border-white/70 dark:border-white/10 backdrop-blur-xl'
            : 'bg-white/80 dark:bg-slate-900/80 border border-white/60 dark:border-white/10 backdrop-blur-md shadow-sm'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-0.5 font-outfit text-xl sm:text-2xl font-bold tracking-tight text-[#0B2B52] dark:text-white group"
        >
          <span>Portfolio</span>
          <span className="text-[#08A9F5] transition-transform duration-300 group-hover:scale-125">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#08A9F5] bg-[#08A9F5]/10 dark:bg-[#08A9F5]/20 font-bold'
                    : 'text-[#4B6382] dark:text-slate-300 hover:text-[#08A9F5] dark:hover:text-[#38BDF8] hover:bg-sky-50/60 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-[#08A9F5] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume link button */}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#08A9F5]/10 text-[#08A9F5] dark:text-sky-300 border border-[#08A9F5]/30 hover:bg-[#08A9F5] hover:text-white transition-all duration-200"
            title="View Resume in new tab"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#0B2B52] dark:text-sky-300 bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:border-[#08A9F5] hover:text-[#08A9F5] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#08A9F5]/50 cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-[#0B2B52] transition-transform duration-300" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#0B2B52] dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/60 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto xl:hidden fixed inset-x-4 top-20 rounded-3xl glass-panel p-5 shadow-2xl border border-white/90 dark:border-slate-700/80 z-50 animate-in fade-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#08A9F5] text-white'
                      : 'text-[#0B2B52] dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3">
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold bg-[#08A9F5] text-white flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                View Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold border border-[#08A9F5] text-[#08A9F5] dark:text-sky-300 flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
