import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] pt-24 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          {/* Column 1: Identity */}
          <div className="md:col-span-2 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <Link href="/" className="text-[24px] font-bold tracking-tight text-white">
              Khushi<span className="text-[#7B6EF6]">.</span>
            </Link>
            <p className="text-[14px] text-[#44445a] max-w-[320px] leading-relaxed">
              Full-Stack SDE with 1+ year of live UK client delivery.
              Offered Full-Time SDE at CreateBytes · CGPA 9.06.
            </p>
            <div className="flex items-center gap-5 mt-2">
              <a href="https://github.com/21khushi" target="_blank" rel="noopener noreferrer" className="text-[#888780] hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/khushi-sikka-bb8997262/" target="_blank" rel="noopener noreferrer" className="text-[#888780] hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <Link href="/contact" className="text-[#888780] hover:text-[#7B6EF6] transition-colors" aria-label="Contact / Email" title="Send a Message">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="text-[15px] font-semibold text-white tracking-wider uppercase">Navigation</h3>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-[14px] text-[#888780] hover:text-white transition-colors">About Me</Link>
              <Link href="/projects" className="text-[14px] text-[#888780] hover:text-white transition-colors">Selected Projects</Link>
              <Link href="/experience" className="text-[14px] text-[#888780] hover:text-white transition-colors">Work Experience</Link>
              <Link href="/skills" className="text-[14px] text-[#888780] hover:text-white transition-colors">Technical Skills</Link>
              <Link href="/achievements" className="text-[14px] text-[#888780] hover:text-white transition-colors">Achievements</Link>
              <Link href="/writing" className="text-[14px] text-[#888780] hover:text-white transition-colors">Writing & Blog</Link>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-6 text-center md:text-right items-center md:items-end">
            <h3 className="text-[15px] font-semibold text-white tracking-wider uppercase">Resources</h3>
            <div className="flex flex-col gap-3">
              <Link href="/achievements" className="text-[14px] text-[#888780] hover:text-white transition-colors">Achievements</Link>
              <Link href="/resume" className="text-[14px] text-[#888780] hover:text-white transition-colors">Download Resume</Link>
              <a href="https://leetcode.com/Khushi_2004" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#888780] hover:text-white transition-colors">LeetCode Profile</a>
              <Link href="/contact" className="text-[14px] text-[#888780] hover:text-white transition-colors">Get in Touch</Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-10 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-[#888780]">
            © {currentYear} Khushi Sikka. All rights reserved.
          </p>
          
          <p className="text-[12px] text-[#888780] flex items-center gap-2">
            Built with <span className="text-white font-medium">Next.js 14</span> & <span className="text-white font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
