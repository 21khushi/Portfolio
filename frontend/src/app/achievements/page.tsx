'use client';

import { motion } from 'framer-motion';
import BackToHome from '@/components/ui/BackToHome';
import { Award, BookOpen, Code2, Shield, FlaskConical } from 'lucide-react';

const HACKATHONS = [
  {
    title: 'Supernova AI MEA — AI Everything Egypt 2026',
    desc: 'AI Motion Tracking Platform (Krigat) · Cairo, Egypt',
    result: '1ST PLACE OVERALL',
    resultColor: '#f5c842',
    location: 'Cairo, Egypt · 2026',
  },
  {
    title: 'Flipkart GRID 6.0',
    desc: 'Software Development Track — Qualified Round 1',
    result: 'QUALIFIED R1',
    resultColor: '#7B6EF6',
    location: 'National · 2024',
  },
  {
    title: 'Medecro HealthHack 2024',
    desc: 'Healthcare Innovation — Prototype Round',
    result: 'PROTOTYPE ROUND',
    resultColor: '#10b981',
    location: 'National · 2024',
  },
  {
    title: 'Tata Imagination Challenge',
    desc: 'National Innovation Challenge — Qualified Round 1',
    result: 'QUALIFIED R1',
    resultColor: '#7B6EF6',
    location: 'National · 2024',
  },
  {
    title: 'Smart India Hackathon',
    desc: 'National Participant',
    result: 'PARTICIPANT',
    resultColor: '#55556a',
    location: 'National · 2023',
  },
];

const CERTIFICATIONS = [
  { title: 'Python Bootcamp', issuer: 'HackerRank', icon: <Code2 size={16} /> },
  { title: 'CSS Certification', issuer: 'HackerRank', icon: <Code2 size={16} /> },
  { title: 'Python Programming', issuer: 'Coding Ninjas', icon: <Code2 size={16} /> },
  { title: 'CSS & Web Development', issuer: 'Coding Ninjas', icon: <Code2 size={16} /> },
  { title: 'Generative AI & ChatGPT', issuer: 'GeeksforGeeks', icon: <Shield size={16} /> },
];

const RESEARCH_PAPERS = [
  {
    title: 'Security and Governance Framework for Generative AI in Healthcare',
    year: '2025',
    abstract:
      'Proposed a security and governance model for responsible GenAI deployment in clinical environments, covering data privacy, model accountability, and regulatory compliance.',
    tags: ['GenAI', 'Healthcare', 'Security', 'Governance', 'Regulatory Compliance'],
  },
  {
    title: 'The Rise of AI in Healthcare',
    year: '2024',
    abstract:
      'Analytical study on the transformative impact of artificial intelligence in clinical and diagnostic workflows, examining adoption patterns and future implications.',
    tags: ['AI', 'Healthcare', 'Diagnostics', 'Clinical Workflows'],
  },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#080810] flex flex-col pt-32 pb-24">
      <div className="flex-1 container-wide">
        <BackToHome />

        {/* Header */}
        <header className="mb-20 mt-12 text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            RECOGNITION & MILESTONES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[38px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-5"
          >
            Beyond the Code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-[#55556a] leading-relaxed"
          >
            Hackathon wins, research publications, competitive programming, and academic milestones.
          </motion.p>
        </header>

        {/* Academic Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'CGPA', value: '9.06', sub: 'Chitkara University · CSE', icon: <BookOpen size={20} /> },
            { label: 'DSA SOLVED', value: '300+', sub: 'LeetCode · GFG · Coding Ninjas', icon: <Code2 size={20} /> },
            { label: 'RESEARCH PAPERS', value: '2', sub: 'Published · 2024–2025', icon: <FlaskConical size={20} /> },
            { label: 'HACKATHONS', value: '5', sub: '5 Entered · 2 Qualified', icon: <Award size={20} /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-5 text-center group hover:border-[#7B6EF6]/30 transition-all card-lift"
            >
              <div className="w-10 h-10 bg-[#141424] rounded-xl flex items-center justify-center mx-auto mb-3 text-[#7B6EF6] border border-[#1e1e2e] group-hover:border-[#7B6EF6]/30 transition-colors">
                {stat.icon}
              </div>
              <div className="text-[28px] font-bold text-white mb-1 group-hover:text-[#7B6EF6] transition-colors">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#55556a] mb-1">{stat.label}</div>
              <div className="text-[11px] text-[#333355]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Hackathons */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[20px] font-bold text-white mb-6 flex items-center gap-3">
              <Award size={22} className="text-[#7B6EF6]" />
              Hackathons
            </h2>
            <div className="space-y-4">
              {HACKATHONS.map((hackathon, i) => (
                <motion.div
                  key={hackathon.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl p-5 border flex items-start justify-between gap-4 card-lift bg-[#0f0f1a] border-[#1e1e2e] hover:border-[#2a2a4a]"
                >
                  <div>
                    <h3 className="font-bold text-[15px] text-white mb-1">
                      {hackathon.title}
                    </h3>
                    <p className="text-[12px] text-[#55556a] mb-1">{hackathon.desc}</p>
                    <p className="text-[11px] text-[#33334a]">{hackathon.location}</p>
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full border shrink-0"
                    style={{
                      color: hackathon.resultColor,
                      borderColor: `${hackathon.resultColor}30`,
                      background: `${hackathon.resultColor}10`,
                    }}
                  >
                    {hackathon.result}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-[20px] font-bold text-white mb-6 flex items-center gap-3">
              <Shield size={22} className="text-[#7B6EF6]" />
              Certifications
            </h2>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-xl p-4 flex items-center justify-between gap-4 card-lift hover:border-[#7B6EF6]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#141424] rounded-lg flex items-center justify-center border border-[#1e1e2e] text-[#7B6EF6] shrink-0">
                      {cert.icon}
                    </div>
                    <span className="font-semibold text-[14px] text-white">{cert.title}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#55556a] border border-[#1e1e2e] px-2.5 py-1 rounded-lg bg-[#141424] shrink-0">
                    {cert.issuer}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Research Papers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[20px] font-bold text-white mb-6 flex items-center gap-3">
            <FlaskConical size={22} className="text-[#7B6EF6]" />
            Research Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESEARCH_PAPERS.map((paper, i) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6 card-lift hover:border-[#7B6EF6]/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B6EF6] border border-[#7B6EF6]/20 bg-[#7B6EF6]/8 px-2.5 py-1 rounded-full">
                    PUBLISHED · {paper.year}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-white mb-3 leading-tight">{paper.title}</h3>
                <p className="text-[13px] text-[#8888a8] leading-relaxed mb-4">{paper.abstract}</p>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#141424] border border-[#1e1e2e] px-2 py-0.5 rounded-md text-[11px] text-[#9999bb]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
