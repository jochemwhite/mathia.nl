import Link from "next/link";
import Image from "next/image";

export default function AcademySection() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-12 py-12 sm:py-16">
          <p className="lato text-sm font-bold mb-4 sm:mb-6 text-primary">#MathiaAcademy</p>

          <h1 className="sora font-extrabold leading-tight mb-4 sm:mb-6 text-primary" style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}>
            Meer volgers, meer klanten, meer omzet
            <br />
            en vooral: meer plezier?
          </h1>

          <p className="lato text-base mb-4 leading-relaxed text-primary">
            Dé social media training van Benelux die je éindelijk de inzichten geeft die je nodig hebt om meer omzet te draaien via social media!
          </p>

          <p className="lato text-base mb-8 sm:mb-10 text-primary">Ready to rock the socials?</p>

          <Link href="https://mathia.kennis.shop/pay/MathiaAcademy" target="_blank">
            <button className="lato font-bold text-white px-6 sm:px-8 py-4 rounded-lg w-full sm:w-fit text-base cursor-pointer bg-secondary-accent hover:bg-secondary-accent/80 transition-colors shadow-md">
              Klik hier om je in te schrijven
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:flex-1 relative min-h-[280px] sm:min-h-[380px] md:min-h-[520px]">
          <Image src="https://mathia.nl/wp-content/uploads/2025/09/uitbesteden-social-media-1024x1024.png" alt="Mathia Academy" fill className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
