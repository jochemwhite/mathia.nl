import Image from "next/image";
import Link from "next/link";

export default function PodcastSection() {
  return (
    <section className="bg-[#186B58] py-10 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto py-10 sm:py-16">
        <Link href="https://open.spotify.com/show/1Gw6w5uCoDqdDWWwzdjidF?si=4428173a89044cd6" target="_blank" className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8 sm:gap-0 group">
          {/* Left column: heading + studio photo */}
          <div className="w-full sm:w-1/2 flex flex-col justify-between gap-6 sm:gap-0 sm:pr-6">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center sm:text-left text-white group-hover:underline transition-all">
              Beluister mijn podcast <br /> voor ondernemers
            </h4>
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src="https://mathia.nl/wp-content/uploads/2026/02/selfie-podcast-opname-studio-caroline-en-mathi-768x577.jpg"
                alt="Podcast opname studio"
                width={500}
                height={375}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right column: artwork */}
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-none rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://mathia.nl/wp-content/uploads/2026/02/podcast-artwork-seizoen-3-768x768.png"
                alt="Podcast artwork seizoen 3"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
