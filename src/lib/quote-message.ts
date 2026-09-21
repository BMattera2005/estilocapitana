import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(message: string): string | null {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

