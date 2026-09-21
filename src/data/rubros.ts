export const rubros = [
  {
    slug: "porcelanatos-glossy",
    nombre: "Porcelanatos Glossy",
    icono: "sparkles",
  },
  {
    slug: "carving-posh",
    nombre: "Carving & Posh",
    icono: "layers",
  },
  {
    slug: "rusticos-grandes-formatos",
    nombre: "Rústicos & Grandes Formatos",
    icono: "grid",
  },
  {
    slug: "piezas-tecnicas-especiales",
    nombre: "Piezas Técnicas Especiales",
    icono: "shield-check",
  },
] as const;

export type Rubro = (typeof rubros)[number];
export type RubroSlug = Rubro["slug"];

export function getRubro(slug: string): Rubro | undefined {
  return rubros.find((rubro) => rubro.slug === slug);
}
