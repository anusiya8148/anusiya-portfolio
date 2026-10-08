import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="relative pt-16 pb-12 overflow-hidden border-t border-sky-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-sky-100/80 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-1.5">
            <a href="#home" className="inline-block text-2xl font-extrabold font-outfit text-[#0B2B52] dark:text-white">
              Anusiya <span className="text-[#08A9F5]">R</span>
            </a>
            <p className="text-sm font-semibold text-[#08A9F5] dark:text-sky-300">
              Full-Stack Developer | CSE Student
            </p>
            <p className="text-xs text-[#4B6382] dark:text-slate-400">
              C.K. College of Engineering and Technology (2024–2028)
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] hover:border-[#08A9F5] hover:shadow-md transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] hover:border-[#08A9F5] hover:shadow-md transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Anusiya"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] hover:border-[#08A9F5] hover:shadow-md transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

        {/* Quick Links Navigation */}
        <div className="py-6 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-[#4B6382] dark:text-slate-400 hover:text-[#08A9F5] dark:hover:text-[#38BDF8] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4B6382] dark:text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 Anusiya R. All rights reserved. Built with React & Tailwind CSS.
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] hover:border-[#08A9F5] transition-all group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
