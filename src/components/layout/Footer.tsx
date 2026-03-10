import Link from "next/link";
import Image from "next/image";
import { CTALINK, email, socialLinks } from "@/src/lib/const";
import CTAButton from "../buttons/cta";
import { Separator } from "../ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary py-4 px-6 md:px-12">
      <div className="container grid md:grid-cols-4 gap-12">
        {/* Logo Column */}
        <div className="col-span-1 md:col-span-1">
          <Image src="/img/logo.webp" alt="Logo" width={200} height={100} />
        </div>

        {/* Contact Column */}
        <div className="col-span-1">
          <h3 className="text-secondary-foreground font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4 text-secondary-foreground/80">
            <li>
              <CTAButton href={CTALINK} text="Afspraak maken" target="_blank" className="text-sm shrink-0 font-medium whitespace-nowrap" variant="small" />
            </li>
            <li>
              <Link href={email.href} className="hover:text-secondary-foreground" target="_blank">
                {email.label}
              </Link>
            </li>
          </ul>
        </div>

        {/* Aanbod Column */}
        <div className="col-span-1">
          <h3 className="text-secondary-foreground font-bold text-lg mb-6">Aanbod</h3>
          <ul className="space-y-4 text-secondary-foreground">
            <li>
              <Link href="/social-media-beheer" className="hover:text-secondary-foreground/70">
                Social media management
              </Link>
            </li>
            <li>
              <Link href="/strategie-sessies" className="hover:text-secondary-foreground/70">
                Strategie sessies
              </Link>
            </li>
            <li>
              <Link href="/mathia-academy" className="hover:text-secondary-foreground/70">
                Mathia Academy
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials Column */}
        <div className="col-span-1">
          <h3 className="text-secondary-foreground font-bold text-lg mb-6">Socials</h3>
          <ul className="space-y-4 text-secondary-foreground/80">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <Link href={social.href} className="hover:text-secondary-foreground flex flex-row gap-2 items-center" target="_blank">
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="mx-auto max-w-7xl my-10 bg-secondary-foreground/20" />
      <div className="container mt-10 text-center text-secondary-foreground text-sm flex flex-row justify-between">
        <p>Copyright © {currentYear} Mathia.nl</p>
        <p>
          build by{" "}
          <Link href="https://amrio.nl" target="_blank" className="underline hover:text-secondary-foreground">
            Amrio
          </Link>
        </p>
      </div>
    </footer>
  );
}