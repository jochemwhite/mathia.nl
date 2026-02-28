import Image from 'next/image';

export default function IntroSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-[#8B3A4C] font-bold uppercase tracking-widest text-sm">
            JOUW SOCIAL MEDIA
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#2E6F5E] leading-tight">
            IS DE ONLINE ETALAGE VAN JE BEDRIJF
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Je weet dat social media van groot belang is. Maar het kost je veel tijd en denkkracht om er mee bezig te zijn. Wij als social media manager zijn hier om jou te ontzorgen en alles te regelen omtrent jouw social media.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Social media inzetten om meer <span className="underline decoration-[#FF7F50]">klanten</span>, <span className="underline decoration-[#FF7F50]">sales</span>, <span className="underline decoration-[#FF7F50]">leads</span> of zelfs <span className="underline decoration-[#FF7F50]">sollicitanten</span> aan te trekken? Met <span className="text-[#FF7F50] font-medium">social media management</span> verzorgen wij jouw social media van A tot Z.
          </p>
          <button className="bg-[#2E6F5E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1b4332] transition-colors shadow-md mt-4">
            Bekijk onze diensten
          </button>
        </div>

        {/* Image Collage */}
        <div className="relative h-[500px] w-full">
          {/* Main Image */}
          <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://picsum.photos/600/800?random=2"
              alt="Social Media Manager"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px]">
              <p className="text-[#2E6F5E] font-bold text-lg leading-tight">Wat doet een social media manager?</p>
            </div>
          </div>

          {/* Secondary Image 1 */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-lg z-20 border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://picsum.photos/400/400?random=3"
              alt="Working on laptop"
              fill
              className="object-cover"
            />
          </div>

          {/* Secondary Image 2 (Small circle/rounded) */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full overflow-hidden shadow-lg z-0 border-4 border-white">
             <Image
              src="https://picsum.photos/200/200?random=4"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
