import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/quote-message";

export const stockRequestMessage =
  "Hola estilo.capitana, quisiera consultar stock y disponibilidad de sus líneas de productos.";

export function buildStockWhatsAppUrl() {
  return buildWhatsAppUrl(stockRequestMessage) ?? `https://wa.me/${siteConfig.contact.whatsappNumber}`;
}

export function buildStockGmailUrl() {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: siteConfig.contact.email,
    su: "Consulta de stock",
    body: stockRequestMessage,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}