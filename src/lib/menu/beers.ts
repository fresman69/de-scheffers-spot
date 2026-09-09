import corsendonkPaterNosterPhoto from "../../assets/bier/corsendonk-pater-noster.jpg.asset.json";
import westmalleDubbelPhoto from "../../assets/bier/westmalle-dubbel.jpg.asset.json";
import laTrappeDubbelOfficieelPhoto from "../../assets/bier/la-trappe-dubbel-officieel.jpg.asset.json";
import lefortDonkerPhoto from "../../assets/bier/lefort-donker.jpg.asset.json";
import elvisJuicePhoto from "../../assets/bier/elvis-juice.avif.asset.json";
import gladjanusPhoto from "../../assets/bier/gladjanus.webp.asset.json";
import keesHazySunrisePhoto from "../../assets/bier/kees-hazy-sunrise.png.asset.json";
import twoChefsBonChefPhoto from "../../assets/bier/two-chefs-bon-chef.png.asset.json";
import vandestreekHopArtPhoto from "../../assets/bier/vandestreek-hop-art.png.asset.json";
import latrappetripelPhoto from "../../assets/bier/la-trappe-tripel.jpg.asset.json";
import kasteelrougePhoto from "../../assets/bier/kasteel-rouge.png.asset.json";
import boonkriekboonPhoto from "../../assets/bier/boon-kriek.png.asset.json";
import liefmansfruitessePhoto from "../../assets/bier/liefmans-fruitesse.png.asset.json";
import oudegeuzeboonPhoto from "../../assets/bier/oude-geuze-boon.png.asset.json";
import desperadosPhoto from "../../assets/bier/desperados.jpg.asset.json";
import latrappeisidorPhoto from "../../assets/bier/la-trappe-isid-or.jpg.asset.json";
import frontaaljuicepunchPhoto from "../../assets/bier/frontaal-juice-punch.jpg.asset.json";
import magnerspintPhoto from "../../assets/bier/magners-pint.jpg.asset.json";
import affligemBlondPhoto from "../../assets/bier/affligem-blond-fles-en-glas.png.asset.json";
import strandgaperPhoto from "../../assets/bier/strandgaper.jpg.asset.json";
import toewijdingPhoto from "../../assets/bier/van-moll-toewijding.jpg.asset.json";
import type { Product } from "../../components/product-card";

export type Beer = Product & {
  category: string;
  /** Bitterheid in IBU, waar bekend. */
  ibu?: string;
  /** Klein weetje onderaan de kaart — verhaal, herkomst of serveertip. */
  note?: string;
};

/**
 * De bierkaart van Stadscafé. Teksten zijn kort, warm en nuchter geschreven:
 * eerst wat je proeft, daarna een weetje. Prijzen staan bewust op de kaart in het café.
 */
