import Image from "next/image";

export default function BenefitSection() {
  const benefits = [
    "een verzorgde en consistente online uitstraling",
    "meer rust in je hoofd en in je planning",
    "content die past bij jouw merk en doelgroep",
    "meer herkenbaarheid bij potentiële klanten",
    "een partij naast je die actief meedenkt over je zichtbaarheid",
  ];

  return (
    <section className="px-4 sm:px-6 md:px-12 mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-primary">
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold">Wat het je oplevert</h2>
            <h4 className="text-xl sm:text-2xl font-bold mt-2">Geen chaos meer, maar rust en consistentie</h4>

            <div className="space-y-4 mt-6 sm:mt-8">
              <p className="leading-relaxed">Goede social media draait niet alleen om "meer posten". Het draait om zichtbaar zijn op een manier die professioneel aanvoelt en vertrouwen opbouwt.</p>
              <h5 className="text-xl sm:text-2xl font-bold">Wat zit hierbij?</h5>
              <p>Dat levert je onder andere op:</p>
              <ul className="space-y-2 list-disc pl-6 sm:pl-10">
                {benefits.map((benefit, i) => (
                  <li key={i} className="leading-relaxed">
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="space-y-1">
                <p>Je hoeft niet viral te gaan.</p>
                <p>Je moet zichtbaar zijn op een manier die klopt.</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://mathia.nl/wp-content/uploads/2026/02/klant-resultaten-facebook-2025.jpeg"
              alt="Klant resultaten Facebook 2025"
              width={1200}
              height={800}
              priority
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
