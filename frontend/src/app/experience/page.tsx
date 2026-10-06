'use client';

import { motion } from 'framer-motion';
import BackToHome from '@/components/ui/BackToHome';
import { Briefcase, GraduationCap, MapPin, Heart, Rocket, Trophy } from 'lucide-react';
import { Metadata } from 'next';

const LIVE_PROJECTS = [
  {
    name: 'Luxe Fitness',
    subtitle: 'Gym Fitness Platform · Bristol City Center, Bedminster, Birmingham (Live Client)',
    color: '#3b82f6',
    emoji: '💪',
    bullets: [
      'Architected and implemented end-to-end backend modules for payment processing, membership onboarding, and subscription scheduling using Node.js and MongoDB, directly impacting revenue operations across 3 gym locations.',
      'Built and maintained the CMS frontend enabling gym staff to manage memberships and schedules.',
      'Improved Core Web Vitals scores (LCP, FID, CLS) for the public website, boosting SEO performance and user experience.',
      'Integrated a structured logging system for API monitoring, enabling proactive error detection and faster debugging in production.',
      'Served as primary technical liaison for the client, conducting feature walkthroughs, resolving production bugs, and translating business requirements into engineering tasks.',
    ],
    stack: ['Node.js', 'MongoDB', 'React.js', 'Next.js', 'CMS', 'Logging', 'Core Web Vitals', 'SEO'],
  },
  {
    name: 'Krigat',
    subtitle: 'AI Powered Motion Tracking Platform (Live Client)',
    color: '#f5c842',
    emoji: '🤖',
    isTrophy: true,
    award: '1st Place Overall at Supernova AI MEA, Cairo (AI Everything Egypt 2026)',
    bullets: [
      'Developed the admin panel backend services using NestJS and frontend modules for an AI motion-tracking application enabling real-time fitness analysis.',
      'Implemented video capture, movement recording review, and exercise tracking on the React Native application.',
      'Won 1st Place Overall at Supernova AI MEA, Cairo (AI Everything Egypt 2026).',
    ],
    stack: ['NestJS', 'React.js', 'React Native', 'AI/ML', 'Video Processing', 'TypeScript'],
  },
  {
    name: 'RedPill Verify',
    subtitle: 'Condition-Based Transaction / Escrow Platform (Live Client)',
    color: '#10b981',
    emoji: '🔐',
    bullets: [
      'Built the complete backend from scratch using NestJS, including OTP-based authentication, role-based access control, deal creation flows, and proposal management.',
      'Developed in-app notification systems and integrated third-party services and machine learning models into backend APIs.',
      'Delivered secure buyer-seller transaction workflows with conditional release logic while resolving production edge cases.',
    ],
    stack: ['NestJS', 'PostgreSQL', 'OTP Auth', 'RBAC', 'ML Integration', 'Notifications', 'TypeScript'],
  },
];

const INTERNAL_PROJECTS = [
  {
    name: 'CBExperts',
    subtitle: 'AI Lead Generation & Workshop Platform (Internal Project)',
    color: '#a89cf7',
    emoji: '⚡',
    bullets: [
      'Built an end-to-end multi-agent AI outreach pipeline (scouting, research, strategy, drafting, Gmail sending, reply handling), validated on Apollo lead data.',
      'Co-led the first paid workshop with the CEO, delivering the live demo, technical guide, and workflow documentation.',
    ],
    stack: ['Multi-Agent AI', 'Gmail API', 'Apollo Data', 'TypeScript', 'Node.js', 'Workshops'],
  },
  {
    name: 'CB-Extensions',
    subtitle: 'Attendance & Task Logging Extension (Internal Project)',
    color: '#7B6EF6',
    emoji: '⏱️',
    bullets: [
      'Built an extension for CB-Workspace to streamline attendance management and daily task logging for the team.',
    ],
    stack: ['Browser Extension', 'JavaScript', 'Workspace Integration', 'Productivity'],
  },
  {
    name: 'CB-Campaigns',
    subtitle: 'Marketing Landing Pages (Internal Project)',
    color: '#ec4899',
    emoji: '🚀',
    bullets: [
      'Developed four mobile-responsive landing pages (HealthTech UK/US, FinTech UK/US) end to end on the frontend.',
    ],
    stack: ['React.js', 'Next.js', 'TailwindCSS', 'Responsive UI', 'Performance'],
  },
];

