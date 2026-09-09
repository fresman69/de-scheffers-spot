import { createFileRoute } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "../components/legal-page";
import { legalCompany } from "../lib/legal";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Informatie over openingstijden, assortiment, prijzen en externe links op de website van Stadscafé kan wijzigen. Lees onze disclaimer.",
      },
      { property: "og:title", content: "Disclaimer — Stadscafé" },
      { property: "og:description", content: "Over de informatie op deze website." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <LegalPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="We doen ons best om de informatie op deze website kloppend en actueel te houden. Toch kan er iets veranderen of ergens een foutje in sluipen."
    >
      <LegalSection title="Openingstijden">
        <p>
          Openingstijden kunnen afwijken door feestdagen, drukte, besloten gelegenheden of
          onvoorziene omstandigheden. Wil je zeker weten dat we open zijn? Bel ons dan even via{" "}
          {legalCompany.phone}.
        </p>
      </LegalSection>

      <LegalSection title="Assortiment en prijzen">
        <LegalList
          items={[
            "Onze bier-, dranken- en happas-kaart wisselt regelmatig; niet elk getoond product is altijd op voorraad.",
            "Prijzen op de website zijn indicatief. De prijzen en kaart in het café zijn leidend.",
            "Afbeeldingen zijn ter illustratie; verpakking of presentatie kan afwijken.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Externe links">
        <p>
          Onze site verwijst naar externe pagina's, zoals kaartmateriaal en sociale media. Wij hebben
          geen zeggenschap over de inhoud of beschikbaarheid daarvan en zijn daarvoor niet
          verantwoordelijk.
        </p>
      </LegalSection>

      <LegalSection title="Aansprakelijkheid">
        <p>
          Aan de informatie op deze website kunnen geen rechten worden ontleend. Wij aanvaarden geen
          aansprakelijkheid voor schade door onvolledige of verouderde informatie, voor zover dat
          wettelijk is toegestaan. Deze disclaimer sluit onze wettelijke aansprakelijkheid niet
          volledig uit: aansprakelijkheid voor opzet, bewuste roekeloosheid en voor letsel- of
          overlijdensschade blijft altijd bestaan, net als je rechten als consument.
        </p>
      </LegalSection>

      <LegalSection title="Wijzigingen">
        <p>
          We mogen de inhoud van deze website op elk moment aanpassen, aanvullen of verwijderen. De
          datum bovenaan geeft aan wanneer deze tekst voor het laatst is bijgewerkt.
        </p>
      </LegalSection>

      <LegalSection title="Auteursrecht">
        <p>
          Teksten, foto's en vormgeving op deze site zijn beschermd. Overname zonder onze
          toestemming is niet toegestaan, behalve wanneer de wet dat uitdrukkelijk toestaat.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
