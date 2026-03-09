import CTAButton from "./buttons/cta";

export default function HeroSection() {
  return (
    <section className="relative min-h-svh sm:min-h-[600px] md:min-h-[700px] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video src="https://mathia.nl/wp-content/uploads/2025/05/video-banner-2025-1.mp4" autoPlay muted loop playsInline className="object-cover h-full w-full" />
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-accent/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-[inherit] max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center text-white py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 max-w-4xl leading-tight">
          SOCIAL MEDIA DOOR <span className="font-serif italic text-secondary-accent">MATHIA</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 font-light leading-relaxed opacity-90">
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

        <div className="w-full sm:w-auto">
          <CTAButton href="https://calendly.com/mathiatv/30min" text="Plan je gratis kennismaking" target="_blank" />
        </div>
      </div>
    </section>
  );
}
