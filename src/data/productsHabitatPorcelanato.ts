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
  // --- MODELOS LUXURY STONE 120×120 cm (VISIBLES) ---
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
    description: "Porcelanato esmaltado de gran formato 120×120 cm con textura mate suave para espacios de alto tránsito.",
    image: "/products/habitatIndia/sand_light.jpg",
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
    description: "Porcelanato de diseño contemporáneo en tonos grises elegantes con textura mate.",
    image: "/products/habitatIndia/unico_grey.jpg",
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
    description: "Porcelanato rústico y cálido en formato 120×120 cm con textura mate para arquitectura residencial o comercial.",
    image: "/products/habitatIndia/unico_beige.jpg",
    isVisible: true,
  },

  // --- MODELOS FORMATO 60×120 cm (PAUSADOS / OCULTOS) ---
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
    description: "Placa porcelánica pulida brillante de alta gama con veta continua en formato 60×120 cm.",
    image: "/products/habitatIndia/carrara_snow.jpg",
    isVisible: false,
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
    description: "Porcelanato esmaltado pulido de base blanca y vetas continuas sutiles en formato 60×120 cm.",
    image: "/products/habitatIndia/olister_bianco.jpg",
    isVisible: false,
  },
  {
    id: "hab-porc-argenta-grey",
    name: "Argenta Grey",
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
    description: "Revestimiento símil piedra natural en formato 60×120 cm disponible en acabado Glossy o Velvet.",
    image: "/products/habitatIndia/argentina_grey.jpg",
    isVisible: false,
  },
];
