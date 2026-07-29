import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/photo-placeholder";

export const Route = createFileRoute("/galerij")({
  head: () => ({
    meta: [
      { title: "Galerij — Sfeerbeelden Stadscafé Rijke & Zn." },
      {
        name: "description",
        content:
          "Sfeerbeelden van interieur, terras, speciaalbieren, evenementen en gasten van Stadscafé Rijke & Zn. in Dordrecht.",
      },
      { property: "og:title", content: "Galerij — Rijke & Zn." },
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
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script text-5xl leading-none text-brass md:text-6xl">Galerij</p>
          <h1 className="mb-6 max-w-[22ch] font-display text-4xl sm:text-5xl text-paper md:text-6xl">
            Sfeer, ambacht en Dordts leven.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Een blik binnen — van de bar tot het terras, van tap tot borrelplank. Deze galerij
            wordt gevuld met eigen foto's van Rijke &amp; Zn.
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
