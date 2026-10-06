'use client';

import { motion } from 'framer-motion';
import BackToHome from '@/components/ui/BackToHome';
import { Clock, ArrowRight, BookOpen, Terminal, Shield, Database, Microscope, GitBranch, Layout, Pen } from 'lucide-react';
import Link from 'next/link';

const BLOG_POSTS = [
  {
    title: "Beyond Code: My Journey with NestJS Architecture",
    excerpt: "Moving from simple college scripts to enterprise-grade modular systems. Real-world insights into Dependency Injection and why code structure is everything.",
    date: "Mar 2026",
    readTime: 6,
    tags: ["Backend", "NestJS", "Architecture"],
    icon: <Layout className="text-[#7B6EF6]" size={20} />,
    slug: "nestjs-architecture-journey"
  },
  {
    title: "The Day I Broke the Production Index",
    excerpt: "A deep dive into Database performance. I learned why a missing index in a billion-record table is a silent killer, and how I fixed it during my internship.",
    date: "Feb 2026",
    readTime: 8,
    tags: ["Databases", "Performance", "PostgreSQL"],
    icon: <Database className="text-[#7B6EF6]" size={20} />,
    slug: "production-database-indexing"
  },
  {
    title: "E2E Testing: Moving from 'Should Work' to 'Does Work'",
    excerpt: "How my perspective on Selenium shifted from a task to a strategic shield. Realizing the peace of mind that comes with automated verification.",
    date: "Jan 2026",
    readTime: 5,
    tags: ["Testing", "QA", "Selenium"],
    icon: <Microscope className="text-[#7B6EF6]" size={20} />,
    slug: "e2e-testing-reliability"
  },
  {
    title: "JWT vs OAuth: Security Lessons from the Field",
    excerpt: "Realizing why session management isn't just about 'it works.' A look at secure token storage and the common pitfalls in modern authentication flows.",
    date: "Dec 2025",
    readTime: 7,
    tags: ["Security", "Auth", "Best Practices"],
    icon: <Shield className="text-[#7B6EF6]" size={20} />,
    slug: "modern-auth-security"
  },
  {
    title: "Microservices: The Complexity Nobody Tells You About",
    excerpt: "Understanding inter-service communication and the 'Fallacies of Distributed Computing.' Why microservices can be a hurdle before they are a help.",
    date: "Nov 2025",
    readTime: 10,
    tags: ["Backend", "Microservices", "System Design"],
    icon: <Terminal className="text-[#7B6EF6]" size={20} />,
    slug: "microservices-complexity-realities"
  },
  {
    title: "Clean Code: The Cost of a 'Quick Fix'",
    excerpt: "Realizing that technical debt is a real interest-bearing loan. How I improved my code review process to prioritize maintainability over speed.",
    date: "Oct 2025",
    readTime: 4,
    tags: ["Software Engineering", "Coding Patterns"],
    icon: <BookOpen className="text-[#7B6EF6]" size={20} />,
    slug: "clean-code-maintainability"
  },
  {
    title: "The Junior Engineer's Guide to Git Rebase",
    excerpt: "Why history matters in collaborative environments. How to maintain a clean git log and why rebase is often a better tool than merge.",
    date: "Sep 2025",
    readTime: 5,
    tags: ["Git", "Workflow", "Collaboration"],
    icon: <GitBranch className="text-[#7B6EF6]" size={20} />,
    slug: "git-rebase-guide"
  }
];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#080810] flex flex-col pt-32 pb-24">
      <div className="flex-1 container-wide">
        <BackToHome />

        {/* Header */}
        <header className="mb-14 mt-12 text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            TECHNICAL WRITING
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-5"
          >
            Engineering Stories.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-[#55556a] leading-relaxed"
          >
            Bridging the gap between college theory and production reality — the lessons that only come from shipping live.
          </motion.p>
        </header>

        {/* Book in Progress Pinned Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[900px] mx-auto mb-10"
        >
          <div
            className="relative rounded-2xl p-7 md:p-8 overflow-hidden border"
            style={{
              background: 'linear-gradient(135deg, #120d2a 0%, #0d0820 60%, #120d2a 100%)',
              borderColor: 'rgba(168,140,247,0.25)',
              boxShadow: '0 0 40px rgba(123,110,246,0.08)',
            }}
          >
            {/* BG Orb */}
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(168,140,247,0.12) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Book emoji */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-[32px]"
                style={{
                  background: 'rgba(168,140,247,0.12)',
                  border: '1px solid rgba(168,140,247,0.25)',
                }}
              >
                🦋
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#a89cf7] border border-[#a89cf7]/25 bg-[#a89cf7]/8 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7B6EF6] live-dot" />
                    BOOK IN PROGRESS
                  </span>
                  <span className="text-[11px] text-[#44445a] font-medium">Writing since 2025</span>
                </div>
                <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-2 leading-tight">
                  Breaking Walls, Building Wings
                </h2>
                <p className="text-[14px] text-[#8888a8] leading-relaxed mb-4 max-w-xl">
                  The story of every young teen who goes through a period of confusion, inner struggles,
                  and finding themselves in chaos. A deeply personal narrative about identity, growth,
                  and transformation.
                </p>
                <div className="flex items-center gap-2 text-[13px] text-[#a89cf7] font-medium">
                  <Pen size={14} />
                  <span>By Khushi Sikka</span>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <Link
                  href="/contact?subject=Book%20Collaboration%20-%20Breaking%20Walls%2C%20Building%20Wings"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-white bg-[#7B6EF6] hover:bg-[#685ad8] px-4 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-[#7B6EF6]/20"
                >
                  Collaborate ↗
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="max-w-[900px] mx-auto mb-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-[#1e1e2e]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#333355]">
              Technical Articles
            </span>
            <div className="flex-1 h-[1px] bg-[#1e1e2e]" />
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-[900px] mx-auto space-y-5">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
            >
              <Link
                href={`/writing/${post.slug}`}
                className="group block bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6 md:p-8 hover:border-[#7B6EF6]/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(123,110,246,0.04) 0%, transparent 60%)' }}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="hidden md:flex flex-col items-center justify-center p-5 bg-[#141424] rounded-xl border border-[#1e1e2e] h-[72px] w-[72px] group-hover:border-[#7B6EF6]/25 transition-colors shrink-0">
                    {post.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-[#44445a] text-[11px] font-bold uppercase tracking-widest mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[#1e1e2e]" />
                      <div className="flex items-center gap-1.5">
                        <Clock size={11} />
                        <span>{post.readTime} MIN READ</span>
                      </div>
                    </div>

                    <h2 className="text-[20px] md:text-[24px] font-bold text-white mb-3 group-hover:text-white transition-colors tracking-tight leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-[14px] text-[#8888a8] leading-relaxed mb-5 group-hover:text-[#aaaacc] transition-colors line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 items-center">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-[#7B6EF6] tracking-wider uppercase bg-[#141424] border border-[#7B6EF6]/15 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      <div className="ml-auto flex items-center gap-1.5 text-[#7B6EF6] text-[13px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Story
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
