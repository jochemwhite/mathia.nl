import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/src/lib/utils";

type CTAButtonProps = ComponentProps<typeof Link> & {
  text: string;
  variant?: "normal" | "small";
};

export default function CTAButton({
  text,
  variant,
  ...linkProps
}: CTAButtonProps) {
  return (
    <Link
      {...linkProps}
      className={cn(
        "bg-secondary-accent text-white px-5 py-2 md:px-8 md:py-3 rounded-md font-bold text-sm md:text-lg hover:bg-secondary-accent/80 transition-colors w-fit shadow-lg cursor-pointer",
        variant === "small" && "px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm",
        linkProps.className,
      )}
    >
      {text}
    </Link>
  );
}
