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
      <LeadMagnetSection />
    </main>
  );
}
