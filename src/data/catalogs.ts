export type OfficialCatalog = {
  id: string;
  family: string;
  title: string;
  description: string;
  origin: string;
  fileUrl: string;
  certificateUrl?: string;
};

export const officialCatalogs: OfficialCatalog[] = [
  {
    id: "cat-india",
    family: "Línea Porcelanatos",
    title: "Colección Habitat MA · Línea de Porcelanatos",
    description: "Línea especialmente curada y elegida para garantizar máxima rotación del stock. Pisos mates, revestimientos pulidos y la increíble suavidad del pulido mate 'piel de bebe'.",
    origin: "Importado",
    fileUrl: "/catalogos/india_porcelanatos_coleccion.pdf",
  },
  {
    id: "cat-china",
    family: "Línea Porcelanatos",
    title: "Colección Habitat MA · Línea de Porcelanatos",
    description: "Curamos esta colección pensando en la máxima calidad de diseño para espacios corporativos y edificios de alta gama. Pulidos, mate y brillante, granulados, carving y Posh.",
    origin: "Importado",
    fileUrl: "/catalogos/china_porcelanatos.pdf",
  },
  {
    id: "cat-ferrazzano-36",
    family: "Línea Ferrazzano ",
    title: "Línea Ferrazzano · Formato 36x36cm",
    description: "Línea pensada y respetada con tradición. Calidad superior en el rango de formato. Diseñados con ingeniería y aprobación de pliegos licitatorios.",
    origin: "Salteña",
    fileUrl: "/catalogos/saltena_ceramica_36x36.pdf",
  },
  {
    id: "cat-ferrazzano-43",
    family: "Línea Ferrazzano ",
    title: "Línea Ferrazzano · Formato 43x43cm",
    description: "Nuestra línea pensada para mayor rotación de tus activos. Productos atractivos, excelente relación precio/formato y un plus de diseño y prestaciones.",
    origin: "Salteña",
    fileUrl: "/catalogos/saltena_ceramica_43x43.pdf",
  },
  {
    id: "cat-viguetas",
    family: "Viguetas",
    title: "Viguetas",
    description: "Elementos estructurales de alta resistencia para cubiertas y entrepisos. Aprobadas por la Universidad Nacional de San Juan como uso Antisismico",
    origin: "Salteña",
    fileUrl: "/catalogos/viguetas.pdf",
    certificateUrl: "/catalogos/certificado_viguetas.pdf",
  },
  {
    id: "cat-eps",
    family: "EPS Telgopor",
    title: "EPS Telgopor",
    description: "Poliestireno expandido para techos alivianados con viguetas, placas termicas y soluciones aislantes.",
    origin: "Salteña",
    fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf",
  },
];
