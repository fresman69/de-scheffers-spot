import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { BeerCard } from "./beer-card";
import { ProductCard } from "./product-card";
import {
  kindIcon,
  searchMenu,
  suggest,
  type MenuMatch,
  type Suggestion,
} from "../lib/menu/search";

const QUICK = ["Bier", "Tripel", "IPA", "Wijn", "Koffie", "Borrel"];
const RECENT_KEY = "stadscafe-recent-zoek";

type Props = {
  /** Wordt aangeroepen zodra er wel/niet gezocht wordt, zodat de pagina haar eigen kaart kan verbergen. */
  onSearchingChange?: (searching: boolean) => void;
};

/**
 * Slimme zoekbalk over de volledige kaart: bieren, dranken en happas.
 * Klassieke menukaart-uitstraling met moderne autocomplete-UX.
 */
export function MenuSearch({ onSearchingChange }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [recent, setRecent] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const trimmed = query.trim();
  const suggestions = useMemo<Suggestion[]>(() => suggest(trimmed), [trimmed]);
  const results = useMemo<MenuMatch[]>(() => searchMenu(trimmed), [trimmed]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_KEY);
      if (stored) setRecent(JSON.parse(stored).slice(0, 4));
    } catch {
      /* geen opslag beschikbaar — niet erg */
    }
  }, []);

  useEffect(() => {
    onSearchingChange?.(trimmed.length > 0);
  }, [trimmed, onSearchingChange]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function remember(term: string) {
    const next = [term, ...recent.filter((r) => r.toLowerCase() !== term.toLowerCase())].slice(0, 4);
    setRecent(next);
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(next));
    } catch {
      /* niets opslaan is prima */
    }
  }

  function choose(term: string) {
    setQuery(term);
    remember(term);
    setOpen(false);
    setCursor(-1);
    inputRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setOpen(false);
      setCursor(-1);
      return;
    }
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (c <= 0 ? suggestions.length - 1 : c - 1));
    } else if (e.key === "Enter") {
      if (cursor >= 0) {
        e.preventDefault();
        choose(suggestions[cursor].label);
      } else if (trimmed) {
        remember(trimmed);
        setOpen(false);
      }
    }
  }

  const showDropdown = open && trimmed.length > 0 && suggestions.length > 0;
  const groups = useMemo(() => {
    const map = new Map<string, MenuMatch[]>();
    for (const m of results) {
      const list = map.get(m.item.category) ?? [];
      list.push(m);
      map.set(m.item.category, list);
    }
    return [...map.entries()];
  }, [results]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div ref={wrapRef} className="relative mx-auto max-w-2xl">
        <label htmlFor="menu-search" className="sr-only">
          Zoek in onze kaart
        </label>
        <div className="flex items-center gap-3 rounded-sm bg-oak-light/80 px-4 py-3 ring-1 ring-border transition-colors focus-within:ring-brass/70">
          <Search size={18} strokeWidth={1.5} className="shrink-0 text-brass" aria-hidden />
          <input
            id="menu-search"
            ref={inputRef}
            type="search"
            role="combobox"
            autoComplete="off"
            aria-expanded={showDropdown}
            aria-controls="menu-search-suggesties"
            aria-autocomplete="list"
            aria-activedescendant={cursor >= 0 ? `menu-suggestie-${cursor}` : undefined}
            value={query}
            placeholder="Waar heb je zin in?"
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setCursor(-1);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            className="min-h-11 w-full bg-transparent text-base text-paper placeholder:text-paper/45 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              aria-label="Zoekopdracht wissen"
              onClick={() => {
                setQuery("");
                setCursor(-1);
                inputRef.current?.focus();
              }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-paper/60 transition-colors hover:text-brass"
            >
              <X size={18} strokeWidth={1.5} aria-hidden />
            </button>
          ) : null}
        </div>

        {showDropdown ? (
          <ul
            id="menu-search-suggesties"
            role="listbox"
            aria-label="Suggesties"
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 max-h-[60vh] overflow-y-auto rounded-sm bg-oak-light py-2 shadow-xl ring-1 ring-brass/25 animate-in fade-in slide-in-from-top-1 duration-150"
          >
            {suggestions.map((s, i) => (
              <li key={`${s.type}-${s.label}`}>
                <button
                  type="button"
                  id={`menu-suggestie-${i}`}
                  role="option"
                  aria-selected={cursor === i}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => choose(s.label)}
                  className={`flex min-h-11 w-full items-center gap-3 px-4 py-2 text-left transition-colors ${
                    cursor === i ? "bg-wine/25 text-paper" : "text-paper/85 hover:bg-wine/15"
                  }`}
                >
                  <span aria-hidden>{kindIcon[s.kind]}</span>
                  <span className="font-display-condensed text-base tracking-wide">{s.label}</span>
                  <span className="ml-auto text-[11px] uppercase tracking-[0.2em] text-brass/80">
                    {s.type === "category" ? "Categorie" : s.category}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="type-label text-paper/50">Snel zoeken</span>
          {QUICK.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => choose(q)}
              className="min-h-9 rounded-sm px-3 py-1.5 text-[12px] uppercase tracking-[0.16em] text-paper/75 ring-1 ring-border transition-colors hover:text-brass hover:ring-brass/50"
            >
              {q}
            </button>
          ))}
        </div>

        {!trimmed && recent.length > 0 ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="type-label text-paper/40">Recent</span>
            {recent.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => choose(r)}
                className="min-h-9 rounded-sm px-3 py-1.5 text-[12px] text-paper/60 underline-offset-4 transition-colors hover:text-brass hover:underline"
              >
                {r}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {trimmed ? (
        <div className="mt-12" aria-live="polite">
          {results.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-sm bg-oak-light/70 px-6 py-10 text-center ring-1 ring-border">
              <p className="font-display-condensed text-2xl text-paper">Niks gevonden.</p>
              <p className="mt-2 text-paper/70">
                Misschien heb je zin in iets anders? Onze bediening denkt graag met je mee.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/bierkaart"
                  className="min-h-11 rounded-sm bg-wine px-5 py-3 type-label text-paper transition-colors hover:bg-wine/85"
                >
                  Bekijk alle bieren
                </Link>
                <Link
                  to="/dranken"
                  className="min-h-11 rounded-sm px-5 py-3 type-label text-paper/80 ring-1 ring-border transition-colors hover:text-brass hover:ring-brass/50"
                >
                  Bekijk de dranken
                </Link>
              </div>
            </div>
          ) : (
            <>
              <p className="mb-8 text-center text-sm text-paper/60">
                {results.length} {results.length === 1 ? "resultaat" : "resultaten"} voor “{trimmed}”
              </p>
              {groups.map(([category, matches]) => (
                <div key={category} className="mb-12 last:mb-0">
                  <div className="mb-6 flex items-center gap-4">
                    <span aria-hidden className="h-px flex-1 bg-brass/40" />
                    <h2 className="type-h3 text-paper">{category}</h2>
                    <span className="type-label text-brass/70">{matches.length}</span>
                    <span aria-hidden className="h-px flex-1 bg-brass/40" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {matches.map((m) => (
                      <div key={`${m.item.kind}-${m.item.category}-${m.item.name}`}>
                        {m.item.beer ? (
                          <BeerCard beer={m.item.beer} />
                        ) : (
                          <ProductCard
                            product={m.item.drink ?? m.item.hap ?? { name: m.item.name }}
                            tone="dark"
                          />
                        )}
                        <p className="mt-2 px-1 text-[11px] uppercase tracking-[0.18em] text-brass/70">
                          {m.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
