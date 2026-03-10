import Image from "next/image";
import CTAButton from "./buttons/cta";

interface LeadMagnetSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function LeadMagnetSection({ title, description, image, reverse }: LeadMagnetSectionProps) {
  return (
    <section className="bg-card py-16 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className={`flex justify-center ${reverse ? "md:order-2" : "md:order-1"}`}>
          <Image src={image} alt={title} width={300} height={300} className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-contain" />
        </div>

        {/* Text */}
        <div className={`space-y-4 md:space-y-6 text-primary ${reverse ? "md:order-1" : "md:order-2"}`}>
          <h4 className="text-sm sm:text-base md:text-xl font-bold leading-tight tracking-wide uppercase">HAAL MEER RESULTAAT UIT JE SOCIAL MEDIA</h4>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Meer klanten in 3 stappen</h2>
          <p className="text-primary leading-relaxed">
            Lukt het niet om meer volgers te krijgen? Dat hoeft niet! Ik heb drie accounts met meer dan 10.000 volgers, ik wéét welke strategieën werken. Ik deel ze graag met je!
          </p>
          <CTAButton href="/ebook" text="Mathia, geef mij dat e-book!" />
        </div>
      </div>
    </section>
  );
}
