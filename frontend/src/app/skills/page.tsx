'use client';

import { motion } from 'framer-motion';
import BackToHome from '@/components/ui/BackToHome';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Terminal, Code, Cpu, Database, CheckCircle2, Award, Zap, Layout, Server, ShieldCheck, PenTool, Book, BookOpen, Search, Feather } from 'lucide-react';

const SKILLS_DATA = {
  radar: [
    { label: 'Frontend', value: 92 },
    { label: 'Backend', value: 96 },
    { label: 'Databases', value: 90 },
    { label: 'DSA & CS', value: 95 },
    { label: 'DevOps & QA', value: 88 },
  ],
  languages: [
    { name: 'JavaScript (ES6+) / TypeScript', level: 95 },
    { name: 'Java (DSA & Core)', level: 92 },
    { name: 'Python', level: 85 },
    { name: 'C++', level: 80 },
  ],
  frameworks: [
    { name: 'NestJS (Backend Architecture)', level: 96 },
    { name: 'React.js & Next.js', level: 94 },
    { name: 'Node.js & Express.js', level: 92 },
    { name: 'RESTful APIs & OTP / RBAC', level: 95 },
  ],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  testingAndQa: ['Selenium (E2E Automation)', 'Postman', 'API Testing', 'Regression Testing'],
  devopsAndTools: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'AWS (Basics)', 'Logging Systems'],
  coreCs: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'System Design (Basics)'],
  softSkills: [
    { name: 'Writing Passion', icon: <PenTool size={20} />, story: 'Deeply passionate about storytelling.' },
    { name: 'Authoring a Book', icon: <Book size={20} />, story: 'Currently writing "Breaking Walls, Building Wings".' },
    { name: 'Research Papers', icon: <Search size={20} />, story: '2 published papers on AI & GenAI Healthcare.' },
    { name: 'Technical Mentorship', icon: <Feather size={20} />, story: 'Co-led paid AI workshop with CEO at CreateBytes.' },
    { name: 'Tech Blogging', icon: <BookOpen size={20} />, story: 'Sharing engineering insights & journey.' }
  ]
};

