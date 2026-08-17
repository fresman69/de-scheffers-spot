import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/photo-placeholder";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Het verhaal van Stadscafé: een gezellig bruin café aan het Scheffersplein in Dordrecht, met passie voor speciaalbier en oprechte gastvrijheid.",
      },
      { property: "og:title", content: "Over ons — Stadscafé" },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOns,
});

const pillars = [
  {
    title: "Een echt bruin café",
    body: "Donker hout, koperen taps en warm licht. Bij ons hoef je niks bewijzen — je bent gewoon welkom.",
  },
  {
    title: "Gastvrijheid",
    body: "We onthouden je favoriete bier, maken graag een praatje en laten je met rust als je liever alleen bent.",
  },
  {
    title: "Passie voor bier",
    body: "Zes wisselende tapkranen, meer dan zestig bieren op fles. Van huisbier tot trappist, van saison tot alcoholvrij.",
  },
  {
    title: "Hartje Dordrecht",
    body: "Aan het Scheffersplein, tussen de terrassen. Perfect na een middag winkelen of een wandeling langs de haven.",
  },
];

function OverOns() {
  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="mb-4 font-script type-eyebrow text-brass">Over ons</p>
          <h1 className="mb-6 type-h1 text-paper">
            Gewoon een goed café
          </h1>
          <p className="mx-auto max-w-[58ch] text-pretty type-body text-paper/85">
            Stadscafé is een van die vertrouwde bruine cafés van Dordrecht. Al jaren tappen we
            speciaalbier, schuiven mensen aan die je nog niet kende, en gaat de deur pas dicht als
            de laatste gast klaar is met z'n glas.
          </p>
        </div>
      </section>

      <section className="bg-paper section-y text-oak">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <PhotoPlaceholder tone="light" aspect="4 / 5" label="Cafédetail — nog toe te voegen" />
          </div>
          <div className="lg:col-span-3">
            <span className="mb-4 block font-script type-eyebrow text-brass-dim">
              Zoals het hoort
            </span>
            <h2 className="mb-6 type-h2 text-oak">
              Hout, koper en een glas bier
            </h2>
            <p className="mb-6 text-pretty text-oak/85">
              We geloven in eenvoud: een goed glas, een eerlijk gesprek en een café dat voelt
              als thuis. Elke tap kiezen we zelf, elk borrelhapje maken we met zorg, en elke gast
              krijgt de tijd die 'ie nodig heeft.
            </p>
            <p className="text-pretty text-oak/85">
              De bar is het middelpunt — daar komen mensen samen, daar wordt gelachen, daar wordt
              gepraat over voetbal, muziek of gewoon over de dag. Wij zorgen dat er altijd een
              goed glas voor je klaarstaat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <span className="mb-3 block font-script type-eyebrow text-brass">
              Waar we voor staan
            </span>
            <h2 className="type-h2 text-paper">Vier pijlers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p, i) => (
              <article key={p.title} className="hover-lift rounded-sm bg-oak-light p-8 ring-1 ring-border">
                <span className="mb-4 block font-display-condensed text-3xl text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 type-h3 text-paper">{p.title}</h3>
                <p className="text-pretty text-paper/80">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
