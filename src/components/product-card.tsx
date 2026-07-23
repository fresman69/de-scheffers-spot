import { ImageIcon } from "lucide-react";

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
  const surface = isDark ? "bg-oak-light ring-border" : "bg-white ring-oak/10";
  const title = isDark ? "text-paper" : "text-oak";
  const sub = isDark ? "text-muted-foreground" : "text-oak/75";
  const meta = isDark ? "text-paper/85" : "text-oak/80";
  const price = isDark ? "text-brass" : "text-brass-dim";

  const hasMeta = Boolean(product.volume || product.abv);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-sm ring-1 transition-all hover:ring-brass/40 ${surface}`}
    >
      <div
        className={`relative w-full overflow-hidden ${isDark ? "bg-oak/60" : "bg-oak/[0.04]"}`}
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
            <span className={`max-w-[24ch] text-[10px] leading-relaxed ${sub} opacity-70`}>
              Eigen productfoto — later te uploaden zonder layoutwijziging.
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-start justify-between gap-4">
          <h3 className={`font-display text-xl leading-tight ${title}`}>{product.name}</h3>
          {product.price ? (
            <span className={`shrink-0 font-medium ${price}`}>{product.price}</span>
          ) : null}
        </div>
        {product.description ? (
          <p className={`mb-4 text-sm ${meta}`}>{product.description}</p>
        ) : null}
        {hasMeta ? (
          <div
            className={`mt-auto flex justify-between border-t pt-3 text-[11px] uppercase tracking-widest ${sub} ${
              isDark ? "border-border" : "border-oak/10"
            }`}
          >
            <span>{product.volume ?? "—"}</span>
            {product.abv ? <span className="text-brass">{product.abv}</span> : <span />}
          </div>
        ) : null}
      </div>
    </article>
  );
}
