import { createFileRoute } from "@tanstack/react-router";
import { AmbientPanel, type AmbientVariant } from "../components/ambient";
import { Reveal } from "../components/reveal";

export const Route = createFileRoute("/galerij")({
  head: () => ({
    meta: [
      { title: "Galerij — Sfeerbeelden Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Een abstracte sfeergalerij van Stadscafé in Dordrecht: amberkleurig licht, koper, schuim en warm houtgevoel, volledig in code getekend.",
      },
      { property: "og:title", content: "Galerij — Stadscafé" },
      {
        property: "og:description",
        content: "Abstracte sfeerbeelden van amber licht, koper en schuim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://de-scheffers-spot.lovable.app/galerij" },
    ],
    links: [{ rel: "canonical", href: "https://de-scheffers-spot.lovable.app/galerij" }],
  }),
  component: Galerij,
});

const panels: { title: string; caption: string; variant: AmbientVariant; aspect: string }[] = [
  {
    title: "Van de tap",
    caption: "Goud dat langzaam het glas vult.",
    variant: "tap",
    aspect: "3 / 4",
  },
  {
    title: "Koper",
    caption: "Warm metaal in het licht van de bar.",
    variant: "copper",
    aspect: "4 / 3",
  },
  {
    title: "Schuimkraag",
    caption: "Fijne belletjes die net tot rust komen.",
    variant: "foam",
    aspect: "4 / 3",
  },
  {
    title: "Amber",
    caption: "De kleur van een avond die lang duurt.",
    variant: "amber",
    aspect: "4 / 5",
  },
  {
    title: "Glasreflectie",
    caption: "Licht dat langs koud condens glijdt.",
    variant: "glass",
    aspect: "3 / 4",
  },
  {
    title: "Rood in het glas",
    caption: "Diepe tinten van kriek en donker bier.",
    variant: "wine",
    aspect: "4 / 3",
  },
  {
    title: "Bubbels",
    caption: "Rustig opstijgend, altijd in beweging.",
    variant: "bubbles",
    aspect: "4 / 3",
  },
  {
    title: "Kaarslicht",
    caption: "Zachte vlekken licht tegen donker hout.",
    variant: "light",
    aspect: "4 / 5",
  },
];

function Galerij() {
  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">Galerij</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-paper">Sfeer in beeld</h1>
          <p className="max-w-[60ch] text-pretty type-body text-paper/85">
            Amberkleurig licht, koper, schuim en glasreflecties. Deze sfeerbeelden zijn abstract en
            volledig in code getekend — een gevoel van het café, geen foto's.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {panels.map((p, i) => (
              <Reveal key={p.title} delay={i * 70} className="mb-4 block break-inside-avoid">
                <figure className="relative overflow-hidden rounded-sm ring-1 ring-border">
                  <AmbientPanel variant={p.variant} aspect={p.aspect} seed={i + 2} />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-oak/90 to-transparent p-5">
                    <span className="font-script text-xl text-brass">{p.title}</span>
                    <p className="mt-1 text-[12px] leading-snug text-paper/80">{p.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
