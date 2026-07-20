import { createFileRoute } from "@tanstack/react-router";
import { ProductCard, type Product } from "../components/product-card";

export const Route = createFileRoute("/borrelkaart")({
  head: () => ({
    meta: [
      { title: "Borrelkaart — Happas in Dordrecht | Rijke & Zn." },
      {
        name: "description",
        content:
          "Onze happas: fuet, tosti, olijven, plankje kaas, nacho's, gehaktballen, chorizo en ossenworst — ambachtelijk in Dordrecht.",
      },
      { property: "og:title", content: "Borrelkaart — Rijke & Zn." },
      { property: "og:url", content: "/borrelkaart" },
    ],
    links: [{ rel: "canonical", href: "/borrelkaart" }],
  }),
  component: Borrelkaart,
});

const happas: Product[] = [
  { name: "Fuet", description: "Gedroogde Spaanse worst", price: "€ 6,00" },
  { name: "Tosti", description: "Kaas · ham-kaas · heet sneetje", price: "€ 4,00" },
  { name: "Olijven", description: "Gemarineerd met geitenkaas", price: "€ 4,00" },
  { name: "Plankje kaas", description: "Vers van de markt — vijf heren extra belegen", price: "€ 5,50" },
  { name: "Nacho's + dip", description: "Tortilla chips met dip", price: "€ 4,50" },
  { name: "Gehaktballen", description: "6 stuks, met mosterd", price: "€ 4,50" },
  { name: "Chorizo", description: "Opgebakken Spaanse worst", price: "€ 4,50" },
  { name: "Ossenworst", description: "Nederlandse snack", price: "€ 5,00" },
];

function Borrelkaart() {
  return (
    <>
      <section className="bg-oak py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Borrelkaart</p>
          <h1 className="mb-6 max-w-[22ch] font-display text-5xl text-paper md:text-6xl">
            Ambachtelijke happas bij ieder glas.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Van fuet en olijven tot een dampend plankje kaas — met liefde bereid en
            gemaakt om te delen. Onze bediening tipt graag het juiste bier of de
            juiste wijn erbij.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-paper/50">
            Foto's van de happas worden per gerecht toegevoegd. Waar een echte foto
            nog ontbreekt, tonen we een neutrale, vervangbare placeholder.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-24 pt-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {happas.map((h) => (
            <ProductCard key={h.name} product={h} aspect="4 / 3" tone="dark" />
          ))}
        </div>
      </section>
    </>
  );
}
