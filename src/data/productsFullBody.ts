// src/data/productsFullBody.ts

export interface FullBodyProduct {
  id: string;
  name: string;
  series: string;
  formats: string[];
  thickness: "15 mm";
  body: "Full Body";
  finishes: string[];
  recommendedUses: string;
  packaging: {
    format2400: { sqmPerPiece: number; kgPerPiece: number };
    format3000?: { sqmPerPiece: number; kgPerPiece: number };
  };
  image: string;
}

export const packingFullBody2400 = {
  sqmPerPiece: 1.92,
  kgPerPiece: 67,
};

export const packingFullBody3000 = {
  sqmPerPiece: 2.40,
  kgPerPiece: 84,
};

export const productsFullBody: FullBodyProduct[] = [
  {
    id: "hab-fb-pearl-white",
    name: "Pearl White",
    series: "Plain Colour Series",
    formats: ["800x2400 mm", "800x3000 mm"],
    thickness: "15 mm",
    body: "Full Body",
    finishes: ["Glossy", "Matt"],
    recommendedUses: "Mesadas de cocina, islas, solados de alto tránsito y revestimientos arquitectónicos.",
    packaging: {
      format2400: packingFullBody2400,
      format3000: packingFullBody3000,
    },
    image: "/products/fullbody/pearl_white.jpg",
  },
  {
    id: "hab-fb-brown-flakes",
    name: "Brown Flakes",
    series: "MoonRock Series",
    formats: ["800x2400 mm"],
    thickness: "15 mm",
    body: "Full Body",
    finishes: ["Glossy"],
    recommendedUses: "Mesadas, barras y frentes de diseño continuo.",
    packaging: {
      format2400: packingFullBody2400,
    },
    image: "/products/fullbody/brown_flakes.jpg",
  },
  {
    id: "hab-fb-black-salt-pepper",
    name: "Black Salt n Pepper",
    series: "Salt n Pepper Series",
    formats: ["800x2400 mm", "800x3000 mm"],
    thickness: "15 mm",
    body: "Full Body",
    finishes: ["Glossy", "Matt"],
    recommendedUses: "Encimeras de alta prestación, áreas comerciales y mobiliario técnico.",
    packaging: {
      format2400: packingFullBody2400,
      format3000: packingFullBody3000,
    },
    image: "/products/fullbody/black_salt_pepper.jpg",
  },
  {
    id: "hab-fb-saga-white",
    name: "Saga White",
    series: "Saga Series",
    formats: ["800x2400 mm", "800x3000 mm"],
    thickness: "15 mm",
    body: "Full Body",
    finishes: ["Glossy", "Matt"],
    recommendedUses: "Mesadas residenciales de vanguardia y superficies higiénicas sin porosidad.",
    packaging: {
      format2400: packingFullBody2400,
      format3000: packingFullBody3000,
    },
    image: "/products/fullbody/saga_white.jpg",
  },
];
