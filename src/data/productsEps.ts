// src/data/productsEps.ts

export interface EpsProduct {
  id: string;
  name: string;
  family: string;
  density: string;
  fireRating: string;
  mainApplications: string;
  dimensionsOrYield: string;
  technicalAdvantage: string;
}

export const productsEps: EpsProduct[] = [
  {
    id: "eps-bovedillas-forjados",
    name: "Bovedillas de EPS para Forjados y Losas",
    family: "Bovedillas",
    density: "15 kg/m³ nominal",
    fireRating: "RE2 - Muy baja propagación de llama (IRAM 11910/18)",
    mainApplications: "Techados y entrepisos livianos alivianados con viguetas pretensadas.",
    dimensionsOrYield: "Alturas 10, 12, 13, 17 y 18 cm · Ancho estándar para ejes 50 cm y 60 cm (2 un/m²)",
    technicalAdvantage: "Reduce entre un 40% y 45% el peso propio de la losa frente al bloque cerámico tradicional.",
  },
  {
    id: "eps-placas-aislantes",
    name: "Placas Aislantes Térmicas EPS Famapol",
    family: "Placas",
    density: "15 a 25 kg/m³",
    fireRating: "Autoextinguible con aditivo retardante de llama",
    mainApplications: "Aislamiento de muros dobles, techos de chapa, losas bajo contrapiso y sistemas EIFS.",
    dimensionsOrYield: "Espesores de 20 mm a 100 mm · Formato placa 1000 x 1000 mm / 1000 x 2000 mm",
    technicalAdvantage: "Nula absorción capilar de agua y elevada resistencia térmica continua sin puentes térmicos.",
  },
  {
    id: "eps-casetones-recuperables",
    name: "Casetones Alivianadores para Losas Bidireccionales",
    family: "Casetones",
    density: "15 a 20 kg/m³",
    fireRating: "RE2 según normas IRAM",
    mainApplications: "Grandes luces estructurales, losas casetonadas y cielorrasos sin vigas intermedias.",
    dimensionsOrYield: "Formatos a medida de cálculo estructural (módulos 60x60 cm, 80x80 cm)",
    technicalAdvantage: "Ahorro sustancial de hormigón y armadura pasiva en edificios y naves corporativas.",
  },
  {
    id: "eps-bloques-corte",
    name: "Bloques Macizos para Corte y Molduras",
    family: "Bloques",
    density: "12 a 30 kg/m³",
    fireRating: "Retardante de llama ignífugo",
    mainApplications: "Mecanizado industrial, molduras de fachada, rellenos viales y topografía liviana.",
    dimensionsOrYield: "Bloques de gran formato para fraccionamiento a pantógrafo o hilo caliente",
    technicalAdvantage: "Estructura homogénea de celda cerrada para corte preciso y enlucidos de bajo espesor.",
  },
  {
    id: "eps-molido-hormigon",
    name: "EPS Molido / Perlas Vírgenes para Hormigón Liviano",
    family: "EPS Molido",
    density: "Ultra liviano",
    fireRating: "Ignífugo",
    mainApplications: "Contrapisos alivianados, pendientes de cubiertas y rellenos acústicos de solados.",
    dimensionsOrYield: "Bolsas de 0.25 m³ y 0.50 m³ para dosificación en trompito o motohormigonera",
    technicalAdvantage: "Reduce drásticamente la carga muerta en terrazas manteniendo la capacidad hidrófuga.",
  },
];
