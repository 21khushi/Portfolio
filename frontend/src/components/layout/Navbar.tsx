'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '../ui/Button';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/writing', label: 'Writing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-[#2A2A2A] py-4' : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Link href="/" className="text-[20px] font-medium tracking-tight text-white hover:opacity-80 transition-opacity">
          Khushi<span className="text-[#7B6EF6]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[14px] font-medium transition-colors hover:text-white',
                  pathname.startsWith(link.href) ? 'text-white' : 'text-[#888780]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/resume"
              className="text-[14px] font-medium text-[#888780] hover:text-white transition-colors"
            >
              Resume
            </Link>
            <Button href="/contact" size="sm" className="h-9">
              Contact
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#0A0A0A] border-b border-[#2A2A2A] md:hidden"
          >
            <nav className="flex flex-col py-6">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-6 py-4 text-[15px] font-medium',
                    pathname.startsWith(link.href) ? 'text-[#7B6EF6] bg-[#141414]' : 'text-[#888780]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-[#2A2A2A] my-4 mx-6" />
              <Link href="/resume" className="px-6 py-4 text-[15px] font-medium text-[#888780]">
                Resume
              </Link>
              <div className="px-6 pt-4">
                <Button href="/contact" className="w-full">
                  Contact Me
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
