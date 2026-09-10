import { beers, type Beer } from "./beers";
import { drinks, type Drink } from "./drinks";
import { hapas } from "./hapas";

export type MenuKind = "bier" | "drank" | "hap";

export type MenuItem = {
  kind: MenuKind;
  name: string;
  category: string;
  description?: string;
  /** Extra zoekwoorden, afgeleid uit de kaart zelf (weetje, ABV, IBU, inhoud). */
  extra?: string;
  /** Pagina waar het item op de kaart staat. */
  href: "/bierkaart" | "/dranken" | "/borrelkaart";
  beer?: Beer;
  drink?: Drink;
  hap?: { name: string; description?: string };
};

/**
 * Eén zoekindex over de bestaande kaartdata. Verandert de kaart, dan verandert
 * de zoekfunctie automatisch mee — er is geen losse lijst met zoekwoorden.
 */
export const menuItems: MenuItem[] = [
  ...beers.map<MenuItem>((b) => ({
    kind: "bier",
    name: b.name,
    category: b.category,
    description: b.description,
    extra: [b.note, b.abv, b.ibu, b.volume].filter(Boolean).join(" "),
    href: "/bierkaart",
    beer: b,
  })),
  ...drinks.map<MenuItem>((d) => ({
    kind: "drank",
    name: d.name,
    category: d.category,
    description: d.description,
    extra: [d.abv, d.volume].filter(Boolean).join(" "),
    href: "/dranken",
    drink: d,
  })),
  ...hapas.map<MenuItem>((h) => ({
    kind: "hap",
    name: h.name,
    category: "Happas",
    description: h.description,
    href: "/borrelkaart",
    hap: h,
  })),
];

export const menuCategories: { name: string; kind: MenuKind; href: MenuItem["href"] }[] =
  Array.from(
    new Map(
      menuItems.map((i) => [i.category, { name: i.category, kind: i.kind, href: i.href }]),
    ).values(),
  );

/** Kleine, behoudende synoniemenlaag — alleen woorden die op onze kaart leven. */
const synonyms: Record<string, string[]> = {
  bier: ["blond", "tripel", "dubbel", "pale ale", "stout", "weizen", "saison", "tap", "pils", "quad", "amber", "geuze"],
  pils: ["van de tap", "pilsener"],
  speciaalbier: ["tripel", "dubbel", "blond", "quad", "saison"],
  ipa: ["indian pale ale", "pale ale"],
  wijn: ["wijn wit", "wijn rood", "wijn rosé", "mousserend", "prosecco", "cava"],
  wit: ["wijn wit", "wit / weizen"],
  rood: ["wijn rood"],
  fris: ["frisdrank", "cola", "sinas", "tonic", "sap"],
  cola: ["pepsi", "frisdrank"],
  koffie: ["koffie / thee", "espresso", "cappuccino", "cortado"],
  thee: ["koffie / thee"],
  borrel: ["happas", "bitterballen", "nachos", "olijven"],
  hapje: ["happas"],
  snack: ["happas"],
  alcoholvrij: ["0.0 / alcoholarm"],
  zonder: ["0.0 / alcoholarm"],
  sterk: ["whisky", "rum", "jenever", "vodka", "likeur"],
  gin: ["gin & tonic"],
  zuur: ["sour / geuze"],
  fruit: ["fruit / zoeter", "kriek"],
};

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Enkelvoud/meervoud gelijktrekken (bieren → bier, hapjes → hapje). */
function stem(word: string): string {
  return word.replace(/(en|s|es)$/i, "");
}

/** Levenshtein met vroege afbreking — ruim genoeg voor "cappucino". */
function distance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      const v = Math.min(prev[j] + 1, row[j - 1] + 1, prev[j - 1] + cost);
      row.push(v);
      if (v < best) best = v;
    }
    if (best > max) return max + 1;
    prev = row;
  }
  return prev[b.length];
}

function fuzzyHit(token: string, haystack: string): boolean {
  if (token.length < 4) return false;
  const max = token.length > 6 ? 2 : 1;
  return haystack.split(" ").some((w) => w.length > 2 && distance(token, w, max) <= max);
}

export type MenuMatch = {
  item: MenuItem;
  score: number;
  /** Waarom dit resultaat verschijnt — kort en menselijk. */
  reason: string;
};

function expand(query: string): string[] {
  const tokens = normalize(query).split(" ").filter(Boolean);
  const out = new Set<string>();
  for (const t of tokens) {
    out.add(t);
    out.add(stem(t));
    for (const [key, values] of Object.entries(synonyms)) {
      if (key === t || key === stem(t) || stem(key) === stem(t)) values.forEach((v) => out.add(v));
    }
  }
  return [...out].filter(Boolean);
}

export function searchMenu(query: string, limit = 60): MenuMatch[] {
  const raw = normalize(query);
  if (!raw) return [];
  const terms = expand(query);
  const results: MenuMatch[] = [];

  for (const item of menuItems) {
    const name = normalize(item.name);
    const category = normalize(item.category);
    const description = normalize(item.description ?? "");
    const extra = normalize(item.extra ?? "");

    let score = 0;
    let reason = "";
    const mark = (points: number, why: string) => {
      if (points > score) {
        score = points;
        reason = why;
      } else if (points > 0) {
        score += Math.round(points / 4);
      }
    };

    if (name === raw) mark(100, "Exacte treffer");
    else if (name.startsWith(raw)) mark(85, "Naam begint hiermee");
    else if (name.includes(raw)) mark(75, "Staat in de naam");

    for (const t of terms) {
      if (!t) continue;
      if (name.includes(t)) mark(65, "Staat in de naam");
      else if (category.includes(t)) mark(45, `Categorie: ${item.category}`);
      else if (description.includes(t)) mark(30, "Past bij de omschrijving");
      else if (extra.includes(t)) mark(20, "Past bij de kenmerken");
      else if (fuzzyHit(t, name)) mark(55, "Bedoelde je dit?");
      else if (fuzzyHit(t, category)) mark(35, `Categorie: ${item.category}`);
    }

    if (score > 0) results.push({ item, score, reason });
  }

  return results
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name))
    .slice(0, limit);
}

export type Suggestion =
  | { type: "category"; label: string; kind: MenuKind }
  | { type: "product"; label: string; kind: MenuKind; category: string };

export function suggest(query: string, limit = 7): Suggestion[] {
  const raw = normalize(query);
  if (!raw) return [];
  const terms = expand(query);
  const hit = (value: string) =>
    value.includes(raw) || terms.some((t) => value.includes(t) || fuzzyHit(t, value));

  const cats: Suggestion[] = menuCategories
    .filter((c) => hit(normalize(c.name)))
    .slice(0, 4)
    .map((c) => ({ type: "category", label: c.name, kind: c.kind }));

  const seen = new Set(cats.map((c) => c.label.toLowerCase()));
  const products: Suggestion[] = searchMenu(query, 20)
    .filter((m) => !seen.has(m.item.name.toLowerCase()))
    .slice(0, limit - cats.length)
    .map((m) => ({
      type: "product",
      label: m.item.name,
      kind: m.item.kind,
      category: m.item.category,
    }));

  return [...cats, ...products];
}

export const kindIcon: Record<MenuKind, string> = {
  bier: "🍺",
  drank: "🍷",
  hap: "🍽️",
};
