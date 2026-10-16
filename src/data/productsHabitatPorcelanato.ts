// src/data/productsHabitatPorcelanato.ts

export interface HabitatPorcelanatoItem {
  id: string;
  name: string;
  series: string;
  format: string; // Expresado en cm
  thickness: string;
  finish?: "Glossy" | "Velvet" | "Matt" | "Carving";
  finishes?: ("Glossy" | "Velvet" | "Matt" | "Carving")[];
  finishText?: string;
  faces: string;
  sqmPerBox: number;
  piecesPerBox: number;
  weightBoxKg: number;
  boxesPerPallet: number;
  sqmPerPallet: number;
  weightPalletKg: number;
  description: string;
  image: string;
  isVisible?: boolean;
}

export const productsHabitatPorcelanato: HabitatPorcelanatoItem[] = [
  {
    id: "hab-porc-sand-light",
    name: "Sand Light",
    series: "Luxury Stone 120x120",
    format: "120x120 cm",
    thickness: "9 mm",
    finish: "Matt",
    finishes: ["Matt"],
    finishText: "Matt",
    faces: "Random 4 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Placa de gran formato 120×120 cm con acabado mate suave y textura mineral en color arena claro.",
    image: "/products/habitatIndia/sand_light.jpg",
    isVisible: true,
  },
  {
    id: "hab-porc-unico-beige",
    name: "Unico Beige",
    series: "Luxury Stone 120x120",
    format: "120x120 cm",
    thickness: "9 mm",
    finish: "Matt",
    finishes: ["Matt"],
    finishText: "Matt",
    faces: "Random 3 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Porcelanato rústico y cálido de gran dimensión para salones, locales y galerías continuas.",
    image: "/products/habitatIndia/unico_beige.jpg",
    isVisible: true,
  },
  {
    id: "hab-porc-unico-grey",
    name: "Unico Grey",
    series: "Luxury Stone 120x120",
    format: "120x120 cm",
    thickness: "9 mm",
    finish: "Matt",
    finishes: ["Matt"],
    finishText: "Matt",
    faces: "Random 3 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Textura mate cementicia en formato 120×120 cm de alta resistencia al tránsito e impacto.",
    image: "/products/habitatIndia/unico_grey.jpg",
    isVisible: true,
  },
];
