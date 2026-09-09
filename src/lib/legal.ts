// Centrale configuratie voor juridische bedrijfsgegevens.
// LET OP: de placeholders hieronder moeten door de eigenaar worden vervangen
// aan de hand van het actuele KVK-uittreksel. Vul geen onbevestigde gegevens in.

export const legalCompany = {
  legalName: "[JURIDISCHE BEDRIJFSNAAM CONTROLEREN]",
  tradeName: "Stadscafé",
  visitingAddress: "[BEZOEKADRES CONTROLEREN]",
  postalCity: "[POSTCODE EN PLAATS CONTROLEREN]",
  kvk: "[KVK-NUMMER CONTROLEREN]",
  vat: "[BTW-ID CONTROLEREN]",
  phone: "[TELEFOONNUMMER CONTROLEREN]",
  email: "info@rijke-zn.nl",
  website: "https://de-scheffers-spot.lovable.app",
} as const;

export const legalLastUpdated = "Laatst bijgewerkt: 9 september 2026";

export const legalFootnote =
  "Dit zijn informatieve website-teksten. Ze zijn geen juridisch advies. Controleer de vermelde bedrijfsgegevens en bepalingen vóór publicatie aan de hand van het actuele KVK-uittreksel en, waar nodig, met een juridisch adviseur.";
