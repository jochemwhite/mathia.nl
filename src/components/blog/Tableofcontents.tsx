import { TocItem } from "@/src/types/blog";

type Props = {
  items: TocItem[];
};

export default function TableOfContents({ items }: Props) {
  return (
    <nav className="mb-10 rounded-xl border border-(--border) bg-muted px-6 py-5">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Inhoudsopgave</p>
      <ol className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-sm text-primary transition-colors hover:text-accent">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
