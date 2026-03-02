import Image from "next/image";
import Link from "next/link";

export default function BenifitSections() {
  const benefits = [
    "een verzorgde en consistente online uitstraling",
    "meer rust in je hoofd en in je planning",
    "content die past bij jouw merk en doelgroep",
    "meer herkenbaarheid bij potentiële klanten",
    "een partij naast je die actief meedenkt over je zichtbaarheid",
  ];

  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-12">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold">Wat het je oplevert</h2>
            <h4 className="text-2xl font-bold">Geen chaos meer, maar rust en consistentie</h4>

            <div className="space-y-8 text-xl mt-8">
              <p>Goede social media draait niet alleen om “meer posten”. Het draait om zichtbaar zijn op een manier die professioneel aanvoelt en vertrouwen opbouwt.</p>
              <h5 className="text-2xl font-bold ">Wat zit hierbij?</h5>

              <p>Dat levert je onder andere op:</p>
              <ul className="space-y-2 list-disc pl-10">
                {benefits.map((benefit, i) => (
                  <li key={i} className="text-xl ">
                    {benefit}
                  </li>
                ))}
              </ul>

              <div>
                <p>Je hoeft niet viral te gaan.</p>
                <p>Je moet zichtbaar zijn op een manier die klopt.</p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <Image
              src="https://mathia.nl/wp-content/uploads/2026/02/klant-resultaten-facebook-2025.jpeg"
              alt="klant-resultaten-facebook-2025"
              width={3000}
              height={960}
              priority
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
