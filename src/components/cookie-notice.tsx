import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const STORAGE_KEY = "stadscafe-cookie-notice";
export const OPEN_COOKIE_SETTINGS = "stadscafe:open-cookie-settings";

/**
 * Optionele (niet-noodzakelijke) cookiecategorieën.
 * Zolang deze lijst leeg is gebruikt de site uitsluitend noodzakelijke
 * functionaliteit en tonen we een informatieve melding zonder keuzeknoppen
 * die suggereren dat er iets te accepteren valt.
 *
 * Wordt hier later een categorie toegevoegd, dan verschijnt automatisch een
 * echte opt-in: niets staat vooraf aangevinkt en weigeren gaat net zo
 * eenvoudig als accepteren.
 */
export type OptionalCookieCategory = {
  id: string;
  label: string;
  description: string;
};

export const optionalCookieCategories: OptionalCookieCategory[] = [];

type StoredPrefs = { acknowledged: true; optional: Record<string, boolean> };

function readPrefs(): StoredPrefs | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredPrefs) : null;
  } catch {
    return null;
  }
}

function writePrefs(prefs: StoredPrefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* opslag niet beschikbaar — de site werkt gewoon door */
  }
}

export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  const [choices, setChoices] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const open = () => {
      const stored = readPrefs();
      setChoices(stored?.optional ?? {});
      setVisible(true);
    };
    if (!readPrefs()) open();
    window.addEventListener(OPEN_COOKIE_SETTINGS, open);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
  }, []);

  if (!visible) return null;

  const hasOptional = optionalCookieCategories.length > 0;

  const save = (optional: Record<string, boolean>) => {
    writePrefs({ acknowledged: true, optional });
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookiemelding"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-oak/98 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-display-condensed text-sm uppercase tracking-[0.18em] text-brass">
            Cookies
          </p>
          <p className="max-w-[62ch] text-sm leading-relaxed text-paper/85">
            {hasOptional
              ? "We gebruiken noodzakelijke functionaliteit en vragen apart je toestemming voor optionele cookies. Niets staat vooraf aangevinkt."
              : "Deze site gebruikt alleen noodzakelijke functionaliteit. We plaatsen geen marketing- of trackingcookies en gebruiken geen analytische scripts."}{" "}
            <Link to="/cookies" className="underline underline-offset-4 hover:text-brass">
              Lees meer over cookies
            </Link>
            .
          </p>

          {hasOptional && (
            <ul className="space-y-2 pt-1">
              {optionalCookieCategories.map((c) => (
                <li key={c.id} className="flex items-start gap-3 text-sm text-paper/80">
                  <input
                    id={`cookie-${c.id}`}
                    type="checkbox"
                    checked={choices[c.id] ?? false}
                    onChange={(e) => setChoices((p) => ({ ...p, [c.id]: e.target.checked }))}
                    className="mt-1 accent-[var(--color-brass,#c8a15a)]"
                  />
                  <label htmlFor={`cookie-${c.id}`}>
                    <span className="font-medium text-paper">{c.label}</span> — {c.description}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap gap-3">
          {hasOptional ? (
            <>
              <button
                type="button"
                onClick={() => save({})}
                className="rounded-sm border border-border px-5 py-2.5 text-sm text-paper transition-colors hover:bg-oak-light"
              >
                Weigeren
              </button>
              <button
                type="button"
                onClick={() => save(choices)}
                className="rounded-sm bg-brass px-5 py-2.5 text-sm font-medium text-oak transition-colors hover:bg-paper"
              >
                Keuze opslaan
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => save({})}
              className="rounded-sm bg-brass px-5 py-2.5 text-sm font-medium text-oak transition-colors hover:bg-paper"
            >
              Begrepen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
