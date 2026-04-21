import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Village Socialite™ Merch | Official Collection",
  description:
    "Shop the official Village Socialite™ collection — premium embroidered apparel, golf gear, tumblers, and lifestyle essentials made for life in The Villages.",
  alternates: { canonical: "/merch" },
};

const products = [
  {
    name: "Golf Balls (6-Pack)",
    category: "Signature Equipment",
    price: "$39.99",
    description:
      "Golf is part of everyday life — these balls are made for enjoying it. Designed for casual rounds, featuring a durable Surlyn cover for reliable performance.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/19b9e6c0148.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Personalized Golf Balls",
    tags: ["⛳ 6-Pack", "💎 Surlyn Cover", "🎁 Perfect Gift"],
    href: "https://village-socialite.printify.me/product/26104456",
    featured: true,
  },
  {
    name: "Classic Embroidered Cap",
    category: "Premium Headwear",
    price: "$54.99",
    description:
      "A classic cap that feels right the moment you put it on. Made from soft, breathable cotton with a relaxed, low-profile fit — perfect for the golf cart or a walk in the Florida sun.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/19b9e744290.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Classic Embroidered Cap",
    tags: ["🧢 100% Cotton", "✨ Brass Buckle", "☀️ Low Profile"],
    href: "https://village-socialite.printify.me/product/26104184/village-socialite-classic-embroidered-cap-comfortable-everyday-fit",
    featured: true,
  },
  {
    name: "Classic Embroidered Polo",
    category: "Premium Apparel",
    price: "$59.99",
    description:
      "Comfortable enough for all day. Polished enough for anywhere. A relaxed fit polo with embroidered Village Socialite branding and side vents for Florida weather.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/village-socialite-classic-embroidered-unisex-polo-relaxed-fit-everyday-style.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Classic Embroidered Unisex Polo",
    tags: ["👕 Relaxed Fit", "🌬️ Side Vents", "✨ Metal Buttons"],
    href: "https://village-socialite.printify.me/product/26104353/village-socialite-classic-embroidered-unisex-polo-relaxed-fit-everyday-style",
    featured: true,
  },
  {
    name: "12oz Insulated Tumbler",
    category: "Lifestyle Essentials",
    price: "$28.99",
    description:
      "The right drink at the perfect temperature. Whether it's iced tea at the town square or a cocktail at social hour — this 12oz copper vacuum tumbler keeps it cold for 24 hours.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/19b9e728928.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Insulated Wine & Cocktail Cup",
    tags: ["❄️ 24h Cold", "🔥 6h Hot", "🥤 BPA Free Lid"],
    href: "https://village-socialite.printify.me/product/26103859/village-socialite-insulated-wine-and-amp-cocktail-cup-12oz-copper-vacuum-tumbler",
    featured: false,
  },
  {
    name: "Pet Bandana Collar",
    category: "The Social Pet Collection",
    price: "$33.99",
    description:
      "Every walk is a social event — even for your dog. Add a polished, playful touch to your pet's everyday look with this comfortable, adjustable bandana collar.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/19b9e71aa80.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Pet Bandana Collar",
    tags: ["🐾 4 Sizes", "🧼 Machine Washable", "✨ Durable Polyester"],
    href: "https://village-socialite.printify.me/product/26103942/village-socialite-pet-bandana-collar-stylish-everyday-dog-accessory",
    featured: false,
  },
  {
    name: "Microfiber Golf Towel",
    category: "On the Course",
    price: "$24.99",
    description:
      "A simple essential that stays with you every round. Our 16″ microfiber golf towel with a gold grommet clip keeps your clubs clean and your game sharp.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/village-socialite-golf-towel-durable-microfiber-with-grommet.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Durable Microfiber Golf Towel",
    tags: ["🧼 Absorbent Microfiber", "✨ Gold Grommet", "⛳ Cart Ready"],
    href: "https://village-socialite.printify.me/product/26104545/village-socialite-golf-towel-durable-microfiber-with-grommet",
    featured: false,
  },
  {
    name: "Double-Sided Social Flag",
    category: "Home & Patio",
    price: "$39.99",
    description:
      "Let your space say what you love about life. Our 12″ × 18″ double-sided flag with metal grommets and fade-resistant printing is perfect for the patio, yard, or golf cart.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/19b9e721fb0.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Double-Sided Patio & Social Flag",
    tags: ["🔄 Double-Sided", "🏗️ Metal Grommets", "☀️ Fade Resistant"],
    href: "https://village-socialite.printify.me/product/26104017/village-socialite-double-sided-flag-patio-yard-and-amp-social-gathering-decor",
    featured: false,
  },
  {
    name: "Aluminum Bookmark",
    category: "Thoughtful Gifts",
    price: "$11.99",
    description:
      "For the moments you slow down and turn the page. This sleek aluminum bookmark with a page-holding slot is the perfect gift for the readers in your life.",
    image: "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/19b9e710288.jpg?w=640&ssl=1",
    alt: "Village Socialite™ Aluminum Bookmark",
    tags: ["📖 Page-Holding Slot", "📎 Slim Aluminum", "🎁 Thoughtful Gift"],
    href: "https://village-socialite.printify.me/product/26104091/village-socialite-aluminum-bookmark-a-thoughtful-gift-for-readers",
    featured: false,
  },
];

