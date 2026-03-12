"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect, useCallback } from "react";
import { navLinks, aanbodItems, CTALINK } from "@/src/lib/const";
import MobileNav from "./MobileNav";
import CTAButton from "../buttons/cta";

export default function Navbar() {
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
    <header className="bg-secondary py-3 px-4 sm:px-6 md:px-12 sticky top-0 z-50 border-b border-border">
      <nav>
        <div className="container flex items-center justify-between">
          {/* ── Mobile layout ── */}
          <MobileNav />

          {/* ── Desktop layout ── */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-primary uppercase w-full justify-center relative">
            <Link
              href="/"
              className="hover:text-primary/70 transition-colors tracking-wide"
            >
              Home
            </Link>

            {/* Aanbod hover dropdown */}
            <div
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <Link
                href="/aanbod"
                className="flex items-center gap-1.5 hover:text-primary/70 transition-colors tracking-wide outline-none"
              >
                Aanbod
                <ChevronDown
                  size={14}
                  className={`opacity-70 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </Link>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="w-64 bg-popover border border-border rounded-lg shadow-lg p-1 animate-in fade-in-0 zoom-in-95 duration-150">
                    {aanbodItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-secondary transition-colors"
                      >
                        <div>
                          <span className="text-sm font-medium text-primary block">
                            {item.label}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/gratis"
              className="hover:text-primary/70 transition-colors tracking-wide"
            >
              Gratis
            </Link>

            {/* Center logo */}
            <Link href="/" className="mx-2 lg:mx-4 shrink-0">
              <Image
                src="/img/logo.webp"
                alt="Logo Mathia.nl"
                width={64}
                height={64}
                className="lg:w-[72px] lg:h-[72px]"
              />
            </Link>

            <Link
              href="/contact"
              className="hover:text-primary/70 transition-colors tracking-wide"
            >
              Contact
            </Link>

            <Link
              href="/blogs"
              className="hover:text-primary/70 transition-colors tracking-wide whitespace-nowrap"
            >
              Blogs
            </Link>
            <Link
              href="/over-mij"
              className="hover:text-primary/70 transition-colors tracking-wide whitespace-nowrap"
            >
              Over mij
            </Link>

            <div className="absolute right-0">
              <CTAButton
                href={CTALINK}
                text="Afspraak maken"
                target="_blank"
                className="text-sm shrink-0 font-medium whitespace-nowrap"
                variant="small"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
