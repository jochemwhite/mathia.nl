import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

type Service = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  reverseLayout?: boolean;
  paragraphs: string[];
  checkmarks: string[];
};

const services: Service[] = [
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    subtitle: "Uitbesteden met een gerust hart",
    image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-foto-300x300.png",
    href: "/social-media-management",
    reverseLayout: false,
    paragraphs: [
      "Wil je jouw social media volledig uit handen geven, maar wel met een duidelijke strategie en een professioneel resultaat?",
      "Wij verzorgen alles: van strategie tot contentplanning, visuals, captions en publicatie.",
      "Onze aanpak is strategisch, gestructureerd én volledig afgestemd op jouw merk.",
    ],
    checkmarks: ["Professionele uitstraling", "Zichtbaar zijn op de juiste momenten", "Meer aanvragen, klanten en herkenning"],
  },
  {
    title: "STRATEGIE SESSIES",
    subtitle: "Jouw plan in 1 dagdeel",
    image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-netwerkbijeenkomst-300x300.jpg",
    href: "/strategie-sessies",
    reverseLayout: true,
    paragraphs: [
      "Heb je iemand nodig die met je meedenkt en een concreet plan maakt voor jouw social media?",
      "In deze sessie van 90 minuten duiken we in jouw doelen, doelgroep en contentstrategie. Je gaat naar huis met een helder stappenplan.",
    ],
    checkmarks: ["Persoonlijk & praktijkgericht", "Geen standaard templates", "Meer structuur, meer richting"],
  },
  {
    title: "MATHIA ACADEMY",
    subtitle: "Leer het zelf, op jouw tempo",
    image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-video-opnemen-2-300x300.jpg",
    href: "/mathia-academy",
    reverseLayout: false,
    paragraphs: [
      "Voor ondernemers die (nog) geen budget hebben voor uitbesteding, maar wél willen groeien op social media.",
      "In de Mathia Academy leer je hoe je zelf professioneel en strategisch zichtbaar wordt.",
    ],
    checkmarks: ["Online omgeving met modules & templates", "Gericht op B2B & ervaringsdeskundige begeleiding", "Direct toepasbare kennis"],
  },
];

export default function ExtendedServicesSections() {
  return (
    <section className="mx-auto bg-accent py-32">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service) => (
          <div key={service.href} className={`flex gap-16 text-white ${service.reverseLayout ? "flex-row-reverse" : ""}`}>
            <div className="w-1/2">
              <Link href={service.href}>
                <Image src={service.image} alt={service.title} className="rounded-xl" width={500} height={300} priority />
              </Link>
            </div>
            <div className="w-1/2">
              <Link href={service.href}>
                <h2 className="text-4xl font-bold">{service.title}</h2>
              </Link>
              <h3 className="text-2xl font-bold mt-2">{service.subtitle}</h3>

              {service.paragraphs.map((p, i) => (
                <p key={i} className="text-xl mt-6">
                  {p}
                </p>
              ))}

              <ul className="text-xl mt-8 space-y-3">
                {service.checkmarks.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-[#F9C8B8] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href={service.href} className="inline-block mt-10 bg-secondary-accent text-white px-8 py-3 rounded-md font-bold hover:bg-[#e06b40] transition-colors shadow-md">
                Meer info →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
