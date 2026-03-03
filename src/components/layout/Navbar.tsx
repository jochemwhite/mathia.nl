"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, ChevronDown, Sparkles, BarChart3, GraduationCap } from "lucide-react";
import { useRef, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet";

const aanbodItems = [
  {
    label: "Social Media Beheer",
    href: "/social-media-beheer",
    description: "Laat ons jouw social media beheren",
  },
  {
    label: "Strategie Sessies",
    href: "/strategie-sessies",
    description: "Persoonlijke strategie op maat",
  },
  {
    label: "Mathia Academy",
    href: "/mathia-academy",
    description: "Leer het zelf met onze cursussen",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gratis", href: "/gratis" },
  { label: "Contact", href: "/contact" },
  { label: "Over Mathia.nl", href: "/blogs" },
];

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mobileAanbodOpen, setMobileAanbodOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    };
  }, []);

  return (
    <nav className="bg-secondary py-3 px-4 sm:px-6 md:px-12 sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ── Mobile layout ── */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Hamburger */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="text-primary p-2 rounded-md hover:bg-primary/10 transition-colors" aria-label="Open menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[min(320px,85vw)] bg-secondary border-border p-0">
              <SheetHeader className="p-6 pb-4 border-b border-border">
                <SheetTitle className="text-primary">
                  <Image src="/img/logo.webp" alt="Logo Mathia.nl" width={64} height={64} />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col py-2 overflow-y-auto max-h-[calc(100svh-88px)]">
                <Link href="/" onClick={() => setSheetOpen(false)} className="px-6 py-3 text-sm font-medium text-primary uppercase tracking-wide hover:bg-primary/10 transition-colors">
                  Home
                </Link>

                {/* Aanbod accordion */}
                <div>
                  <div className="flex items-center justify-between px-6 py-3 hover:bg-primary/10 transition-colors cursor-pointer" onClick={() => setMobileAanbodOpen(!mobileAanbodOpen)}>
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">Aanbod</span>
                    <ChevronDown size={16} className={`text-primary transition-transform duration-200 ${mobileAanbodOpen ? "rotate-180" : ""}`} />
                  </div>

                  <div className="grid transition-[grid-template-rows] duration-200 ease-in-out" style={{ gridTemplateRows: mobileAanbodOpen ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      {aanbodItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setSheetOpen(false)} className="flex items-start gap-3 pl-10 pr-6 py-2.5 hover:bg-primary/10 transition-colors">
                          <div>
                            <span className="text-sm font-medium text-primary block">{item.label}</span>
                            <span className="text-xs text-muted-foreground">{item.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="px-6 py-3 text-sm font-medium text-primary uppercase tracking-wide hover:bg-primary/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="px-6 pt-4 mt-2 border-t border-border">
                  <Link
                    href="https://calendly.com/mathiatv/30min"
                    target="_blank"
                    onClick={() => setSheetOpen(false)}
                    className="block w-full text-center bg-secondary-accent text-white px-6 py-3 rounded-md text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
                  >
                    Afspraak Maken
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Centered logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/img/logo.webp" alt="Logo Mathia.nl" width={52} height={52} />
          </Link>

          {/* Mobile CTA */}
          <Link
            href="https://calendly.com/mathiatv/30min"
            target="_blank"
            className="bg-secondary-accent text-white px-3 py-2 rounded-md text-xs font-medium shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Afspraak
          </Link>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-primary uppercase w-full justify-center">
          <Link href="/" className="hover:text-primary/70 transition-colors tracking-wide">
            Home
          </Link>

          {/* Aanbod hover dropdown */}
          <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <Link href="/aanbod" className="flex items-center gap-1.5 hover:text-primary/70 transition-colors tracking-wide outline-none">
              Aanbod
              <ChevronDown size={14} className={`opacity-70 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </Link>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="w-64 bg-popover border border-border rounded-lg shadow-lg p-1 animate-in fade-in-0 zoom-in-95 duration-150">
                  {aanbodItems.map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors">
                      <div>
                        <span className="text-sm font-medium text-primary block">{item.label}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/gratis" className="hover:text-primary/70 transition-colors tracking-wide">
            Gratis
          </Link>

          {/* Center logo */}
          <Link href="/" className="mx-2 lg:mx-4 shrink-0">
            <Image src="/img/logo.webp" alt="Logo Mathia.nl" width={64} height={64} className="lg:w-[72px] lg:h-[72px]" />
          </Link>

          <Link href="/contact" className="hover:text-primary/70 transition-colors tracking-wide">
            Contact
          </Link>

          <Link href="/blogs" className="hover:text-primary/70 transition-colors tracking-wide whitespace-nowrap">
            Over Mathia.nl
          </Link>

          <Link
            href="https://calendly.com/mathiatv/30min"
            target="_blank"
            className="bg-secondary-accent text-white  px-4 lg:px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:opacity-90 transition-opacity ml-2 whitespace-nowrap shrink-0"
          >
            Afspraak Maken
          </Link>
        </div>
      </div>
    </nav>
  );
}
