type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className={`text-[11px] font-semibold uppercase tracking-[0.32em] ${light ? "text-[var(--color-seafoam)]" : "text-[var(--color-coral)]"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-[family:var(--font-cormorant)] text-4xl font-semibold tracking-tight sm:text-5xl ${light ? "text-white" : "text-[var(--color-ink)]"}`}>
        {title}
      </h2>
      <p className={`text-base leading-8 sm:text-lg ${light ? "text-white/76" : "text-[var(--color-ink-soft)]"}`}>
        {description}
      </p>
    </div>
  );
}
