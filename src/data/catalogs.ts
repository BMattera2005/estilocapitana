export interface OfficialCatalog {
  id: string;
  origin: "Novedad Importada" | "Industria Argentina";
  category: string;
  filterGroup: string;
  title: string;
  description: string;
  fileUrl: string;
  certificateUrl?: string;
  isVisible?: boolean;
  imageUrl?: string; // Nuevo campo opcional
}

export const officialCatalogs: OfficialCatalog[] = [
  {
    id: "cat-habitat-full-body",
    origin: "Novedad Importada",
    category: "Sintered Stone",
    filterGroup: "Sintered Stone",
    title: "Habitat — Sintered Stone Full Body 15 mm",
    description: "Superficies de Sintered Stone Full Body de 15 mm de espesor para mesadas, revestimientos y arquitectura de alta gama.",
    fileUrl: "/catalogos/habitat_ma_full_body.pdf",
    isVisible: true,
    imageUrl: "/products/fullbody/saga_white.jpg",
  },
  {
    id: "cat-habitat-laminas",
    origin: "Novedad Importada",
    category: "Sintered Stone",
    filterGroup: "Sintered Stone",
    title: "Habitat — Sintered Stone Láminas 120×270 cm",
    description: "Placas XL Sintered Stone de gran formato 120×270 cm. Mínima cantidad de juntas y continuidad visual extrema.",
    fileUrl: "/catalogos/slabs_sintered_stone.pdf",
    isVisible: true,
    imageUrl: "/products/sinteredstone/emerald_green.jpg",
  },
  {
    id: "cat-habitat-porcelanato",
    origin: "Novedad Importada",
    category: "Porcelanatos",
    filterGroup: "Porcelanatos",
    title: "Habitat — Luxury Stone 120×120 cm",
    description: "Porcelanatos esmaltados importados de gran formato 120×120 cm en textura mate de alta gama.",
    fileUrl: "/catalogos/coleccion_habitat_MA.pdf",
    isVisible: true,
    imageUrl: "/products/habitatIndia/unico_beige.jpg",
  },
  {
    id: "cat-habitat-60x120",
    origin: "Novedad Importada",
    category: "Porcelanatos",
    filterGroup: "Porcelanatos",
    title: "Habitat — Porcelanato 60×120 cm",
    description: "Línea de porcelanatos importados 60×120 cm en textura Matt suave.",
    fileUrl: "/catalogos/coleccion_habitat_60x120.pdf",
    isVisible: true,
    imageUrl: "/products/habitat60x120/yk6500m.jpg",
  },
  {
    id: "cat-ferrazzano-36",
    origin: "Industria Argentina",
    category: "Pisos Cerámicos",
    filterGroup: "Pisos Cerámicos",
    title: "Ferrazzano — Pisos Cerámicos 36×36 cm",
    description: "Pisos cerámicos de fabricación tradicional Salteña en formato 36×36 cm, diseñados con ingeniería de pliegos.",
    fileUrl: "/catalogos/ferrazzano_36x36.pdf",
    isVisible: true,
    imageUrl: "/products/36x36/esteco_azul.jpg",
  },
  {
    id: "cat-ferrazzano-43",
    origin: "Industria Argentina",
    category: "Pisos Cerámicos",
    filterGroup: "Pisos Cerámicos",
    title: "Ferrazzano — Pisos Cerámicos 43×43 cm",
    description: "Línea pensada para mayor rotación de stock con excelente relación precio/formato y variedad antideslizante.",
    fileUrl: "/catalogos/ferrazzano_43x43.pdf",
    isVisible: true,
    imageUrl: "/products/43x43/cebil_natural.jpg",
  },
  {
    id: "cat-viguetas",
    origin: "Industria Argentina",
    category: "Viguetas Pretensadas",
    filterGroup: "Viguetas Pretensadas",
    title: "Vigueta Perfecta — Viguetas Pretensadas",
    description: "Viguetas pretensadas de hormigón para techos y entrepisos. Tablas de cálculo y memoria estructural.",
    fileUrl: "/catalogos/viguetas.pdf",
    certificateUrl: "/catalogos/certificado_viguetas.pdf",
    isVisible: true,
    imageUrl: "/products/viguetas/Viguetas Series 3 E.Capitana.png",
  },
  {
    id: "cat-eps",
    origin: "Industria Argentina",
    category: "Telgopor de Construcción",
    filterGroup: "Telgopor de Construcción",
    title: "EPS Famapol — Telgopor de Construcción",
    description: "Bovedillas y paneles de poliestireno expandido para techos alivianados y aislación térmica superior.",
    fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf",
    isVisible: true,
    imageUrl: "/products/famapol/CERAMICA-SALTENA-PRODUCTOS-FAMAPOL_page-0002.jpg",
  },
];
