import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, type Product } from "../components/product-card";

export const Route = createFileRoute("/bierkaart")({
  head: () => ({
    meta: [
      { title: "Bierkaart — Speciaalbier in Dordrecht | Rijke & Zn." },
      {
        name: "description",
        content:
          "Onze volledige bierkaart: van de tap, blond, dubbel, tripel, quad, amber, wit/weizen, stout, saison, cider, sour, ale, laag alcohol en glutenvrij.",
      },
      { property: "og:title", content: "Bierkaart — Rijke & Zn." },
      { property: "og:url", content: "/bierkaart" },
    ],
    links: [{ rel: "canonical", href: "/bierkaart" }],
  }),
  component: Bierkaart,
});

type Beer = Product & { category: string };

const beers: Beer[] = [
  // Van de Tap
  { category: "Van de Tap", name: "Heineken Fluit", description: "Pilsener", volume: "18 cl", abv: "5%", price: "€ 2,30" },
  { category: "Van de Tap", name: "Heineken Vaas", description: "Pilsener", volume: "25 cl", abv: "5%", price: "€ 2,80" },
  { category: "Van de Tap", name: "Gele Ary", description: "Huisbier Rijke & Zn", volume: "25 cl", abv: "5%", price: "€ 3,20" },

  // Blond
  { category: "Blond", name: "Affligem Blond", description: "Smooth, fruity", volume: "33 cl", abv: "6.8%", price: "€ 4,20" },
  { category: "Blond", name: "Maallust — De Weldoener", description: "Sweet, hoppy", volume: "33 cl", abv: "6.5%", price: "€ 4,80" },
  { category: "Blond", name: "'t IJ — Flink", description: "Light, citrus", volume: "33 cl", abv: "4.7%", price: "€ 4,20" },

  // Dubbel
  { category: "Dubbel", name: "Westmalle Trappist Dubbel", description: "Sweet, malty", volume: "33 cl", abv: "7%", price: "€ 4,40" },
  { category: "Dubbel", name: "Corsendonk Pater Dubbel", description: "Sweet, dark", volume: "33 cl", abv: "6.5%", price: "€ 4,80" },

  // Tripel
  { category: "Tripel", name: "Westmalle Trappist Tripel", description: "Strong, sweet", volume: "33 cl", abv: "9.5%", price: "€ 4,80" },
  { category: "Tripel", name: "Tripel Karmeliet", description: "Sweet, smooth", volume: "33 cl", abv: "8.4%", price: "€ 4,80" },
  { category: "Tripel", name: "White Dog — Tripel", description: "Herbal, floral", volume: "33 cl", abv: "7.5%", price: "€ 4,90" },
  { category: "Tripel", name: "Van Moll — Triple Trouble", description: "Subtle, body", volume: "33 cl", abv: "8.5%", price: "€ 4,80" },

  // Quad / Barleywine
  { category: "Quad / Barleywine", name: "Trappistes Rochefort 10", description: "Strong, dark", volume: "33 cl", abv: "11.3%", price: "€ 6,50" },
  { category: "Quad / Barleywine", name: "St. Bernardus — Abt 12", description: "Dark, smooth", volume: "33 cl", abv: "10%", price: "€ 5,50" },
  { category: "Quad / Barleywine", name: "De Molen — Bommen en Granaten", description: "Sweet, strong", volume: "33 cl", abv: "11.9%", price: "€ 6,50" },
  { category: "Quad / Barleywine", name: "Gouden Carolus Whisky Infused", description: "Sweet, caramel", volume: "33 cl", abv: "11.7%", price: "€ 6,50" },

  // Amber
  { category: "Amber", name: "Seef — Bootjes Bier", description: "Hoppy, fruity", volume: "33 cl", abv: "7%", price: "€ 4,40" },
  { category: "Amber", name: "De Koninck — APA", description: "Light, smooth", volume: "33 cl", abv: "5.2%", price: "€ 3,90" },
  { category: "Amber", name: "Ebontree — Dordt 1618-1619", description: "Honey, refreshing", volume: "33 cl", abv: "5.5%", price: "€ 5,00" },
  { category: "Amber", name: "Anchor — Liberty Ale", description: "Hoppy, light", volume: "33 cl", abv: "5.9%", price: "€ 5,50" },

  // Zwaar Blond
  { category: "Zwaar Blond", name: "Duvel", description: "Strong, smooth", volume: "33 cl", abv: "8.5%", price: "€ 4,80" },
  { category: "Zwaar Blond", name: "La Chouffe Blond", description: "Strong, sweet", volume: "33 cl", abv: "8%", price: "€ 4,80" },
  { category: "Zwaar Blond", name: "Hapkin", description: "Strong, dry", volume: "33 cl", abv: "8.5%", price: "€ 4,80" },
  { category: "Zwaar Blond", name: "Corsendonk — Agnus Tripel Blond", description: "Smooth, sweet", volume: "33 cl", abv: "7.5%", price: "€ 4,80" },

  // Wit / Weizen
  { category: "Wit / Weizen", name: "Paulaner", description: "Smooth, light", volume: "50 cl", abv: "5.5%", price: "€ 5,90" },
  { category: "Wit / Weizen", name: "'t IJ — IJwit", description: "Fruity, soft", volume: "33 cl", abv: "6.5%", price: "€ 4,40" },

  // Fruit / Zomer
  { category: "Fruit / Zomer", name: "Kasteel — Rouge", description: "Sweet, fruity", volume: "33 cl", abv: "8%", price: "€ 4,80" },
  { category: "Fruit / Zomer", name: "Liefmans Fruitesse", description: "Sweet, fruity", volume: "25 cl", abv: "3.8%", price: "€ 3,80" },
  { category: "Fruit / Zomer", name: "Kriek Boon", description: "Fruity, sour", volume: "25 cl", abv: "4%", price: "€ 3,80" },
  { category: "Fruit / Zomer", name: "Desperados", description: "Fruity, light", volume: "33 cl", abv: "5.9%", price: "€ 4,00" },
  { category: "Fruit / Zomer", name: "Sol", description: "Light, clean", volume: "33 cl", abv: "4.5%", price: "€ 4,00" },

  // Stout / Porter
  { category: "Stout / Porter", name: "Lowlander — Poorter", description: "Dark, coffee", volume: "33 cl", abv: "6%", price: "€ 5,50" },
  { category: "Stout / Porter", name: "Poesiat & Kater's — Vollenhoven Stout", description: "Coffee, bitter", volume: "33 cl", abv: "7.1%", price: "€ 5,50" },
  { category: "Stout / Porter", name: "Kompaan — 39 Bloedbroeder", description: "Dark, port", volume: "33 cl", abv: "9.1%", price: "€ 6,00" },
  { category: "Stout / Porter", name: "BrewDog — Jet Black Heart", description: "Coffee, milk", volume: "33 cl", abv: "4.7%", price: "€ 4,80" },

  // Saison
  { category: "Saison", name: "Oedipus — Mannenliefde", description: "Hoppy, light", volume: "33 cl", abv: "6%", price: "€ 5,00" },
  { category: "Saison", name: "Kompaan — Thierry Sauvage", description: "Light, soft", volume: "33 cl", abv: "4.8%", price: "€ 4,60" },

  // Cider
  { category: "Cider", name: "Strongbow — Gold", description: "Sweet, apple", volume: "33 cl", abv: "5%", price: "€ 3,90" },
  { category: "Cider", name: "Strongbow — British Dry", description: "Dry, apple", volume: "33 cl", abv: "5%", price: "€ 3,90" },
  { category: "Cider", name: "Bulmers — Original Irish Cider", description: "Sweet, apple", volume: "50 cl", abv: "4.5%", price: "€ 6,50" },
  { category: "Cider", name: "Bulmers — Pear", description: "Sweet, dry", volume: "50 cl", abv: "4.5%", price: "€ 6,50" },

  // Sour / Geuze
  { category: "Sour / Geuze", name: "Oude Geuze Boon", description: "Sour, dry", volume: "33 cl", abv: "7%", price: "€ 4,40" },
  { category: "Sour / Geuze", name: "Geuze Boon — Mariage Parfait (Vintage)", description: "Sour, dry", volume: "37,5 cl", abv: "8%", price: "€ 9,00" },
  { category: "Sour / Geuze", name: "Oedipus — Polyamorie", description: "Sour, fruity", volume: "33 cl", abv: "5%", price: "€ 5,00" },

  // Ale
  { category: "Ale", name: "Kompaan — Wingman", description: "Hoppy, smooth", volume: "33 cl", abv: "5%", price: "€ 5,00" },
  { category: "Ale", name: "Vet & Lazy — Fluffy", description: "Hoppy, smooth", volume: "33 cl", abv: "6.4%", price: "€ 5,00" },
  { category: "Ale", name: "Bazen — Huisbaas", description: "Fruity, light", volume: "33 cl", abv: "4.5%", price: "€ 4,30" },
  { category: "Ale", name: "BrewDog — Elvis Juice", description: "Hoppy, grapefruit", volume: "33 cl", abv: "6.5%", price: "€ 4,80" },
  { category: "Ale", name: "Poesiat & Kater's — Vollenhoven IPA", description: "Bitter, citrus", volume: "33 cl", abv: "6.5%", price: "€ 4,80" },
  { category: "Ale", name: "Lagunitas — A Little Sumpin' Ale", description: "Smooth, sweet", volume: "33 cl", abv: "7.5%", price: "€ 5,00" },
  { category: "Ale", name: "Lagunitas — 12th of Never Ale", description: "Tropical, light", volume: "33 cl", abv: "5.5%", price: "€ 4,50" },
  { category: "Ale", name: "Bax — #006 Abel's Ale", description: "Citrus, bitter", volume: "33 cl", abv: "7.8%", price: "€ 6,00" },

  // Laag Alcohol
  { category: "Laag Alcohol", name: "Uiltje — Met Je Bek In Het Zonnetje IPA", description: "Hoppy, bitter", volume: "33 cl", abv: "3.6%", price: "€ 5,50" },
  { category: "Laag Alcohol", name: "Lowlander — Yuzu & Grapefruit", description: "Citrus, sour", volume: "33 cl", abv: "2.5%", price: "€ 5,50" },
  { category: "Laag Alcohol", name: "Van Moll — Wanderlust IPA", description: "Light, hoppy", volume: "33 cl", abv: "2%", price: "€ 4,50" },
  { category: "Laag Alcohol", name: "BrewDog — Nanny State", description: "Hoppy, thin", volume: "33 cl", abv: "0.5%", price: "€ 5,00" },
  { category: "Laag Alcohol", name: "Amstel — Radler", description: "Citrus, lemon", volume: "33 cl", abv: "0.0%", price: "€ 2,80" },
  { category: "Laag Alcohol", name: "Heineken 0.0", description: "Alcoholvrije pilsener", volume: "33 cl", abv: "0.0%", price: "€ 2,80" },

  // Glutenvrij
  { category: "Glutenvrij", name: "Light, Floral", description: "Hoppy, bitter", volume: "33 cl", abv: "4.5%", price: "€ 7,00" },
];

