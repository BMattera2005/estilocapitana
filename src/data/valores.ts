/** Valores institucionales. Texto editable, sin cifras ni datos duros. */
export const valores = [
  {
    icono: "handshake",
    title: "Alianza comercial con el fabricante",
    description:
      "Trabajamos como distribuidor oficial, con acceso directo a catálogos, novedades y condiciones de la línea.",
  },
  {
    icono: "truck",
    title: "Cadena de suministro confiable",
    description:
      "Planificamos reposición y despacho para sostener la continuidad de obras, corralones e industrias.",
  },
  {
    icono: "scan-line",
    title: "Trazabilidad por lote",
    description:
      "Cada pedido se identifica por SKU y lote para facilitar controles, reclamos y futuras reposiciones.",
  },
  {
    icono: "badge-check",
    title: "Calidad certificada",
    description:
      "Los artículos responden a las especificaciones técnicas declaradas por el fabricante.",
  },
  {
    icono: "shield-check",
    title: "Respaldo del fabricante",
    description:
      "La distribución se realiza con respaldo oficial en documentación técnica y postventa.",
  },
  {
    icono: "headset",
    title: "Atención comercial técnica",
    description:
      "Acompañamos la selección de artículos según uso, formato y requerimiento de cada proyecto.",
  },
] as const;

export type Valor = (typeof valores)[number];
