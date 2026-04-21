type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
        {eyebrow}
      </p>
      <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
