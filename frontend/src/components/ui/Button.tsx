'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  children,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-[#7B6EF6] text-white hover:bg-[#6860e6] rounded-xl shadow-[0_0_20px_rgba(123,110,246,0.25)] hover:shadow-[0_0_28px_rgba(123,110,246,0.40)]',
    secondary: 'bg-transparent border border-[#1e1e2e] text-[#9999bb] hover:border-[#7B6EF6]/40 hover:text-white rounded-xl',
    outline: 'border border-[#7B6EF6] text-[#7B6EF6] hover:bg-[#7B6EF6] hover:text-white rounded-xl',
    ghost: 'text-[#55556a] hover:text-white rounded-xl',
  };

  const sizes = {
    sm: 'h-9 px-4 text-[12px]',
    md: 'h-11 px-6 text-[14px]',
    lg: 'h-14 px-8 text-[15px]',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
