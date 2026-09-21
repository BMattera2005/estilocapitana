// CARGA PARCIAL: faltan productos del catálogo completo.

import type { RubroSlug } from "./rubros";

export type ProductFormat = "60x120 cm" | "120x120 cm";
export type ProductFinish = "Glossy (Pulido)" | "Glossy & Velvet" | "Rustic (Mate)";

export type Product = {
  sku: string;
  name: string;
  format: ProductFormat;
  finish: ProductFinish;
  body: string;
  faces: string;
  description: string;
  specs: string[];
  packaging: string;
};

export const products: Product[] = [
  {
    sku: "MNC-001",
    name: "Carrara Luxe",
    format: "60x120 cm",
    finish: "Glossy (Pulido)",
    body: "GVT Vitrificado",
    faces: "Random 5",
    description:
      "Porcelanato blanco pulido de alto brillo inspirado en mármol Carrara con vetas grises profundas. Apto para solados y revestimientos interiores.",
    specs: [
      "Espesor: 9 mm",
      "Superficie: Glossy espejo",
      "Bordes: Rectificados",
      "Absorción: < 0.5%",
    ],
    packaging: "Caja: Consultar m² | Formato: 600x1200 mm",
  },
  {
    sku: "MNC-004",
    name: "Olister Bianco",
    format: "60x120 cm",
    finish: "Glossy (Pulido)",
    body: "GVT Vitrificado",
    faces: "Random 4",
    description:
      "Placa porcelánica esmaltada de fondo blanco cálido y veteado suave continuo para ambientes amplios y luminosos.",
    specs: [
      "Espesor: 9 mm",
      "Superficie: Glossy",
      "Cuerpo: GVT Vitrificado",
      "Resistencia a manchas ISO 10545-14",
    ],
    packaging: "Caja: Consultar m² | Formato: 600x1200 mm",
  },
  {
    sku: "MNC-008",
    name: "Argenta Grey",
    format: "60x120 cm",
    finish: "Glossy & Velvet",
    body: "GVT Vitrificado",
    faces: "Random 4",
    description:
      "Diseño pétreo en escala de grises medios disponible en acabado pulido brillante (Glossy) o textura mate sedosa (Velvet).",
    specs: [
      "Espesor: 9 mm",
      "Acabados: Glossy / Velvet",
      "Borde rectificado",
      "Resistente a heladas",
    ],
    packaging: "Caja: Consultar m² | Formato: 600x1200 mm",
  },
  {
    sku: "MNC-012",
    name: "Casa Light",
    format: "60x120 cm",
    finish: "Glossy (Pulido)",
    body: "GVT Vitrificado",
    faces: "Random 4",
    description:
      "Porcelanato pulido reflectivo en tono marfil neutro con microtextura mineral suave para solados elegantes.",
    specs: ["Espesor: 9 mm", "Superficie: Glossy", "Borde calibrado", "Ignífugo clase A"],
    packaging: "Caja: Consultar m² | Formato: 600x1200 mm",
  },
  {
    sku: "MLN-120-001",
    name: "Sand Light",
    format: "120x120 cm",
    finish: "Rustic (Mate)",
    body: "Porcelánico Gran Formato",
    faces: "Random 4",
    description:
      "Placa de gran escala con acabado rústico mineral antideslizante en tono arena claro. Continuidad visual con mínimas juntas.",
    specs: [
      "Espesor: 9 mm",
      "Superficie: Rustic mate",
      "Carga de rotura: > 2000 N",
      "Resistencia flexión: > 40 N/mm²",
    ],
    packaging: "2 piezas/caja · 2.88 m² · 60 kg por caja",
  },
  {
    sku: "MLN-120-002",
    name: "Unico Beige",
    format: "120x120 cm",
    finish: "Rustic (Mate)",
    body: "Porcelánico Gran Formato",
    faces: "Random 3",
    description:
      "Superficie arquitectónica rústica en tono beige cálido para proyectos residenciales y comerciales de alto tránsito.",
    specs: [
      "Espesor: 9 mm",
      "Superficie: Rustic mate",
      "Dureza Mohs: Clase 4",
      "Resistente a químicos ISO 10545-13",
    ],
    packaging: "2 piezas/caja · 2.88 m² · 60 kg por caja",
  },
  {
    sku: "MLN-120-003",
    name: "Unico Grey",
    format: "120x120 cm",
    finish: "Rustic (Mate)",
    body: "Porcelánico Gran Formato",
    faces: "Random 3",
    description:
      "Gran formato 120x120 cm con estética de cemento lavado y tono gris arquitectónico para interiores y galerías exteriores.",
    specs: [
      "Espesor: 9 mm",
      "Superficie: Rustic mate",
      "Absorción de agua: < 0.3%",
      "Apto exterior/interior",
    ],
    packaging: "2 piezas/caja · 2.88 m² · 60 kg por caja",
  },
];

export function getProductRubroSlug(product: Product): RubroSlug {
  if (product.finish === "Rustic (Mate)") return "rusticos-grandes-formatos";
  return "porcelanatos-glossy";
}

export function countProductsByRubro(rubroSlug: string): number {
  return products.filter((product) => getProductRubroSlug(product) === rubroSlug).length;
}