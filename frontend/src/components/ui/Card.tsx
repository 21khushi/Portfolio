import { cn } from '@/lib/utils';

export default function Card({ children, className, hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={cn(
      'bg-card rounded-2xl border border-border overflow-hidden transition-all',
      hover && 'hover:border-accent/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:-translate-y-1',
      className
    )}>
      {children}
    </div>
  );
}
