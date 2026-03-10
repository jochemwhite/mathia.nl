import Image from "next/image";
import Link from "next/link";

export default function AanbodSection() {
  return (
    <section className="container py-12 md:py-0">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold text-primary sm:text-3xl md:text-4xl">
            Meer weten over onze diensten?
          </h1>

          <div className="mt-6 space-y-6 text-primary md:mt-8 md:space-y-8">
            <p>
              Wij zijn er voor alles wat met social media te maken heeft! Of je nu hulp zoekt met
              het beheren van je accounts, toffe content wilt laten maken, of gewoon wat handige
              tips nodig hebt om zelf aan de slag te gaan: wij helpen je graag.
            </p>

            <p>
              Geen zin of tijd om je social media zelf te doen? Geen probleem. Wij nemen het van je
              over, zodat jij je kunt richten op de dingen die je leuk vindt. Ons team maakt
              originele posts die echt bij jouw merk passen en je volgers aanspreken.
            </p>

            <p>
              Liever zelf aan de slag? We geven ook
              <Link href="/mathia-academy" className="underline text-secondary-accent">
                {" "}trainingen{" "}
              </Link>
              waarmee je snel leert hoe je social media slim inzet.
            </p>

            <p>
              Of je nu
              <Link href="/social-media-management" className="underline text-secondary-accent">
                {" "}alles uit handen wilt geven{" "}
              </Link>
              of{" "}
              <Link href="/strategie-sessies" className="underline text-secondary-accent">
                af en toe wat ondersteuning nodig hebt{" "}
              </Link>
              , wij staan voor je klaar. Samen tillen we jouw social media naar een hoger niveau!
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/img/website-foto-SCA-promo.png"
            alt="website-foto-SCA-promo"
            width={1500}
            height={960}
            className="w-full rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}