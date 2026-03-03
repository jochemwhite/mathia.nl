import Image from "next/image";
import Link from "next/link";
import ChevronSection from "./layout/ChevronSection";

type ServiceCard = {
  title: string;
  image: string;
  href: string;
};

export default function ServicesSection() {
  const cards: ServiceCard[] = [
    {
      title: "Social Media Management",
      image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-foto-300x300.png",
      href: "/social-media-management",
    },
    {
      title: "Strategie Sessies",
      image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-netwerkbijeenkomst-300x300.jpg",
      href: "/strategie-sessies",
    },
    {
      title: "Mathia Academy",
      image: "https://mathia.nl/wp-content/uploads/2024/08/tiny-video-opnemen-2-300x300.jpg",
      href: "/mathia-academy",
    },
  ];

  return (
    <section>
      <ChevronSection pointAt="top" sideDepth={85} pointPosition={30} height="auto" overlap="0px" className="flex justify-center items-center bg-accent px-4 sm:px-6 md:px-12 py-24 sm:py-28 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 relative z-20 items-center justify-center w-full">
          {cards.map((card, index) => (
            <Link href={card.href} key={index} className="group cursor-pointer flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 md:mb-6 transform group-hover:scale-105 transition-transform duration-300 border-4 border-white/10 w-[180px] h-[180px] sm:w-full sm:h-auto aspect-square">
                <Image src={card.image} alt={card.title} width={300} height={300} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-center">{card.title}</h3>
            </Link>
          ))}
        </div>
      </ChevronSection>
    </section>
  );
}
