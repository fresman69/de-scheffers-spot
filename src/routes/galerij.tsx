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
  { label: "Interieur", aspect: "3 / 4" },
  { label: "Terras", aspect: "4 / 3" },
  { label: "Tapkranen", aspect: "4 / 3" },
  { label: "Speciaalbier", aspect: "4 / 5" },
  { label: "Bruine cafésfeer", aspect: "3 / 4" },
  { label: "Borrelplank", aspect: "4 / 3" },
  { label: "Evenement", aspect: "4 / 3" },
  { label: "Gasten", aspect: "4 / 5" },
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
            Van de bar tot het terras, van tap tot borrelplank. Deze galerij vullen we
            zodra we onze eigen foto's van Stadscafé hebben.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {slots.map((s, i) => (
              <div key={i} className="mb-4 break-inside-avoid">
                <PhotoPlaceholder aspect={s.aspect} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
