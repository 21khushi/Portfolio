'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BookTeaser() {
  return (
    <section className="py-28 bg-[#0a0a14] border-y border-[#1e1e2e] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(168,140,247,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(123,110,246,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Book Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="relative" style={{ perspective: '1000px' }}>
                {/* Book shadow */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[160px] h-8 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse, rgba(123,110,246,0.3) 0%, transparent 70%)',
                    filter: 'blur(12px)',
                  }}
                />

                {/* Book body */}
                <motion.div
                  animate={{ rotateY: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative"
                >
                  {/* Book spine */}
                  <div
                    className="absolute -left-6 top-0 bottom-0 w-6 rounded-l-sm"
                    style={{
                      background: 'linear-gradient(180deg, #3d3580, #241e60)',
                      transform: 'rotateY(-90deg) translateZ(12px)',
                      transformOrigin: 'right center',
                    }}
                  />

                  {/* Book cover */}
                  <div
                    className="relative w-[200px] h-[280px] rounded-r-lg overflow-hidden"
                    style={{
                      background: 'linear-gradient(145deg, #1a1040 0%, #0d0826 40%, #1a1040 100%)',
                      boxShadow:
                        '4px 8px 30px rgba(0,0,0,0.6), inset -2px 0 0 rgba(255,255,255,0.05)',
                    }}
                  >
                    {/* Cover design */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
                      {/* Stars / particles */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-white/20"
                          style={{
                            top: `${15 + i * 12}%`,
                            left: `${10 + (i % 3) * 30}%`,
                            animation: `glow-pulse ${2 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.4}s`,
                          }}
                        />
                      ))}

                      {/* Wings icon */}
                      <div className="mb-4 text-[32px]" style={{ filter: 'drop-shadow(0 0 8px rgba(168,140,247,0.5))' }}>
                        🦋
                      </div>

                      {/* Title */}
                      <h3
                        className="text-[13px] font-bold leading-tight mb-2"
                        style={{
                          background: 'linear-gradient(135deg, #c4b5fd, #7B6EF6, #a89cf7)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Breaking Walls,
                        <br />
                        Building Wings
                      </h3>

                      {/* Divider */}
                      <div
                        className="w-12 h-[1px] my-3"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(168,140,247,0.5), transparent)' }}
                      />

                      <p className="text-[9px] text-[#8888aa] uppercase tracking-[0.15em] font-medium">
                        Khushi Sikka
                      </p>

                      {/* WIP badge */}
                      <div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider text-[#7B6EF6] border border-[#7B6EF6]/30"
                        style={{ background: 'rgba(123,110,246,0.1)' }}
                      >
                        Work in Progress
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* WIP badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7B6EF6]/25 bg-[#7B6EF6]/8 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B6EF6] live-dot" />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#a89cf7]">
                  Book in Progress · Writing Since 2025
                </span>
              </div>

              <h2 className="text-[26px] md:text-[36px] font-bold text-white tracking-tight leading-tight mb-4">
                Breaking Walls,{' '}
                <span className="shimmer-text">Building Wings</span>
              </h2>

              <p className="text-[16px] text-[#8888a8] leading-[1.8] mb-6">
                The story of every young teen who goes through a period of{' '}
                <span className="text-white font-medium">confusion</span>,{' '}
                <span className="text-white font-medium">inner struggles</span>, and finding
                themselves in the chaos — a deeply personal narrative about identity, growth, and
                transformation.
              </p>

              <blockquote className="border-l-2 border-[#7B6EF6]/50 pl-5 mb-8 text-[15px] italic text-[#6868a0] leading-relaxed">
                "Writing has always been my first language. Before code, there were words — and this book is
                the most honest thing I've ever built."
              </blockquote>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/writing"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#7B6EF6] border border-[#7B6EF6]/25 px-4 py-2.5 rounded-lg hover:bg-[#7B6EF6]/10 transition-all duration-200"
                >
                  Read my writing →
                </Link>
                <Link
                  href="/contact?subject=Book%20Collaboration"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-[#55556a] hover:text-white transition-colors duration-200 py-2.5"
                >
                  Collaborate on this project ↗
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
