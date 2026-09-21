import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(message: string): string | null {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const baseUrl = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

