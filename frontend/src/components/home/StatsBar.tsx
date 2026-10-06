'use client';
import { motion } from 'framer-motion';

const STATS = [
  { label: 'Projects Built', value: '4+', suffix: '', icon: '📦' },
  { label: 'DSA Solutions', value: '300', suffix: '+', icon: '💻' },
  { label: 'Internship', value: '1', suffix: '', icon: '🏢' },
  { label: 'Research Paper', value: '1', suffix: '', icon: '📄' },
];

export default function StatsBar() {
  return (
    <section className="py-12 border-y border-border bg-surface/30 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </span>
                <span className="text-2xl text-accent font-medium ml-1">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-sm font-medium text-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
