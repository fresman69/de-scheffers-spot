type Props = {
  /** Kleurtint van het ornament (default: brass). */
  tone?: "brass" | "mustard" | "wine";
  className?: string;
};

/**
 * Fijn koperen ornament — twee haarlijnen met een ruit in het midden.
 * Geïnspireerd op klassieke menukaart-decoraties. Alleen sfeer, geen inhoud.
 */
export function Ornament({ tone = "brass", className = "" }: Props) {
  const color =
    tone === "mustard"
      ? "text-mustard"
      : tone === "wine"
      ? "text-wine"
      : "text-brass";
  return (
    <div
      aria-hidden
      className={`mx-auto flex w-full max-w-[220px] items-center gap-3 ${color} ${className}`}
    >
      <span className="h-px flex-1 bg-current opacity-50" />
      <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-80">
        <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-current opacity-50" />
    </div>
  );
}
