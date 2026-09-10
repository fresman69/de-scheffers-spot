import type { Drink } from "../lib/menu/drinks";

export type DrinkTone = "cream" | "wine" | "bordeaux" | "oak";

type Props = {
  id: string;
  /** Handgeschreven aanhef boven de categorie. */
  eyebrow: string;
  title: string;
  intro: string;
  items: Drink[];
  tone?: DrinkTone;
  /** Compacte drie-koloms lijst voor lange categorieën zoals sterk en fris. */
  dense?: boolean;
};

const tones: Record<
  DrinkTone,
  { section: string; eyebrow: string; title: string; body: string; item: string; name: string; desc: string; rule: string; leader: string }
> = {
  cream: {
    section: "bg-cream",
    eyebrow: "text-wine",
    title: "text-ink",
    body: "text-ink/75",
    item: "bg-white/55 ring-ink/10 hover:ring-wine/45",
    name: "text-ink",
    desc: "text-ink/70",
    rule: "bg-wine/30",
    leader: "text-ink/25",
  },
  wine: {
    section: "bg-wine",
    eyebrow: "text-mustard",
    title: "text-cream",
    body: "text-cream/85",
    item: "bg-bordeaux/45 ring-cream/15 hover:ring-mustard/50",
    name: "text-cream",
    desc: "text-cream/75",
    rule: "bg-cream/30",
    leader: "text-cream/25",
  },
  bordeaux: {
    section: "bg-bordeaux",
    eyebrow: "text-mustard",
    title: "text-cream",
    body: "text-cream/85",
    item: "bg-bordeaux-dim ring-cream/12 hover:ring-mustard/45",
    name: "text-cream",
    desc: "text-cream/75",
    rule: "bg-mustard/30",
    leader: "text-cream/25",
  },
  oak: {
    section: "bg-oak",
    eyebrow: "text-brass",
    title: "text-paper",
    body: "text-paper/80",
    item: "bg-oak-light ring-border hover:ring-brass/45",
    name: "text-paper",
    desc: "text-paper/70",
    rule: "bg-brass/30",
    leader: "text-paper/25",
  },
};

/**
 * Eén drankcategorie als eigen kleurvlak: script-aanhef, Mont-kop in kapitalen,
 * korte uitleg in Raleway en de items met stippellijn-leader uit de fysieke kaart.
 */
export function DrinkSection({ id, eyebrow, title, intro, items, tone = "cream", dense = false }: Props) {
  const t = tones[tone];
  if (items.length === 0) return null;

  return (
    <section id={id} className={`${t.section} scroll-mt-24 py-14 md:py-20`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-9 max-w-[62ch]">
          <span className={`mb-2 block font-script text-3xl leading-none ${t.eyebrow}`}>{eyebrow}</span>
          <div className="flex items-center gap-4">
            <h2 className={`type-h2 ${t.title}`}>{title}</h2>
            <span aria-hidden className={`h-px flex-1 ${t.rule}`} />
            <span className={`type-label ${t.eyebrow}`}>{items.length}</span>
          </div>
          <p className={`mt-4 text-pretty text-[0.95rem] leading-relaxed ${t.body}`}>{intro}</p>
        </div>

        <ul
          className={`grid gap-3 ${
            dense ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
          }`}
        >
          {items.map((d) => (
            <li
              key={`${d.category}-${d.name}`}
              className={`rounded-sm px-4 py-3.5 ring-1 transition-all sm:px-5 ${t.item}`}
            >
              <div className="flex items-end gap-2">
                <h3 className={`font-display-condensed text-[0.95rem] leading-tight ${t.name}`}>
                  {d.name}
                </h3>
                <span aria-hidden className={`mb-[5px] h-[6px] flex-1 leader-dots ${t.leader}`} />
                {d.price ? (
                  <span className={`shrink-0 font-display-condensed text-sm ${t.eyebrow}`}>{d.price}</span>
                ) : d.volume ? (
                  <span className={`shrink-0 type-label ${t.eyebrow}`}>{d.volume}</span>
                ) : null}
              </div>
              {d.description ? (
                <p className={`mt-1.5 text-[0.85rem] leading-snug ${t.desc}`}>{d.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
