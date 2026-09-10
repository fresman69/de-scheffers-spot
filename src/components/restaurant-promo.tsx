import { ArrowUpRight, Grape, MapPin } from "lucide-react";
import { aryEnCo } from "../lib/restaurant";
import interieur from "../assets/sfeer/interieur.jpg.asset.json";

/**
 * Compacte advertentiepost voor de zusterzaak Ary & Co.
 * Bewust afwijkend van de rest: crème vlak met donkerrood blok,
 * zodat het opvalt maar herkenbaar Stadscafé blijft.
 */
export function RestaurantPromo() {
  return (
    <div className="card-cozy mx-auto grid max-w-5xl overflow-hidden bg-cream ring-1 ring-ink/10 md:grid-cols-[1.05fr_1fr]">
      <div className="relative min-h-56 overflow-hidden bg-bordeaux md:min-h-full">
        <img
          src={interieur.url}
          alt={`Sfeerbeeld van ${aryEnCo.name} aan het Scheffersplein in Dordrecht`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-90"
        />
        <span className="absolute left-4 top-4 rounded-sm bg-wine px-3 py-1.5 type-label text-cream">
          Onze zusterzaak
        </span>
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-10">
        <p className="font-script text-3xl leading-none text-wine">Ook trek?</p>
        <h3 className="mt-3 type-h3 text-ink">
          {aryEnCo.name}
          <span className="ml-2 align-middle text-[0.62em] tracking-[0.16em] text-wine">
            {aryEnCo.tagline}
          </span>
        </h3>
        <p className="mt-4 text-pretty text-[0.95rem] leading-relaxed text-ink/80">
          {aryEnCo.intro}
        </p>
        <ul className="mt-5 space-y-2">
          {aryEnCo.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm leading-snug text-ink/75">
              <Grape size={15} strokeWidth={1.6} className="mt-[3px] shrink-0 text-wine" aria-hidden />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={aryEnCo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-wine px-6 py-3 type-label text-cream transition-colors hover:bg-bordeaux"
          >
            Ontdek {aryEnCo.name}
            <ArrowUpRight size={15} aria-hidden />
          </a>
          <span className="inline-flex items-center gap-1.5 text-xs text-ink/60">
            <MapPin size={14} aria-hidden /> {aryEnCo.location}
          </span>
        </div>
      </div>
    </div>
  );
}
