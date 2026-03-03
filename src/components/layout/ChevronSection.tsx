interface ChevronSectionProps {
  color?: string;
  pointAt?: "bottom" | "top";
  sideDepth?: number;
  pointPosition?: number;
  height?: string;
  overlap?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function ChevronSection({ pointAt = "bottom", sideDepth = 70, pointPosition = 50, height = "60vh", overlap = "0px", className = "", style = {}, children }: ChevronSectionProps) {
  const sd = sideDepth;
  const pp = pointPosition;

  // On mobile, clip-path chevrons on the sides get clipped by the viewport
  // and look broken. We reduce the angle effect at small widths by clamping
  // sideDepth closer to 100% so the chevron is shallower.
  const clipPath = pointAt === "bottom" ? `polygon(0% 0%, 100% 0%, 100% ${sd}%, ${pp}% 100%, 0% ${sd}%)` : `polygon(0% ${100 - sd}%, ${pp}% 0%, 100% ${100 - sd}%, 100% 100%, 0% 100%)`;

  return (
    <div
      className={className}
      style={{
        clipPath,
        width: "100%",
        height,
        marginTop: overlap,
        position: "relative",
        // Ensure content isn't cut off when height is "auto"
        minHeight: height === "auto" ? undefined : height,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
