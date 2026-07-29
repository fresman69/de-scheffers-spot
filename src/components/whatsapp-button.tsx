import { MessageCircle } from "lucide-react";

const PHONE = "31786134242";
const DEFAULT_MSG =
  "Hallo StadsCafe! Ik wil graag een tafel reserveren. Datum: ? — Tijd: ? — Aantal personen: ?";

type Props = {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "ghost";
  label?: string;
};

export function whatsappHref(message = DEFAULT_MSG) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * WhatsApp-CTA in de merkstijl van StadsCafe.
 * - Gebruik `variant="solid"` als primaire reserveerknop.
 * - Micro-interactie: subtiele lift + iconrotatie bij hover.
 */
export function WhatsAppButton({
  message,
  className = "",
  size = "md",
  variant = "solid",
  label = "Reserveer via WhatsApp",
}: Props) {
  const sizes = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  } as const;
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const styles =
    variant === "solid"
      ? "bg-[#25D366] text-oak shadow-[0_10px_30px_-12px_rgba(37,211,102,0.6)] hover:bg-[#20bd5a]"
      : "text-paper ring-1 ring-paper/30 hover:ring-brass hover:text-brass";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${styles} ${className}`}
    >
      <MessageCircle
        size={16}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:rotate-[-8deg]"
      />
      <span>{label}</span>
    </a>
  );
}

/**
 * Zwevende WhatsApp-bel rechtsonder — altijd bereikbaar op elk device.
 */
export function WhatsAppFloating() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reserveer via WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-oak shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] ring-4 ring-[#25D366]/20 transition-all duration-300 hover:scale-105 hover:ring-[#25D366]/40 md:h-16 md:w-16"
    >
      <MessageCircle size={26} strokeWidth={2.2} />
    </a>
  );
}
