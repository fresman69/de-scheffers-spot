import { createFileRoute, Link } from "@tanstack/react-router";
import { Music, Beer, Brain, Trophy, Sparkles } from "lucide-react";

export const Route = createFileRoute("/evenementen")({
  head: () => ({
    meta: [
      { title: "Evenementen — Live muziek, pubquiz & proeverijen | Rijke & Zn." },
      {
        name: "description",
        content:
          "Bekijk onze agenda: live muziek, bierproeverijen, pubquiz, sportwedstrijden en thema-avonden in Dordrecht.",
      },
      { property: "og:title", content: "Evenementen — Rijke & Zn." },
      { property: "og:url", content: "/evenementen" },
    ],
    links: [{ rel: "canonical", href: "/evenementen" }],
  }),
  component: Evenementen,
});

const events = [
  { m: "Mei", d: "12", type: "Muziek", title: "Live Jazz Trio", meta: "Zondag · 15:00 – 18:00", desc: "Sjeu op het plein met warme jazz en een fris getapt speciaalbier.", price: "Gratis", icon: Music },
  { m: "Mei", d: "18", type: "Sport", title: "Champions League Finale", meta: "Zaterdag · Aftrap 21:00", desc: "Op groot scherm met borrelplanken en het beste bier van de tap.", price: "Gratis", icon: Trophy },
  { m: "Mei", d: "25", type: "Quiz", title: "Dordtse Pubquiz", meta: "Donderdag · 20:30", desc: "Vier rondes met muziek, geschiedenis en Dordts trivia. Teams van 5.", price: "€ 5 pp", icon: Brain },
  { m: "Jun", d: "02", type: "Proeverij", title: "Speciaalbier Proeverij", meta: "Vrijdag · 19:30", desc: "Vijf zorgvuldig gekozen bieren met Brouwerij 't IJ als eregast.", price: "€ 27,50", icon: Beer },
  { m: "Jun", d: "15", type: "Thema", title: "Belgische Bierdag", meta: "Zaterdag · Vanaf 14:00", desc: "Onze hele tap in het teken van Belgische ambacht.", price: "Gratis", icon: Sparkles },
  { m: "Jun", d: "28", type: "Muziek", title: "Akoestische zondag", meta: "Zondag · 15:00", desc: "Lokale singer-songwriters op ons terras.", price: "Gratis", icon: Music },
];

function Evenementen() {
  return (
    <>
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Agenda</p>
          <h1 className="mb-6 max-w-[22ch] font-display text-4xl sm:text-5xl text-paper md:text-6xl">
            Elke week iets bijzonders.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Live muziek, bierproeverijen, pubquiz, sport op groot scherm en gezellige
            thema-avonden. Meld je online aan of loop gewoon eens binnen.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-24">
        <div className="mx-auto max-w-4xl space-y-4 px-4 sm:px-6">
          {events.map((e) => {
            const Icon = e.icon;
            return (
              <article
                key={e.title + e.d}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-sm bg-oak-light p-5 ring-1 ring-border transition-all hover:ring-brass/40 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-8 sm:p-8"
              >
                <div className="flex h-20 w-16 shrink-0 flex-col items-center justify-center rounded-sm bg-oak ring-1 ring-brass/20 sm:h-24 sm:w-20">
                  <span className="text-[10px] uppercase tracking-widest text-brass">{e.m}</span>
                  <span className="font-display text-2xl text-paper sm:text-3xl">{e.d}</span>
                </div>
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-brass/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-brass">
                      <Icon size={12} /> {e.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{e.meta}</span>
                  </div>
                  <h2 className="font-display text-2xl text-paper">{e.title}</h2>
                  <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{e.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <span className="text-xs font-medium text-brass">{e.price}</span>
                  <Link
                    to="/reserveren"
                    className="rounded-sm border border-brass/40 px-3 py-1.5 text-[11px] uppercase tracking-widest text-brass hover:bg-brass hover:text-oak"
                  >
                    Aanmelden
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
