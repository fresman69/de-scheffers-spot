import { ImageIcon, Wheat } from "lucide-react";
import type { Beer } from "../lib/menu/beers";
import { SHOW_PRODUCT_PHOTOS } from "../lib/menu/display";

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
  const specs = [beer.abv ? `${beer.abv} ABV` : null, beer.ibu ? `${beer.ibu} IBU` : null]
    .filter(Boolean)
    .join(" — ");

  if (compact) {
    return (
      <article className="flex items-center gap-4 rounded-sm bg-oak-light/70 px-4 py-3 ring-1 ring-border transition-colors hover:ring-brass/40">
        <PhotoSlot beer={beer} className="h-14 w-9 shrink-0" iconSize={14} minimal />
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
      <PhotoSlot beer={beer} className="h-40 w-28 shrink-0 sm:h-44 sm:w-32" iconSize={18} />
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

function PhotoSlot({
  beer,
  className = "",
  iconSize = 18,
  minimal = false,
}: {
  beer: Beer;
  className?: string;
  iconSize?: number;
  minimal?: boolean;
}) {
  if (!SHOW_PRODUCT_PHOTOS) return null;
  if (beer.photo) {
    return (
      <img
        src={beer.photo}
        alt={beer.name}
        loading="lazy"
        decoding="async"
        className={`rounded-sm object-contain object-center transition-transform duration-700 group-hover:scale-[1.04] ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Foto van ${beer.name} — nog toe te voegen`}
      data-photo-placeholder="true"
      data-product-name={beer.name}
      className={`flex flex-col items-center justify-center gap-1 rounded-sm bg-oak/70 ring-1 ring-border ${className}`}
    >
      <ImageIcon size={iconSize} strokeWidth={1.25} className="text-brass/55" aria-hidden />
      {!minimal ? (
        <span className="px-1 text-center text-[9px] uppercase tracking-[0.2em] text-paper/45">
          Foto volgt
        </span>
      ) : null}
    </div>
  );
}
