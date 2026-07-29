import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Instagram, MapPin, Sparkles, Star, UtensilsCrossed, Wine } from "lucide-react";
import { PhotoPlaceholder } from "../components/photo-placeholder";
import { VideoPlaceholder } from "../components/video-placeholder";
import { Reveal } from "../components/reveal";
import { WhatsAppButton } from "../components/whatsapp-button";
import interieurCafe from "../assets/interieur-cafe.jpg.asset.json";
import gevelCafe from "../assets/gevel-cafe.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StadsCafe — Cocktails, wijn & shared dining op het Scheffersplein" },
      {
        name: "description",
        content:
          "Signature cocktails, zorgvuldig gekozen wijnen, shared dining en de warmste sfeer van Dordrecht. Reserveer eenvoudig via WhatsApp.",
      },
      { property: "og:title", content: "StadsCafe — Scheffersplein, Dordrecht" },
      {
        property: "og:description",
        content: "Signature cocktails, wijn, shared dining en sfeer. Reserveer via WhatsApp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const signatures = [
  {
    name: "Gouwe Ary",
    note: "Signature van het huis — geflambeerde sinaasappelschil, honing en gin.",
    tag: "Signature",
  },
  {
    name: "Merwedes Old-Fashioned",
    note: "Rye whisky, gerookte suikersiroop en huisgemaakte bitters.",
    tag: "Klassiek",
  },
  {
    name: "Scheffers Spritz",
    note: "Franciacorta, wilde tijm, elderflower — de zomer op glas.",
    tag: "Terras",
  },
];

const dishes = [
  { name: "Shared Dining — Chef's board", note: "Selectie van tapas, pintxos en oesters — samen delen." },
  { name: "Bourgondiër bitterballen", note: "Klassiek, met graanmosterd en warm brood." },
  { name: "Zeeuwse oesters", note: "Uit de Grevelingen, met sjalot-vinaigrette." },
];

const reasons = [
  {
    icon: Wine,
    title: "Zorgvuldig gekozen",
    text: "Wijnen, gedistilleerd en speciaalbieren die onze sommelier zelf zou schenken.",
  },
  {
    icon: UtensilsCrossed,
    title: "Ambachtelijk gerecht",
    text: "Shared dining met verse, seizoensgebonden ingrediënten van lokale leveranciers.",
  },
  {
    icon: Sparkles,
    title: "Signature cocktails",
    text: "Van klassieke Old-Fashioned tot eigen creaties — geshaked met vakmanschap.",
  },
  {
    icon: Award,
    title: "Hartje Scheffersplein",
    text: "Het historische kloppende hart van Dordrecht — al generaties lang.",
  },
];

const hours = [
  ["Maandag", "Gesloten"],
  ["Dinsdag – Donderdag", "11:00 — 00:00"],
  ["Vrijdag – Zaterdag", "11:00 — 01:00"],
  ["Zondag", "12:00 — 23:00"],
];

const events = [
  { date: "Elke donderdag", title: "Wijn & Vinyl", note: "Sommelier + platenspeler, vanaf 20:00." },
  { date: "Elke laatste vrijdag", title: "Cocktail Lab", note: "Signature masterclass — reserveren aanbevolen." },
  { date: "Zondagmiddag", title: "Shared Dining", note: "Chef's board voor het hele gezelschap." },
];

const reviews = [
  { name: "Sanne V.", text: "De sfeer, de bediening en die kaart — écht Dordts genieten.", src: "Google" },
  { name: "Martijn D.", text: "Beste terras van de stad. Cocktails van topniveau.", src: "Tripadvisor" },
  { name: "Eva K.", text: "Warme, klassieke bar met een enorm hart voor ambacht.", src: "Google" },
];

