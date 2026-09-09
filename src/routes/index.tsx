import { createFileRoute, Link } from "@tanstack/react-router";
import { Beer, MapPin, Users, Heart } from "lucide-react";
import { Ornament } from "../components/ornament";
import { Reveal } from "../components/reveal";
import { MapConsent } from "../components/map-consent";
import { AmbientHero, AmbientPanel } from "../components/ambient";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stadscafé — Bruin café en speciaalbier in Dordrecht" },
      {
        name: "description",
        content:
          "Een gezellig bruin café in het hart van Dordrecht. Speciaalbier van de tap, ambachtelijke happen en een warme sfeer. Loop gerust binnen.",
      },
      { property: "og:title", content: "Stadscafé — Bruin café in Dordrecht" },
      {
        property: "og:description",
        content:
          "Speciaalbier, borrelhapjes en een warme kroegsfeer aan het Scheffersplein.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://de-scheffers-spot.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://de-scheffers-spot.lovable.app/" }],
  }),
  component: Home,
});

const taps = [
  {
    name: "Gouwe Ary",
    note: "Ons eigen huisbier: goudblond, zacht van mout en met een frisse afdronk.",
    tag: "Huisbier",
    variant: "amber" as const,
  },
  {
    name: "Heineken pilsener",
    note: "Vertrouwde pils, koud getapt met een stevige schuimkraag. Fluitje, vaas of pul.",
    tag: "Klassiek",
    variant: "glass" as const,
  },
  {
    name: "Wisselende tapkranen",
    note: "Van blond tot stout, iets nieuws of iets vertrouwds. Vraag onze bediening wat er nu staat.",
    tag: "Wisselend",
    variant: "copper" as const,
  },
];

const reasons = [
  {
    icon: Beer,
    title: "Een ruime bierkaart",
    text: "Van huisbier Gouwe Ary tot trappisten, IPA's, sours en alcoholvrij. Voor elk moment het juiste glas.",
  },
  {
    icon: Users,
    title: "Kom zoals je bent",
    text: "Aan de bar, aan een tafel of op het terras — bij ons is iedereen welkom, alleen of met een club.",
  },
  {
    icon: Heart,
    title: "Ambachtelijke happen",
    text: "Bitterballen, olijven, fuet en kaas — eerlijk werk, om lekker met z'n allen te delen.",
  },
  {
    icon: MapPin,
    title: "Hartje Dordrecht",
    text: "Aan het Scheffersplein, tussen de terrassen. Zo naar binnen gelopen na het winkelen of een wandeling langs de haven.",
  },
];

const hours = [
  ["Maandag", "Gesloten"],
  ["Dinsdag – donderdag", "11:00 — 00:00"],
  ["Vrijdag – zaterdag", "11:00 — 01:00"],
  ["Zondag", "12:00 — 23:00"],
];

