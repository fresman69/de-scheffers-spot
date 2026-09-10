import { useState } from "react";
import { RotateCcw, Thermometer, Utensils, Wheat } from "lucide-react";
import type { Beer } from "../lib/menu/beers";
import { SHOW_PRODUCT_PHOTOS } from "../lib/menu/display";

type Props = { beer: Beer };

/**
 * Klikbare bierkaart met een rustige 3D-flip.
 * Voorzijde: naam, stijl en herkenbare visuele identiteit.
 * Achterzijde: brouwerij, stijl, ABV/IBU, smaak, serveertemperatuur en food pairing.
 * Werkt met muis, touch en toetsenbord (Enter/Spatie).
 */
export function BeerFlipCard({ beer }: Props) {
  const [flipped, setFlipped] = useState(false);
  const specs = [beer.abv ? `${beer.abv} ABV` : null, beer.ibu ? `${beer.ibu} IBU` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="flip-card h-[22rem]">
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`${beer.name} — bekijk ${flipped ? "voorzijde" : "bierinformatie"}`}
        className={`flip-inner rounded-sm text-left ${flipped ? "is-flipped" : ""}`}
      >
        {/* Voorzijde */}
        <span className="flip-face flex flex-col justify-between overflow-hidden rounded-sm bg-oak-light p-6 ring-1 ring-border transition-colors hover:ring-brass/50">
          <span className="flex items-start justify-between gap-3">
            <span className="type-label text-brass/80">{beer.category}</span>
            {specs ? <span className="type-label text-mustard">{beer.abv}</span> : null}
          </span>

          {SHOW_PRODUCT_PHOTOS && beer.photo ? (
            <img
              src={beer.photo}
              alt={beer.name}
              loading="lazy"
              decoding="async"
              className="mx-auto h-32 w-auto object-contain"
            />
          ) : (
            <span aria-hidden className="beer-cap mx-auto" />
          )}

          <span className="block">
            <span className="block font-display-condensed text-xl leading-[1.05] text-paper sm:text-2xl">
              {beer.name}
            </span>
            {beer.brewery || beer.style ? (
              <span className="mt-1 block text-[12px] uppercase tracking-[0.18em] text-paper/60">
                {[beer.brewery, beer.style].filter(Boolean).join(" · ")}
              </span>
            ) : null}
            <span className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brass/80">
              <RotateCcw size={13} strokeWidth={1.6} aria-hidden />
              Tik voor info
            </span>
          </span>
        </span>

        {/* Achterzijde */}
        <span className="flip-face flip-back flex flex-col gap-3 overflow-y-auto rounded-sm bg-bordeaux p-6 ring-1 ring-cream/15">
          <span className="block font-display-condensed text-lg leading-tight text-cream">
            {beer.name}
          </span>
          <span className="block h-px w-10 bg-mustard/70" aria-hidden />

          <Row label="Brouwerij" value={beer.brewery} />
          <Row label="Stijl" value={beer.style ?? beer.category} />
          <Row label="Alcohol" value={[specs, beer.volume].filter(Boolean).join(" · ")} />

          {beer.description ? (
            <span className="block text-sm leading-relaxed text-cream/85">{beer.description}</span>
          ) : null}

          <span className="mt-auto space-y-2 pt-2">
            <IconRow icon={<Thermometer size={13} aria-hidden />} value={beer.serveTemp ?? "Serveertemperatuur volgt"} />
            <IconRow icon={<Utensils size={13} aria-hidden />} value={beer.pairing ?? "Food pairing volgt"} />
            {beer.note ? (
              <IconRow icon={<Wheat size={13} aria-hidden />} value={beer.note} italic />
            ) : null}
            {beer.price ? (
              <span className="block pt-1 font-display-condensed text-base text-mustard">{beer.price}</span>
            ) : (
              <span className="block pt-1 text-[11px] uppercase tracking-[0.2em] text-cream/55">
                Prijs op de kaart in het café
              </span>
            )}
          </span>
        </span>
      </button>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <span className="flex items-end gap-2 text-[12px]">
      <span className="uppercase tracking-[0.18em] text-cream/60">{label}</span>
      <span aria-hidden className="mb-[3px] h-[6px] flex-1 leader-dots text-cream/30" />
      <span className="shrink-0 text-right text-cream/90">{value || "—"}</span>
    </span>
  );
}

function IconRow({
  icon,
  value,
  italic = false,
}: {
  icon: React.ReactNode;
  value: string;
  italic?: boolean;
}) {
  return (
    <span className={`flex items-start gap-2 text-[12px] leading-snug text-cream/75 ${italic ? "italic" : ""}`}>
      <span className="mt-[2px] shrink-0 text-mustard">{icon}</span>
      <span>{value}</span>
    </span>
  );
}
