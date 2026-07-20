import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, type Product } from "../components/product-card";

export const Route = createFileRoute("/dranken")({
  head: () => ({
    meta: [
      { title: "Dranken — Wijn, cocktails, sterk & meer | Rijke & Zn." },
      {
        name: "description",
        content:
          "Onze wijnkaart, sterke dranken, gin & tonic, warme dranken en frisdranken — zoals opgenomen in de officiële kaart 2025 van Stadscafé Rijke & Zn.",
      },
      { property: "og:title", content: "Dranken — Rijke & Zn." },
      { property: "og:url", content: "/dranken" },
    ],
    links: [{ rel: "canonical", href: "/dranken" }],
  }),
  component: Dranken,
});

type Drink = Product & { category: string };

const drinks: Drink[] = [
  // Wijnen — Wit
  { category: "Wijn wit", name: "Tarani Sauvignon Blanc", description: "Licht, fris en strak", volume: "15 cl", price: "€ 3,80" },
  { category: "Wijn wit", name: "Le Bottle Viognier", description: "Verkwikkend, bloemig, fruitig", volume: "15 cl", price: "€ 4,50" },
  { category: "Wijn wit", name: "Le Bottle Chardonnay", description: "Vol, zacht en boterig", volume: "15 cl", price: "€ 4,50" },
  { category: "Wijn wit", name: "El Arino Gewürztraminer", description: "Intens, rijk en kruidig", volume: "15 cl", price: "€ 4,50" },
  { category: "Wijn wit", name: "Winzerkrone St. Michael", description: "Zoet en fruitig", volume: "15 cl", price: "€ 3,50" },

  // Wijnen — Rood
  { category: "Wijn rood", name: "Tarani Cabernet Sauvignon", description: "Zachte, lichte wijn", volume: "15 cl", price: "€ 3,80" },
  { category: "Wijn rood", name: "Slent Farms Shiraz", description: "Complex, kruidig en vol", volume: "15 cl", price: "€ 4,70" },
  { category: "Wijn rood", name: "Sendero Royal Rioja", description: "Rijp, aangezet, zoet-zuur — fles", volume: "75 cl", price: "€ 25,50" },

  // Wijnen — Rosé
  { category: "Wijn rosé", name: "Tarani Gamay Rosé", description: "Fruitig, soepel en licht", volume: "15 cl", price: "€ 3,80" },

  // Wijnen — Muserend
  { category: "Muserend", name: "Casa Defra Prosecco Frizzante", description: "Verkwikkend, fris en fruitig", volume: "20 cl", price: "€ 6,50" },
  { category: "Muserend", name: "Cava Naveran Brutissimo", description: "Strak, fris en mineralig — fles", volume: "75 cl", price: "€ 23,50" },

  // Sterk
  { category: "Sterk", name: "Ketel 1", description: "Jonge jenever", volume: "3,5 cl", price: "€ 2,60" },
  { category: "Sterk", name: "Vieux", description: "Nederlandse brandewijn", volume: "3,5 cl", price: "€ 2,60" },
  { category: "Sterk", name: "Zuidam Oude Jenever 1 jaar", description: "Rijp, rond", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Apfelkorn", description: "Zoet, appel", volume: "3,5 cl", price: "€ 3,50" },
  { category: "Sterk", name: "Jägermeister", description: "Kruidenbitter", volume: "3,5 cl", price: "€ 3,00" },
  { category: "Sterk", name: "Limoncello", description: "Zoet, citrus", volume: "3,5 cl", price: "€ 3,00" },
  { category: "Sterk", name: "Bacardi", description: "Witte rum", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Brugal", description: "Bruine rum", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Vodka", description: "Neutraal, puur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Cognac", description: "Frans, warm", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Tequila Sauza Gold", description: "Gerijpt, honing", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Drambuie", description: "Whisky-likeur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Quarenta y Tres", description: "43 kruiden-likeur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Disaronno", description: "Amandel-likeur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Tia Maria", description: "Koffie-likeur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Sambuca", description: "Anijs-likeur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Cointreau", description: "Sinaasappel-likeur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Baileys", description: "Iers, roomig", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Pernod", description: "Anijs, kruidig", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Campari", description: "Bitter, kruidig", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Southern Comfort", description: "Whisky-likeur", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Four Roses", description: "Kentucky straight bourbon whiskey", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Jack Daniel's", description: "Tennessee whiskey", volume: "3,5 cl", price: "€ 5,00" },
  { category: "Sterk", name: "Chivas Regal 12", description: "Blended scotch whisky", volume: "3,5 cl", price: "€ 5,00" },
  { category: "Sterk", name: "Famous Grouse", description: "Blended scotch whisky", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Jameson", description: "Irish whiskey", volume: "3,5 cl", price: "€ 4,50" },
  { category: "Sterk", name: "Laphroaig 10", description: "Islay single malt whisky", volume: "3,5 cl", price: "€ 7,00" },
  { category: "Sterk", name: "Bushmills 10", description: "Single malt Irish whiskey", volume: "3,5 cl", price: "€ 7,00" },
  { category: "Sterk", name: "Talisker Skye", description: "Single malt scotch whisky", volume: "3,5 cl", price: "€ 7,00" },

  // Gin & Tonic
  { category: "Gin & Tonic", name: "Loopuyt Gin & Tonic", description: "Loopuyt tonic, garnering naar keuze", volume: "vanaf 25 cl", price: "vanaf € 7,50" },
  { category: "Gin & Tonic", name: "Tanqueray Gin & Tonic", description: "Fever-Tree Mediterranean, garnering", volume: "vanaf 25 cl", price: "vanaf € 7,50" },
  { category: "Gin & Tonic", name: "Bulldog Gin & Tonic", description: "Fever-Tree Aromatic tonic, garnering", volume: "vanaf 25 cl", price: "vanaf € 7,50" },
  { category: "Gin & Tonic", name: "Bombay Gin & Tonic", description: "Fever-Tree Elderflower, garnering", volume: "vanaf 25 cl", price: "vanaf € 7,50" },
  { category: "Gin & Tonic", name: "Bobby's Gin & Tonic", description: "Loopuyt ginger-beer, garnering", volume: "vanaf 25 cl", price: "vanaf € 7,50" },

  // Warme dranken
  { category: "Warme dranken", name: "Espresso", description: "Enkel, krachtig", volume: "5 cl", price: "€ 2,50" },
  { category: "Warme dranken", name: "Dubbele espresso", description: "Volle body", volume: "10 cl", price: "€ 4,00" },
  { category: "Warme dranken", name: "Koffie", description: "Vers gezet", volume: "15 cl", price: "€ 2,50" },
  { category: "Warme dranken", name: "Koffie verkeerd", description: "Met warme melk", volume: "20 cl", price: "€ 2,70" },
  { category: "Warme dranken", name: "Cappuccino", description: "Melk & schuim", volume: "15 cl", price: "€ 2,70" },
  { category: "Warme dranken", name: "Cortado", description: "Espresso met warme melk", volume: "10 cl", price: "€ 2,50" },
  { category: "Warme dranken", name: "Thee — diverse smaken", description: "Ruime keuze aan smaken", volume: "20 cl", price: "€ 2,20" },
  { category: "Warme dranken", name: "Italian Coffee", description: "Met Disaronno", volume: "20 cl", price: "€ 7,50" },
  { category: "Warme dranken", name: "Irish Coffee", description: "Met Jameson", volume: "20 cl", price: "€ 7,50" },
  { category: "Warme dranken", name: "Spanish Coffee", description: "Met Tia Maria", volume: "20 cl", price: "€ 7,50" },
  { category: "Warme dranken", name: "French Coffee", description: "Met Dom Benedictine", volume: "20 cl", price: "€ 7,50" },

  // Frisdranken
  { category: "Frisdranken", name: "Pepsi", description: "Cola", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Sisi", description: "Sinas", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "7up", description: "Citrus", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Sourcy", description: "Mineraalwater", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Bitter Lemon", description: "Fris, bitter", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Lipton Ice Tea", description: "Green of sparkling", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Cassis", description: "Zwarte bes", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Ginger Ale", description: "Gember, fris", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Royal Club Tonic", description: "Klassieke tonic", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Rivella", description: "Op basis van melkwei", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Fristi", description: "Rood fruit", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Chocomel", description: "Ook verwarmd", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Appelsap", description: "Zacht en zoet", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Tomatensap", description: "Hartig", volume: "20 cl", price: "€ 2,50" },
  { category: "Frisdranken", name: "Verse jus d'orange (klein)", description: "Vers geperst", volume: "20 cl", price: "€ 3,00" },
  { category: "Frisdranken", name: "Verse jus d'orange (groot)", description: "Vers geperst", volume: "30 cl", price: "€ 4,00" },
];

const categories = [
  "Alle",
  "Wijn wit",
  "Wijn rood",
  "Wijn rosé",
  "Muserend",
  "Sterk",
  "Gin & Tonic",
  "Warme dranken",
  "Frisdranken",
];

function Dranken() {
  const [active, setActive] = useState("Alle");
  const filtered = active === "Alle" ? drinks : drinks.filter((d) => d.category === active);

  return (
    <>
      <section className="bg-oak py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Dranken</p>
          <h1 className="mb-6 max-w-[24ch] font-display text-5xl text-paper md:text-6xl">
            Van huiswijn tot Islay single malt.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Onze volledige kaart met wijnen, sterke dranken, gin & tonic, warme dranken
            en frisdranken — zorgvuldig samengesteld voor elk moment van de avond.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-paper/75">
            Productfoto's worden per drank toegevoegd. Waar een officiële foto nog ontbreekt,
            tonen we een neutrale, later vervangbare placeholder.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-20 border-y border-border bg-oak/95 backdrop-blur">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-4">
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
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <ProductCard key={`${d.category}-${d.name}`} product={d} aspect="4 / 3" tone="dark" />
          ))}
        </div>
      </section>
    </>
  );
}
