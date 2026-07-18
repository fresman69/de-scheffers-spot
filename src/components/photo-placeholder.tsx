import { ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";

type Props = {
  label?: string;
  aspect?: string;
  className?: string;
  style?: CSSProperties;
  tone?: "dark" | "light";
};

/**
 * Placeholder shown wherever a real photo of Stadscafé Rijke & Zn.
 * still has to be uploaded by the owner. We do NOT show AI or stock
 * imagery — authenticity boven opgevuld ontwerp.
 */
export function PhotoPlaceholder({
  label = "Foto wordt later toegevoegd",
  aspect,
  className = "",
  style,
  tone = "dark",
}: Props) {
  const toneClasses =
    tone === "dark"
      ? "bg-oak-light text-muted-foreground ring-border"
      : "bg-oak/[0.04] text-oak/50 ring-oak/10";

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-sm p-6 text-center ring-1 ${toneClasses} ${className}`}
      style={{ aspectRatio: aspect, ...style }}
    >
      <ImageIcon size={22} strokeWidth={1.25} className="text-brass/60" />
      <span className="text-[10px] font-medium uppercase tracking-[0.25em]">{label}</span>
      <span className="max-w-[28ch] text-[11px] leading-relaxed opacity-70">
        Eigen foto van Stadscafé Rijke &amp; Zn. — nog te uploaden door de eigenaar.
      </span>
    </div>
  );
}
