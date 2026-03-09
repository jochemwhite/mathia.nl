import { BlogPost } from "@/src/types/blog";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function BlogHero({ post }: Props) {
  return (
    <div className="bg-sidebar-accent px-4 pb-10 pt-12 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-(--primary)">
            Home
          </Link>
          <span>/</span>
          <Link href="/blogs" className="transition-colors hover:text-(--primary)">
            Blogs
          </Link>
          <span>/</span>
          <span className="text-foreground">{post.title}</span>
        </nav>

        {/* Category */}
        <span className="mb-4 inline-block rounded-full bg-(--primary) px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">{post.category}</span>

        {/* Title */}
        <h1 className="font-serif text-3xl font-bold leading-tight text-(--primary) sm:text-4xl">{post.title}</h1>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-15 w-15 overflow-hidden rounded-full border-2 border-white">
              <Image src="/img/profile.png" alt="Mathia" width={50} height={50} className="h-full w-full object-cover" />
            </div>
            <span className="font-medium text-foreground">Mathia van Soest</span>
          </div>
          <span>{post.date}</span>
          <span>{post.readTime} leestijd</span>
        </div>
      </div>
    </div>
  );
}