export default function MerchPage() {
  const featured = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured);

  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(420px, 58vh, 640px)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/19b9e6c0148.jpg?w=640&ssl=1"
            alt="Village Socialite merchandise — golf balls on grass"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Left-to-right gradient so image shows on right, text pops on left */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,30,40,0.95)_0%,rgba(0,50,65,0.80)_40%,rgba(0,70,85,0.40)_65%,rgba(0,80,100,0.08)_100%)]" />

        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-14">
          <div className="max-w-xl space-y-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-cyan)]/40 bg-[var(--color-cyan)]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.32em] text-[var(--color-cyan)] backdrop-blur-sm">
              ✨ Official Collection — 2026
            </div>
            <h1 className="font-[family:var(--font-cormorant)] text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Village Socialite™<br />
              <span className="text-[var(--color-cyan)]">Signature Series</span>
            </h1>
            <p className="text-lg leading-8 text-white/82">
              Premium embroidered apparel, golf essentials, and lifestyle gear — designed for the active, the social, and the stylish.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#shop"
                className="rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.5)] transition hover:-translate-y-0.5"
              >
                Shop the Collection ↓
              </a>
            </div>
            <div className="flex flex-wrap gap-4 border-t border-white/15 pt-5 text-sm font-bold text-white/65">
              {["✨ Premium Embroidery", "⛳ Golf Ready", "🍷 Social Hour", "🎁 Great Gifts"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shop ─────────────────────────────────────────────────────── */}
      <div id="shop" className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-14 sm:px-8">

        {/* Featured 3 — large cards */}
        <section className="space-y-6">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">
              Most popular
            </p>
            <h2 className="mt-2 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Top picks from the collection.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.name} product={product} large />
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-[var(--color-line)]" />

        {/* Rest — standard grid */}
        <section className="space-y-6">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">
              Complete collection
            </p>
            <h2 className="mt-2 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              More to love.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((product) => (
              <ProductCard key={product.name} product={product} large={false} />
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="overflow-hidden rounded-[2.4rem] text-white" style={{ background: "linear-gradient(135deg, #004d63 0%, #00afc5 60%, #00d4e0 100%)" }}>
          <div className="px-8 py-12 text-center sm:px-12">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-cyan)]">
              Represent The Villages
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
              Wear what you love.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/82">
              Every item in the Village Socialite™ collection is built for life here — on the course, at the square, or wherever the day takes you.
            </p>
            <a
              href="https://village-socialite.printify.me"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-extrabold text-[var(--color-teal-deep)] shadow-[0_6px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
            >
              Shop All Items on Printify →
            </a>
          </div>
        </section>

        {/* Back links */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { href: "/categories", label: "Browse Video Categories" },
            { href: "/best-golf-carts-the-villages", label: "Best Golf Carts Guide" },
            { href: "/join-the-socialite", label: "Join The Socialite — Free" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border-2 border-[var(--color-teal)]/35 px-6 py-3 text-sm font-bold text-[var(--color-sea)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

function ProductCard({
  product,
  large,
}: {
  product: (typeof products)[0];
  large: boolean;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_16px_48px_rgba(5,20,25,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(5,20,25,0.12)]">
      {/* Image */}
      <div className={`relative w-full shrink-0 bg-[var(--color-paper)] ${large ? "h-64" : "h-48"}`}>
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-4"
        />
        <div className="absolute left-4 top-4 rounded-xl bg-[var(--color-teal-deep)] px-3 py-1.5 text-sm font-bold text-white shadow-lg">
          {product.price}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-teal)]">
            {product.category}
          </p>
          <h3 className="mt-1 font-[family:var(--font-cormorant)] text-2xl font-semibold leading-tight text-[var(--color-ink)]">
            Village Socialite™<br />{product.name}
          </h3>
        </div>

        <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{product.description}</p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-1 text-xs font-semibold text-[var(--color-ink-soft)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA — pushed to bottom */}
        <div className="mt-auto pt-2">
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-[var(--color-teal-deep)] px-6 py-4 text-center text-base font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)] hover:shadow-[0_8px_24px_rgba(0,175,197,0.35)]"
          >
            Add to Cart — {product.price}
          </a>
        </div>
      </div>
    </div>
  );
}
