import AanbodSection from "@/src/components/aanbodSection";
import ExtendedServicesSections from "@/src/components/ExtendedServicesSections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social media manager",
  description:
    "Social media manager voor MKB. Strategie sessies digitaal of op locatie, social media beheer van A tot Z. Maak gratis een afspraak!",
};

export default function Aanbod() {
  return (
    <main className="">
      <AanbodSection />
      <ExtendedServicesSections />
    </main>
  );
}
