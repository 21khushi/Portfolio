'use client';

import { motion } from 'framer-motion';
import { Github, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  type: string;
  summary: string;
  tags: string[];
  github?: string;
  live?: string;
  slug: string;
  index: number;
}

export default function ProjectCard({
  title,
  type,
  summary,
  tags,
  github,
  live,
  slug,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-[#141414] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#7B6EF6]/30 transition-all duration-300 flex flex-col h-full"
    >
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[11px] font-bold text-[#7B6EF6] uppercase tracking-[0.2em] bg-[#1E1D40] px-2.5 py-1 rounded border border-[#7B6EF6]/20">
            {type}
          </span>
          <div className="flex gap-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-[#888780] hover:text-white transition-colors" title="View Source">
                <Github size={20} />
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="text-[#888780] hover:text-[#7B6EF6] transition-colors" title="Live Preview">
                <Globe size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-[22px] font-bold text-white mb-4 group-hover:text-white transition-colors">
          {title}
        </h3>

        <p className="text-[15px] text-[#888780] leading-relaxed mb-8 flex-1">
          {summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="bg-[#1A1A1A] border border-[#2A2A2A] px-3 py-1 rounded-full text-[12px] text-[#CCCCCC] font-medium">
              {tag}
            </span>
          ))}
        </div>

        <Link 
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-white group/btn group-hover:text-[#7B6EF6] transition-colors"
        >
          Engineering Story 
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
