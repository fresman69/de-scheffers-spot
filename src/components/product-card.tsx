import { ImageIcon } from "lucide-react";
import { SHOW_PRODUCT_PHOTOS } from "../lib/menu/display";

export type Product = {
  name: string;
  description?: string;
  volume?: string;
  abv?: string;
  /** Prijs wordt bewust weggelaten totdat de eigenaar deze weer wil tonen.
   *  Laat dit veld leeg — layout blijft identiek zodra het later terugkomt. */
  price?: string;
  /** Absolute of asset-URL van een echte productfoto. Zonder foto → nette placeholder. */
  photo?: string;
};

type Props = {
  product: Product;
  /** Tailwind aspect-ratio voor het foto-vlak. Standaard 4/3 voor luxe, rustige look. */
  aspect?: string;
  tone?: "dark" | "light";
};

/**
 * Uniforme productkaart voor alle menukaarten.
 * Layout: Foto · Naam · Omschrijving · (optioneel Inhoud/ABV) · (optioneel Prijs).
 * Prijzen zijn tijdelijk verborgen; het prijs-slot blijft in de layout zodat
 * ze later één-op-één teruggeplaatst kunnen worden zonder herontwerp.
 */
export function ProductCard({ product, aspect = "4 / 3", tone = "dark" }: Props) {
  const isDark = tone === "dark";
  const surface = isDark ? "bg-oak-light ring-border" : "bg-paper ring-oak/10";
  const title = isDark ? "text-paper" : "text-oak";
  const sub = isDark ? "text-paper/60" : "text-oak/60";
  const meta = isDark ? "text-paper/85" : "text-oak/80";
  const priceCol = isDark ? "text-brass" : "text-wine";
  const leaderCol = isDark ? "text-paper/25" : "text-oak/30";

  const hasMeta = Boolean(product.volume || product.abv);
  const rightMeta = product.abv ?? product.volume ?? "";

  return (
    <article
      className={`paper-label group flex flex-col overflow-hidden ring-1 transition-all hover:-rotate-[0.35deg] hover:ring-wine/60 ${surface}`}
    >
      {SHOW_PRODUCT_PHOTOS ? (
        <div
          className={`relative w-full overflow-hidden border-b ${isDark ? "bg-oak/60 border-oak/80" : "bg-oak/[0.04] border-oak/10"}`}
          style={{ aspectRatio: aspect }}
        >
          {product.photo ? (
            <img
              src={product.photo}
              alt={product.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div
              role="img"
              aria-label={`Foto van ${product.name} — nog toe te voegen`}
              data-photo-placeholder="true"
              data-product-name={product.name}
              className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center"
            >
              <ImageIcon size={22} strokeWidth={1.25} className="text-brass/60" />
              <span className={`text-[10px] font-medium uppercase tracking-[0.25em] ${sub}`}>
                Foto volgt
              </span>
            </div>
          )}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        {/* Naam + prijs/ABV met stippellijn-leader — direct herkenbaar uit de kaart. */}
        <div className="mb-2 flex items-end gap-2">
          <h3 className={`font-display-condensed text-lg leading-tight tracking-wider ${title}`}>
            {product.name}
          </h3>
          <span aria-hidden className={`mb-[3px] h-[6px] flex-1 leader-dots ${leaderCol}`} />
          {product.price ? (
            <span className={`font-display-condensed shrink-0 text-base ${priceCol}`}>{product.price}</span>
          ) : rightMeta ? (
            <span className={`shrink-0 text-[11px] uppercase tracking-widest ${priceCol}`}>{rightMeta}</span>
          ) : null}
        </div>
        {product.description ? (
          <p className={`text-sm italic ${meta}`}>{product.description}</p>
        ) : null}
        {hasMeta && product.volume && rightMeta !== product.volume ? (
          <p className={`mt-3 text-[11px] uppercase tracking-widest ${sub}`}>{product.volume}</p>
        ) : null}
      </div>
    </article>
  );
}
