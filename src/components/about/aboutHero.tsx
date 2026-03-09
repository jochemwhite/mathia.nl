import Image from "next/image";
import Link from "next/link";
import CTAButton from "../buttons/cta";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-sidebar-accent px-4 py-20 sm:px-6 lg:px-8">
      {/* Decorative circle */}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary opacity-40" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-start">
        {/* Image */}
        <div className="relative shrink-0">
          <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-72 sm:w-72">
            <Image src="/img/profile.png" alt="Mathia van Soest" fill sizes="288px" className="object-cover" priority />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-3 -right-3 rounded-full bg-secondary-accent px-4 py-2 text-xs font-bold text-white shadow-lg">Social Media Expert</div>
        </div>

        {/* Intro text */}
        <div className="text-center lg:text-left">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-(--primary)">Wie is Mathia?</p>
          <h1 className="text-4xl font-bold leading-tight text-(--primary) sm:text-5xl">Mathia van Soest</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary">
            Social media fanaat in hart en nieren. Eigenaar van{" "}
            <Link href="/" className="font-semibold text-secondary-accent underline underline-offset-2 transition hover:text-(--primary)">
              mathia.nl
            </Link>{" "}
            — met een gezonde obsessie om ondernemers te helpen aan meer social media resultaat.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <CTAButton href="https://calendly.com/mathiatv/30min" text="Afspraak maken" target="_blank" />

            <Link href="/blogs/wie-is-mathia" className="rounded-lg border border-(--primary) px-6 py-3 text-sm font-bold text-(--primary) transition hover:bg-(--primary) hover:text-white">
              Lees mijn verhaal →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
