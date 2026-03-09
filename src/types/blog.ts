// ─── Content blocks ───────────────────────────────────────────────────────────

export type TocItem = {
  id: string;
  label: string;
};

export type HeadingBlock = {
  type: "heading";
  level: 2 | 3;
  id?: string;
  text: string;
};

export type ParagraphBlock = {
  type: "paragraph";
  html: string;
};

export type ImageBlock = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  rounded?: boolean;
};

export type ListBlock = {
  type: "list";
  ordered?: boolean;
  items: string[];
};

export type CtaBlock = {
  type: "cta";
  text: string;
  buttonLabel: string;
  buttonHref: string;
};

export type TipBlock = {
  type: "tip";
  html: string;
};

export type DividerBlock = {
  type: "divider";
};

export type ContentBlock = HeadingBlock | ParagraphBlock | ImageBlock | ListBlock | CtaBlock | TipBlock | DividerBlock;

// ─── Blog post ────────────────────────────────────────────────────────────────

export type BlogPost = {
  // Required — used by both the card and the full page
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  comments: string;

  // Optional — only needed on the full blog page
  readTime?: string;
  heroImage?: string;
  tableOfContents?: TocItem[];
  content?: ContentBlock[];
};
