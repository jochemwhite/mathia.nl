import LeadMagnetSection from "@/src/components/LeadMagnetSection";
import PodcastSection from "@/src/components/PodcastSection";
import TestimonialSection from "@/src/components/testimonial-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis",
  description: "Meer volgers krijgen zonder frustratie? Download mijn gratis e-book en ontdek 3 stappen die ik zelf gebruik om social media te laten groeien."
}


export default function GratisPage() {
  return (
    <main>
      <LeadMagnetSection
        title="HAAL MEER RESULTAAT UIT JE SOCIAL MEDIA"
        description="Lukt het niet om meer volgers te krijgen? Dat hoeft niet! Ik heb drie accounts met meer dan 10.000 volgers, ik wéét welke strategieën werken. Ik deel ze graag met je!"
        image="/img/gratis-ebook-meer-volgers-social-media-2.png"
        reverse={true}
      />
      <TestimonialSection />
      <PodcastSection />
    </main>
  );
}
