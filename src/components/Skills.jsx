import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Globe, Database, Cloud, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  Terminal: <Terminal className="w-5 h-5 text-[#08A9F5]" />,
  Globe: <Globe className="w-5 h-5 text-[#00D2FF]" />,
  Database: <Database className="w-5 h-5 text-sky-500" />,
  Wrench: <Wrench className="w-5 h-5 text-teal-500" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Bokeh */}
      <div className="bokeh-circle w-80 h-80 bg-[#08A9F5]/10 top-1/2 -right-20 animate-float" />
      <div className="bokeh-circle w-72 h-72 bg-sky-200/20 bottom-10 left-10 animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/70 dark:bg-slate-800/70 text-[#08A9F5] dark:text-sky-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Skills</span>
          </h2>
          <p className="text-base text-[#4B6382] dark:text-slate-300 mt-3">
            Comprehensive skill set spanning programming, full-stack web development, databases, developer tooling, and interpersonal strengths.
          </p>
        </div>

        {/* 6 Categorized Skill Cards in a Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100/90 dark:border-slate-700/80 shadow-[0_6px_22px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_12px_28px_rgba(8,169,245,0.12)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon + Category Name */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-slate-700/60 flex items-center justify-center border border-sky-100 dark:border-slate-600 shadow-sm">
                    {categoryIcons[cat.icon] || <Sparkles className="w-5 h-5 text-[#08A9F5]" />}
                  </div>
                  <h3 className="text-base font-extrabold font-outfit tracking-wide text-[#0B2B52] dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50/70 dark:bg-slate-700/50 text-[#0B2B52] dark:text-slate-200 border border-sky-100 dark:border-slate-600/70 hover:bg-[#08A9F5] hover:text-white dark:hover:bg-[#08A9F5] dark:hover:text-white hover:border-[#08A9F5] transition-all cursor-default shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-3 border-t border-sky-50 dark:border-slate-700/50 flex items-center justify-between text-[11px] text-[#4B6382] dark:text-slate-400 font-medium">
                <span>{cat.skills.length} skills listed</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#08A9F5]" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
