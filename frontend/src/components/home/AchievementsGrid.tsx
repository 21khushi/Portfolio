'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ACHIEVEMENTS = [
  {
    title: 'Supernova AI MEA, Cairo',
    subtitle: '1st Place Overall · AI Everything Egypt 2026',
    badge: '1ST PLACE OVERALL',
    emoji: '🏆',
    type: 'trophy',
    colSpan: 'col-span-2',
  },
  {
    title: 'Flipkart GRID 6.0',
    subtitle: 'Software Dev Track · Qualified Round 1',
    badge: 'HACKATHON',
    emoji: '⚡',
    type: 'accent',
    colSpan: '',
  },
  {
    title: 'Medecro HealthHack',
    subtitle: 'Healthcare Innovation · Prototype Round',
    badge: 'HACKATHON',
    emoji: '🏥',
    type: 'accent',
    colSpan: '',
  },
  {
    title: '300+ DSA Problems',
    subtitle: 'LeetCode · GFG · Coding Ninjas',
    badge: 'COMPETITIVE',
    emoji: '💻',
    type: 'stat',
    colSpan: '',
  },
  {
    title: '2 Research Papers',
    subtitle: 'AI in Healthcare & GenAI Security (2025)',
    badge: 'RESEARCH',
    emoji: '📄',
    type: 'stat',
    colSpan: '',
  },
];

export default function AchievementsGrid() {
  return (
    <section className="py-28 container-wide">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-4 block"
        >
          ACHIEVEMENTS & RECOGNITION
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[30px] md:text-[44px] font-bold text-white tracking-tight"
        >
          Beyond the code
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
            className={`group rounded-2xl p-6 card-lift cursor-default ${item.colSpan} ${
              item.type === 'trophy'
                ? 'trophy-card col-span-2'
                : 'bg-[#0f0f1a] border border-[#1e1e2e] hover:border-[#2a2a4a]'
            }`}
          >
            {/* Badge label */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border ${
                  item.type === 'trophy'
                    ? 'text-[#f5c842] border-[#f5c842]/30 bg-[#f5c842]/10'
                    : 'text-[#7B6EF6] border-[#7B6EF6]/20 bg-[#7B6EF6]/8'
                }`}
              >
                {item.badge}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span className={`text-[24px] leading-none mt-0.5 ${item.type === 'trophy' ? '' : 'opacity-80'}`}>
                {item.emoji}
              </span>
              <div>
                <h3
                  className={`font-bold mb-1 leading-tight ${
                    item.type === 'trophy'
                      ? 'text-[18px] md:text-[20px] gold-shimmer'
                      : 'text-[14px] text-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    item.type === 'trophy' ? 'text-[13px] text-[#c8aa44]' : 'text-[12px] text-[#55556a]'
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/achievements"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#7B6EF6] hover:text-white transition-colors group"
        >
          View all certifications & hackathons
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
