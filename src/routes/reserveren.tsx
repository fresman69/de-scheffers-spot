import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Users, Cake, Briefcase, PartyPopper, Wine } from "lucide-react";

export const Route = createFileRoute("/reserveren")({
  head: () => ({
    meta: [
      { title: "Reserveren — Tafel, borrel of feest | Rijke & Zn." },
      {
        name: "description",
        content:
          "Reserveer online een tafel, groepsborrel, bedrijfsborrel, verjaardag of vrijmibo bij Stadscafé Rijke & Zn. in Dordrecht.",
      },
      { property: "og:title", content: "Reserveren — Rijke & Zn." },
      { property: "og:url", content: "/reserveren" },
    ],
    links: [{ rel: "canonical", href: "/reserveren" }],
  }),
  component: Reserveren,
});

const occasions = [
  { icon: Users, label: "Tafel reserveren" },
  { icon: Wine, label: "Groepsborrel" },
  { icon: Briefcase, label: "Bedrijfsborrel" },
  { icon: Cake, label: "Verjaardag" },
  { icon: PartyPopper, label: "Vrijmibo" },
];

function Reserveren() {
  const [sent, setSent] = useState(false);
  const [occasion, setOccasion] = useState("Tafel reserveren");

  return (
    <>
      <section className="bg-oak py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-brass">Reserveren</p>
          <h1 className="mb-6 max-w-[24ch] font-display text-4xl sm:text-5xl text-paper md:text-6xl">
            Kom gezellig langs — reserveer je plek.
          </h1>
          <p className="max-w-[60ch] text-pretty text-lg text-muted-foreground">
            Van een intiem dinertje op ons terras tot een uitbundige vrijmibo met collega's —
            wij zorgen voor de sfeer.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24 text-oak">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="mb-6 font-display text-3xl">Waarvoor reserveer je?</h2>
            <div className="space-y-3">
              {occasions.map((o) => {
                const Icon = o.icon;
                const active = occasion === o.label;
                return (
                  <button
                    key={o.label}
                    onClick={() => setOccasion(o.label)}
                    className={`flex w-full items-center gap-4 rounded-sm border px-5 py-4 text-left transition-all ${
                      active
                        ? "border-brass-dim bg-oak text-paper"
                        : "border-oak/10 hover:border-brass-dim/40"
                    }`}
                  >
                    <Icon size={18} className={active ? "text-brass" : "text-brass-dim"} />
                    <span className="font-medium">{o.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-sm bg-white p-8 ring-1 ring-black/5 md:p-10">
            {sent ? (
              <div className="py-10 text-center">
                <CheckCircle2 size={48} className="mx-auto mb-6 text-brass-dim" />
                <h3 className="mb-3 font-display text-3xl">Bedankt voor je aanvraag!</h3>
                <p className="text-oak/80">
                  We nemen zo snel mogelijk contact op om je reservering te bevestigen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="mb-2 border-b border-oak/10 pb-3 text-xs font-semibold uppercase tracking-widest text-brass-dim">
                  {occasion}
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-oak/75">Naam</span>
                    <input required className="w-full rounded-sm border border-oak/15 bg-transparent px-4 py-3 outline-none focus:border-brass-dim" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-oak/75">Telefoon</span>
                    <input required type="tel" className="w-full rounded-sm border border-oak/15 bg-transparent px-4 py-3 outline-none focus:border-brass-dim" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-widest text-oak/75">E-mail</span>
                  <input required type="email" className="w-full rounded-sm border border-oak/15 bg-transparent px-4 py-3 outline-none focus:border-brass-dim" />
                </label>
                <div className="grid gap-5 sm:grid-cols-3">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-oak/75">Datum</span>
                    <input required type="date" className="w-full rounded-sm border border-oak/15 bg-transparent px-4 py-3 outline-none focus:border-brass-dim" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-oak/75">Tijd</span>
                    <input required type="time" className="w-full rounded-sm border border-oak/15 bg-transparent px-4 py-3 outline-none focus:border-brass-dim" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-oak/75">Personen</span>
                    <input required type="number" min={1} defaultValue={2} className="w-full rounded-sm border border-oak/15 bg-transparent px-4 py-3 outline-none focus:border-brass-dim" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-widest text-oak/75">Wensen (optioneel)</span>
                  <textarea rows={4} className="w-full rounded-sm border border-oak/15 bg-transparent px-4 py-3 outline-none focus:border-brass-dim" />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-oak px-4 sm:px-6 py-4 text-sm font-medium uppercase tracking-widest text-paper transition-colors hover:bg-brass hover:text-oak"
                >
                  Verstuur aanvraag
                </button>
                <p className="text-center text-xs text-oak/75">
                  Of bel ons direct op{" "}
                  <a href="tel:+31786134242" className="text-brass-dim">
                    078 613 4242
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
