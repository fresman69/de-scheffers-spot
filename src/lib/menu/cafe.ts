export const cafeInfo = {
  name: "Stadscafé",
  description:
    "Modern bruin café in het hart van Dordrecht. Speciaalbier, gezelligheid en gastvrijheid zonder poespas. We werken niet met reserveringen.",
  address: {
    street: "Scheffersplein 12",
    postalCode: "3311 PX",
    city: "Dordrecht",
    country: "NL",
  },
  phone: "+31 78 613 4242",
  email: "info@rijke-zn.nl",
  instagram: "https://www.instagram.com/stadscafe_rijke/",
  reservations: false,
  openingHours: [
    { day: "Maandag", hours: "Gesloten" },
    { day: "Dinsdag", hours: "11:00 — 00:00" },
    { day: "Woensdag", hours: "11:00 — 00:00" },
    { day: "Donderdag", hours: "11:00 — 00:00" },
    { day: "Vrijdag", hours: "11:00 — 01:00" },
    { day: "Zaterdag", hours: "11:00 — 01:00" },
    { day: "Zondag", hours: "12:00 — 23:00" },
  ],
} as const;
