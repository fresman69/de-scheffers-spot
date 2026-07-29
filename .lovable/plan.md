
# Menukaart-stijl doorvertalen naar de website

De fysieke kaart van Rijke & Zn. (design: Sinisters.nl) heeft een heel eigen, poster-achtig karakter. Doel: de website onmiskenbaar dezelfde merktaal geven, zonder de kaart 1-op-1 na te maken.

## Wat ik uit de kaart heb geleerd

**Kleur** — cremewit papier als basis, met blokken in vier signaalkleuren:
- Wijnrood / bordeaux (dominant, koppen & accenten)
- Diep aubergine/oak (bijna-zwart bruin, panelen)
- Mosterdgeel (warm accent, badges)
- Petrol/teal blauw (koel contrast, één paneel)

**Typografie** — drie duidelijke lagen:
- Sierlijk handgeschreven **script** voor sectie-koppen ("Wijnen", "Hapas", "Koffie/Thee") — een Lobster/Alex Brush-achtige stijl
- Zware **condensed serif / slab** in hoofdletters voor titels en het reuzenwoord "KAART"
- Strakke **condensed sans-caps** met wijde letterspacing voor productnamen; prijzen rechts uitgelijnd met **stippellijn-leaders** ertussen

**Grafiek** — houtsnede-illustraties (hop, gerst, vat, druiven, bebaarde barman), geometrische badges (driehoek, ruit, cirkel), NIX18-label, bliksemflits, sterrenburst achter de hop. Alles matte, ingetogen, ambachtelijk drukwerk-gevoel.

**Compositie** — harde kleurvlakken naast elkaar, alsof panelen aan elkaar geplakt zijn; ruime marges binnen elk paneel; korte hairline scheidingen; consequent asymmetrisch grid.

## Wat er op de site verandert

### 1. Kleurpalet (`src/styles.css`)
- `--paper` blijft de rustige achtergrond, maar krijgt een fractie warmer/geliger tint zodat het aan het drukwerk-crème raakt.
- Nieuwe tokens: `--mustard` (mosterdgeel) en `--teal` (petrol) toegevoegd aan `@theme inline`, naast bestaande `--wine`, `--oak`, `--brass`.
- `--brass` blijft bestaan maar wordt secundair; **wijnrood wordt de primaire accentkleur** (nu al `--wine`, promoveren naar `--primary`).

### 2. Typografie (`__root.tsx` + `styles.css`)
- Script-font toevoegen via `<link>` in de root head: **Alex Brush** of **Yellowtail** voor sectie-eyebrows/koppen (menukaart-gevoel, goed leesbaar op web).
- Display-font wisselen van Cormorant Garamond naar een zwaardere condensed serif/slab: **Oswald** of **Bebas Neue** voor UPPERCASE titels — matcht de "KAART"-letters.
- Body blijft Inter.
- Nieuwe utility-klassen: `.font-script`, `.font-display-condensed`.

### 3. Herkenbare menukaart-componenten
- **`ProductCard` (dark tone)**: item-regel krijgt optioneel een variant met **stippellijn-leader** tussen naam en prijs/ABV (`border-b border-dotted border-brass/40`) — direct herkenbaar patroon uit de kaart. Foto-vlak blijft, maar krijgt een subtiele cremewit-rand alsof op papier geplakt.
- **`SectionHeader`** (nieuw, klein): script-woord ("Hapas", "Wijnen", …) boven een zware condensed titel — hergebruikt op alle menu- en contentpagina's.
- **`Panel`** (nieuw, klein): kleurvlak-wrapper (`wine` / `mustard` / `teal` / `oak`) met dikke rand en interne padding — voor hero-blokken en highlight-secties op home, over-ons, contact.

### 4. Pagina-updates (alleen presentatie, geen data)
- **Home**: hero krijgt een menukaart-achtige compositie — cremewit paneel met script "Sinds…" boven grote condensed "STADSCAFÉ RIJKE & ZN." en gevelfoto rechts. Openingstijden-blok wordt een wijnrood paneel met stippellijn-leaders (dag ⋯ tijd), exact het ritme van de kaart.
- **Bierkaart / Dranken / Borrelkaart**: hero-eyebrow in script, categorie-chips krijgen paneel-look (actieve chip = wijnrood met crème letters), grid-cards krijgen de stippellijn-leader tussen naam en ABV/volume.
- **Over ons / Contact / Reserveren / Galerij**: script-eyebrows + condensed titels, kleine mosterd/teal accent-blokken voor quotes, adres of openingstijden. Geen inhoudelijke tekstwijzigingen.
- **`site-nav`**: logo-woordmerk in condensed uppercase, actieve link krijgt wijnrode onderstreping.
- **`site-footer`**: kolomkoppen in script, adres in condensed caps.

### 5. Grafische accenten (SVG, geen AI)
- Kleine ambachtelijke SVG-ornamenten (hairline hop-tak, gerst-aar, ster-burst) als subtiele section-dividers — met de hand getekend in code, geen AI/stock. Sober ingezet: één per pagina, niet overal.

### 6. Toegankelijkheid & responsive
- Alle nieuwe kleurcombinaties (wijn op crème, crème op wijn, oak op mosterd) worden getoetst op WCAG AA.
- Script-font alleen voor korte eyebrows (max ~3 woorden), nooit voor body-tekst.
- Bestaande responsive gedrag blijft; nieuwe panelen stacken netjes onder `md:`.

## Wat NIET verandert
- Geen wijzigingen in menu-inhoud, prijzen, routes of backend.
- Geen AI-beelden. Bestaande echte foto's (gevel, interieur) blijven.
- Geen nieuwe pagina's.

## Technische notities
- Fonts via `<link rel="preconnect">` + `<link rel="stylesheet">` in `src/routes/__root.tsx` (nooit `@import` in CSS — Tailwind v4/Lightning CSS).
- Nieuwe tokens in `@theme inline` zodat `bg-mustard`, `text-teal` etc. direct als Tailwind-klasse werken.
- Alle kleurgebruik via semantische tokens; geen hardcoded hex in componenten.
