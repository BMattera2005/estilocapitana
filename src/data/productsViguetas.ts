// src/data/productsViguetas.ts

export interface ViguetaProduct {
  /** Si es false, el modelo se oculta de la web sin borrar su información. */
  isVisible?: boolean;
  id: string;
  name: string;
  category: "Viguetas Pretensadas";
  series: string;
  lengthRange: string;
  reinforcement: string;
  section: string;
  supportMin: string;
  norm: string;
  application: string;
  image: string;
}

export interface BovedillaProduct {
  /** Si es false, el modelo se oculta de la web sin borrar su información. */
  isVisible?: boolean;
  id: string;
  name: string;
  category: "Bovedillas EPS";
  heightCm: number;
  axisSpacingCm: number;
  consumptionPerSqm: number;
  weightAppx: string;
  fireRating: string;
  description: string;
  image: string;
}

export const productsViguetas: ViguetaProduct[] = [
  {
    id: "vig-stonover-s1",
    name: "Vigueta Pretensada Serie 1",
    category: "Viguetas Pretensadas",
    series: "Serie 1",
    lengthRange: "1,00 m a 4,00 m",
    reinforcement: "Trenza de alambre 2 x 2,25 mm",
    section: "T invertida (Base 12 cm x Altura 9 cm)",
    supportMin: "10 cm en mampostería / 8 cm en vigas",
    norm: "Fabricación Cerámica Salteña - Hormigón de gran resistencia",
    application: "Losas de entrepiso y cubiertas residenciales estándar",
    image: "/products/viguetas/vigueta_s1.jpg",
  },
  {
    id: "vig-stonover-s2",
    name: "Vigueta Pretensada Serie 2",
    category: "Viguetas Pretensadas",
    series: "Serie 2",
    lengthRange: "4,20 m a 4,40 m",
    reinforcement: "Trenza de alambre 2 x 2,25 mm",
    section: "T invertida (Base 12 cm x Altura 9 cm)",
    supportMin: "10 cm en mampostería / 8 cm en vigas",
    norm: "Fabricación Cerámica Salteña - Tensado hidráulico",
    application: "Luces medias para viviendas y locales comerciales",
    image: "/products/viguetas/vigueta_s2.jpg",
  },
  {
    id: "vig-stonover-s3",
    name: "Vigueta Pretensada Serie 3",
    category: "Viguetas Pretensadas",
    series: "Serie 3",
    lengthRange: "4,60 m a 4,80 m",
    reinforcement: "Trenza de alambre 3 x 2,25 mm",
    section: "T invertida (Base 12 cm x Altura 9 cm)",
    supportMin: "10 cm en mampostería / 8 cm en vigas",
    norm: "Fabricación Cerámica Salteña - Curado a vapor",
    application: "Luces medianas a exigentes para entrepisos",
    image: "/products/viguetas/vigueta_s3.jpg",
  },
  {
    id: "vig-stonover-s4-alt1",
    name: "Vigueta Pretensada Serie 4 (Alt. 1)",
    category: "Viguetas Pretensadas",
    series: "Serie 4 - Alternativa 1",
    lengthRange: "5,00 m a 5,60 m",
    reinforcement: "Trenza de alambre 3 x 2,25 mm",
    section: "T invertida (Base 12 cm x Altura 9 cm)",
    supportMin: "10 cm en mampostería / 8 cm en vigas",
    norm: "Fabricación Cerámica Salteña",
    application: "Grandes luces libres residenciales y corporativas",
    image: "/products/viguetas/vigueta_s4.jpg",
  },
  {
    id: "vig-stonover-s4-alt2",
    name: "Vigueta Pretensada Serie 4 (Alt. 2 Reforzada)",
    category: "Viguetas Pretensadas",
    series: "Serie 4 - Alternativa 2",
    lengthRange: "5,00 m a 5,60 m",
    reinforcement: "Trenza de alambre reforzado 3 x 3 mm",
    section: "T invertida (Base 12 cm x Altura 9 cm)",
    supportMin: "10 cm en mampostería / 8 cm en vigas",
    norm: "Armadura reforzada para mayores sobrecargas admisibles",
    application: "Entrepisos con alta exigencia de carga útil (> 300 kg/m²)",
    image: "/products/viguetas/vigueta_s4_reforzada.jpg",
  },
  {
    id: "vig-stonover-s5",
    name: "Vigueta Pretensada Serie 5",
    category: "Viguetas Pretensadas",
    series: "Serie 5",
    lengthRange: "5,80 m a 6,20 m",
    reinforcement: "Trenza de alambre reforzado 3 x 3 mm",
    section: "T invertida (Base 12 cm x Altura 9 cm)",
    supportMin: "10 cm en mampostería / 8 cm en vigas",
    norm: "Fabricación Cerámica Salteña - Hormigón de alta tensión",
    application: "Entrepisos de grandes luces y techos industriales",
    image: "/products/viguetas/vigueta_s5.jpg",
  },
  {
    id: "vig-stonover-s6",
    name: "Vigueta Pretensada Serie 6",
    category: "Viguetas Pretensadas",
    series: "Serie 6",
    lengthRange: "6,40 m a 7,20 m",
    reinforcement: "Trenza de alambre reforzado 3 x 3 mm (Tipo puente)",
    section: "T invertida (Base 12 cm x Altura 9 cm)",
    supportMin: "10 cm en mampostería / 8 cm en vigas",
    norm: "Armadura especial utilizada en vigas de puentes pretensados",
    application: "Luz máxima admisible sin apoyos intermedios permanentes",
    image: "/products/viguetas/vigueta_s6.jpg",
  }
];

