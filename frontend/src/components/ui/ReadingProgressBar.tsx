'use client';

import React from 'react';
import { useReadingProgress } from '@/hooks/useReadingProgress';

export function ReadingProgressBar() {
  const progress = useReadingProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3.5px] z-[999] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#7B6EF6] via-[#9386f8] to-[#38bdf8] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(123,110,246,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
