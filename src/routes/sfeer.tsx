import { createFileRoute } from "@tanstack/react-router";
import { GalleryMasonry, type GalleryItem } from "../components/gallery-masonry";
import { SectionHeader } from "../components/section-header";
import { TextLink } from "../components/cta-button";
import sfeerGevelDag from "../assets/sfeer/gevel-dag.jpg.asset.json";
import sfeerBierglas from "../assets/sfeer/bierglas.jpg.asset.json";
import sfeerInterieur from "../assets/sfeer/interieur.jpg.asset.json";
import sfeerMenukaart from "../assets/sfeer/menukaart.jpg.asset.json";
import sfeerGevelAvond from "../assets/sfeer/gevel-avond.jpg.asset.json";
import sfeerBierglasTerras from "../assets/sfeer/bierglas-terras.jpg.asset.json";

export const Route = createFileRoute("/sfeer")({
  head: () => ({
    meta: [
      { title: "Sfeer — Interieur, bar en terras van ons bruine café" },
      {
        name: "description",
        content:
          "Hout, koper en warm licht: beelden van het interieur, de bar, de kaart en de gevel aan de Voorstraat in Dordrecht.",
      },
      { property: "og:title", content: "Sfeer — Stadscafé" },
      {
        property: "og:description",
        content: "Interieur, bar, terras en warm licht in ons bruine café in Dordrecht.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/sfeer" },
    ],
    links: [{ rel: "canonical", href: "/sfeer" }],
  }),
  component: Sfeer,
});

/** Alleen bestaande, echte beelden uit het café — geen stockfoto's. */
const sfeer: GalleryItem[] = [
  { caption: "Interieur bij kaarslicht", src: sfeerInterieur.url },
  { caption: "De gevel aan de Voorstraat", src: sfeerGevelDag.url },
  { caption: "Vers getapt in ons eigen glas", src: sfeerBierglasTerras.url },
  { caption: "Onze kaart op tafel", src: sfeerMenukaart.url },
  { caption: "Avondlicht in de binnenstad", src: sfeerGevelAvond.url },
  { caption: "Goud in het glas", src: sfeerBierglas.url },
];

function Sfeer() {
  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">Sfeer</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-paper">Hout, koper en warm licht</h1>
          <p className="max-w-[60ch] text-pretty type-body text-paper/85">
            Van de bar tot het terras: zo ziet het eruit als je binnenloopt. Beelden uit ons eigen
            café aan de Voorstraat.
          </p>
        </div>
      </section>

      <section className="warm-grain relative bg-oak-light/60 pb-24 pt-4">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="In beeld"
            title="Binnen bij ons"
            action={<TextLink to="/galerij">Bekijk de kunst aan de wand →</TextLink>}
          />
          <GalleryMasonry items={sfeer} />
        </div>
      </section>
    </>
  );
}
