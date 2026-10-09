import React from 'react';
import { motion } from 'framer-motion';
import { techStackList } from '../data/portfolioData';
import { 
  Code2, Coffee, FileCode2, Atom, Flame, 
  Layout, Palette, Wind, Database, Layers, Zap 
} from 'lucide-react';

const iconMap = {
  Code2: <Code2 className="w-4 h-4 text-[#3776AB]" />,
  Coffee: <Coffee className="w-4 h-4 text-[#ED8B00]" />,
  FileCode2: <FileCode2 className="w-4 h-4 text-[#E8BF00]" />,
  Atom: <Atom className="w-4 h-4 text-[#00D2FF]" />,
  Flame: <Flame className="w-4 h-4 text-[#0B2B52] dark:text-sky-300" />,
  Layout: <Layout className="w-4 h-4 text-[#E34F26]" />,
  Palette: <Palette className="w-4 h-4 text-[#1572B6]" />,
  Wind: <Wind className="w-4 h-4 text-[#06B6D4]" />,
  Database: <Database className="w-4 h-4 text-[#08A9F5]" />,
  Layers: <Layers className="w-4 h-4 text-[#4169E1]" />,
  Zap: <Zap className="w-4 h-4 text-[#3ECF8E]" />
};

export default function TechStack() {
  return (
    <section className="relative z-20 -mt-4 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Subtle Section Label */}
        <div className="text-center mb-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B6382] dark:text-slate-400">
            Core Technologies & Tooling
          </span>
        </div>

        {/* Tech Stack Row - Horizontal Scrollable on Mobile, Flex Wrap on Desktop */}
        <div className="flex items-center lg:justify-center gap-3 overflow-x-auto no-scrollbar pb-3 pt-1 px-1">
          {techStackList.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -3, scale: 1.04 }}
              className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700/80 shadow-[0_4px_16px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/50 hover:shadow-[0_6px_20px_rgba(8,169,245,0.15)] transition-all duration-200 cursor-default"
            >
              <span className="w-6 h-6 rounded-full bg-sky-50 dark:bg-slate-700/60 flex items-center justify-center">
                {iconMap[tech.icon] || <Code2 className="w-4 h-4 text-[#08A9F5]" />}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#0B2B52] dark:text-slate-200 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
