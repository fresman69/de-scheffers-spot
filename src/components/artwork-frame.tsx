import { Frame } from "lucide-react";

export type Artwork = {
  /** Korte omschrijving van wat er te zien is — géén verzonnen titels of kunstenaars. */
  caption: string;
  /** Foto van het werk zoals het in het café hangt. Ontbreekt die, dan tonen we een placeholder. */
  photo?: string;
  /** Staand, liggend of vierkant kader. */
  ratio?: "3 / 4" | "4 / 3" | "1 / 1";
};

type Props = { artwork: Artwork; className?: string };

/**
 * Kunstwerk aan de caféwand: donkere houten lijst, passe-partout in crème
 * en een warme slagschaduw. Zonder foto verschijnt een nette placeholder —
 * we verzinnen nooit bestaande werken, titels of kunstenaars.
 */
export function ArtworkFrame({ artwork, className = "" }: Props) {
  const ratio = artwork.ratio ?? "3 / 4";

  return (
    <figure className={`art-frame group ${className}`}>
      <div className="art-frame-mat">
        <div className="relative w-full overflow-hidden bg-oak/70" style={{ aspectRatio: ratio }}>
          {artwork.photo ? (
            <img
              src={artwork.photo}
              alt={artwork.caption}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <PlaceholderArtwork label={artwork.caption} />
          )}
        </div>
      </div>
      <figcaption className="mt-3 px-1 text-[11px] uppercase tracking-[0.22em] text-paper/65">
        {artwork.caption}
      </figcaption>
    </figure>
  );
}

/** Stijlvolle plek voor een schilderij waarvan de foto nog moet komen. */
export function PlaceholderArtwork({ label }: { label?: string }) {
  return (
    <div
      role="img"
      aria-label={label ? `${label} — foto van het schilderij volgt nog` : "Kunstwerk — foto volgt"}
      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-oak-light px-5 text-center"
    >
      <Frame size={26} strokeWidth={1.1} className="text-brass/70" aria-hidden />
      <span className="type-label text-brass/80">Kunstwerk — foto volgt</span>
      <span className="max-w-[26ch] text-[11px] leading-relaxed text-paper/55">
        Plaats hier de foto van het schilderij zoals het in het café hangt.
      </span>
    </div>
  );
}
