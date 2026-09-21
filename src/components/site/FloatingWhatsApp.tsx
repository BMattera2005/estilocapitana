import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/quote-message";

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl("Hola Estilo Capitana, quisiera realizar una consulta comercial.");

  if (!href) {
    return (
      <div className="group fixed bottom-5 right-5 z-40">
        <Button type="button" variant="whatsapp" size="icon" disabled aria-label="Atención comercial no disponible">
          <MessageCircle aria-hidden="true" />
        </Button>
        <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md border border-border bg-popover px-3 py-2 text-xs text-popover-foreground opacity-0 shadow-glass transition-opacity group-hover:opacity-100">
          WhatsApp a confirmar
        </span>
      </div>
    );
  }

  return (
    <div className="group fixed bottom-5 right-5 z-40">
      <Button asChild variant="whatsapp" size="icon">
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Atención comercial por WhatsApp">
          <MessageCircle aria-hidden="true" />
        </a>
      </Button>
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md border border-border bg-popover px-3 py-2 text-xs text-popover-foreground opacity-0 shadow-glass transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
        Atención comercial
      </span>
    </div>
  );
}