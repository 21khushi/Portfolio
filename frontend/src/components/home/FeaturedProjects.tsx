'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LIVE_PROJECTS = [
  {
    title: 'Luxe Fitness',
    slug: 'luxe-fitness',
    client: 'Bristol · Bedminster · Birmingham',
    type: 'Gym SaaS Platform',
    summary:
      'Architected end-to-end backend modules for payment processing, membership onboarding, and subscription scheduling. Improved Core Web Vitals (LCP, FID, CLS), integrated structured logging, and served as primary technical liaison for the UK client.',
    impact: '3 UK gym locations · Live revenue operations',
    tags: ['Node.js', 'MongoDB', 'React.js', 'CMS', 'Logging', 'SEO'],
    accentColor: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.06)',
  },
  {
    title: 'Krigat',
    slug: 'krigat',
    client: 'AI Motion Tracking · Powersports',
    type: 'AI Fitness Platform',
    summary:
      'Built admin panel backend (NestJS) & frontend, plus video capture, movement recording review and exercise tracking on React Native app. Platform measures body movements in real-time without external hardware.',
    impact: '🏆 1st Place — Supernova AI MEA, Cairo 2026',
    tags: ['NestJS', 'React Native', 'AI/ML', 'Video Processing', 'React.js'],
    accentColor: '#f5c842',
    bgColor: 'rgba(245,200,66,0.05)',
    isTrophy: true,
  },
  {
    title: 'RedPill Verify',
    slug: 'redpill-verify',
    client: 'Fintech · Escrow Platform',
    type: 'Condition-Based Transactions',
    summary:
      'Built the entire backend from scratch — OTP-based authentication, role-based admin management, deal creation flows, proposal management, in-app notifications, and ML model integration. Trust-minimised commerce with conditional release logic.',
    impact: 'Full backend ownership · Production-grade security',
    tags: ['NestJS', 'PostgreSQL', 'OTP Auth', 'RBAC', 'ML Integration', 'Notifications'],
    accentColor: '#10b981',
    bgColor: 'rgba(16,185,129,0.05)',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-28 container-wide">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
        >
          LIVE CLIENT WORK
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[30px] md:text-[44px] font-bold text-white tracking-tight leading-tight"
        >
          3 Live Products. Real UK Clients.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[16px] text-[#55556a] mt-4 max-w-[560px] mx-auto"
        >
          Production systems I architected and shipped at CreateBytes — serving real users across the UK.
        </motion.p>
      </div>

      <div className="flex flex-col gap-5">
        {LIVE_PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-7 md:p-8 glass-hover overflow-hidden"
            style={{ borderLeft: `3px solid ${project.accentColor}` }}
          >
            {/* Background tint */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
              style={{ background: project.bgColor }}
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
              {/* Left */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {/* LIVE badge */}
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                    LIVE CLIENT
                  </div>
                  {project.isTrophy && (
                    <div className="flex items-center gap-1.5 trophy-card text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      <span>🏆</span>
                      <span className="gold-shimmer">Cairo 2026 Winner</span>
                    </div>
                  )}
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}30`,
                      backgroundColor: `${project.accentColor}10`,
                    }}
                  >
                    {project.type}
                  </span>
                </div>

                <h3 className="text-[22px] md:text-[26px] font-bold text-white mb-1 tracking-tight">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-[#a89cf7] transition-colors inline-flex items-center gap-2"
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-[13px] text-[#55556a] font-medium mb-4">{project.client}</p>
                <p className="text-[15px] text-[#8888a8] leading-[1.75] mb-5 max-w-2xl">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#141424] border border-[#1e1e2e] px-2.5 py-1 rounded-lg text-[12px] text-[#9999bb] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-[#7B6EF6] hover:text-[#a89cf7] transition-colors mt-2"
                >
                  Read Full Case Study
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

              {/* Right: Impact */}
              <div className="md:w-64 shrink-0 flex flex-col justify-between gap-4">
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    borderColor: `${project.accentColor}25`,
                    backgroundColor: `${project.accentColor}08`,
                  }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: project.accentColor }}>
                    IMPACT
                  </p>
                  <p
                    className="text-[14px] font-semibold leading-relaxed"
                    style={{ color: project.isTrophy ? '#f5c842' : 'white' }}
                  >
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#7B6EF6] hover:text-white transition-colors duration-200 group"
        >
          View all projects & personal work
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
