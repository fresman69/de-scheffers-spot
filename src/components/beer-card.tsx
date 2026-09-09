import { RotateCcw, Wheat } from "lucide-react";
import { useState } from "react";
import type { Beer } from "../lib/menu/beers";

type Props = {
  beer: Beer;
  /** Compacte variant voor de alcoholvrije lijst. */
  compact?: boolean;
};

/**
 * Bierkaart-item in de stijl van de fysieke kaart:
 * staande productfoto links, naam in condensed kapitalen, ABV/IBU in koper,
 * korte omschrijving en een weetje met korenaar-icoon.
 */
export function BeerCard({ beer, compact = false }: Props) {
  const [flipped, setFlipped] = useState(false);
  const specs = [beer.abv ? `${beer.abv} ABV` : null, beer.ibu ? `${beer.ibu} IBU` : null]
    .filter(Boolean)
    .join(" — ");

  if (compact) {
    return (
      <button
        type="button"
        aria-expanded={flipped}
        onClick={() => setFlipped((value) => !value)}
        className="beer-label-card group w-full p-5 text-left"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <h3 className="font-display-condensed text-lg leading-tight text-paper">{beer.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brass">{specs || beer.category}</p>
          </div>
          <RotateCcw size={16} className={`shrink-0 text-brass transition-transform ${flipped ? "rotate-180" : ""}`} aria-hidden />
        </div>
        {flipped ? (
          <div className="mt-4 border-t border-brass/20 pt-4 text-sm leading-relaxed text-paper/80">
            {beer.description ? <p>{beer.description}</p> : null}
            {beer.note ? <p className="mt-2 italic text-brass/85">{beer.note}</p> : null}
          </div>
        ) : null}
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-expanded={flipped}
      aria-label={`${beer.name}: ${flipped ? "toon voorkant" : "toon bierinformatie"}`}
      onClick={() => setFlipped((value) => !value)}
      className="beer-cap-scene group mx-auto block w-full max-w-[19rem] text-left"
    >
      <span className={`beer-cap ${flipped ? "is-flipped" : ""}`}>
        <span className="beer-cap-face beer-cap-front">
          <span className="beer-cap-ridges" aria-hidden />
          <span className="beer-cap-kicker">{beer.category}</span>
          {beer.photo ? (
            <img src={beer.photo} alt="" loading="lazy" decoding="async" className="beer-cap-image" />
          ) : (
            <span className="beer-cap-mark" aria-hidden>{beer.name.charAt(0)}</span>
          )}
          <span className="beer-cap-title">{beer.name}</span>
          <span className="beer-cap-spec">{[specs, beer.volume].filter(Boolean).join(" · ") || "Draai de dop"}</span>
          <span className="beer-cap-hint">Klik om te draaien ↻</span>
        </span>
        <span className="beer-cap-face beer-cap-back">
          <span className="beer-cap-ridges" aria-hidden />
          <span className="beer-cap-kicker">{[specs, beer.volume].filter(Boolean).join(" · ") || beer.category}</span>
          <span className="beer-cap-title beer-cap-title-back">{beer.name}</span>
          {beer.description ? <span className="beer-cap-description">{beer.description}</span> : null}
          {beer.note ? (
            <span className="beer-cap-note">
              <Wheat size={13} strokeWidth={1.5} aria-hidden />
              <span>{beer.note}</span>
            </span>
          ) : null}
          {beer.price ? <span className="beer-cap-price">{beer.price}</span> : null}
        </span>
      </span>
    </button>
  );
}
