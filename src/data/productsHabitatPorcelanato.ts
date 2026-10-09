// src/data/productsHabitatPorcelanato.ts

export type PorcelanatoFinish = "Glossy" | "Velvet" | "Matt";

export interface HabitatPorcelanatoItem {
  /** Si es false, el modelo se oculta de la web sin borrar su información. */
  isVisible?: boolean;
  id: string;
  name: string;
  series: string;
  format: "120x120 cm";
  thickness: "0,9 cm";
  finishes: PorcelanatoFinish[]; // Soporta múltiples terminaciones
  finishText: string;            // Para mostrar en la tarjeta ("Glossy / Velvet")
  faces: string;
  sqmPerBox: number;
  piecesPerBox: number;
  weightBoxKg: number;
  boxesPerPallet: number;
  sqmPerPallet: number;
  weightPalletKg: number;
  description: string;
  image: string;
}

export const productsHabitatPorcelanato: HabitatPorcelanatoItem[] = [
  // --- 120x120 cm ---
  {
    id: "hab-porc-sand-light",
    name: "Sand Light",
    series: "Large Format Matt",
    format: "120x120 cm",
    thickness: "0,9 cm",
    finishes: ["Matt"],
    finishText: "Matt",
    faces: "Random 4 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Gran formato cuadrado de textura rústica para áreas amplias.",
    image: "/products/habitatIndia/sand_light.jpg",
  },
  {
    id: "hab-porc-unico-beige",
    name: "Unico Beige",
    series: "Unico Mineral Series",
    format: "120x120 cm",
    thickness: "0,9 cm",
    finishes: ["Matt"],
    finishText: "Matt",
    faces: "Random 3 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Superficie mineral cálida apta para interiores y exteriores.",
    image: "/products/habitatIndia/unico_beige.jpg",
  },
  {
    id: "hab-porc-unico-grey",
    name: "Unico Grey",
    series: "Unico Mineral Series",
    format: "120x120 cm",
    thickness: "0,9 cm",
    finishes: ["Matt"],
    finishText: "Matt",
    faces: "Random 3 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Textura mate cementicia balanceada de alta resistencia.",
    image: "/products/habitatIndia/unico_grey.jpg",
  },
];
