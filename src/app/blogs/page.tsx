import BlogCard from "@/src/components/cards/BlogCard";
import { blogPosts } from "@/src/lib/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Wie is Mathia? Ik ben Mathia van Soest",
};

export default function BlogsSection() {
  return (
    <main>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center font-serif text-2xl font-bold uppercase tracking-widest text-primary sm:text-3xl">
          Mijn blogs over social media
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
