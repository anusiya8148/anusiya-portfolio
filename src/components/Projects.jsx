import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Folder, Terminal, Bot, Layout, Award, CheckCircle, Code2, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';

const projectIcons = {
  1: <Bot className="w-5 h-5 text-[#08A9F5]" />,
  2: <Layout className="w-5 h-5 text-[#00D2FF]" />,
  3: <Terminal className="w-5 h-5 text-indigo-500" />,
  4: <Folder className="w-5 h-5 text-teal-500" />,
  5: <Code2 className="w-5 h-5 text-blue-500" />,
  6: <Layout className="w-5 h-5 text-sky-500" />,
  7: <Award className="w-5 h-5 text-amber-500" />,
  8: <CheckCircle className="w-5 h-5 text-emerald-500" />
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Full-Stack', 'Web Applications', 'AI & Productivity'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full-Stack') {
      return project.technologies.some(t => ['Flask', 'SQL', 'PostgreSQL', 'SQLite', 'REST APIs'].includes(t));
    }
    if (activeFilter === 'Web Applications') {
      return project.technologies.some(t => ['React.js', 'JavaScript', 'HTML5'].includes(t));
    }
    if (activeFilter === 'AI & Productivity') {
      return project.technologies.includes('AI') || ['Finora AI', 'StudyFlow', 'To-Do List'].includes(project.title);
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Bokeh */}
      <div className="bokeh-circle w-96 h-96 bg-[#08A9F5]/10 -top-20 left-10 animate-float" />
      <div className="bokeh-circle w-80 h-80 bg-cyan-300/10 bottom-10 right-10 animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/70 dark:bg-slate-800/70 text-[#08A9F5] dark:text-sky-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Projects</span>
          </h2>
          <p className="text-base text-[#4B6382] dark:text-slate-300 mt-3">
            A portfolio of production-ready full-stack applications, productivity tools, and interactive digital experiences.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#08A9F5] text-white shadow-[0_4px_14px_rgba(8,169,245,0.4)]'
                  : 'bg-white/80 dark:bg-slate-800/80 text-[#4B6382] dark:text-slate-300 border border-sky-100 dark:border-slate-700 hover:border-[#08A9F5] hover:text-[#08A9F5]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid: 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white/90 dark:bg-slate-800/90 p-6 sm:p-7 flex flex-col justify-between border border-sky-100/90 dark:border-slate-700/80 hover:border-[#08A9F5]/45 hover:shadow-[0_16px_35px_rgba(8,169,245,0.16)] transition-all group shadow-[0_6px_22px_rgba(8,169,245,0.06)]"
            >
              <div>
                {/* Top Bar: Icon + Featured Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-700/70 border border-sky-100 dark:border-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    {projectIcons[project.id] || <Code2 className="w-5 h-5 text-[#08A9F5]" />}
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#08A9F5]/10 text-[#08A9F5] dark:text-sky-300 border border-[#08A9F5]/30">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold font-outfit text-[#0B2B52] dark:text-white group-hover:text-[#08A9F5] transition-colors">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-semibold text-[#08A9F5] dark:text-sky-300 mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4B6382] dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-sky-50 dark:border-slate-700/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B2B52] dark:text-slate-300 block mb-1">
                    Key Features:
                  </span>
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#4B6382] dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#08A9F5] mt-1.5 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-sky-50 dark:bg-slate-700/50 text-[#0B2B52] dark:text-slate-200 border border-sky-100/80 dark:border-slate-600/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: View Details, GitHub & Live Demo */}
                <div className="pt-4 border-t border-sky-50 dark:border-slate-700/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#08A9F5] bg-[#08A9F5]/10 hover:bg-[#08A9F5] hover:text-white transition-all cursor-pointer"
                  >
                    View Project
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2B52] dark:text-slate-200 hover:text-[#08A9F5] transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#08A9F5] hover:text-[#00B4D8] transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 border border-sky-100 dark:border-slate-700 p-6 sm:p-8 shadow-2xl space-y-5"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-sky-50 dark:bg-slate-800 text-[#0B2B52] dark:text-slate-200 flex items-center justify-center hover:bg-[#08A9F5] hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#08A9F5]">
                  Project Overview
                </span>
                <h3 className="text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-semibold text-[#4B6382] dark:text-slate-400">
                  {selectedProject.tagline}
                </p>
              </div>

              <p className="text-sm text-[#4B6382] dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2B52] dark:text-slate-200 mb-2">
                  Key Technical Features
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#4B6382] dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#08A9F5] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B2B52] dark:text-slate-200 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 dark:bg-slate-800 text-[#08A9F5] dark:text-sky-300 border border-sky-100 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-sky-100 dark:border-slate-800 flex items-center justify-end gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#08A9F5] text-white hover:bg-[#0798dc] flex items-center gap-2 shadow-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
