'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function ContactCTA() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(123,110,246,0.10) 0%, transparent 65%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[13px] font-bold text-[#7B6EF6] uppercase tracking-[0.22em] mb-6 block"
          >
            GET IN TOUCH
          </motion.span>

          <h2 className="text-[36px] md:text-[58px] font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
            Let&apos;s Build Something{' '}
            <span className="shimmer-text">Together.</span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#55556a] leading-[1.75] mb-10 max-w-[480px]">
            Open to full-time SDE roles and meaningful engineering collaborations. I typically
            reply within{' '}
            <span className="text-white font-medium">24 hours</span>.
          </p>

          {/* Quick links before CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['React.js', 'NestJS', 'Node.js', 'PostgreSQL', 'MongoDB'].map((tech) => (
              <span
                key={tech}
                className="text-[12px] font-medium text-[#44445a] border border-[#1e1e2e] px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button href="/contact" size="lg" className="w-full sm:w-[210px] h-14 text-[15px]">
              Start a Conversation →
            </Button>
            <Button
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gunnusikka21@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-[210px] h-14 text-[15px]"
            >
              Email Directly ↗
            </Button>
          </div>

          {/* Social proof */}
          <p className="mt-10 text-[13px] text-[#333355] font-medium">
            gunnusikka21@gmail.com · Gurgaon, India · Open to relocation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
