import type { ReactNode } from "react";
import { Ornament } from "./ornament";
import { Reveal } from "./reveal";

type Align = "left" | "center";
type Tone = "dark" | "light" | "wine";

const toneMap: Record<Tone, { eyebrow: string; title: string; intro: string; ornament: "brass" | "wine" | "mustard" }> = {
  dark: { eyebrow: "text-brass", title: "text-paper", intro: "text-paper/80", ornament: "brass" },
  light: { eyebrow: "text-wine", title: "text-ink", intro: "text-ink/75", ornament: "wine" },
  wine: { eyebrow: "text-mustard", title: "text-cream", intro: "text-cream/85", ornament: "mustard" },
};

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: Align;
  tone?: Tone;
  ornament?: boolean;
  action?: ReactNode;
  className?: string;
};

/**
 * Eén sectiekop voor de hele site: script-eyebrow, condensed titel,
 * optioneel koperen ornament, korte intro en een optionele actie rechts.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  ornament = false,
  action,
  className = "",
}: Props) {
  const t = toneMap[tone];
  const centered = align === "center";

  return (
    <div
      className={`mb-12 flex flex-col gap-5 ${
        centered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      } ${className}`}
    >
      <div className={centered ? "max-w-[52ch]" : "max-w-[46ch]"}>
        {eyebrow ? (
          <Reveal>
            <span className={`mb-2 block font-script type-eyebrow ${t.eyebrow}`}>{eyebrow}</span>
          </Reveal>
        ) : null}
        {ornament ? (
          <Reveal delay={60}>
            <Ornament tone={t.ornament} className={centered ? "mb-5" : "mb-5 !mx-0"} />
          </Reveal>
        ) : null}
        <Reveal delay={100}>
          <h2 className={`text-balance type-h2 ${t.title}`}>{title}</h2>
        </Reveal>
        {intro ? (
          <Reveal delay={160}>
            <p className={`mt-4 text-pretty type-body ${t.intro}`}>{intro}</p>
          </Reveal>
        ) : null}
      </div>
      {action ? <Reveal delay={160}>{action}</Reveal> : null}
    </div>
  );
}
