import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="relative bg-[#8B3A4C] py-32 px-6 md:px-12 overflow-hidden">
      {/* Angled Top Edge */}
      <div 
        className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-top-right z-10"
        style={{ marginTop: '-4rem' }}
      />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-20">
        {/* Card 1 */}
        <div className="group cursor-pointer">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-6 transform group-hover:scale-105 transition-transform duration-300 border-4 border-white/10">
            <Image
              src="https://picsum.photos/600/800?random=5"
              alt="Social Media Management"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          <h3 className="text-white text-2xl font-bold uppercase tracking-wide text-center">
            SOCIAL MEDIA <br />
            <span className="font-serif italic text-[#F9C8B8]">MANAGEMENT</span>
          </h3>
        </div>

        {/* Card 2 */}
        <div className="group cursor-pointer mt-12 md:mt-0">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-6 transform group-hover:scale-105 transition-transform duration-300 border-4 border-white/10">
            <Image
              src="https://picsum.photos/600/800?random=6"
              alt="Strategie Sessies"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          <h3 className="text-white text-2xl font-bold uppercase tracking-wide text-center">
            STRATEGIE <br />
            <span className="font-serif italic text-[#F9C8B8]">SESSIES</span>
          </h3>
        </div>

        {/* Card 3 */}
        <div className="group cursor-pointer mt-12 md:mt-0">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl mb-6 transform group-hover:scale-105 transition-transform duration-300 border-4 border-white/10">
            <Image
              src="https://picsum.photos/600/800?random=7"
              alt="Mathia Academy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
          <h3 className="text-white text-2xl font-bold uppercase tracking-wide text-center">
            MATHIA <br />
            <span className="font-serif italic text-[#F9C8B8]">ACADEMY</span>
          </h3>
        </div>
      </div>
      
      {/* Angled Bottom Edge */}
       <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-[#F9C8B8] transform skew-y-2 origin-bottom-left z-10"
        style={{ marginBottom: '-4rem' }}
      />
    </section>
  );
}
