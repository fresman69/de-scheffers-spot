import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, type Product } from "../components/product-card";

export const Route = createFileRoute("/dranken")({
  head: () => ({
    meta: [
      { title: "Dranken — Wijn, sterk, koffie & fris | StadsCafe" },
      {
        name: "description",
        content:
          "Onze wijnkaart, sterke dranken, gin & tonic, koffie/thee en frisdranken — voor iedereen wat lekkers naast de bierkaart.",
      },
      { property: "og:title", content: "Dranken — StadsCafe" },
      { property: "og:url", content: "/dranken" },
    ],
    links: [{ rel: "canonical", href: "/dranken" }],
  }),
  component: Dranken,
});

type Drink = Product & { category: string };

const drinks: Drink[] = [
  // Wijn — Wit
  { category: "Wijn wit", name: "Tarani Sauvignon Blanc", description: "Licht, fris en strak" },
  { category: "Wijn wit", name: "Les Bertholets Chardonnay", description: "Hout, boter en tropisch fruit" },

  // Wijn — Rood
  { category: "Wijn rood", name: "Tarani Cabernet Sauvignon", description: "Zoet, licht en soepel" },
  { category: "Wijn rood", name: "Rioja Luis Cañas", description: "Klassieke Rioja, zachte subtiele hout" },
  { category: "Wijn rood", name: "Puerta Adalla Verdejo", description: "Fruitig, soepel en licht kruidig" },
  { category: "Wijn rood", name: "Le Bottle Syrah", description: "Licht kruidig, vol van smaak" },

  { category: "Wijn rood", name: "Barista Pinotage", description: "Fruitig, hints van vanille en ciderhout" },

  // Wijn — Rosé
  { category: "Wijn rosé", name: "Tarani Gamay Rosé", description: "Fruitig, soepel en licht" },

  // Mousserend
  { category: "Mousserend", name: "Mionetto Prosecco", description: "Verkwikkend, fris en fruitig" },
  { category: "Mousserend", name: "Cava Naveran Brutissimo", description: "Strak, fris en mineralig" },

  // Gin & Tonic
  { category: "Gin & Tonic", name: "Loopuyt 1772 Dry Gin", description: "Fever-Tree Indian Tonic Water" },
  { category: "Gin & Tonic", name: "Tanqueray Dry Gin", description: "Fever-Tree Indian Tonic Water · verse limoen" },
  { category: "Gin & Tonic", name: "Bobby's Schiedam Dry Gin", description: "Fever-Tree Mediterranean Tonic · sinaasappel & kruidnagel" },
  { category: "Gin & Tonic", name: "Bombay Sapphire", description: "Fever-Tree Indian Tonic Water · verse limoen" },
  { category: "Gin & Tonic", name: "Tanqueray Flor de Sevilla Gin", description: "Fever-Tree Clementine Tonic · gedroogde sinaasappel" },


  // Sterk — Jenever & Vieux
  { category: "Sterk", name: "Ketel 1 Jonge" },
  { category: "Sterk", name: "Rutte Oude" },
  { category: "Sterk", name: "Vieux" },
  // Sterk — Rum & Tequila
  { category: "Sterk", name: "Barceló", description: "Rum" },
  { category: "Sterk", name: "Bacardi", description: "Witte rum" },
  { category: "Sterk", name: "Tequila Gold" },
  // Sterk — Whisky & Bourbon
  { category: "Sterk", name: "Buffalo Trace Bourbon" },
  { category: "Sterk", name: "Four Roses", description: "Kentucky straight bourbon" },
  { category: "Sterk", name: "Jack Daniels", description: "Tennessee whiskey" },
  { category: "Sterk", name: "Southern Comfort", description: "Whisky-likeur" },
  { category: "Sterk", name: "Chivas Regal 12", description: "Blended scotch whisky" },
  { category: "Sterk", name: "Famous Grouse", description: "Blended scotch whisky" },
  { category: "Sterk", name: "Jameson", description: "Irish whiskey" },
  { category: "Sterk", name: "Bushmills", description: "Irish whiskey" },
  { category: "Sterk", name: "Laphroaig", description: "Islay single malt whisky" },
  { category: "Sterk", name: "Talisker Skye", description: "Single malt scotch whisky" },
  { category: "Sterk", name: "Nikka Days Whisky", description: "Japanse blended whisky" },
  // Sterk — Vodka
  { category: "Sterk", name: "Absolut Vodka" },
  { category: "Sterk", name: "Ketel 1 Vodka" },
  // Sterk — Cognac / Salmari
  { category: "Sterk", name: "Cognac" },
  { category: "Sterk", name: "Salmari", description: "Zoute drop-likeur" },
  // Sterk — Likeuren & bitters
  { category: "Sterk", name: "Jägermeister", description: "Kruidenbitter" },
  { category: "Sterk", name: "Drambuie", description: "Whisky-likeur" },
  { category: "Sterk", name: "Cuarenta y Tres", description: "43 kruiden-likeur" },
  { category: "Sterk", name: "Disaronno", description: "Amandel-likeur" },
  { category: "Sterk", name: "Tia Maria", description: "Koffie-likeur" },
  { category: "Sterk", name: "Sambuca", description: "Anijs-likeur" },
  { category: "Sterk", name: "Cointreau", description: "Sinaasappel-likeur" },
  { category: "Sterk", name: "Baileys", description: "Iers, roomig" },
  { category: "Sterk", name: "Pernod", description: "Anijs, kruidig" },
  { category: "Sterk", name: "Limoncello", description: "Zoet, citrus" },
  { category: "Sterk", name: "Black Sheep", description: "Kruidenbitter" },

  // Koffie / Thee
  { category: "Koffie / Thee", name: "Thee", description: "Diverse smaken" },
  { category: "Koffie / Thee", name: "Verse gemberthee" },
  { category: "Koffie / Thee", name: "Espresso" },
  { category: "Koffie / Thee", name: "Dubbele espresso" },
  { category: "Koffie / Thee", name: "Koffie" },
  { category: "Koffie / Thee", name: "Koffie verkeerd" },
  { category: "Koffie / Thee", name: "Cappuccino" },
  { category: "Koffie / Thee", name: "Cortado" },
  { category: "Koffie / Thee", name: "Warme chocomel", description: "Slagroom + €0,50" },
  { category: "Koffie / Thee", name: "Italian Coffee", description: "Met Disaronno" },
  { category: "Koffie / Thee", name: "Irish Coffee", description: "Met Jameson" },
  { category: "Koffie / Thee", name: "Spanish Coffee", description: "Met Tia Maria" },
  { category: "Koffie / Thee", name: "French Coffee", description: "Met Cointreau" },

  // Frisdrank
  { category: "Frisdrank", name: "Pepsi" },
  { category: "Frisdrank", name: "Sisi", description: "Sinas" },
  { category: "Frisdrank", name: "7 Up" },
  { category: "Frisdrank", name: "Sourcy", description: "Mineraalwater" },
  { category: "Frisdrank", name: "Bitter Lemon" },
  { category: "Frisdrank", name: "Lipton Ice Tea" },
  { category: "Frisdrank", name: "Cassis" },
  { category: "Frisdrank", name: "Ginger Ale" },
  { category: "Frisdrank", name: "Fever-Tree Tonic" },
  { category: "Frisdrank", name: "Fristi" },
  { category: "Frisdrank", name: "Chocomel" },
  { category: "Frisdrank", name: "Appelsap" },
  { category: "Frisdrank", name: "Jus d'Orange", description: "Vers geperst" },
  { category: "Frisdrank", name: "Double Dutch Watermelon" },
  { category: "Frisdrank", name: "Double Dutch Ginger Beer" },
  { category: "Frisdrank", name: "Double Dutch Pink Grapefruit" },
];

