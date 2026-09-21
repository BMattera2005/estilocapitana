import type { RubroSlug } from "@/data/rubros";

export const siteConfig = {
  brandName: "Estilo Capitana",
  brandNameDisplay: "ESTILO CAPITANA",
  officialBadge: "DISTRIBUIDOR OFICIAL SALTEÑA",
  partnerName: "Salteña Equipamientos & Suministros",
  description:
    "Distribución industrial B2B en Argentina, con catálogos técnicos, cotización por lote y atención comercial especializada.",
  contact: {
    whatsapp: "WhatsApp a confirmar", // CONFIRMAR
    whatsappNumber: "", // CONFIRMAR — solo dígitos con código de país, ej: 5493875555555
    email: "ventas@estilocapitana.com.ar", // CONFIRMAR
    address: "Dirección comercial a confirmar", // CONFIRMAR
    hours: "Lunes a viernes, horario a confirmar", // CONFIRMAR
  },
  metrics: [
    "+1.200 artículos en red", // CONFIRMAR
    "Todo el país", // CONFIRMAR
    "Cotización en < 24 hs", // CONFIRMAR
    "Respaldo oficial Salteña", // CONFIRMAR
  ],
  navigation: [
    { label: "Inicio", to: "/" },
    { label: "Catálogos", to: "/catalogo" },
    { label: "Listas de precios", to: "/listas-de-precios" },
    { label: "Quiénes somos", to: "/nosotros" },
    { label: "Contacto", to: "/contacto" },
    { label: "Carga de pedidos", to: "/pedidos" },
  ],
} as const;

export type SiteNavigationItem = (typeof siteConfig.navigation)[number];

export type CatalogFile = {
  /** URL del PDF del catálogo. Vacío = botones deshabilitados con "Próximamente". */
  pdfUrl: string;
  /** Peso del archivo, texto libre. */
  fileSize: string;
};

/** CONFIRMAR: URLs y pesos reales de los catálogos técnicos oficiales. */
export const catalogFiles: Record<RubroSlug, CatalogFile> = {
  "porcelanatos-glossy": { pdfUrl: "", fileSize: "Peso a confirmar" }, // CONFIRMAR
  "carving-posh": { pdfUrl: "", fileSize: "Peso a confirmar" }, // CONFIRMAR
  "rusticos-grandes-formatos": { pdfUrl: "", fileSize: "Peso a confirmar" }, // CONFIRMAR
  "piezas-tecnicas-especiales": { pdfUrl: "", fileSize: "Peso a confirmar" }, // CONFIRMAR
};

export type PriceListInfo = {
  vigencia: string;
  formato: "PDF" | "Excel";
};

/** CONFIRMAR: vigencia y formato de cada lista mayorista. */
export const priceLists: Record<RubroSlug, PriceListInfo> = {
  "porcelanatos-glossy": { vigencia: "Septiembre 2026", formato: "PDF" }, // CONFIRMAR
  "carving-posh": { vigencia: "Septiembre 2026", formato: "PDF" }, // CONFIRMAR
  "rusticos-grandes-formatos": { vigencia: "Septiembre 2026", formato: "Excel" }, // CONFIRMAR
  "piezas-tecnicas-especiales": { vigencia: "Septiembre 2026", formato: "Excel" }, // CONFIRMAR
};