export const productsBovedillasEPS: BovedillaProduct[] = [
  {
    id: "bov-eps-h10-e50",
    name: "Bovedilla EPS Famapol H10 (Eje 50 cm)",
    category: "Bovedillas EPS",
    heightCm: 10,
    axisSpacingCm: 50,
    consumptionPerSqm: 2,
    weightAppx: "1 kg/m²",
    fireRating: "RE2 - Muy baja propagación de llama (IRAM 11910/18)",
    description: "Bloque de poliestireno para forjado alivianado de 10 cm de altura. Reemplaza 4 ladrillos cerámicos tradicionales.",
    image: "/products/viguetas/bovedilla_h10.jpg",
  },
  {
    id: "bov-eps-h12-e50",
    name: "Bovedilla EPS Famapol H12 (Eje 50 cm)",
    category: "Bovedillas EPS",
    heightCm: 12,
    axisSpacingCm: 50,
    consumptionPerSqm: 2,
    weightAppx: "1 kg/m²",
    fireRating: "RE2 - Muy baja propagación de llama",
    description: "Bloque de EPS de 12 cm de altura para luces intermedias. Alta aislación térmica media de cubierta.",
    image: "/products/viguetas/bovedilla_h12.jpg",
  },
  {
    id: "bov-eps-h13-e60",
    name: "Bovedilla EPS Famapol H13 (Eje 60 cm)",
    category: "Bovedillas EPS",
    heightCm: 13,
    axisSpacingCm: 60,
    consumptionPerSqm: 1.61,
    weightAppx: "1 kg/m²",
    fireRating: "RE2 - Muy baja propagación de llama",
    description: "Formato ancho para intereje de 60 cm. Reduce la cantidad de viguetas por metro cuadrado de losa.",
    image: "/products/viguetas/bovedilla_h13_60.jpg",
  },
  {
    id: "bov-eps-h17-e60",
    name: "Bovedilla EPS Famapol H17 (Eje 60 cm)",
    category: "Bovedillas EPS",
    heightCm: 17,
    axisSpacingCm: 60,
    consumptionPerSqm: 1.61,
    weightAppx: "1.2 kg/m²",
    fireRating: "RE2 - Muy baja propagación de llama",
    description: "Bloque de gran peralte para losas nervuradas de alta carga admisible y requerimiento acústico.",
    image: "/products/viguetas/bovedilla_h17_60.jpg",
  }
];
