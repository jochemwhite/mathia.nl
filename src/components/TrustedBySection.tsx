import Link from "next/link";
import CompanyCard from "./cards/review-card";
import { Marquee } from "./ui/marquee";
import ChevronSection from "./layout/ChevronSection";

const companies = [
  {
    company: "Red Bull",
    href: "https://www.redbull.com/nl-nl",
    img: "https://mathia.nl/wp-content/uploads/2024/02/red-bull.png",
  },
  {
    company: "Context Consultancy",
    href: "https://context-consultancy.nl/",
    img: "https://mathia.nl/wp-content/uploads/2024/02/Context-Consultancy.jpg-1-1.png",
  },
  {
    company: "Lengua Viva",
    href: "https://www.lenguaviva.nl/",
    img: "https://mathia.nl/wp-content/uploads/2025/05/Logo_LengiaViva-07-1024x845.png",
  },
  {
    company: "Birdwatcher Group",
    href: "https://www.birdwatchergroup.com/",
    img: "https://mathia.nl/wp-content/uploads/2024/08/BWG_logo_dark-orange.png",
  },
  {
    company: "De Federatie",
    href: "https://www.defederatie.nl/",
    img: "https://mathia.nl/wp-content/uploads/2024/02/Logo_DeFederatie.png",
  },
  {
    company: "Bremax Bouw",
    href: "https://www.bremaxbouw.nl/",
    img: "https://mathia.nl/wp-content/uploads/2024/02/Logo-Bremax-2-1024x586.png",
  },
  {
    company: "Redtail Services",
    href: "https://redtailservices.nl/",
    img: "https://mathia.nl/wp-content/uploads/2025/05/Redtail-Services_10_final_08012019.bmp",
  },
  {
    company: "Niveau VBS",
    href: "https://www.niveau-vbs.nl/",
    img: "https://mathia.nl/wp-content/uploads/2025/05/Niveau-logo-1024x196.png",
  },
  {
    company: "Durven Zijn",
    href: "https://www.durvenzijn.nu/",
    img: "https://mathia.nl/wp-content/uploads/elementor/thumbs/PP-Murraij-boek-3d-schaduw-2-1-rjq90i1oybb8uepqq3uvsc26f0oxd8httphe5cto8w.png",
  },
];

export default function TrustedBySection() {
  return (
    <section className="bg-accent">
      <ChevronSection
        pointAt="top"
        sideDepth={50}
        pointPosition={70}
        height="auto"
        overlap="-80px"
        className="bg-card px-4 sm:px-6 md:px-12 relative z-20 flex items-end pt-20 sm:pt-24 md:pt-28 pb-10 md:pb-16"
      >
        <div className="max-w-7xl mt-16 mx-auto flex flex-col md:flex-row items-center justify-start gap-6 md:gap-12 w-full">
          <h2 className="text-primary text-center md:text-left font-bold uppercase tracking-widest text-2xl sm:text-3xl whitespace-nowrap shrink-0">VERTROUWD DOOR</h2>

          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {companies.map((company) => (
                <CompanyCard key={company.company} img={company.img} name={company.company} href={company.href} />
              ))}
            </Marquee>
          </div>
        </div>
      </ChevronSection>
    </section>
  );
}
