import { createFileRoute, Link } from "@tanstack/react-router";
import { Beer, Instagram, MapPin, Star, Users, Heart } from "lucide-react";
import { PhotoPlaceholder } from "../components/photo-placeholder";
import { Ornament } from "../components/ornament";
import { Reveal } from "../components/reveal";
import interieurCafe from "../assets/interieur-cafe.jpg.asset.json";
import gevelCafe from "../assets/gevel-cafe.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StadsCafe — Bruin café en speciaalbier in Dordrecht" },
      {
        name: "description",
        content:
          "Een gezellig bruin café in het hart van Dordrecht. Speciaalbier van de tap, ambachtelijke happas en een warme sfeer. Loop gerust binnen.",
      },
      { property: "og:title", content: "StadsCafe — Bruin café in Dordrecht" },
      {
        property: "og:description",
        content:
          "Speciaalbier, borrelhapjes en een warme kroegsfeer aan het Scheffersplein.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const taps = [
  {
    name: "Gouwe Ary",
    note: "Ons huisbier — blonde tap die er altijd is.",
    tag: "Vast op de tap",
  },
  {
    name: "Heineken Pilsener",
    note: "Vaas of fluit, zoals het hoort. Voor de trouwe pilsdrinker.",
    tag: "Klassiek",
  },
  {
    name: "6 wisselende tapkranen",
    note: "Van blond tot stout, iets nieuws of iets vertrouwds. Vraag onze bediening wat er staat.",
    tag: "Wisselend",
  },
];

const reasons = [
  {
    icon: Beer,
    title: "Meer dan zestig bieren",
    text: "Van huisbier Gouwe Ary tot trappisten, IPA's, sours en alcoholvrij. Voor elk moment het juiste glas.",
  },
  {
    icon: Users,
    title: "Kom zoals je bent",
    text: "Aan de bar, aan een tafel of op het terras — bij ons is iedereen welkom, alleen of met een club.",
  },
  {
    icon: Heart,
    title: "Ambachtelijke happas",
    text: "Bourgondiër bitterballen, olijven, fuet, kaas — eerlijk werk, om lekker met z'n allen te delen.",
  },
  {
    icon: MapPin,
    title: "Hartje Dordrecht",
    text: "Aan het Scheffersplein, tussen de terrassen. Zo naar binnen gelopen na het winkelen of een wandeling langs de haven.",
  },
];

const hours = [
  ["Maandag", "Gesloten"],
  ["Dinsdag – Donderdag", "11:00 — 00:00"],
  ["Vrijdag – Zaterdag", "11:00 — 01:00"],
  ["Zondag", "12:00 — 23:00"],
];

