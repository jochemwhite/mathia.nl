import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section>
      <div className="max-w-5xl mx-auto py-16">
        <div className="text-center mb-16 flex items-center justify-center">
          <div className="w-1/2 flex flex-col items-center">
            <Image src="https://mathia.nl/wp-content/uploads/2024/08/Lynsey-profielfoto-tiny-e1722505715525-150x150.png" className="rounded-full" alt="Lead Magnet" width={150} height={150} />
            <p>Lynsey van Bergen</p>
          </div>
          <div className="w-1/2">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-left">Super e-book, 100% een aanrader!</h2>
              <p className="text-left">
                Ik heb in 2020 mijn eigen bedrijf opgericht en ik wist direct dat ik social media nodig had om mijn bedrijf te laten groeien. Ik had alleen geen idee hoe ik het moest aanpakken. Ik heb
                verschillende cursussen gevolgd en ik heb veel geleerd over social media. Ik heb ook veel geleerd over hoe ik mijn bedrijf kan laten groeien door middel van social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
