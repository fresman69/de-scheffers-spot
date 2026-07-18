import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import beerTrappist from "../assets/beer-trappist.jpg";
import beerBlond from "../assets/beer-blond.jpg";
import beerTripel from "../assets/beer-tripel.jpg";

export const Route = createFileRoute("/bierkaart")({
  head: () => ({
    meta: [
      { title: "Bierkaart — Speciaalbier in Dordrecht | Rijke & Zn." },
      {
        name: "description",
        content:
          "Meer dan 40 speciaalbieren op de kaart: tap, IPA, blond, tripel, dubbel, weizen, stout en seizoensbieren. Ambachtelijk geselecteerd.",
      },
      { property: "og:title", content: "Bierkaart — Rijke & Zn." },
      { property: "og:url", content: "/bierkaart" },
    ],
    links: [{ rel: "canonical", href: "/bierkaart" }],
  }),
  component: Bierkaart,
});

type Beer = {
  name: string;
  brewery: string;
  abv: string;
  temp: string;
  notes: string;
  pair: string;
  img?: string;
  category: string;
};

const beers: Beer[] = [
  { category: "Tapbier", name: "Rijke Blond", brewery: "Huis van Rijke", abv: "5.2%", temp: "5°C", notes: "Zacht, mout, licht kruidig.", pair: "Bitterballen", img: beerBlond },
  { category: "Tapbier", name: "Dordts Pils", brewery: "Stadsbrouwerij", abv: "4.8%", temp: "4°C", notes: "Fris en droog met hoppige afdronk.", pair: "Kaasstengels" },
  { category: "Tapbier", name: "Karmeliet Tripel", brewery: "Bosteels", abv: "8.4%", temp: "8°C", notes: "Verfijnd, granig, elegant.", pair: "Oude kaas", img: beerTripel },
  { category: "Speciaalbier", name: "Duvel", brewery: "Duvel Moortgat", abv: "8.5%", temp: "6°C", notes: "Blond, droog, met karakter.", pair: "Charcuterie" },
  { category: "Speciaalbier", name: "La Chouffe", brewery: "Achouffe", abv: "8.0%", temp: "7°C", notes: "Fruitig, koriander, honing.", pair: "Nootjes" },
  { category: "Seizoensbier", name: "Kerst Bock", brewery: "Jopen", abv: "8.5%", temp: "10°C", notes: "Karamel, kruidnagel, warm.", pair: "Wildpaté" },
  { category: "Seizoensbier", name: "Meibock", brewery: "Ramses Bier", abv: "6.5%", temp: "8°C", notes: "Licht, bloemig, lente.", pair: "Gemarineerde olijven" },
  { category: "IPA", name: "Punk IPA", brewery: "BrewDog", abv: "5.6%", temp: "5°C", notes: "Grapefruit, tropisch, bitter.", pair: "Chorizo" },
  { category: "IPA", name: "Neck Oil", brewery: "Beavertown", abv: "4.3%", temp: "5°C", notes: "Sessie IPA, citrus.", pair: "Nachos" },
  { category: "Blond", name: "Affligem Blond", brewery: "Affligem", abv: "6.7%", temp: "6°C", notes: "Zoet, mout, kruidig.", pair: "Brie" },
  { category: "Tripel", name: "Westmalle Tripel", brewery: "Trappist Westmalle", abv: "9.5%", temp: "12°C", notes: "Klassiek, complex, honing.", pair: "Ossenworst" },
  { category: "Dubbel", name: "Westmalle Dubbel", brewery: "Trappist Westmalle", abv: "7.0%", temp: "12°C", notes: "Chocolade, koffie, rozijn.", pair: "Belegen kaas" },
  { category: "Dubbel", name: "Rochefort 8", brewery: "Trappistes Rochefort", abv: "9.2%", temp: "12°C", notes: "Vijgen, chocolade, complex.", pair: "Wildpaté", img: beerTrappist },
  { category: "Weizen", name: "Weihenstephaner Hefe", brewery: "Weihenstephan", abv: "5.4%", temp: "5°C", notes: "Banaan, kruidnagel, fris.", pair: "Krakelingen" },
  { category: "Weizen", name: "Erdinger Weissbier", brewery: "Erdinger", abv: "5.3%", temp: "5°C", notes: "Zacht, romig, gistig.", pair: "Pretzels" },
  { category: "Stout", name: "Guinness Draught", brewery: "Guinness", abv: "4.2%", temp: "8°C", notes: "Koffie, cacao, romig.", pair: "Oesters" },
  { category: "Stout", name: "Imperial Stout", brewery: "De Molen", abv: "10.2%", temp: "12°C", notes: "Espresso, chocolade, robuust.", pair: "Chocoladebonbons" },
  { category: "Alcoholvrij", name: "Weihenstephaner 0.0", brewery: "Weihenstephan", abv: "0.0%", temp: "5°C", notes: "Volle smaak, fris.", pair: "Bitterballen" },
  { category: "Alcoholvrij", name: "Vandestreek Playground", brewery: "Vandestreek", abv: "0.5%", temp: "5°C", notes: "IPA-stijl, citrus, hoppig.", pair: "Nachos" },
];

const categories = [
  "Alle",
  "Tapbier",
  "Speciaalbier",
  "Seizoensbier",
  "IPA",
  "Blond",
  "Tripel",
  "Dubbel",
  "Weizen",
  "Stout",
  "Alcoholvrij",
];

function Bierkaart() {
  const [active, setActive] = useState("Alle");
  const filtered = active === "Alle" ? beers : beers.filter((b) => b.category === active);

  return (
    <>
      <section className="bg-oak py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Bierkaart</p>
          <h1 className="mb-6 max-w-[20ch] font-display text-5xl text-paper md:text-6xl">
            Meer dan veertig bieren, met zorg gekozen.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Van klassieke trappisten tot lokale seizoensbrouwsels — onze kaart is een
            eerbetoon aan het ambacht. Onze bediening adviseert je graag over de juiste
            keuze voor de avond.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-oak">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
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

      <section className="bg-oak pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b) => (
            <article
              key={b.name}
              className="group flex flex-col rounded-sm bg-oak-light ring-1 ring-border transition-all hover:ring-brass/40"
            >
              <div className="aspect-[5/4] overflow-hidden rounded-t-sm bg-oak">
                {b.img ? (
                  <img
                    src={b.img}
                    alt={b.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-6xl text-brass/20">
                      {b.name.slice(0, 1)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-paper">{b.name}</h3>
                  <span className="shrink-0 font-medium text-brass">{b.abv}</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{b.brewery}</p>
                <p className="mb-6 flex-1 text-sm text-paper/70">{b.notes}</p>
                <div className="mt-auto flex justify-between border-t border-border pt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span>Serveer · {b.temp}</span>
                  <span className="text-brass">{b.pair}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
