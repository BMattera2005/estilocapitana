export interface CatalogItem {
  id: string;
  origin: string;       // El raviolito verde: "Novedad Importada" / "Industria Argentina"
  category: string;     // El texto azul: "Sintered Stone", "Pisos Cerámicos", etc.
  title: string;        // El título principal
  description: string;
  fileUrl: string;
  certificateUrl?: string;
}

export const officialCatalogs: CatalogItem[] = [
  {
    id: "cat-habitat-full-body",
    origin: "Novedad Importada",
    category: "Sintered Stone",
    title: "Habitat - Full Body",
    description: "Superficies de Sintered Stone Full Body para mesadas, solados y arquitectura de alta gama.",
    fileUrl: "/catalogos/habitat_ma_full_body.pdf",
  },
  {
    id: "cat-habitat-laminas",
    origin: "Novedad Importada",
    category: "Sintered Stone",
    title: "Habitat - Láminas 120x270",
    description: "Placas XL Sintered Stone en 120x270 cm. Mínima cantidad de juntas y continuidad visual extrema.",
    fileUrl: "/catalogos/slabs_sintered_stone.pdf",
  },
  {
    id: "cat-habitat-porcelanato",
    origin: "Novedad Importada",
    category: "Porcelanato",
    title: "Habitat - Porcelanato Esmaltado",
    description: "Línea completa de porcelanatos esmaltados en acabados Glossy, Carving y Velvet de alta gama.",
    fileUrl: "/catalogos/coleccion_habitat_MA.pdf",
  },
  {
    id: "cat-ferrazzano-36",
    origin: "Industria Argentina",
    category: "Pisos Cerámicos",
    title: "Ferrazzano - Pisos 36x36cm",
    description: "Pisos cerámicos de fabricación tradicional Salteña en formato 36x36 cm, diseñados con ingeniería de pliegos.",
    fileUrl: "/catalogos/ferrazzano_36x36.pdf",
  },
  {
    id: "cat-ferrazzano-43",
    origin: "Industria Argentina",
    category: "Pisos Cerámicos",
    title: "Ferrazzano - Pisos 43x43cm",
    description: "Línea pensada para mayor rotación de stock con excelente relación precio/formato y variedad antideslizante.",
    fileUrl: "/catalogos/ferrazzano_43x43.pdf",
  },
  {
    id: "cat-viguetas",
    origin: "Industria Argentina",
    category: "Viguetas Pretensadas",
    title: "Vigueta Perfecta",
    description: "Viguetas pretensadas de hormigón para techos y entrepisos. Tablas de cálculo y memoria estructural.",
    fileUrl: "/catalogos/viguetas.pdf",
    certificateUrl: "/catalogos/certificado_viguetas.pdf",
  },
  {
    id: "cat-eps",
    origin: "Industria Argentina",
    category: "Telgopor de Construcción",
    title: "EPS Famapol",
    description: "Bovedillas y paneles de poliestireno expandido para techos alivianados y aislación térmica superior.",
    fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf",
  },
];
