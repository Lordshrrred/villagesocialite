import Image from "next/image";
import Link from "next/link";
import type { SeoBlogPost } from "@/lib/seo-blog";

export function SeoBlogCard({ post }: { post: SeoBlogPost }) {
  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-white shadow-[0_24px_60px_rgba(18,27,33,0.06)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--color-ink)]">
            {post.category}
          </div>
        </div>
        <div className="space-y-4 p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-teal)]">
            SEO guide #{post.id}
          </p>
          <h3 className="text-2xl font-semibold leading-tight text-[var(--color-ink)]">
            {post.title}
          </h3>
          <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{post.description}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition group-hover:gap-3">
            Read the guide
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
