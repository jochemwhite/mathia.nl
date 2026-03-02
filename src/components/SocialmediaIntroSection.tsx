import Image from "next/image";
import Link from "next/link";

export default function SocialmediaIntroSection() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-12">
        <div>
          <h2 className="text-5xl font-bold">Social media uitbesteden zonder dat jij er zelf steeds achteraan hoeft</h2>

          <div className="space-y-8 text-xl mt-8">
            <p>Wil je wel zichtbaar zijn op social media, maar lukt het niet om daar consequent tijd voor te maken? Dan is social media management waarschijnlijk precies wat je nodig hebt.</p>

            <p>
              Ik help ondernemers en bedrijven met een mooi verhaal om professioneel, herkenbaar en consistent zichtbaar te zijn op social media. Geen losse flodders of last-minute posts, maar een
              duidelijke aanpak die past bij jouw bedrijf.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="https://mathia.nl/wp-content/uploads/2026/02/social-media-manager-mathia-aan-het-werk-e1772099452388.jpg"
            alt="social-media-manager-mathia-aan-het-werk"
            width={1500}
            height={960}
            className="rounded-xl"
          />
        </div>
      </div>

      <Link href="https://calendly.com/mathiatv/30min" className="flex justify-end" target="_blank">
        <button className="bg-[#FF7F50] text-white px-8 py-3 rounded-md font-bold hover:bg-[#e06b40] transition-colors shadow-md cursor-pointer">Plan een kennismakingsgesprek</button>
      </Link>
    </section>
  );
}
