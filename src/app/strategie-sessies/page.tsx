import PricingSection from "@/src/components/PricingSection";
import ReviewsCarousel from "@/src/components/ReviewsCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategie sessies",
  description: "Met de strategie sessies van Mathia wordt social media voor jou gesneden koek. De sessies vinden plaats op locatie of online!"
}


const ServicesPage: React.FC = () => {
  return (
    <main>
      <PricingSection />
      <ReviewsCarousel />
    </main>
  );
};

export default ServicesPage;
