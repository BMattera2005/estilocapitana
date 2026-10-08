import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/quote-message";

export const stockRequestMessage =
  "Hola estilo.capitana, quisiera consultar stock y disponibilidad de sus líneas de productos.";

export const advisorRequestMessage =
  "Hola estilo.capitana, quisiera hablar con un asesor comercial sobre sus líneas de productos.";

export function buildAdvisorWhatsAppUrl() {
  return buildWhatsAppUrl(advisorRequestMessage) ?? `https://wa.me/${siteConfig.contact.whatsappNumber}`;
}

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