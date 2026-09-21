import { siteConfig } from "@/config/site";
import type { QuoteItem } from "@/context/quote-list";

export function buildQuoteMessage({
  items,
  company,
  note,
}: {
  items: QuoteItem[];
  company: string;
  note: string;
}): string {
  const lines: string[] = [
    `Solicitud de cotización — ${siteConfig.brandName}`,
    "",
    "Ítems:",
    ...items.map((item) => `${item.sku} — ${item.name} — Cant. ${item.quantity}`),
  ];

  if (company.trim()) {
    lines.push("", `Empresa: ${company.trim()}`);
  }

  if (note.trim()) {
    lines.push("", `Nota: ${note.trim()}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string | null {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(message: string): string {
  const subject = `Solicitud de cotización — ${siteConfig.brandName}`;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(message)}`;
}
