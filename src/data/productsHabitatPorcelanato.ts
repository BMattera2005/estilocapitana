// src/data/productsHabitatPorcelanato.ts

export type PorcelanatoFinish = "Glossy" | "Velvet" | "Rustic";

export interface HabitatPorcelanatoItem {
  id: string;
  name: string;
  series: string;
  format: "600x1200 mm" | "1200x1200 mm";
  thickness: "9 mm";
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
  // --- 600x1200 mm ---
  {
    id: "hab-porc-carrara-snow",
    name: "Carrara Snow",
    series: "Alaska Brilliance",
    format: "600x1200 mm",
    thickness: "9 mm",
    finishes: ["Glossy"],
    finishText: "Glossy",
    faces: "Random 5 caras",
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightBoxKg: 30,
    boxesPerPallet: 60,
    sqmPerPallet: 86.40,
    weightPalletKg: 1800,
    description: "Placa porcelánica pulida brillante de alta gama con veta continua.",
    image: "/products/habitatIndia/carrara_snow.jpg",
  },
  {
    id: "hab-porc-olister-bianco",
    name: "Olister Bianco",
    series: "GVT Polished Collection",
    format: "600x1200 mm",
    thickness: "9 mm",
    finishes: ["Glossy"],
    finishText: "Glossy",
    faces: "Random 4 caras",
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightBoxKg: 30,
    boxesPerPallet: 60,
    sqmPerPallet: 86.40,
    weightPalletKg: 1800,
    description: "Porcelanato esmaltado pulido de base blanca y vetas continuas sutiles.",
    image: "/products/habitatIndia/olister_bianco.jpg",
  },
  {
    id: "hab-porc-argentina-grey",
    name: "Argenta Grey",
    series: "Natural Stone Series",
    format: "600x1200 mm",
    thickness: "9 mm",
    finishes: ["Glossy", "Velvet"], // Ahora incluye ambos acabados
    finishText: "Glossy / Velvet",
    faces: "Random 4 caras",
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightBoxKg: 30,
    boxesPerPallet: 60,
    sqmPerPallet: 86.40,
    weightPalletKg: 1800,
    description: "Revestimiento símil piedra natural disponible en acabado Glossy o acabado Velvet sedoso.",
    image: "/products/habitatIndia/argenta_grey.jpg",
  },

  // --- 1200x1200 mm ---
  {
    id: "hab-porc-sand-light",
    name: "Sand Light",
    series: "Large Format Rustic",
    format: "1200x1200 mm",
    thickness: "9 mm",
    finishes: ["Rustic"],
    finishText: "Rustic",
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
    format: "1200x1200 mm",
    thickness: "9 mm",
    finishes: ["Rustic"],
    finishText: "Rustic",
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
    format: "1200x1200 mm",
    thickness: "9 mm",
    finishes: ["Rustic"],
    finishText: "Rustic",
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
