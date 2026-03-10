"use client";
import { CheckIcon } from "lucide-react";
import { ReactNode } from "react";
import { ArrowIcon } from "../global/icons";
import Link from "next/link";
import CTAButton from "../buttons/cta";
import { CTALINK } from "@/src/lib/const";

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
          featured ? "shadow-xl ring-2 ring-secondary-accent/20 border border-secondary-accent/20" : "shadow-lg border border-secondary-accent/10"
        }`}
      >
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-secondary-accent" />

        <div className="flex flex-col flex-1 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-secondary-accent/10 text-secondary-accent">
              {card.icon}
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full tracking-wide bg-secondary-accent/10 text-secondary-accent`}>{card.badge}</span>
          </div>

          <h3 className="sora text-xl font-bold leading-snug mb-2 text-primary">{card.title}</h3>
          <p className="lato text-sm text-primary mb-7 leading-relaxed">{card.subtitle}</p>

          {/* Items */}
          <ul className="flex-1 space-y-3 mb-8">
            {card.items.map((item, i) => (
              <li key={i}>
                <div className="flex items-start gap-2.5 text-secondary-accent">
                  <CheckIcon className="text-secondary-accent" />
                  <span className="lato text-sm text-primary leading-snug">{item.text}</span>
                </div>
                {item.sub && (
                  <ul className="mt-1.5 ml-6 space-y-1">
                    {item.sub.map((s, j) => (
                      <li key={j} className="lato text-xs text-primary flex items-center gap-1.5 before:content-['–'] before:text-gray-300">
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="rounded-2xl p-5 mb-6 bg-secondary-accent/08 border-l-3 border-secondary-accent">
            {card.id === "management" ? (
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-secondary-accent">
                  {card.firstSession}
                </span>
                <span className="lato text-sm text-primary">{card.recurringLabel}</span>
              </div>
            ) : (
              <>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="lato text-xs text-gray-400 uppercase tracking-widest">1e sessie vanaf</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-secondary-accent">
                    {card.firstSession}
                  </span>
                </div>
                <div className="w-12 h-px bg-gray-200 my-3" />
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-semibold text-primary">{card.recurring}</span>
                  <span className="lato text-sm text-gray-400">{card.recurringLabel}</span>
                </div>
                <p className="lato text-xs text-gray-400 mt-1">opvolgende sessies</p>
              </>
            )}
          </div>

          {/* CTA */}
          <CTAButton href={CTALINK} text="Neem contact op" variant="normal" className="w-full" />
        </div>
      </div>
    </div>
  );
}
