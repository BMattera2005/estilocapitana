import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileSearch, PackageCheck, Truck } from "lucide-react";

import { IndustrialIcon } from "@/components/site/IndustrialIcon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { routeMeta } from "@/config/seo";
import { workingSteps } from "@/data/home";
import { rubros } from "@/data/rubros";

export const Route = createFileRoute("/")({
  head: () =>
    routeMeta({
      title: "Estilo Capitana — Abastecimiento industrial Salteña",
      description:
        "Distribuidor oficial Salteña para abastecimiento industrial B2B en Argentina: catálogos técnicos, cotización por lote y atención comercial.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-border bg-background">
        <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-mono text-sm text-technical">{siteConfig.officialBadge}</p>
            <h1 className="mt-6 text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl">
              Abastecimiento industrial con respaldo oficial Salteña
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              Catálogos técnicos, cotización por lote y atención comercial para corralones,
              constructoras e industrias que necesitan resolver compras con criterio técnico.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="industrial" size="lg">
                <Link to="/catalogo" search={{}}>
                  Ver catálogos técnicos
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="industrialOutline" size="lg">
                <Link to="/contacto">Solicitar presupuesto</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface-glass p-5 shadow-glass lg:self-end">
            <div className="grid gap-3">
              {siteConfig.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-md border border-border bg-background/70 px-4 py-4 font-mono text-sm text-foreground"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-technical">RUBROS PRINCIPALES</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Familias técnicas para compras industriales
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rubros.map((rubro) => (
              <Link
                key={rubro.slug}
                to="/catalogo"
                search={{ rubro: rubro.slug }}
                className="group rounded-lg border border-border bg-card p-5 shadow-glass transition-all duration-200 hover:border-primary hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="grid size-12 place-items-center rounded-md border border-border-strong bg-background text-technical transition-colors duration-200 group-hover:text-accent-foreground">
                  <IndustrialIcon icono={rubro.icono} />
                </span>
                <span className="mt-5 block text-lg font-semibold text-foreground">{rubro.nombre}</span>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-technical">
                  Solicitar cotización <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-sm text-technical">CÓMO TRABAJAMOS</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Proceso comercial claro para operaciones B2B
            </h2>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {workingSteps.map((step, index) => {
              const StepIcon = [FileSearch, PackageCheck, Truck][index];
              return (
                <li key={step.title} className="rounded-lg border border-border bg-surface-glass p-6 shadow-glass">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-md bg-brand-gradient text-primary-foreground">
                      {StepIcon ? <StepIcon aria-hidden="true" className="size-5" /> : null}
                    </span>
                    <span className="font-mono text-sm text-technical">Paso {index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-surface px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div>
            <p className="font-mono text-sm text-technical">COTIZACIÓN TÉCNICA</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Armá tu solicitud por lote, obra o reposición.
            </h2>
          </div>
          <Button asChild variant="industrial" size="lg">
            <Link to="/contacto">
              Solicitar presupuesto
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
