/** Utilidades de CUIT argentino (validación módulo 11 y formateo). */

const WEIGHTS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidCuit(value: string): boolean {
  const digits = onlyDigits(value);
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;

  const base = digits.slice(0, 10).split("").map(Number);
  const checkDigit = Number(digits[10]);
  const sum = base.reduce((total, digit, index) => total + digit * WEIGHTS[index]!, 0);
  const remainder = sum % 11;

  let expected: number;
  if (remainder === 0) expected = 0;
  else if (remainder === 1) expected = 9;
  else expected = 11 - remainder;

  return expected === checkDigit;
}

/** Devuelve el CUIT con guiones (XX-XXXXXXXX-X) si tiene 11 dígitos; si no, el valor original. */
export function formatCuit(value: string): string {
  const digits = onlyDigits(value);
  if (digits.length !== 11) return value.trim();
  return `${digits.slice(0, 2)}-${digits.slice(2, 10)}-${digits.slice(10)}`;
}