function Home() {
  return (
    <>
      {/* Hero — cinematische video met eigen gevel als poster tot de video geleverd wordt */}
      <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-oak md:min-h-[92vh]">
        <VideoPlaceholder fullscreen poster={gevelCafe.url}>
          <img
            src={gevelCafe.url}
            alt="Gevel van StadsCafe aan het Scheffersplein in Dordrecht"
            className="h-full w-full object-cover opacity-60"
          />
        </VideoPlaceholder>
        <div className="absolute inset-0 bg-gradient-to-b from-oak/75 via-oak/40 to-oak" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-4 font-script text-5xl leading-none text-brass animate-fade-in md:text-6xl">
            Sinds mensenheugenis
          </p>
          <p className="mb-8 text-[11px] uppercase tracking-[0.4em] text-paper/70 animate-fade-in">
            Scheffersplein · Dordrecht
          </p>
          <h1 className="mx-auto mb-8 max-w-[22ch] text-balance font-display-condensed text-5xl leading-[0.95] tracking-wider text-paper animate-fade-up md:text-7xl lg:text-8xl">
            Cocktails, wijn &amp; shared dining.
          </h1>
          <p className="mx-auto mb-10 max-w-[52ch] text-pretty text-lg leading-relaxed text-paper/85 animate-fade-up md:text-xl">
            Dé ontmoetingsplek op het Scheffersplein — waar signature cocktails,
            zorgvuldig gekozen wijnen en warm ambacht samenkomen.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row">
            <WhatsAppButton size="lg" label="Reserveer via WhatsApp" />
            <Link
              to="/bierkaart"
              className="rounded-sm px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-paper ring-1 ring-paper/30 transition-all duration-300 hover:-translate-y-0.5 hover:text-brass hover:ring-brass"
            >
              Bekijk de kaart
            </Link>
          </div>
        </div>
        {/* Scroll-hint */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-brass/60" />
        </div>
      </section>

      {/* Introductie */}
      <section className="bg-paper py-20 text-oak md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="mb-4 block font-script text-4xl leading-none text-brass-dim md:text-5xl">
              Welkom bij
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-8 text-balance font-display-condensed text-4xl leading-tight tracking-wider text-oak md:text-6xl">
              StadsCafe
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto max-w-[60ch] text-pretty text-lg leading-relaxed text-oak/80 md:text-xl">
              Een huiskamer in het hart van Dordrecht waar historie en ambacht samenkomen.
              Van vroege koffie tot late nachtcocktail — bij ons vindt elke gast zijn moment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Reserveer via WhatsApp — vol-breed accentblok */}
      <section className="bg-oak py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="grid gap-8 rounded-sm bg-wine p-8 text-paper ring-1 ring-wine-dim md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12 md:p-12">
              <div className="min-w-0">
                <p className="mb-2 font-script text-3xl leading-none text-mustard md:text-4xl">Direct een tafel</p>
                <h2 className="mb-3 font-display-condensed text-3xl tracking-wider md:text-4xl">
                  Reserveer eenvoudig via WhatsApp
                </h2>
                <p className="text-pretty text-paper/85">
                  Stuur ons een berichtje met datum, tijd en het aantal personen — je krijgt binnen
                  enkele minuten bevestiging van ons team.
                </p>
              </div>
              <WhatsAppButton size="lg" className="justify-self-start md:justify-self-end" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="bg-oak py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <div>
                <span className="mb-3 block font-script text-4xl leading-none text-brass md:text-5xl">
                  Signature cocktails
                </span>
                <h2 className="font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                  Geshaked met vakmanschap
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/dranken"
                className="border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass"
              >
                Volledige cocktailkaart →
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {signatures.map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-sm bg-oak-light ring-1 ring-border">
                  <div className="zoom-image relative aspect-[4/5] w-full bg-oak/60">
                    <PhotoPlaceholder aspect="4 / 5" label={`Foto ${c.name}`} />
                    <span className="absolute left-4 top-4 rounded-sm bg-mustard px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-oak">
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

      {/* Cinematische video-strook — cocktails shaken */}
      <section className="bg-oak">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <Reveal>
            <VideoPlaceholder
              aspect="21 / 9"
              label="Video: cocktail shaken achter de bar"
            />
          </Reveal>
        </div>
      </section>

      {/* Uitgelichte gerechten */}
      <section className="bg-paper py-20 text-oak md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <span className="mb-3 block font-script text-4xl leading-none text-brass-dim md:text-5xl">
                Uit de keuken
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display-condensed text-4xl tracking-wider text-oak md:text-5xl">
                Shared dining, tapas &amp; oesters
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dishes.map((d, i) => (
              <Reveal key={d.name} delay={i * 120}>
                <article className="hover-lift group overflow-hidden rounded-sm bg-white ring-1 ring-oak/10">
                  <div className="zoom-image aspect-[4/3] w-full">
                    <PhotoPlaceholder tone="light" aspect="4 / 3" label={`Foto ${d.name}`} />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 font-display-condensed text-xl tracking-wider text-oak">
                      {d.name}
                    </h3>
                    <p className="text-sm text-oak/75">{d.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom StadsCafe */}
      <section className="bg-oak py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="mb-3 block font-script text-4xl leading-none text-brass md:text-5xl">
                Waarom
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto max-w-[24ch] font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                Vier redenen om terug te komen
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="hover-lift h-full rounded-sm bg-oak-light p-8 ring-1 ring-border transition-colors hover:ring-brass/40">
                  <r.icon size={28} strokeWidth={1.5} className="mb-6 text-brass" />
                  <h3 className="mb-3 font-display-condensed text-xl tracking-wider text-paper">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/75">{r.text}</p>
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
                alt="Interieur van StadsCafe — vintage bierposters, kroonluchter en bistrotafeltjes"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="mb-4 block font-script text-4xl leading-none text-brass md:text-5xl">
                Sfeerimpressie
              </span>
              <h2 className="mb-6 font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                Terras, bar en donkerhouten zalen
              </h2>
              <p className="mb-8 text-pretty text-lg leading-relaxed text-paper/80">
                Van een zonovergoten borrel op het grootste terras van Dordrecht tot een zwoele
                avond aan de bar onder koperen lampen — bij ons vindt elke gast zijn eigen plek.
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

      {/* Evenementen */}
      <section className="bg-oak-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <span className="mb-3 block font-script text-4xl leading-none text-mustard md:text-5xl">
                Terugkerend
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                Evenementen bij StadsCafe
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <article className="hover-lift group flex h-full flex-col rounded-sm bg-oak p-8 ring-1 ring-border transition-colors hover:ring-mustard/40">
                  <span className="mb-4 text-[10px] uppercase tracking-[0.3em] text-mustard">
                    {e.date}
                  </span>
                  <h3 className="mb-3 font-display-condensed text-2xl tracking-wider text-paper">
                    {e.title}
                  </h3>
                  <p className="text-sm text-paper/75">{e.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-oak py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="mb-3 block font-script text-4xl leading-none text-brass md:text-5xl">
                Wat gasten zeggen
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto max-w-[24ch] font-display-condensed text-4xl tracking-wider text-paper md:text-5xl">
                Gastvrij, ambachtelijk, Dordts
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <figure className="hover-lift h-full rounded-sm bg-oak-light p-8 ring-1 ring-border">
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

      {/* Openingstijden + Route in één rustige, brede sectie */}
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
                Scheffersplein 12, 3311 PX Dordrecht — op 3 minuten lopen van station Dordrecht
                Centrum.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
