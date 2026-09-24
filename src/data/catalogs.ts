export interface CatalogItem {
  id: string;
  badge: "Novedad Importada" | "Industria Argentina"; // Raviolito verde
  category: string; // Texto azul
  title: string; // Título principal
  description: string;
  fileUrl: string;
  certificateUrl?: string;
}

export const officialCatalogs: CatalogItem[] = [
  {
    id: "cat-habitat-full-body",
    badge: "Novedad Importada",
    category: "Sintered Stone",
    title: "Habitat - Full Body",
    description: "Superficies de Sintered Stone Full Body de máxima resistencia para mesadas, solados y arquitectura de alta gama.",
    fileUrl: "/catalogos/habitat_ma_full_body.pdf",
  },
  {
    id: "cat-habitat-laminas",
    badge: "Novedad Importada",
    category: "Sintered Stone",
    title: "Habitat - Láminas 120x270",
    description: "Usos en arquitectura de mesas de altas prestaciones, countertop o mesadas técnicas. Resistente a agentes químicos.",
    fileUrl: "/catalogos/slabs_sintered_stone.pdf",
  },
  {
    id: "cat-habitat-porcelanato",
    badge: "Novedad Importada",
    category: "Porcelanato",
    title: "Habitat - Porcelanato Esmaltado",
    description: "Línea completa de porcelanatos esmaltados en acabados Glossy, Carving y Velvet de alta gama.",
    fileUrl: "/catalogos/coleccion_habitat_MA.pdf",
  },
  {
    id: "cat-ferrazzano-36",
    badge: "Industria Argentina",
    category: "Pisos Cerámicos",
    title: "Ferrazzano - Pisos 36x36cm",
    description: "Pisos cerámicos de fabricación tradicional Salteña en formato 36x36 cm, diseñados con ingeniería de pliegos.",
    fileUrl: "/catalogos/ferrazzano_36x36.pdf",
  },
  {
    id: "cat-ferrazzano-43",
    badge: "Industria Argentina",
    category: "Pisos Cerámicos",
    title: "Ferrazzano - Pisos 43x43cm",
    description: "Línea pensada para mayor rotación de stock con excelente relación precio/formato y variedad antideslizante.",
    fileUrl: "/catalogos/ferrazzano_43x43.pdf",
  },
  {
    id: "cat-viguetas",
    badge: "Industria Argentina",
    category: "Viguetas Pretensadas",
    title: "Vigueta Perfecta",
    description: "Viguetas pretensadas de hormigón para techos y entrepisos. Tablas de cálculo y memoria estructural.",
    fileUrl: "/catalogos/viguetas.pdf",
    certificateUrl: "/catalogos/certificado_viguetas.pdf",
  },
  {
    id: "cat-eps",
    badge: "Industria Argentina",
    category: "Telgopor de Construcción",
    title: "EPS Famapol",
    description: "Bovedillas y paneles de poliestireno expandido para techos alivianados y aislación térmica superior.",
    fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf",
  },
];
