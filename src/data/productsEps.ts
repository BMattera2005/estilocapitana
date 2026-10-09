// src/data/productsEps.ts

export interface EpsProduct {
  id: string;
  name: string;
  family: string;
  density: string;
  fireRating: string;
  dimensionsOrYield: string;
  technicalAdvantage: string;
  description: string;
  image: string;
  isVisible?: boolean;
}

export const productsEps: EpsProduct[] = [
  {
    id: "eps-prod-1", // Corresponde a la Imagen 2 del PDF/Carpeta
    name: "Bovedillas de EPS Famapol para Losas (H10 y H12)",
    family: "Bovedillas para Forjados",
    density: "15 kg/m³ nominal",
    fireRating: "RE2 — Muy baja propagación de llama (IRAM 11910/18)",
    dimensionsOrYield: "Alturas 10 cm y 12 cm · Ancho 42 cm (ejes a 50 cm)",
    technicalAdvantage: "Aliviana el peso propio de la losa entre 40% y 45% respecto al bloque cerámico.",
    description: "Bloques de poliestireno expandido con hendiduras inferiores para favorecer la adherencia del revoque.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0002.jpg",
    isVisible: true,
  },
  {
    id: "eps-prod-2", // Corresponde a la Imagen 3 del PDF/Carpeta
    name: "Bovedillas de EPS Famapol para Losas (H13 y H17)",
    family: "Bovedillas para Forjados",
    density: "15 kg/m³ nominal",
    fireRating: "RE2 — Muy baja propagación de llama",
    dimensionsOrYield: "Alturas 13 cm, 17 cm y 18 cm · Ancho 50 cm (ejes a 60 cm)",
    technicalAdvantage: "Formato ancho para intereje de 60 cm. Reduce la cantidad de viguetas por m² de losa.",
    description: "Bloque de gran peralte para losas nervuradas de alta carga admisible y requerimiento acústico.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0003.jpg",
    isVisible: true,
  },
  {
    id: "eps-prod-3", // Corresponde a la Imagen 4 del PDF/Carpeta
    name: "Placas y Paneles Aislantes EPS Famapol",
    family: "Placas Aislantes",
    density: "15 a 25 kg/m³",
    fireRating: "Autoextinguible (RE2)",
    dimensionsOrYield: "Espesores de 2 cm a 10 cm · Formatos 100×100 cm y 100×200 cm",
    technicalAdvantage: "Nula absorción de agua y aislación térmica continua para cubiertas y muros dobles.",
    description: "Paneles de poliestireno expandido para aislamiento térmico y acústico en arquitectura residencial e industrial.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0004.jpg",
    isVisible: true,
  },
  {
    id: "eps-prod-4", // Corresponde a la Imagen 5 del PDF/Carpeta
    name: "Casetones y Bloques Especiales EPS",
    family: "Casetones Estructurales",
    density: "15 kg/m³ nominal",
    fireRating: "Autoextinguible",
    dimensionsOrYield: "Medidas según pliego técnico de obra",
    technicalAdvantage: "Permite el armado de losas casetonadas y multidireccionales de gran luz libre.",
    description: "Encofrado perdido de EPS para losas nervuradas en dos direcciones y obras corporativas.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0005.jpg",
    isVisible: true,
  },
  {
    id: "eps-prod-5", // Corresponde a la Imagen 6 del PDF/Carpeta
    name: "EPS Molido y Perlas para Contrapisos Aislantes",
    family: "Aislación Suelta / Rellenos",
    density: "Ultraliviano",
    fireRating: "RE2 — Muy baja propagación de llama",
    dimensionsOrYield: "Bolsas de 0.25 m³ / 0.50 m³",
    technicalAdvantage: "Permite elaborar hormigones ultralivianos de excelente capacidad de aislación térmica.",
    description: "Perlas y material triturado de poliestireno expandido para contrapisos, pendientes de cubierta y rellenos.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0006.jpg",
    isVisible: true,
  },
];
