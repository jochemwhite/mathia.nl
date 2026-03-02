import Image from "next/image";

export default function LeadMagnetSection() {
  return (
    <section className="bg-[#F9C8B8] py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="https://mathia.nl/wp-content/uploads/2026/02/gratis-ebook-meer-volgers-social-media-300x200.png" alt="Lead Magnet" width={300} height={300} />
        </div>
        <div className="space-y-6 text-[#2E6F5E]">
          <h4 className="md:text-xl font-bold leading-tight">HAAL MEER RESULTAAT UIT JE SOCIAL MEDIA</h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Meer klanten in 3 stappen</h2>

          <p className="text-gray-600 leading-relaxed">
            Lukt het niet om meer volgers te krijgen? Dat hoeft niet! Ik heb drie accounts met meer dan 10.000 volgers, ik wéét welke strategieën werken. Ik deel ze graag met je!
          </p>

          <button className="bg-[#2E6F5E] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1b4332] transition-colors shadow-md mt-6 w-full md:w-auto cursor-pointer">
            Mathia, geef mij dat e-book!
          </button>
        </div>
      </div>
    </section>
  );
}
