import { cn } from '@/lib/utils';

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('px-2.5 py-1 rounded-full text-xs font-medium bg-surface border border-border text-accent', className)}>
      {children}
    </span>
  );
}
