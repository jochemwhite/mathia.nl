import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
import CTAButton from "./buttons/cta";

export default function IntroSection() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Text column */}
        <div className="space-y-5 md:space-y-6">
          <h2 className="text-accent font-bold uppercase tracking-widest text-2xl sm:text-3xl">JOUW SOCIAL MEDIA</h2>
          <h3 className="text-2xl md:text-3xl text-accent leading-tight">IS DE ONLINE ETALAGE VAN JE BEDRIJF</h3>
          <p className="text-primary leading-relaxed">
            Je weet dat social media van groot belang is. Maar het kost je veel tijd en denkkracht om er mee bezig te zijn. Wij als social media manager zijn hier om jou te ontzorgen en alles te
            regelen omtrent jouw social media.
          </p>
          <p className="text-primary leading-relaxed">
            Social media inzetten om meer <span className="underline decoration-secondary-accent">klanten</span>, <span className="underline decoration-secondary-accent">sales</span>,{" "}
            <span className="underline decoration-secondary-accent">leads</span> of zelfs <span className="underline decoration-secondary-accent">sollicitanten</span> aan te trekken? Met{" "}
            <Link href="/social-media-beheer" className="text-secondary-accent font-medium">
              social media management
            </Link>{" "}
            verzorgen wij jouw social media van A tot Z.
          </p>
          <CTAButton href="/aanbod" text="Bekijk onze diensten" />
        </div>

        {/* Media column */}
        <div className="flex gap-3 md:mt-[-220px] items-end">
          {/* Left stack of images */}
          <div className="flex flex-col items-end gap-3 w-[45%]">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://mathia.nl/wp-content/uploads/2024/02/tiny-mathia-kijkt-in-camera-682x1024.png"
                alt="Mathia kijkt in camera"
                width={682}
                height={1024}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://mathia.nl/wp-content/uploads/2024/02/Ontwerp-zonder-titel-4-1-1024x682.png"
                alt="Working on laptop"
                width={1024}
                height={682}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: tall video */}
          <VideoPlayer src="https://mathia.nl/wp-content/uploads/2025/05/wat-doet-een-social-media-manager.mp4" className="min-h-[280px] sm:min-h-[360px] md:min-h-[460px]" />
        </div>
      </div>
    </section>
  );
}
