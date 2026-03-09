import { NumberTicker } from "../ui/number-ticker";

const stats = [
  { value: 10, label: "Jaar social media ervaring" },
  { value: 50, label: "Ondernemers geholpen" },
  { value: 3, label: "Diensten & trajecten" },
  { value: "∞", label: "Passie voor social media" },
];

export default function StatsSection() {
  return (
    <section className="bg-(--primary) px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-white sm:text-5xl">
                {typeof stat.value === "number" ? <NumberTicker value={stat.value} className="font-serif text-4xl font-bold text-white sm:text-5xl" /> : stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
