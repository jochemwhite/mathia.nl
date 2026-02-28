import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#CDECE3] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex flex-col items-start gap-4">
            <div className="relative w-20 h-20 bg-[#2E6F5E] rounded-full flex items-center justify-center text-white font-bold text-4xl mb-4">M</div>
            <span className="font-bold text-[#1b4332] text-2xl tracking-wider">MATHIA.NL</span>
          </div>
        </div>

        {/* Contact Column */}
        <div className="col-span-1">
          <h3 className="text-[#2E6F5E] font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-[#2E6F5E]/80">
            <li>
              <a href="mailto:contact@mathia.nl" className="hover:text-[#1b4332]">
                contact [at] mathia [punt] nl
              </a>
            </li>
            <li>
              <button className="bg-[#2E6F5E] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#1b4332] transition-colors shadow-md mt-2">Afspraak maken</button>
            </li>
          </ul>
        </div>

        {/* Aanbod Column */}
        <div className="col-span-1">
          <h3 className="text-[#2E6F5E] font-bold text-lg mb-6">Aanbod</h3>
          <ul className="space-y-4 text-[#2E6F5E]/80">
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                Social media management
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                Strategie sessies
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                Mathia Academy
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div className="col-span-1">
          <h3 className="text-[#2E6F5E] font-bold text-lg mb-6">Socials</h3>
          <ul className="space-y-4 text-[#2E6F5E]/80">
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                TikTok
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                YouTube
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#1b4332]">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#2E6F5E]/10 text-center text-[#2E6F5E]/60 text-sm">
        <p>
          Copyright © 2026 Mathia.nl | Aangedreven door <span className="text-[#FF7F50]">Astra WordPress thema</span>
        </p>
      </div>
    </footer>
  );
}
