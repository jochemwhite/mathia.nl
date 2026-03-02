import Link from "next/link";

export default function AcademySection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto flex items-stretch min-h-[520px] py-16">
        {/* Left: text content */}
        <div className="flex-1 flex flex-col justify-center px-12 py-16 max-w-[55%]">
          <p className="lato text-sm font-bold mb-6" style={{ color: "#1A4A2E" }}>
            #MathiaAcademy
          </p>

          <h1 className="sora font-extrabold leading-tight mb-6" style={{ color: "#1A4A2E", fontSize: "clamp(28px, 3.5vw, 44px)" }}>
            Meer volgers, meer klanten, meer omzet
            <br />
            en vooral: meer plezier?
          </h1>

          <p className="lato text-base mb-4 leading-relaxed" style={{ color: "#2D5A3D" }}>
            Dé social media training van Benelux die je éindelijk de inzichten
            <br />
            geeft die je nodig hebt om meer omzet te draaien via social media!
          </p>

          <p className="lato text-base mb-10" style={{ color: "#2D5A3D" }}>
            Ready to rock the socials?
          </p>

          <Link href="https://mathia.kennis.shop/pay/MathiaAcademy" target="_blank">
            <button className="lato font-bold text-white px-8 py-4 rounded-lg w-fit text-base cursor-pointer" style={{ backgroundColor: "#E8671C" }}>
              Klik hier om je in te schrijven
            </button>
          </Link>
        </div>

        {/* Right: image */}
        <div className="flex-1 relative overflow-hidden" style={{ minHeight: "400px" }}>
          <img src="https://mathia.nl/wp-content/uploads/2025/09/uitbesteden-social-media-1024x1024.png" alt="Mathia Academy" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
