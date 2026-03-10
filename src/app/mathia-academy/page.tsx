import AcademySection from "@/src/components/AcademySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathia Academy",
  description:
    "#MathiaAcademy Meer volgers, meer klanten, meer omzet en vooral: meer plezier? Dé social media training van Benelux die je éindelijk de inzichten geeft die je nodig hebt om meer omzet te draaien via social media! Ready to rock the socials? Klik hier om je in te schrijven",
};

export default function MathiaAcademyPage() {
  return (
    <main>
      <AcademySection />
    </main>
  );
}
