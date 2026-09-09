import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "../components/legal-page";
import { OPEN_COOKIE_SETTINGS } from "../components/cookie-notice";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookiebeleid — Stadscafé Dordrecht" },
      {
        name: "description",
        content:
          "Stadscafé gebruikt alleen noodzakelijke functionaliteit: geen marketing- of trackingcookies en geen analytische scripts. Lees hoe we hiermee omgaan.",
      },
      { property: "og:title", content: "Cookiebeleid — Stadscafé" },
      { property: "og:description", content: "Alleen noodzakelijke functionaliteit, geen tracking." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookiebeleid"
      intro="Kort samengevat: deze website werkt zonder marketing- of trackingcookies. We leggen hieronder uit wat er wél gebeurt en wanneer er een externe dienst wordt aangeroepen."
    >
      <LegalSection title="Wat zijn cookies">
        <p>
          Cookies zijn kleine bestandjes die een website op je apparaat kan opslaan. Vergelijkbare
          technieken, zoals lokale opslag in je browser, werken op dezelfde manier. Voor
          niet-noodzakelijke cookies is toestemming nodig; voor strikt noodzakelijke functionaliteit
          niet.
        </p>
      </LegalSection>

      <LegalSection title="Wat wij gebruiken">
        <LegalList
          items={[
            "Noodzakelijke functionaliteit om de website te tonen en veilig te laten werken.",
            "Eén lokale voorkeur waarin we onthouden dat je de cookiemelding hebt gezien, zodat die niet bij elk bezoek terugkeert. Deze staat alleen in je eigen browser.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Wat wij niet gebruiken">
        <LegalList
          items={[
            "Geen Google Analytics of andere statistiekentools.",
            "Geen advertentie-, marketing- of retargetingcookies.",
            "Geen ingesloten socialmediafeeds of like-knoppen die meekijken.",
            "Geen profilering en geen doorverkoop van gegevens.",
          ]}
        />
        <p>
          Omdat er geen niet-noodzakelijke cookies zijn, tonen we bewust geen keuze “alles
          accepteren”. Dat zou een keuze suggereren die er niet is.
        </p>
      </LegalSection>

      <LegalSection title="Externe kaart">
        <p>
          Op de home- en contactpagina staat een kaart van OpenStreetMap. Die laadt niet vanzelf. Pas
          als je op “Kaart laden” klikt, wordt de externe dienst aangeroepen en worden onder meer je
          IP-adres en browsergegevens naar OpenStreetMap gestuurd. Klik je niet, dan gebeurt er niets
          en zie je gewoon het adres met een link om de route in een nieuw tabblad te openen.
        </p>
      </LegalSection>

      <LegalSection title="Als er later wel optionele cookies komen">
        <p>
          Zou dat ooit veranderen, dan vragen we vooraf om echte toestemming. Niets staat dan vooraf
          aangevinkt, weigeren is net zo eenvoudig als accepteren, en de website blijft normaal
          werken als je weigert. Je keuze kun je altijd opnieuw bekijken en wijzigen.
        </p>
      </LegalSection>

      <LegalSection title="Je voorkeuren bekijken">
        <p>
          Via onderstaande knop open je de cookiemelding opnieuw. Je kunt cookies en lokale opslag
          daarnaast altijd zelf verwijderen via de instellingen van je browser.
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
          className="rounded-sm bg-oak px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-oak-light"
        >
          Cookie-instellingen openen
        </button>
      </LegalSection>

      <LegalSection title="Meer weten">
        <p>
          Hoe wij met persoonsgegevens omgaan, lees je in onze{" "}
          <Link to="/privacy" className="underline underline-offset-4">
            privacyverklaring
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
