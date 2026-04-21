import Image from "next/image";
import Link from "next/link";

const ads = [
  {
    key: "chair",
    href: "/heated-zero-gravity-recliner-chair-for-seniors",
    eyebrow: "Comfort pick",
    title: "Heated Zero Gravity Recliner Chair",
    description: "A Village-ready comfort upgrade for relaxing after golf, events, errands, or a long social day.",
    image: "https://villagesocialite.com/wp-content/uploads/2026/01/20260108_1443_Image-Generation_remix_01kefnj2v7etqrd1z67vy6q4a5.jpg",
    cta: "See the chair",
  },
  {
    key: "phone",
    href: "/usb-c-phone-handset-for-seniors",
    eyebrow: "Simple tech",
    title: "USB-C Phone Handset for Seniors",
    description: "A clearer, easier handset for people who want smartphone convenience without tiny-speaker frustration.",
    image: "https://villagesocialite.com/wp-content/uploads/2026/01/phoneseniors1.png",
    cta: "See the handset",
  },
  {
    key: "merch",
    href: "/merch",
    eyebrow: "Village drop",
    title: "Official Village Socialite Merch",
    description: "Caps, golf gear, social-hour essentials, and polished pieces made for life around The Villages.",
    image: "https://villagesocialite.com/wp-content/uploads/2026/03/19b9e6c0148.jpg",
    cta: "Shop merch",
  },
] as const;

export type BlogAdKey = (typeof ads)[number]["key"];

export function getBlogAd(indexOrKey: number | BlogAdKey) {
  if (typeof indexOrKey === "string") {
    return ads.find((ad) => ad.key === indexOrKey) ?? ads[0];
  }

  return ads[indexOrKey % ads.length];
}

export function BlogPromoAd({
  index = 0,
  variant = "card",
}: {
  index?: number;
  variant?: "card" | "wide";
}) {
  const ad = getBlogAd(index);

  return (
    <aside
      className={[
        "group overflow-hidden rounded-[1.8rem] border-2 border-[var(--color-teal)]/20 bg-white shadow-[0_24px_60px_rgba(5,20,25,0.08)]",
        variant === "wide" ? "grid gap-0 md:grid-cols-[0.4fr_0.6fr]" : "",
      ].join(" ")}
    >
      <Link href={ad.href} className={variant === "wide" ? "contents" : "block"}>
        <div className={variant === "wide" ? "relative min-h-[240px]" : "relative aspect-[16/10]"}>
          <Image
            src={ad.image}
            alt={ad.title}
            fill
            sizes={variant === "wide" ? "(min-width: 768px) 30vw, 100vw" : "(min-width: 1024px) 28vw, 100vw"}
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
          <p className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-teal-deep)]">
            Sponsored pick
          </p>
        </div>
        <div className="space-y-4 p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-coral)]">
            {ad.eyebrow}
          </p>
          <h3 className="font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight text-[var(--color-ink)]">
            {ad.title}
          </h3>
          <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{ad.description}</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-5 py-2.5 text-sm font-extrabold text-white transition group-hover:-translate-y-0.5 group-hover:bg-[var(--color-teal)]">
            {ad.cta} →
          </span>
        </div>
      </Link>
    </aside>
  );
}
