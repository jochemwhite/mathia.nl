import ContactForm from "@/src/components/forms/ContactForm";
import { email } from "@/src/lib/const";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: ""
}

const ContactPage: React.FC = () => {
  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-primary">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="lato text-xs font-bold uppercase tracking-[0.2em] mb-3 text-primary">
            Laten we kennismaken
          </p>
          <h1 className="sora font-extrabold leading-tight mb-4 text-primary text-3xl sm:text-4xl md:text-5xl" >
            Neem contact op
          </h1>
          <p className="lato text-sm sm:text-base text-primary leading-relaxed">Heb je een vraag of wil je samenwerken? Vul het formulier in en ik kom zo snel mogelijk bij je terug.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-8 md:p-10">
          <ContactForm />
        </div>

        {/* Bottom note */}
        <p className="lato text-xs text-center text-gray-400 mt-5 sm:mt-6">
          Of stuur direct een e-mail naar{" "}
          <Link href={email.label} className="text-secondary-accent font-semibold hover:underline">
            {email.label}
          </Link>
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
