export type OfficialCatalog = {
  id: string;
  title: string;
  origin: string;
  category: string;
  description: string;
  format: "PDF Oficial";
  fileUrl: string;
};

export const officialCatalogs: OfficialCatalog[] = [
  { id: "cat-india", title: "Porcelanatos Importados · Colección India", origin: "India", category: "Porcelanatos Importados", description: "Colección integral de placas vitrificadas en grandes formatos (60x120 cm y 120x120 cm). Líneas Glossy, Rustic, Carving y Velvet.", format: "PDF Oficial", fileUrl: "/catalogos/india_porcelanatos_coleccion.pdf" },
  { id: "cat-china-brillante", title: "Porcelanatos Importados · China Línea Brillante", origin: "China", category: "Porcelanatos Importados", description: "Placas porcelánicas con terminación pulida reflectiva de alto brillo (Glossy) y micropulido sellado.", format: "PDF Oficial", fileUrl: "/catalogos/china_porcelanatos_brillante.pdf" },
  { id: "cat-china-mate", title: "Porcelanatos Importados · China Línea Mate", origin: "China", category: "Porcelanatos Importados", description: "Superficies antideslizantes satinadas y mates para proyectos comerciales y residenciales de alto tránsito.", format: "PDF Oficial", fileUrl: "/catalogos/china_porcelanatos_mate.pdf" },
  { id: "cat-saltena-36", title: "Pisos Cerámicos Salteña · Formato 36x36 cm", origin: "Fabricación Salteña", category: "Cerámica Tradicional", description: "Línea completa de pisos y revestimientos cerámicos esmaltados en medida 36x36 cm para obra estándar.", format: "PDF Oficial", fileUrl: "/catalogos/saltena_ceramica_36x36.pdf" },
  { id: "cat-saltena-43", title: "Pisos Cerámicos Salteña · Formato 43x43 cm", origin: "Fabricación Salteña", category: "Cerámica Tradicional", description: "Línea estándar de pisos cerámicos en formato 43x43 cm con variedades antideslizantes y esmaltadas.", format: "PDF Oficial", fileUrl: "/catalogos/saltena_ceramica_43x43.pdf" },
  { id: "cat-viguetas", title: "Viguetas Pretensadas de Hormigón", origin: "Estructuras", category: "Obra Gruesa & Estructuras", description: "Tablas técnicas de sobrecargas, cálculo estructural y medidas disponibles para entrepisos y techos.", format: "PDF Oficial", fileUrl: "/catalogos/viguetas_pretensadas.pdf" },
  { id: "cat-eps", title: "EPS Isopor · Bovedillas y Bloques Aislantes", origin: "Aislaciones", category: "Obra Gruesa & Estructuras", description: "Poliestireno expandido para techos alivianados con viguetas, placas térmicas y soluciones aislantes.", format: "PDF Oficial", fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf" },
];