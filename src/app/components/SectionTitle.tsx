interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-primary-text mb-2">{title}</h2>
      {subtitle && <p className="text-primary-muted text-lg">{subtitle}</p>}
      <div className="w-16 h-1 bg-primary-accent mt-4"></div>
    </div>
  );
}
