import { createFileRoute } from "@tanstack/react-router";
import heroCafe from "../assets/hero-cafe.jpg";
import interior from "../assets/interior.jpg";
import brassTap from "../assets/brass-tap.jpg";
import terras from "../assets/terras.jpg";
import beerTrappist from "../assets/beer-trappist.jpg";
import beerBlond from "../assets/beer-blond.jpg";
import beerTripel from "../assets/beer-tripel.jpg";
import borrelplank from "../assets/borrelplank.jpg";

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

const gallery = [
  { src: heroCafe, alt: "Interieur bij avondlicht", tall: true },
  { src: terras, alt: "Terras aan het Scheffersplein" },
  { src: brassTap, alt: "Koperen tapkranen" },
  { src: beerTrappist, alt: "Trappist in chalice" },
  { src: interior, alt: "Bruine cafésfeer met leren stoelen", tall: true },
  { src: beerBlond, alt: "Blond speciaalbier" },
  { src: borrelplank, alt: "Borrelplank" },
  { src: beerTripel, alt: "Tripel Karmeliet" },
];

function Galerij() {
  return (
    <>
      <section className="bg-oak py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Galerij</p>
          <h1 className="mb-6 max-w-[22ch] font-display text-5xl text-paper md:text-6xl">
            Sfeer, ambacht en Dordts leven.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Een blik binnen — van de bar tot het terras, van tap tot borrelplank.
          </p>
        </div>
      </section>

      <section className="bg-oak pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className="mb-4 overflow-hidden rounded-sm ring-1 ring-border transition-transform duration-500 hover:-translate-y-1 break-inside-avoid"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
