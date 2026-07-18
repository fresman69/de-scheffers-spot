import { createFileRoute } from "@tanstack/react-router";
import interior from "../assets/interior.jpg";
import brassTap from "../assets/brass-tap.jpg";

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
      <section className="relative overflow-hidden bg-oak py-32">
        <img
          src={interior}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-oak/70 to-oak" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Over ons</p>
          <h1 className="mb-6 font-display text-5xl text-paper md:text-6xl">
            Ons verhaal, ons huis.
          </h1>
          <p className="mx-auto max-w-[55ch] text-pretty text-lg text-paper/85">
            Stadscafé Rijke &amp; Zn. is één van de bekendste bruine cafés van Dordrecht. Al
            decennia lang tappen we het beste bier van de stad, met een gastvrijheid die je alleen
            in de mooiste kroegen tegenkomt.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 text-oak">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <img
              src={brassTap}
              alt="Koperen tapkranen"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </div>
          <div className="lg:col-span-3">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-brass-dim">
              Ambacht sinds jaar en dag
            </span>
            <h2 className="mb-6 font-display text-4xl leading-tight md:text-5xl">
              Waar donker hout, koper en Dordts gelach elkaar ontmoeten.
            </h2>
            <p className="mb-6 text-pretty text-oak/70">
              We geloven in de kracht van eenvoud: goed bier, oprechte aandacht en een café dat
              voelt als thuis. Elke tap wordt met zorg gekozen, elk borrelhapje met liefde bereid,
              en elke gast met een warme groet ontvangen.
            </p>
            <p className="text-pretty text-oak/70">
              Onze bar is een verhaal op zichzelf. De koperen tapkranen glimmen tegen het donkere
              eiken, de leren krukken dragen het geheugen van duizenden gesprekken, en het licht
              van de messingen lampen strijkt zachtjes over de flessen achter de bar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-oak py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brass">
              Waar we voor staan
            </span>
            <h2 className="font-display text-4xl text-paper md:text-5xl">Vier pijlers.</h2>
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
