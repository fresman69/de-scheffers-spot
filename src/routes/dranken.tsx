import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dranken")({
  head: () => ({
    meta: [
      { title: "Dranken — Wijn, cocktails, whisky | Rijke & Zn." },
      {
        name: "description",
        content:
          "Overzicht van onze wijnen, cocktails, whisky, gin & tonic, rum, frisdranken, koffie en thee.",
      },
      { property: "og:title", content: "Dranken — Rijke & Zn." },
      { property: "og:url", content: "/dranken" },
    ],
    links: [{ rel: "canonical", href: "/dranken" }],
  }),
  component: Dranken,
});

const menu = [
  {
    cat: "Wijnen",
    items: [
      ["Huiswijn wit — Chardonnay", "€ 4,80"],
      ["Huiswijn rood — Merlot", "€ 4,80"],
      ["Sancerre Blanc", "€ 7,50"],
      ["Chianti Classico", "€ 6,90"],
      ["Champagne Ruinart (fles)", "€ 89,00"],
    ],
  },
  {
    cat: "Cocktails",
    items: [
      ["Old Fashioned", "€ 12,50"],
      ["Negroni", "€ 11,00"],
      ["Aperol Spritz", "€ 9,50"],
      ["Espresso Martini", "€ 12,00"],
      ["Rijke Signature", "€ 13,50"],
    ],
  },
  {
    cat: "Whisky",
    items: [
      ["Glenfiddich 12yr", "€ 8,50"],
      ["Lagavulin 16yr", "€ 14,00"],
      ["Bulleit Bourbon", "€ 8,00"],
      ["Nikka From The Barrel", "€ 11,50"],
    ],
  },
  {
    cat: "Gin & Tonic",
    items: [
      ["Hendrick's & Fever-Tree", "€ 11,50"],
      ["Bobby's Dry Gin", "€ 10,50"],
      ["Monkey 47", "€ 13,00"],
      ["Malfy Rosa", "€ 11,00"],
    ],
  },
  {
    cat: "Rum",
    items: [
      ["Diplomatico Reserva", "€ 9,50"],
      ["Zacapa 23", "€ 12,50"],
      ["Havana Club 7", "€ 8,50"],
    ],
  },
  {
    cat: "Frisdranken",
    items: [
      ["Coca-Cola / Zero", "€ 3,20"],
      ["Fever-Tree Tonic", "€ 3,80"],
      ["Bitter Lemon", "€ 3,80"],
      ["Verse jus d'orange", "€ 4,20"],
    ],
  },
  {
    cat: "Koffie",
    items: [
      ["Espresso", "€ 2,80"],
      ["Cappuccino", "€ 3,40"],
      ["Flat white", "€ 3,80"],
      ["Irish coffee", "€ 8,50"],
    ],
  },
  {
    cat: "Thee",
    items: [
      ["English breakfast", "€ 2,80"],
      ["Verse muntthee", "€ 3,20"],
      ["Rooibos", "€ 2,80"],
      ["Earl Grey", "€ 2,80"],
    ],
  },
];

function Dranken() {
  return (
    <>
      <section className="bg-oak py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Dranken</p>
          <h1 className="mb-6 max-w-[24ch] font-display text-5xl text-paper md:text-6xl">
            Van huiswijn tot Highland single malt.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Naast onze uitgebreide bierkaart schenken wij een zorgvuldig samengestelde selectie
            wijnen, cocktails, whisky's, gin, rum en koffie — voor elk moment het juiste glas.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 text-oak">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          {menu.map((section) => (
            <div key={section.cat}>
              <h2 className="mb-8 border-b border-oak/10 pb-4 font-display text-3xl">
                {section.cat}
              </h2>
              <ul className="space-y-4">
                {section.items.map(([name, price]) => (
                  <li
                    key={name}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-oak/10 pb-3"
                  >
                    <span>{name}</span>
                    <span className="shrink-0 font-medium text-brass-dim">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
