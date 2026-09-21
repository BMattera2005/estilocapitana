export const rubros = [
  {
    slug: "construccion-obras-civiles",
    nombre: "Construcción & Obras Civiles",
    icono: "hard-hat",
  },
  {
    slug: "epp-seguridad-laboral",
    nombre: "EPP & Seguridad Laboral",
    icono: "shield-check",
  },
  {
    slug: "herramientas-maquinaria-pesada",
    nombre: "Herramientas & Maquinaria Pesada",
    icono: "wrench",
  },
  {
    slug: "buloneria-fijaciones",
    nombre: "Bulonería & Fijaciones",
    icono: "bolt",
  },
] as const;

export type Rubro = (typeof rubros)[number];