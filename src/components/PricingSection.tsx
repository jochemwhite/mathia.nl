import Link from "next/link";
import { PricingCardType, ServiceItemType } from "../types/pricing";
import PricingCard from "./cards/PricingCard";
import { LocationIcon, ManagementIcon, OnlineIcon } from "./global/icons";

const sharedItems: ServiceItemType[] = [
  { text: "Iedere 3 maanden" },
  {
    text: "Strategie social media platformen",
    sub: ["Concurrentie onderzoek", "Marktstudie"],
  },
  { text: "Advies content creatie" },
  { text: "Advies engagement" },
  { text: "Checklist maken uit te voeren taken medewerkers" },
  { text: "Data analyse" },
  { text: "Revisie strategie iedere 6 maanden" },
];

const cards: PricingCardType[] = [
  {
    id: "locatie",
    badge: "Populair",
    title: "Strategie sessies op locatie",
    subtitle: "Persoonlijke begeleiding bij jou op kantoor",
    items: [...sharedItems.slice(0, 4), { text: "Prestatie strategie op locatie" }, ...sharedItems.slice(4)],
    firstSession: "€1.500,-",
    recurring: "€600,-",
    recurringLabel: "per 3 maanden",
    icon: <LocationIcon />,
  },
  {
    id: "online",
    badge: "Flexibel",
    title: "Strategie sessies online",
    subtitle: "Professionele begeleiding, waar je ook bent",
    items: [...sharedItems.slice(0, 4), { text: "Prestatie strategie online" }, ...sharedItems.slice(4)],
    firstSession: "€1.000,-",
    recurring: "€420,-",
    recurringLabel: "per 3 maanden",
    icon: <OnlineIcon />,
  },
  {
    id: "management",
    badge: "All-in",
    title: "Social media management",
    subtitle: "Wij nemen het volledig van je over",
    items: [
      { text: "Posts maken – basic / carrousel / infographics" },
      { text: "Post teksten schrijven" },
      { text: "Posts plaatsen of inplannen" },
      { text: "Content kalenders maken" },
      { text: "Video's editen" },
      { text: "Huisstijl creëren" },
      { text: "Nieuwsbrieven schrijven" },
      { text: "Website teksten (her)schrijven" },
      { text: "Dagelijkse warme engagement – reageren op DM's, comments" },
      { text: "Koude engagement" },
    ],
    firstSession: "€250,-",
    recurring: "",
    recurringLabel: "per maand",
    icon: <ManagementIcon />,
  },
];

export default function PricingSection() {
  return (
    <div className="min-h-screen">
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-secondary-accent bg-secondary-accent/10 px-4 py-1.5 rounded-full mb-5">Diensten &amp; Tarieven</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-5">
              Investeer in jouw
              <br />
              <span>social media groei</span>
            </h1>
          </div>
          <div>
            <p className="lato text-lg text-primary max-w-xl mx-auto leading-relaxed">Kies het pakket dat bij jouw bedrijf en ambities past. Van strategie tot volledige uitvoering.</p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <PricingCard key={card.id} card={card} delay={i * 120} featured={i === 0} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="lato text-sm text-primary">
            Twijfel je welk pakket het beste bij jou past?{" "}
            <Link href="https://calendly.com/mathiatv/30min" target="_blank">
              <button className="text-secondary-accent font-semibold hover:underline transition-all cursor-pointer">Plan een gratis kennismakingsgesprek</button>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
