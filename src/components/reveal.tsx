import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Delay in ms — cascade child items with e.g. delay={i * 90}. */
  delay?: number;
  /** Optional element wrapper. Default: div. */
  as?: "div" | "section" | "article" | "figure" | "li";
  className?: string;
  /** Slide from bottom (default) or fade only. */
  variant?: "up" | "fade";
};

/**
 * Zachte reveal-on-scroll voor een premium horeca-gevoel.
 * - Alleen transform/opacity: GPU-versneld, respecteert prefers-reduced-motion.
 * - Triggert éénmaal via IntersectionObserver zodra 15% zichtbaar is.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  variant = "up",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: shown ? "none" : variant === "up" ? "translate3d(0, 24px, 0)" : "none",
    opacity: shown ? 1 : 0,
    transition:
      "opacity 900ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1)",
    willChange: "transform, opacity",
  };

  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}
