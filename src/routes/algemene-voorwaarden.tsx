import { createFileRoute } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "../components/legal-page";
import { legalCompany } from "../lib/legal";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({
    meta: [
      { title: "Algemene voorwaarden — Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Onze voorwaarden voor groepsafspraken, borrels en arrangementen bij Stadscafé: reservering, annulering, betaling, huisregels en aansprakelijkheid.",
      },
      { property: "og:title", content: "Algemene voorwaarden — Stadscafé" },
      {
        property: "og:description",
        content: "Voorwaarden voor groepsafspraken, borrels en arrangementen.",
      },
      { property: "og:url", content: "/algemene-voorwaarden" },
    ],
    links: [{ rel: "canonical", href: "/algemene-voorwaarden" }],
  }),
  component: Voorwaarden,
});

function Voorwaarden() {
  return (
    <LegalPage
      eyebrow="Voorwaarden"
      title="Algemene voorwaarden"
      intro="Kom je gewoon een biertje drinken? Dan reken je ter plaatse af en heb je aan deze tekst weinig boodschap. Deze voorwaarden gelden vooral voor vooraf afgesproken groepsreserveringen, borrels, evenementen en arrangementen."
    >
      <LegalSection title="1. Waarop deze voorwaarden van toepassing zijn">
        <p>
          Losse consumpties in het café worden direct ter plaatse afgerekend; daarvoor gelden onze
          huisregels en de geldende kaartprijzen. Deze voorwaarden gelden voor afspraken die we
          vooraf maken, zoals een gereserveerde tafel of hoek voor een groep, een borrel, een
          besloten gelegenheid of een arrangement met hapjes en drankjes.
        </p>
      </LegalSection>

      <LegalSection title="2. Reservering en bevestiging">
        <LegalList
          items={[
            "Een afspraak komt tot stand zodra wij die schriftelijk of per e-mail hebben bevestigd.",
            "In de bevestiging staan datum, tijd, aantal personen, de afgesproken consumpties en de prijs of prijsafspraak.",
            "Wijzigingen in aantal personen of tijdstip geef je zo vroeg mogelijk door; we bevestigen die opnieuw.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Annulering">
        <p>
          Annuleren kan kosteloos tot 48 uur voor de afgesproken tijd. Bij annulering binnen 48 uur
          mogen wij redelijke, al gemaakte kosten in rekening brengen, zoals speciaal ingekochte
          producten en ingeplande extra bezetting. Wij annuleren alleen bij overmacht en zoeken dan
          samen met jou naar een alternatieve datum of betalen vooruitbetaalde bedragen terug.
        </p>
      </LegalSection>

      <LegalSection title="4. Betaling">
        <LegalList
          items={[
            "Bij groepen kan een aanbetaling of borg worden gevraagd; dat spreken we vooraf af.",
            "Openstaande bedragen reken je direct na afloop af, tenzij schriftelijk een factuur is afgesproken.",
            "Facturen betaal je binnen veertien dagen. Bij te late betaling mogen wij de wettelijke rente en redelijke incassokosten in rekening brengen.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Huisregels">
        <LegalList
          items={[
            "Aanwijzingen van onze medewerkers volg je op.",
            "We tolereren geen agressie, discriminatie of ongewenst gedrag; bij overtreding kunnen wij de toegang weigeren.",
            "Binnen geldt een rookverbod. Roken kan buiten op de daarvoor bestemde plek.",
            "Eigen eten en drinken zijn niet toegestaan, tenzij anders afgesproken.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Alcohol en leeftijd">
        <p>
          Wij schenken geen alcohol aan personen onder de 18 jaar en vragen om legitimatie bij
          twijfel. Doorgeven van alcohol aan minderjarigen is niet toegestaan. Bij duidelijke
          dronkenschap schenken wij niet verder; dat is wettelijk verplicht en niet onderhandelbaar.
        </p>
      </LegalSection>

      <LegalSection title="7. Schade">
        <p>
          Wordt er door jou of je gezelschap schade toegebracht aan ons pand, meubilair of andere
          eigendommen, dan is de veroorzaker daarvoor aansprakelijk. Bij een groepsafspraak spreken we
          de contactpersoon hierop aan. Wij beperken de schade waar mogelijk en brengen alleen de
          werkelijke herstel- of vervangingskosten in rekening.
        </p>
      </LegalSection>

      <LegalSection title="8. Aansprakelijkheid">
        <p>
          Wij zijn aansprakelijk voor schade die het gevolg is van een tekortkoming die aan ons is toe
          te rekenen, volgens de gewone regels van Nederlands recht. Voor indirecte schade, zoals
          gederfde winst, zijn wij niet aansprakelijk, tenzij sprake is van opzet of bewuste
          roekeloosheid. Wij sluiten aansprakelijkheid voor letsel- of overlijdensschade niet uit, en
          niets in deze voorwaarden beperkt je dwingende rechten als consument.
        </p>
        <p>
          Op verlies of diefstal van persoonlijke eigendommen hebben wij beperkt zicht; let zelf op je
          spullen. Dit ontslaat ons niet van onze zorgplicht.
        </p>
      </LegalSection>

      <LegalSection title="9. Klachten">
        <p>
          Is er iets niet goed gegaan? Meld het bij voorkeur direct ter plaatse, zodat we het meteen
          kunnen oplossen. Lukt dat niet, mail dan binnen veertien dagen naar{" "}
          <a href={`mailto:${legalCompany.email}`} className="underline underline-offset-4">
            {legalCompany.email}
          </a>
          . Je krijgt binnen veertien dagen een inhoudelijke reactie.
        </p>
      </LegalSection>

      <LegalSection title="10. Toepasselijk recht">
        <p>
          Op deze voorwaarden en op onze afspraken is Nederlands recht van toepassing. Geschillen
          leggen we voor aan de bevoegde Nederlandse rechter, waarbij consumenten hun wettelijke keuze
          van rechter behouden.
        </p>
      </LegalSection>

      <LegalSection title="11. Wijzigingen">
        <p>
          Wij kunnen deze voorwaarden aanpassen. Voor een gemaakte afspraak geldt de versie die op het
          moment van bevestiging op de website stond.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
