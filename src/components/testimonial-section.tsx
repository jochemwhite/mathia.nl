import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="px-4 sm:px-6 md:px-12">
      <div className="max-w-5xl mx-auto py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
          {/* Avatar + name */}
          <div className="flex flex-col items-center shrink-0">
            <Image src="/img/Lynsey-profielfoto.png" className="rounded-full" alt="Lynsey van Bergen" width={150} height={150} />
            <p className="text-primary mt-4 text-sm text-center">Lynsey van Bergen</p>
          </div>

          {/* Quote */}
          <div className="text-primary text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Super e-book, 100% een aanrader!</h2>
            <p className="leading-relaxed">
              Ik heb in 2020 mijn eigen bedrijf opgericht en ik wist direct dat ik social media nodig had om mijn bedrijf te laten groeien. Ik had alleen geen idee hoe ik het moest aanpakken. Ik heb
              verschillende cursussen gevolgd en ik heb veel geleerd over social media. Ik heb ook veel geleerd over hoe ik mijn bedrijf kan laten groeien door middel van social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
