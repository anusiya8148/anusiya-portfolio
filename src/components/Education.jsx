import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { educationData, keyStrengths } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-20 overflow-hidden">
      {/* Background Bokeh */}
      <div className="bokeh-circle w-72 h-72 bg-[#08A9F5]/10 top-10 right-10 animate-float" />
      <div className="bokeh-circle w-64 h-64 bg-cyan-300/10 bottom-10 left-10 animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/70 dark:bg-slate-800/70 text-[#08A9F5] dark:text-sky-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Qualifications</span>
          </h2>
          <p className="text-base text-[#4B6382] dark:text-slate-300 mt-3">
            Solid foundations in Computer Science and Engineering accompanied by proven academic excellence.
          </p>
        </div>

        {/* 2-Column Grid: Education Timeline on Left (7 cols), Strengths on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Education Vertical Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#08A9F5] to-cyan-400 text-white shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                Education Timeline
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#08A9F5]/35 dark:border-[#08A9F5]/25 space-y-8">
              {educationData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Pin */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-2.5 w-6 h-6 rounded-full border-4 transition-transform group-hover:scale-125 ${
                      item.featured
                        ? 'bg-[#08A9F5] border-white dark:border-slate-900 shadow-[0_0_16px_rgba(8,169,245,0.8)]'
                        : 'bg-white dark:bg-slate-900 border-[#08A9F5] shadow-[0_0_10px_rgba(8,169,245,0.4)]'
                    }`}
                  />

                  {/* Education Card (B.E. visually highlighted) */}
                  <div
                    className={`p-6 rounded-3xl transition-all ${
                      item.featured
                        ? 'bg-gradient-to-br from-white via-sky-50/60 to-white dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-800 border-2 border-[#08A9F5] shadow-[0_12px_32px_rgba(8,169,245,0.18)] dark:shadow-[0_12px_32px_rgba(8,169,245,0.12)] relative overflow-hidden'
                        : 'bg-white/90 dark:bg-slate-800/90 border border-sky-100/90 dark:border-slate-700/80 shadow-[0_6px_20px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/40 hover:shadow-[0_12px_28px_rgba(8,169,245,0.12)]'
                    }`}
                  >
                    {item.featured && (
                      <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-[#08A9F5] to-cyan-400 text-white text-[11px] font-bold rounded-bl-xl shadow-sm tracking-wider uppercase">
                        Current Degree • Highlighted
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#08A9F5]/10 text-[#08A9F5] dark:text-sky-300 border border-[#08A9F5]/25 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span
                        className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                          item.featured
                            ? 'bg-emerald-500 text-white shadow-sm'
                            : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                        }`}
                      >
                        {item.highlight}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-semibold text-[#08A9F5] dark:text-sky-300 mt-1">
                      {item.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-[#4B6382] dark:text-slate-300 mt-2 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Key Strengths & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-white/95 dark:bg-slate-800/95 border border-sky-100 dark:border-slate-700 shadow-[0_12px_35px_rgba(8,169,245,0.08)]">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#08A9F5] to-cyan-400 text-white shadow-md">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                    Core Strengths
                  </h3>
                  <p className="text-xs text-[#4B6382] dark:text-slate-400">
                    Values & mindset brought to every project
                  </p>
                </div>
              </div>

              {/* Strengths List */}
              <div className="space-y-3.5">
                {keyStrengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-sky-50/50 dark:bg-slate-700/40 border border-sky-100/60 dark:border-slate-600/50 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#08A9F5] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0B2B52] dark:text-slate-100">
                        {strength.title}
                      </h4>
                      <p className="text-xs text-[#4B6382] dark:text-slate-300 mt-0.5 leading-relaxed">
                        {strength.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Card */}
              <div className="mt-6 pt-5 border-t border-sky-100 dark:border-slate-700 text-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#08A9F5] dark:text-sky-300">
                  Continuous Learner & Aspiring Engineer
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
