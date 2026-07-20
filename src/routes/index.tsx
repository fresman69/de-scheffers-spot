import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin, Star } from "lucide-react";
import { PhotoPlaceholder } from "../components/photo-placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stadscafé Rijke & Zn. — Speciaalbier op het Scheffersplein Dordrecht" },
      {
        name: "description",
        content:
          "Dé ontmoetingsplek op het Scheffersplein. Speciaalbier, wijn, borrelhapjes en de gezellige sfeer van Dordrecht.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featuredBeers = [
  {
    name: "Rochefort 8",
    brewery: "Trappistes Rochefort",
    abv: "9.2%",
    temp: "12°C",
    note: "Diepbruin, aroma's van vijgen en pure chocolade. Complexe klassieker.",
  },
  {
    name: "Schapenkop Blond",
    brewery: "Stadsbrouwerij Dordrecht",
    abv: "7.0%",
    temp: "7°C",
    note: "Lokaal gebrouwen. Fris, fruitig met een licht bittere afdronk.",
  },
  {
    name: "Tripel Karmeliet",
    brewery: "Brouwerij Bosteels",
    abv: "8.4%",
    temp: "8°C",
    note: "Verfijnd en elegant met granige tonen. Tijdloze favoriet aan de tap.",
  },
];

const hours = [
  ["Maandag", "Gesloten"],
  ["Dinsdag – Donderdag", "11:00 — 00:00"],
  ["Vrijdag – Zaterdag", "11:00 — 01:00"],
  ["Zondag", "12:00 — 23:00"],
];

const events = [
  { m: "Mei", d: "12", title: "Live Jazz op de Zondag", meta: "Vanaf 15:00 · Toegang gratis" },
  { m: "Mei", d: "25", title: "Dordtse Pubquiz", meta: "Aanvang 20:30 · Teams van 5" },
  { m: "Jun", d: "02", title: "Speciaalbier Proeverij", meta: "Met Brouwerij 't IJ · Reserveren" },
];

