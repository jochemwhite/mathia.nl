import EbookLearnSection from "@/src/components/gratis/Ebooklearnsection";
import GratisEbook from "@/src/components/gratis/gratisEbook";
import TestimonialSection from "@/src/components/testimonial-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis",
  description: "Meer volgers krijgen zonder frustratie? Download mijn gratis e-book en ontdek 3 stappen die ik zelf gebruik om social media te laten groeien."
}


export default function EbookPage() {
  return (
    <main>
      <GratisEbook />
      <EbookLearnSection />
      <TestimonialSection />3
    </main>
  );
}
