import Image from 'next/image';
import { Check } from 'lucide-react';

export default function LeadMagnetSection() {
  return (
    <section className="bg-[#F9C8B8] py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Mockup Images */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Tablet Mockup */}
          <div className="relative w-64 h-80 bg-black rounded-2xl shadow-2xl transform -rotate-6 z-10 border-8 border-black overflow-hidden">
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              <span className="text-[#2E6F5E] font-bold text-xl">E-BOOK</span>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="absolute right-10 bottom-10 w-40 h-72 bg-black rounded-3xl shadow-2xl transform rotate-12 z-20 border-8 border-black overflow-hidden">
            <div className="absolute inset-0 bg-white flex items-center justify-center">
              <span className="text-[#2E6F5E] font-bold text-sm">CHECKLIST</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-[#2E6F5E]">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Meer klanten via social media <span className="font-normal text-lg block mt-2">met een successtrategie voor social media?</span>
          </h2>
          
          <ul className="space-y-3">
            {[
              "Meest complete gids online (stappenplan)",
              "Krijg meer bereik op social media",
              "Maak van je social media een leadmagnet",
              "Captions checklist: zo scoren jouw posts bij de juiste doelgroep",
              "Interactie gebruiken om engagement te verhogen",
              "En nog veel meer"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2E6F5E] mt-1 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-[#2E6F5E] text-white px-8 py-3 rounded-md font-bold hover:bg-[#1b4332] transition-colors shadow-md mt-6 w-full md:w-auto">
            Gratis download
          </button>
        </div>
      </div>
    </section>
  );
}
