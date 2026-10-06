import { useState, useEffect } from 'react';

export function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setProgress(Number(((currentScrollY / scrollHeight) * 100).toFixed(2)));
      }
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    // Initial check
    updateScroll();

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return progress;
}
