import { createFileRoute } from "@tanstack/react-router";
import borrelplank from "../assets/borrelplank.jpg";

export const Route = createFileRoute("/borrelkaart")({
  head: () => ({
    meta: [
      { title: "Borrelkaart — Bitterballen & Borrelplanken | Rijke & Zn." },
      {
        name: "description",
        content:
          "Bitterballen, nacho's, kaasplank, charcuterie, borrelplanken en vegetarische snacks — ambachtelijk in Dordrecht.",
      },
      { property: "og:title", content: "Borrelkaart — Rijke & Zn." },
      { property: "og:url", content: "/borrelkaart" },
    ],
    links: [{ rel: "canonical", href: "/borrelkaart" }],
  }),
  component: Borrelkaart,
});

const items = [
  {
    cat: "Bitterballen",
    dishes: [
      ["Rundvlees bitterballen (8st)", "Met grove mosterd", "€ 8,50"],
      ["Truffel bitterballen (8st)", "Met parmezaan", "€ 11,00"],
      ["Kaas bitterballen (8st)", "Met chutney", "€ 8,50"],
    ],
  },
  {
    cat: "Nacho's",
    dishes: [
      ["Classic Nacho's", "Kaas, jalapeño, guacamole, zure room", "€ 9,50"],
      ["Pulled beef nacho's", "Met barbecue en cheddar", "€ 12,50"],
    ],
  },
  {
    cat: "Kaasplank",
    dishes: [
      ["Kleine kaasplank", "3 kazen, noten, chutney, brood", "€ 12,50"],
      ["Grand kaasplank", "5 kazen, honing, druiven, brood", "€ 18,50"],
    ],
  },
  {
    cat: "Charcuterie",
    dishes: [
      ["Ossenworst plank", "Met augurk, uitjes en mosterd", "€ 11,50"],
      ["Italiaanse plank", "Prosciutto, salami, olijven", "€ 14,50"],
    ],
  },
  {
    cat: "Borrelplanken",
    dishes: [
      ["Rijke's borrelplank (2p)", "Bitterballen, kaas, charcuterie, olijven, brood", "€ 22,50"],
      ["Grand Rijke (4p)", "De volle plank voor gezelschap", "€ 42,50"],
    ],
  },
  {
    cat: "Vegetarisch",
    dishes: [
      ["Vegetarische bitterballen (8st)", "Met bloemkool en truffel", "€ 9,50"],
      ["Groenteplank", "Hummus, gefrituurde kikkererwten, olijven, brood", "€ 11,50"],
    ],
  },
];

function Borrelkaart() {
  return (
    <>
      <section className="relative bg-oak py-24">
        <img src={borrelplank} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-oak/60 to-oak" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Borrelkaart</p>
          <h1 className="mb-6 max-w-[22ch] font-display text-5xl text-paper md:text-6xl">
            Ambachtelijke borrelhapjes bij ieder glas.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-paper/80">
            Van bitterballen tot een royale borrelplank — met liefde bereid en gemaakt om te delen.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 text-oak">
        <div className="mx-auto max-w-5xl px-6 space-y-16">
          {items.map((s) => (
            <div key={s.cat}>
              <h2 className="mb-8 border-b border-oak/10 pb-4 font-display text-3xl">{s.cat}</h2>
              <ul className="space-y-6">
                {s.dishes.map(([name, desc, price]) => (
                  <li key={name} className="flex items-baseline justify-between gap-6">
                    <div className="min-w-0">
                      <p className="font-display text-xl">{name}</p>
                      <p className="mt-1 text-sm text-oak/60">{desc}</p>
                    </div>
                    <span className="shrink-0 font-medium text-brass-dim">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
