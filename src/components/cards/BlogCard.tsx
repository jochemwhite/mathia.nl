import { BlogPost } from "@/src/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: BlogPost }) {
  const slug = `/blogs/${post.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image src={post.image} alt={post.title} loading="lazy" width={600} height={600} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute right-2 top-2 rounded-full bg-primary px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">{post.category}</span>
        {/* Avatar bubble */}
        <div className="absolute bottom-4 left-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-secondary">
          <Image src="/img/profile.png" alt="Mathia" fill className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-4 pb-3 pt-6">
        <Link href={slug}>
          <h3 className="mb-2 text-base font-semibold leading-snug text-secondary-accent transition-all duration-150 hover:text-(--secondary-accent/80)">{post.title}</h3>
        </Link>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          href={slug}
          className="mt-3 text-secondary-accent inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide transition-all duration-150 hover:gap-2 hover:text-(--secondary-accent/80)"
        >
          Lees verder »
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between border-t border-(--border) px-4 py-2 text-xs text-muted-foreground">
        <span>{post.date}</span>
        <span>{post.comments}</span>
      </div>
    </article>
  );
}
