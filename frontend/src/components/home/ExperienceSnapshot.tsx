import { Experience } from '@/types';
import { formatMonthYear } from '@/lib/utils';
import { Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ExperienceSnapshot({ experience }: { experience: Experience | null }) {
  if (!experience) return null;

  return (
    <section className="py-24 bg-surface/50 border-y border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-xl mb-6">
            <Briefcase size={28} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Current Focus</h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Gaining hands-on industry experience building real-world applications.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent to-highlight" />
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-1">{experience.role}</h3>
              <p className="text-lg text-accent font-medium">{experience.company}</p>
            </div>
            <div className="text-left md:text-right">
              <span className="inline-block px-3 py-1 bg-surface border border-border rounded-full text-sm font-medium mb-2">
                {formatMonthYear(experience.startDate)} – {experience.endDate ? formatMonthYear(experience.endDate) : 'Present'}
              </span>
              <p className="text-muted text-sm flex items-center md:justify-end">
                📍 {experience.location}
              </p>
            </div>
          </div>

          <ul className="space-y-4 mb-10">
            {experience.highlights.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start text-muted">
                <span className="text-accent mr-3 mt-1">▹</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <Link 
              href="/experience" 
              className="inline-flex items-center font-medium text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-1"
            >
              View Full Experience <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
