import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Copy, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { routeMeta } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/quote-message";

export const Route = createFileRoute("/contacto")({
  head: () => routeMeta({
    title: "Contacto comercial — estilo.capitana",
    description: "Contactá a estilo.capitana por WhatsApp o email para consultar líneas, stock y cotizaciones de materiales de arquitectura.",
    path: "/contacto",
  }),
  component: ContactoPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre o empresa.").max(120),
  email: z.string().trim().email("Ingresá un email válido.").max(255),
  phone: z.string().trim().min(6, "Ingresá un teléfono de contacto.").max(40),
  line: z.string().trim().min(2, "Indicá la línea o producto de interés.").max(160),
  message: z.string().trim().min(10, "Contanos brevemente qué necesitás.").max(1000),
});

type ContactValues = z.infer<typeof contactSchema>;

function buildContactMessage(values: ContactValues) {
  return [
    `Consulta comercial — ${siteConfig.brandName}`,
    "",
    `Nombre / Empresa: ${values.name}`,
    `Email: ${values.email}`,
    `Teléfono: ${values.phone}`,
    `Línea o producto: ${values.line}`,
    "",
    `Mensaje: ${values.message}`,
  ].join("\n");
}

function ContactoPage() {
  const [opened, setOpened] = useState(false);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", line: "", message: "" },
  });
  const { register, handleSubmit, getValues, formState } = form;

  function onSubmit(values: ContactValues) {
    const url = buildWhatsAppUrl(buildContactMessage(values));
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(buildContactMessage(getValues()));
      toast.success("Resumen copiado al portapapeles.");
    } catch {
      toast.error("No se pudo copiar. Seleccioná el texto manualmente.");
    }
  }

  const directWhatsapp = buildWhatsAppUrl("Hola estilo.capitana, quisiera realizar una consulta comercial.");

  return (
    <section className="bg-background px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-normal uppercase text-primary">Contacto</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">Hablemos de tu próxima oportunidad comercial.</h1>
        <p className="mt-5 max-w-2xl text-lg font-normal leading-8 text-muted-foreground">Consultanos por líneas, disponibilidad y cotizaciones para tu proyecto o canal profesional.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <aside className="grid content-start gap-5 rounded-lg border border-border bg-surface p-6 shadow-glass">
            <div className="flex gap-3"><Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" /><div className="min-w-0"><h2 className="text-sm font-semibold text-foreground">Correo electrónico</h2><a href={`mailto:${siteConfig.contact.email}`} className="mt-1 block break-words text-sm font-normal text-primary hover:underline">{siteConfig.contact.email}</a></div></div>
            <div className="flex gap-3"><MessageCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-industrial-green" /><div><h2 className="text-sm font-semibold text-foreground">WhatsApp comercial</h2><a href={directWhatsapp ?? "https://wa.me/5491161208162"} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-normal text-primary hover:underline">{siteConfig.contact.whatsapp}</a></div></div>
            <Button asChild variant="whatsapp"><a href={directWhatsapp ?? "https://wa.me/5491161208162"} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />Escribir por WhatsApp</a></Button>
          </aside>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-glass sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2"><Label htmlFor="name">Nombre / Empresa</Label><Input id="name" autoComplete="organization" {...register("name")} />{formState.errors.name ? <p className="text-xs text-destructive">{formState.errors.name.message}</p> : null}</div>
              <div className="grid gap-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" autoComplete="email" {...register("email")} />{formState.errors.email ? <p className="text-xs text-destructive">{formState.errors.email.message}</p> : null}</div>
              <div className="grid gap-2"><Label htmlFor="phone">Teléfono</Label><Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />{formState.errors.phone ? <p className="text-xs text-destructive">{formState.errors.phone.message}</p> : null}</div>
              <div className="grid gap-2"><Label htmlFor="line">Línea o producto</Label><Input id="line" {...register("line")} />{formState.errors.line ? <p className="text-xs text-destructive">{formState.errors.line.message}</p> : null}</div>
            </div>
            <div className="grid gap-2"><Label htmlFor="message">Mensaje</Label><Textarea id="message" rows={5} {...register("message")} />{formState.errors.message ? <p className="text-xs text-destructive">{formState.errors.message.message}</p> : null}</div>
            <div className="flex flex-wrap gap-3"><Button type="submit" variant="industrial"><MessageCircle aria-hidden="true" />Abrir consulta en WhatsApp</Button><Button type="button" variant="industrialOutline" onClick={copySummary}><Copy aria-hidden="true" />Copiar resumen</Button></div>
            {opened ? <p role="status" className="text-sm font-normal text-primary">Se abrió WhatsApp con tu consulta; enviala para completar el contacto.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}