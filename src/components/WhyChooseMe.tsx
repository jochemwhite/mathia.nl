import VideoPlayer from "./VideoPlayer";

export default function WhyChooseMe() {
  const benefits = ["persoonlijk contact", "duidelijke communicatie", "een aanpak op maat", "zowel strategisch als praktisch meedenken", "iemand die overzicht brengt en werk uit handen neemt"];

  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Text */}
          <div className="flex-1 space-y-4 text-primary">
            <h2 className="text-3xl sm:text-4xl font-bold">Waarom ondernemers met mij werken</h2>
            <p className="leading-relaxed">Geen groot bureau, maar persoonlijke samenwerking</p>
            <p className="leading-relaxed">Wanneer je met mij samenwerkt, werk je direct met iemand die betrokken is bij jouw bedrijf en echt met je meedenkt.</p>
            <p className="leading-relaxed">Je krijgt geen standaard aanpak, maar social media support die aansluit op jouw situatie.</p>

            <div>
              <h3 className="font-bold text-lg sm:text-xl mb-2">Wat je van mij kunt verwachten</h3>
              <ul className="space-y-2 list-disc pl-6 sm:pl-10">
                {benefits.map((benefit, i) => (
                  <li key={i} className="leading-relaxed">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <p className="leading-relaxed">Ik kijk niet alleen naar wat "leuk staat", maar vooral naar wat past bij jouw bedrijf en wat haalbaar is om vol te houden.</p>
          </div>

          {/* Video */}
          <div className="flex-1 flex justify-center rounded-2xl h-[320px] sm:h-[440px] md:h-[560px]">
            <VideoPlayer src="https://mathia.nl/wp-content/uploads/2025/05/wat-doet-een-social-media-manager.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}
