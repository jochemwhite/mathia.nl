import Image from "next/image";
import Link from "next/link";
import CTAButton from "./buttons/cta";

export default function SocialmediaIntroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-primary">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Social media uitbesteden zonder dat jij er zelf steeds achteraan hoeft</h2>
          <div className="space-y-5 sm:space-y-8 mt-6 sm:mt-8">
            <p className="leading-relaxed">
              Wil je wel zichtbaar zijn op social media, maar lukt het niet om daar consequent tijd voor te maken? Dan is social media management waarschijnlijk precies wat je nodig hebt.
            </p>
            <p className="leading-relaxed">
              Ik help ondernemers en bedrijven met een mooi verhaal om professioneel, herkenbaar en consistent zichtbaar te zijn op social media. Geen losse flodders of last-minute posts, maar een
              duidelijke aanpak die past bij jouw bedrijf.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 shrink-0">
          <Image
            src="https://mathia.nl/wp-content/uploads/2026/02/social-media-manager-mathia-aan-het-werk-e1772099452388.jpg"
            alt="Social media manager Mathia aan het werk"
            width={1500}
            height={960}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center md:justify-end mt-8 sm:mt-10">
        <CTAButton href="https://calendly.com/mathiatv/30min" text="Plan een kennismakingsgesprek" />
      </div>
    </section>
  );
}
