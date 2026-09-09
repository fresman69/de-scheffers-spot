import { Wheat } from "lucide-react";
import type { Beer } from "../lib/menu/beers";
import { AmbientMark, type AmbientVariant } from "./ambient";

type Props = {
  beer: Beer;
  /** Compacte variant voor de alcoholvrije lijst. */
  compact?: boolean;
};

/** Kleurtoon per categorie — puur decoratief, afgeleid van de bierstijl. */
function toneFor(beer: Beer): AmbientVariant {
  const c = `${beer.category} ${beer.name}`.toLowerCase();
  if (c.includes("kriek") || c.includes("rood") || c.includes("fruit")) return "wine";
  if (c.includes("dubbel") || c.includes("quadrupel") || c.includes("stout")) return "copper";
  if (c.includes("0.0") || c.includes("alcoholarm") || c.includes("wit")) return "foam";
  if (c.includes("ipa") || c.includes("sour")) return "light";
  if (c.includes("tripel")) return "glass";
  return "amber";
}

/**
 * Bierkaart-item in de stijl van de fysieke kaart: abstracte sfeermarkering links,
 * naam in condensed kapitalen, ABV/IBU in koper, korte omschrijving en een weetje.
 */
export function BeerCard({ beer, compact = false }: Props) {
  const specs = [beer.abv ? `${beer.abv} ABV` : null, beer.ibu ? `${beer.ibu} IBU` : null]
    .filter(Boolean)
    .join(" — ");
  const seed = beer.name.length + beer.category.length;

  if (compact) {
    return (
      <article className="flex items-center gap-4 rounded-sm bg-oak-light/70 px-4 py-3 ring-1 ring-border transition-colors hover:ring-brass/40">
        <AmbientMark variant={toneFor(beer)} seed={seed} className="h-14 w-9 shrink-0" />
        <div className="min-w-0">
          <h3 className="font-display-condensed text-base leading-tight text-paper">{beer.name}</h3>
          <p className="text-[12px] leading-snug text-paper/70">
            <span className="text-brass">{specs || "—"}</span>
            {beer.description ? <span> · {beer.description}</span> : null}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex gap-5 rounded-sm bg-oak-light/70 p-5 ring-1 ring-border transition-all hover:bg-oak-light hover:ring-brass/45">
      <AmbientMark
        variant={toneFor(beer)}
        seed={seed}
        className="h-40 w-28 shrink-0 sm:h-44 sm:w-32"
      />
      <div className="flex min-w-0 flex-col">
        <h3 className="font-display-condensed text-xl leading-[1.05] text-paper sm:text-2xl">
          {beer.name}
        </h3>
        {specs || beer.volume ? (
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brass">
            {[specs, beer.volume].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        {beer.description ? (
          <p className="mt-2 text-sm leading-relaxed text-paper/75">{beer.description}</p>
        ) : null}
        {beer.note ? (
          <p className="mt-auto flex items-start gap-2 pt-3 text-[12px] italic leading-snug text-brass/85">
            <Wheat size={14} strokeWidth={1.5} className="mt-[2px] shrink-0 opacity-80" aria-hidden />
            <span>{beer.note}</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}
