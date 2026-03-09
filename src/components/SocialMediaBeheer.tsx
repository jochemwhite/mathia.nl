import Image from "next/image";
import Link from "next/link";
import CTAButton from "./buttons/cta";

export default function SocialMediaBeheer() {
  const included = [
    "Contentplanning en strategische input",
    "Een vast aantal afgesproken posts per maand",
    "Het uitwerken van contentideeën",
    "Teksten schrijven voor posts",
    "Het inplannen en publiceren van content",
    "Meedenken over formats, rubrieken en invalshoeken",
    "Het analyseren van statistieken en bijsturen waar nodig",
  ];

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Image + CTA */}
          <div className="w-full md:w-[45%] shrink-0">
            <Image
              src="https://mathia.nl/wp-content/uploads/2025/09/uitbesteden-social-media-768x767.png"
              alt="Social media uitbesteden"
              width={768}
              height={767}
              priority
              className="rounded-xl w-full h-auto object-cover"
            />
            <div className="flex justify-center md:justify-end mt-4">
              <CTAButton href="https://calendly.com/mathiatv/30min" text="Plan je gratis kennismakingsgesprek" />
            </div>
          </div>

          {/* Text */}
          <div className="text-primary flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold">Social Media Beheer</h1>

            <div className="space-y-4 mt-6 sm:mt-8">
              <p className="leading-relaxed">
                Ik werk met op maat gemaakte pakketten die passen bij jouw behoeften. Of je nu alleen een consistent Instagram-account nodig hebt of een uitgebreide strategie met TikTok en Instagram
                Reels, let's go! Samen kruipen in de huid van jouw ideale klant en we creëren content die aansluit bij jouw doelgroep, huisstijl en merkidentiteit. En natuurlijk zorg ik voor maximale
                zichtbaarheid en groei.
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Wat zit hierbij?</h2>
              <ul className="space-y-2 list-disc pl-6 sm:pl-10">
                {included.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              <p className="leading-relaxed">Jij hoeft dus niet steeds zelf te bedenken wat er online moet komen.</p>
              <p className="leading-relaxed">Daar zit juist mijn meerwaarde. Onze samenwerking is op maat gemaakt van jouw wensen en doelen. Dit is al mogelijk vanaf 1 uur per week!</p>
              <p className="leading-relaxed">Benieuwd naar wat ik voor jouw bedrijf kan betekenen? Neem contact met me op voor meer informatie en een gratis, vrijblijvend voorstel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
