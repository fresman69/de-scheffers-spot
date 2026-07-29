import { createFileRoute } from "@tanstack/react-router";
import { PhotoPlaceholder } from "../components/photo-placeholder";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Stadscafé Rijke & Zn." },
      {
        name: "description",
        content:
          "Het verhaal van Stadscafé Rijke & Zn.: historie, gastvrijheid en passie voor bier aan het Scheffersplein in Dordrecht.",
      },
      { property: "og:title", content: "Over ons — Stadscafé Rijke & Zn." },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOns,
});

const pillars = [
  {
    title: "Historie",
    body: "Al generaties lang een vertrouwd gezicht aan het Scheffersplein. Ons pand ademt Dordtse geschiedenis in elk stukje eikenhout.",
  },
  {
    title: "Gastvrijheid",
    body: "Bij Rijke & Zn. ben je meer dan een gast — je bent onderdeel van de kroeg. Onze bediening onthoudt je favoriete bier.",
  },
  {
    title: "Passie voor bier",
    body: "Van klassieke trappisten tot lokale seizoensbrouwsels. We stellen onze bierkaart samen met liefde en kennis van zaken.",
  },
  {
    title: "Centrale ligging",
    body: "Direct aan het Scheffersplein, hartje binnenstad van Dordrecht. Perfect na een middag winkelen of langs de haven.",
  },
];

function OverOns() {
  return (
    <>
      <section className="bg-oak py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="mb-4 font-script text-5xl leading-none text-brass md:text-6xl">Over ons</p>
          <h1 className="mb-6 font-display text-4xl sm:text-5xl text-paper md:text-6xl">
            Ons verhaal, ons huis.
          </h1>
          <p className="mx-auto max-w-[55ch] text-pretty text-lg text-paper/85">
            Stadscafé Rijke &amp; Zn. is één van de bekendste bruine cafés van Dordrecht. Al
            decennia lang tappen we het beste bier van de stad, met een gastvrijheid die je alleen
            in de mooiste kroegen tegenkomt.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 text-oak">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <PhotoPlaceholder tone="light" aspect="4 / 5" label="Cafédetail — nog toe te voegen" />
          </div>
          <div className="lg:col-span-3">
            <span className="mb-4 block font-script text-4xl leading-none text-brass-dim">
              Ambacht sinds jaar en dag
            </span>
            <h2 className="mb-6 font-display text-3xl sm:text-4xl leading-tight md:text-5xl">
              Waar donker hout, koper en Dordts gelach elkaar ontmoeten.
            </h2>
            <p className="mb-6 text-pretty text-oak/80">
              We geloven in de kracht van eenvoud: goed bier, oprechte aandacht en een café dat
              voelt als thuis. Elke tap wordt met zorg gekozen, elk borrelhapje met liefde bereid,
              en elke gast met een warme groet ontvangen.
            </p>
            <p className="text-pretty text-oak/80">
              Onze bar is een verhaal op zichzelf. De koperen tapkranen glimmen tegen het donkere
              eiken, de leren krukken dragen het geheugen van duizenden gesprekken, en het licht
              van de messingen lampen strijkt zachtjes over de flessen achter de bar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 block font-script text-4xl leading-none text-brass">
              Waar we voor staan
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-paper md:text-5xl">Vier pijlers.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((p, i) => (
              <article key={p.title} className="rounded-sm bg-oak-light p-8 ring-1 ring-border">
                <span className="mb-4 block font-display text-3xl text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 font-display text-2xl text-paper">{p.title}</h3>
                <p className="text-pretty text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
