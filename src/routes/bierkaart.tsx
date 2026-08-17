import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "../components/product-card";
import { beers, type Beer } from "../lib/menu/beers";

export const Route = createFileRoute("/bierkaart")({
  head: () => ({
    meta: [
      { title: "Bierkaart — Speciaalbier in Dordrecht | Stadscafé" },
      {
        name: "description",
        content:
          "Onze volledige bierkaart 2025: van huisbier Gouwe Ary tot trappisten, sours, ciders, saisons en alcoholvrij. Zorgvuldig gekozen speciaalbieren in Dordrecht.",
      },
      { property: "og:title", content: "Bierkaart — Stadscafé" },
      { property: "og:url", content: "/bierkaart" },
    ],
    links: [{ rel: "canonical", href: "/bierkaart" }],
  }),
  component: Bierkaart,
});


const categories = [
  "Alle",
  "Van de Tap",
  "Blond",
  "Dubbel",
  "Tripel",
  "Quad / Barley Wine",
  "Indian Pale Ale",
  "Zwaar Blond",
  "Wit / Weizen",
  "Amber",
  "Fruit / Zomer",
  "Stout / Porter",
  "Saison",
  "Sour / Geuze",
  "Cider",
  "0.0 / Alcoholarm",
];

function Bierkaart() {
  const [active, setActive] = useState("Alle");
  const filtered = active === "Alle" ? beers : beers.filter((b) => b.category === active);

  return (
    <>
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">Bierkaart</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-paper">
            Speciaalbier, met plezier gekozen
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-paper/85">
            Van huisbier Gouwe Ary op de tap tot klassieke trappisten, wilde sours en
            alcoholvrije verfrissers. Voor elk humeur staat er wel iets goeds klaar.
            Vraag onze bediening gerust om een tip.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-paper/75">
            Prijzen zie je op de kaart in het café. Foto's per bier volgen zodra we ze hebben.
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
          {filtered.map((b) => (
            <ProductCard key={`${b.category}-${b.name}`} product={b} aspect="4 / 3" tone="dark" />
          ))}
        </div>
      </section>
    </>
  );
}
