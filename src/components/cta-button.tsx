import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "quiet";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-7 py-3.5 type-label transition-all duration-300 hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-wine text-paper hover:bg-wine-dim",
  outline: "text-paper ring-1 ring-paper/40 hover:text-brass hover:ring-brass",
  quiet: "text-ink ring-1 ring-ink/20 hover:text-wine hover:ring-wine/60",
};

type Props = {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

/** Eén CTA-stijl voor de hele site — intern via Link, extern via href. */
export function CtaButton({ to, href, variant = "primary", children, className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} className={cls}>
      {children}
    </Link>
  );
}

/** Tekstlink met koperen onderlijn — de rustige variant van de CTA. */
export function TextLink({ to, href, children }: Props) {
  const cls =
    "inline-block border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Link to={to as any} className={cls}>{children}</Link>;
}
