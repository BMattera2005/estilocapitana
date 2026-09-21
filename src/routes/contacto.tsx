import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Clock, Copy, Mail, MapPin, MessageCircle, Truck } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { routeMeta } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { formatCuit, isValidCuit } from "@/lib/cuit";
import { buildWhatsAppUrl } from "@/lib/quote-message";

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>) =>
    typeof search['sku'] === "string" ? { sku: search['sku'] as string } : {},
  head: () =>
    routeMeta({
      title: "Contacto comercial — Estilo Capitana",
      description:
        "Datos de logística, horarios y formulario de contacto para solicitar cotizaciones de porcelanatos y piezas técnicas.",
      path: "/contacto",
    }),
  component: ContactoPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre o empresa.").max(120),
  cuit: z
    .string()
    .trim()
    .min(1, "Ingresá el CUIT.")
    .max(20)
    .refine((value) => isValidCuit(value), "El CUIT no es válido (revisá el dígito verificador)."),
  email: z.string().trim().email("Ingresá un email válido.").max(255),
  phone: z.string().trim().min(6, "Ingresá un teléfono de contacto.").max(40),
  sku: z.string().trim().max(120).optional().or(z.literal("")),
  quantity: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Contanos brevemente qué necesitás.").max(1000),
});

type ContactValues = z.infer<typeof contactSchema>;

function buildContactMessage(values: ContactValues): string {
  const lines = [
    `Consulta comercial — ${siteConfig.brandName}`,
    "",
    `Nombre / Empresa: ${values.name}`,
    `CUIT: ${formatCuit(values.cuit)}`,
    `Email: ${values.email}`,
    `Teléfono: ${values.phone}`,
  ];

  if (values.sku?.trim()) lines.push(`SKU o rubro: ${values.sku.trim()}`);
  if (values.quantity?.trim()) lines.push(`Cantidad: ${values.quantity.trim()}`);

  lines.push("", `Mensaje: ${values.message}`);
  return lines.join("\n");
}

function ContactoPage() {
  const search = Route.useSearch();
  const prefilledSku = "sku" in search ? search.sku : "";
  const [summary, setSummary] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      cuit: "",
      email: "",
      phone: "",
      sku: prefilledSku ?? "",
      quantity: "",
      message: "",
    },
  });

  const { register, handleSubmit, setValue, getValues, formState } = form;

  useEffect(() => {
    if (prefilledSku) {
      setValue("sku", prefilledSku);
    }
  }, [prefilledSku, setValue]);

  const whatsappHref = buildWhatsAppUrl(
    `Consulta comercial — ${siteConfig.brandName}`,
  );

  function onSubmit(values: ContactValues) {
    const message = buildContactMessage(values);
    setSummary(message);

    // TODO: conectar un envío real por email (backend) más adelante.
    const url = buildWhatsAppUrl(message);
    if (!url) {
      setOpened(false);
      toast.error("Todavía no hay número de WhatsApp configurado.");
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  async function copySummary() {
    const message = summary ?? buildContactMessage(getValues());
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Resumen copiado al portapapeles.");
    } catch {
      toast.error("No se pudo copiar. Seleccioná el texto manualmente.");
    }
  }

  return (
    <section className="bg-background px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs text-technical">CONTACTO COMERCIAL</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          Hablemos de tu próxima compra
        </h1>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <aside className="grid gap-4 rounded-lg border border-border-strong bg-surface-glass p-6 shadow-glass">
            <div className="flex gap-3">
              <Truck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-technical" />
              <div>
                <h2 className="text-sm font-semibold text-foreground">Logística</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.contact.logistics}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.contact.dispatchNote}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-technical" />
              <div>
                <h2 className="text-sm font-semibold text-foreground">Dirección</h2>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-technical" />
              <div>
                <h2 className="text-sm font-semibold text-foreground">Horarios</h2>
                <p className="mt-1 text-sm text-muted-foreground">{siteConfig.contact.hours}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-technical" />
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-foreground">Email</h2>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1 block break-words text-sm text-technical underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {whatsappHref ? (
              <Button asChild variant="industrial">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" className="size-4" />
                  Escribir por WhatsApp
                </a>
              </Button>
            ) : (
              <Button type="button" variant="industrialOutline" disabled>
                WhatsApp próximamente
              </Button>
            )}
          </aside>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-glass sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre / Empresa</Label>
                <Input id="name" autoComplete="organization" {...register("name")} />
                {formState.errors.name ? (
                  <p className="text-xs text-destructive">{formState.errors.name.message}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="cuit">CUIT</Label>
                <Input
                  id="cuit"
                  inputMode="numeric"
                  placeholder="30-12345678-9"
                  {...register("cuit", {
                    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                      setValue("cuit", formatCuit(event.target.value), {
                        shouldValidate: formState.isSubmitted,
                      });
                    },
                  })}
                />
                {formState.errors.cuit ? (
                  <p className="text-xs text-destructive">{formState.errors.cuit.message}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" autoComplete="email" {...register("email")} />
                {formState.errors.email ? (
                  <p className="text-xs text-destructive">{formState.errors.email.message}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
                {formState.errors.phone ? (
                  <p className="text-xs text-destructive">{formState.errors.phone.message}</p>
                ) : null}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="sku">SKU o rubro</Label>
                <Input id="sku" className="font-mono" {...register("sku")} />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="quantity">Cantidad</Label>
                <Input id="quantity" inputMode="numeric" {...register("quantity")} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea id="message" rows={5} {...register("message")} />
              {formState.errors.message ? (
                <p className="text-xs text-destructive">{formState.errors.message.message}</p>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit" variant="industrial">
                <MessageCircle aria-hidden="true" className="size-4" />
                Enviar por WhatsApp
              </Button>
              <Button type="button" variant="industrialOutline" onClick={copySummary}>
                <Copy aria-hidden="true" className="size-4" />
                Copiar resumen
              </Button>
            </div>

            {opened ? (
              <p role="status" className="text-sm text-technical">
                Se abrió WhatsApp con tu consulta; enviala para completar la solicitud.
              </p>
            ) : null}

            <p className="text-xs text-muted-foreground">
              Todavía no hay envío automático desde el sitio: tu consulta se envía desde WhatsApp o
              por email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
