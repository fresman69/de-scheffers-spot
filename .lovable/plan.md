## Evenementen volledig van de site verwijderen

**Verwijderen**
- `src/routes/evenementen.tsx` (hele pagina)
- Nav-link "Evenementen" in `src/components/site-nav.tsx`
- Evt. footer-link in `src/components/site-footer.tsx` (checken)
- Homepage "Agenda" sectie in `src/routes/index.tsx` (inclusief `events` array en de grid met datum-blokken en "Alles →" link naar /evenementen). De sectie "Openingstijden" blijft; die krijgt de volledige breedte i.p.v. de 2-koloms layout.
- `/evenementen` entry in `src/routes/sitemap[.]xml.ts`
- `/evenementen` regel in `public/llms.txt`

**Behouden**
- Reserveren-pagina en -knoppen (los van evenementen)
- Alle overige menukaarten, galerij, contact

**Controle**
- Typecheck slaagt, geen dode links naar `/evenementen` meer in de codebase (rg-check).
