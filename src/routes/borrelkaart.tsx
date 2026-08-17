import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "../components/product-card";
import { hapas } from "../lib/menu/hapas";

export const Route = createFileRoute("/borrelkaart")({
  head: () => ({
    meta: [
      { title: "Hapas — Borrelkaart in Dordrecht | Stadscafé" },
      {
        name: "description",
        content:
          "Onze hapas 2025: fuet, kaashapjes, De Bourgondiër bitterballen, olijven, nachos, vegetarische vlammetjes, kaastengels en gehaktballen — bij ieder glas.",
      },
      { property: "og:title", content: "Hapas — Stadscafé" },
      { property: "og:url", content: "/borrelkaart" },
    ],
    links: [{ rel: "canonical", href: "/borrelkaart" }],
  }),
  component: Borrelkaart,
});


function Borrelkaart() {
  return (
    <>
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script text-5xl leading-none text-mustard md:text-6xl">Happas</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-paper">
            Iets lekkers bij je glas
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-paper/85">
            Fuet, olijven, bitterballen van De Bourgondiër — eerlijk werk om mee te delen.
            Perfect bij een pilsje of een goed glas speciaalbier.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-paper/75">
            Prijzen zie je op de kaart in het café. Foto's per hap volgen zodra we ze hebben.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-24 pt-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
          {hapas.map((h) => (
            <ProductCard key={h.name} product={h} aspect="4 / 3" tone="dark" />
          ))}
        </div>
      </section>
    </>
  );
}
