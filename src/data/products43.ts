export interface CeramicProduct {
  id: string;
  name: string;
  line: string;
  colorOrDesign: string;
  format: "43x43 cm";
  finish: "Brillante" | "Satinado" | "Mate con Granilla" | "Colonial";
  traffic: "PEI 3 Tránsito Medio" | "PEI 4 Tránsito Alto" | "PEI 5 Tránsito Muy Alto" | "Tránsito Estándar";
  designType: "Madera" | "Mármol" | "Venecitas" | "Piedras" | "Calcáreo" | "Cemento" | "Colonial";
  faces: number | string;
  shadeVariation?: string;
  packaging: {
    piecesPerBox: 12;
    sqmPerBox: 2.25;
    kgPerBox: 32;
    boxesPerPallet: 48;
    sqmPerPallet: 108;
    kgPerPallet: 1500;
  };
  image: string; // Ruta a public/products/43x43/
}

export const packingStandard43 = {
  piecesPerBox: 12,
  sqmPerBox: 2.25,
  kgPerBox: 32,
  boxesPerPallet: 48,
  sqmPerPallet: 108,
  kgPerPallet: 1500,
};

export const products43x43: CeramicProduct[] = [
  // --- BRILLANTES (PEI 3) ---
  {
    id: "fer-43-algarrobo",
    name: "Algarrobo",
    line: "Línea Algarrobo",
    colorOrDesign: "Natural",
    format: "43x43 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Madera",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/algarrobo.jpg"
  },
  {
    id: "fer-43-cachi-gris",
    name: "Cachi Gris",
    line: "Línea Cachi",
    colorOrDesign: "Gris",
    format: "43x43 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Mármol",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/cachi_gris.jpg"
  },
  {
    id: "fer-43-calacatta-blanco",
    name: "Calacatta Blanco",
    line: "Línea Calacatta",
    colorOrDesign: "Blanco",
    format: "43x43 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Mármol",
    faces: 4,
    shadeVariation: "V2 Ligera Variación",
    packaging: packingStandard43,
    image: "/products/43x43/calacatta_blanco.jpg"
  },
  {
    id: "fer-43-calacatta-dorado",
    name: "Calacatta Dorado",
    line: "Línea Calacatta",
    colorOrDesign: "Dorado",
    format: "43x43 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Mármol",
    faces: 4,
    shadeVariation: "V2 Ligera Variación",
    packaging: packingStandard43,
    image: "/products/43x43/calacatta_dorado.jpg"
  },
  {
    id: "fer-43-cebil",
    name: "Cebil",
    line: "Línea Cebil",
    colorOrDesign: "Natural",
    format: "43x43 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Madera",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/cebil.jpg"
  },

  // --- SATINADOS (PEI 4) ---
  {
    id: "fer-43-bali-piedra",
    name: "Bali Piedra",
    line: "Línea Bali",
    colorOrDesign: "Piedra",
    format: "43x43 cm",
    finish: "Satinado",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Piedras",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/bali_piedra.jpg"
  },
  {
    id: "fer-43-los-toldos-azul",
    name: "Los Toldos Azul",
    line: "Línea Los Toldos",
    colorOrDesign: "Azul",
    format: "43x43 cm",
    finish: "Satinado",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Calcáreo",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/los_toldos_azul.jpg"
  },
  {
    id: "fer-43-nazareno-color",
    name: "Nazareno Color",
    line: "Línea Nazareno",
    colorOrDesign: "Color",
    format: "43x43 cm",
    finish: "Satinado",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Calcáreo",
    faces: 3,
    packaging: packingStandard43,
    image: "/products/43x43/nazareno_color.jpg"
  },
  {
    id: "fer-43-nogal-marron",
    name: "Nogal Marrón",
    line: "Línea Nogal",
    colorOrDesign: "Marrón",
    format: "43x43 cm",
    finish: "Satinado",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Madera",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/nogal_marron.jpg"
  },
  {
    id: "fer-43-zenta-gris",
    name: "Zenta Gris",
    line: "Línea Zenta",
    colorOrDesign: "Gris",
    format: "43x43 cm",
    finish: "Satinado",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Cemento",
    faces: 6,
    shadeVariation: "V2",
    packaging: packingStandard43,
    image: "/products/43x43/zenta_gris.jpg"
  },

  // --- MATE CON GRANILLA (PEI 5) ---
  {
    id: "fer-43-abra-gris",
    name: "Abra Gris",
    line: "Línea Abra",
    colorOrDesign: "Gris",
    format: "43x43 cm",
    finish: "Mate con Granilla",
    traffic: "PEI 5 Tránsito Muy Alto",
    designType: "Piedras",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/abra_gris.jpg"
  },
  {
    id: "fer-43-payogasta-terra",
    name: "Payogasta Terra",
    line: "Línea Payogasta",
    colorOrDesign: "Terra",
    format: "43x43 cm",
    finish: "Mate con Granilla",
    traffic: "PEI 5 Tránsito Muy Alto",
    designType: "Piedras",
    faces: 4,
    packaging: packingStandard43,
    image: "/products/43x43/payogasta_terra.jpg"
  },

  // --- COLONIALES ---
  {
    id: "fer-43-classico-cotto",
    name: "Classico Cotto",
    line: "Línea Classico",
    colorOrDesign: "Cotto",
    format: "43x43 cm",
    finish: "Colonial",
    traffic: "Tránsito Estándar",
    designType: "Colonial",
    faces: "Trama Clásica",
    packaging: packingStandard43,
    image: "/products/43x43/classico_cotto.jpg"
  },
  {
    id: "fer-43-classico-curado-a-fuego",
    name: "Classico Curado a Fuego",
    line: "Línea Classico",
    colorOrDesign: "Curado a fuego (Antimanchas)",
    format: "43x43 cm",
    finish: "Colonial",
    traffic: "Tránsito Estándar",
    designType: "Colonial",
    faces: "Capa protectora antiabsorción",
    packaging: packingStandard43,
    image: "/products/43x43/classico_curado_fuego.jpg"
  }
];
