import Image from 'next/image';

export default function TrustedBySection() {
  return (
    <section className="bg-[#F9C8B8] py-20 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <h2 className="text-[#8B3A4C] font-bold uppercase tracking-widest text-sm md:text-lg whitespace-nowrap">
          VERTROUWD DOOR
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos */}
          <div className="font-serif font-bold text-2xl text-[#8B3A4C]">NIVEAU</div>
          <div className="font-sans font-black text-3xl text-[#8B3A4C] italic">DURVEN</div>
          <div className="relative w-12 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs transform rotate-12 shadow-lg">
            Red Bull
          </div>
          <div className="font-mono font-bold text-xl text-[#8B3A4C]">THE VALLUE</div>
        </div>
      </div>
    </section>
  );
}