const RadarChart = () => {
  const size = 300;
  const center = size / 2;
  const radius = center - 40;
  
  const points = SKILLS_DATA.radar.map((s, i) => {
    const angle = (Math.PI * 2 * i / 5) - Math.PI / 2;
    const r = (s.value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      label: s.label
    };
  });

  const pathData = `M ${points[0].x} ${points[0].y} ` + 
    points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center">
      <svg width={size} height={size} className="overflow-visible drop-shadow-[0_0_15px_rgba(123,110,246,0.3)]">
        {/* Grids */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((step) => (
          <circle
            key={step}
            cx={center}
            cy={center}
            r={radius * step}
            fill="none"
            stroke="#2A2A2A"
            strokeWidth="1"
          />
        ))}
        {/* Axes */}
        {points.map((p, i) => {
          const angle = (Math.PI * 2 * i / 5) - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              stroke="#2A2A2A"
              strokeWidth="1"
            />
          );
        })}
        {/* Data Shape */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d={pathData}
          fill="rgba(123, 110, 246, 0.15)"
          stroke="#7B6EF6"
          strokeWidth="2.5"
        />
        {/* Labels */}
        {points.map((p, i) => {
          const angle = (Math.PI * 2 * i / 5) - Math.PI / 2;
          const labelDist = radius + 25;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);
          return (
            <text
              key={i}
              x={lx}
              y={ly}
              textAnchor="middle"
              className="fill-[#888780] text-[10px] font-bold uppercase tracking-widest"
              dominantBaseline="middle"
            >
              {p.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const SkillBar = ({ name, level, index }: { name: string, level: number, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="mb-6 last:mb-0"
  >
    <div className="flex justify-between mb-2">
      <span className="text-[14px] font-medium text-white">{name}</span>
      <span className="text-[12px] font-bold text-[#7B6EF6] opacity-70">{level}%</span>
    </div>
    <div className="h-1.5 w-full bg-[#1A1A1A] rounded-full overflow-hidden border border-[#2A2A2A]">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-full bg-[#7B6EF6] shadow-[0_0_10px_rgba(123,110,246,0.3)]"
      />
    </div>
  </motion.div>
);

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col pt-32 pb-24">
      <div className="flex-1 container-wide">
        <BackToHome />
        
        <header className="mb-24 mt-12 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
          >
            TECH ARSENAL
          </motion.span>
          <h1 className="text-[38px] md:text-[56px] font-bold text-white tracking-tight leading-tight mb-5">
            Data, Logic &amp; <br /> Scalable Design.
          </h1>
          <p className="text-[17px] text-[#55556a] leading-relaxed">
            Battle-tested in production — 1+ year of live UK client delivery across React,
            NestJS, Node.js, MongoDB, and PostgreSQL.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <RadarChart />
          <div className="space-y-12">
            <div>
              <h2 className="text-[20px] font-bold text-white mb-8 flex items-center gap-3">
                <Code className="text-[#7B6EF6]" size={24} /> Languages
              </h2>
              {SKILLS_DATA.languages.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-white mb-8 flex items-center gap-3">
                <Layout className="text-[#7B6EF6]" size={24} /> Frameworks
              </h2>
              {SKILLS_DATA.frameworks.map((s, i) => (
                <SkillBar key={s.name} name={s.name} level={s.level} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <section className="mb-32">
          <h2 className="text-[24px] font-bold text-white mb-12 text-center">Narrative & Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SKILLS_DATA.softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-6 text-center group hover:border-[#7B6EF6]/30 transition-all"
              >
                <div className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#2A2A2A] group-hover:border-[#7B6EF6]/30 transition-colors">
                  <div className="text-[#7B6EF6]">{skill.icon}</div>
                </div>
                <h3 className="text-[15px] font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-[12px] text-[#8888a8] leading-relaxed">{skill.story}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-32 max-w-4xl mx-auto text-center">
          {[
            { icon: <Award size={28} />, value: '300+', label: 'DSA Solved', sub: 'LeetCode · GFG · CN' },
            { icon: <ShieldCheck size={28} />, value: '>92%', label: 'ML Accuracy', sub: 'Fraud Detection AI' },
            { icon: <Zap size={28} />, value: '1+', label: 'Year Prod. Exp', sub: 'Live UK Clients' },
            { icon: <CheckCircle2 size={28} />, value: '9.06', label: 'CGPA', sub: 'Chitkara Univ.' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0f0f1a] border border-[#1e1e2e] rounded-2xl p-6 group hover:border-[#7B6EF6]/30 transition-all cursor-default card-lift"
            >
              <div className="text-[#7B6EF6] mx-auto mb-3 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-[28px] font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[10px] font-bold text-[#55556a] uppercase tracking-widest">{stat.label}</div>
              <div className="mt-2 text-[11px] text-[#333355]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20 border-t border-[#2A2A2A]">
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 flex items-center gap-2">
              <Database className="text-[#7B6EF6]" size={18} /> Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.databases.map(db => (
                <span key={db} className="px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#141414] text-[12.5px] text-[#CCCCCC] font-medium hover:border-[#7B6EF6]/30 transition-colors">
                  {db}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 flex items-center gap-2">
              <ShieldCheck className="text-[#7B6EF6]" size={18} /> Testing & QA
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.testingAndQa.map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#141414] text-[12.5px] text-[#CCCCCC] font-medium hover:border-[#7B6EF6]/30 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 flex items-center gap-2">
              <Terminal className="text-[#7B6EF6]" size={18} /> DevOps & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.devopsAndTools.map(tool => (
                <span key={tool} className="px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#141414] text-[12.5px] text-[#CCCCCC] font-medium hover:border-[#7B6EF6]/30 transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-white mb-5 flex items-center gap-2">
              <Cpu className="text-[#7B6EF6]" size={18} /> Core CS
            </h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.coreCs.map(cs => (
                <span key={cs} className="px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#141414] text-[12.5px] text-[#CCCCCC] font-medium hover:border-[#7B6EF6]/30 transition-colors">
                  {cs}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
