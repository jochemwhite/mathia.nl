import Link from "next/link";

const facts = [
  { emoji: "👶", text: "Geboren in 1992" },
  { emoji: "💍", text: "Getrouwd met Nicky van KR8 Personal Training" },
  { emoji: "👧", text: "Moeder van Olivia (2022) en Lilly (2025)" },
  { emoji: "🏡", text: "Woon in Wamel met @doloresdepoes en 4 kippen" },
  { emoji: "🎓", text: "Master Plant Biotechnology, Wageningen 2016" },
  { emoji: "🎮", text: "Begon in 2014 met live-streamen op Twitch" },
  { emoji: "💼", text: "In 2016 van hobby naar full-time baan" },
  { emoji: "🚀", text: "Sinds 2022 helpt ze andere bedrijven met social media" },
];

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Over mij</p>
      <h2 className="mb-6 text-3xl font-bold text-primary">Laat ik mijzelf even voorstellen</h2>
      <div className="space-y-4 text-base leading-relaxed text-primary">
        <p>
          Het is mijn gezonde obsessie om ondernemers te helpen aan meer social media resultaat. Dit doe ik door middel van het aanbieden van social media management van A tot Z, maar ook via mijn
          online leeromgeving{" "}
          <Link href="/mathia-academy" className="text-secondary-accent">
            "Mathia Academy"
          </Link>
          . Hiermee kun je zonder technische kennis de meest effectieve social media strategie toepassen voor jouw bedrijf.
        </p>
      </div>

      {/* Facts grid */}
      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {facts.map((fact) => (
          <li key={fact.text} className="flex items-center gap-3 rounded-xl border border-(--border) bg-muted px-4 py-2">
            <span className="text-xl">{fact.emoji}</span>
            <span className="text-sm leading-snug text-primary">{fact.text}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-base leading-relaxed text-primary">
        Hieruit krijg je al een klein beetje het idee waar mijn passie voor social media is ontstaan. Ik vertel graag uitgebreid mijn weg als ondernemer in mijn blog:{" "}
        <Link href="/blogs/wie-is-mathia" className="font-semibold text-accent underline underline-offset-2 transition hover:text-primary">
          Wie is Mathia?
        </Link>
      </p>
    </section>
  );
}
