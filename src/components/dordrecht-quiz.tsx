import { useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";

type Question = {
  vraag: string;
  opties: string[];
  goed: number;
  weetje: string;
};

const vragen: Question[] = [
  {
    vraag: "Dordrecht kreeg als eerste stad van Holland stadsrechten. In welk jaar?",
    opties: ["1220", "1421", "1572"],
    goed: 0,
    weetje:
      "In 1220 kreeg Dordrecht stadsrechten van graaf Willem I — daarmee is het de oudste stad van Holland.",
  },
  {
    vraag: "Waar dankt het Scheffersplein zijn naam aan?",
    opties: [
      "Een oude schippersfamilie",
      "Schilder Ary Scheffer",
      "De schaapsmarkt die er vroeger stond",
    ],
    goed: 1,
    weetje:
      "Ary Scheffer werd in 1795 in Dordrecht geboren en werd een gevierd schilder in Parijs. Zijn standbeeld staat midden op het plein.",
  },
  {
    vraag: "Welke ramp maakte van het Dordtse achterland in 1421 een waterland?",
    opties: ["De Allerheiligenvloed", "De Sint-Elisabethsvloed", "De Kerstvloed"],
    goed: 1,
    weetje:
      "Door de Sint-Elisabethsvloed verdween de Grote Waard onder water. Daaruit ontstond later de Biesbosch, en werd Dordrecht een eiland.",
  },
  {
    vraag: "Wat is er bijzonder aan de toren van de Grote Kerk?",
    opties: [
      "Hij is nooit afgebouwd en staat scheef",
      "Hij is van hout",
      "Hij staat los van de kerk",
    ],
    goed: 0,
    weetje:
      "De toren zakte tijdens de bouw scheef en bleef onafgebouwd. In de top hangen vier wijzerplaten en het grootste kerkuurwerk van Nederland.",
  },
  {
    vraag: "Welke beroemde vergadering vond in 1618–1619 in Dordrecht plaats?",
    opties: ["De Vrede van Dordt", "De Synode van Dordrecht", "De Statenvergadering"],
    goed: 1,
    weetje:
      "Op de Synode van Dordrecht werd besloten tot de Statenvertaling van de Bijbel — een van de fundamenten van het geschreven Nederlands.",
  },
];

export function DordrechtQuiz() {
  const [index, setIndex] = useState(0);
  const [gekozen, setGekozen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [klaar, setKlaar] = useState(false);

  const vraag = vragen[index];

  function kies(i: number) {
    if (gekozen !== null) return;
    setGekozen(i);
    if (i === vraag.goed) setScore((s) => s + 1);
  }

  function volgende() {
    if (index + 1 >= vragen.length) {
      setKlaar(true);
      return;
    }
    setIndex((i) => i + 1);
    setGekozen(null);
  }

  function opnieuw() {
    setIndex(0);
    setGekozen(null);
    setScore(0);
    setKlaar(false);
  }

  if (klaar) {
    return (
      <div className="card-cozy mx-auto max-w-2xl bg-oak p-8 text-center ring-1 ring-border md:p-12">
        <p className="mb-3 font-script type-eyebrow text-brass">Uitslag</p>
        <p className="mb-4 font-display-condensed text-6xl text-mustard">
          {score}/{vragen.length}
        </p>
        <p className="mx-auto mb-8 max-w-[42ch] text-pretty type-body text-paper/85">
          {score === vragen.length
            ? "Alles goed — jij kent Dordt beter dan de gemiddelde stamgast. Het eerste rondje kennis is voor jou."
            : score >= 3
              ? "Netjes! Je weet je weg in de stad. De rest hoor je vanzelf aan de bar."
              : "Nog wat te leren over Dordt. Kom langs, dan vertellen we de rest bij een goed glas."}
        </p>
        <button
          type="button"
          onClick={opnieuw}
          className="inline-flex items-center gap-2 rounded-sm bg-wine px-6 py-3 type-label text-paper transition-colors hover:bg-wine-dim"
        >
          <RotateCcw size={16} /> Speel opnieuw
        </button>
      </div>
    );
  }

  return (
    <div className="card-cozy mx-auto max-w-2xl bg-oak p-6 ring-1 ring-border sm:p-8 md:p-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-[11px] uppercase tracking-[0.3em] text-brass">
          Vraag {index + 1} / {vragen.length}
        </span>
        <span className="text-[11px] uppercase tracking-[0.3em] text-paper/60">
          Score {score}
        </span>
      </div>
      <div aria-hidden className="mb-8 h-px w-full bg-border">
        <div
          className="h-px bg-brass transition-all duration-500"
          style={{ width: `${((index + (gekozen !== null ? 1 : 0)) / vragen.length) * 100}%` }}
        />
      </div>

      <h3 className="mb-8 text-balance type-h3 text-paper">{vraag.vraag}</h3>

      <ul className="space-y-3">
        {vraag.opties.map((optie, i) => {
          const isGoed = i === vraag.goed;
          const isGekozen = i === gekozen;
          const beantwoord = gekozen !== null;
          return (
            <li key={optie}>
              <button
                type="button"
                onClick={() => kies(i)}
                disabled={beantwoord}
                aria-pressed={isGekozen}
                className={`flex w-full items-center justify-between gap-4 rounded-sm px-5 py-4 text-left text-sm transition-colors ${
                  beantwoord && isGoed
                    ? "bg-brass/15 text-paper ring-1 ring-brass"
                    : beantwoord && isGekozen
                      ? "bg-wine/25 text-paper ring-1 ring-wine"
                      : "bg-oak-light text-paper/85 ring-1 ring-border hover:ring-brass/60"
                }`}
              >
                <span>{optie}</span>
                {beantwoord && isGoed ? <Check size={16} className="shrink-0 text-brass" /> : null}
                {beantwoord && isGekozen && !isGoed ? (
                  <X size={16} className="shrink-0 text-paper/70" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {gekozen !== null ? (
        <div className="mt-8">
          <p className="text-pretty text-sm leading-relaxed text-paper/85">
            <span className="mr-2 font-script text-xl text-brass">Weetje</span>
            {vraag.weetje}
          </p>
          <button
            type="button"
            onClick={volgende}
            className="mt-6 rounded-sm bg-wine px-6 py-3 type-label text-paper transition-colors hover:bg-wine-dim"
          >
            {index + 1 >= vragen.length ? "Bekijk je score" : "Volgende vraag"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
