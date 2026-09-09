# Sfeerfoto's plaatsen + strakke tekstkaart voor de menu's

Doel: morgen live met een afgewerkte site — echte sfeerbeelden op de homepage, en menukaarten zonder foto's of lege "Foto volgt"-vakjes.

## 1. Foto's uit het aangeleverde beeld

Uit het aangeleverde moodboard snijd ik de losse foto's uit op hoge kwaliteit:

- de gevel van het café overdag
- het glas bier met logo
- het interieur met kaarslicht en emaillen borden
- de menukaart op tafel
- de gevel bij avondlicht in de straat

Deze worden als aparte beelden opgeslagen en vervangen de lege fotoplekken op de homepage (de sfeersectie met tapbier, koperdetail, trappist, bar bij avondlicht) en het blok met kaartverwijzingen. Elk beeld krijgt een passende beschrijving voor toegankelijkheid en laadt pas wanneer het in beeld komt.

De rode tekstvlakken en tekeningen uit het moodboard gebruik ik niet als foto — die zijn drukwerk, geen fotografie.

## 2. Menukaarten tekst-only

Bierkaart, dranken en happas worden strak tekstueel:

- geen productfoto's en geen "Foto volgt"-vakjes meer
- bredere kaartjes met de naam in condensed kapitalen, ABV/IBU en volume in koper, omschrijving eronder en het weetje met het korenaar-icoon
- meer kolommen per rij nu de foto's wegvallen, zodat de kaart compact en overzichtelijk oogt op telefoon, tablet en desktop
- categoriekoppen met koperen lijnen blijven zoals ze nu zijn

## 3. Eén schakelaar om foto's terug te zetten

De bierfoto's blijven bewaard in het project. Er komt één instelling waarmee alle productfoto's in één keer weer aan gaan zodra je zover bent; er hoeft dan niets opnieuw gekoppeld te worden.

## Technisch

- Croppen van het moodboard met Pillow, uploaden via `lovable-assets`, pointers onder `src/assets/sfeer/`.
- `src/lib/menu/display.ts` met `SHOW_PRODUCT_PHOTOS = false`.
- `src/components/beer-card.tsx` en `src/components/product-card.tsx`: fotoslot en placeholder-tak alleen renderen als de vlag aan staat; tekst-only layout als standaard.
- `src/routes/bierkaart.tsx`, `dranken.tsx`, `borrelkaart.tsx`: grid-kolommen aanpassen aan de smallere kaartjes.
- `src/routes/index.tsx`: `PhotoPlaceholder`-instanties vervangen door de nieuwe beelden; component blijft bestaan voor plekken zonder beeld.
- Afsluiten met typecheck/build en een visuele controle op 320–1440px.
