import BenifitSections from "@/src/components/benifitSections";
import BookingSection from "@/src/components/BookingSection";
import HeroSection from "@/src/components/HeroSection";
import HowItWorks from "@/src/components/HowItWorks";
import ReviewsCarousel from "@/src/components/ReviewsCarousel";
import SocialMediaBeheer from "@/src/components/SocialMediaBeheer";
import SocialmediaIntroSection from "@/src/components/SocialmediaIntroSection";
import WhyChooseMe from "@/src/components/WhyChooseMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social media beheer uitbesteden",
  description: "Social media beheer voor bedrijven die zichtbaar willen groeien. Van strategie tot content en planning. Plan vrijblijvend een kennismakingsgesprek."
}


export default function SocialMediaBeheerPage() {
  return (
    <main>
      <HeroSection />
      <SocialmediaIntroSection />
      <SocialMediaBeheer />
      <BenifitSections />
      <HowItWorks />
      <WhyChooseMe />
      <BookingSection />
      <ReviewsCarousel />
    </main>
  );
}
