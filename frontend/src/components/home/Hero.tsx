'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import Link from 'next/link';

const ROLES = [
  'Full-Stack SDE',
  'Offered Full-Time SDE @ CreateBytes',
  'Live UK Client Delivery',
  'Backend Architect',
  '✍️ Author in Progress',
  'DSA Enthusiast',
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/21khushi', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/khushi-sikka-bb8997262/', label: 'LinkedIn', external: true },
  { href: 'https://leetcode.com/Khushi_2004', label: 'LeetCode', external: true },
  { href: '/contact', label: 'gunnusikka21@gmail.com', external: false },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as any,
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden aurora-bg grid-pattern">
      {/* Decorative blurred orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,110,246,0.10) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'glow-pulse 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(80,60,220,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'glow-pulse 6s ease-in-out infinite reverse',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full container-wide py-24"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#1e1e2e] bg-[#0f0f1a]/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-semibold text-[#aaaacc] uppercase tracking-[0.18em]">
              Open to Full-Time SDE Roles · 2026 Batch
            </span>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          variants={itemVariants}
          className="relative w-28 h-28 mb-10"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #7B6EF6, #a89cf7, #5a4fd4)',
              padding: '2px',
              borderRadius: '9999px',
            }}
          >
            <div className="w-full h-full rounded-full bg-[#080810] p-0.5">
              <img
                src="/profile.jpg"
                alt="Khushi Sikka — Full-Stack SDE"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div style="width:100%;height:100%;border-radius:9999px;background:linear-gradient(135deg,#7B6EF6,#a89cf7);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:800;color:white;">KS</div>`;
                  }
                }}
              />
            </div>
          </div>
          {/* Glow ring */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'transparent',
              boxShadow: '0 0 40px rgba(123,110,246,0.25)',
              borderRadius: '9999px',
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-[36px] md:text-[62px] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-4"
        >
          Khushi Sikka
        </motion.h1>

        {/* Animated Role */}
        <div className="h-9 md:h-11 mb-8 overflow-hidden relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: 'easeInOut' }}
              className="text-[18px] md:text-[23px] font-semibold absolute shimmer-text"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-[#8888a8] text-[15px] md:text-[17px] leading-[1.8] max-w-[640px] mb-5"
        >
          Full-Stack SDE with{' '}
          <span className="text-white font-semibold">1+ year</span> shipping live production
          applications for{' '}
          <span className="text-white font-semibold">3 UK clients</span> — gym SaaS, AI motion
          tracking & fintech escrow — using{' '}
          <span className="text-white font-semibold">React.js, Next.js, Node.js & NestJS</span>.
        </motion.p>

        {/* CGPA + University pill */}
        <motion.div variants={itemVariants} className="mb-10">
          <span className="inline-flex items-center gap-2 text-[13px] text-[#6868a0] border border-[#1e1e2e] rounded-full px-4 py-1.5">
            <span className="text-white font-bold">CGPA 9.06</span>
            <span className="w-1 h-1 rounded-full bg-[#333366]" />
            <span>Chitkara University · CSE · 2022–2026</span>
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <Button href="/projects" size="lg" className="w-[200px] h-14 text-[15px]">
            View My Work →
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="w-[200px] h-14 text-[15px]">
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[13px] text-[#55556a]"
        >
          {SOCIAL_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333355]"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#333355] to-transparent" />
      </motion.div>
    </section>
  );
}
