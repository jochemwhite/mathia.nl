import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import CTAButton from "./buttons/cta";

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
    image: "/img/mathia-met-laptop-open.png",
    href: "/social-media-management",
    reverseLayout: false,
    paragraphs: [
      "Wil je jouw social media volledig uit handen geven, maar wel met een duidelijke strategie en een professioneel resultaat?",
      "Wij verzorgen alles: van strategie tot contentplanning, visuals, captions en publicatie.",
      "Onze aanpak is strategisch, gestructureerd én volledig afgestemd op jouw merk.",
    ],
    checkmarks: [
      "Professionele uitstraling",
      "Zichtbaar zijn op de juiste momenten",
      "Meer aanvragen, klanten en herkenning",
    ],
  },
  {
    title: "STRATEGIE SESSIES",
    subtitle: "Jouw plan in 1 dagdeel",
    image: "/img/netwerkbijeenkomst.jpg",
    href: "/strategie-sessies",
    reverseLayout: true,
    paragraphs: [
      "Heb je iemand nodig die met je meedenkt en een concreet plan maakt voor jouw social media?",
      "In deze sessie van 90 minuten duiken we in jouw doelen, doelgroep en contentstrategie. Je gaat naar huis met een helder stappenplan.",
    ],
    checkmarks: [
      "Persoonlijk & praktijkgericht",
      "Geen standaard templates",
      "Meer structuur, meer richting",
    ],
  },
  {
    title: "MATHIA ACADEMY",
    subtitle: "Leer het zelf, op jouw tempo",
    image: "/img/video-opnemen.jpg",
    href: "/mathia-academy",
    reverseLayout: false,
    paragraphs: [
      "Voor ondernemers die (nog) geen budget hebben voor uitbesteding, maar wél willen groeien op social media.",
      "In de Mathia Academy leer je hoe je zelf professioneel en strategisch zichtbaar wordt.",
    ],
    checkmarks: [
      "Online omgeving met modules & templates",
      "Gericht op B2B & ervaringsdeskundige begeleiding",
      "Direct toepasbare kennis",
    ],
  },
];

export default function ExtendedServicesSections() {
  return (
    <section className=" bg-accent py-16 md:py-32">
      <div className="container px-4 space-y-16 md:space-y-32">
        {services.map((service) => (
          <div
            key={service.href}
            className={`flex flex-col gap-8 text-white md:flex-row md:gap-16 ${
              service.reverseLayout ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image — always on top on mobile */}
            <div className="w-full md:w-1/2">
              <Link href={service.href}>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-xl object-cover"
                  width={500}
                  height={300}
                  priority
                />
              </Link>
            </div>

            {/* Text content */}
            <div className="w-full md:w-1/2">
              <Link href={service.href}>
                <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                  {service.title}
                </h2>
              </Link>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                {service.subtitle}
              </h3>

              {service.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-base sm:text-lg md:mt-6 md:text-xl">
                  {p}
                </p>
              ))}

              <ul className="mt-6 space-y-3 text-base sm:text-lg md:mt-8 md:text-xl">
                {service.checkmarks.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="shrink-0 text-secondary-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 md:mt-10">
                <CTAButton
                  href={service.href}
                  text="Meer info →"
                  variant="normal"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}