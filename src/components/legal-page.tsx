import type { ReactNode } from "react";
import { legalFootnote, legalLastUpdated } from "../lib/legal";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">{eyebrow}</p>
          <h1 className="mb-6 type-h1 text-paper">{title}</h1>
          <p className="max-w-[62ch] text-pretty type-body text-paper/85">{intro}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-paper/60">{legalLastUpdated}</p>
        </div>
      </section>

      <section className="bg-paper section-y text-oak">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-10 text-[15px] leading-relaxed sm:text-base">{children}</div>

          <p className="mt-14 border-t border-oak/15 pt-6 text-sm leading-relaxed text-oak/70">
            {legalFootnote}
          </p>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="type-h2">{title}</h2>
      <div className="space-y-4 text-oak/85">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-brass-dim">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
