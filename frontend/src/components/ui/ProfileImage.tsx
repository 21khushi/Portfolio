'use client';

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className }: ProfileImageProps) {
  return (
    <img
      src="/profile.jpg"
      alt="Khushi Sikka — Full-Stack SDE"
      className={`w-full h-full object-cover ${className ?? ''}`}
      onError={(e) => {
        const t = e.target as HTMLImageElement;
        t.style.display = 'none';
        const p = t.parentElement;
        if (p) {
          p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:3rem;font-weight:800;background:linear-gradient(135deg,#7B6EF6,#a89cf7);color:white;border-radius:14px;">KS</div>`;
        }
      }}
    />
  );
}
