'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToHome({ href = "/", label = "Back" }: { href?: string, label?: string }) {
  return (
    <div className="fixed top-32 left-6 md:left-10 z-50">
      <Link 
        href={href} 
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#141414] text-[#888780] hover:text-white hover:border-[#7B6EF6]/40 rounded-full border border-[#2A2A2A] transition-all active:scale-95 group shadow-xl"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>{label}</span>
      </Link>
    </div>
  );
}
