"use client";
import { useState, useEffect, useRef } from "react";
import { CheckBadge, GoogleIcon } from "./global/icons";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface Review {
  name: string;
  initials: string;
  color: string;
  time: string;
  text: string;
}

type Direction = 1 | -1;

const reviews: Review[] = [
  {
    name: "Karolien Woonwaarts",
    initials: "K",
    color: "bg-emerald-600",
    time: "2 jaar geleden",
    text: "Mathia heeft ons fantastisch geholpen zichtbaar en vindbaar te zijn op sociale media. Onze online aanwezigheid is enorm gegroeid dankzij haar expertise!",
  },
  {
    name: "Kitty T",
    initials: "K",
    color: "bg-blue-600",
    time: "2 jaar geleden",
    text: "Dankzij een vriendin ben ik bij Mathia terechtgekomen. Haar deskundigheid en professionele aanpak hebben mijn Social Media-problemen opgelost en mijn bereik verdubbeld.",
  },
  {
    name: "Betty van Rosmalen",
    initials: "B",
    color: "bg-purple-700",
    time: "2 jaar geleden",
    text: "Mathia heeft mij fantastisch geholpen met het maken van mijn Website, Instagram en Facebook. Met haar fantastische deskundigheid en een flinke dosis geduld is alles perfect geworden!",
  },
  {
    name: "Sofie Vermeersch",
    initials: "S",
    color: "bg-amber-600",
    time: "1 jaar geleden",
    text: "Ik was sceptisch over social media voor mijn bedrijf, maar Mathia heeft me overtuigd. Ze heeft een duidelijke strategie gemaakt die écht werkt. Mijn omzet is gestegen!",
  },
  {
    name: "Lena De Backer",
    initials: "L",
    color: "bg-cyan-700",
    time: "8 maanden geleden",
    text: "Super professioneel en altijd bereikbaar voor vragen. Mathia begrijpt precies wat mijn merk nodig heeft en vertaalt dat naar mooie, effectieve content.",
  },
  {
    name: "Nora Janssen",
    initials: "N",
    color: "bg-rose-700",
    time: "6 maanden geleden",
    text: "Wat een verademing! Eindelijk iemand die social media echt begrijpt én kan uitleggen. Mijn volgers zijn verdrievoudigd in drie maanden. Absolute aanrader!",
  },
];

const VISIBLE = 3 as const;
const GAP = 20 as const;
const OFFSET = reviews.length;
const extended: Review[] = [...reviews, ...reviews, ...reviews];

interface NavButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    aria-label={direction === "prev" ? "Vorige review" : "Volgende review"}
    className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center border-2 border-white/60 bg-white/30 backdrop-blur-sm text-green-900 hover:bg-white/70 hover:border-white hover:scale-110 transition-all duration-200"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      {direction === "prev" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  </button>
);

interface ReviewCardProps {
  review: Review;
  cardWidthCSS: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, cardWidthCSS }) => (
  <div className="shrink-0 bg-white rounded-2xl p-7 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-200" style={{ width: cardWidthCSS }}>
    {/* Header */}
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 ${review.color}`}>{review.initials}</div>
        <div>
          <p className="dm-sans font-semibold text-sm text-gray-900 leading-tight">{review.name}</p>
          <p className="dm-sans text-xs text-gray-400 mt-0.5">{review.time}</p>
        </div>
      </div>
      <GoogleIcon />
    </div>

    {/* Stars */}
    <div className="flex items-center gap-0.5 mb-3" aria-label="5 sterren beoordeling">
      {Array.from({ length: 5 }).map((_, j) => (
        <StarIcon key={j} />
      ))}
      <span className="ml-1">
        <CheckBadge />
      </span>
    </div>

    {/* Text */}
    <p className="dm-sans text-sm text-gray-600 leading-relaxed">{review.text}</p>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

const ReviewsCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(OFFSET);
  const [animated, setAnimated] = useState<boolean>(true);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (dir: Direction): void => {
    setAnimated(true);
    setIndex((prev) => prev + dir);
  };

  // Silently jump back when we drift into clone territory
  useEffect(() => {
    if (!animated) return;
    const timer = setTimeout(() => {
      if (index >= reviews.length * 2) {
        setAnimated(false);
        setIndex(index - reviews.length);
      } else if (index < reviews.length) {
        setAnimated(false);
        setIndex(index + reviews.length);
      }
    }, 420);
    return () => clearTimeout(timer);
  }, [index, animated]);

  // Re-enable animation after silent jump
  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 30);
      return () => clearTimeout(t);
    }
  }, [animated]);

  const startAuto = (): void => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => go(1), 4000);
  };

  const stopAuto = (): void => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const realIndex: number = (((index - OFFSET) % reviews.length) + reviews.length) % reviews.length;

  const cardWidthCSS = `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`;
  const translateCSS = `calc(-1 * ${index} * (${cardWidthCSS} + ${GAP}px))`;

  return (
    <section className="relative overflow-hidden py-16 px-6" style={{ background: "linear-gradient(160deg,#B8D8BE 0%,#A8CDB4 60%,#C5DFC9 100%)" }} aria-label="Klantbeoordelingen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap');
        .dm-serif { font-family:'DM Serif Display',serif; }
        .dm-sans  { font-family:'DM Sans',sans-serif; }
      `}</style>

      <h2 className="dm-serif text-center text-3xl font-normal mb-10" style={{ color: "#1A4A2E" }}>
        Wat mijn klanten zeggen
      </h2>

      <div className="flex items-center gap-4 max-w-5xl mx-auto" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
        <NavButton direction="prev" onClick={() => go(-1)} />

        <div className="flex-1 overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateCSS})`,
              transition: animated ? "transform 0.42s cubic-bezier(0.4,0,0.2,1)" : "none",
              willChange: "transform",
            }}
          >
            {extended.map((review, i) => (
              <ReviewCard key={i} review={review} cardWidthCSS={cardWidthCSS} />
            ))}
          </div>
        </div>

        <NavButton direction="next" onClick={() => go(1)} />
      </div>

      <div className="flex justify-center items-center gap-2 mt-7" role="tablist" aria-label="Review navigatie">
        {reviews.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === realIndex}
            aria-label={`Ga naar review ${i + 1}`}
            onClick={() => {
              stopAuto();
              setIndex(OFFSET + i);
              startAuto();
            }}
            className={`rounded-full transition-all duration-300 ${i === realIndex ? "w-6 h-2.5 bg-green-800" : "w-2.5 h-2.5 bg-green-800/30 hover:bg-green-800/50"}`}
          />
        ))}
      </div>

      <div className="text-center mt-14 max-w-7xl mx-auto">
        <h3 className="dm-serif text-2xl font-bold mb-4 leading-snug">Wil jij je social media professioneler en consistenter aanpakken?</h3>
        <p className="dm-sans text-base mb-2">Dan is dit het moment om daar serieus werk van te maken.</p>
        <p className="dm-sans text-sm mb-8 leading-relaxed">
          Plan een vrijblijvend kennismakingsgesprek in en dan kijken we samen wat jij nodig hebt, waar het nu vastloopt en hoe ik je daarin kan ondersteunen.
        </p>
        <Link href="https://calendly.com/mathiatv/30min" target="_blank">
          <button
            className="dm-sans font-semibold text-base text-white px-10 py-4 rounded-full hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
            style={{ background: "#E8671C", boxShadow: "0 4px 20px rgba(232,103,28,0.35)" }}
          >
            Plan je gratis kennismaking
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
