import { createFileRoute } from "@tanstack/react-router";
import { ArtworkFrame, type Artwork } from "../components/artwork-frame";
import { GalleryMasonry, type GalleryItem } from "../components/gallery-masonry";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { TextLink } from "../components/cta-button";
import sfeerGevelDag from "../assets/sfeer/gevel-dag.jpg.asset.json";
import sfeerBierglas from "../assets/sfeer/bierglas.jpg.asset.json";
import sfeerInterieur from "../assets/sfeer/interieur.jpg.asset.json";
import sfeerMenukaart from "../assets/sfeer/menukaart.jpg.asset.json";
import sfeerGevelAvond from "../assets/sfeer/gevel-avond.jpg.asset.json";
import sfeerBierglasTerras from "../assets/sfeer/bierglas-terras.jpg.asset.json";

export const Route = createFileRoute("/galerij")({
  head: () => ({
    meta: [
      { title: "Galerij & kunst — Schilderijen en sfeer in het café" },
      {
        name: "description",
        content:
          "Sfeerbeelden van interieur, terras en bier, plus de schilderijen die bij ons aan de wand hangen — kunst over bier, cafés en kroegleven.",
      },
      { property: "og:title", content: "Galerij & kunst — Stadscafé" },
      {
        property: "og:description",
        content: "Fotografie en schilderkunst uit ons bruine café in Dordrecht.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/galerij" },
    ],
    links: [{ rel: "canonical", href: "/galerij" }],
  }),
  component: Galerij,
});

const sfeer: GalleryItem[] = [
  { caption: "Interieur bij kaarslicht", src: sfeerInterieur.url },
  { caption: "De gevel aan de Voorstraat", src: sfeerGevelDag.url },
  { caption: "Vers getapt in ons eigen glas", src: sfeerBierglasTerras.url },
  { caption: "Onze kaart op tafel", src: sfeerMenukaart.url },
  { caption: "Avondlicht in de binnenstad", src: sfeerGevelAvond.url },
  { caption: "Goud in het glas", src: sfeerBierglas.url },
];

/**
 * Kunstwerken aan de caféwand. Er staan bewust nog geen titels of kunstenaars:
 * die vullen we pas in als ze bevestigd zijn. Zet een foto in `photo` zodra die er is.
 */
const artworks: Artwork[] = [
  { caption: "Schilderij boven de bar", ratio: "3 / 4" },
  { caption: "Werk bij de tafels aan het raam", ratio: "4 / 3" },
  { caption: "Kroegtafereel naast de taps", ratio: "3 / 4" },
  { caption: "Klein werk bij de doorgang", ratio: "1 / 1" },
  { caption: "Schilderij in de achterzaal", ratio: "4 / 3" },
  { caption: "Werk naast de ingang", ratio: "3 / 4" },
];

function Galerij() {
  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">Galerij &amp; kunst</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-paper">Een kijkje binnen</h1>
          <p className="max-w-[60ch] text-pretty type-body text-paper/85">
            Van de bar tot het terras, van tap tot borrelplank — en van de schilderijen aan onze
            wand. Beelden uit ons café aan de Voorstraat.
          </p>
        </div>
      </section>

      {/* Kunst aan de wand */}
      <section className="warm-grain relative bg-oak-light/60 section-y">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Aan de wand"
            title="Kunst hoort hier gewoon bij"
            intro="Bij ons hangen schilderijen over bier, cafés en kroegleven. Geen museum, wel werk dat bij de plek past — je kijkt ernaar met een glas in je hand."
            ornament
          />
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.map((a, i) => (
              <Reveal key={a.caption} delay={Math.min(i, 5) * 90}>
                <ArtworkFrame artwork={a} />
              </Reveal>
            ))}
          </div>
          <p className="mt-12 max-w-[60ch] text-sm leading-relaxed text-paper/60">
            De foto&apos;s van de werken worden nog toegevoegd. Titels en makers vullen we pas in
            zodra die bevestigd zijn.
          </p>
        </div>
      </section>

      {/* Sfeerfotografie — korte greep, de volledige serie staat op /sfeer */}
      <section className="bg-oak pb-24 pt-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Sfeer"
            title="Hout, koper en warm licht"
            intro="De kunst hangt in een café, geen galerie. Zo ziet die plek eruit."
            action={<TextLink to="/sfeer">Alle sfeerbeelden →</TextLink>}
          />
          <GalleryMasonry items={sfeer.slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
