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

export const packingStandard43: CeramicProduct["packaging"] = {
  piecesPerBox: 12,
  sqmPerBox: 2.25,
  kgPerBox: 32,
  boxesPerPallet: 48,
  sqmPerPallet: 108,
  kgPerPallet: 1500,
};

export const products43x43: CeramicProduct[] = [
  // --- A. BRILLANTES (PEI 3 - Tránsito Medio) ---
  { id: "fer-43-algarrobo", name: "Algarrobo", line: "Línea Algarrobo", colorOrDesign: "Natural", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Madera", faces: 4, packaging: packingStandard43, image: "/products/43x43/algarrobo.jpg" },
  { id: "fer-43-cachi-gris", name: "Cachi Gris", line: "Línea Cachi", colorOrDesign: "Gris", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, packaging: packingStandard43, image: "/products/43x43/cachi_gris.jpg" },
  { id: "fer-43-cachi-arena", name: "Cachi Arena", line: "Línea Cachi", colorOrDesign: "Arena", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, packaging: packingStandard43, image: "/products/43x43/cachi_arena.jpg" },
  { id: "fer-43-calacatta-blanco", name: "Calacatta Blanco", line: "Línea Calacatta", colorOrDesign: "Blanco", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, shadeVariation: "V2 Ligera Variación", packaging: packingStandard43, image: "/products/43x43/calacatta_blanco.jpg" },
  { id: "fer-43-calacatta-dorado", name: "Calacatta Dorado", line: "Línea Calacatta", colorOrDesign: "Dorado", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, shadeVariation: "V2 Ligera Variación", packaging: packingStandard43, image: "/products/43x43/calacatta_dorado.jpg" },
  { id: "fer-43-capri", name: "Capri", line: "Línea Capri", colorOrDesign: "Mix / Blú / Blanco", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Venecitas", faces: 4, packaging: packingStandard43, image: "/products/43x43/capri.jpg" },
  { id: "fer-43-cebil", name: "Cebil", line: "Línea Cebil", colorOrDesign: "Natural", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Madera", faces: 4, packaging: packingStandard43, image: "/products/43x43/cebil.jpg" },
  { id: "fer-43-chani", name: "Chañi", line: "Línea Chañi", colorOrDesign: "Blanco / Negro / Mix", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/chani.jpg" },
  { id: "fer-43-esteco", name: "Esteco", line: "Línea Esteco", colorOrDesign: "Marmolado Ónix", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, shadeVariation: "Destonalizado V2", packaging: packingStandard43, image: "/products/43x43/esteco.jpg" },
  { id: "fer-43-molle", name: "Molle", line: "Línea Molle", colorOrDesign: "Natural", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Madera", faces: 4, packaging: packingStandard43, image: "/products/43x43/molle.jpg" },
  { id: "fer-43-rosario-azul", name: "Rosario Azul", line: "Línea Rosario", colorOrDesign: "Azul", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, shadeVariation: "Destonalizado V2", packaging: packingStandard43, image: "/products/43x43/rosario_azul.jpg" },
  { id: "fer-43-rosario-verde", name: "Rosario Verde", line: "Línea Rosario", colorOrDesign: "Verde", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, shadeVariation: "Destonalizado V2", packaging: packingStandard43, image: "/products/43x43/rosario_verde.jpg" },
  { id: "fer-43-san-luis", name: "San Luis", line: "Línea San Luis", colorOrDesign: "Beige", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, packaging: packingStandard43, image: "/products/43x43/san_luis.jpg" },
  { id: "fer-43-sauce-gris", name: "Sauce Gris", line: "Línea Sauce", colorOrDesign: "Gris", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Madera", faces: 4, packaging: packingStandard43, image: "/products/43x43/sauce_gris.jpg" },
  { id: "fer-43-tolombon-gris", name: "Tolombón Gris", line: "Línea Tolombón", colorOrDesign: "Gris", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Mármol", faces: 4, packaging: packingStandard43, image: "/products/43x43/tolombon_gris.jpg" },
  { id: "fer-43-urundel-beige", name: "Urundel Beige", line: "Línea Urundel", colorOrDesign: "Beige", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Madera", faces: 2, packaging: packingStandard43, image: "/products/43x43/urundel_beige.jpg" },
  { id: "fer-43-urundel-nativo", name: "Urundel Nativo", line: "Línea Urundel", colorOrDesign: "Nativo", format: "43x43 cm", finish: "Brillante", traffic: "PEI 3 Tránsito Medio", designType: "Madera", faces: 2, packaging: packingStandard43, image: "/products/43x43/urundel_nativo.jpg" },

  // --- B. SATINADOS (PEI 4 - Tránsito Alto) ---
  { id: "fer-43-bali-azul", name: "Bali Azul", line: "Línea Bali", colorOrDesign: "Azul", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/bali_azul.jpg" },
  { id: "fer-43-bali-piedra", name: "Bali Piedra", line: "Línea Bali", colorOrDesign: "Piedra", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/bali_piedra.jpg" },
  { id: "fer-43-bali-verde", name: "Bali Verde", line: "Línea Bali", colorOrDesign: "Verde", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/bali_verde.jpg" },
  { id: "fer-43-los-toldos-azul", name: "Los Toldos Azul", line: "Línea Los Toldos", colorOrDesign: "Azul", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Calcáreo", faces: 4, packaging: packingStandard43, image: "/products/43x43/los_toldos_azul.jpg" },
  { id: "fer-43-los-toldos-beige", name: "Los Toldos Beige", line: "Línea Los Toldos", colorOrDesign: "Beige", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Calcáreo", faces: 4, packaging: packingStandard43, image: "/products/43x43/los_toldos_beige.jpg" },
  { id: "fer-43-nazareno-color", name: "Nazareno Color", line: "Línea Nazareno", colorOrDesign: "Color", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Calcáreo", faces: 3, packaging: packingStandard43, image: "/products/43x43/nazareno_color.jpg" },
  { id: "fer-43-nazareno-gris", name: "Nazareno Gris", line: "Línea Nazareno", colorOrDesign: "Gris", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Calcáreo", faces: 3, packaging: packingStandard43, image: "/products/43x43/nazareno_gris.jpg" },
  { id: "fer-43-nogal-gris", name: "Nogal Gris", line: "Línea Nogal", colorOrDesign: "Gris", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Madera", faces: 4, packaging: packingStandard43, image: "/products/43x43/nogal_gris.jpg" },
  { id: "fer-43-nogal-marron", name: "Nogal Marrón", line: "Línea Nogal", colorOrDesign: "Marrón", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Madera", faces: 4, packaging: packingStandard43, image: "/products/43x43/nogal_marron.jpg" },
  { id: "fer-43-nogal-vintage", name: "Nogal Vintage", line: "Línea Nogal", colorOrDesign: "Vintage", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Madera", faces: 4, packaging: packingStandard43, image: "/products/43x43/nogal_vintage.jpg" },
  { id: "fer-43-san-antonio-arena", name: "San Antonio Arena", line: "Línea San Antonio", colorOrDesign: "Arena", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Mármol", faces: 4, shadeVariation: "Destonalizado V2", packaging: packingStandard43, image: "/products/43x43/san_antonio_arena.jpg" },
  { id: "fer-43-virreinal", name: "Virreinal", line: "Línea Virreinal", colorOrDesign: "Mixto", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Calcáreo", faces: 4, packaging: packingStandard43, image: "/products/43x43/virreinal.jpg" },
  { id: "fer-43-zenta", name: "Zenta", line: "Línea Zenta", colorOrDesign: "Arena / Beige / Cemento / Gris / Marfil", format: "43x43 cm", finish: "Satinado", traffic: "PEI 4 Tránsito Alto", designType: "Cemento", faces: 6, shadeVariation: "Destonalizado V2", packaging: packingStandard43, image: "/products/43x43/zenta.jpg" },

  // --- C. MATE CON GRANILLA (PEI 5 - Tránsito Muy Alto) ---
  { id: "fer-43-abra", name: "Abra", line: "Línea Abra", colorOrDesign: "Gris / Tiza", format: "43x43 cm", finish: "Mate con Granilla", traffic: "PEI 5 Tránsito Muy Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/abra.jpg" },
  { id: "fer-43-candelaria", name: "Candelaria", line: "Línea Candelaria", colorOrDesign: "Beige / Óxido", format: "43x43 cm", finish: "Mate con Granilla", traffic: "PEI 5 Tránsito Muy Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/candelaria.jpg" },
  { id: "fer-43-guachipas", name: "Guachipas", line: "Línea Guachipas", colorOrDesign: "Terra", format: "43x43 cm", finish: "Mate con Granilla", traffic: "PEI 5 Tránsito Muy Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/guachipas.jpg" },
  { id: "fer-43-molinos", name: "Molinos", line: "Línea Molinos", colorOrDesign: "Gris / Terra", format: "43x43 cm", finish: "Mate con Granilla", traffic: "PEI 5 Tránsito Muy Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/molinos.jpg" },
  { id: "fer-43-payogasta", name: "Payogasta", line: "Línea Payogasta", colorOrDesign: "Marrón / Terra", format: "43x43 cm", finish: "Mate con Granilla", traffic: "PEI 5 Tránsito Muy Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/payogasta.jpg" },
  { id: "fer-43-vina", name: "Viña", line: "Línea Viña", colorOrDesign: "Beige / Marrón", format: "43x43 cm", finish: "Mate con Granilla", traffic: "PEI 5 Tránsito Muy Alto", designType: "Piedras", faces: 4, packaging: packingStandard43, image: "/products/43x43/vina.jpg" },

  // --- D. LÍNEA COLONIALES ---
  { id: "fer-43-classico-cotto", name: "Classico Cotto", line: "Línea Classico", colorOrDesign: "Cotto", format: "43x43 cm", finish: "Colonial", traffic: "Tránsito Estándar", designType: "Colonial", faces: "Trama Clásica", packaging: packingStandard43, image: "/products/43x43/classico_cotto.jpg" },
  { id: "fer-43-classico-curado-a-fuego", name: "Classico Curado a Fuego", line: "Línea Classico", colorOrDesign: "Curado a fuego (Antimanchas)", format: "43x43 cm", finish: "Colonial", traffic: "Tránsito Estándar", designType: "Colonial", faces: "Capa protectora antiabsorción", packaging: packingStandard43, image: "/products/43x43/classico_curado_fuego.jpg" },
];
