import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { BeerCard } from "../components/beer-card";
import { MenuSearch } from "../components/menu-search";
import { Ornament } from "../components/ornament";
import { Reveal } from "../components/reveal";
import { beers } from "../lib/menu/beers";

export const Route = createFileRoute("/bierkaart")({
  head: () => ({
    meta: [
      { title: "Bierkaart — Speciaalbier in Dordrecht | Stadscafé" },
      {
        name: "description",
        content:
          "Onze volledige bierkaart: van huisbier Gouwe Ary tot trappisten, sours, ciders, saisons en alcoholvrij. Zorgvuldig gekozen speciaalbier in Dordrecht.",
      },
      { property: "og:title", content: "Bierkaart — Stadscafé" },
      {
        property: "og:description",
        content: "Goed bier, goede sfeer. Ontdek de speciaalbieren van Stadscafé in Dordrecht.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  "Fruit / Zoeter",
  "Stout / Porter",
  "Saison",
  "Sour / Geuze",
  "Cider",
  "0.0 / Alcoholarm",
];

function Bierkaart() {
  const [active, setActive] = useState("Alle");
  const [searching, setSearching] = useState(false);
  const onSearchingChange = useCallback((v: boolean) => setSearching(v), []);
  const filtered = active === "Alle" ? beers : beers.filter((b) => b.category === active);
  const shown = categories.filter((c) => c !== "Alle" && filtered.some((b) => b.category === c));

  return (
    <>
      <section className="relative overflow-hidden bg-oak section-y">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-70"
          style={{ background: "linear-gradient(180deg, var(--bordeaux) 0%, transparent 100%)" }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-script type-eyebrow text-brass">Van vaas tot cuvée</p>
          <h1 className="mt-3 type-h1 text-paper">Bierkaart</h1>
          <p className="mt-4 font-display-condensed text-sm tracking-[0.3em] text-mustard">
            ★ Goed bier, goede sfeer ★
          </p>
          <Ornament className="mt-8" />
          <p className="mx-auto mt-8 max-w-[58ch] text-pretty type-body text-paper/80">
            Bier is weer helemaal van nu, en daar investeren we in. Van een simpele vaas Heineken
            tot een Whisky Infused Cuvée: trappisten, IPA's, wilde sours, ciders en alcoholvrije
            verfrissers. De keuze is reuze — vraag onze bediening gerust om een tip.
          </p>
          <p className="mt-4 text-sm text-paper/60">
            Prijzen vind je op de kaart in het café.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-4">
        <MenuSearch onSearchingChange={onSearchingChange} />
      </section>

      <section
        hidden={searching}
        className="sticky top-16 z-20 border-y border-border bg-oak/95 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-4 sm:px-6">
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`min-h-11 whitespace-nowrap rounded-sm px-4 py-2 type-label transition-all ${
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

      <section hidden={searching} className="bg-oak pb-[clamp(4rem,7vw,7rem)] pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {shown.map((cat) => {
            const items = filtered.filter((b) => b.category === cat);
            const compact = cat === "0.0 / Alcoholarm";
            return (
              <div key={cat} className="mb-14 last:mb-0">
                <div className="mb-7 flex items-center gap-4">
                  <span aria-hidden className="h-px flex-1 bg-wine/60" />
                  <h2 className="rounded-sm bg-bordeaux px-4 py-1.5 type-h3 text-cream">{cat}</h2>
                  <span className="type-label text-mustard">{items.length}</span>
                  <span aria-hidden className="h-px flex-1 bg-wine/60" />
                </div>
                <div
                  className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}
                >
                  {items.map((b, i) => (
                    <Reveal key={`${b.category}-${b.name}`} delay={Math.min(i, 6) * 60} as="div">
                      <BeerCard beer={b} compact={compact} />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
          <div className="card-cozy bg-cream px-6 py-6 text-center">
            <p className="font-display-condensed text-lg tracking-[0.12em] text-ink">
              Bier met verhaal, samen genieten.
            </p>
            <p className="mt-1 font-script text-3xl leading-none text-wine">Proost!</p>
          </div>
          <p className="mt-4 text-center text-[12px] uppercase tracking-[0.25em] text-paper/50">
            Geniet met mate, maar geniet
          </p>
        </div>
      </section>
    </>
  );
}

