import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
import TrustedBySection from "../components/TrustedBySection";
import BookingSection from "../components/BookingSection";
import LeadMagnetSection from "../components/LeadMagnetSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TrustedBySection />
      <BookingSection />
      <LeadMagnetSection
        title="HAAL MEER RESULTAAT UIT JE SOCIAL MEDIA"
        description="Lukt het niet om meer volgers te krijgen? Dat hoeft niet! Ik heb drie accounts met meer dan 10.000 volgers, ik wéét welke strategieën werken. Ik deel ze graag met je!"
        image="https://mathia.nl/wp-content/uploads/2026/02/gratis-ebook-meer-volgers-social-media-300x200.png"
      />
    </main>
  );
}
