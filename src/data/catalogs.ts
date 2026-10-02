export interface OfficialCatalog {
  id: string;
  origin: "Novedad Importada" | "Industria Argentina"; // Raviolito verde
  category: string;                                    // Texto azul (rubro específico)
  filterGroup: string;                                 // Línea de filtro (agrupa catálogos)
  title: string;
  description: string;
  fileUrl: string;
  certificateUrl?: string;
}

export const officialCatalogs: OfficialCatalog[] = [
  {
    id: "cat-habitat-full-body",
    origin: "Novedad Importada",
    category: "Sintered Stone",
    filterGroup: "Sintered Stone",
    title: "Habitat - Full Body",
    description: "Superficies de Sintered Stone Full Body de máxima resistencia para mesadas, solados y arquitectura de alta gama.",
    fileUrl: "/catalogos/habitat_ma_full_body.pdf",
  },
  {
    id: "cat-habitat-laminas",
    origin: "Novedad Importada",
    category: "Sintered Stone",
    filterGroup: "Sintered Stone",
    title: "Habitat - Láminas 120x270",
    description: "Placas XL Sintered Stone en formato 120x270 cm. Mínima cantidad de juntas y continuidad visual extrema.",
    fileUrl: "/catalogos/slabs_sintered_stone.pdf",
  },
  {
    id: "cat-habitat-porcelanato",
    origin: "Novedad Importada",
    category: "Porcelanato",
    filterGroup: "Porcelanato",
    title: "Habitat - Porcelanato Esmaltado",
    description: "Línea completa de porcelanatos esmaltados en acabados Glossy, Carving y Velvet de alta rotación.",
    fileUrl: "/catalogos/coleccion_habitat_MA.pdf",
  },
  {
    id: "cat-habitat-60x120",
    origin: "Novedad Importada",
    category: "Porcelanatos",
    title: "Habitat - Luxury Stone 60x120",
    description: "Placas porcelánicas rectificadas 600x1200x9 mm inspiradas en piedras y mármoles naturales de alta gama.",
    fileUrl: "/catalogos/coleccion_habitat_60x120.pdf",
  },
  {
    id: "cat-ferrazzano-36",
    origin: "Industria Argentina",
    category: "Pisos Cerámicos",
    filterGroup: "Pisos Cerámicos",
    title: "Ferrazzano - Pisos 36x36cm",
    description: "Pisos cerámicos de fabricación tradicional Salteña en formato 36x36 cm, diseñados con ingeniería de pliegos.",
    fileUrl: "/catalogos/ferrazzano_36x36.pdf",
  },
  {
    id: "cat-ferrazzano-43",
    origin: "Industria Argentina",
    category: "Pisos Cerámicos",
    filterGroup: "Pisos Cerámicos",
    title: "Ferrazzano - Pisos 43x43cm",
    description: "Línea pensada para mayor rotación de stock con excelente relación precio/formato y variedad antideslizante.",
    fileUrl: "/catalogos/ferrazzano_43x43.pdf",
  },
  {
    id: "cat-viguetas",
    origin: "Industria Argentina",
    category: "Viguetas Pretensadas",
    filterGroup: "Viguetas Pretensadas",
    title: "Vigueta Perfecta",
    description: "Viguetas pretensadas de hormigón para techos y entrepisos. Tablas de cálculo y memoria estructural.",
    fileUrl: "/catalogos/viguetas.pdf",
    certificateUrl: "/catalogos/certificado_viguetas.pdf",
  },
  {
    id: "cat-eps",
    origin: "Industria Argentina",
    category: "Telgopor de Construcción",
    filterGroup: "Telgopor de Construcción",
    title: "EPS Famapol",
    description: "Bovedillas y paneles de poliestireno expandido para techos alivianados y aislación térmica superior.",
    fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf",
  },
];
