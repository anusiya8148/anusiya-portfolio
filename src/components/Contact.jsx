import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please type a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS environment variables are configured
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS environment variables:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
      });
      setIsSubmitting(false);
      setSubmitError('Unable to send your message: Missing EmailJS configuration.');
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      const currentName = formData.name.trim();
      setSubmittedName(currentName);

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 75,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#08A9F5', '#00D2FF', '#38BDF8', '#4169E1'],
          });
        } catch {
          // fallback
        }
      }, 400);
    } catch (err) {
      console.error('error.status:', err?.status);
      console.error('error.text:', err?.text);
      console.error('error:', err);
      setIsSubmitting(false);
      setSubmitError(
        err?.text
          ? `Unable to send your message: ${err.text}`
          : 'Unable to send your message. Please try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitError('');
    setSubmitted(false);
    setSubmittedName('');
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Bokeh */}
      <div className="bokeh-circle w-96 h-96 bg-[#08A9F5]/10 -top-20 right-0 animate-float" />
      <div className="bokeh-circle w-80 h-80 bg-cyan-300/10 bottom-0 left-10 animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>{personalInfo.statusBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-[#0B2B52] dark:text-white tracking-tight leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#08A9F5] to-[#00D2FF]">Me</span>
          </h2>
          <p className="text-base text-[#4B6382] dark:text-slate-300 mt-3">
            Feel free to reach out for software engineering opportunities, internships, hackathons, or project collaborations.
          </p>
        </div>

        {/* 2 Column Layout: Contact Channels & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Contact Information (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="group p-5 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700/80 shadow-[0_6px_20px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_12px_28px_rgba(8,169,245,0.14)] transition-all flex items-center gap-4 block"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 flex items-center justify-center text-[#08A9F5] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4B6382] dark:text-slate-400">
                    Email
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0B2B52] dark:text-white truncate group-hover:text-[#08A9F5] transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>
            )}

            {/* LinkedIn Card */}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700/80 shadow-[0_6px_20px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_12px_28px_rgba(8,169,245,0.14)] transition-all flex items-center gap-4 block"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 flex items-center justify-center text-[#08A9F5] group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4B6382] dark:text-slate-400">
                    LinkedIn
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0B2B52] dark:text-white truncate group-hover:text-[#08A9F5] transition-colors">
                    linkedin.com/in/anusiya-r-7a6b26337
                  </p>
                </div>
              </a>
            )}

            {/* GitHub Card */}
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-3xl bg-white/90 dark:bg-slate-800/90 border border-sky-100 dark:border-slate-700/80 shadow-[0_6px_20px_rgba(8,169,245,0.06)] hover:border-[#08A9F5]/45 hover:shadow-[0_12px_28px_rgba(8,169,245,0.14)] transition-all flex items-center gap-4 block"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-slate-700/60 border border-sky-100 dark:border-slate-600 flex items-center justify-center text-[#0B2B52] dark:text-slate-200 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4B6382] dark:text-slate-400">
                    GitHub
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0B2B52] dark:text-white truncate group-hover:text-[#08A9F5] transition-colors">
                    github.com/anusiya8148
                  </p>
                </div>
              </a>
            )}

            {/* Quick Note Card */}
            <div className="p-6 rounded-3xl bg-sky-50/70 dark:bg-slate-800/60 border border-sky-100 dark:border-slate-700 text-xs text-[#4B6382] dark:text-slate-300 leading-relaxed space-y-2">
              <span className="font-bold text-[#0B2B52] dark:text-white block text-sm">
                Recruiter & Team Inquiries
              </span>
              <p>
                I am actively seeking software engineering internships and entry-level full-stack positions where I can contribute to meaningful applications.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-white/95 dark:bg-slate-800/95 border border-sky-100 dark:border-slate-700 shadow-[0_12px_35px_rgba(8,169,245,0.08)]">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-400 text-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                    Thank You, {submittedName || 'there'}!
                  </h3>
                  <p className="text-sm text-[#4B6382] dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been sent successfully. You can also send this message directly to <span className="font-semibold text-[#08A9F5]">{personalInfo.email}</span> with one click below.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href="mailto:anusiya8148@gmail.com"
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#08A9F5] text-white hover:bg-[#0798dc] transition-all inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full text-xs font-bold border border-sky-200 dark:border-slate-700 text-[#0B2B52] dark:text-slate-200 hover:border-[#08A9F5] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold font-outfit text-[#0B2B52] dark:text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-[#4B6382] dark:text-slate-400 mt-1">
                      Fill out the fields below to get in touch directly.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#0B2B52] dark:text-slate-300 mb-1.5">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-2xl bg-sky-50/50 dark:bg-slate-900/60 border ${
                        errors.name
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-sky-100 dark:border-slate-700 focus:border-[#08A9F5] focus:ring-[#08A9F5]'
                      } text-[#0B2B52] dark:text-white text-sm outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#0B2B52] dark:text-slate-300 mb-1.5">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-2xl bg-sky-50/50 dark:bg-slate-900/60 border ${
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-sky-100 dark:border-slate-700 focus:border-[#08A9F5] focus:ring-[#08A9F5]'
                      } text-[#0B2B52] dark:text-white text-sm outline-none focus:ring-2 focus:ring-opacity-20 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#0B2B52] dark:text-slate-300 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-2xl bg-sky-50/50 dark:bg-slate-900/60 border ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-400'
                          : 'border-sky-100 dark:border-slate-700 focus:border-[#08A9F5] focus:ring-[#08A9F5]'
                      } text-[#0B2B52] dark:text-white text-sm outline-none focus:ring-2 focus:ring-opacity-20 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error Alert */}
                  {submitError && (
                    <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-2 animate-in fade-in duration-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#08A9F5] to-[#00B4D8] hover:from-[#0798dc] hover:to-[#009dc0] shadow-[0_6px_20px_rgba(8,169,245,0.35)] hover:shadow-[0_8px_25px_rgba(8,169,245,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
