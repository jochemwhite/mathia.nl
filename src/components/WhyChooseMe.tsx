import VideoPlayer from "./VideoPlayer";

export default function WhyChooseMe() {
  const benefits = ["persoonlijk contact", "duidelijke communicatie", "een aanpak op maat", "zowel strategisch als praktisch meedenken", "iemand die overzicht brengt en werk uit handen neemt"];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-12">
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold">Waarom ondernemers met mij werken</h2>
            <p>Geen groot bureau, maar persoonlijke samenwerking</p>
            <p>Wanneer je met mij samenwerkt, werk je direct met iemand die betrokken is bij jouw bedrijf en echt met je meedenkt.</p>
            <p>Je krijgt geen standaard aanpak, maar social media support die aansluit op jouw situatie.</p>

            <div>
              <h2 className="font-bold">Wat je van mij kunt verwachten</h2>
              <ul className="space-y-2 list-disc pl-10">
                {benefits.map((benefit, i) => (
                  <li key={i} className=" ">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <p>Ik kijk niet alleen naar wat “leuk staat”, maar vooral naar wat past bij jouw bedrijf en wat haalbaar is om vol te houden.</p>
          </div>
          <div className="flex-1 h-[600px] flex justify-center rounded-2xl">
            <VideoPlayer src="https://mathia.nl/wp-content/uploads/2025/05/wat-doet-een-social-media-manager.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}
