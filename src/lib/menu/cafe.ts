export const cafeInfo = {
  name: "Stadscafé",
  description:
    "Modern bruin café in het hart van Dordrecht. Speciaalbier, gezelligheid en gastvrijheid zonder poespas. We werken niet met reserveringen.",
  address: {
    street: "Voorstraat 260",
    postalCode: "3311 ET",
    city: "Dordrecht",
    country: "NL",
  },
  email: "info@rijke-zn.nl",
  instagram: "https://www.instagram.com/stadscafe_rijke/",
  reservations: false,
  openingHours: [
    { day: "Maandag", hours: "15:00 — 02:00" },
    { day: "Dinsdag", hours: "15:00 — 02:00" },
    { day: "Woensdag", hours: "15:00 — 02:00" },
    { day: "Donderdag", hours: "15:00 — 02:00" },
    { day: "Vrijdag", hours: "14:00 — 02:00" },
    { day: "Zaterdag", hours: "13:00 — 02:00" },
    { day: "Zondag", hours: "13:00 — 02:00" },
  ],
} as const;
