'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '1+', suffix: ' yr', label: 'PRODUCTION SDE', sub: 'CreateBytes · FTE Offer' },
  { value: '3', suffix: '', label: 'LIVE UK CLIENTS', sub: 'Bristol · Birmingham · London' },
  { value: '300+', suffix: '', label: 'DSA SOLVED', sub: 'LeetCode · GFG · CN' },
  { value: '9.06', suffix: '', label: 'CGPA', sub: 'Chitkara University' },
  { value: '2', suffix: '', label: 'RESEARCH PAPERS', sub: 'AI & Healthcare · GenAI' },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const isFloat = !Number.isInteger(target);
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({
  stat,
  index,
  isLast,
}: {
  stat: (typeof STATS)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
  const prefix = stat.value.startsWith('+') ? '+' : '';
  const suffix = stat.value.endsWith('+') ? '+' : stat.suffix;
  const counted = useCountUp(numericValue, 1000, visible);

  const displayValue = Number.isInteger(numericValue)
    ? `${prefix}${counted}${suffix}`
    : `${prefix}${counted.toFixed(2)}${suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group flex flex-col items-center text-center px-4 py-2 stat-hover ${
        !isLast ? 'md:border-r border-[#1e1e2e]' : ''
      }`}
    >
      <span className="stat-value text-[34px] md:text-[44px] font-bold text-white mb-1.5 transition-all duration-300 group-hover:text-[#7B6EF6]">
        {displayValue}
      </span>
      <span className="text-[10px] md:text-[11px] font-bold text-[#55556a] uppercase tracking-[0.22em] mb-1">
        {stat.label}
      </span>
      <span className="text-[11px] text-[#44445a] font-medium">{stat.sub}</span>
    </motion.div>
  );
}

export default function StatsRow() {
  return (
    <section className="border-y border-[#1e1e2e] py-16 bg-[#0a0a14] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(123,110,246,0.04) 0%, transparent 70%)',
        }}
      />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 items-center">
          {STATS.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              isLast={index === STATS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
