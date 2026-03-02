import Link from "next/link";
import Image from "next/image";

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
    <div className="min-h-screen flex items-center justify-center  px-6 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center w-1/2">
        <div>
          <Image src="https://mathia.nl/wp-content/uploads/2025/09/uitbesteden-social-media-768x767.png" alt="website-foto-SCA-promo" width={500} height={960} priority className="rounded-xl" />

          <Link href="https://calendly.com/mathiatv/30min" target="_blank" className="flex justify-end mt-4 w-full">
            <button className="bg-[#FF7F50] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e06b40] transition-colors shadow-md cursor-pointer">Plan je gratis kennismakingsgesprek</button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-2xl">
        {/* Header */}
        <p className="text-xs tracking-widest uppercase  mb-3">Mijn werkwijze in het kort</p>
        <h2 className="text-5xl font-semibold  mb-4 ">Zo werkt het</h2>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="flex gap-6">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 bg-emerald-900 text-white">{step.number}</div>
                  {!isLast && <div className="w-px flex-1 my-2 bg-emerald-900/10" />}
                </div>

                {/* Right: content */}
                <div className={isLast ? "pb-0" : "pb-10"}>
                  <h3 className="text-lg font-semibold mt-2 mb-2 text-emerald-900">{step.title}</h3>
                  <p className="text-sm text-stone-500 font-light leading-relaxed pr-4">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
