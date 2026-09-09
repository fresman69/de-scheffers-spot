import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "../components/legal-page";
import { legalCompany } from "../lib/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacyverklaring — Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Hoe Stadscafé omgaat met persoonsgegevens: contact via telefoon en e-mail, technische servergegevens, hosting, de externe kaartdienst en jouw rechten.",
      },
      { property: "og:title", content: "Privacyverklaring — Stadscafé" },
      { property: "og:description", content: "Hoe Stadscafé omgaat met persoonsgegevens." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacyverklaring"
      intro="Wij vinden het belangrijk dat je weet wat er met je gegevens gebeurt als je onze website bezoekt of contact met ons opneemt. Hieronder leggen we dat in gewone taal uit."
    >
      <LegalSection title="Wie zijn wij">
        <p>
          Deze website is van {legalCompany.tradeName}, handelend onder{" "}
          {legalCompany.legalName}, gevestigd aan {legalCompany.visitingAddress},{" "}
          {legalCompany.postalCity}. Je bereikt ons via {legalCompany.phone} of{" "}
          <a href={`mailto:${legalCompany.email}`} className="underline underline-offset-4">
            {legalCompany.email}
          </a>
          . Voor de volledige bedrijfsgegevens verwijzen we naar het{" "}
          <Link to="/colofon" className="underline underline-offset-4">
            colofon
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Welke gegevens verwerken wij">
        <LegalList
          items={[
            <>
              <strong>Contactgegevens.</strong> Bel of mail je ons, dan verwerken we je naam,
              telefoonnummer of e-mailadres en de inhoud van je bericht. We gebruiken die gegevens
              alleen om je vraag te beantwoorden of een afspraak te maken.
            </>,
            <>
              <strong>Technische servergegevens.</strong> Onze hostingpartij legt bij elk bezoek
              standaard technische gegevens vast, zoals je IP-adres, het opgevraagde adres, tijdstip,
              browsertype en foutmeldingen. Dat is nodig om de site te leveren, te beveiligen en
              storingen op te lossen.
            </>,
            <>
              <strong>Groepsafspraken.</strong> Maak je een afspraak voor een groep of borrel, dan
              bewaren we de gegevens die daarvoor nodig zijn, zoals naam, contactgegevens, datum,
              aantal personen en afspraken over consumpties.
            </>,
          ]}
        />
        <p>
          Wij verzamelen op deze website geen gegevens voor marketing of profilering. Zolang dat zo
          blijft, staat er ook geen trackingcode op de site.
        </p>
      </LegalSection>

      <LegalSection title="Waarom en op welke grondslag">
        <LegalList
          items={[
            "Om je vraag of verzoek te beantwoorden en afspraken uit te voeren (uitvoering van een overeenkomst of stappen daaraan voorafgaand).",
            "Om de website veilig, beschikbaar en foutvrij te houden (gerechtvaardigd belang).",
            "Om te voldoen aan wettelijke verplichtingen, bijvoorbeeld administratie- en bewaarplichten (wettelijke verplichting).",
          ]}
        />
      </LegalSection>

      <LegalSection title="Hosting en verwerkers">
        <p>
          De website wordt gehost bij een externe hostingpartij. Die partij verwerkt technische
          gegevens uitsluitend in onze opdracht en mag deze niet voor eigen doeleinden gebruiken.
          Waar dat nodig is, maken wij hierover verwerkersafspraken.
        </p>
      </LegalSection>

      <LegalSection title="Externe kaartdienst">
        <p>
          Op de home- en contactpagina kun je een kaart bekijken. Die kaart komt van OpenStreetMap en
          wordt bewust <strong>niet automatisch geladen</strong>. Pas als je zelf op “Kaart laden”
          klikt, wordt verbinding gemaakt met OpenStreetMap. Daarbij worden onder meer je IP-adres en
          browsergegevens naar die dienst gestuurd. Wil je dat niet, gebruik dan de knop “Open route
          in OpenStreetMap”, die je pas na je eigen klik naar de externe site brengt.
        </p>
      </LegalSection>

      <LegalSection title="Externe links en sociale media">
        <p>
          Onze site bevat links naar externe pagina's, waaronder ons Instagram-profiel. Dat is een
          gewone link; we tonen geen ingesloten feed. Klik je door, dan geldt het privacybeleid van
          die andere partij. Wij hebben geen invloed op wat zij met je gegevens doen.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          We gebruiken alleen noodzakelijke functionaliteit. Er staan geen marketing- of
          trackingcookies op de site en we gebruiken geen analytische scripts. Meer hierover lees je
          op de{" "}
          <Link to="/cookies" className="underline underline-offset-4">
            cookiepagina
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Bewaartermijnen">
        <LegalList
          items={[
            "Contactberichten: zo lang als nodig is om je vraag af te handelen, en daarna maximaal twee jaar voor eventuele vervolgvragen.",
            "Gegevens over groepsafspraken: tot de afspraak is afgerond en afgerekend, en daarna zo lang als de administratieplicht vereist.",
            "Technische logbestanden: doorgaans enkele weken tot maanden, afhankelijk van de instellingen van de hostingpartij.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Delen met anderen">
        <p>
          Wij verkopen geen gegevens. We delen gegevens alleen met partijen die ons ondersteunen
          (zoals onze hosting- of e-mailprovider) of wanneer wij daartoe wettelijk verplicht zijn.
        </p>
      </LegalSection>

      <LegalSection title="Beveiliging">
        <p>
          We nemen passende technische en organisatorische maatregelen, waaronder een versleutelde
          verbinding (HTTPS), beperkte toegang tot gegevens en beveiligingsinstellingen op de server.
          Geen enkele maatregel biedt absolute zekerheid; merk je iets wat niet klopt, laat het ons
          dan weten.
        </p>
      </LegalSection>

      <LegalSection title="Jouw rechten">
        <LegalList
          items={[
            "Inzage in de gegevens die wij van je verwerken.",
            "Correctie van onjuiste gegevens.",
            "Verwijdering van gegevens, als er geen reden meer is om ze te bewaren.",
            "Beperking van de verwerking of bezwaar tegen verwerking op basis van gerechtvaardigd belang.",
            "Overdracht van gegevens die je zelf aan ons hebt verstrekt.",
            "Het intrekken van eerder gegeven toestemming, zonder gevolgen voor wat daarvoor al gebeurde.",
          ]}
        />
        <p>
          Wil je een van deze rechten gebruiken? Mail ons via{" "}
          <a href={`mailto:${legalCompany.email}`} className="underline underline-offset-4">
            {legalCompany.email}
          </a>
          . We reageren binnen een maand en kunnen om aanvullende gegevens vragen om te controleren
          of het verzoek van jou komt.
        </p>
      </LegalSection>

      <LegalSection title="Klacht indienen">
        <p>
          Kom je er met ons niet uit, dan kun je een klacht indienen bij de Autoriteit
          Persoonsgegevens via autoriteitpersoonsgegevens.nl.
        </p>
      </LegalSection>

      <LegalSection title="Wijzigingen">
        <p>
          Verandert er iets aan onze website of werkwijze, dan passen we deze verklaring aan. De
          datum bovenaan geeft aan wanneer de tekst voor het laatst is bijgewerkt.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
