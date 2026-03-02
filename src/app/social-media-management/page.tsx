import BenifitSections from "@/src/components/benifitSections";
import BookingSection from "@/src/components/BookingSection";
import HeroSection from "@/src/components/HeroSection";
import HowItWorks from "@/src/components/HowItWorks";
import ReviewsCarousel from "@/src/components/ReviewsCarousel";
import SocialMediaBeheer from "@/src/components/SocialMediaBeheer";
import SocialmediaIntroSection from "@/src/components/SocialmediaIntroSection";
import WhyChooseMe from "@/src/components/WhyChooseMe";
export default function SocialMediaBeheerPage() {
  return (
    <main className="">
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
