import Link from "next/link";
import Image from "next/image";
import CTAButton from "./buttons/cta";
import { CTALINK } from "../lib/const";

const steps = [
  {
    number: "01",
    title: "Kennismaken",
    description: "We starten met een vrijblijvend gesprek. Daarin bespreken we jouw bedrijf, doelgroep, wensen en waar je nu op vastloopt.",
  },
  {
    number: "02",
    title: "Plan maken",
    description: "Ik kijk wat er nodig is om jouw social media beter en consistenter aan te pakken. Op basis daarvan kiezen we een samenwerking die past.",
  },
  {
    number: "03",
    title: "Content creëren",
    description: "We verzamelen content, maken een planning en werken vooruit. Zo ontstaat er overzicht en continuïteit.",
  },
  {
    number: "04",
    title: "Uitvoering",
    description: "Ik schrijf, plan en publiceer de content volgens de gemaakte afspraken.",
  },
  {
    number: "05",
    title: "Evalueren en bijsturen",
    description: "We kijken wat werkt, wat beter kan en hoe we verder kunnen optimaliseren.",
  },
];

export default function HowItWorks() {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 container">
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12">
        {/* Image + CTA */}
        <div className="w-full md:w-[45%] shrink-0">
          <Image
            src="/img/netwerkbijeenkomst.jpg"
            alt="Netwerkbijeenkomst Mathia"
            width={1024}
            height={683}
            priority
            className="rounded-xl w-full h-auto object-cover"
          />
          <div className="flex justify-center md:justify-end mt-4">
            <CTAButton href={CTALINK} text="Plan je gratis kennismakingsgesprek" />
          </div>
        </div>

        {/* Steps */}
        <div className="w-full text-primary">
          <p className="text-xs tracking-widest uppercase mb-3">Mijn werkwijze in het kort</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Zo werkt het</h2>

          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <div key={i} className="flex gap-5 sm:gap-6">
                  {/* Number + connector line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 bg-accent text-white">{step.number}</div>
                    {!isLast && <div className="w-px flex-1 my-2 bg-secondary" />}
                  </div>

                  {/* Content */}
                  <div className={isLast ? "pb-0" : "pb-8 sm:pb-10"}>
                    <h3 className="text-base sm:text-lg font-semibold mt-2 mb-1 text-primary">{step.title}</h3>
                    <p className="text-sm text-primary font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
