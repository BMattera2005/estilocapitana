// src/data/productsFullBody.ts

export interface FullBodyVariant {
  format: "80x240 cm";
  finishes: ("Glossy" | "Matt")[];
  sqm: number;
  weightKg: number;
}

export interface FullBodyProductItem {
  /** Si es false, el modelo se oculta de la web sin borrar su información. */
  isVisible?: boolean;
  id: string;
  name: string;
  series: string;
  thickness: "1,5 cm";
  body: "Full Body";
  variants: FullBodyVariant[];
  allFormats: string[];
  allFinishes: string[];
  recommendedUses: string;
  image: string;
}

export const productsFullBody: FullBodyProductItem[] = [
  {
    id: "hab-fb-brown-flakes",
    name: "Brown Flakes",
    series: "MoonRock Series",
    thickness: "1,5 cm",
    body: "Full Body",
    variants: [
      {
        format: "80x240 cm",
        finishes: ["Glossy"],
        sqm: 1.92,
        weightKg: 67,
      },
    ],
    allFormats: ["80x240 cm"],
    allFinishes: ["Glossy"],
    recommendedUses: "Mesadas, barras e islas de cocina con alta resistencia superficial al calor y rayado.",
    image: "/products/fullbody/brown_flakes.jpg",
  },
  {
    id: "hab-fb-black-salt-pepper",
    name: "Black Salt n Pepper",
    series: "Salt n Pepper Series",
    thickness: "1,5 cm",
    body: "Full Body",
    variants: [
      {
        format: "80x240 cm",
        finishes: ["Glossy", "Matt"],
        sqm: 1.92,
        weightKg: 67,
      },
    ],
    allFormats: ["80x240 cm"],
    allFinishes: ["Glossy", "Matt"],
    recommendedUses: "Encimeras de alta prestación, barras comerciales y mobiliario técnico sin porosidad.",
    image: "/products/fullbody/black_salt_pepper.jpg",
  },
  {
    id: "hab-fb-saga-white",
    name: "Saga White",
    series: "Saga Series",
    thickness: "1,5 cm",
    body: "Full Body",
    variants: [
      {
        format: "80x240 cm",
        finishes: ["Glossy", "Matt"],
        sqm: 1.92,
        weightKg: 67,
      },
    ],
    allFormats: ["80x240 cm"],
    allFinishes: ["Glossy", "Matt"],
    recommendedUses: "Mesadas residenciales de vanguardia, frentes e islas continuas higiénicas de masa homogénea.",
    image: "/products/fullbody/saga_white.jpg",
  },
];

// Alias usados por la vista de detalle.
export type FullBodyProductUnified = FullBodyProductItem;
export const productsFullBodyUnified = productsFullBody;
