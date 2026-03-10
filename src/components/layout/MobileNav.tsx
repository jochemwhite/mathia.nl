"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet";
import { navLinks, aanbodItems, CTALINK } from "@/src/lib/const";
import { socialLinks } from "@/src/lib/const";
import CTAButton from "../buttons/cta";
import { Separator } from "../ui/separator";

export default function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [mobileAanbodOpen, setMobileAanbodOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full md:hidden">
      {/* Hamburger */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <button className="text-primary p-2 rounded-md hover:bg-primary/10 transition-colors" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[min(320px,85vw)] bg-secondary border-border p-0 flex flex-col">
          <SheetHeader className="p-6 pb-4 border-b border-border">
            <SheetTitle className="text-primary">
              <Image src="/img/logo.webp" alt="Logo Mathia.nl" width={64} height={64} />
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col py-2 overflow-y-auto flex-1 min-h-0">
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

            <Separator />
            <div className="px-4 py-3 flex flex-row justify-center">
              <CTAButton href={CTALINK} text="Afspraak Maken" target="_blank" onClick={() => setSheetOpen(false)} className="w-full" variant="small" />
            </div>
          </div>
          <SheetFooter className="px-6 py-4 border-t border-border">
            <ul className="flex flex-row gap-4 justify-between text-primary">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link href={social.href} className="hover:text-primary/80 flex flex-row gap-2 items-center">
                    <social.icon className="w-8 h-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Centered logo */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <Image src="/img/logo.webp" alt="Logo Mathia.nl" width={52} height={52} />
      </Link>

      {/* Mobile CTA */}
      <Link
        href={CTALINK}
        target="_blank"
        className="bg-secondary-accent text-white px-3 py-2 rounded-md text-xs font-medium shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Afspraak
      </Link>
    </div>
  );
}
