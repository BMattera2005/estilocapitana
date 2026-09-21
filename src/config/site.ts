export const siteConfig = {
  brandName: "Estilo Capitana",
  brandNameDisplay: "ESTILO CAPITANA",
  officialBadge: "DISTRIBUIDOR OFICIAL SALTEÑA",
  partnerName: "Salteña Equipamientos & Suministros",
  description:
    "Centro de documentación y descarga técnica oficial para materiales de obra y terminación.",
  contact: {
    whatsapp: "WhatsApp a confirmar", // CONFIRMAR
    whatsappNumber: "", // CONFIRMAR — solo dígitos con código de país, ej: 5493875555555
    email: "ventas@estilocapitana.com.ar", // CONFIRMAR
    address: "Dirección comercial a confirmar", // CONFIRMAR
    hours: "Lunes a viernes, horario a confirmar", // CONFIRMAR
    logistics: "Centro de despacho y retiro a confirmar", // CONFIRMAR
    dispatchNote: "Zonas y plazos de entrega a confirmar", // CONFIRMAR
  },
  /** CONFIRMAR: textos institucionales de la página Quiénes somos. */
  about: {
    intro:
      "Estilo Capitana abastece corralones, constructoras e industrias como distribuidor oficial de Salteña Equipamientos & Suministros, con catálogos técnicos y atención comercial especializada.", // CONFIRMAR
    alianza:
      "Operamos como canal oficial del fabricante: accedemos a la línea vigente, documentación técnica y condiciones comerciales de distribución.", // CONFIRMAR
    suministro:
      "Planificamos reposición y despacho para sostener la continuidad de obra, coordinando disponibilidad por lote y formato.", // CONFIRMAR
    trazabilidad:
      "Cada solicitud se identifica por SKU y lote, lo que facilita controles de recepción, reclamos y reposiciones futuras.", // CONFIRMAR
    calidad:
      "Los artículos responden a las especificaciones técnicas declaradas por el fabricante. Certificaciones específicas a confirmar.", // CONFIRMAR
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
    { label: "Quiénes somos", to: "/nosotros" },
    { label: "Contacto", to: "/contacto" },
  ],
} as const;

export type SiteNavigationItem = (typeof siteConfig.navigation)[number];

