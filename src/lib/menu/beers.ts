import type { Product } from "../../components/product-card";

export type Beer = Product & { category: string };

export const beers: Beer[] = [
  // Van de Tap / Op fles
  { category: "Van de Tap", name: "Gouwe Ary", description: "Huisbier Stadscafé", abv: "5%" },
  { category: "Van de Tap", name: "Heineken Fluit / Vaas", description: "Pilsener — 0,18L · 0,25L · 0,5L", abv: "5%" },
  { category: "Van de Tap", name: "6 wisselende tapkranen", description: "Vraag onze bediening naar de actuele selectie" },

  // Blond
  { category: "Blond", name: "Affligem — Blond", abv: "6,8%" },
  { category: "Blond", name: "Van Moll — Toewijding", abv: "5,5%" },
  { category: "Blond", name: "Scheldebrouwerij — Strandgaper", abv: "6,2%" },

  // Dubbel
  { category: "Dubbel", name: "La Trappe — Dubbel", abv: "7%" },
  { category: "Dubbel", name: "Corsendonk — Pater Dubbel", abv: "6,5%" },
  { category: "Dubbel", name: "Lefort — Belgian Brown Ale", abv: "5,8%" },
  { category: "Dubbel", name: "Westmalle — Dubbel", abv: "7%" },

  // Tripel
  { category: "Tripel", name: "La Trappe — Tripel", abv: "8%" },
  { category: "Tripel", name: "Tripel Karmeliet", abv: "8,4%" },
  { category: "Tripel", name: "Gouden Carolus — Tripel", abv: "9%" },
  { category: "Tripel", name: "Scheldebrouwerij — Zeezuiper", abv: "8%" },

  // Quad / Barley Wine
  { category: "Quad / Barley Wine", name: "Trappistes Rochefort 10", abv: "11,3%" },
  { category: "Quad / Barley Wine", name: "Kees — Barley Wine", abv: "11,5%" },
  { category: "Quad / Barley Wine", name: "Gouden Carolus — Whisky Infused", abv: "11,7%" },
  { category: "Quad / Barley Wine", name: "St. Bernardus — Abt 12", abv: "10%" },

  // Indian Pale Ale
  { category: "Indian Pale Ale", name: "Two Chefs — Bon Chef", abv: "6,5%" },
  { category: "Indian Pale Ale", name: "Kees — Hazy Sunrise", abv: "7,5%" },
  { category: "Indian Pale Ale", name: "BrewDog — Elvis Juice", abv: "6,5%" },
  { category: "Indian Pale Ale", name: "Van de Streek — Hop Art IPA", abv: "6,5%" },
  { category: "Indian Pale Ale", name: "De Eeuwige Jeugd — Gladjanus White IPA", description: "Glutenvrij", abv: "5%" },

  // Zwaar Blond
  { category: "Zwaar Blond", name: "Duvel", abv: "8,5%" },
  { category: "Zwaar Blond", name: "La Chouffe Blond", abv: "8%" },
  { category: "Zwaar Blond", name: "Corsendonk — Agnus", abv: "7,5%" },
  { category: "Zwaar Blond", name: "Omer — Traditional Blond", abv: "8%" },

  // Wit / Weizen
  { category: "Wit / Weizen", name: "Paulaner — Hefeweizen", volume: "50 cl", abv: "5,5%" },
  { category: "Wit / Weizen", name: "'t IJ — IJwit", abv: "6,5%" },
  { category: "Wit / Weizen", name: "Vedett — Extra White", abv: "4,7%" },
  { category: "Wit / Weizen", name: "De Eeuwige Jeugd — Bullebak Weizen Tripel", abv: "7,7%" },

  // Amber
  { category: "Amber", name: "Seef — Bootjes Bier", abv: "7%" },

  // Fruit / Zomer
  { category: "Fruit / Zomer", name: "Kasteel — Rouge", abv: "8%" },
  { category: "Fruit / Zomer", name: "Liefmans — Fruitesse", abv: "3,8%" },
  { category: "Fruit / Zomer", name: "Boon — Kriek Boon", abv: "4%" },
  { category: "Fruit / Zomer", name: "Desperados", abv: "5,9%" },
  { category: "Fruit / Zomer", name: "Corona", abv: "4,5%" },

  // Stout / Porter
  { category: "Stout / Porter", name: "Guinness — Draught Stout", abv: "4,2%" },
  { category: "Stout / Porter", name: "Kees — Export Porter 1750", abv: "8,7%" },
  { category: "Stout / Porter", name: "Kompaan — Bloedbroeder Imperial Stout" },

  // Saison
  { category: "Saison", name: "Oedipus — Mannenliefde", abv: "6%" },
  { category: "Saison", name: "Oersoep — Laizy Daisy", abv: "6%" },
  { category: "Saison", name: "Saison Dupont", abv: "6%" },

  // Sour / Geuze
  { category: "Sour / Geuze", name: "Rodenbach — Grand Cru", abv: "6%" },
  { category: "Sour / Geuze", name: "Oedipus — Polyamorie", abv: "5%" },
  { category: "Sour / Geuze", name: "Rijngoud — Zuurbier", abv: "4,5%" },
  { category: "Sour / Geuze", name: "Oude Geuze Boon", abv: "7%" },

  // Cider
  { category: "Cider", name: "Magners" },
  { category: "Cider", name: "Magners — Pear" },
  { category: "Cider", name: "Magners — Dark Fruit", abv: "4%" },
  { category: "Cider", name: "Magners — Pint", volume: "568 ml", abv: "4,5%" },
  { category: "Cider", name: "La Trappe — Isid'or", abv: "7,5%" },

  // 0.0 / Alcoholarm
  { category: "0.0 / Alcoholarm", name: "Heineken 0.0", abv: "0,0%" },
  { category: "0.0 / Alcoholarm", name: "Amstel Radler", abv: "2,0%" },
  { category: "0.0 / Alcoholarm", name: "Frontaal — Juice Punch", abv: "0,5%" },
  { category: "0.0 / Alcoholarm", name: "Van Moll — Wanderlust", abv: "0,3%" },
  { category: "0.0 / Alcoholarm", name: "Kromme Haring — Sand Diver", abv: "0,3%" },
  { category: "0.0 / Alcoholarm", name: "Lowlander — Wit", abv: "0,0%" },
  { category: "0.0 / Alcoholarm", name: "Oersoep — Starchaser", abv: "0,0%" },
  { category: "0.0 / Alcoholarm", name: "Amstel Radler 0.0", abv: "0,0%" },
  { category: "0.0 / Alcoholarm", name: "Affligem Blond 0.0", abv: "0,0%" },
  { category: "0.0 / Alcoholarm", name: "La Trappe — Nillis Donker", abv: "0,0%" },
];
