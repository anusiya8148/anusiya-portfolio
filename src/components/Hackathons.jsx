import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Presentation, Sparkles } from 'lucide-react';
import { hackathonsList, technicalEventsList } from '../data/portfolioData';

export default function Hackathons() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'hackathons' | 'events'

  return (
    <section id="hackathons" className="relative py-20 overflow-hidden">
      {/* Background Bokeh */}
      <div className="bokeh-circle w-72 h-72 bg-[#08A9F5]/10 top-1/3 -left-20 animate-float" />
      <div className="bokeh-circle w-80 h-80 bg-sky-300/10 bottom-0 right-10 animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/70 dark:bg-slate-800/70 text-[#08A9F5] dark:text-sky-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitions & Technical Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
            Hackathons & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Technical Activities</span>
          </h2>
          <p className="text-base text-[#4B6382] dark:text-slate-300 mt-3">
            Active participation across national hackathons, technical conferences, and hands-on developer training programmes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#08A9F5] text-white shadow-[0_4px_14px_rgba(8,169,245,0.4)]'
                : 'bg-white/80 dark:bg-slate-800/80 text-[#4B6382] dark:text-slate-300 border border-sky-100 dark:border-slate-700 hover:border-[#08A9F5]'
            }`}
          >
            All Activities ({hackathonsList.length + technicalEventsList.length})
          </button>
          <button
            onClick={() => setActiveTab('hackathons')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'hackathons'
                ? 'bg-[#08A9F5] text-white shadow-[0_4px_14px_rgba(8,169,245,0.4)]'
                : 'bg-white/80 dark:bg-slate-800/80 text-[#4B6382] dark:text-slate-300 border border-sky-100 dark:border-slate-700 hover:border-[#08A9F5]'
            }`}
          >
            Hackathons ({hackathonsList.length})
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'events'
                ? 'bg-[#08A9F5] text-white shadow-[0_4px_14px_rgba(8,169,245,0.4)]'
                : 'bg-white/80 dark:bg-slate-800/80 text-[#4B6382] dark:text-slate-300 border border-sky-100 dark:border-slate-700 hover:border-[#08A9F5]'
            }`}
          >
            Technical Events / Conferences ({technicalEventsList.length})
          </button>
        </div>

        {/* 1. HACKATHONS SUB-SECTION */}
        {(activeTab === 'all' || activeTab === 'hackathons') && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#08A9F5] to-cyan-400 text-white shadow-md">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                  Hackathons
                </h3>
                <p className="text-xs text-[#4B6382] dark:text-slate-400">
                  Competitive hackathons, timed innovation sprints, and algorithmic challenges
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hackathonsList.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100/90 dark:border-slate-700/80 shadow-[0_6px_20px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_12px_28px_rgba(8,169,245,0.14)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#08A9F5]/10 text-[#08A9F5] dark:text-sky-300 border border-[#08A9F5]/25">
                        {item.category}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {item.recognition}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-outfit text-[#0B2B52] dark:text-white group-hover:text-[#08A9F5] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#08A9F5] dark:text-sky-300 mt-0.5">
                      {item.organizer}
                    </p>

                    <p className="text-xs sm:text-sm text-[#4B6382] dark:text-slate-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-sky-50 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-[#4B6382] dark:text-slate-400">
                    <span className="font-semibold text-[#0B2B52] dark:text-slate-300">{item.role}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 2. TECHNICAL EVENTS / CONFERENCES SUB-SECTION */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-400 to-sky-500 text-white shadow-md">
                <Presentation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                  Technical Events / Conferences
                </h3>
                <p className="text-xs text-[#4B6382] dark:text-slate-400">
                  National technical conferences, Short Term Training Programmes (STTPs), and industry sessions
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalEventsList.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100/90 dark:border-slate-700/80 shadow-[0_6px_20px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_12px_28px_rgba(8,169,245,0.14)] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-slate-700/80 text-[#08A9F5] dark:text-sky-300 border border-[#08A9F5]/25">
                        {item.type}
                      </span>
                      <span className="text-xs font-semibold text-[#4B6382] dark:text-slate-400">
                        {item.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-outfit text-[#0B2B52] dark:text-white group-hover:text-[#08A9F5] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-[#08A9F5] dark:text-sky-300 mt-0.5">
                      {item.organizer}
                    </p>

                    <p className="text-xs sm:text-sm text-[#4B6382] dark:text-slate-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-sky-50 dark:border-slate-700/60 flex items-center justify-between text-[11px] text-[#4B6382] dark:text-slate-400">
                    <span>Verified Academic Participation</span>
                    <span className="w-2 h-2 rounded-full bg-[#08A9F5]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
