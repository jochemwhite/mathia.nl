import { ComponentType, SVGProps } from "react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon, YouTubeIcon } from "../components/global/icons";
import { BlogPost } from "../types/blog";

export type SocialLink = {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mathia-van-soest/",
    icon: LinkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mathia.nl/",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@mathia.nl",
    icon: TikTokIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@mathianl",
    icon: YouTubeIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mathiasocialmediamanager",
    icon: FacebookIcon,
  },
];

export type AanbodItem = {
  label: string;
  href: string;
  description: string;
};

export const aanbodItems: AanbodItem[] = [
  {
    label: "Social Media Beheer",
    href: "/social-media-beheer",
    description: "Laat ons jouw social media beheren",
  },
  {
    label: "Strategie Sessies",
    href: "/strategie-sessies",
    description: "Persoonlijke strategie op maat",
  },
  {
    label: "Mathia Academy",
    href: "/mathia-academy",
    description: "Leer het zelf met onze cursussen",
  },
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Gratis", href: "/gratis" },
  { label: "Contact", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "wie-is-mathia",
    category: "Uncategorized",
    title: "Wie is Mathia?",
    excerpt: "Wie is Mathia? Social media had ik nodig. Ik startte mijn Twitch kanaal in september 2010, bij mijn ouders thuis aan een krakkehmikkig IKEA bureau met…",
    date: "februari 28, 2026",
    comments: "Geen reacties",
    image: "https://mathia.nl/wp-content/uploads/2026/02/mathia-als-presentratrice-in-2016-1024x576.avif",
    readTime: "5 min",
    tableOfContents: [
      { id: "social-media", label: "1. Social media had ik nodig" },
      { id: "samenwerkingen", label: "2. Samenwerkingen" },
      { id: "fulltime", label: "3. Full-time streamen" },
      { id: "doel", label: "4. Doel bereikt & toen..." },
    ],
    content: [
      { type: "heading", level: 2, id: "social-media", text: "1. Social media had ik nodig" },
      {
        type: "paragraph",
        html: "Ik startte mijn Twitch kanaal in september 2010, bij mijn ouders thuis aan een <strong>krakkehmikkig IKEA bureau</strong> met een simpele set-up.",
      },
      { type: "divider" },
      { type: "heading", level: 2, id: "samenwerkingen", text: "2. Samenwerkingen door op te vallen" },
      {
        type: "paragraph",
        html: "Na een paar maanden kreeg ik al mijn eerste samenwerking. <strong>GRATIS SPULLEN?!</strong> Het was nog altijd 2014 en niemand had nog ooit gehoord van de term 'influencer'.",
      },
      { type: "divider" },
      { type: "heading", level: 2, id: "fulltime", text: "3. Full-time streamen komt met een strategie" },
      {
        type: "paragraph",
        html: "In 2016 kreeg ik mijn master diploma en besloot ik van <strong>deze hobby mijn werk</strong> te maken.",
      },
      { type: "divider" },
      { type: "heading", level: 2, id: "doel", text: "4. Doel bereikt & toen..." },
      {
        type: "paragraph",
        html: "Ik wist dat ik graag andere bedrijven wilde helpen met hun strategie op social media.",
      },
      {
        type: "cta",
        text: "Klaar om jouw social media strategie te versimpelen?",
        buttonLabel: "Plan een call in",
        buttonHref: "/contact",
      },
    ],
  },
  {
    id: 2,
    slug: "uitbesteden-social-media",
    category: "Community Management",
    title: "Wat kost het uitbesteden van social media marketing?",
    excerpt: "Wat kost het uitbesteden van social-media-marketing? Prijzen, factoren en slimme keuzes voor 2025. Sociale media zijn niet langer een bijzaak in de marketingmix; ze zijn…",
    date: "september 24, 2025",
    comments: "Geen reacties",
    image: "https://mathia.nl/wp-content/uploads/2025/09/uitbesteden-social-media-768x767.png",
    readTime: "7 min",
    tableOfContents: [
      { id: "prijs", label: "Wat bepaalt de prijs?" },
      { id: "pakketten", label: "Onze pakketten" },
      { id: "kiezen", label: "Zo kies je de beste manager" },
    ],
    content: [
      { type: "heading", level: 2, id: "prijs", text: "Wat bepaalt de prijs van social media beheer?" },
      {
        type: "paragraph",
        html: "Uit verschillende bronnen blijkt dat de prijzen voor het uitbesteden van social media marketing sterk uiteenlopen.",
      },
      {
        type: "list",
        items: [
          "<strong>Aantal kanalen en posts per week</strong> – Hoe meer platforms, hoe hoger de kosten.",
          "<strong>Type content</strong> – Video's en carrousels vragen meer productietijd dan foto's.",
          "<strong>Strategische begeleiding</strong> – Een professionele strategie maakt het verschil.",
        ],
      },
      { type: "divider" },
      { type: "heading", level: 2, id: "pakketten", text: "Onze social media pakketten" },
      {
        type: "list",
        ordered: true,
        items: ["<strong>Strategiepakket – vanaf €140 per maand</strong>", "<strong>Basisbeheer – vanaf €417 per maand</strong>", "<strong>Maatwerk – vanaf €1.500 per maand</strong>"],
      },
      { type: "divider" },
      { type: "heading", level: 2, id: "kiezen", text: "Zo kies je de beste social media manager" },
      {
        type: "paragraph",
        html: "Met deze pakketten op een rij kun je gemakkelijk bepalen wat bij jou past.",
      },
      {
        type: "cta",
        text: "Klaar om je social media professioneel aan te pakken?",
        buttonLabel: "Plan een call in",
        buttonHref: "/contact",
      },
    ],
  },
  {
    id: 3,
    slug: "content-recyclen",
    category: "Social Media",
    title: "Content recyclen slim aanpakken: zo bespaar je tijd én vergroot je zichtbaarheid",
    excerpt: "Waarom content recyclen essentieel is voor jouw social media strategie? Content recyclen betekent dat je bestaande content in een nieuwe vorm opnieuw inzet. Denk…",
    date: "juni 5, 2025",
    comments: "Geen reacties",
    image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-video-opnemen-2-300x157.jpg",
    // TODO: add readTime, tableOfContents, content when migrating from WordPress
  },
  {
    id: 4,
    slug: "social-media-checklist",
    category: "Social Media",
    title: "Social Media Checklist",
    excerpt: "Social media checklist om meer engagement en bereik te krijgen op social media? Dit stappenplan gaat iedere ondernemer helpen op wat verder komen met zijn…",
    date: "augustus 8, 2024",
    comments: "Geen reacties",
    image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-netwerkbijeenkomst-300x300.jpg",
    // TODO: add readTime, tableOfContents, content when migrating from WordPress
  },
  {
    id: 5,
    slug: "social-media-manager-inhuren",
    category: "Social Media Management",
    title: "Voordelen van het inhuren van een Social Media Manager voor je bedrijf",
    excerpt: "Een social media manager vergroot het bereik van je merk door samen te werken met influencers en thought leaders. Ze hebben expertise in het beheren van sociale media platforms.",
    date: "december 21, 2023",
    comments: "Geen reacties",
    image: "https://mathia.nl/wp-content/uploads/2024/02/Ontwerp-zonder-titel-4-1-1024x682.png",
    // TODO: add readTime, tableOfContents, content when migrating from WordPress
  },
  {
    id: 6,
    slug: "community-management",
    category: "Community Management",
    title: "Community Management",
    excerpt: "In deze blog lees je over de kracht van Community Management voor merkengagement en groei, & deel mijn visie over een effectieve social media strategie.",
    date: "september 18, 2023",
    comments: "Geen reacties",
    image: "https://mathia.nl/wp-content/uploads/2023/09/Linkedin-posrt-300x169.png",
    // TODO: add readTime, tableOfContents, content when migrating from WordPress
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
