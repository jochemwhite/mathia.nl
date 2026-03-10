import Link from "next/link";
import CompanyCard from "./cards/review-card";
import { Marquee } from "./ui/marquee";
import ChevronSection from "./layout/ChevronSection";

const companies = [
  {
    company: "Red Bull",
    href: "https://www.redbull.com/nl-nl",
    img: "/img/trusted-companys/redbull.png",
  },
  {
    company: "Context Consultancy",
    href: "https://context-consultancy.nl/",
    img: "/img/trusted-companys/context-consultancy.png",
  },
  {
    company: "Lengua Viva",
    href: "https://www.lenguaviva.nl/",
    img: "/img/trusted-companys/lengiaviva.png",
  },
  {
    company: "Birdwatcher Group",
    href: "https://www.birdwatchergroup.com/",
    img: "/img/trusted-companys/birdwatchergroup.png",
  },
  {
    company: "De Federatie",
    href: "https://www.defederatie.nl/",
    img: "/img/trusted-companys/defederatie.png",
  },
  {
    company: "Bremax Bouw",
    href: "https://www.bremaxbouw.nl/",
    img: "/img/trusted-companys/bremax.png",
  },
  {
    company: "Redtail Services",
    href: "https://redtailservices.nl/",
    img: "/img/trusted-companys/redtail-services.bmp",
  },
  {
    company: "Niveau VBS",
    href: "https://www.niveau-vbs.nl/",
    img: "/img/trusted-companys/niveau.png",
  },
  {
    company: "Durven Zijn",
    href: "https://www.durvenzijn.nu/",
    img: "/img/trusted-companys/durven-zijn.png",
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