const categories = [
  "Alle",
  "Wijn wit",
  "Wijn rood",
  "Wijn rosé",
  "Mousserend",
  "Gin & Tonic",
  "Cocktails",
  "Sterk",
  "Koffie / Thee",
  "Frisdrank",
];

function Dranken() {
  const [active, setActive] = useState("Alle");
  const filtered = active === "Alle" ? drinks : drinks.filter((d) => d.category === active);

  return (
    <>
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script text-5xl leading-none text-brass md:text-6xl">Dranken</p>
          <h1 className="mb-6 max-w-[24ch] font-display-condensed text-4xl tracking-wider text-paper sm:text-5xl md:text-6xl">
            Naast het bier
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-paper/85">
            Wijn, gin & tonic, sterk, koffie en frisdrank. Voor als bier even niet
            past bij het moment — of gewoon voor de afwisseling.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-paper/75">
            Prijzen zie je op de kaart in het café. Vraag onze bediening gerust om een tip.
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
                className={`whitespace-nowrap rounded-sm px-4 py-2 text-[11px] font-medium uppercase tracking-widest transition-all ${
                  active === c
                    ? "bg-wine text-paper"
                    : "text-paper/75 ring-1 ring-border hover:text-brass hover:ring-brass/50"
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
          {filtered.map((d) => (
            <ProductCard key={`${d.category}-${d.name}`} product={d} aspect="4 / 3" tone="dark" />
          ))}
        </div>
      </section>
    </>
  );
}
