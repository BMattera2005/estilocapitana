export interface ViguetaProduct {
  id: string;
  name: string;
  series: string;
  section: string; // Expresado en cm
  lengthRange: string; // Expresado en m
  reinforcement: string;
  minSupport: string; // Expresado en cm
  description: string;
  image: string;
  isVisible?: boolean;
}

export const productsViguetas: ViguetaProduct[] = [
  {
    id: "vig-serie-1",
    name: "Vigueta STONOVER — Serie 1",
    series: "Serie 1 (Hasta 4.00 m)",
    section: "12×9 cm (Base: 12 cm, Altura: 9 cm, Cabeza: 3 cm)",
    lengthRange: "1.00 m a 4.00 m",
    reinforcement: "Trenza de alambre 2×2.25 mm",
    minSupport: "10 cm en mampostería / 8 cm en tabiques y vigas",
    description: "Vigueta pretensada de hormigón STONOVER de sección constante en T invertida para luces de hasta 4.00 metros.",
    image: "/products/viguetas/viguetas_obra.jpg",
    isVisible: true,
  },
  {
    id: "vig-serie-2",
    name: "Vigueta STONOVER — Serie 2",
    series: "Serie 2 (4.20 m a 4.40 m)",
    section: "12×9 cm (Base: 12 cm, Altura: 9 cm, Cabeza: 3 cm)",
    lengthRange: "4.20 m a 4.40 m",
    reinforcement: "Trenza de alambre 3×2.25 mm",
    minSupport: "10 cm en mampostería / 8 cm en tabiques y vigas",
    description: "Elemento estructural semirresistente de hormigón pretensado para luces intermedias de entrepiso.",
    image: "/products/viguetas/viguetas_obra.jpg",
    isVisible: true,
  },
  {
    id: "vig-serie-3",
    name: "Vigueta STONOVER — Serie 3",
    series: "Serie 3 (4.60 m a 4.80 m)",
    section: "12×9 cm (Base: 12 cm, Altura: 9 cm, Cabeza: 3 cm)",
    lengthRange: "4.60 m a 4.80 m",
    reinforcement: "Trenza de alambre reforzado 3×3.00 mm",
    minSupport: "10 cm en mampostería / 8 cm en tabiques y vigas",
    description: "Vigueta pretensada con aceros de alta resistencia de grado puente para mayor capacidad portante.",
    image: "/products/viguetas/viguetas_obra.jpg",
    isVisible: true,
  },
  {
    id: "vig-serie-4",
    name: "Vigueta STONOVER — Serie 4",
    series: "Serie 4 (5.00 m a 5.60 m)",
    section: "12×9 cm (Base: 12 cm, Altura: 9 cm, Cabeza: 3 cm)",
    lengthRange: "5.00 m a 5.60 m",
    reinforcement: "Armadura pretensada reforzada (Alt. 1 y 2)",
    minSupport: "10 cm en mampostería / 8 cm en tabiques y vigas",
    description: "Diseñada para luces superiores a 5 metros, absorbiendo los esfuerzos exigidos en estructuras residenciales o comerciales.",
    image: "/products/viguetas/viguetas_obra.jpg",
    isVisible: true,
  },
  {
    id: "vig-serie-5",
    name: "Vigueta STONOVER — Serie 5",
    series: "Serie 5 (5.80 m a 6.20 m)",
    section: "12×9 cm (Base: 12 cm, Altura: 9 cm, Cabeza: 3 cm)",
    lengthRange: "5.80 m a 6.20 m",
    reinforcement: "Armadura pretensada de alta excentricidad",
    minSupport: "10 cm en mampostería / 8 cm en tabiques y vigas",
    description: "Vigueta de gran longitud para cubrir grandes luces libres con mínima flecha estructural.",
    image: "/products/viguetas/viguetas_obra.jpg",
    isVisible: true,
  },
  {
    id: "vig-serie-6",
    name: "Vigueta STONOVER — Serie 6",
    series: "Serie 6 (6.40 m a 7.20 m)",
    section: "12×9 cm (Base: 12 cm, Altura: 9 cm, Cabeza: 3 cm)",
    lengthRange: "6.40 m a 7.20 m",
    reinforcement: "Armadura pretensada de máxima capacidad",
    minSupport: "10 cm en mampostería / 8 cm en tabiques y vigas",
    description: "Máximo alcance en viguetas pretensadas de hormigón industrializado para cubiertas y losas especiales.",
    image: "/products/viguetas/viguetas_obra.jpg",
    isVisible: true,
  },
];
