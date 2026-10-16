// src/data/productsHabitatPorcelanato.ts

export interface HabitatPorcelanatoItem {
  id: string;
  name: string;
  series: string;
  format: "60x120 cm" | "120x120 cm";
  thickness: string;
  finish?: "Glossy" | "Velvet" | "Matt";
  finishes: ("Glossy" | "Velvet" | "Matt")[];
  finishText: string;
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

// Para compatibilidad con CatalogHabitatPorcelanatoDetail.tsx
export type PorcelanatoProduct = HabitatPorcelanatoItem;

export const productsHabitatPorcelanato: HabitatPorcelanatoItem[] = [
  // --- Formato 60x120 cm ---
  {
    id: "hab-porc-carrara-snow",
    name: "Carrara Snow",
    series: "Alaska Brilliance",
    format: "60x120 cm",
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
    description: "Porcelanato esmaltado brillante con fondo blanco de alta reflectividad y veta continua sutil.",
    image: "/products/habitatIndia/carrara_snow.jpg",
    isVisible: true,
  },
  {
    id: "hab-porc-olister-bianco",
    name: "Olister Bianco",
    series: "GVT Polished Collection",
    format: "60x120 cm",
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
    description: "Superficie pulida reflectiva con gráfica marmoleada neutra de tono blanco cálido.",
    image: "/products/habitatIndia/olister_bianco.jpg",
    isVisible: true,
  },
  {
    id: "hab-porc-argentina-grey",
    name: "Argentina Grey",
    series: "Natural Stone Series",
    format: "60x120 cm",
    thickness: "9 mm",
    finishes: ["Glossy", "Velvet"],
    finishText: "Glossy / Velvet",
    faces: "Random 4 caras",
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightBoxKg: 30,
    boxesPerPallet: 60,
    sqmPerPallet: 86.40,
    weightPalletKg: 1800,
    description: "Diseño pétreo en tonos grises disponible tanto en brillo espejo (Glossy) como en textura suave antideslizante (Velvet).",
    image: "/products/habitatIndia/argentina_grey.jpg",
    isVisible: true,
  },

  // --- Formato 120x120 cm (Luxury Stone) ---
  {
    id: "hab-porc-sand-light",
    name: "Sand Light",
    series: "Luxury Stone 120x120",
    format: "120x120 cm",
    thickness: "9 mm",
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

// Alias para resolver el conflicto de nombrado en componentes
export const productsPorcelanato = productsHabitatPorcelanato;
