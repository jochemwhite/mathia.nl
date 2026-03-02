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

export default function ChevronSection({
  // color = "#7a2145",
  pointAt = "bottom",
  sideDepth = 70,
  pointPosition = 50,
  height = "60vh",
  overlap = "0px",
  className = "",
  style = {},
  children,
}: ChevronSectionProps) {
  const sd = sideDepth; // e.g. 70  → sides reach 70% down before angling
  const pp = pointPosition; // e.g. 50  → point is centred

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
        ...style,
      }}
    >
      {children}
    </div>
  );
}
