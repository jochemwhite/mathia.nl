import { Check } from "lucide-react";

const learnings = [
  {
    text: "welke onderdelen van jouw social media strategie je kunt aanpassen om <strong>moeitelozer de juiste volgers</strong> aan te trekken",
  },
  {
    text: "hoe je content en profiel samen laat werken, zodat mensen niet alleen kijken, maar ook <strong>blijven hangen</strong>",
  },
  {
    text: "hoe je van je social media een leadmagnet maakt (zonder harder te werken)",
  },
];

export default function EbookLearnSection() {
  return (
    <section className="relative overflow-hidden  px-4 py-20 sm:px-8 bg-secondary">
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-4xl font-bold text-(--primary) sm:text-5xl">Wat je leert in dit e-book</h2>
        <p className="mt-5 text-base leading-relaxed text-primary">
          In dit e-book deel ik mijn <span className="font-bold"> &nbsp;3 eenvoudige stappen</span> naar meer volgers. En het mooie: je kunt die volgers ook omzetten naar <span className="font-bold">klanten</span>. Je ontdekt:
        </p>

        <ul className="mt-10 space-y-6 text-left">
          {learnings.map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary-accent text-white">
                <Check size={14} strokeWidth={3} />
              </span>
              <p className="text-base leading-relaxed text-secondary-foreground [&_strong]:font-bold [&_strong]:text-(--primary)" dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
