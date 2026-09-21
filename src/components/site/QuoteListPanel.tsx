import { Copy, Mail, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { useQuoteList } from "@/context/quote-list";
import { buildMailtoUrl, buildQuoteMessage, buildWhatsAppUrl } from "@/lib/quote-message";

export function QuoteListPanel() {
  const {
    items,
    company,
    note,
    isOpen,
    setOpen,
    setQuantity,
    removeItem,
    clear,
    setCompany,
    setNote,
  } = useQuoteList();

  const message = buildQuoteMessage({ items, company, note });
  const whatsappUrl = buildWhatsAppUrl(message);
  const isEmpty = items.length === 0;

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Resumen copiado al portapapeles.");
    } catch {
      toast.error("No se pudo copiar. Seleccioná el texto manualmente.");
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-[min(94vw,30rem)] flex-col gap-0 border-border-strong p-0">
        <SheetHeader className="border-b border-border px-5 py-5 pr-12 text-left">
          <SheetTitle>Lista de cotización</SheetTitle>
          <SheetDescription>
            Armá el detalle y enviálo al equipo comercial. Sin precios ni compra online.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {isEmpty ? (
            <p className="rounded-md border border-border bg-surface px-4 py-6 text-sm text-muted-foreground">
              Todavía no agregaste artículos. Buscá productos en el catálogo y usá “Agregar a
              cotización”.
            </p>
          ) : (
            <ul className="grid gap-3">
              {items.map((item) => (
                <li
                  key={item.sku}
                  className="rounded-md border border-border bg-surface px-4 py-4"
                >
                  <p className="font-mono text-xs text-technical">{item.sku}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{item.name}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="industrialOutline"
                        size="icon"
                        aria-label={`Restar cantidad de ${item.sku}`}
                        disabled={item.quantity <= 1}
                        onClick={() => setQuantity(item.sku, item.quantity - 1)}
                      >
                        <Minus aria-hidden="true" className="size-4" />
                      </Button>
                      <Label className="sr-only" htmlFor={`cantidad-${item.sku}`}>
                        Cantidad de {item.sku}
                      </Label>
                      <Input
                        id={`cantidad-${item.sku}`}
                        type="number"
                        min={1}
                        step={1}
                        inputMode="numeric"
                        className="w-20 text-center font-mono"
                        value={item.quantity}
                        onChange={(event) => setQuantity(item.sku, Number(event.target.value))}
                      />
                      <Button
                        type="button"
                        variant="industrialOutline"
                        size="icon"
                        aria-label={`Sumar cantidad de ${item.sku}`}
                        onClick={() => setQuantity(item.sku, item.quantity + 1)}
                      >
                        <Plus aria-hidden="true" className="size-4" />
                      </Button>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.sku)}
                    >
                      <Trash2 aria-hidden="true" className="size-4" />
                      Quitar
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="quote-company">Empresa (opcional)</Label>
              <Input
                id="quote-company"
                value={company}
                autoComplete="organization"
                placeholder="Razón social o nombre de obra"
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quote-note">Nota (opcional)</Label>
              <Textarea
                id="quote-note"
                rows={3}
                value={note}
                placeholder="Plazos, destino de entrega u observaciones técnicas"
                onChange={(event) => setNote(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-2 border-t border-border bg-surface px-5 py-5">
          {whatsappUrl ? (
            <Button asChild variant="industrial" disabled={isEmpty}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                Enviar por WhatsApp
              </a>
            </Button>
          ) : (
            <Button type="button" variant="industrial" disabled>
              <MessageCircle aria-hidden="true" />
              WhatsApp próximamente
            </Button>
          )}

          <div className="grid gap-2 sm:grid-cols-2">
            <Button type="button" variant="industrialOutline" disabled={isEmpty} onClick={copySummary}>
              <Copy aria-hidden="true" />
              Copiar resumen
            </Button>
            {isEmpty ? (
              <Button type="button" variant="industrialOutline" disabled>
                <Mail aria-hidden="true" />
                Enviar por email
              </Button>
            ) : (
              <Button asChild variant="industrialOutline">
                <a href={buildMailtoUrl(message)}>
                  <Mail aria-hidden="true" />
                  Enviar por email
                </a>
              </Button>
            )}
          </div>

          <Button type="button" variant="ghost" disabled={isEmpty} onClick={clear}>
            Vaciar lista
          </Button>

          <p className="text-xs text-muted-foreground">
            Al enviar se abre WhatsApp o tu cliente de correo con el detalle listo. Contacto:{" "}
            {siteConfig.contact.email}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
