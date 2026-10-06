'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PROJECTS_BREAKDOWN = [
  {
    name: 'Luxe Fitness',
    slug: 'luxe-fitness',
    location: 'Bristol · Bedminster · Birmingham (Live Client)',
    color: '#3b82f6',
    bullets: [
      'Architected payment processing, membership onboarding & subscription scheduling (Node.js + MongoDB)',
      'Built CMS frontend for gym staff — schedule & membership management',
      'Improved Core Web Vitals (LCP, FID, CLS) · boosted SEO performance & UX',
      'Primary technical liaison — conducted feature walkthroughs & resolved production bugs',
    ],
  },
  {
    name: 'Krigat',
    slug: 'krigat',
    location: 'AI Motion Tracking · 1st Place Cairo Winner',
    color: '#f5c842',
    isTrophy: true,
    bullets: [
      'Developed admin panel backend (NestJS) & frontend for AI motion-tracking platform',
      'Video capture, movement recording review & exercise tracking on React Native',
      'Real-time fitness analysis — no external hardware required',
      'Won 1st Place Overall at Supernova AI MEA, Cairo (AI Everything Egypt 2026)',
    ],
  },
  {
    name: 'RedPill Verify',
    slug: 'redpill-verify',
    location: 'Fintech · Escrow Platform (Live Client)',
    color: '#10b981',
    bullets: [
      'Built complete backend from scratch (NestJS) — OTP auth, RBAC, deal & proposal flows',
      'In-app notification system + ML model integration into API layer',
      'Conditional release logic — resolved real production edge cases for buyer-seller escrow',
      'Delivered trust-minimised commerce infrastructure for live transactions',
    ],
  },
];

const CROSS_PROJECT = [
  'Implemented automated end-to-end test suites using Selenium — reducing regression risk and improving release confidence',
  'Managed deployments manually and through GitHub Actions CI/CD pipelines — ensuring consistent, repeatable releases',
  'Built internal AI outreach pipeline (CBExperts) with Apollo lead data & co-led live paid workshop with the CEO',
];

export default function InternshipHighlight() {
  return (
    <section className="py-28 bg-[#0a0a14] border-y border-[#1e1e2e] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(123,110,246,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            WORK EXPERIENCE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[30px] md:text-[44px] font-bold text-white tracking-tight"
          >
            Full-Stack Software Development Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-3 mt-4"
          >
            <span className="text-[16px] text-[#8888a8] font-medium">CreateBytes · Gurgaon, India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#333355]" />
            <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#a89cf7] border border-[#a89cf7]/20 bg-[#a89cf7]/8 px-3 py-1 rounded-full">
              1+ Year Exp (Sep 2025 – Sep 2026)
            </span>
            <span className="inline-flex items-center gap-2 text-[14px] font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
              Offered Full-Time SDE Role
            </span>
          </motion.div>
        </div>

        {/* 3-column project breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PROJECTS_BREAKDOWN.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] hover:border-[#7B6EF6]/30 rounded-2xl p-6 card-lift group flex flex-col justify-between"
              style={{ borderTop: `2px solid ${project.color}` }}
            >
              <div>
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-1">
                    {project.isTrophy && <span>🏆</span>}
                    <h3
                      className="text-[17px] font-bold"
                      style={{ color: project.isTrophy ? '#f5c842' : 'white' }}
                    >
                      <Link href={`/projects/${project.slug}`} className="hover:underline">
                        {project.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="text-[12px] font-medium" style={{ color: project.color }}>
                    {project.location}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[13px] text-[#8888a8] leading-relaxed">
                      <span className="mt-1 shrink-0" style={{ color: project.color }}>▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1e1e2e]/60">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold transition-colors"
                  style={{ color: project.color }}
                >
                  Read Case Study
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cross-project contributions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6 mb-10"
        >
          <h4 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-4">
            Cross-Project Contributions
          </h4>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {CROSS_PROJECT.map((item) => (
              <div key={item} className="flex gap-3 text-[14px] text-[#8888a8] leading-relaxed">
                <span className="text-[#7B6EF6] mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#7B6EF6] hover:text-white transition-colors duration-200 group"
          >
            Read the full engineering story
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
