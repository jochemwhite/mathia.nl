import Image from "next/image";
import Link from "next/link";

export default function AanbodSection() {
  return (
    <section className="container">
      <div className="flex items-center justify-center gap-12">
        <div>
          <h1 className="text-4xl font-semibold text-primary">Meer weter over onze diensten?</h1>

          <div className="space-y-8  mt-8 text-primary">
            <p>
              Wij zijn er voor alles wat met social media te maken heeft! Of je nu hulp zoekt met het beheren van je accounts, toffe content wilt laten maken, of gewoon wat handige tips nodig hebt om
              zelf aan de slag te gaan: wij helpen je graag.
            </p>

            <p>
              Geen zin of tijd om je social media zelf te doen? Geen probleem. Wij nemen het van je over, zodat jij je kunt richten op de dingen die je leuk vindt. Ons team maakt originele posts die
              echt bij jouw merk passen en je volgers aanspreken.
            </p>

            <p>
              Liever zelf aan de slag? We geven ook
              <Link href="/linkedin-training" className="underline text-secondary-accent">
                {" "}
                trainingen{" "}
              </Link>{" "}
              waarmee je snel leert hoe je social media slim inzet.
            </p>

            <p>
              Of je nu
              <Link href="/social-media-management" className="underline text-secondary-accent">
                {" "}
                alles uit handen wilt geven{" "}
              </Link>{" "}
              of{" "}
              <Link href="/strategie-sessies" className="underline text-secondary-accent">
                af en toe wat ondersteuning nodig hebt{" "}
              </Link>
              , wij staan voor je klaar. Samen tillen we jouw social media naar een hoger niveau!
            </p>
          </div>
        </div>

        <div>
          <Image src="/img/website-foto-SCA-promo.png" alt="website-foto-SCA-promo" width={1500} height={960} priority />
        </div>
      </div>
    </section>
  );
}
