import ContactForm from "@/src/components/forms/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F3EE" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Lato:wght@400;600;700&display=swap');
        .sora { font-family: 'Sora', sans-serif; }
        .lato { font-family: 'Lato', sans-serif; }
      `}</style>

      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-10">
          <p className="lato text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#1A4A2E" }}>
            Laten we kennismaken
          </p>
          <h1 className="sora font-extrabold leading-tight mb-4" style={{ color: "#1A1A1A", fontSize: "clamp(28px, 4vw, 40px)" }}>
            Neem contact op
          </h1>
          <p className="lato text-base text-gray-500 leading-relaxed">Heb je een vraag of wil je samenwerken? Vul het formulier in en ik kom zo snel mogelijk bij je terug.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <ContactForm />
        </div>

        {/* Bottom note */}
        <p className="lato text-xs text-center text-gray-400 mt-6">
          Of stuur direct een e-mail naar{" "}
          <a href="mailto:contact@mathia.nl" className="text-green-700 font-semibold hover:underline">
            contact@mathia.nl
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
