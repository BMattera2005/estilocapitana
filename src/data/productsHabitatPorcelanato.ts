// src/data/productsHabitatPorcelanato.ts

export interface HabitatPorcelanatoItem {
  id: string;
  name: string;
  series: string;
  format: "600x1200 mm" | "1200x1200 mm";
  thickness: "9 mm";
  finish: "Glossy" | "Velvet" | "Rustic" | "Glossy | Velvet";
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
  // --- 600x1200 mm (2 piezas · 1.44 m² · 30 kg/caja · Pallet de 60 cajas: 86.40 m² / 1.800 kg) ---
  {
    id: "hab-porc-carrara-snow-glossy",
    name: "Carrara Snow ",
    series: "Alaska Brilliance",
    format: "600x1200 mm",
    thickness: "9 mm",
    finish: "Glossy",
    faces: "Random 5 caras",
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightBoxKg: 30,
    boxesPerPallet: 60,
    sqmPerPallet: 86.40,
    weightPalletKg: 1800,
    description: "Placa porcelánica pulida brillante de alta gama con veta continua.",
    image: "/products/porcelanato/carrara_luxe.jpg",
  },
  {
    id: "hab-porc-olister-bianco-glossy",
    name: "Olister Bianco ",
    series: "GVT Polished Collection",
    format: "600x1200 mm",
    thickness: "9 mm",
    finish: "Glossy",
    faces: "Random 4 caras",
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightBoxKg: 30,
    boxesPerPallet: 60,
    sqmPerPallet: 86.40,
    weightPalletKg: 1800,
    description: "Porcelanato esmaltado pulido de base blanca y vetas sutiles continuas.",
    image: "/products/porcelanato/olister_bianco.jpg",
  },
  {
    id: "hab-porc-argenta-grey-glossy",
    name: "Argenta Grey ",
    series: "Natural Stone Series",
    format: "600x1200 mm",
    thickness: "9 mm",
    finish: "Glossy | Velvet",
    faces: "Random 4 caras",
    sqmPerBox: 1.44,
    piecesPerBox: 2,
    weightBoxKg: 30,
    boxesPerPallet: 60,
    sqmPerPallet: 86.40,
    weightPalletKg: 1800,
    description: "Revestimiento símil piedra natural pulida con reflejo de espejo.",
    image: "/products/porcelanato/argenta_grey_glossy.jpg",
  },

  // --- 1200x1200 mm (2 piezas · 2.88 m² · 60 kg/caja · Pallet de 32 cajas: 92.16 m² / 1.920 kg) ---
  {
    id: "hab-porc-sand-light-rustic",
    name: "Sand Light ",
    series: "Large Format Rustic",
    format: "1200x1200 mm",
    thickness: "9 mm",
    finish: "Rustic",
    faces: "Random 4 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Gran formato cuadrado de textura rústica antideslizante para áreas continuas.",
    image: "/products/porcelanato/sand_light.jpg",
  },
  {
    id: "hab-porc-unico-beige-rustic",
    name: "Unico Beige ",
    series: "Unico Mineral Series",
    format: "1200x1200 mm",
    thickness: "9 mm",
    finish: "Rustic",
    faces: "Random 3 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Superficie mineral cálida apta para interiores y exteriores comerciales.",
    image: "/products/porcelanato/unico_beige.jpg",
  },
  {
    id: "hab-porc-unico-grey-rustic",
    name: "Unico Grey ",
    series: "Unico Mineral Series",
    format: "1200x1200 mm",
    thickness: "9 mm",
    finish: "Rustic",
    faces: "Random 3 caras",
    sqmPerBox: 2.88,
    piecesPerBox: 2,
    weightBoxKg: 60,
    boxesPerPallet: 32,
    sqmPerPallet: 92.16,
    weightPalletKg: 1920,
    description: "Textura mate cementicia balanceada de alta resistencia al desgaste.",
    image: "/products/porcelanato/unico_grey.jpg",
  },
];
