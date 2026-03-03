import Link from "next/link";

export default function CTAButton() {
  return (
    <Link href="https://calendly.com/mathiatv/30min" target="_blank">
      <button className="bg-secondary-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-secondary-accent/80 transition-colors w-fit shadow-lg cursor-pointer">
        Plan je gratis kennismaking →
      </button>
    </Link>
  );
}
