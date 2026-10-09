import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Send, Mail, Sparkles, Terminal, Code2, Cpu, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profilePortrait from '../assets/profile-portrait.jpg';

export default function Hero() {
  const orbitIcons = [
    { icon: <Code2 className="w-5 h-5 text-[#08A9F5]" />, label: "Full-Stack", pos: "top-2 left-4 sm:top-5 sm:left-6" },
    { icon: <Cloud className="w-5 h-5 text-sky-500" />, label: "Cloud", pos: "top-8 -right-2 sm:top-12 sm:-right-1" },
    { icon: <Cpu className="w-5 h-5 text-cyan-500" />, label: "AI / Python", pos: "bottom-14 -left-3 sm:bottom-16 sm:left-2" },
    { icon: <Terminal className="w-5 h-5 text-blue-600" />, label: "Databases & APIs", pos: "bottom-8 right-6 sm:bottom-10 sm:right-8" },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Floating Bokeh / Circles matching design theme */}
      <div className="bokeh-circle w-72 h-72 bg-[#08A9F5]/12 top-12 left-10 animate-float" />
      <div className="bokeh-circle w-96 h-96 bg-[#00D2FF]/10 top-40 right-10 animate-float-reverse" />
      <div className="bokeh-circle w-60 h-60 bg-sky-300/15 -bottom-10 left-1/3 animate-float" />

      {/* Subtle floating background dots */}
      <div className="absolute top-24 left-1/4 w-2.5 h-2.5 rounded-full bg-[#08A9F5]/30 animate-pulse pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-cyan-400/40 pointer-events-none" />
      <div className="absolute bottom-20 left-16 w-3 h-3 rounded-full bg-sky-400/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-[#08A9F5]/30 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#08A9F5]" />
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0B2B52] dark:text-sky-300">
                HELLO, I'M
              </span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-outfit tracking-tight text-[#0B2B52] dark:text-white leading-[1.08]">
              Anusiya <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">R</span>
            </h1>

            {/* Subtitles: CSE Student & Full-Stack Developer */}
            <div className="space-y-1">
              <p className="text-xl sm:text-2xl font-bold text-[#0B2B52] dark:text-slate-100">
                Computer Science & Engineering Student
              </p>
              <p className="text-lg sm:text-xl font-semibold text-[#08A9F5] dark:text-sky-400">
                Full-Stack Developer
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-[#4B6382] dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              "{personalInfo.summary}"
            </p>

            {/* Specialization Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {personalInfo.specializations.map((spec) => (
                <span
                  key={spec}
                  className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/90 dark:bg-slate-800/90 text-[#0B2B52] dark:text-sky-200 border border-sky-100 dark:border-slate-700 shadow-sm"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* View Resume Button */}
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#08A9F5] to-[#00B4D8] hover:from-[#0798dc] hover:to-[#009dc0] shadow-[0_6px_20px_rgba(8,169,245,0.35)] hover:shadow-[0_8px_25px_rgba(8,169,245,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
                title="View Resume in new browser tab"
              >
                <FileText className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View Resume</span>
              </a>

              {/* Download Resume Button */}
              <a
                href="/assets/resume.pdf"
                download="resume.pdf"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-bold text-[#08A9F5] dark:text-sky-300 bg-white/95 dark:bg-slate-800/95 border border-[#08A9F5]/40 hover:bg-[#08A9F5] hover:text-white dark:hover:text-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                title="Download Resume PDF"
              >
                <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-bold text-[#0B2B52] dark:text-white bg-white/90 dark:bg-slate-800/90 border border-sky-200 dark:border-slate-700 hover:border-[#08A9F5] hover:text-[#08A9F5] dark:hover:text-[#38BDF8] shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-[#08A9F5]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B6382] dark:text-slate-400 mr-1">
                Connect:
              </span>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] hover:border-[#08A9F5] hover:shadow-md transition-all duration-200"
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
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] hover:border-[#08A9F5] hover:shadow-md transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {personalInfo.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Anusiya"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] hover:border-[#08A9F5] hover:shadow-md transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Profile Photo in Circular Frame with subtle Cyan Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Outer Subtle Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#08A9F5]/30 to-[#00D2FF]/20 blur-2xl animate-pulse" />
              
              {/* Dotted Orbit Path */}
              <div className="absolute -inset-3 sm:-inset-5 rounded-full border-2 border-dashed border-[#08A9F5]/30 dark:border-[#08A9F5]/20 pointer-events-none" />

              {/* Developer Orbit Floating Badges */}
              {orbitIcons.map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute ${item.pos} z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 dark:bg-slate-800/95 border border-[#08A9F5]/40 shadow-lg flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer animate-float`}
                  style={{ animationDelay: `${idx * 0.9}s` }}
                  title={item.label}
                >
                  {item.icon}
                </div>
              ))}

              {/* Circular Profile Frame with Cyan/Blue Glow and Inner Border */}
              <div className="relative w-full h-full rounded-full p-2.5 sm:p-3 bg-gradient-to-tr from-[#08A9F5] via-[#00D2FF] to-sky-300 shadow-[0_0_40px_rgba(8,169,245,0.4)]">
                <div className="w-full h-full rounded-full p-1.5 bg-white dark:bg-slate-900 overflow-hidden shadow-inner">
                  <img
                    src={profilePortrait}
                    alt="Anusiya R - Computer Science & Engineering Student | Full-Stack Developer"
                    className="w-full h-full object-cover object-center rounded-full transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Bottom Pill: Full-Stack Developer with Live Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 z-30 px-4 sm:px-5 py-2 rounded-full bg-white/95 dark:bg-slate-800/95 border border-[#08A9F5]/35 shadow-[0_8px_25px_rgba(8,169,245,0.2)] flex items-center gap-2.5 whitespace-nowrap backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0B2B52] dark:text-sky-200 tracking-wide">
                  Full-Stack & AI Builder
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
