import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, GraduationCap, Code2, FolderGit2, Trophy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profileAbout from '../assets/profile-about.jpg';

const cardIcons = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#08A9F5]" />,
  Code2: <Code2 className="w-5 h-5 text-[#00D2FF]" />,
  FolderGit2: <FolderGit2 className="w-5 h-5 text-sky-500" />,
  Trophy: <Trophy className="w-5 h-5 text-indigo-400" />
};

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Bokeh Elements */}
      <div className="bokeh-circle w-80 h-80 bg-[#08A9F5]/10 top-1/3 -left-20 animate-float-reverse" />
      <div className="bokeh-circle w-96 h-96 bg-cyan-300/10 -bottom-20 right-0 animate-float" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Capsule Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[270px] sm:w-[310px] h-[380px] sm:h-[430px] flex items-center justify-center">
              
              {/* Outer soft glowing rings */}
              <div className="absolute inset-0 rounded-[90px] sm:rounded-[110px] bg-gradient-to-b from-[#08A9F5]/25 via-cyan-300/20 to-transparent blur-xl animate-pulse" />
              <div className="absolute -inset-3 rounded-[100px] sm:rounded-[120px] border-2 border-dashed border-[#08A9F5]/30 pointer-events-none" />

              {/* Capsule Container */}
              <div className="relative w-full h-full rounded-[85px] sm:rounded-[105px] p-2 bg-gradient-to-b from-[#08A9F5] via-[#00D2FF] to-sky-200 shadow-[0_0_35px_rgba(8,169,245,0.35)]">
                <div className="w-full h-full rounded-[80px] sm:rounded-[100px] p-1.5 bg-white dark:bg-slate-900 overflow-hidden shadow-inner">
                  <img
                    src={profileAbout}
                    alt="Anusiya R - Computer Science & Engineering Student"
                    className="w-full h-full object-cover rounded-[75px] sm:rounded-[95px] transition-transform duration-700 hover:scale-105"
                    style={{ objectPosition: 'center center' }}
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating micro-badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-800/95 border border-[#08A9F5]/40 shadow-lg backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-[#0B2B52] dark:text-sky-200">
                  Full-Stack & AI Builder
                </span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: About Details & 4 Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/70 dark:bg-slate-800/70 text-[#08A9F5] dark:text-sky-300 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Overview</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Me</span>
            </h2>

            {/* Content paragraph focused on CSE, Full-Stack, Python, Flask, React.js, JS, SQL, Web apps, AI/Cloud */}
            <p className="text-base sm:text-lg text-[#4B6382] dark:text-slate-300 leading-relaxed">
              {personalInfo.about}
            </p>

            {/* 4 Small Information Cards: CSE Student, Full-Stack Developer, Projects, Hackathons / Technical Activities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {personalInfo.infoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700/80 shadow-[0_4px_16px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/40 hover:shadow-[0_8px_24px_rgba(8,169,245,0.12)] transition-all text-left"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="p-2 rounded-xl bg-sky-50 dark:bg-slate-700/60 border border-sky-100/80 dark:border-slate-600">
                      {cardIcons[card.icon]}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold font-outfit text-[#0B2B52] dark:text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[11px] font-semibold text-[#08A9F5] dark:text-sky-300">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#4B6382] dark:text-slate-300 mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <a
                href="#education"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#08A9F5] hover:text-[#00B4D8] group transition-colors"
              >
                <span>View academic qualifications & education timeline</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
