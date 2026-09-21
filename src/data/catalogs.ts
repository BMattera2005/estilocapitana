export type OfficialCatalog = {
  id: string;
  title: string;
  origin: string;
  category: string;
  description: string;
  format: "PDF Oficial";
  fileUrl: string;
  /** Nombre oficial con el que se descarga el archivo. */
  downloadName: string;
};

// Los fileUrl y downloadName deben coincidir exactamente con los archivos publicados en /catalogos/.
export const officialCatalogs: OfficialCatalog[] = [
  { id: "cat-india", title: "Porcelanatos Importados · Colección India", origin: "India", category: "Porcelanatos Importados", description: "Colección integral de placas vitrificadas en grandes formatos (60x120 cm y 120x120 cm). Líneas Glossy, Rustic, Carving y Velvet.", format: "PDF Oficial", fileUrl: "/catalogos/india.pdf", downloadName: "Habitat MA Coleccion 2026.pdf" },
  { id: "cat-china-brillante", title: "Porcelanatos Importados · China Línea Brillante", origin: "China", category: "Porcelanatos Importados", description: "Placas porcelánicas con terminación pulida reflectiva de alto brillo (Glossy) y micropulido sellado.", format: "PDF Oficial", fileUrl: "/catalogos/china_porcelanatos_brillante.pdf", downloadName: "Habitat China Brillante 2026.pdf" },
  { id: "cat-china-mate", title: "Porcelanatos Importados · China Línea Mate", origin: "China", category: "Porcelanatos Importados", description: "Superficies antideslizantes satinadas y mates para proyectos comerciales y residenciales de alto tránsito.", format: "PDF Oficial", fileUrl: "/catalogos/china_porcelanatos_mate.pdf", downloadName: "Habitat China Mate 2026.pdf" },
  { id: "cat-saltena-36", title: "Pisos Cerámicos Salteña · Formato 36x36 cm", origin: "Fabricación Salteña", category: "Cerámica Salteña", description: "Línea completa de pisos y revestimientos cerámicos esmaltados en medida 36x36 cm para obra estándar.", format: "PDF Oficial", fileUrl: "/catalogos/saltena_ceramica_36x36.pdf", downloadName: "Salteña Ceramicos 36x36.pdf" },
  { id: "cat-saltena-43", title: "Pisos Cerámicos Salteña · Formato 43x43 cm", origin: "Fabricación Salteña", category: "Cerámica Salteña", description: "Línea estándar de pisos cerámicos en formato 43x43 cm con variedades antideslizantes y esmaltadas.", format: "PDF Oficial", fileUrl: "/catalogos/saltena_ceramica_43x43.pdf", downloadName: "Salteña Ceramicos 43x43.pdf" },
  { id: "cat-viguetas", title: "Viguetas Pretensadas de Hormigón", origin: "Estructuras", category: "Estructuras & Viguetas", description: "Tablas técnicas de sobrecargas, cálculo estructural y medidas disponibles para entrepisos y techos.", format: "PDF Oficial", fileUrl: "/catalogos/viguetas.pdf", downloadName: "Viguetas Pretensadas Ficha Tecnica.pdf" },
  { id: "cat-eps", title: "EPS Isopor · Bovedillas y Bloques Aislantes", origin: "Aislaciones", category: "Aislaciones & EPS", description: "Poliestireno expandido para techos alivianados con viguetas, placas térmicas y soluciones aislantes.", format: "PDF Oficial", fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf", downloadName: "EPS Isopor Catalogo Tecnico.pdf" },
];
