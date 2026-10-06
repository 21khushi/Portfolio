'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const TECH_GROUPS = [
  {
    label: 'Backend & APIs',
    skills: [
      { name: 'NestJS', color: '#E0234E' },
      { name: 'Node.js', color: '#68A063' },
      { name: 'Express.js', color: '#888888' },
      { name: 'RESTful APIs', color: '#009688' },
      { name: 'OTP Authentication', color: '#10b981' },
      { name: 'Role-Based Access Control', color: '#7B6EF6' },
    ],
  },
  {
    label: 'Frontend Engineering',
    skills: [
      { name: 'React.js', color: '#61DAFB' },
      { name: 'Next.js', color: '#AAAAAA' },
      { name: 'HTML5 & CSS3', color: '#E34F26' },
      { name: 'Responsive UI', color: '#38BDF8' },
      { name: 'Core Web Vitals Optimization', color: '#F59E0B' },
    ],
  },
  {
    label: 'Programming Languages',
    skills: [
      { name: 'JavaScript (ES6+)', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Java', color: '#F89820' },
      { name: 'C++', color: '#00599C' },
      { name: 'Python', color: '#FFD43B' },
    ],
  },
  {
    label: 'Databases & Storage',
    skills: [
      { name: 'MongoDB', color: '#47A248' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'MySQL', color: '#4479A1' },
      { name: 'Firebase', color: '#FFCA28' },
    ],
  },
  {
    label: 'Testing, DevOps & Infrastructure',
    skills: [
      { name: 'Selenium (E2E Automation)', color: '#43B02A' },
      { name: 'Postman', color: '#FF6C37' },
      { name: 'GitHub Actions (CI/CD)', color: '#2088FF' },
      { name: 'Git & GitHub', color: '#F05032' },
      { name: 'AWS (Basics)', color: '#FF9900' },
      { name: 'Logging Systems', color: '#8B5CF6' },
    ],
  },
  {
    label: 'Core Computer Science',
    skills: [
      { name: 'Data Structures & Algorithms', color: '#7B6EF6' },
      { name: 'Operating Systems', color: '#06B6D4' },
      { name: 'DBMS', color: '#10B981' },
      { name: 'Computer Networks', color: '#3B82F6' },
      { name: 'System Design (Basics)', color: '#EC4899' },
    ],
  },
];

export default function TechArsenal() {
  return (
    <section className="py-28 container-wide">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
        >
          TECH ARSENAL
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[30px] md:text-[44px] font-bold text-white tracking-tight mb-4"
        >
          Tools I ship with
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[16px] text-[#55556a] max-w-[520px] mx-auto"
        >
          Battle-tested in production — 1+ year of live client delivery across 3 products.
        </motion.p>
      </div>

      <div className="space-y-10">
        {TECH_GROUPS.map((group, groupIdx) => (
          <div key={group.label} className="text-center">
            <h3 className="text-[11px] text-[#44445a] font-bold uppercase tracking-[0.2em] mb-5">
              {group.label}
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {group.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: groupIdx * 0.05 + skillIdx * 0.04,
                    duration: 0.3,
                  }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="group flex items-center gap-2.5 bg-[#0f0f1a] border border-[#1e1e2e] rounded-full px-5 py-2.5 hover:border-[#7B6EF6]/40 transition-all duration-200 cursor-default"
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}60` }}
                  />
                  <span className="text-[13px] text-[#9999bb] group-hover:text-white transition-colors font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#7B6EF6] hover:text-white transition-colors group"
        >
          View detailed skill breakdown
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
