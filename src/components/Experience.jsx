import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Award, Sparkles, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background Bokeh */}
      <div className="bokeh-circle w-80 h-80 bg-[#08A9F5]/10 top-1/4 right-0 animate-float" />
      <div className="bokeh-circle w-72 h-72 bg-sky-300/10 bottom-10 left-10 animate-float-reverse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/70 dark:bg-slate-800/70 text-[#08A9F5] dark:text-sky-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
            Internships & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Experience</span>
          </h2>
          <p className="text-base text-[#4B6382] dark:text-slate-300 mt-3">
            Real-world full-stack development internships and industry-guided technical masterclasses.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#08A9F5]/35 dark:border-[#08A9F5]/25 space-y-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Timeline Pin with Glowing Cyan Border */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-2.5 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-4 border-[#08A9F5] shadow-[0_0_14px_rgba(8,169,245,0.6)] group-hover:scale-125 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#08A9F5]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100/90 dark:border-slate-700/80 shadow-[0_6px_22px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_14px_32px_rgba(8,169,245,0.14)] transition-all">
                
                {/* Header Row: Organization & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#08A9F5]" />
                    <span className="text-sm font-bold text-[#08A9F5] dark:text-sky-300">
                      {exp.company}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-slate-700/80 text-[#08A9F5] dark:text-sky-300 border border-[#08A9F5]/30 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {exp.badge}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                  {exp.role}
                </h3>

                {/* Duration & Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#4B6382] dark:text-slate-400 mt-1 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#08A9F5]" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00D2FF]" />
                    {exp.duration}
                  </span>
                </div>

                {/* Responsibilities */}
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2B52] dark:text-slate-300">
                    Responsibilities & Deliverables:
                  </span>
                  <p className="text-xs sm:text-sm text-[#4B6382] dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-sky-50 dark:border-slate-700/60">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-50/80 dark:bg-slate-700/60 text-[#0B2B52] dark:text-slate-200 border border-sky-100 dark:border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