const reviews = [
  { name: "Sanne V.", text: "De sfeer, de bediening en die bierkaart — écht Dordts genieten.", src: "Google" },
  { name: "Martijn D.", text: "Beste terras van de stad. Altijd goed bier op de tap.", src: "Tripadvisor" },
  { name: "Eva K.", text: "Warme, klassieke kroeg met een enorm hart voor ambacht.", src: "Google" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-oak">
        <div className="absolute inset-0 bg-gradient-to-b from-oak-light via-oak to-oak" />
        <div className="absolute inset-4 opacity-40 sm:inset-8">
          <PhotoPlaceholder label="Sfeerfoto café — nog toe te voegen" className="h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-oak/60 via-oak/30 to-oak" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass animate-fade-in">
            Sinds mensenheugenis · Scheffersplein
          </p>
          <h1 className="mx-auto mb-8 max-w-[22ch] text-balance font-display text-5xl leading-[1.05] text-paper md:text-7xl animate-fade-up">
            Dé ontmoetingsplek op het Scheffersplein.
          </h1>
          <p className="mx-auto mb-10 max-w-[50ch] text-pretty text-lg leading-relaxed text-paper/85 md:text-xl animate-fade-up">
            Geniet van speciaalbier, goede wijn, borrelhapjes en de gezellige sfeer van één van
            de bekendste cafés van Dordrecht.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up">
            <Link
              to="/reserveren"
              className="w-full rounded-sm bg-brass px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-oak transition-colors hover:bg-paper sm:w-auto"
            >
              Reserveer een tafel
            </Link>
            <Link
              to="/bierkaart"
              className="w-full rounded-sm px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-paper ring-1 ring-paper/40 transition-colors hover:ring-paper sm:w-auto"
            >
              Bekijk onze bieren
            </Link>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="bg-paper py-24 text-oak">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-brass-dim">
              Ambacht &amp; Gastvrijheid
            </span>
            <h2 className="mb-8 max-w-[35ch] text-balance font-display text-4xl leading-tight md:text-5xl">
              Een huiskamer in het hart van de stad waar historie en vriendschap samenkomen.
            </h2>
            <p className="mb-12 max-w-[60ch] text-pretty text-lg text-oak/80">
              Stadscafé Rijke &amp; Zn. is geworteld in de Dordtse geschiedenis. Met onze passie
              voor ambachtelijke bieren en oprechte gastvrijheid bieden wij een plek waar de
              tijd even stilstaat — donker hout, koperen tapkranen en een warme sfeer.
            </p>
          </div>
          <PhotoPlaceholder tone="light" aspect="21 / 9" label="Detail bar — nog toe te voegen" />
        </div>
      </section>

      {/* Sfeerimpressie */}
      <section className="bg-oak py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <PhotoPlaceholder aspect="4 / 3" label="Terrasfoto — nog toe te voegen" />
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-brass">
              Sfeerimpressie
            </span>
            <h2 className="mb-6 font-display text-4xl text-paper md:text-5xl">
              Terras, bar en donkerhouten zalen.
            </h2>
            <p className="mb-6 text-pretty text-muted-foreground">
              Van een zonovergoten borrel op het grootste terras van Dordrecht tot een
              zwoele avond aan de tap onder koperen lampen — bij ons vindt elke gast zijn
              eigen plek.
            </p>
            <Link
              to="/galerij"
              className="inline-block border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass"
            >
              Bekijk de galerij →
            </Link>
          </div>
        </div>
      </section>

      {/* Uitgelichte bieren */}
      <section className="bg-oak py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brass">
                Van de tap
              </span>
              <h2 className="font-display text-4xl text-paper md:text-5xl">
                Uitgelichte speciaalbieren
              </h2>
            </div>
            <Link
              to="/bierkaart"
              className="border-b border-brass/40 pb-1 text-sm font-medium text-brass hover:border-brass"
            >
              Volledige bierkaart →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredBeers.map((b) => (
              <article
                key={b.name}
                className="group flex flex-col rounded-sm bg-oak-light p-6 ring-1 ring-border transition-all hover:ring-brass/40"
              >
                <PhotoPlaceholder aspect="4 / 5" className="mb-6" label="Bierfoto volgt" />
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-paper">{b.name}</h3>
                  <span className="shrink-0 font-medium text-brass">{b.abv}</span>
                </div>
                <p className="mb-5 text-sm text-muted-foreground">
                  {b.brewery} · {b.temp}
                </p>
                <p className="text-pretty text-sm leading-relaxed text-paper/85">{b.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Openingstijden & Agenda */}
      <section className="bg-paper py-24 text-oak">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div className="rounded-sm bg-white p-10 ring-1 ring-black/5 md:p-12">
            <h2 className="mb-10 font-display text-4xl">Openingstijden</h2>
            <div className="space-y-4 border-t border-black/5 pt-8">
              {hours.map(([d, t]) => (
                <div key={d} className="flex justify-between border-b border-black/5 pb-3">
                  <span className="font-medium">{d}</span>
                  <span className="text-oak/75">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-4xl">Agenda</h2>
              <Link
                to="/evenementen"
                className="border-b border-brass-dim/40 pb-1 text-sm font-medium text-brass-dim hover:border-brass-dim"
              >
                Alles →
              </Link>
            </div>
            <div className="space-y-6">
              {events.map((e) => (
                <div key={e.title} className="group flex gap-6">
                  <div className="flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-sm bg-oak text-paper ring-1 ring-black/5">
                    <span className="text-xs uppercase tracking-widest text-brass">{e.m}</span>
                    <span className="font-display text-2xl">{e.d}</span>
                  </div>
                  <div className="min-w-0 pt-2">
                    <h3 className="font-display text-xl transition-colors group-hover:text-brass-dim">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-sm text-oak/75">{e.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-oak-light py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brass">
              Wat gasten zeggen
            </span>
            <h2 className="mx-auto max-w-[24ch] font-display text-4xl text-paper md:text-5xl">
              Gastvrij, ambachtelijk, Dordts.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-sm bg-oak p-8 ring-1 ring-border">
                <div className="mb-4 flex gap-1 text-brass">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="font-display text-xl leading-snug text-paper">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                  {r.name} · {r.src}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram + Kaart */}
      <section className="bg-paper py-24 text-oak">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <Instagram size={18} className="text-brass-dim" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-dim">
                @rijke_zn
              </span>
            </div>
            <h2 className="mb-8 font-display text-4xl">Sfeer op Instagram</h2>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <PhotoPlaceholder key={i} tone="light" aspect="1 / 1" label="Instagram post" />
              ))}
            </div>
            <p className="mt-4 text-xs text-oak/75">
              Koppeling met de officiële Instagram-feed van Rijke &amp; Zn. wordt aangesloten
              zodra het account is geverifieerd.
            </p>
          </div>
          <div>
            <div className="mb-8 flex items-center gap-3">
              <MapPin size={18} className="text-brass-dim" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brass-dim">
                Vind ons
              </span>
            </div>
            <h2 className="mb-8 font-display text-4xl">Hartje Dordrecht</h2>
            <div className="aspect-[4/3] overflow-hidden rounded-sm ring-1 ring-black/10">
              <iframe
                title="Kaart Scheffersplein Dordrecht"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.6870%2C51.8130%2C4.6930%2C51.8160&layer=mapnik&marker=51.8145%2C4.6900"
                className="h-full w-full grayscale-[0.3]"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-sm text-oak/80">
              Scheffersplein 12, 3311 PX Dordrecht — op 3 minuten lopen van station Dordrecht Centrum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