function Home() {
  return (
    <>
      {/* Hero — abstracte, in code gemaakte sfeer: amber gloed, koperlijnen, bubbels */}
      <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-oak md:min-h-[92vh]">
        <AmbientHero />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-oak/55 via-oak/25 to-oak" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 font-script type-eyebrow text-brass animate-fade-in">Welkom bij</p>
          <p className="mb-8 type-label text-paper/75 animate-fade-in">Scheffersplein · Dordrecht</p>
          <h1 className="mx-auto mb-6 max-w-[18ch] text-balance type-h1 text-paper animate-fade-up">
            Een goed glas bier{" "}
            <span className="font-script normal-case text-brass" style={{ textTransform: "none" }}>
              &amp;
            </span>{" "}
            een goed gesprek
          </h1>
          <p className="mb-8 type-label text-brass animate-fade-up">Oude ziel. Nieuwe verhalen.</p>
          <p className="mx-auto mb-10 max-w-[54ch] text-pretty type-body text-paper/85 animate-fade-up">
            Stadscafé is een gewoon, gezellig bruin café in hartje Dordrecht. Speciaalbier van de
            tap, ambachtelijke happen en tijd voor een praatje.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row">
            <Link
              to="/bierkaart"
              className="rounded-sm bg-wine px-8 py-4 type-label text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-wine-dim"
            >
              Ontdek onze bierkaart
            </Link>
            <Link
              to="/contact"
              className="rounded-sm px-8 py-4 type-label text-paper ring-1 ring-paper/40 transition-all duration-300 hover:-translate-y-0.5 hover:text-brass hover:ring-brass"
            >
              Route &amp; openingstijden
            </Link>
          </div>
        </div>
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/60 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
          <span className="h-8 w-px bg-brass/60" />
        </div>
      </section>

      {/* Introductie */}
      <section className="warm-grain bg-paper py-20 text-oak md:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="mb-4 block font-script type-eyebrow text-brass-dim">Kom binnen</span>
          </Reveal>
          <Reveal delay={60}>
            <Ornament tone="wine" className="mb-6" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-8 text-balance type-h2 text-oak">Een café zoals ze vroeger waren</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto max-w-[60ch] text-pretty type-body text-oak/80">
              Bij ons hoeft niks. Neem plaats aan de bar, schuif aan bij vrienden of pak een
              tafeltje bij het raam. We schenken graag een goed glas, praten mee als je zin hebt en
              laten je met rust als dat lekkerder is. Zo simpel is het.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Van de tap */}
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <div>
                <span className="mb-3 block font-script type-eyebrow text-brass">Van de tap</span>
                <h2 className="type-h2 text-paper">Vers getapt, elke dag</h2>
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
                <article className="card-cozy hover-lift group flex h-full flex-col overflow-hidden bg-oak-light ring-1 ring-border">
                  <div className="relative aspect-[4/5] w-full">
                    <AmbientPanel variant={c.variant} seed={i + 2} />
                    <span className="absolute left-4 top-4 rounded-sm bg-brass px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-oak">
                      {c.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 type-h3 text-paper">{c.name}</h3>
                    <p className="text-pretty text-sm leading-relaxed text-paper/85">{c.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sfeer in het glas — abstracte panelen in plaats van foto's */}
      <section className="relative overflow-hidden bg-oak-light section-y">
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
                <span className="mb-3 block font-script type-eyebrow text-brass">
                  Sfeer in het glas
                </span>
                <h2 className="type-h2 text-paper">Amberkleurig licht, koper en koud condens</h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[52ch] text-pretty type-body text-paper/85">
                Een abstract sfeerbeeld van hoe het bij ons voelt: gouden tinten tegen donker hout,
                een schuimkraag die net afzakt en licht dat langs het glas glijdt. Getekend in code,
                geen foto's.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:grid-rows-3 sm:[grid-auto-flow:dense] md:h-[640px]">
            <Reveal className="sm:col-span-2 sm:row-span-2">
              <div className="relative h-full overflow-hidden rounded-sm ring-1 ring-border">
                <AmbientPanel variant="tap" seed={3} bubbleCount={14} aspect="4 / 3" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-oak/90 via-oak/20 to-transparent p-6">
                  <span className="font-script type-eyebrow text-brass">Van de tap</span>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-paper/80">
                    Vers ingeschonken
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <AmbientPanel variant="copper" seed={4} aspect="1 / 1" className="ring-1 ring-border" />
            </Reveal>
            <Reveal delay={140}>
              <AmbientPanel variant="wine" seed={5} aspect="1 / 1" className="ring-1 ring-border" />
            </Reveal>
            <Reveal delay={200} className="sm:col-span-2">
              <AmbientPanel variant="light" seed={6} aspect="16 / 9" className="ring-1 ring-border" />
            </Reveal>
            <Reveal delay={260}>
              <AmbientPanel variant="foam" seed={7} aspect="1 / 1" className="ring-1 ring-border" />
            </Reveal>
          </div>

          <Reveal delay={200}>
            <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              {["Schuimkraag", "Amber", "Koper", "Kaarslicht", "Donker hout", "Condens"].map(
                (w, i) => (
                  <li
                    key={w}
                    className={`font-script text-2xl md:text-3xl ${i % 2 === 0 ? "text-brass" : "text-mustard"}`}
                  >
                    {w}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Waarom Stadscafé */}
      <section className="bg-oak-light section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="mb-3 block font-script type-eyebrow text-brass">
                Waarom Stadscafé
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto max-w-[24ch] type-h2 text-paper">
                Vier redenen om aan te schuiven
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="card-cozy hover-lift h-full bg-oak p-8 ring-1 ring-border transition-colors hover:ring-brass/40">
                  <r.icon size={28} strokeWidth={1.5} className="mb-6 text-brass" aria-hidden />
                  <h3 className="mb-3 type-h3 text-paper">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-paper/80">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sfeerimpressie */}
      <section className="bg-oak section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <AmbientPanel
              variant="amber"
              seed={9}
              aspect="4 / 3"
              bubbleCount={12}
              className="ring-1 ring-border"
            />
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="mb-4 block font-script type-eyebrow text-brass">Sfeer</span>
              <h2 className="mb-6 type-h2 text-paper">Hout, koper en warm licht</h2>
              <p className="mb-4 text-pretty type-body text-paper/85">
                Donkere houten tafels, koperen tapkranen en verlichting die alles zachter maakt. In
                de zomer schuiven we het terras uit op het Scheffersplein, in de winter zit je
                binnen bij de warme lampen.
              </p>
              <p className="mb-8 text-pretty type-body text-paper/85">
                Levendig als het druk is, rustig als je even bij wilt komen. Zo hoort een bruin café
                te voelen.
              </p>
              <Link
                to="/galerij"
                className="inline-block border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass"
              >
                Bekijk de sfeergalerij →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Openingstijden + route */}
      <section className="bg-oak section-y">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="card-cozy h-full bg-wine p-8 text-paper ring-1 ring-wine-dim md:p-12">
              <p className="mb-2 font-script type-eyebrow text-mustard">Wanneer</p>
              <h2 className="mb-8 type-h2 text-paper">Openingstijden</h2>
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
                Loop gerust binnen. We werken niet met reserveringen — er staat een plek voor je
                klaar als die vrij is.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="h-full">
              <div className="mb-6 flex items-center gap-3">
                <MapPin size={18} className="text-brass" aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brass">
                  Vind ons
                </span>
              </div>
              <h2 className="mb-6 type-h2 text-paper">Hartje Dordrecht</h2>
              <div className="aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-border">
                <MapConsent />
              </div>
              <p className="mt-6 text-sm text-paper/80">
                Scheffersplein 12, 3311 PX Dordrecht — op enkele minuten lopen van het centrum.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
