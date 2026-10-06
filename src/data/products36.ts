// src/data/products36.ts

export interface CeramicProduct36 {
  /** Si es false, el modelo se oculta de la web sin borrar su información. */
  isVisible?: boolean;
  id: string;
  name: string;
  line: string;
  colorOrDesign: string;
  format: "36x36 cm";
  finish: "Brillante" | "Mate" | "Colonial";
  traffic: "PEI 3 Tránsito Medio" | "PEI 4 Tránsito Alto" | "Tránsito Estándar";
  designType: "Venecitas" | "Mármol" | "Cemento" | "Madera" | "Colonial";
  surface: "Lisa" | "Con relieve";
  specialFeature?: string;
  packaging: {
    piecesPerBox: number;
    sqmPerBox: number;
    kgPerBox: number;
    boxesPerPallet: number;
    sqmPerPallet: number;
    kgPerPallet: number;
  };
  image: string;
}

// Logística Oficial (Pág. 27 del PDF)
export const packingEsmaltados36 = {
  piecesPerBox: 18,
  sqmPerBox: 2.3328,
  kgPerBox: 33.90,
  boxesPerPallet: 36,
  sqmPerPallet: 83.98,
  kgPerPallet: 1220,
};

export const packingColoniales36 = {
  piecesPerBox: 17,
  sqmPerBox: 2.20,
  kgPerBox: 33.90,
  boxesPerPallet: 36,
  sqmPerPallet: 79.32,
  kgPerPallet: 1220,
};

export const products36x36: CeramicProduct36[] = [
  // --- 1. BRILLANTES (PEI 3 - Tránsito Medio - Superficie Lisa) ---
  {
    id: "fer-36-burano-gris",
    name: "Burano Gris",
    line: "Línea Burano",
    colorOrDesign: "Gris",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Venecitas",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/burano_gris.jpg"
  },
  {
    id: "fer-36-burano-marron",
    name: "Burano Marrón",
    line: "Línea Burano",
    colorOrDesign: "Marrón",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Venecitas",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/burano_marron.jpg"
  },
  {
    id: "fer-36-burano-oxido",
    name: "Burano Óxido",
    line: "Línea Burano",
    colorOrDesign: "Óxido",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Venecitas",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/burano_oxido.jpg"
  },
  {
    id: "fer-36-calacatta-blanco",
    name: "Calacatta Blanco",
    line: "Línea Calacatta",
    colorOrDesign: "Blanco",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Mármol",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/calacatta_blanco.jpg"
  },
  {
    id: "fer-36-capri-mix",
    name: "Capri Mix",
    line: "Línea Capri",
    colorOrDesign: "Mix",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Venecitas",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/capri_mix.jpg"
  },
  {
    id: "fer-36-capri-blanco",
    name: "Capri Blanco",
    line: "Línea Capri",
    colorOrDesign: "Blanco",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Venecitas",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/capri_blanco.jpg"
  },
  {
    id: "fer-36-capri-blu",
    name: "Capri Blú",
    line: "Línea Capri",
    colorOrDesign: "Blú",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Venecitas",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/capri_blu.jpg"
  },
  {
    id: "fer-36-esteco-azul",
    name: "Esteco Azul",
    line: "Línea Esteco",
    colorOrDesign: "Azul",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Mármol",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/esteco_azul.jpg"
  },
  {
    id: "fer-36-esteco-beige",
    name: "Esteco Beige",
    line: "Línea Esteco",
    colorOrDesign: "Beige",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Mármol",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/esteco_beige.jpg"
  },
  {
    id: "fer-36-esteco-gris",
    name: "Esteco Gris",
    line: "Línea Esteco",
    colorOrDesign: "Gris",
    format: "36x36 cm",
    finish: "Brillante",
    traffic: "PEI 3 Tránsito Medio",
    designType: "Mármol",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/esteco_gris.jpg"
  },

  // --- 2. MATE (PEI 4 - Tránsito Alto - Superficie Lisa) ---
  {
    id: "fer-36-animana-beige",
    name: "Animaná Beige",
    line: "Línea Animaná",
    colorOrDesign: "Beige",
    format: "36x36 cm",
    finish: "Mate",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Cemento",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/animana_beige.jpg"
  },
  {
    id: "fer-36-animana-gris",
    name: "Animaná Gris",
    line: "Línea Animaná",
    colorOrDesign: "Gris",
    format: "36x36 cm",
    finish: "Mate",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Cemento",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/animana_gris.jpg"
  },
  {
    id: "fer-36-animana-oxido",
    name: "Animaná Óxido",
    line: "Línea Animaná",
    colorOrDesign: "Óxido",
    format: "36x36 cm",
    finish: "Mate",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Cemento",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/animana_oxido.jpg"
  },
  {
    id: "fer-36-animana-tiza",
    name: "Animaná Tiza",
    line: "Línea Animaná",
    colorOrDesign: "Tiza",
    format: "36x36 cm",
    finish: "Mate",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Cemento",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/animana_tiza.jpg"
  },
  {
    id: "fer-36-tipa-natural",
    name: "Tipa Natural",
    line: "Línea Tipa",
    colorOrDesign: "Natural",
    format: "36x36 cm",
    finish: "Mate",
    traffic: "PEI 4 Tránsito Alto",
    designType: "Madera",
    surface: "Lisa",
    packaging: packingEsmaltados36,
    image: "/products/36x36/tipa_natural.jpg"
  },

  // --- 3. LÍNEA COLONIALES ---
  {
    id: "fer-36-calchaqui-cotto",
    name: "Calchaquí Cotto",
    line: "Línea Calchaquí",
    colorOrDesign: "Cotto",
    format: "36x36 cm",
    finish: "Colonial",
    traffic: "Tránsito Estándar",
    designType: "Colonial",
    surface: "Con relieve",
    packaging: packingColoniales36,
    image: "/products/36x36/calchaqui_cotto_clasico_relieve.jpg"
  },
  {
    id: "fer-36-calchaqui-curado-fuego",
    name: "Calchaquí Curado a Fuego",
    line: "Línea Calchaquí",
    colorOrDesign: "Curado a fuego",
    format: "36x36 cm",
    finish: "Colonial",
    traffic: "Tránsito Estándar",
    designType: "Colonial",
    surface: "Con relieve",
    specialFeature: "Capa protectora antiabsorción de líquidos",
    packaging: packingColoniales36,
    image: "/products/36x36/calchaqui_curado_a_fuego_relieve.jpg"
  },
  {
    id: "fer-36-classico-cotto",
    name: "Classico Cotto",
    line: "Línea Classico",
    colorOrDesign: "Cotto",
    format: "36x36 cm",
    finish: "Colonial",
    traffic: "Tránsito Estándar",
    designType: "Colonial",
    surface: "Lisa",
    packaging: packingColoniales36,
    image: "/products/36x36/classico_cotto_clasico_lisa.jpg"
  },
  {
    id: "fer-36-classico-curado-fuego",
    name: "Classico Curado a Fuego",
    line: "Línea Classico",
    colorOrDesign: "Curado a fuego",
    format: "36x36 cm",
    finish: "Colonial",
    traffic: "Tránsito Estándar",
    designType: "Colonial",
    surface: "Lisa",
    specialFeature: "Capa protectora antiabsorción de líquidos",
    packaging: packingColoniales36,
    image: "/products/36x36/classico_curado_a_fuego_lisa.jpg"
  }
];
