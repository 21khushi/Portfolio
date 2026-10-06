'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import BackToHome from '@/components/ui/BackToHome';
import Button from '@/components/ui/Button';
import { api } from '@/lib/api';
import AiHelpMeWrite from '@/components/contact/AiHelpMeWrite';
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Loader2,
  CheckCircle2,
  MapPin,
  Clock,
} from 'lucide-react';

const CONTACT_LINKS = [
  {
    href: 'mailto:gunnusikka21@gmail.com',
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'gunnusikka21@gmail.com',
    external: false,
    hoverColor: '#7B6EF6',
  },
  {
    href: 'https://www.linkedin.com/in/khushi-sikka-bb8997262/',
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'khushi-sikka-bb8997262',
    external: true,
    hoverColor: '#0A66C2',
  },
  {
    href: 'https://github.com/21khushi',
    icon: <Github size={20} />,
    label: 'GitHub',
    value: '21khushi',
    external: true,
    hoverColor: '#aaaacc',
  },
];

const OPEN_TO = [
  'Full-time SDE roles · India or Remote',
  'Interesting engineering collaborations',
  'Technical writing opportunities',
  'Open source contributions',
];

function ContactContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await api.contact.submit(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Failed to send message', err);
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-[#080810] pt-32 pb-24">
      <div className="container-wide">
        <BackToHome />

        {/* Header */}
        <header className="mt-12 mb-16 text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-5"
          >
            Let&apos;s Build Something{' '}
            <span className="shimmer-text">Together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-[#55556a] leading-relaxed"
          >
            Have a question, opportunity, or just want to say hi? I reply within{' '}
            <span className="text-white font-medium">24 hours</span>.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-5 flex items-center gap-2">
                <MessageSquare size={14} /> Contact Info
              </h3>
              <div className="space-y-4">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 text-[#55556a] hover:text-white transition-all duration-200"
                  >
                    <div
                      className="p-3 bg-[#141424] rounded-xl border border-[#1e1e2e] group-hover:border-[#2a2a4a] transition-all"
                      style={{ '--hover-color': link.hoverColor } as React.CSSProperties}
                    >
                      <span className="text-[#7B6EF6]">{link.icon}</span>
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#44445a] mb-0.5">
                        {link.label}
                      </div>
                      <div className="text-[14px] font-medium text-[#8888a8] group-hover:text-white transition-colors truncate">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock size={16} className="text-[#7B6EF6]" />
                <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#44445a]">
                  Response Time
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
                <span className="text-[14px] text-emerald-400 font-semibold">
                  Typically within 24 hours
                </span>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={16} className="text-[#7B6EF6]" />
                <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#44445a]">
                  Location
                </h3>
              </div>
              <p className="text-[14px] text-white font-medium mb-0.5">Gurgaon, India</p>
              <p className="text-[12px] text-[#44445a]">Open to relocation · Remote-friendly</p>
            </motion.div>

            {/* Open to */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5"
            >
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-4">
                Open To
              </h3>
              <ul className="space-y-2.5">
                {OPEN_TO.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13px] text-[#8888a8]">
                    <CheckCircle2 size={13} className="text-[#7B6EF6] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="min-h-[480px] flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                      <CheckCircle2 size={28} className="text-emerald-400" />
                    </div>
                    <h3 className="text-[22px] font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-[15px] text-[#55556a] max-w-xs">
                      Thank you — I&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-6">
                      Send a Message
                    </h3>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#44445a] mb-2"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#141424] border border-[#1e1e2e] text-white placeholder-[#33334a] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#7B6EF6]/50 focus:ring-1 focus:ring-[#7B6EF6]/25 transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#44445a] mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#141424] border border-[#1e1e2e] text-white placeholder-[#33334a] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#7B6EF6]/50 focus:ring-1 focus:ring-[#7B6EF6]/25 transition-all"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-[11px] font-bold uppercase tracking-wider text-[#44445a] mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#141424] border border-[#1e1e2e] text-white placeholder-[#33334a] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#7B6EF6]/50 focus:ring-1 focus:ring-[#7B6EF6]/25 transition-all"
                      />
                    </div>

                    {/* Message Section with AI Writing Assistant */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="contact-message"
                          className="block text-[11px] font-bold uppercase tracking-wider text-[#44445a]"
                        >
                          Message
                        </label>
                      </div>

                      {/* Gmail-Style AI Assistant */}
                      <AiHelpMeWrite
                        senderName={formData.name}
                        onApply={(newSubject, newMessage) => {
                          setFormData((prev) => ({
                            ...prev,
                            subject: newSubject || prev.subject,
                            message: newMessage,
                          }));
                        }}
                      />

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell me about the opportunity, project, or just say hi... (or use ✨ Help me write with AI above)"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#141424] border border-[#1e1e2e] text-white placeholder-[#33334a] rounded-xl px-4 py-3 text-[14px] outline-none focus:border-[#7B6EF6]/50 focus:ring-1 focus:ring-[#7B6EF6]/25 transition-all resize-none"
                      />
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <p className="text-[13px] text-red-400 bg-red-400/8 border border-red-400/20 rounded-xl px-4 py-3">
                        Something went wrong. Please email me directly at gunnusikka21@gmail.com
                      </p>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full h-13 text-[15px]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={16} />
                          Sending…
                        </>
                      ) : (
                        'Send Message →'
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080810]" />}>
      <ContactContent />
    </Suspense>
  );
}
