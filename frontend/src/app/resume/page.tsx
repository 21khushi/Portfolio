'use client';

import { motion } from 'framer-motion';
import BackToHome from '@/components/ui/BackToHome';
import Button from '@/components/ui/Button';
import { Download, FileText, CheckCircle2, Briefcase, GraduationCap, Trophy, Code2, Globe, Mail, Github, Linkedin } from 'lucide-react';

// 🔗 Update this to your deployed domain once live
const PORTFOLIO_URL = 'https://khushisikka.vercel.app'; // ← change this after deployment

const CORE_SKILLS = [
  'Languages: JavaScript (ES6+), TypeScript, Java, C++, Python',
  'Frontend: React.js, Next.js, HTML5, CSS3, Responsive UI, Core Web Vitals',
  'Backend: Node.js, NestJS, Express.js, RESTful APIs, OTP Auth, RBAC',
  'Databases: MongoDB, PostgreSQL, MySQL, Firebase',
  'Testing & QA: Selenium (E2E Automation), Postman, API Testing',
  'DevOps & Tools: Git, GitHub, GitHub Actions, CI/CD, AWS (Basics), Logging',
  'Core CS: DSA, Operating Systems, DBMS, Computer Networks, System Design',
];

const EXPERIENCE = [
  {
    title: 'Software Development Engineer Intern',
    company: 'CreateBytes · Gurgaon, India',
    date: 'Sep 2025 – Sep 2026 · Offered Full-Time SDE Role',
    color: '#7B6EF6',
    liveClients: [
      {
        name: 'Luxe Fitness – Gym Fitness Platform',
        location: 'Bristol City Center, Bedminster, Birmingham (Live Client)',
        bullets: [
          'Architected and implemented end-to-end backend modules for payment processing, membership onboarding, and subscription scheduling using Node.js and MongoDB, directly impacting revenue operations across 3 gym locations.',
          'Built and maintained the CMS frontend enabling gym staff to manage memberships and schedules.',
          'Improved Core Web Vitals scores (LCP, FID, CLS) for the public website, boosting SEO performance and user experience.',
          'Integrated a structured logging system for API monitoring, enabling proactive error detection and faster debugging in production.',
          'Served as primary technical liaison for the client, conducting feature walkthroughs, resolving production bugs, and translating business requirements into engineering tasks.',
        ],
      },
      {
        name: 'Krigat – AI Powered Motion Tracking Platform',
        location: 'Live Client · 1st Place Supernova AI MEA Cairo 2026',
        bullets: [
          'Developed the admin panel backend services using NestJS and frontend modules for an AI motion-tracking application enabling real-time fitness analysis.',
          'Implemented video capture, movement recording review, and exercise tracking on the React Native application.',
          'Won 1st Place Overall at Supernova AI MEA, Cairo (AI Everything Egypt 2026).',
        ],
      },
      {
        name: 'RedPill Verify – Condition-Based Transaction / Escrow Platform',
        location: 'Live Client',
        bullets: [
          'Built the complete backend from scratch using NestJS, including OTP-based authentication, role-based access control, deal creation flows, and proposal management.',
          'Developed in-app notification systems and integrated third-party services and machine learning models into backend APIs.',
          'Delivered secure buyer-seller transaction workflows with conditional release logic while resolving production edge cases.',
        ],
      },
    ],
    internalProjects: [
      {
        name: 'CBExperts – AI Lead Generation & Workshop Platform',
        location: 'Internal Project',
        bullets: [
          'Built an end-to-end multi-agent AI outreach pipeline (scouting, research, strategy, drafting, Gmail sending, reply handling), validated on Apollo lead data.',
          'Co-led the first paid workshop with the CEO, delivering the live demo, technical guide, and workflow documentation.',
        ],
      },
      {
        name: 'CB-Extensions – Attendance & Task Logging Extension',
        location: 'Internal Project',
        bullets: [
          'Built an extension for CB-Workspace to streamline attendance management and daily task logging for the team.',
        ],
      },
      {
        name: 'CB-Campaigns – Marketing Landing Pages',
        location: 'Internal Project',
        bullets: [
          'Developed four mobile-responsive landing pages (HealthTech UK/US, FinTech UK/US) end to end on the frontend.',
        ],
      },
    ],
    crossProject: [
      'Implemented automated end-to-end test suites using Selenium, reducing regression risk and improving release confidence.',
      'Managed deployments manually and through GitHub Actions CI/CD pipelines, ensuring consistent and repeatable release processes.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'B.E. Computer Science Engineering',
    institute: 'Chitkara University, Punjab',
    duration: '2022 – Aug 2026',
    gpa: 'CGPA: 9.06',
  },
  {
    degree: 'Class XII (CBSE)',
    institute: 'Scholars Rosary Sr. Sec. School',
    duration: '2022',
    gpa: '93.6%',
  },
  {
    degree: 'Class X (CBSE)',
    institute: 'Scholars Rosary Sr. Sec. School',
    duration: '2020',
    gpa: '94.6%',
  },
];

const ACHIEVEMENTS = [
  'Supernova AI MEA, Cairo (AI Everything Egypt 2026) — 1st Place Overall',
  'Flipkart GRID 6.0 — Software Dev Track, Qualified Round 1',
  'Medecro HealthHack 2024 — Prototype Round',
  'Research: "Security and Governance Framework for Generative AI in Healthcare" (2025)',
  'Research: "The Rise of AI in Healthcare" — Analytical Study',
  '300+ DSA Problems Solved across LeetCode, GFG & Coding Ninjas',
  'Certifications: Python & CSS (HackerRank, Coding Ninjas), GenAI & ChatGPT (GFG)',
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#080810] pt-32 pb-24">
      <div className="container-wide">
        <BackToHome />

        {/* Header */}
        <header className="mt-12 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-3 block"
            >
              RESUME
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[38px] md:text-[52px] font-bold text-white tracking-tight leading-tight"
            >
              Khushi Sikka
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[15px] text-[#8888a8] mt-2 flex flex-wrap items-center gap-x-4 gap-y-1"
            >
              <a href="mailto:gunnusikka21@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail size={13} className="text-[#7B6EF6]" />
                gunnusikka21@gmail.com
              </a>
              <span className="text-[#22223a] hidden sm:inline">|</span>
              <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors group">
                <Globe size={13} className="text-[#7B6EF6] group-hover:animate-spin" />
                <span className="text-[#7B6EF6] font-medium">Portfolio Website ↗</span>
              </a>
              <span className="text-[#22223a] hidden sm:inline">|</span>
              <a href="https://github.com/21khushi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Github size={13} className="text-[#7B6EF6]" />
                GitHub
              </a>
              <span className="text-[#22223a] hidden sm:inline">|</span>
              <a href="https://www.linkedin.com/in/khushi-sikka-bb8997262/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Linkedin size={13} className="text-[#7B6EF6]" />
                LinkedIn
              </a>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3"
          >
            <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" size="lg">
              <Download className="mr-2" size={16} />
              Download PDF
            </Button>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-5">
                Quick Facts
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-bold text-[#44445a] uppercase tracking-wider mb-1">
                    Role
                  </p>
                  <p className="text-[14px] text-white font-semibold">Full-Stack SDE</p>
                  <p className="text-[12px] text-emerald-400 font-medium">Offered Full-Time SDE @ CreateBytes</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#44445a] uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-[14px] text-white">Gurgaon, India</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#44445a] uppercase tracking-wider mb-1">
                    Education
                  </p>
                  <p className="text-[14px] text-white font-bold">CGPA 9.06</p>
                  <p className="text-[12px] text-[#55556a]">Chitkara University · CSE</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#44445a] uppercase tracking-wider mb-1">
                    DSA
                  </p>
                  <p className="text-[14px] text-white">300+ Problems</p>
                  <p className="text-[12px] text-[#55556a]">LeetCode · GFG · Coding Ninjas</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#44445a] uppercase tracking-wider mb-1">
                    Portfolio
                  </p>
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#7B6EF6] font-semibold hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <Globe size={12} />
                    khushisikka.vercel.app
                    <span className="text-[#33334a] group-hover:text-[#7B6EF6] transition-colors">↗</span>
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#44445a] uppercase tracking-wider mb-1">
                    Status
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
                    <span className="text-[13px] text-emerald-400 font-semibold">
                      Open to Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-5 flex items-center gap-2">
                <Code2 size={14} /> Core Skills
              </h2>
              <ul className="space-y-3">
                {CORE_SKILLS.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-[13px] text-[#8888a8]">
                    <CheckCircle2 className="text-[#7B6EF6] shrink-0 mt-0.5" size={13} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-5 flex items-center gap-2">
                <Trophy size={14} /> Achievements
              </h2>
              <ul className="space-y-3">
                {ACHIEVEMENTS.map((item) => (
                  <li key={item} className="text-[13px] text-[#8888a8] leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* PDF Viewer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl overflow-hidden h-[620px] relative"
            >
              <div className="absolute top-0 inset-x-0 h-10 bg-[#0f0f1a] border-b border-[#1e1e2e] flex items-center justify-between px-5 z-10">
                <div className="flex items-center gap-2 text-[12px] text-[#44445a] font-medium">
                  <FileText size={13} className="text-[#7B6EF6]" />
                  resume.pdf
                </div>
                <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
                  Open in New Tab ↗
                </Button>
              </div>
              <div className="pt-10 h-full">
                <object
                  data="/resume.pdf"
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  className="rounded-b-2xl"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <FileText size={40} className="text-[#333355] mb-4" />
                    <p className="text-[15px] font-medium text-white mb-2">
                      PDF viewer not supported
                    </p>
                    <p className="text-[13px] text-[#55556a] mb-6">
                      Your browser doesn&apos;t support inline PDF viewing.
                    </p>
                    <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume PDF
                    </Button>
                  </div>
                </object>
              </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-5 flex items-center gap-2">
                <Briefcase size={14} /> Work Experience
              </h2>
              {EXPERIENCE.map((exp) => (
                <div
                  key={exp.title}
                  className="border-l-2 pl-5 space-y-6"
                  style={{ borderColor: exp.color }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[17px] font-bold text-white">{exp.title}</h3>
                      <p className="text-[13px] font-semibold" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-bold border border-emerald-500/20 bg-emerald-500/8 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                      {exp.date}
                    </div>
                  </div>

                  {/* Live Clients */}
                  <div>
                    <h4 className="text-[12px] font-bold text-emerald-400 uppercase tracking-wider mb-3">
                      Live Client Products
                    </h4>
                    <div className="space-y-4">
                      {exp.liveClients.map((client) => (
                        <div key={client.name} className="bg-[#141424] border border-[#1e1e2e] rounded-xl p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h5 className="text-[14px] font-bold text-white">{client.name}</h5>
                            <span className="text-[11px] text-[#7B6EF6] font-medium">{client.location}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {client.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2 text-[12.5px] text-[#8888a8] leading-relaxed">
                                <span className="text-[#7B6EF6] mt-0.5 shrink-0">▸</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Internal Projects */}
                  <div>
                    <h4 className="text-[12px] font-bold text-[#a89cf7] uppercase tracking-wider mb-3">
                      Internal Projects
                    </h4>
                    <div className="space-y-4">
                      {exp.internalProjects.map((proj) => (
                        <div key={proj.name} className="bg-[#141424] border border-[#1e1e2e] rounded-xl p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h5 className="text-[14px] font-bold text-white">{proj.name}</h5>
                            <span className="text-[11px] text-[#8888a8] font-medium">{proj.location}</span>
                          </div>
                          <ul className="space-y-1.5">
                            {proj.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2 text-[12.5px] text-[#8888a8] leading-relaxed">
                                <span className="text-[#7B6EF6] mt-0.5 shrink-0">▸</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cross-Project Contributions */}
                  <div className="bg-[#141424]/60 border border-[#1e1e2e] rounded-xl p-4">
                    <h4 className="text-[12px] font-bold text-[#7B6EF6] uppercase tracking-wider mb-2">
                      Cross-Project Contributions
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.crossProject.map((item) => (
                        <li key={item} className="flex gap-2 text-[12.5px] text-[#8888a8] leading-relaxed">
                          <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6"
            >
              <h2 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#7B6EF6] mb-5 flex items-center gap-2">
                <GraduationCap size={14} /> Education
              </h2>
              <div className="space-y-4">
                {EDUCATION.map((edu, i) => (
                  <div
                    key={edu.degree}
                    className={`flex items-start justify-between gap-4 ${i < EDUCATION.length - 1
                        ? 'pb-4 border-b border-[#1e1e2e]'
                        : ''
                      }`}
                  >
                    <div>
                      <h3 className="text-[14px] font-bold text-white">{edu.degree}</h3>
                      <p className="text-[12px] text-[#55556a]">{edu.institute}</p>
                      <p className="text-[11px] text-[#33334a]">{edu.duration}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[15px] font-bold text-[#7B6EF6]">{edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
