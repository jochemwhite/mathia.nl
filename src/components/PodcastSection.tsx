import Image from "next/image";
import ChevronSection from "./layout/ChevronSection";

export default function PodcastSection() {
  return (
    <section className="bg-[#186B58] py-10 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto py-16">
        <div className="text-center mb-16 flex items-stretch justify-center">
          <div className="w-1/2 flex flex-col justify-between ">
            <h4 className="md:text-4xl font-bold leading-tight text-left text-white">
              Beluister mijn podcast <br /> voor ondernemers
            </h4>
            <Image src="https://mathia.nl/wp-content/uploads/2026/02/selfie-podcast-opname-studio-caroline-en-mathi-768x577.jpg" alt="Lead Magnet" width={500} height={500} />
          </div>
          <div className="w-1/2">
            <Image src="https://mathia.nl/wp-content/uploads/2026/02/podcast-artwork-seizoen-3-768x768.png" alt="Lead Magnet" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
