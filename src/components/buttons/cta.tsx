import Link from "next/link";

export default function CTAButton() {
  return (
    <Link href="https://calendly.com/mathiatv/30min" target="_blank">
      <button className="bg-[#FF7F50] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#e06b40] transition-colors w-fit shadow-lg transform hover:-translate-y-1 duration-200 cursor-pointer">
        Plan je gratis kennismaking →
      </button>
    </Link>
  );
}
