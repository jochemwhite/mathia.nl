"use client";
import { CheckIcon } from "lucide-react";
import { ReactNode } from "react";
import { ArrowIcon } from "../global/icons";
import Link from "next/link";

interface ServiceItem {
  text: string;
  sub?: string[];
}

interface PricingCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
  firstSession: string;
  recurring: string;
  recurringLabel: string;
  accentColor: string;
  badgeColor: string;
  icon: ReactNode;
}
interface CardProps {
  card: PricingCard;
  delay: number;
  featured?: boolean;
}

export default function PricingCard({ card, delay, featured }: CardProps) {
  return (
    <div className="flex flex-col">
      <div
        className={`relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
          featured ? "shadow-xl ring-2 ring-green-800/20" : "shadow-lg"
        }`}
        style={{ background: "#FFFDF8" }}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ background: card.accentColor }} />

        <div className="flex flex-col flex-1 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: card.accentColor + "15", color: card.accentColor }}>
              {card.icon}
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full tracking-wide ${card.badgeColor}`}>{card.badge}</span>
          </div>

          <h3 className="sora text-xl font-bold leading-snug mb-2" style={{ color: "#1A1A1A" }}>
            {card.title}
          </h3>
          <p className="lato text-sm text-gray-500 mb-7 leading-relaxed">{card.subtitle}</p>

          {/* Items */}
          <ul className="flex-1 space-y-3 mb-8">
            {card.items.map((item, i) => (
              <li key={i}>
                <div className="flex items-start gap-2.5" style={{ color: card.accentColor }}>
                  <CheckIcon />
                  <span className="lato text-sm text-gray-700 leading-snug">{item.text}</span>
                </div>
                {item.sub && (
                  <ul className="mt-1.5 ml-6 space-y-1">
                    {item.sub.map((s, j) => (
                      <li key={j} className="lato text-xs text-gray-500 flex items-center gap-1.5 before:content-['–'] before:text-gray-300">
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="rounded-2xl p-5 mb-6" style={{ background: card.accentColor + "08", borderLeft: `3px solid ${card.accentColor}` }}>
            {card.id === "management" ? (
              <div className="flex items-baseline gap-2">
                <span className="sora text-3xl font-bold" style={{ color: card.accentColor }}>
                  {card.firstSession}
                </span>
                <span className="lato text-sm text-gray-500">{card.recurringLabel}</span>
              </div>
            ) : (
              <>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="lato text-xs text-gray-400 uppercase tracking-widest">1e sessie vanaf</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="sora text-3xl font-bold" style={{ color: card.accentColor }}>
                    {card.firstSession}
                  </span>
                </div>
                <div className="w-12 h-px bg-gray-200 my-3" />
                <div className="flex items-baseline gap-2">
                  <span className="sora text-xl font-semibold text-gray-700">{card.recurring}</span>
                  <span className="lato text-sm text-gray-400">{card.recurringLabel}</span>
                </div>
                <p className="lato text-xs text-gray-400 mt-1">opvolgende sessies</p>
              </>
            )}
          </div>

          {/* CTA */}
          <Link href="https://calendly.com/mathiatv/30min" target="_blank">
            <button
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl lato font-semibold text-sm tracking-wide transition-all duration-200 hover:gap-3 active:scale-95 cursor-pointer"
              style={{
                background: card.accentColor,
                color: "#fff",
                boxShadow: `0 4px 20px ${card.accentColor}40`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.filter = "brightness(1)";
              }}
            >
              Neem contact op
              <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
