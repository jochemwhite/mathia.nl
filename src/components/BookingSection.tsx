import { CTALINK } from "../lib/const";
import CTAButton from "./buttons/cta";

export default function BookingSection() {
  return (
    <section className="bg-white py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="container grid md:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-5 md:space-y-6 text-primary">
          <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold">Even kennismaken?</h2>
          <p className="text-primary leading-relaxed">
            We zijn benieuwd naar jouw bedrijf en jouw verhaal! Wat zijn je plannen, dromen en doelen? Of je nu al een strategie hebt of nog wat inspiratie kunt gebruiken, wij denken graag met je mee.
          </p>
          <p className="text-primary leading-relaxed">Benieuwd wat wij voor je kunnen betekenen met social media marketing?</p>
          <p className="text-primary font-medium">Laten we een (digitaal) koffietje drinken &amp; prik een moment in onze agenda!</p>
          <CTAButton href={CTALINK} text="Plan je gratis kennismaking" target="_blank" />
        </div>

        {/* Calendar embed */}
        <div className="w-full rounded-xl overflow-hidden">
          <iframe
            src="https://calendly.com/mathiatv/30min?embed_domain=mathia.nl&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1"
            className="w-full h-[500px] sm:h-[560px] md:h-[600px]"
            title="Plan een afspraak"
          />
        </div>
      </div>
    </section>
  );
}
