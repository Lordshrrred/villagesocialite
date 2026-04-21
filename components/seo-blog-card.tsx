import Image from "next/image";
import Link from "next/link";
import type { SeoBlogPost } from "@/lib/seo-blog";

export function SeoBlogCard({ post }: { post: SeoBlogPost }) {
  const isSvg = post.image.endsWith(".svg");

  return (
    <article className="group overflow-hidden rounded-[1.25rem] border-2 border-white bg-[linear-gradient(180deg,#ffffff,#f7fcfd)] shadow-[0_14px_34px_rgba(5,20,25,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-teal)]/35 hover:shadow-[0_18px_44px_rgba(0,175,197,0.14)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            unoptimized={isSvg}
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full border border-white/60 bg-[var(--color-paper)]/95 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[var(--color-teal-deep)] shadow-[0_10px_25px_rgba(5,20,25,0.14)]">
            {post.category}
          </div>
        </div>
        <div className="space-y-3 p-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-coral)]">
            Village guide #{post.id}
          </p>
          <h3 className="text-lg font-extrabold leading-tight text-[var(--color-ink)]">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-xs leading-6 text-[var(--color-ink-soft)]">{post.description}</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-3.5 py-2 text-xs font-extrabold text-white transition group-hover:gap-3 group-hover:bg-[var(--color-teal)]">
            Read the guide
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