const CROSS_PROJECT = [
  'Implemented automated end-to-end test suites using Selenium, reducing regression risk and improving release confidence.',
  'Managed deployments manually and through GitHub Actions CI/CD pipelines, ensuring consistent and repeatable release processes.',
];

const JOURNEY = [
  {
    type: 'origin',
    title: 'The Starting Line',
    location: 'Rohtak, Haryana',
    date: '2022',
    icon: <MapPin className="text-[#7B6EF6]" size={22} />,
    story:
      "Growing up in Rohtak, the world of software felt light-years away. The 'small-town syndrome' was real — but that fear became fuel. Being the first engineer in my family carried its own weight, and its own pride.",
    highlights: ['First spark of interest in CS', 'Overcoming local transition barriers', 'First engineer in the family'],
  },
  {
    type: 'education',
    title: 'The Academic Horizon',
    location: 'Chitkara University, Punjab',
    date: '2022 – 2026',
    icon: <GraduationCap className="text-[#7B6EF6]" size={22} />,
    story:
      "At Chitkara, I found my rhythm. CGPA 9.06 — but more importantly, I learned how to build, not just pass. From DSA marathons to the first taste of full-stack development, every late-night session had a purpose.",
    highlights: ['CGPA 9.06 / 10', 'Mastered Java, DSA & TypeScript', 'First full-stack production project'],
  },
  {
    type: 'internship',
    title: 'The Engineering Reality',
    location: 'CreateBytes, Gurgaon',
    date: 'Sep 2025 – Sep 2026',
    icon: <Briefcase className="text-[#7B6EF6]" size={22} />,
    story:
      "1+ year of production experience. 3 live UK clients. Real production systems with real consequences. Building NestJS backends and React frontends wasn't just about syntax — it was about scalability, reliability, and owning things end to end. Successfully completed (Sep 2025 – Sep 2026) and offered a Full-Time SDE role at CreateBytes.",
    highlights: ['3 live UK client products shipped', 'Offered Full-Time SDE Role at CreateBytes', 'Primary technical liaison for UK clients'],
  },
  {
    type: 'vision',
    title: 'The Road Ahead',
    location: 'Full-Time SDE · 2026',
    date: '2026',
    icon: <Rocket className="text-[#7B6EF6]" size={22} />,
    story:
      "This journey has been a series of firsts. First production deployment. First international client. First AI competition win. Each stage grew me. With 1+ year of production engineering and a Full-Time SDE offer in hand, I'm ready to bring that ownership, drive, and engineering maturity to high-impact software systems.",
    highlights: ['Specializing in Backend & Full-Stack Architecture', 'Author: Breaking Walls, Building Wings', 'Open for 2026 SDE Opportunities'],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#080810] flex flex-col pt-32 pb-24">
      <div className="flex-1 container-wide">
        <BackToHome />

        {/* Header */}
        <header className="mb-20 mt-12 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            WORK EXPERIENCE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-6"
          >
            Full-Stack Software Development Engineer
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-3"
          >
            <span className="text-[17px] text-[#8888a8] font-medium">CreateBytes · Gurgaon, India</span>
            <span className="inline-flex items-center gap-2 text-[14px] font-bold text-[#a89cf7] border border-[#a89cf7]/20 bg-[#a89cf7]/8 px-3 py-1 rounded-full">
              1+ Year Experience (Sep 2025 – Sep 2026)
            </span>
            <span className="inline-flex items-center gap-2 text-[14px] font-bold text-emerald-400 border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
              Offered Full-Time SDE Role
            </span>
          </motion.div>
        </header>

        {/* 3 Live Client Products */}
        <section className="mb-20">
          <h2 className="text-[22px] font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase size={22} className="text-[#7B6EF6]" />
            Live Client Products
          </h2>

          <div className="space-y-6">
            {LIVE_PROJECTS.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-7 md:p-8 glass-hover"
                style={{ borderLeft: `3px solid ${project.color}` }}
              >
                {/* Project header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[20px]">{project.emoji}</span>
                      {project.isTrophy && <span className="text-[18px]">🏆</span>}
                      <h3
                        className="text-[20px] font-bold"
                        style={{ color: project.isTrophy ? '#f5c842' : 'white' }}
                      >
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-[13px] font-medium" style={{ color: project.color }}>
                      {project.subtitle}
                    </p>
                    {project.award && (
                      <p className="text-[12px] font-bold text-[#f5c842] mt-1 flex items-center gap-1">
                        <Trophy size={12} /> {project.award}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                    LIVE CLIENT
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[14px] text-[#8888a8] leading-relaxed">
                      <span className="mt-1 shrink-0" style={{ color: project.color }}>▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-[#1e1e2e]">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#141424] border border-[#1e1e2e] px-2.5 py-1 rounded-lg text-[12px] text-[#9999bb] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Internal Projects */}
        <section className="mb-20">
          <h2 className="text-[22px] font-bold text-white mb-8 flex items-center gap-3">
            <Rocket size={22} className="text-[#7B6EF6]" />
            Internal Innovation & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTERNAL_PROJECTS.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6 glass-hover flex flex-col justify-between"
                style={{ borderTop: `3px solid ${project.color}` }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[20px]">{project.emoji}</span>
                      <h3 className="text-[17px] font-bold text-white">{project.name}</h3>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#a89cf7] border border-[#a89cf7]/20 bg-[#a89cf7]/10 px-2 py-0.5 rounded-full">
                      INTERNAL
                    </span>
                  </div>
                  <p className="text-[12px] font-medium text-[#7B6EF6] mb-4">
                    {project.subtitle}
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[13px] text-[#8888a8] leading-relaxed">
                        <span className="mt-0.5 shrink-0" style={{ color: project.color }}>▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1e1e2e]">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#141424] border border-[#1e1e2e] px-2 py-0.5 rounded text-[11px] text-[#9999bb] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Cross-project contributions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-7"
        >
          <h3 className="text-[14px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-5">
            Cross-Project Contributions
          </h3>
          <div className="space-y-4">
            {CROSS_PROJECT.map((item) => (
              <div key={item} className="flex gap-3 text-[14px] text-[#8888a8] leading-relaxed">
                <span className="text-[#7B6EF6] mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Personal Journey Timeline */}
        <section>
          <div className="text-center mb-16">
            <span className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block">
              THE JOURNEY
            </span>
            <h2 className="text-[30px] md:text-[44px] font-bold text-white tracking-tight leading-tight">
              From Rohtak to Building the Future
            </h2>
          </div>

          <div className="max-w-[760px] mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#7B6EF6]/40 via-[#1e1e2e] to-transparent" />

            <div className="space-y-16">
              {JOURNEY.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-start`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-3 w-10 h-10 rounded-full bg-[#0f0f1a] border border-[#7B6EF6]/30 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(123,110,246,0.2)] shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#7B6EF6]" />
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[46%] bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-7 glass-hover`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 bg-[#141424] rounded-xl border border-[#1e1e2e]">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#7B6EF6] uppercase tracking-wider block">
                          {item.date}
                        </span>
                        <h3 className="text-[18px] font-bold text-white">{item.title}</h3>
                      </div>
                    </div>

                    <p className="text-[14px] text-[#8888a8] leading-relaxed mb-5 italic">
                      &quot;{item.story}&quot;
                    </p>

                    <div className="space-y-2.5 pt-5 border-t border-[#1e1e2e]">
                      {item.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2.5">
                          <span className="text-[#7B6EF6] mt-0.5 text-[13px] shrink-0">✓</span>
                          <span className="text-[13px] text-[#ccccdd] font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date / location (desktop) */}
                  <div className="hidden md:block md:w-[46%]">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start pl-12' : 'md:items-end pr-12'}`}>
                      <span className="text-[28px] font-bold text-white/8 uppercase tracking-tighter mb-1">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-2 text-[#44445a]">
                        <MapPin size={13} />
                        <span className="text-[13px] font-medium">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-2xl mx-auto pt-16 border-t border-[#1e1e2e]"
        >
          <Heart className="text-[#F66E6E] mx-auto mb-5" size={28} />
          <h2 className="text-[26px] font-bold text-white mb-4">The journey is just beginning.</h2>
          <p className="text-[15px] text-[#55556a] leading-relaxed">
            Every line of code I write is a tribute to where I&apos;ve come from and a commitment
            to the engineer I&apos;m becoming.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
