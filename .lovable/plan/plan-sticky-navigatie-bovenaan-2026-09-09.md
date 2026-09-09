# Plan: sticky navigatie bovenaan

## Doel
Het bovenste menu (`SiteNav`) blijft altijd zichtbaar en "meeliften" bij scrollen op desktop én mobiel. De huidige `sticky top-0` werkt niet altijd betrouwbaar door parent-container-beperkingen; we maken de navigatie echt fixed en passen de pagina-layout aan zodat content niet onder de menubalk verdwijnt.

## Wijzigingen

### 1. `src/components/site-nav.tsx`
- Vervang `sticky top-0` door `fixed top-0 left-0 right-0`.
- Behoud bestaande `z-50`, achtergrond/blur-transitie en scroll-detectie.
- Zorg dat het mobiele dropdown-menu nog correct opent binnen de fixed container.

### 2. `src/routes/__root.tsx`
- Voeg `pt-16` (padding-top gelijk aan navigatiehoogte `h-16`) toe aan de wrapper rond `<Outlet />`, zodat de hero en andere pagina-inhoud niet gedeeltelijk achter de fixed navigatie schuiven.
- Controleer dat `NotFoundComponent` en `ErrorComponent` dezelfde offset gebruiken of geen last hebben van de fixed nav.

### 3. Optionele verfijning
- Behoud de `scrolled`-state; deze zorgt voor een duidelijkere achtergrond/blur na scrollen, wat het "meebewegen" visueel ondersteunt.
- Controleer op 320 px breedte dat het logo en hamburger-icoon niet overlappen.

## Niet in scope
- Geen wijzigingen aan menu-items, kleuren of typografie.
- Geen redesign; alleen de positionering van de navigatie.

## Validatie
- `bunx tsgo --noEmit` moet slagen.
- Visuele controle: bij scrollen blijft de menubalk bovenaan staan op home, bierkaart, contact en mobiel.
