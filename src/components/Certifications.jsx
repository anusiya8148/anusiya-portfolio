import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Code2, Sparkles, Brain, FileCode, ShieldCheck, Layers, Terminal, Globe, Calendar, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

const certIcons = {
  Cloud: <Cloud className="w-5 h-5 text-[#08A9F5]" />,
  Code2: <Code2 className="w-5 h-5 text-[#ED8B00]" />,
  Terminal: <Terminal className="w-5 h-5 text-[#3776AB]" />,
  Globe: <Globe className="w-5 h-5 text-[#00D2FF]" />,
  Award: <Award className="w-5 h-5 text-amber-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-500" />,
  Brain: <Brain className="w-5 h-5 text-sky-400" />,
  FileCode: <FileCode className="w-5 h-5 text-blue-500" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
  Layers: <Layers className="w-5 h-5 text-indigo-400" />
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 overflow-hidden">
      {/* Background Bokeh */}
      <div className="bokeh-circle w-80 h-80 bg-cyan-300/10 top-10 left-10 animate-float" />
      <div className="bokeh-circle w-72 h-72 bg-[#08A9F5]/10 bottom-10 right-10 animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/70 dark:bg-slate-800/70 text-[#08A9F5] dark:text-sky-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Training</span>
          </h2>
          <p className="text-base text-[#4B6382] dark:text-slate-300 mt-3">
            Industry and academic certifications spanning Cloud Computing, Java, Web Development, and Generative AI.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100/90 dark:border-slate-700/80 shadow-[0_6px_20px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_12px_28px_rgba(8,169,245,0.14)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Provider and Icon */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 flex items-center justify-center shadow-xs">
                    {certIcons[cert.icon] || <Award className="w-5 h-5 text-[#08A9F5]" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#08A9F5]/10 text-[#08A9F5] dark:text-sky-300 border border-[#08A9F5]/25">
                    {cert.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold font-outfit text-[#0B2B52] dark:text-white leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs sm:text-sm font-semibold text-[#08A9F5] dark:text-sky-300 mt-1">
                  {cert.issuer}
                </p>
              </div>

              {/* Date / Period Footer */}
              <div className="mt-5 pt-3 border-t border-sky-50 dark:border-slate-700/60 flex items-center justify-between text-xs text-[#4B6382] dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#08A9F5]" />
                  {cert.period}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
