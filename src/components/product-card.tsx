import { AmbientPanel } from "./ambient";

export type Product = {
  name: string;
  description?: string;
  volume?: string;
  abv?: string;
  /** Prijs wordt bewust weggelaten totdat de eigenaar deze weer wil tonen.
   *  Laat dit veld leeg — layout blijft identiek zodra het later terugkomt. */
  price?: string;
};

type Props = {
  product: Product;
  /** Aspect-ratio voor het sfeervlak. Standaard 4/3 voor een rustige look. */
  aspect?: string;
  tone?: "dark" | "light";
};

/**
 * Uniforme productkaart voor alle menukaarten.
 * Het beeldvlak is een abstract, in code gemaakt sfeerpaneel — geen foto's.
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
  const seed = product.name.length + 1;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-sm ring-1 transition-all hover:ring-wine/60 ${surface}`}
    >
      <div
        className={`relative w-full overflow-hidden border-b ${isDark ? "border-oak/80" : "border-oak/10"}`}
        style={{ aspectRatio: aspect }}
      >
        <AmbientPanel
          variant={seed % 3 === 0 ? "copper" : seed % 3 === 1 ? "amber" : "glass"}
          seed={seed}
          bubbleCount={7}
          className="rounded-none"
        />
      </div>
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
