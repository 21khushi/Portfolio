'use client';

import { motion } from 'framer-motion';
import BackToHome from '@/components/ui/BackToHome';
import { Target, BookHeart, MapPin, Briefcase, Pen, Code2 } from 'lucide-react';
import Link from 'next/link';

const NOW_DATA = {
  lastUpdated: 'August 2026',
  location: 'Gurgaon, India',
  role: 'Full-Stack SDE · Offered Full-Time Role @ CreateBytes',
  currentFocus: [
    'Completed 1+ year of high-impact production engineering at CreateBytes with a Full-Time SDE offer in hand',
    'Scaling production NestJS APIs for RedPill Verify — handling real client transactions',
    'Deep-diving into System Design: distributed systems, rate limiting, caching strategies',
    'Strengthening DSA daily — maintaining 300+ problem streak across LeetCode & GFG',
    'Writing "Breaking Walls, Building Wings" — my first book, in progress',
    'Open to Full-Time SDE opportunities · 2026 batch',
  ],
  currentlyReading: 'The Pragmatic Programmer — Andrew Hunt & David Thomas',
  currentlyLearning: [
    'System Design (HLD/LLD)',
    'Redis & Caching',
    'AWS Cloud Fundamentals',
    'Advanced TypeScript Patterns',
    'Docker & Containerization',
  ],
};

interface SectionItem {
  icon: React.ReactNode;
  title: string;
  content: string;
  sub: string;
  isLive?: boolean;
  isBook?: boolean;
  isTrophy?: boolean;
}

const SECTIONS: SectionItem[] = [
  {
    icon: <MapPin size={22} className="text-[#7B6EF6]" />,
    title: 'Location',
    content: NOW_DATA.location,
    sub: 'Open to relocation for the right opportunity',
  },
  {
    icon: <Briefcase size={22} className="text-[#7B6EF6]" />,
    title: 'Experience & Offer',
    content: 'Full-Stack SDE',
    sub: '1+ Year · Offered Full-Time SDE @ CreateBytes',
    isLive: true,
  },
  {
    icon: <Pen size={22} className="text-[#a89cf7]" />,
    title: 'Writing',
    content: '"Breaking Walls, Building Wings"',
    sub: 'My first book · In active progress since 2025',
    isBook: true,
  },
  {
    icon: <Code2 size={22} className="text-[#7B6EF6]" />,
    title: 'DSA Practice',
    content: '300+ Problems Solved',
    sub: 'LeetCode · GFG · Coding Ninjas · Daily streak',
  },
];

export default function NowPage() {
  return (
    <main className="min-h-screen bg-[#080810] pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6">
        <BackToHome />

        {/* Header */}
        <header className="mt-12 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            NOW
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[52px] font-bold text-white tracking-tight leading-tight mb-4"
          >
            What I&apos;m doing now
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <p className="text-[15px] text-[#55556a]">
              A life snapshot. Inspired by{' '}
              <a
                href="https://sive.rs/now"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B6EF6] hover:text-white transition-colors"
              >
                Derek Sivers
              </a>
              .
            </p>
            <span className="text-[12px] font-medium text-[#33334a] border border-[#1e1e2e] px-3 py-1 rounded-full">
              Updated: {NOW_DATA.lastUpdated}
            </span>
          </motion.div>
        </header>

        {/* Quick Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {SECTIONS.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className={`rounded-2xl p-5 border card-lift ${section.isTrophy
                  ? 'trophy-card'
                  : section.isBook
                    ? 'bg-[#0f0f1a] border-[#a89cf7]/20'
                    : 'bg-[#0f0f1a] border-[#1e1e2e]'
                }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {section.icon}
                {section.isLive && (
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20 bg-emerald-500/8 px-2 py-0.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 live-dot" />
                    LIVE
                  </span>
                )}
              </div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#44445a] mb-1.5">
                {section.title}
              </h3>
              <p
                className={`text-[15px] font-bold mb-1 leading-tight ${section.isTrophy ? 'gold-shimmer' : section.isBook ? 'text-[#a89cf7] italic' : 'text-white'
                  }`}
              >
                {section.content}
              </p>
              <p className="text-[12px] text-[#44445a]">{section.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <Target size={22} className="text-[#7B6EF6]" />
            <h2 className="text-[20px] font-bold text-white">Current Focus</h2>
          </div>
          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6">
            <ul className="space-y-4">
              {NOW_DATA.currentFocus.map((focus, i) => (
                <li key={i} className="flex gap-3 text-[14px] text-[#8888a8] leading-relaxed">
                  <span className="text-[#7B6EF6] mt-0.5 shrink-0">▹</span>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Learning & Reading */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <BookHeart size={22} className="text-[#7B6EF6]" />
            <h2 className="text-[20px] font-bold text-white">Learning & Reading</h2>
          </div>
          <div className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#44445a] mb-2">
              Currently Reading
            </h3>
            <p className="text-[15px] text-[#a89cf7] italic font-medium mb-6">
              &ldquo;{NOW_DATA.currentlyReading}&rdquo;
            </p>

            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#44445a] mb-3 flex items-center gap-2">
              <Code2 size={13} /> Actively Learning
            </h3>
            <div className="flex flex-wrap gap-2">
              {NOW_DATA.currentlyLearning.map((item) => (
                <span
                  key={item}
                  className="bg-[#141424] border border-[#7B6EF6]/20 text-[#9999bb] text-[12px] font-medium px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-[#1e1e2e] text-center"
        >
          <p className="text-[14px] text-[#33334a] mb-3">Want to connect?</p>
          <Link
            href="/contact"
            className="text-[14px] font-semibold text-[#7B6EF6] hover:text-white transition-colors"
          >
            Start a conversation →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
