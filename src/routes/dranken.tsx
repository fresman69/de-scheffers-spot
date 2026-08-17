import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "../components/product-card";
import { drinks, type Drink } from "../lib/menu/drinks";

export const Route = createFileRoute("/dranken")({
  head: () => ({
    meta: [
      { title: "Dranken — Wijn, sterk, koffie & fris | Stadscafé" },
      {
        name: "description",
        content:
          "Onze wijnkaart, sterke dranken, gin & tonic, koffie/thee en frisdranken — voor iedereen wat lekkers naast de bierkaart.",
      },
      { property: "og:title", content: "Dranken — Stadscafé" },
      { property: "og:url", content: "/dranken" },
    ],
    links: [{ rel: "canonical", href: "/dranken" }],
  }),
  component: Dranken,
});


const categories = [
  "Alle",
  "Wijn wit",
  "Wijn rood",
  "Wijn rosé",
  "Mousserend",
  "Gin & Tonic",
  
  "Sterk",
  "Koffie / Thee",
  "Frisdrank",
];

function Dranken() {
  const [active, setActive] = useState("Alle");
  const filtered = active === "Alle" ? drinks : drinks.filter((d) => d.category === active);

  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">Dranken</p>
          <h1 className="mb-6 max-w-[24ch] type-h1 text-paper">
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

      <section className="bg-oak pb-[clamp(4rem,7vw,7rem)] pt-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <ProductCard key={`${d.category}-${d.name}`} product={d} aspect="4 / 3" tone="dark" />
          ))}
        </div>
      </section>
    </>
  );
}
