const formatter = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

/** Formatea pesos argentinos redondeando a entero. */
export function formatARS(value: number): string {
  return formatter.format(Math.round(value));
}
