import { createFileRoute } from "@tanstack/react-router";
import { Beer, Music, Brain, Trophy, PartyPopper } from "lucide-react";
import { EventCard, type CafeEvent } from "../components/event-card";
import { SectionHeader } from "../components/section-header";
import { Reveal } from "../components/reveal";
import { TextLink } from "../components/cta-button";

export const Route = createFileRoute("/evenementen")({
  head: () => ({
    meta: [
      { title: "Evenementen — Live muziek, proeverij en pubquiz | Stadscafé" },
      {
        name: "description",
        content:
          "Wat er bij ons in het café te doen is: live muziek, bierproeverijen, pubquiz, sport op groot scherm en thema-avonden. Data worden aangekondigd zodra ze vaststaan.",
      },
      { property: "og:title", content: "Evenementen — Stadscafé" },
      {
        property: "og:description",
        content: "Live muziek, bierproeverij, pubquiz en sport in ons bruine café in Dordrecht.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/evenementen" },
    ],
    links: [{ rel: "canonical", href: "/evenementen" }],
  }),
  component: Evenementen,
});

/**
 * Herbruikbaar evenemententemplate. De soorten avonden staan vast,
 * concrete data vullen we pas in als ze bevestigd zijn — niets verzinnen.
 */
const events: CafeEvent[] = [
  {
    title: "Live muziek",
    body: "Akoestisch of met een bandje, midden in de kroeg. Zet hier de artiest en de aanvangstijd.",
    icon: Music,
  },
  {
    title: "Bierproeverij",
    body: "Een rondje langs onze taps en flessen, met uitleg van de bar. Vul hier het thema en het aantal plaatsen in.",
    icon: Beer,
  },
  {
    title: "Pubquiz",
    body: "Teams, vragen en een glas erbij. Zet hier de datum en hoe je je aanmeldt.",
    icon: Brain,
  },
  {
    title: "Sport op het scherm",
    body: "Samen kijken bij een grote wedstrijd. Vul hier de wedstrijd en de aftrap in.",
    icon: Trophy,
  },
  {
    title: "Thema-avond",
    body: "Van platenavond tot seizoensbier. Beschrijf hier waar de avond om draait.",
    icon: PartyPopper,
  },
];

function Evenementen() {
  return (
    <>
      <section className="bg-bordeaux section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-4 font-script type-eyebrow text-mustard">Wat er te doen is</p>
          <h1 className="mb-6 max-w-[22ch] type-h1 text-cream">Evenementen</h1>
          <p className="max-w-[60ch] text-pretty type-body text-cream/85">
            Naast een goed glas gebeurt er geregeld iets in de zaak. Hieronder de soorten avonden
            die bij ons passen — zodra een datum vaststaat, verschijnt die hier.
          </p>
        </div>
      </section>

      <section className="bg-oak section-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Agenda"
            title="Binnenkort in het café"
            intro="Er staat nog niets gepland op deze pagina. De kaarten hieronder zijn klaar om met echte data gevuld te worden."
            action={<TextLink to="/contact">Vraag ernaar in het café →</TextLink>}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={Math.min(i, 5) * 90}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
