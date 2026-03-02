import Image from "next/image";
import CTAButton from "./buttons/cta";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full ">
        <video src="https://mathia.nl/wp-content/uploads/2025/05/video-banner-2025-1.mp4" autoPlay muted loop className="object-cover h-full w-full" />
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#2E6F5E]/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight">
          SOCIAL MEDIA DOOR <span className="font-serif italic text-[#F9C8B8]">MATHIA</span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl mb-8 font-light leading-relaxed opacity-90">
          Strategie die werkt.
          <br />
          Verzorging van social media van A tot Z,
          <br />
          sparringspartner voor social media of
          <br />
          content creator voor je bedrijf.
          <br />
          Kies de manier die bij je past.
        </p>

        <CTAButton />
      </div>
    </section>
  );
}
