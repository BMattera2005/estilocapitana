export const siteConfig = {
  brandName: "Estilo Capitana",
  brandNameDisplay: "ESTILO CAPITANA",
  officialBadge: "DISTRIBUIDOR OFICIAL SALTEÑA",
  partnerName: "Salteña Equipamientos & Suministros",
  description:
    "Distribución industrial B2B en Argentina, con catálogos técnicos, cotización por lote y atención comercial especializada.",
  contact: {
    whatsapp: "WhatsApp a confirmar", // CONFIRMAR
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