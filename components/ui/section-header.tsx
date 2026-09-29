import { cn } from "cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  accent?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  accent,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      {accent && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--oxy-teal)]">
          {accent}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--oxy-navy)] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
      <PulseDivider className="mt-6" />
    </div>
  );
}

export function PulseDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      className={cn("mx-auto h-3 w-32 text-[var(--oxy-teal)]", className)}
      aria-hidden="true"
    >
      <path
        d="M0 6 H60 L70 2 L80 10 L90 6 L100 6 L110 1 L120 11 L130 6 L200 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
