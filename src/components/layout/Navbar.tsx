"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#CDECE3] py-4 px-6 md:px-12 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16 text-base font-medium text-[#2E6F5E] justify-center uppercase">
          <Link href="/" className="hover:text-[#1b4332] transition-colors">
            HOME
          </Link>
          <Link href="/aanbod" className="hover:text-[#1b4332] transition-colors flex items-center gap-1">
            AANBOD <span className="text-xs">▼</span>
          </Link>
          <Link href="/gratis" className="hover:text-[#1b4332] transition-colors">
            GRATIS
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/img/logo.webp" alt="Logo Mathia.nl" width={80} height={80} />
          </Link>
          <Link href="/contact" className="hover:text-[#1b4332] transition-colors">
            CONTACT
          </Link>
          <Link href="/blogs" className="hover:text-[#1b4332] transition-colors">
            OVER MATHIA.NL
          </Link>
          <Link href="https://calendly.com/mathiatv/30min" className="transition-colors bg-[#2E6F5E] text-white px-6 py-2 rounded-md text-sm font-medium shadow-md mt-2" target="_blank">
            Afspraak Maken
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#2E6F5E]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#CDECE3] border-t border-[#2E6F5E]/10 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link href="#" className="text-[#2E6F5E] font-medium">
            HOME
          </Link>
          <Link href="#" className="text-[#2E6F5E] font-medium">
            AANBOD
          </Link>
          <Link href="#" className="text-[#2E6F5E] font-medium">
            GRATIS
          </Link>
          <Link href="#" className="text-[#2E6F5E] font-medium">
            CONTACT
          </Link>
          <Link href="#" className="text-[#2E6F5E] font-medium">
            OVER MATHIA.NL
          </Link>
          <button className="bg-[#8B3A4C] text-white px-6 py-2 rounded-md text-sm font-medium w-full">Afspraak maken</button>
        </div>
      )}
    </nav>
  );
}
