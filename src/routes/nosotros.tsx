import { Link, createFileRoute } from "@tanstack/react-router";
import { Building2, Handshake, LineChart, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { routeMeta } from "@/config/seo";
import { siteConfig } from "@/config/site";

const strengths = [
  { title: "Criterio comercial", description: "Seleccionamos materiales por su rendimiento, valor, diseño y capacidad de rotación en canales profesionales.", icon: LineChart },
  { title: "Representación B2B", description: "Conectamos productos y oportunidades con distribuidores, desarrolladores, constructoras y estudios de arquitectura.", icon: Handshake },
  { title: "Respaldo industrial", description: "Trabajamos con Salteña Equipamientos & Suministros, fabricante con planta industrial en Salta.", icon: Building2 },
  { title: "Información técnica", description: "Facilitamos catálogos y documentación para acompañar decisiones comerciales y de especificación.", icon: ShieldCheck },
] as const;

export const Route = createFileRoute("/nosotros")({
  head: () => routeMeta({
    title: "Quiénes somos — estilo.capitana",
    description: "Agencia comercial B2B especializada en materiales de construcción de excelente rendimiento y valor.",
    path: "/nosotros",
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <>
      <section className="border-b border-border bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-normal uppercase text-primary">Quiénes somos</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Una agencia comercial enfocada en materiales que generan valor.
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-normal leading-8 text-muted-foreground">{siteConfig.about.intro}</p>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-normal uppercase text-primary">Nuestra alianza</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Industria en origen, criterio comercial en cada mercado.</h2>
            <p className="mt-5 text-base font-normal leading-7 text-muted-foreground">{siteConfig.about.alianza}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <article key={strength.title} className="rounded-lg border border-border bg-card p-6 shadow-glass">
                  <span className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground"><Icon aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{strength.title}</h3>
                  <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">{strength.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div><h2 className="text-2xl font-semibold text-foreground">Conocé nuestras líneas comerciales.</h2><p className="mt-2 text-sm font-normal text-muted-foreground">Accedé a los catálogos o consultanos por una oportunidad puntual.</p></div>
          <div className="flex flex-wrap gap-3"><Button asChild variant="industrial"><Link to="/catalogo">Ver catálogos</Link></Button><Button asChild variant="industrialOutline"><Link to="/contacto">Contactar</Link></Button></div>
        </div>
      </section>
    </>
  );
}