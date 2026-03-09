import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/src/components/about/aboutHero";
import AboutSection from "@/src/components/about/aboutSection";
import StatsSection from "@/src/components/about/stats";
import BookingSection from "@/src/components/BookingSection";

export const metadata: Metadata = {
  title: "Over Mathia | Mathia.nl",
  description: "Ik ben Mathia van Soest: Social media fanaat in hart en nieren. Lees mijn verhaal.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <BookingSection />
    </main>
  );
}
