import Image from "next/image";
import { socialLinks } from "@/src/lib/const";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <div className="mt-16 rounded-2xl bg-sidebar-accent px-6 py-8 sm:px-10">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md">
          <Image src="/images/mathia-avatar.jpg" alt="Mathia van Soest" width={80} height={80} className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Over Mathia</p>
          <p className="font-serif text-lg font-semibold text-(--primary)">Mathia van Soest</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            Social media fanaat in hart en nieren. Eigenaar van <strong>Mathia.nl</strong> — ze helpt ondernemers aan meer social media resultaat via management, strategie en de Mathia Academy.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((s) => (
              <Link key={s.name} href={s.href} className="rounded-full border border-(--primary) px-3 py-1 text-xs font-semibold text-(--primary) transition hover:bg-(--primary) hover:text-white">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