const categories = [
  "Alle",
  "Van de Tap",
  "Blond",
  "Dubbel",
  "Tripel",
  "Quad / Barleywine",
  "Amber",
  "Zwaar Blond",
  "Wit / Weizen",
  "Fruit / Zomer",
  "Stout / Porter",
  "Saison",
  "Cider",
  "Sour / Geuze",
  "Ale",
  "Laag Alcohol",
  "Glutenvrij",
];

function Bierkaart() {
  const [active, setActive] = useState("Alle");
  const filtered = active === "Alle" ? beers : beers.filter((b) => b.category === active);

  return (
    <>
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Bierkaart</p>
          <h1 className="mb-6 max-w-[20ch] font-display text-4xl sm:text-5xl text-paper md:text-6xl">
            Meer dan zestig bieren, met zorg gekozen.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Van huisbier Gele Ary op de tap tot klassieke trappisten, wilde sours en
            alcoholvrije verfrissers — onze kaart is een eerbetoon aan het ambacht.
            Onze bediening adviseert je graag over de juiste keuze voor de avond.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-paper/75">
            Productfoto's worden per bier toegevoegd. Waar nog geen officiële foto beschikbaar
            is, tonen we een neutrale, vervangbare placeholder.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-20 border-y border-border bg-oak/95 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 py-4">
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
                  active === c
                    ? "bg-brass text-oak"
                    : "text-muted-foreground ring-1 ring-border hover:text-brass"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-oak pb-24 pt-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b) => (
            <ProductCard key={`${b.category}-${b.name}`} product={b} aspect="4 / 3" tone="dark" />
          ))}
        </div>
      </section>
    </>
  );
}
