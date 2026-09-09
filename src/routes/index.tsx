import { createFileRoute, Link } from "@tanstack/react-router";
import { Beer, MapPin, Star, Users, Heart } from "lucide-react";
import { Ornament } from "../components/ornament";
import { DordrechtQuiz } from "../components/dordrecht-quiz";
import { Reveal } from "../components/reveal";
import { MapConsent } from "../components/map-consent";
import interieurCafe from "../assets/interieur-cafe.jpg.asset.json";
import gevelCafe from "../assets/gevel-cafe.png.asset.json";
import sfeerGevelDag from "../assets/sfeer/gevel-dag.jpg.asset.json";
import sfeerBierglas from "../assets/sfeer/bierglas.jpg.asset.json";
import sfeerInterieur from "../assets/sfeer/interieur.jpg.asset.json";
import sfeerMenukaart from "../assets/sfeer/menukaart.jpg.asset.json";
import sfeerGevelAvond from "../assets/sfeer/gevel-avond.jpg.asset.json";
import sfeerBierglasTerras from "../assets/sfeer/bierglas-terras.jpg.asset.json";

/** Sfeerfoto die de volledige tegel vult. */
function SfeerImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stadscafé — Bruin café en speciaalbier in Dordrecht" },
      {
        name: "description",
        content:
          "Een gezellig bruin café in het hart van Dordrecht. Speciaalbier van de tap, ambachtelijke happas en een warme sfeer. Loop gerust binnen.",
      },
      { property: "og:title", content: "Stadscafé — Bruin café in Dordrecht" },
      {
        property: "og:description",
        content:
          "Speciaalbier, borrelhapjes en een warme kroegsfeer aan de Voorstraat in Dordrecht.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const taps: { name: string; note: string; tag: string; foto?: string }[] = [
  {
    name: "Gouwe Ary",
    note: "Ons huisbier — blonde tap die er altijd is.",
    tag: "Vast op de tap",
    foto: sfeerBierglasTerras.url,
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
    foto: sfeerGevelDag.url,
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
    text: "Aan de Voorstraat, midden in de binnenstad. Zo naar binnen gelopen na het winkelen of een wandeling langs de haven.",
  },
];

const hours = [
  ["Maandag – Donderdag", "15:00 — 02:00"],
  ["Vrijdag", "14:00 — 02:00"],
  ["Zaterdag – Zondag", "13:00 — 02:00"],
];

