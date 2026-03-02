import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";

export default function IntroSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-[#8B3A4C] font-bold uppercase tracking-widest text-sm">JOUW SOCIAL MEDIA</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#2E6F5E] leading-tight">IS DE ONLINE ETALAGE VAN JE BEDRIJF</h3>
          <p className="text-gray-600 leading-relaxed">
            Je weet dat social media van groot belang is. Maar het kost je veel tijd en denkkracht om er mee bezig te zijn. Wij als social media manager zijn hier om jou te ontzorgen en alles te
            regelen omtrent jouw social media.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Social media inzetten om meer <span className="underline decoration-[#FF7F50]">klanten</span>, <span className="underline decoration-[#FF7F50]">sales</span>,{" "}
            <span className="underline decoration-[#FF7F50]">leads</span> of zelfs <span className="underline decoration-[#FF7F50]">sollicitanten</span> aan te trekken? Met{" "}
            <Link href="/social-media-beheer" className="text-[#FF7F50] font-medium">
              social media management
            </Link>{" "}
            verzorgen wij jouw social media van A tot Z.
          </p>
          <button className="bg-[#2E6F5E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1b4332] transition-colors shadow-md mt-4">Bekijk onze diensten</button>
        </div>

        <div className="flex gap-3 mt-[-220px] items-end">
          <div className="flex flex-col items-end gap-3 w-[45%]">
            <div className="relative w-fit h-fit rounded-2xl overflow-hidden shadow-lg border-white justify-end items-end">
              <Image src="https://mathia.nl/wp-content/uploads/2024/02/tiny-mathia-kijkt-in-camera-682x1024.png" alt="Working" width={100} height={100} className="object-contain" />
            </div>
            <div className="relative w-fit h-fit rounded-2xl overflow-hidden shadow-lg border-white">
              <Image src="https://mathia.nl/wp-content/uploads/2024/02/Ontwerp-zonder-titel-4-1-1024x682.png" alt="Working on laptop" width={1024} height={682} className="object-contain" />
            </div>
          </div>

          {/* Right column: tall main video */}
          <VideoPlayer src="https://mathia.nl/wp-content/uploads/2025/05/wat-doet-een-social-media-manager.mp4" />
        </div>
      </div>
    </section>
  );
}
