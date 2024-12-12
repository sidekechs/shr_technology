import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('max-w-2xl mx-auto', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">{title}</h2>
      <p className="text-lg text-emerald-600">{subtitle}</p>
    </div>
  );
}