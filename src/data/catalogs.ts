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
    family: "Línea Porcelanatos (India y China)",
    title: "Colección Habitat MA · Línea de Porcelanatos (India)",
    description: "Línea especialmente curada y elegida para garantizar máxima rotación del stock. Pisos mates, revestimientos pulidos y la increíble suavidad del pulido mate 'piel de bebe'.",
    origin: "Importado India",
    fileUrl: "/catalogos/india_porcelanatos_coleccion.pdf",
  },
  {
    id: "cat-china",
    family: "Línea Porcelanatos (India y China)",
    title: "Porcelanatos Importados · Colección China",
    description: "Curamos esta colección pensando en la máxima calidad de diseño para espacios corporativos y edificios de alta gama. Pulidos, mate y brillante, granulados, carving y Posh.",
    origin: "Importado China",
    fileUrl: "/catalogos/china_porcelanatos.pdf",
  },
  {
    id: "cat-ferrazzano-36",
    family: "Línea Ferrazzano (Salteña)",
    title: "Línea Ferrazzano · Formato 36x36cm",
    description: "Línea pensada y respetada con tradición. Calidad superior en el rango de formato. Diseñados con ingeniería y aprobación de pliegos licitatorios.",
    origin: "Salteña",
    fileUrl: "/catalogos/saltena_ceramica_36x36.pdf",
  },
  {
    id: "cat-ferrazzano-43",
    family: "Línea Ferrazzano (Salteña)",
    title: "Línea Ferrazzano · Formato 43x43cm",
    description: "Nuestra línea pensada para mayor rotación de tus activos. Productos atractivos, excelente relación precio/formato y un plus de diseño y prestaciones.",
    origin: "Salteña",
    fileUrl: "/catalogos/saltena_ceramica_43x43.pdf",
  },
  {
    id: "cat-viguetas",
    family: "Viguetas (Viguetas Salteña)",
    title: "Viguetas Pretensadas Salteña",
    description: "Elementos estructurales pretensados de alta resistencia para cubiertas y entrepisos. Aprobadas por la Universidad Nacional de Jan Juan como uso Antisismico",
    origin: "Salteña",
    fileUrl: "/catalogos/viguetas_presentadas.pdf",
    certificateUrl: "/catalogos/certificado_viguetas.pdf",
  },
  {
    id: "cat-eps",
    family: "EPS Telgopor (EPS Salteña)",
    title: "EPS Telgopor Salteña",
    description: "Poliestireno expandido para techos alivianados con viguetas, placas termicas y soluciones aislantes.",
    origin: "Salteña",
    fileUrl: "/catalogos/eps_telgopor_aislaciones.pdf",
  },
];
