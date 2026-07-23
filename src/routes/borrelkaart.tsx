import { createFileRoute } from "@tanstack/react-router";
import { ProductCard, type Product } from "../components/product-card";

export const Route = createFileRoute("/borrelkaart")({
  head: () => ({
    meta: [
      { title: "Hapas — Borrelkaart in Dordrecht | Rijke & Zn." },
      {
        name: "description",
        content:
          "Onze hapas 2025: fuet, kaashapjes, De Bourgondiër bitterballen, olijven, nachos, vegetarische vlammetjes, kaastengels en gehaktballen — bij ieder glas.",
      },
      { property: "og:title", content: "Hapas — Rijke & Zn." },
      { property: "og:url", content: "/borrelkaart" },
    ],
    links: [{ rel: "canonical", href: "/borrelkaart" }],
  }),
  component: Borrelkaart,
});

const hapas: Product[] = [
  { name: "Fuet", description: "Gedroogde Spaanse worst" },
  { name: "Kaas hapjes", description: "Blokjes kaas, met mosterd" },
  { name: "De Bourgondiër — Bitterballen 8 st." },
  { name: "Bittergarnituur 16 st." },
  { name: "Olijven", description: "Gemarineerd met feta" },
  { name: "Nachos — Dip — Gesmolten kaas", description: "Met tortillachips" },
  { name: "Vegetarische vlammetjes", description: "Met chilisaus" },
  { name: "Kaastengels", description: "Met chilisaus" },
  { name: "Gehaktballen", description: "Met mosterd" },
];

function Borrelkaart() {
  return (
    <>
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Hapas</p>
          <h1 className="mb-6 max-w-[22ch] font-display text-4xl sm:text-5xl text-paper md:text-6xl">
            Ambachtelijke hapas bij ieder glas.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Van fuet en olijven tot bitterballen van De Bourgondiër — met liefde
            klaargemaakt en gemaakt om te delen. Onze bediening tipt graag het
            juiste bier of de juiste wijn erbij.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-paper/75">
            Prijzen worden voorlopig niet online getoond. Foto's van de hapas
            volgen per gerecht.
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
