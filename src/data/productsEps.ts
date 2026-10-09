// src/data/productsEps.ts

export interface EpsProduct {
  id: string;
  name: string;
  family: "Bovedillas" | "Placas" | "Casetones" | "Bloques" | "EPS Molido";
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
    id: "eps-bovedillas-losas",
    name: "Bovedillas de EPS Famapol para Losas (H10 y H12)",
    family: "Bovedillas",
    density: "15 kg/m³ nominal",
    fireRating: "RE2 — Muy baja propagación de llama (IRAM 11910/18)",
    dimensionsOrYield: "Alturas 10 cm y 12 cm · Ancho 42 cm (ejes a 50 cm)",
    technicalAdvantage: "Aliviana el peso propio de la losa entre 40% y 45% respecto al bloque cerámico.",
    description: "Bloques de poliestireno expandido con hendiduras inferiores para favorecer la adherencia del revoque.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0002.jpg",
    isVisible: true,
  },
  {
    id: "eps-placas-aislantes",
    name: "Placas y Paneles Aislantes EPS Famapol",
    family: "Placas",
    density: "15 a 25 kg/m³",
    fireRating: "Autoextinguible (RE2)",
    dimensionsOrYield: "Espesores de 2 cm a 10 cm · Formatos 100×100 cm y 100×200 cm",
    technicalAdvantage: "Nula absorción de agua y aislación térmica continua para cubiertas y muros dobles.",
    description: "Paneles de poliestireno expandido para aislamiento térmico y acústico en arquitectura residencial e industrial.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0003.jpg",
    isVisible: true,
  },
  {
    id: "eps-casetones-especiales",
    name: "Casetones Alivianadores para Losas Bidireccionales",
    family: "Casetones",
    density: "15 kg/m³ nominal",
    fireRating: "Autoextinguible",
    dimensionsOrYield: "Medidas según pliego técnico de obra",
    technicalAdvantage: "Permite el armado de losas casetonadas y multidireccionales de gran luz libre.",
    description: "Encofrado perdido de EPS para losas nervuradas en dos direcciones y obras corporativas.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0004.jpg",
    isVisible: true,
  },
  {
    id: "eps-bloques-mecanizado",
    name: "Bloques Macizos de EPS para Corte y Molduras",
    family: "Bloques",
    density: "12 a 30 kg/m³",
    fireRating: "Retardante de llama ignífugo",
    dimensionsOrYield: "Bloques macizos de gran formato para fraccionamiento a medida",
    technicalAdvantage: "Estructura homogénea de celda cerrada para molduras, alivianados y rellenos.",
    description: "Bloques compactos para pantógrafo, cortes especiales e ingeniería de obra.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0005.jpg",
    isVisible: true,
  },
  {
    id: "eps-molido-perlas",
    name: "EPS Molido y Perlas para Contrapisos Aislantes",
    family: "EPS Molido",
    density: "Ultraliviano",
    fireRating: "RE2 — Muy baja propagación de llama",
    dimensionsOrYield: "Bolsas de 0.25 m³ / 0.50 m³",
    technicalAdvantage: "Permite elaborar hormigones ultralivianos de excelente capacidad de aislación térmica.",
    description: "Perlas y material triturado de poliestireno expandido para contrapisos, pendientes de cubierta y rellenos.",
    image: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0006.jpg",
    isVisible: true,
  },
];
