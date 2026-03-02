import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#CDECE3] py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Logo Column */}
        <div className="col-span-1 md:col-span-1">
          <Image src="/img/logo.webp" alt="Logo" width={200} height={100} />
        </div>

        {/* Contact Column */}
        <div className="col-span-1">
          <h3 className="text-[#2E6F5E] font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-[#2E6F5E]/80">
            <li>
              <a href="mailto:contact@mathia.nl" className="hover:text-[#1b4332]">
                contact@mathia.nl
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

      <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-[#2E6F5E]/10 text-center text-[#2E6F5E]/60 text-sm flex flex-row justify-between">
        <p>Copyright © {currentYear} Mathia.nl</p>

        <p>
          build by{" "}
          <Link href="https://amrio.nl" target="_blank" className="hover:text-[#1b4332]">
            Amrio
          </Link>
        </p>
      </div>
    </footer>
  );
}
