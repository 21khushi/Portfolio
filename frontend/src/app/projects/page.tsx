'use client';

import { useState } from 'react';
import BackToHome from '@/components/ui/BackToHome';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github, Trophy, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Live Client', 'Internal Project', 'Full Stack', 'AI/ML', 'Backend'];

const PROJECTS = [
  // — Live Client Work —
  {
    title: 'Luxe Fitness',
    type: 'Gym Fitness Platform',
    category: 'Live Client',
    summary:
      'Architected and implemented end-to-end backend modules for payment processing, membership onboarding, and subscription scheduling using Node.js and MongoDB, directly impacting revenue operations across 3 gym locations. Built CMS frontend, improved Core Web Vitals, and served as primary technical client liaison.',
    tags: ['Node.js', 'MongoDB', 'React.js', 'Next.js', 'CMS', 'Logging', 'SEO'],
    badge: 'LIVE CLIENT',
    badgeColor: '#10b981',
    impact: '3 UK gym locations · Live revenue operations',
    github: null,
    slug: 'luxe-fitness',
  },
  {
    title: 'Krigat',
    type: 'AI Motion Tracking Platform',
    category: 'Live Client',
    summary:
      'Developed admin panel backend services using NestJS and frontend modules for an AI motion-tracking application enabling real-time fitness analysis. Implemented video capture, movement recording review, and exercise tracking on the React Native app.',
    tags: ['NestJS', 'React Native', 'React.js', 'AI/ML', 'Video Processing', 'TypeScript'],
    badge: '🏆 Cairo 2026 Winner',
    badgeColor: '#f5c842',
    isTrophy: true,
    impact: '1st Place Overall — Supernova AI MEA, Cairo 2026',
    github: null,
    slug: 'krigat',
  },
  {
    title: 'RedPill Verify',
    type: 'Fintech · Escrow Platform',
    category: 'Live Client',
    summary:
      'Built the complete backend from scratch using NestJS, including OTP-based authentication, role-based access control, deal creation flows, proposal management, in-app notifications, and ML model integration with conditional release logic.',
    tags: ['NestJS', 'PostgreSQL', 'OTP Auth', 'RBAC', 'ML Integration', 'TypeScript'],
    badge: 'LIVE CLIENT',
    badgeColor: '#10b981',
    impact: 'Full backend ownership & live edge case handling',
    github: null,
    slug: 'redpill-verify',
  },
  // — Internal Projects —
  {
    title: 'CBExperts',
    type: 'AI Lead Generation & Workshop Platform',
    category: 'Internal Project',
    summary:
      'Built an end-to-end multi-agent AI outreach pipeline (scouting, research, strategy, drafting, Gmail sending, reply handling), validated on Apollo lead data. Co-led the first paid workshop with the CEO, delivering live demo and documentation.',
    tags: ['Multi-Agent AI', 'Gmail API', 'Apollo Data', 'TypeScript', 'Node.js', 'Workshops'],
    badge: 'INTERNAL PROJECT',
    badgeColor: '#a89cf7',
    impact: 'Multi-agent AI pipeline + CEO live workshop',
    github: null,
    slug: 'cbexperts',
  },
  {
    title: 'CB-Extensions',
    type: 'Attendance & Task Logging Extension',
    category: 'Internal Project',
    summary:
      'Built an extension for CB-Workspace to streamline attendance management and daily task logging for the team, enhancing internal engineering productivity.',
    tags: ['Browser Extension', 'JavaScript', 'Workspace Integration', 'Productivity'],
    badge: 'INTERNAL PROJECT',
    badgeColor: '#7B6EF6',
    impact: 'Daily workflow automation for the team',
    github: null,
    slug: 'cb-extensions',
  },
  {
    title: 'CB-Campaigns',
    type: 'Marketing Landing Pages',
    category: 'Internal Project',
    summary:
      'Developed four mobile-responsive landing pages (HealthTech UK/US, FinTech UK/US) end to end on the frontend with modern animations and optimized performance.',
    tags: ['React.js', 'Next.js', 'TailwindCSS', 'Responsive UI', 'Performance'],
    badge: 'INTERNAL PROJECT',
    badgeColor: '#ec4899',
    impact: '4 international landing pages deployed',
    github: null,
    slug: 'cb-campaigns',
  },
  // — Personal & Academic —
  {
    title: 'Personal Portfolio',
    type: 'Full Stack Showcase',
    category: 'Full Stack',
    summary:
      'Full Stack portfolio built with NestJS and Next.js for showcasing achievements, journey, and growth over time. Features MongoDB integration, Nodemailer contact delivery, and modern glassmorphic UI.',
    tags: ['Next.js', 'NestJS', 'MongoDB', 'TypeScript', 'TailwindCSS', 'Nodemailer'],
    badge: 'PERSONAL',
    badgeColor: '#7B6EF6',
    impact: 'Production deployed with NestJS & Next.js',
    github: 'https://github.com/21khushi',
    slug: 'portfolio',
  },
  {
    title: 'Fraud Detection — AI/ML',
    type: 'Machine Learning',
    category: 'AI/ML',
    summary:
      'Python ML pipeline for financial fraud detection using classification and anomaly detection algorithms. Achieved >92% accuracy on test datasets with Scikit-learn and Pandas.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Classification', 'Anomaly Detection'],
    badge: '>92% Accuracy',
    badgeColor: '#7B6EF6',
    impact: '>92% accuracy on test data',
    github: 'https://github.com/21khushi',
    slug: 'fraud-detection',
  },
];

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.97 }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-[#0f0f1a] border border-[#1e1e2e] hover:border-[#7B6EF6]/40 rounded-2xl p-6 glass-hover flex flex-col h-full transition-all duration-300 relative"
    >
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
          style={{
            color: project.badgeColor,
            borderColor: `${project.badgeColor}30`,
            backgroundColor: `${project.badgeColor}10`,
          }}
        >
          {project.badge}
        </span>
        {project.category === 'Live Client' && (
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20 bg-emerald-500/8 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
            LIVE CLIENT
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-[19px] font-bold text-white mb-1 tracking-tight">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:text-[#a89cf7] transition-colors inline-flex items-center gap-1.5"
        >
          {project.title}
        </Link>
      </h3>
      <p className="text-[12px] font-medium text-[#55556a] mb-3">{project.type}</p>

      {/* Summary */}
      <p className="text-[14px] text-[#8888a8] leading-[1.7] mb-5 flex-1">{project.summary}</p>

      {/* Impact */}
      <div className="text-[12px] font-semibold mb-4" style={{ color: project.isTrophy ? '#f5c842' : '#7B6EF6' }}>
        {project.isTrophy && <Trophy size={12} className="inline mr-1" />}
        {project.impact}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#141424] border border-[#1e1e2e] px-2.5 py-1 rounded-lg text-[11px] text-[#9999bb] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-[#1e1e2e] mt-auto">
        <div className="flex items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-[#55556a] hover:text-white transition-colors font-medium"
            >
              <Github size={14} />
              GitHub
            </a>
          ) : (
            <span className="text-[12px] text-[#444466] font-medium italic">Private · Client Work</span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#7B6EF6] hover:text-[#a89cf7] transition-colors"
        >
          Case Study
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const liveProjects = filteredProjects.filter((p) => p.category === 'Live Client');
  const internalProjects = filteredProjects.filter((p) => p.category === 'Internal Project');
  const personalProjects = filteredProjects.filter(
    (p) => p.category !== 'Live Client' && p.category !== 'Internal Project'
  );

  return (
    <main className="min-h-screen bg-[#080810] flex flex-col pt-32 pb-24">
      <div className="flex-1 container-wide">
        <BackToHome />

        {/* Header */}
        <header className="mb-16 mt-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            PORTFOLIO
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-5"
          >
            Built for Production.
            <br className="hidden md:block" />
            <span className="shimmer-text">Shipped for Real Users.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-[#55556a] leading-relaxed max-w-2xl mx-auto"
          >
            3 live UK client products & internal AI tools at CreateBytes, plus full-stack personal engineering projects.
          </motion.p>
        </header>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`text-[13px] font-semibold px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#7B6EF6] border-[#7B6EF6] text-white shadow-[0_0_20px_rgba(123,110,246,0.3)]'
                  : 'border-[#1e1e2e] text-[#55556a] hover:border-[#7B6EF6]/40 hover:text-white bg-[#0f0f1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Live Client Section */}
        {liveProjects.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20 bg-emerald-500/8 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                LIVE CLIENT WORK — CREATEBYTES
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {liveProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Internal Projects Section */}
        {internalProjects.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#a89cf7] border border-[#a89cf7]/20 bg-[#a89cf7]/8 px-3 py-1.5 rounded-full">
                INTERNAL INNOVATION &amp; WORKSHOPS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {internalProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Personal / Academic Section */}
        {personalProjects.length > 0 && (
          <div>
            {(liveProjects.length > 0 || internalProjects.length > 0) && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B6EF6] border border-[#7B6EF6]/20 bg-[#7B6EF6]/8 px-3 py-1.5 rounded-full">
                  PERSONAL &amp; ACADEMIC
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {personalProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
