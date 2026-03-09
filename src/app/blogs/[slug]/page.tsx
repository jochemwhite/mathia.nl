import AuthorBio from "@/src/components/blog/AuthorBio";
import BlogHero from "@/src/components/blog/BlogHero";
import ContentRenderer from "@/src/components/blog/ContentRender";
import TableOfContents from "@/src/components/blog/Tableofcontents";
import { getBlogPost } from "@/src/lib/const";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Blog niet gevonden | Mathia.nl" };
  return {
    title: `${post.title} | Mathia.nl`,
    description: post.excerpt,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <BlogHero post={post} />

      {/* Body */}
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        {/* Hero image */}
        {post.heroImage && (
          <div className="mb-10 overflow-hidden rounded-2xl">
            <Image src={post.heroImage} alt={post.title} width={800} height={450} className="w-full object-cover" priority />
          </div>
        )}

        {/* Table of contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && <TableOfContents items={post.tableOfContents} />}

        {/* Content */}
        <article>
          {post.content?.map((block, i) => (
            <ContentRenderer key={i} block={block} />
          ))}
        </article>

        {/* Author bio */}
        <AuthorBio />

        {/* Back */}
        <div className="mt-10 text-center">
          <Link href="/blogs" className="text-sm font-semibold text-accent underline transition-colors hover:text-(--primary)">
            ← Terug naar alle blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
