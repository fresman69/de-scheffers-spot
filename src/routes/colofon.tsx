import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { LegalPage, LegalSection } from "../components/legal-page";
import { legalCompany } from "../lib/legal";

export const Route = createFileRoute("/colofon")({
  head: () => ({
    meta: [
      { title: "Colofon — Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Bedrijfsgegevens van Stadscafé: juridische naam, handelsnaam, adres, KvK-nummer, btw-identificatienummer en contactgegevens.",
      },
      { property: "og:title", content: "Colofon — Stadscafé" },
      { property: "og:description", content: "Bedrijfs- en contactgegevens van Stadscafé." },
      { property: "og:url", content: "/colofon" },
    ],
    links: [{ rel: "canonical", href: "/colofon" }],
  }),
  component: Colofon,
});

const rows: [string, string][] = [
  ["Juridische naam", legalCompany.legalName],
  ["Handelsnaam", legalCompany.tradeName],
  ["Bezoekadres", legalCompany.visitingAddress],
  ["Postcode en plaats", legalCompany.postalCity],
  ["KvK-nummer", legalCompany.kvk],
  ["Btw-identificatienummer", legalCompany.vat],
  ["Telefoon", legalCompany.phone],
  ["E-mail", legalCompany.email],
  ["Website", legalCompany.website],
];

function Colofon() {
  return (
    <LegalPage
      eyebrow="Colofon"
      title="Colofon"
      intro="Hieronder vind je de bedrijfs- en contactgegevens die horen bij deze website."
    >
      <div className="flex items-start gap-3 rounded-sm border border-brass/60 bg-brass/10 p-4">
        <AlertTriangle size={18} className="mt-0.5 shrink-0 text-brass-dim" aria-hidden />
        <p className="text-sm font-medium leading-relaxed text-oak">
          Controleer vóór publicatie de onderstaande bedrijfsgegevens aan de hand van het actuele
          KVK-uittreksel.
        </p>
      </div>

      <LegalSection title="Bedrijfsgegevens">
        <dl className="divide-y divide-oak/10 border-y border-oak/10">
          {rows.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
              <dt className="w-full text-xs uppercase tracking-[0.16em] text-oak/60 sm:w-56 sm:shrink-0">
                {label}
              </dt>
              <dd className="break-words text-oak/90">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm text-oak/70">
          De waarden tussen blokhaken zijn placeholders. Ze blijven zichtbaar totdat de eigenaar de
          gecontroleerde gegevens invult.
        </p>
      </LegalSection>

      <LegalSection title="Website">
        <p>
          Deze website is bedoeld als informatiebron over ons café: onze kaart, sfeer, openingstijden
          en contactgegevens. Er kan niet online worden besteld of gereserveerd.
        </p>
      </LegalSection>

      <LegalSection title="Auteursrecht">
        <p>
          © {new Date().getFullYear()} {legalCompany.tradeName}. Alle rechten voorbehouden. Teksten,
          foto's en vormgeving mogen niet zonder toestemming worden overgenomen.
        </p>
      </LegalSection>

      <LegalSection title="Juridische informatie">
        <p>
          Lees ook onze{" "}
          <Link to="/privacy" className="underline underline-offset-4">
            privacyverklaring
          </Link>
          , het{" "}
          <Link to="/cookies" className="underline underline-offset-4">
            cookiebeleid
          </Link>
          , de{" "}
          <Link to="/algemene-voorwaarden" className="underline underline-offset-4">
            algemene voorwaarden
          </Link>{" "}
          en de{" "}
          <Link to="/disclaimer" className="underline underline-offset-4">
            disclaimer
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
