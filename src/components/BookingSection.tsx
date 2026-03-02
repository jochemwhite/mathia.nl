import CTAButton from "./buttons/cta";

export default function BookingSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-[#2E6F5E] text-3xl md:text-4xl font-bold">Even kennismaken?</h2>
          <p className="text-gray-600 leading-relaxed">
            We zijn benieuwd naar jouw bedrijf en jouw verhaal! Wat zijn je plannen, dromen en doelen? Of je nu al een strategie hebt of nog wat inspiratie kunt gebruiken, wij denken graag met je mee.
          </p>
          <p className="text-gray-600 leading-relaxed">Benieuwd wat wij voor je kunnen betekenen met social media marketing?</p>
          <p className="text-[#2E6F5E] font-medium">Laten we een (digitaal) koffietje drinken & prik een moment in onze agenda!</p>

          <CTAButton />
        </div>

        {/* Calendar */}
        <div className="w-full h-full">
          <iframe src="https://calendly.com/mathiatv/30min?embed_domain=mathia.nl&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1" frameBorder="0" height="600px" width="100%"></iframe>
        </div>
      </div>
    </section>
  );
}
