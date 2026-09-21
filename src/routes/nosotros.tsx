import { Link, createFileRoute } from "@tanstack/react-router";

import { IndustrialIcon } from "@/components/site/IndustrialIcon";
import { Button } from "@/components/ui/button";
import { routeMeta } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { valores } from "@/data/valores";

export const Route = createFileRoute("/nosotros")({
  head: () =>
    routeMeta({
      title: "Quiénes somos — Estilo Capitana",
      description:
        "Estilo Capitana, distribuidor oficial Salteña: alianza con el fabricante, cadena de suministro confiable y trazabilidad por lote.",
      path: "/nosotros",
    }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <>
      <section className="border-b border-border bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs text-technical">{siteConfig.officialBadge}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
             Documentación y distribución con respaldo oficial
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            {siteConfig.about.intro}
          </p>

           <div className="mt-10 grid gap-4 lg:grid-cols-2">
             <article className="border border-border bg-surface p-6 shadow-glass">
              <h2 className="font-mono text-xs text-technical">ALIANZA COMERCIAL</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {siteConfig.about.alianza}
              </p>
            </article>
             <article className="border border-border bg-surface p-6 shadow-glass">
              <h2 className="font-mono text-xs text-technical">CADENA DE SUMINISTRO</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {siteConfig.about.suministro}
              </p>
            </article>
             <article className="border border-border bg-surface p-6 shadow-glass">
              <h2 className="font-mono text-xs text-technical">TRAZABILIDAD</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {siteConfig.about.trazabilidad}
              </p>
            </article>
             <article className="border border-border bg-surface p-6 shadow-glass">
               <h2 className="font-mono text-xs text-technical">DOCUMENTACIÓN TÉCNICA</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {siteConfig.about.calidad}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Cómo trabajamos</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <article
                key={valor.title}
                 className="border border-border bg-card p-6 shadow-glass transition-colors duration-200 hover:border-border-strong"
              >
                <span className="grid size-10 place-items-center rounded-md border border-border-strong bg-background text-technical">
                  <IndustrialIcon icono={valor.icono} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{valor.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{valor.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-4 py-14 sm:px-6 lg:px-8">
         <div className="mx-auto flex max-w-7xl flex-col gap-6 border border-border bg-card p-8 shadow-glass lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              ¿Necesitás abastecer una obra o reposición?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Escribinos con el detalle de artículos o rubros y el equipo comercial prepara la
              propuesta.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="industrial">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="industrialOutline">
              <Link to="/catalogo" search={{}}>
                Ver catálogos técnicos
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
