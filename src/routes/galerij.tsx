import { createFileRoute } from "@tanstack/react-router";
import sfeerGevelDag from "../assets/sfeer/gevel-dag.jpg.asset.json";
import sfeerBierglas from "../assets/sfeer/bierglas.jpg.asset.json";
import sfeerInterieur from "../assets/sfeer/interieur.jpg.asset.json";
import sfeerMenukaart from "../assets/sfeer/menukaart.jpg.asset.json";
import sfeerGevelAvond from "../assets/sfeer/gevel-avond.jpg.asset.json";
import sfeerBierglasTerras from "../assets/sfeer/bierglas-terras.jpg.asset.json";

export const Route = createFileRoute("/galerij")({
  head: () => ({
    meta: [
      { title: "Galerij — Sfeerbeelden Stadscafé" },
      {
        name: "description",
        content:
          "Sfeerbeelden van interieur, terras, speciaalbieren, evenementen en gasten van Stadscafé in Dordrecht.",
      },
      { property: "og:title", content: "Galerij — Stadscafé" },
      { property: "og:url", content: "/galerij" },
    ],
    links: [{ rel: "canonical", href: "/galerij" }],
  }),
  component: Galerij,
});

const slots = [
  { label: "Interieur bij kaarslicht", src: sfeerInterieur.url },
  { label: "De gevel aan de Voorstraat", src: sfeerGevelDag.url },
  { label: "Vers getapt in ons eigen glas", src: sfeerBierglasTerras.url },
  { label: "Onze kaart op tafel", src: sfeerMenukaart.url },
  { label: "Avondlicht in de binnenstad", src: sfeerGevelAvond.url },
  { label: "Goud in het glas", src: sfeerBierglas.url },
];

function Galerij() {
  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">Galerij</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-paper">
            Een kijkje binnen
          </h1>
          <p className="max-w-[60ch] text-pretty type-body text-paper/85">
            Van de bar tot het terras, van tap tot borrelplank. Beelden uit ons café, gemaakt
            in en rond de zaak aan de Voorstraat.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {slots.map((s) => (
              <figure
                key={s.label}
                className="zoom-image group mb-4 break-inside-avoid overflow-hidden rounded-sm ring-1 ring-border"
              >
                <img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <figcaption className="bg-oak-light px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-paper/70">
                  {s.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
