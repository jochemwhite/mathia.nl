import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroSection from "@/src/components/about/aboutHero";
import AboutSection from "@/src/components/about/aboutSection";
import StatsSection from "@/src/components/about/stats";
import BookingSection from "@/src/components/BookingSection";

export const metadata: Metadata = {
  title: "Over Mathia | Mathia.nl",
  description:
    "Wie is Mathia? Ik ben Mathia van Soest: Social media fanaat in hart en nieren. Ik ben de eigenaar van mathia.nl en alles wat daar onder valt. Het is mijn gezonde obsessie om ondernemers te helpen aan meer social media resultaat. Dit doe ik door middel van het aanbieden van social media management van A […]",
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
