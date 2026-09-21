/** Normaliza texto para búsquedas: sin mayúsculas, sin tildes y sin espacios extra. */
export function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
