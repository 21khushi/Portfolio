'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

// Tech icons using simpler inline SVGs or text to avoid bulky external libraries just for one section
const TECH = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'NestJS', color: '#E0234E' },
  { name: 'Node.js', color: '#339933' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#007396' },
  { name: 'Git', color: '#F05032' },
];

export default function TechStack() {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold uppercase tracking-widest text-accent mb-8"
        >
          Tech Arsenal
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {TECH.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-xl bg-surface border border-border flex items-center gap-2 hover:border-accent/50 hover:bg-card transition-colors cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.color }} />
              <span className="font-medium text-sm md:text-base text-foreground">{t.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <Button href="/skills" variant="ghost" className="group">
            View All Skills <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