const reviews = [
  { name: "Sanne V.", text: "Warm, gezellig en een geweldige bierkaart. Voelt echt als een tweede huiskamer.", src: "Google" },
  { name: "Martijn D.", text: "Fijne kroeg met eerlijke bediening en een terras dat er in de zomer altijd is.", src: "Tripadvisor" },
  { name: "Eva K.", text: "Klassiek bruin café met een enorm hart voor bier. Kom hier vaak terug.", src: "Google" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-oak md:min-h-[92vh]">
        <div className="absolute inset-0" data-video-slot="hero">
          <img
            src={gevelCafe.url}
            alt="Gevel van StadsCafe aan het Scheffersplein in Dordrecht"
            className="h-full w-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-oak/80 via-oak/45 to-oak" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-4 font-script text-5xl leading-none text-brass animate-fade-in md:text-6xl">
            Welkom bij
          </p>
          <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-paper/70 animate-fade-in">
            Scheffersplein · Dordrecht
          </p>
          <h1 className="mx-auto mb-8 max-w-[22ch] text-balance font-display-condensed text-5xl leading-[0.95] tracking-wider text-paper animate-fade-up md:text-7xl lg:text-8xl">
            Een goed glas bier &amp; een goed gesprek.
          </h1>
          <p className="mx-auto mb-10 max-w-[54ch] text-pretty text-lg leading-relaxed text-paper/85 animate-fade-up md:text-xl">
            StadsCafe is een gewoon, gezellig bruin café in hartje Dordrecht.
            Speciaalbier van de tap, ambachtelijke happas en tijd voor een praatje.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row">
            <Link
              to="/bierkaart"
              className="rounded-sm bg-wine px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-wine-dim"
            >
              Ontdek onze bierkaart
            </Link>
            <Link
              to="/contact"
              className="rounded-sm px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-paper ring-1 ring-paper/30 transition-all duration-300 hover:-translate-y-0.5 hover:text-brass hover:ring-brass"
            >
              Route &amp; openingstijden
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-brass/60" />
        </div>
      </section>

      {/* Introductie — de gastheer aan het woord */}
      <section className="bg-paper py-20 text-oak md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="mb-4 block font-script text-4xl leading-none text-brass-dim md:text-5xl">
              Kom binnen
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-8 text-balance font-display-condensed text-4xl leading-tight tracking-wider text-oak md:text-6xl">
              Een café zoals ze vroeger waren
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto max-w-[60ch] text-pretty text-lg leading-relaxed text-oak/80 md:text-xl">
              Bij ons hoeft niks. Neem plaats aan de bar, schuif aan bij vrienden of pak
              een tafeltje bij het raam. We schenken graag een goed glas, praten mee als je
              zin hebt en laten je met rust als dat lekkerder is. Zo simpel is het.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bier centraal — Van de tap */}
      <section className="bg-oak py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <div>
                <span className="mb-3 block font-script text-4xl leading-none text-brass md:text-5xl">
                  Van de tap
                </span>
                <h2 className="font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                  Vers getapt, elke dag
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/bierkaart"
                className="border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass"
              >
                Volledige bierkaart →
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {taps.map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-sm bg-oak-light ring-1 ring-border">
                  <div className="zoom-image relative aspect-[4/5] w-full bg-oak/60">
                    <PhotoPlaceholder aspect="4 / 5" label={`Foto ${c.name}`} />
                    <span className="absolute left-4 top-4 rounded-sm bg-brass px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-oak">
                      {c.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 font-display-condensed text-2xl tracking-wider text-paper">
                      {c.name}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-paper/85">{c.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sfeer in het glas — moodboard geïnspireerd op onze Pinterest 'Drank StadsCafe' */}
      <section className="relative overflow-hidden bg-oak-light py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 10%, var(--brass) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, var(--wine) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <Reveal>
              <div>
                <span className="mb-3 block font-script text-4xl leading-none text-brass md:text-5xl">
                  Sfeer in het glas
                </span>
                <h2 className="font-display-condensed text-4xl leading-tight tracking-wider text-paper md:text-5xl lg:text-6xl">
                  Amberkleurig licht, koperen tap, koud condens
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[52ch] text-pretty text-lg leading-relaxed text-paper/85">
                Een moodboard van hoe het bij ons voelt: gouden bier tegen donker hout,
                schuimkraag die net afzakt, een glas dat door het licht van de kroonluchter
                oplicht. Puur, warm, en zonder poespas.
              </p>
            </Reveal>
          </div>

          {/* Bento moodboard — grote hero-tile links, drie kleinere rechts + brede onderrij */}
          <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-3 sm:[grid-auto-flow:dense] md:h-[640px]">
            <Reveal className="sm:col-span-2 sm:row-span-2">
              <div className="zoom-image relative h-full overflow-hidden rounded-sm ring-1 ring-border">
                <PhotoPlaceholder aspect="4 / 3" label="Getapt bier, gouden gloed" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-oak/90 via-oak/20 to-transparent p-6">
                  <span className="font-script text-3xl text-brass md:text-4xl">Van de tap</span>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-paper/80">
                    Gouwe Ary · vers ingeschonken
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="zoom-image h-full overflow-hidden rounded-sm ring-1 ring-border">
                <PhotoPlaceholder aspect="1 / 1" label="Koperen tapkraan detail" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="zoom-image h-full overflow-hidden rounded-sm ring-1 ring-border">
                <PhotoPlaceholder aspect="1 / 1" label="Trappist in bolvormig glas" />
              </div>
            </Reveal>
            <Reveal delay={200} className="sm:col-span-2">
              <div className="zoom-image h-full overflow-hidden rounded-sm ring-1 ring-border">
                <PhotoPlaceholder aspect="16 / 9" label="Bar bij avondlicht, glazen op rij" />
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="zoom-image h-full overflow-hidden rounded-sm ring-1 ring-border">
                <PhotoPlaceholder aspect="1 / 1" label="Gin & tonic met verse limoen" />
              </div>
            </Reveal>
          </div>

          {/* Woordwolk — kleine typografische sfeeraanduidingen */}
          <Reveal delay={200}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              {[
                "Schuimkraag",
                "Amber",
                "Koper",
                "Kaarslicht",
                "Donker hout",
                "Condens",
                "Trappist",
                "Gouwe Ary",
              ].map((w, i) => (
                <li
                  key={w}
                  className={`font-script text-2xl md:text-3xl ${i % 2 === 0 ? "text-brass" : "text-mustard"}`}
                >
                  {w}
                  {i < 7 ? <span className="ml-8 text-paper/25">·</span> : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Waarom StadsCafe */}
      <section className="bg-oak-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="mb-3 block font-script text-4xl leading-none text-brass md:text-5xl">
                Waarom StadsCafe
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto max-w-[24ch] font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                Vier redenen om aan te schuiven
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="hover-lift h-full rounded-sm bg-oak p-8 ring-1 ring-border transition-colors hover:ring-brass/40">
                  <r.icon size={28} strokeWidth={1.5} className="mb-6 text-brass" />
                  <h3 className="mb-3 font-display-condensed text-xl tracking-wider text-paper">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/80">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sfeerimpressie */}
      <section className="bg-oak py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="zoom-image overflow-hidden rounded-sm ring-1 ring-border">
              <img
                src={interieurCafe.url}
                alt="Interieur van StadsCafe — houten tafels, bierposters en warme lampen"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="mb-4 block font-script text-4xl leading-none text-brass md:text-5xl">
                Sfeer
              </span>
              <h2 className="mb-6 font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                Hout, koper en warm licht
              </h2>
              <p className="mb-4 text-pretty text-lg leading-relaxed text-paper/85">
                Donkere houten tafels, koperen tapkranen en verlichting die alles zachter maakt.
                In de zomer schuiven we het terras uit op het Scheffersplein, in de winter
                zit je binnen bij de warme lampen.
              </p>
              <p className="mb-8 text-pretty text-lg leading-relaxed text-paper/85">
                Levendig als het druk is, rustig als je even bij wilt komen. Zo hoort een
                bruin café te voelen.
              </p>
              <Link
                to="/galerij"
                className="inline-block border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass"
              >
                Bekijk de galerij →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-oak-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="mb-3 block font-script text-4xl leading-none text-brass md:text-5xl">
                Wat gasten zeggen
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto max-w-[24ch] font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                Vaste gasten &amp; nieuwe gezichten
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <figure className="hover-lift h-full rounded-sm bg-oak p-8 ring-1 ring-border">
                  <div className="mb-4 flex gap-1 text-brass">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-display text-xl leading-snug text-paper">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-[11px] uppercase tracking-widest text-paper/70">
                    {r.name} · {r.src}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-paper py-20 text-oak md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <div>
                <span className="mb-3 block font-script text-4xl leading-none text-brass-dim md:text-5xl">
                  Op Instagram
                </span>
                <h2 className="font-display-condensed text-4xl tracking-wider text-oak md:text-5xl">
                  @stadscafe_rijke
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <a
                href="https://www.instagram.com/stadscafe_rijke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-brass-dim/40 pb-1 text-sm font-medium text-brass-dim transition-colors hover:border-brass-dim"
              >
                <Instagram size={16} /> Volg ons
              </a>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="zoom-image aspect-square overflow-hidden rounded-sm">
                  <PhotoPlaceholder tone="light" aspect="1 / 1" label="Instagram post" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Openingstijden + Route */}
      <section className="bg-oak py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-sm bg-wine p-8 text-paper ring-1 ring-wine-dim md:p-12">
              <p className="mb-2 font-script text-4xl leading-none text-mustard">Wanneer</p>
              <h2 className="mb-8 font-display-condensed text-3xl tracking-wider text-paper md:text-4xl">
                Openingstijden
              </h2>
              <div className="space-y-4">
                {hours.map(([d, t]) => (
                  <div key={d} className="flex items-end gap-3">
                    <span className="font-display-condensed text-base tracking-widest">{d}</span>
                    <span aria-hidden className="mb-[3px] h-[6px] flex-1 leader-dots text-paper/40" />
                    <span className="font-display-condensed text-base tracking-widest text-mustard">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-paper/85">
                Loop gerust binnen. We werken niet met reserveringen — er staat een plek voor je klaar
                als die vrij is.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="h-full">
              <div className="mb-6 flex items-center gap-3">
                <MapPin size={18} className="text-brass" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
                  Vind ons
                </span>
              </div>
              <h2 className="mb-6 font-display-condensed text-3xl tracking-wider text-paper md:text-4xl">
                Hartje Dordrecht
              </h2>
              <div className="aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-border">
                <iframe
                  title="Kaart Scheffersplein Dordrecht"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=4.6870%2C51.8130%2C4.6930%2C51.8160&layer=mapnik&marker=51.8145%2C4.6900"
                  className="h-full w-full grayscale-[0.3]"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 text-sm text-paper/80">
                Scheffersplein 12, 3311 PX Dordrecht — op 3 minuten lopen van station Dordrecht Centrum.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
