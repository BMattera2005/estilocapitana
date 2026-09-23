export const siteConfig = {
  brandName: "estilo.capitana",
  brandNameDisplay: "estilo.capitana",
  descriptor: "Agencia comercial especializada en materiales de arquitectura",
  partnerName: "Salteña Equipamientos & Suministros",
  description: "Agencia comercial especializada en materiales de arquitectura",
  contact: {
    whatsapp: "+54 9 11 6120-8162",
    whatsappNumber: "5491161208162",
    email: "info@estilocapitana.com",
  },
  about: {
    intro:
      "Somos una agencia comercial B2B especializada en materiales de construcción de excelente rendimiento y valor, enfocados en la rotación y las prestaciones del producto.",
    alianza:
      "Trabajamos junto a Salteña Equipamientos & Suministros, fabricante con planta industrial en Salta y una propuesta orientada a la calidad, la continuidad y el respaldo técnico.",
  },
  navigation: [
    { label: "Inicio", to: "/" },
    { label: "Catálogos", to: "/catalogo" },
    { label: "Quiénes somos", to: "/nosotros" },
    { label: "Contacto", to: "/contacto" },
  ],
} as const;

export type SiteNavigationItem = (typeof siteConfig.navigation)[number];