// Openbare gastrecensies over Stadscafé Rijke & Zn, letterlijk overgenomen.
const reviews = [
  {
    text: "Wat een fijne kroeg! Voelt zoals een kroeg bedoeld is. Altijd vriendelijk personeel.",
    src: "Google-recensie",
  },
  {
    text: "Mooi assortiment bieren. Ook meerdere opties op tap, die wisselen. Goed advies van vriendelijke barman.",
    src: "Google-recensie",
  },
  {
    text: "Een zeer gastvrij en fijn café met een uitgebreide bierkaart en hapjes! Fijn personeel en goede muziek.",
    src: "Google-recensie",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-oak md:min-h-[92vh]">
        <div className="absolute inset-0" data-video-slot="hero">
          <img
            src={gevelCafe.url}
            alt="Gevel van Stadscafé aan de Voorstraat in Dordrecht"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-60"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-oak/80 via-oak/45 to-oak" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--brass) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 font-script type-eyebrow text-brass animate-fade-in">
            Welkom bij
          </p>
          <p className="mb-8 type-label text-paper/75 animate-fade-in">
            Stadscafé · Dordrecht
          </p>
          <h1 className="mx-auto mb-6 max-w-[18ch] text-balance type-h1 text-paper animate-fade-up">
            Een goed glas bier{" "}
            <span className="font-script normal-case text-brass" style={{ textTransform: "none" }}>
              &amp;
            </span>{" "}
            een goed gesprek
          </h1>
          <p className="mb-8 type-label text-brass animate-fade-up">
            Oude ziel. Nieuwe verhalen.
          </p>
          <p className="mx-auto mb-10 max-w-[54ch] text-pretty type-body text-paper/85 animate-fade-up">
            Stadscafé is een gewoon, gezellig bruin café in hartje Dordrecht.
            Speciaalbier van de tap, ambachtelijke happas en tijd voor een praatje.
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
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-brass/60" />
        </div>
      </section>

      {/* Introductie — de gastheer aan het woord */}
      <section className="warm-grain bg-paper py-20 text-oak md:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <span className="mb-4 block font-script type-eyebrow text-brass-dim">
              Kom binnen
            </span>
          </Reveal>
          <Reveal delay={60}>
            <Ornament tone="wine" className="mb-6" />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-8 text-balance type-h2 text-oak">
              Een café zoals ze vroeger waren
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto max-w-[60ch] text-pretty type-body text-oak/80">
              Bij ons hoeft niks. Neem plaats aan de bar, schuif aan bij vrienden of pak
              een tafeltje bij het raam. We schenken graag een goed glas, praten mee als je
              zin hebt en laten je met rust als dat lekkerder is. Zo simpel is het.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bier centraal — Van de tap */}
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <div>
                <span className="mb-3 block font-script type-eyebrow text-brass">
                  Van de tap
                </span>
                <h2 className="type-h2 text-paper">
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
                <article className="card-cozy hover-lift group flex h-full flex-col overflow-hidden bg-oak-light ring-1 ring-border">
                  <div className="zoom-image relative aspect-[4/5] w-full overflow-hidden bg-oak/60">
                    <SfeerImg
                      src={
                        [sfeerBierglasTerras.url, sfeerBierglas.url, sfeerGevelDag.url][i % 3]
                      }
                      alt={`Sfeerbeeld bij ${c.name} in Stadscafé Rijke & Zn`}
                    />
                    <span className="absolute left-4 top-4 rounded-sm bg-brass px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-oak">
                      {c.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 type-h3 text-paper">
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

      {/* Ken je Dordt? — interactieve quiz over de stad */}
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
          <div className="mb-12 text-center">
            <Reveal>
              <span className="mb-3 block font-script type-eyebrow text-brass">
                Ken je Dordt?
              </span>
            </Reveal>
            <Reveal delay={60}>
              <Ornament tone="brass" className="mb-6" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto max-w-[24ch] text-balance type-h2 text-paper">
                Het kroegspel over de oudste stad van Holland
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-5 max-w-[52ch] text-pretty type-body text-paper/85">
                Vijf vragen over Dordrecht — over stadsrechten, watersnood en de scheve toren.
                Elk antwoord levert een weetje op dat je aan de bar kunt navertellen.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <DordrechtQuiz />
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
                  <r.icon size={28} strokeWidth={1.5} className="mb-6 text-brass" />
                  <h3 className="mb-3 type-h3 text-paper">
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
      <section className="bg-oak section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="zoom-image overflow-hidden rounded-sm ring-1 ring-border">
              <img
                src={interieurCafe.url}
                alt="Interieur van Stadscafé — houten tafels, bierposters en warme lampen"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="mb-4 block font-script type-eyebrow text-brass">
                Sfeer
              </span>
              <h2 className="mb-6 type-h2 text-paper">
                Hout, koper en warm licht
              </h2>
              <p className="mb-4 text-pretty type-body text-paper/85">
                Donkere houten tafels, koperen tapkranen en verlichting die alles zachter maakt.
                In de zomer schuiven we het terras uit op de stoep, in de winter
                zit je binnen bij de warme lampen.
              </p>
              <p className="mb-8 text-pretty type-body text-paper/85">
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
      <section className="bg-oak-light section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="mb-3 block font-script type-eyebrow text-brass">
                Wat gasten zeggen
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mx-auto max-w-[24ch] type-h2 text-paper">
                Vaste gasten &amp; nieuwe gezichten
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.text} delay={i * 120}>
                <figure className="card-cozy hover-lift h-full bg-oak p-8 ring-1 ring-border">
                  <div className="mb-4 flex gap-1 text-brass">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-display text-xl leading-snug text-paper">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-[11px] uppercase tracking-widest text-paper/70">
                    {r.src}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Stadscaf%C3%A9%20Rijke%20%26%20Zn%20Voorstraat%20260%20Dordrecht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass"
            >
              Lees alle recensies op Google →
            </a>
          </div>
        </div>
      </section>



      {/* Openingstijden + Route */}
      <section className="bg-oak section-y">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <div className="card-cozy h-full bg-wine p-8 text-paper ring-1 ring-wine-dim md:p-12">
              <p className="mb-2 font-script type-eyebrow text-mustard">Wanneer</p>
              <h2 className="mb-8 type-h2 text-paper">
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
              <h2 className="mb-6 type-h2 text-paper">
                Hartje Dordrecht
              </h2>
              <div className="aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-border">
                <MapConsent />
              </div>
              <p className="mt-6 text-sm text-paper/80">
                Voorstraat 260, 3311 ET Dordrecht — midden in de historische binnenstad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
