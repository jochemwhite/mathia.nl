import Image from "next/image";
import Link from "next/link";
import type { ContentBlock } from "@/src/types/blog";

type Props = {
  block: ContentBlock;
};

export default function ContentRenderer({ block }: Props) {
  switch (block.type) {
    case "heading":
      if (block.level === 2) {
        return (
          <h2 id={block.id} className="mb-4 mt-10 scroll-mt-24 font-serif text-2xl font-bold text-(--primary)">
            {block.text}
          </h2>
        );
      }
      return (
        <h3 id={block.id} className="mb-3 mt-7 scroll-mt-24 font-serif text-xl font-semibold text-foreground">
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="mb-4 leading-relaxed text-foreground [&_a]:text-accent [&_a]:underline [&_strong]:font-semibold [&_strong]:text-(--primary)" dangerouslySetInnerHTML={{ __html: block.html }} />
      );

    case "image":
      return (
        <figure className="my-8">
          <div className={block.rounded ? "mx-auto h-48 w-48 overflow-hidden rounded-full" : "overflow-hidden rounded-xl"}>
            <Image src={block.src} alt={block.alt} width={800} height={450} className="h-auto w-full object-cover" />
          </div>
          {block.caption && <figcaption className="mt-2 text-center text-xs text-muted-foreground">{block.caption}</figcaption>}
        </figure>
      );

    case "list":
      if (block.ordered) {
        return (
          <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-foreground [&_strong]:font-semibold [&_strong]:text-secondary-accent">
            {block.items.map((item, i) => (
              <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>
        );
      }
      return (
        <ul className="mb-4 ml-5 list-disc space-y-1.5 text-foreground">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );

    case "cta":
      return (
        <div className="my-10 rounded-2xl bg-(--primary) px-8 py-8 text-center text-white">
          <p className="mb-5 text-lg font-semibold leading-snug">{block.text}</p>
          <Link href={block.buttonHref} className="inline-block rounded-lg bg-secondary-accent px-6 py-3 text-sm font-bold text-white transition hover:opacity-90">
            {block.buttonLabel}
          </Link>
        </div>
      );

    case "tip":
      return (
        <div className="my-6 rounded-xl border-l-4 border-secondary-accent bg-muted px-5 py-4">
          <p
            className="text-sm leading-relaxed text-foreground [&_a]:text-accent [&_a]:underline"
            dangerouslySetInnerHTML={{
              __html: `<strong>Tip:</strong> ${block.html}`,
            }}
          />
        </div>
      );

    case "divider":
      return <hr className="my-8 border-t border-(--border)" />;

    default:
      return null;
  }
}
