export type GalleryItem = {
  caption: string;
  src?: string;
  /** Vaste hoogteverhouding zodat het raster rustig blijft. */
  ratio?: string;
};

type Props = { items: GalleryItem[]; className?: string };

/**
 * Masonry-galerij voor sfeerfotografie. Op mobiel één kolom met
 * comfortabele beeldhoogtes, daarboven twee tot drie kolommen.
 */
export function GalleryMasonry({ items, className = "" }: Props) {
  return (
    <div className={`columns-1 gap-4 sm:columns-2 lg:columns-3 ${className}`}>
      {items.map((item) => (
        <figure
          key={item.caption}
          className="zoom-image group mb-4 break-inside-avoid overflow-hidden rounded-sm ring-1 ring-border"
        >
          {item.src ? (
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={item.ratio ? { aspectRatio: item.ratio } : undefined}
            />
          ) : (
            <div
              role="img"
              aria-label={`${item.caption} — foto volgt`}
              className="flex w-full items-center justify-center bg-oak-light"
              style={{ aspectRatio: item.ratio ?? "4 / 3" }}
            >
              <span className="type-label text-brass/70">Foto volgt</span>
            </div>
          )}
          <figcaption className="bg-oak-light px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-paper/70">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
