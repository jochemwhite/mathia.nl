import Image from "next/image";
import Link from "next/link";

export default function SocialMediaBeheer() {
  const included = [
    "Contentplanning en strategische input",
    "Een vast aantal afgesproken posts per maand",
    "Het uitwerken van contentideeën",
    "Teksten schrijven voor posts",
    "Het inplannen en publiceren van content",
    "Meedenken over formats, rubrieken en invalshoeken",
    "Het analyseren van statistieken en bijsturen waar nodig",
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-12">
          <div>
            <Image src="https://mathia.nl/wp-content/uploads/2025/09/uitbesteden-social-media-768x767.png" alt="website-foto-SCA-promo" width={3000} height={960} priority className="rounded-xl" />
            <Link href="https://calendly.com/mathiatv/30min" target="_blank" className="flex justify-end mt-4">
              <button className="bg-[#FF7F50] text-white px-8 py-3 rounded-md font-bold hover:bg-[#e06b40] transition-colors shadow-md cursor-pointer">Plan je gratis kennismakingsgesprek</button>
            </Link>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Social Media Beheer</h1>

            <div className="space-y-8 text-xl mt-8">
              <p>
                Ik werk met op maat gemaakte pakketten die passen bij jouw behoeften. Of je nu alleen een consistent Instagram-account nodig hebt of een uitgebreide strategie met TikTok en Instagram
                Reels, let’s go! Samen kruipen in de huid van jouw ideale klant en we creëren content die aansluit bij jouw doelgroep, huisstijl en merkidentiteit. En natuurlijk zorg ik voor maximale
                zichtbaarheid en groei.
              </p>

              <h2 className="text-4xl font-bold ">Wat zit hierbij?</h2>
              <ul className="space-y-2 list-disc pl-10">
                {included.map((item, i) => (
                  <li key={i} className="text-xl ">
                    {item}
                  </li>
                ))}
              </ul>

              <p>Jij hoeft dus niet steeds zelf te bedenken wat er online moet komen.</p>

              <p>Daar zit juist mijn meerwaarde. Onze samenwerking is op maat gemaakt van jouw wensen en doelen. Dit is al mogelijk vanaf 1 uur per week!</p>

              <p>Benieuwd naar wat ik voor jouw bedrijf kan betekenen? Neem contact met me op voor meer informatie en een gratis, vrijblijvend voorstel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