export const beers: Beer[] = [
  // Van de Tap
  {
    category: "Van de Tap",
    name: "Gouwe Ary",
    description: "Ons eigen huisbier: goudblond, zacht van mout en met een frisse afdronk.",
    abv: "5%",
    note: "Gebrouwen voor Stadscafé — nergens anders te tappen.",
  },
  {
    category: "Van de Tap",
    name: "Heineken — Fluitje, Vaas of Pul",
    description: "Vertrouwde pilsener, koud getapt met een stevige schuimkraag.",
    volume: "0,18 l · 0,25 l · 0,5 l",
    abv: "5%",
    note: "Gewoon goed, en altijd vers van de tap.",
  },
  {
    category: "Van de Tap",
    name: "Zes wisselende tapkranen",
    description: "Een roulerende selectie speciaalbier, afgestemd op het seizoen.",
    note: "Vraag onze bediening naar wat er vandaag op staat.",
  },

  // Blond
  {
    category: "Blond",
    name: "Affligem — Blond",
    photo: affligemBlondPhoto.url,
    description: "Klassiek Belgisch abdijblond met tonen van honing, kruidnagel en mout.",
    abv: "6,8%",
    note: "Naar een recept uit de abdij van Affligem.",
  },
  {
    category: "Blond",
    name: "Van Moll — Toewijding",
    photo: toewijdingPhoto.url,
    description: "Licht en toegankelijk blond met een fijne hopbitterheid en droge afdronk.",
    abv: "5,5%",
    note: "Gebrouwen in Eindhoven door Van Moll.",
  },
  {
    category: "Blond",
    name: "Scheldebrouwerij — Strandgaper",
    photo: strandgaperPhoto.url,
    description: "Fruitig blond met citrus, kruiden en een zachte, ronde afdronk.",
    abv: "6,2%",
    note: "Uit Meer, pal aan de Belgisch-Nederlandse grens.",
  },

  // Dubbel
  {
    category: "Dubbel",
    name: "La Trappe — Dubbel",
    photo: laTrappeDubbelOfficieelPhoto.url,
    description: "Donkerbruin trappistenbier met karamel, gedroogd fruit en een volle mout.",
    abv: "7%",
    note: "Gebrouwen binnen de muren van abdij Koningshoeven.",
  },
  {
    category: "Dubbel",
    name: "Corsendonk — Pater Dubbel",
    photo: corsendonkPaterNosterPhoto.url,
    description: "Zacht en moutig met tonen van rozijn, karamel en donkere chocolade.",
    abv: "6,5%",
    note: "Een Belgische klassieker sinds 1982.",
  },
  {
    category: "Dubbel",
    name: "Lefort — Belgian Brown Ale",
    photo: lefortDonkerPhoto.url,
    description: "Bruine ale met rood fruit, kruiden en een licht zoete, warme afdronk.",
    abv: "5,8%",
    note: "Verrassend soepel voor een donker bier.",
  },
  {
    category: "Dubbel",
    name: "Westmalle — Dubbel",
    photo: westmalleDubbelPhoto.url,
    description: "Diepbruine trappist met een rijke mout, donker fruit en een droge finale.",
    abv: "7%",
    note: "Het bier dat de stijl dubbel definieerde.",
  },

  // Tripel
  {
    category: "Tripel",
    name: "La Trappe — Tripel",
    photo: latrappetripelPhoto.url,
    description: "Goudblonde trappist met banaan, kruidnagel en een stevige, warme afdronk.",
    abv: "8%",
    note: "De enige Nederlandse trappistenbrouwerij.",
  },
  {
    category: "Tripel",
    name: "Tripel Karmeliet",
    description: "Zijdezacht tripel van gerst, tarwe en haver, met vanille en citrus.",
    abv: "8,4%",
    note: "Naar een driegranenrecept uit 1679.",
  },
  {
    category: "Tripel",
    name: "Gouden Carolus — Tripel",
    description: "Vol en kruidig tripel met honing, koriander en een lange, droge afdronk.",
    abv: "9%",
    note: "Uit Mechelen, van brouwerij Het Anker.",
  },
  {
    category: "Tripel",
    name: "Scheldebrouwerij — Zeezuiper",
    description: "Fris tripel met citrus en kruiden, verrassend licht op de tong.",
    abv: "8%",
    note: "Vernoemd naar de zeilende zeezuipers van weleer.",
  },

  // Quad / Barley Wine
  {
    category: "Quad / Barley Wine",
    name: "Trappistes Rochefort 10",
    description: "Zwaar en donker met port, pruim, chocolade en een fluweelzachte afdronk.",
    abv: "11,3%",
    note: "Wereldwijd geroemd — rustig drinken loont.",
  },
  {
    category: "Quad / Barley Wine",
    name: "Kees — Barley Wine",
    description: "Krachtige barley wine met karamel, toffee en gedroogd fruit.",
    abv: "11,5%",
    note: "Gebrouwen in Middelburg door Kees Bubberman.",
  },
  {
    category: "Quad / Barley Wine",
    name: "Gouden Carolus — Whisky Infused",
    description: "Quadrupel gerijpt op whiskyvaten, met vanille, eiken en warme mout.",
    abv: "11,7%",
    note: "Rijpt op vaten van de eigen Gouden Carolus-whisky.",
  },
  {
    category: "Quad / Barley Wine",
    name: "St. Bernardus — Abt 12",
    description: "Volle quadrupel met donker fruit, karamel en een romige, lange afdronk.",
    abv: "10%",
    note: "Uit Watou, al generaties een vaste waarde.",
  },

  // Indian Pale Ale
  {
    category: "Indian Pale Ale",
    name: "Two Chefs — Bon Chef",
    photo: twoChefsBonChefPhoto.url,
    description: "Sappige IPA met tropisch fruit, citrus en een stevige hopbitterheid.",
    abv: "6,5%",
    note: "Gebrouwen in Amsterdam door Two Chefs Brewing.",
  },
  {
    category: "Indian Pale Ale",
    name: "Kees — Hazy Sunrise",
    photo: keesHazySunrisePhoto.url,
    description: "Troebele hazy IPA met mango, perzik en een zachte, romige body.",
    abv: "7,5%",
    note: "Weinig bitter, veel fruit — een fijne instapper.",
  },
  {
    category: "Indian Pale Ale",
    name: "BrewDog — Elvis Juice",
    photo: elvisJuicePhoto.url,
    description: "Grapefruit-IPA: fris, bitterzoet en lekker scherp in de afdronk.",
    abv: "6,5%",
    note: "Gebrouwen met echte grapefruitschil.",
  },
  {
    category: "Indian Pale Ale",
    name: "Van de Streek — Hop Art IPA",
    photo: vandestreekHopArtPhoto.url,
    description: "Klassieke IPA met dennen, hars en een droge, bittere finale.",
    abv: "6,5%",
    note: "Van twee broers uit Utrecht, altijd hopgedreven.",
  },
  {
    category: "Indian Pale Ale",
    name: "De Eeuwige Jeugd — Gladjanus White IPA",
    photo: gladjanusPhoto.url,
    description: "Witbier en IPA in één: koriander, citrus en een frisse hoptoets.",
    abv: "5%",
    note: "Glutenvrij, zonder dat je iets mist.",
  },

  // Zwaar Blond
  {
    category: "Zwaar Blond",
    name: "Duvel",
    description: "Krachtig blond met een verfijnde bitterheid en fijne, fruitige aroma's.",
    abv: "8,5%",
    ibu: "33",
    note: "De gouden standaard van België sinds 1871.",
  },
  {
    category: "Zwaar Blond",
    name: "La Chouffe Blond",
    description: "Blond bier met een fruitig aroma, kruiden en een lichte hopbitterheid.",
    abv: "8%",
    ibu: "20",
    note: "Gebrouwen in de Ardennen, met het ondeugende kaboutertje.",
  },
  {
    category: "Zwaar Blond",
    name: "Corsendonk — Agnus",
    description: "Krachtig abdijbier met een volle smaak van mout, fruit en kruiden.",
    abv: "7,5%",
    ibu: "30",
    note: "Gebrouwen naar de traditie van de abdij van Corsendonk.",
  },
  {
    category: "Zwaar Blond",
    name: "Omer — Traditional Blond",
    description: "Zwaar blond met een rijke moutsmaak en een fijne hopbitterheid.",
    abv: "7,5%",
    ibu: "25",
    note: "Bekroond Belgisch bier met een elegante afdronk.",
  },

  // Wit / Weizen
  {
    category: "Wit / Weizen",
    name: "Paulaner — Hefeweizen",
    description: "Traditioneel Duits weizenbier: tonig, fris en licht fruitig.",
    volume: "50 cl",
    abv: "5,5%",
    ibu: "12",
    note: "Geserveerd in stijl — een halve liter pure dorstlesser.",
  },
  {
    category: "Wit / Weizen",
    name: "'t IJ — IJwit",
    description: "Fris en kruidig witbier met citrus en koriander. Troebel en zacht.",
    abv: "6,5%",
    ibu: "18",
    note: "Gebrouwen in Amsterdam bij Brouwerij 't IJ.",
  },
  {
    category: "Wit / Weizen",
    name: "Vedett — Extra White",
    description: "Licht en verfrissend witbier met een vleugje citrus.",
    abv: "4,7%",
    note: "Belgisch witbier met een moderne twist.",
  },
  {
    category: "Wit / Weizen",
    name: "De Eeuwige Jeugd — Bullebak Weizen Tripel",
    description: "Krachtige weizentripel vol banaan, karamel en kruidige tonen.",
    abv: "7,7%",
    note: "Gebrouwen met lef, in Nederland.",
  },

  // Amber
  {
    category: "Amber",
    name: "Seef — Bootjes Bier",
    description: "Amberkleurig bier met karamelmout, een lichte zoetheid en droge afdronk.",
    abv: "7%",
    note: "Naar een oud Antwerps recept uit de haven.",
  },

  // Fruit / Zoeter
  {
    category: "Fruit / Zoeter",
    name: "Kasteel — Rouge",
    photo: kasteelrougePhoto.url,
    description: "Robijnrood bier met zoete fruittonen van kersen, vanille en amandel. Zacht en verrassend vol.",
    abv: "8%",
    note: "Gebrouwen met echte kersen voor een rijke smaak.",
  },
  {
    category: "Fruit / Zoeter",
    name: "Liefmans — Fruitesse",
    photo: liefmansfruitessePhoto.url,
    description: "Fruitig en verfrissend bier met tonen van aardbei, framboos, kers en bosbes. Licht zoet en sprankelend.",
    abv: "3,8%",
    note: "Perfect als dorstlesser op elk moment van de dag.",
  },
  {
    category: "Fruit / Zoeter",
    name: "Boon — Kriek Boon",
    photo: boonkriekboonPhoto.url,
    description: "Traditionele kriek met honderd procent verse krieken. Fris, zuur en fruitig met een droge afdronk.",
    abv: "4%",
    note: "Natuurlijke gisting op eikenhouten foeders. Pure ambacht.",
  },
  {
    category: "Fruit / Zoeter",
    name: "Desperados",
    photo: desperadosPhoto.url,
    description: "Mexicaans geïnspireerd bier met tequila-aroma. Fris, lichtzoet en een tikje rebels.",
    abv: "5,9%",
    note: "Het originele bier met tequilasmaak, sinds 1995.",
  },
  {
    category: "Fruit / Zoeter",
    name: "Corona Extra",
    description: "Licht en verfrissend Mexicaans bier met een zachte moutbasis en citrus. Het lekkerst met een partje limoen.",
    abv: "4,5%",
    note: "La cerveza más fina — het bier van zon, zee en strand.",
  },

  // Stout / Porter
  {
    category: "Stout / Porter",
    name: "Guinness — Draught Stout",
    description: "De iconische Ierse stout. Romig, zacht en vol van smaak, met tonen van koffie en pure chocolade.",
    abv: "4,2%",
    note: "Geserveerd met stikstof voor die kenmerkende creamy head.",
  },
  {
    category: "Stout / Porter",
    name: "Kees — Export Porter 1750",
    description: "Rijke porter met aroma's van koffie, donkere chocolade en karamel. Vol, warm en krachtig.",
    abv: "10,5%",
    note: "Gebrouwen ter ere van het eerste exportbier van Nederland, uit 1750.",
  },
  {
    category: "Stout / Porter",
    name: "Kompaan — Bloedbroeder Imperial Stout",
    description: "Intense imperial stout vol donkere mout, koffie, cacao en een vleugje vanille. Krachtig en complex.",
    abv: "9,1%",
    note: "Voor de echte stoutliefhebber.",
  },

  // Saison
  {
    category: "Saison",
    name: "Oedipus — Mannenliefde",
    description: "Frisse, hoppige saison met citrus, kruiden en een zachte bitterheid. Licht troebel en dorstlessend.",
    abv: "6%",
    note: "Een modern bier met een knipoog naar de klassieke stijl.",
  },
  {
    category: "Saison",
    name: "Oersoep — Lazy Daisy",
    description: "Bloemig en kruidig met tonen van citrus, granen en een zachte bitterheid. Fris en licht droog.",
    abv: "6,5%",
    note: "Met liefde gebrouwen in Nijmegen door Oersoep.",
  },
  {
    category: "Saison",
    name: "Saison Dupont",
    description: "De klassieker onder de saisons. Droog, kruidig en verfrissend met een lichte fruitigheid.",
    abv: "6,5%",
    note: "Sinds 1844 gebrouwen in België. Een tijdloze favoriet.",
  },

  // Sour / Geuze
  {
    category: "Sour / Geuze",
    name: "Rodenbach — Grand Cru",
    description: "Vlaams roodbruin bier, gerijpt op eiken foeders. Zacht zuur, met toetsen van rode bessen en karamel.",
    abv: "6%",
    note: "Gerijpt voor een complexe, verfijnde smaakbeleving.",
  },
  {
    category: "Sour / Geuze",
    name: "Oedipus — Polyamorie",
    description: "Fruitig en fris zuur bier met mango, passievrucht en een vleugje limoen. Tropisch, sprankelend en dorstlessend.",
    abv: "6,5%",
    note: "Gebrouwen in Amsterdam door Oedipus Brewing.",
  },
  {
    category: "Sour / Geuze",
    name: "Reijngoud — Zuurbier",
    description: "Een wild en funky zuur bier met een frisse, droge afdronk. Licht, doordrinkbaar en vol karakter.",
    abv: "4,5%",
    note: "Gebrouwen met spontane gisting voor een uniek profiel.",
  },
  {
    category: "Sour / Geuze",
    name: "Oude Geuze Boon",
    photo: oudegeuzeboonPhoto.url,
    description: "Authentieke lambiekgeuze uit de Pajottenland. Droog, sprankelend en complex met toetsen van appel en citrus.",
    abv: "7%",
    note: "Een blend van één, twee en drie jaar oude lambiek, ongefilterd.",
  },

  // Cider
  {
    category: "Cider",
    name: "Magners",
    description: "Frisse Ierse cider met een lichtzoete, fruitige smaak.",
    abv: "4,5%",
    note: "Het lekkerst geserveerd over ijs.",
  },
  {
    category: "Cider",
    name: "Magners — Pear",
    description: "Fruitige cider met de sappige smaak van peer.",
    abv: "4,5%",
    note: "Zacht, zoet en verrassend licht.",
  },
  {
    category: "Cider",
    name: "Magners — Dark Fruit",
    description: "Cider met zwarte bessen en bosvruchten. Zoetzuur en verfrissend.",
    abv: "4%",
    note: "Diep van kleur, mild van smaak.",
  },
  {
    category: "Cider",
    name: "Magners — Pint",
    photo: magnerspintPhoto.url,
    description: "Dezelfde frisse cider, in een groter formaat om extra lang van te genieten.",
    volume: "568 ml",
    abv: "4,5%",
    note: "Een volle Ierse pint.",
  },
  {
    category: "Cider",
    name: "La Trappe — Isid'or",
    photo: latrappeisidorPhoto.url,
    description: "Amberkleurig trappistenbier met karamel, mout en een kruidige afdronk.",
    abv: "7,5%",
    note: "Gebrouwen ter ere van broeder Isidorus.",
  },

  // 0.0 / Alcoholarm
  {
    category: "0.0 / Alcoholarm",
    name: "Heineken 0.0",
    description: "De verfrissende Heineken-smaak, maar dan zonder alcohol.",
    abv: "0,0%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Amstel Radler 2,0%",
    description: "Lichtzoete radler met een frisse toets van citroen.",
    abv: "2,0%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Frontaal — Juice Punch",
    photo: frontaaljuicepunchPhoto.url,
    description: "Tropisch en sappig IPA-karakter, alcoholarm maar vol smaak.",
    abv: "0,5%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Van Moll — Wanderlust",
    description: "Sessie-IPA met citrus en tropisch fruit.",
    abv: "0,3%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Kromme Haring — Sand Diver",
    description: "Fris, hoppig en dorstlessend.",
    abv: "0,3%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Lowlander — Wit",
    description: "Alcoholvrij witbier met citrus en kruiden.",
    abv: "0,0%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Oersoep — Starchaser",
    description: "Alcoholvrije IPA met tropische aroma's.",
    abv: "0,0%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Amstel Radler 0.0",
    description: "Frisse citroenradler, volledig alcoholvrij.",
    abv: "0,0%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "Affligem Blond 0.0",
    description: "Alcoholvrij abdijbier, zacht en vol van smaak.",
    abv: "0,0%",
  },
  {
    category: "0.0 / Alcoholarm",
    name: "La Trappe — Nillis Donker",
    description: "Alcoholvrij donker abdijbier, rijk en zacht.",
    abv: "0,0%",
  },
];
