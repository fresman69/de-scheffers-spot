import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Adres, telefoonnummer, e-mail, openingstijden en socialmedia van Stadscafé aan het Scheffersplein in Dordrecht. Loop gerust binnen.",
      },
      { property: "og:title", content: "Contact — Stadscafé" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const hours = [
  ["Maandag", "Gesloten"],
  ["Dinsdag", "11:00 — 00:00"],
  ["Woensdag", "11:00 — 00:00"],
  ["Donderdag", "11:00 — 00:00"],
  ["Vrijdag", "11:00 — 01:00"],
  ["Zaterdag", "11:00 — 01:00"],
  ["Zondag", "12:00 — 23:00"],
];

function Contact() {
  return (
    <>
      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-brass">Contact</p>
          <h1 className="mb-6 max-w-[24ch] type-h1 text-paper">
            Loop binnen of bel gewoon even
          </h1>
          <p className="max-w-[58ch] text-pretty text-lg text-paper/85">
            We werken niet met reserveringen — er staat een plek voor je klaar als die vrij is.
            Wil je met een groep langskomen? Bel of mail ons dan even, dan denken we met je mee.
          </p>
        </div>
      </section>

      <section className="bg-paper section-y text-oak">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="mb-8 type-h2">Bezoek</h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <MapPin size={20} className="mt-1 shrink-0 text-brass-dim" />
                  <div>
                    <p className="font-medium">Scheffersplein 12</p>
                    <p className="text-oak/75">3311 PX Dordrecht</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone size={20} className="mt-1 shrink-0 text-brass-dim" />
                  <a href="tel:+31786134242" className="hover:text-brass-dim">078 613 4242</a>
                </li>
                <li className="flex gap-4">
                  <Mail size={20} className="mt-1 shrink-0 text-brass-dim" />
                  <a href="mailto:info@rijke-zn.nl" className="hover:text-brass-dim">info@rijke-zn.nl</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-8 type-h2">Openingstijden</h2>
              <ul className="space-y-3">
                {hours.map(([d, t]) => (
                  <li key={d} className="flex items-end gap-3">
                    <span className="font-medium">{d}</span>
                    <span aria-hidden className="mb-[3px] h-[6px] flex-1 leader-dots text-oak/30" />
                    <span className="text-oak/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6 type-h2">Volg ons</h2>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/stadscafe_rijke/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-oak/15 px-4 py-2.5 text-sm hover:border-brass-dim">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-oak/15 px-4 py-2.5 text-sm hover:border-brass-dim">
                  <Facebook size={16} /> Facebook
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="aspect-square overflow-hidden rounded-sm ring-1 ring-black/10">
              <iframe
                title="Kaart Scheffersplein Dordrecht"
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.6870%2C51.8130%2C4.6930%2C51.8160&layer=mapnik&marker=51.8145%2C4.6900"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-sm text-oak/80">
              Op 3 minuten lopen van station Dordrecht Centrum. Parkeergarage Visstraat op 200 meter.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
