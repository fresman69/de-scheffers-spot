import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { MenuSearch } from "../components/menu-search";
import { ProductCard } from "../components/product-card";
import { hapas } from "../lib/menu/hapas";

export const Route = createFileRoute("/borrelkaart")({
  head: () => ({
    meta: [
      { title: "Happas — Borrelkaart in Dordrecht | Stadscafé" },
      {
        name: "description",
        content:
          "Onze happas 2025: fuet, kaashapjes, De Bourgondiër bitterballen, olijven, nachos, vegetarische vlammetjes, kaastengels en gehaktballen — bij ieder glas.",
      },
      { property: "og:title", content: "Happas — Stadscafé" },
      { property: "og:url", content: "/borrelkaart" },
    ],
    links: [{ rel: "canonical", href: "/borrelkaart" }],
  }),
  component: Borrelkaart,
});


function Borrelkaart() {
  const [searching, setSearching] = useState(false);
  const onSearchingChange = useCallback((v: boolean) => setSearching(v), []);

  return (
    <>
      <section className="bg-bordeaux section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-mustard">Happas</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-cream">
            Iets lekkers bij je glas
          </h1>
          <p className="max-w-[60ch] text-pretty type-body text-cream/85">
            Fuet, olijven, bitterballen van De Bourgondiër — eerlijk werk om mee te delen.
            Perfect bij een pilsje of een goed glas speciaalbier.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-cream/70">
            Prijzen zie je op de kaart in het café.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-4 pt-10">
        <MenuSearch onSearchingChange={onSearchingChange} />
      </section>

      <section hidden={searching} className="warm-grain bg-cream pb-[clamp(4rem,7vw,7rem)] pt-14">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-center gap-4">
            <h2 className="type-h2 text-ink">Onze happas</h2>
            <span aria-hidden className="h-px flex-1 bg-wine/30" />
            <span className="type-label text-wine">{hapas.length}</span>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 xl:grid-cols-4">
          {hapas.map((h) => (
            <ProductCard key={h.name} product={h} aspect="4 / 3" tone="light" />
          ))}
        </div>
      </section>
    </>
  );
}
