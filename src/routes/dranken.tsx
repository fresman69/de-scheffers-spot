import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { MenuSearch } from "../components/menu-search";
import { DrinkSection, type DrinkTone } from "../components/drink-section";
import { Ornament } from "../components/ornament";
import { drinks } from "../lib/menu/drinks";

export const Route = createFileRoute("/dranken")({
  head: () => ({
    meta: [
      { title: "Dranken — Wijn, gin, sterk, koffie & fris | Stadscafé" },
      {
        name: "description",
        content:
          "De volledige drankenkaart van Stadscafé Rijke & Zn.: wijnen per glas, gin & tonic, whisky en likeuren, koffie, thee en frisdrank — naast de bierkaart.",
      },
      { property: "og:title", content: "Dranken — Stadscafé Rijke & Zn." },
      {
        property: "og:description",
        content:
          "Wijn, gin & tonic, sterke drank, koffie en fris in ons bruine café aan de Voorstraat in Dordrecht.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/dranken" },
    ],
    links: [{ rel: "canonical", href: "/dranken" }],
  }),
  component: Dranken,
});

type SectionMeta = {
  id: string;
  category: string;
  eyebrow: string;
  title: string;
  intro: string;
  tone: DrinkTone;
  dense?: boolean;
};

const sections: SectionMeta[] = [
  {
    id: "wijn-wit",
    category: "Wijn wit",
    eyebrow: "Fris ingeschonken",
    title: "Witte wijn",
    intro:
      "Twee witte wijnen per glas: de een strak en fris, de ander rond en houtgerijpt. Prima bij de kaas van de happaskaart of gewoon aan de bar.",
    tone: "cream",
  },
  {
    id: "wijn-rood",
    category: "Wijn rood",
    eyebrow: "Vol en warm",
    title: "Rode wijn",
    intro:
      "Van soepel en fruitig tot een klassieke Rioja met zachte houttonen. Vraag onze bediening gerust welke fles er openstaat.",
    tone: "bordeaux",
  },
  {
    id: "wijn-rose",
    category: "Wijn rosé",
    eyebrow: "Voor op het terras",
    title: "Rosé",
    intro:
      "Licht, fruitig en zomers — het glas dat vanzelf op tafel komt zodra de zon op het Scheffersplein staat.",
    tone: "cream",
  },
  {
    id: "mousserend",
    category: "Mousserend",
    eyebrow: "Er valt iets te vieren",
    title: "Bubbels",
    intro:
      "Prosecco of cava, per glas of per fles. Verjaardag, geslaagd of gewoon vrijdag — een reden is snel gevonden.",
    tone: "wine",
  },
  {
    id: "gin-tonic",
    category: "Gin & Tonic",
    eyebrow: "Zelf samengesteld",
    title: "Gin & Tonic",
    intro:
      "Elke gin krijgt bij ons de tonic en garnering die er het beste bij past — van Schiedamse Bobby's met sinaasappel en kruidnagel tot Flor de Sevilla met clementine tonic.",
    tone: "cream",
  },
  {
    id: "sterk",
    category: "Sterk",
    eyebrow: "Voor bij de koffie",
    title: "Sterke drank & likeuren",
    intro:
      "Jenever, vieux, rum, whisky uit Kentucky, Schotland, Ierland en Japan, en een lange rij likeuren en bitters. Er staat altijd iets om de avond mee af te sluiten.",
    tone: "oak",
    dense: true,
  },
  {
    id: "koffie-thee",
    category: "Koffie / Thee",
    eyebrow: "Warm de kou uit",
    title: "Koffie & thee",
    intro:
      "Van espresso tot cortado, verse gemberthee en warme chocomel. Liever met een scheut? Dan maken we er een Irish, Italian, Spanish of French coffee van.",
    tone: "cream",
  },
  {
    id: "frisdrank",
    category: "Frisdrank",
    eyebrow: "Zonder alcohol",
    title: "Frisdrank & sappen",
    intro:
      "Klassieke fris, vers geperste jus, mineraalwater en de mixers van Fever-Tree en Double Dutch. Ook wie niet drinkt heeft hier ruime keuze.",
    tone: "wine",
    dense: true,
  },
];

function Dranken() {
  const [searching, setSearching] = useState(false);
  const onSearchingChange = useCallback((v: boolean) => setSearching(v), []);

  return (
    <>
      {/* Kop — beige vlak met het kenmerkende rood */}
      <section className="warm-grain relative bg-cream section-y text-ink">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 font-script type-eyebrow text-wine">Naast het bier</p>
          <h1 className="mb-6 max-w-[16ch] type-h1 text-ink">Dranken</h1>
          <Ornament tone="wine" className="mb-8 !mx-0" />
          <p className="max-w-[62ch] text-pretty type-body text-ink/80">
            Wijn per glas, gin &amp; tonic op maat, sterke drank, koffie en fris. Samen met barman
            John is de kaart zo ingedeeld dat je snel iets kunt kiezen — en toch blijft rondkijken.
          </p>
          <p className="mt-6 max-w-[60ch] text-sm text-ink/65">
            Prijzen staan op de kaart in het café. Vraag onze bediening gerust om een tip.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-4 pt-10">
        <MenuSearch onSearchingChange={onSearchingChange} />
      </section>

      {/* Snelnavigatie per categorie */}
      <nav
        hidden={searching}
        aria-label="Drankcategorieën"
        className="sticky top-16 z-20 border-y border-wine/25 bg-cream-dim/95 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-3 sm:px-6">
          <div className="flex gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="min-h-11 whitespace-nowrap rounded-sm px-4 py-2 type-label text-ink/70 ring-1 ring-ink/15 transition-colors hover:bg-wine hover:text-cream hover:ring-wine"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div hidden={searching}>
        {sections.map((s) => (
          <DrinkSection
            key={s.id}
            id={s.id}
            eyebrow={s.eyebrow}
            title={s.title}
            intro={s.intro}
            tone={s.tone}
            dense={s.dense}
            items={drinks.filter((d) => d.category === s.category)}
          />
        ))}

        <section className="bg-oak py-14">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="font-script text-4xl leading-none text-brass">Proost</p>
            <p className="mx-auto mt-4 max-w-[46ch] text-sm leading-relaxed text-paper/75">
              Staat je drankje er niet bij? Vraag het gewoon aan de bar — de kans is groot dat we
              het gewoon voor je inschenken.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
