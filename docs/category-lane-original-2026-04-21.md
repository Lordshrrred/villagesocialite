# Category Lane Original Snapshot

Saved before the April 21, 2026 category-card refresh so the previous version can be restored if needed.

## `featuredCategories`

```tsx
const featuredCategories = [
  { slug: "events-the-villages",        label: "Events",        icon: "🎉" },
  { slug: "live-music-the-villages",    label: "Live Music",    icon: "🎸" },
  { slug: "food-dining-the-villages",   label: "Food & Dining", icon: "🍽️" },
  { slug: "dating-the-villages",        label: "Dating",        icon: "💛" },
  { slug: "golf-cart-life-the-villages",label: "Golf Carts",   icon: "🛺" },
  { slug: "real-estate-the-villages",   label: "Real Estate",   icon: "🏡" },
  { slug: "nightlife-the-villages",     label: "Nightlife",     icon: "🍸" },
  { slug: "golfing-the-villages",       label: "Golfing",       icon: "⛳" },
];
```

## Category Section

```tsx
<section className="space-y-6">
  <div className="text-center">
    <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">Explore by category</p>
    <h2 className="mt-2 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">Choose your lane.</h2>
  </div>
  <div className="rounded-[2rem] border-2 border-[var(--color-line)] bg-white p-5 shadow-[0_12px_40px_rgba(5,20,25,0.05)] sm:p-6">
    <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
      {featuredCategories.map((cat) => (
        <Link key={cat.slug} href={`/category/${cat.slug}`}
          className="group flex flex-col items-center gap-2.5 rounded-[1.4rem] bg-[var(--color-paper)] p-3.5 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_8px_28px_rgba(0,175,197,0.18)]"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm transition-transform group-hover:scale-110 group-hover:shadow-[0_4px_14px_rgba(0,175,197,0.22)]">
            {cat.icon}
          </span>
          <span className="text-[11px] font-extrabold leading-tight text-[var(--color-ink)]">{cat.label}</span>
        </Link>
      ))}
    </div>
  </div>
  <div className="text-center">
    <Link href="/categories" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-7 py-3 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)] hover:shadow-[0_8px_24px_rgba(0,175,197,0.38)]">
      See all 20 categories →
    </Link>
  </div>
</section>
```
