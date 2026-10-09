import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';

export default function ResumeCTA() {
  const highlights = [
    "B.E. Computer Science & Engineering (2024–2028) • 8.81 CGPA",
    "Hands-on Full-Stack Development with Python, Flask, React.js, and SQL",
    "NPTEL Elite Certifications in Cloud Computing & Java",
    "Industry Internships at VirtualWorks Lab, Thiranex, and Codomax",
    "National Hackathon & Technical Conference Participant"
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-sky-500/10 via-[#08A9F5]/15 to-cyan-400/10 dark:from-slate-800/90 dark:via-slate-800/95 dark:to-slate-800/90 border-2 border-[#08A9F5]/30 shadow-[0_12px_40px_rgba(8,169,245,0.12)] backdrop-blur-xl"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-1/4 w-60 h-60 bg-[#08A9F5]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Key Points */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 dark:bg-slate-700/80 text-[#08A9F5] dark:text-sky-300 text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Recruiter & Reviewer Quick Access</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight">
                Looking for a dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Full-Stack Developer?</span>
              </h2>

              <p className="text-sm sm:text-base text-[#4B6382] dark:text-slate-300 leading-relaxed">
                Download my comprehensive verified resume covering academic coursework, internships, full-stack projects, competitive hackathons, and certifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-left">
                {highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-[#0B2B52] dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#08A9F5] flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: CTA Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center items-center lg:items-end">
              {/* Primary Download Button */}
              <a
                href="/assets/resume.pdf"
                download="resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#08A9F5] to-[#00B4D8] hover:from-[#0798dc] hover:to-[#009dc0] shadow-[0_6px_22px_rgba(8,169,245,0.4)] hover:shadow-[0_8px_28px_rgba(8,169,245,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* View in New Tab Button */}
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#0B2B52] dark:text-white bg-white/90 dark:bg-slate-700/80 border border-sky-200 dark:border-slate-600 hover:border-[#08A9F5] hover:text-[#08A9F5] shadow-xs hover:shadow-md transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-[#08A9F5]" />
                <span>View Resume PDF</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <span className="text-[11px] text-[#4B6382] dark:text-slate-400 font-medium text-center">
                PDF format • Verified Resume Source
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
