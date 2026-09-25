import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Blocks, FileText, Grid3x3, Layers3, MessageCircle, PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { routeMeta } from "@/config/seo";
import { officialCatalogs } from "@/data/catalogs";

const productFamilies = [
  { filter: "sintered-stone", title: "Sintered Stone", detail: "Full Body y Láminas 120x270 para arquitectura de alta gama con máxima resistencia.", icon: Layers3 },
  { filter: "porcelanato", title: "Porcelanato", detail: "Porcelanatos esmaltados en acabados Glossy, Carving y Velvet de alta rotación.", icon: PanelsTopLeft },
  { filter: "pisos-ceramicos", title: "Pisos Cerámicos", detail: "Ferrazzano en formatos 36x36 cm y 43x43 cm, diseñados para rendimiento y rotación.", icon: Grid3x3 },
  { filter: "viguetas-pretensadas", title: "Viguetas Pretensadas", detail: "Vigueta Perfecta: elementos estructurales de alta resistencia para cubiertas y entrepisos.", icon: Blocks },
  { filter: "telgopor-de-construccion", title: "Telgopor de Construcción", detail: "EPS Famapol: bovedillas y paneles para techos alivianados y aislación térmica.", icon: FileText },
] as const;

export const Route = createFileRoute("/")({
  head: () => routeMeta({
    title: "estilo.capitana — Agencia comercial de materiales de arquitectura",
    description: "Representación comercial B2B de porcelanatos, cerámicos Ferrazzano, viguetas y EPS Telgopor.",
    path: "/",
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="brand-watermark-section border-b border-border bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-normal uppercase text-primary">{siteConfig.descriptor}</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Materiales de arquitectura seleccionados para vender y rendir mejor
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-normal leading-8 text-muted-foreground">
              Representamos líneas de porcelanatos, cerámicos, viguetas y EPS con foco en la rotación del stock, las prestaciones y el valor comercial
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="industrial" size="lg">
                <Link to="/catalogo">Ver líneas y catálogos<ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="industrialOutline" size="lg">
                <Link to="/contacto"><MessageCircle aria-hidden="true" />Hablar con el equipo comercial</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            <div className="bg-card p-5"><strong className="block text-3xl font-bold text-foreground">{officialCatalogs.length}</strong><span className="mt-1 block text-sm font-normal text-muted-foreground">catálogos comerciales</span></div>
            <div className="bg-card p-5"><strong className="block text-lg font-semibold text-foreground">Selección especializada</strong><span className="mt-1 block text-sm font-normal text-muted-foreground">materiales para arquitectura</span></div>
            <div className="bg-card p-5"><strong className="block text-lg font-semibold text-foreground">Atención B2B</strong><span className="mt-1 block text-sm font-normal text-muted-foreground">stock y cotización directa</span></div>
          </div>
        </div>
      </section>

       <section className="brand-watermark-section bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-normal uppercase text-primary">Líneas comerciales</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">Cinco líneas de productos para proyectos y canales profesionales</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {productFamilies.map((family) => {
              const Icon = family.icon;
              return (
                <Link
                  key={family.filter}
                  to="/catalogo"
                  search={{ linea: family.filter }}
                  aria-label={`Ver la línea ${family.title} en el catálogo`}
                  className="group flex min-h-[14rem] flex-col rounded-lg border border-border bg-card p-6 shadow-glass transition-all duration-200 hover:border-border-strong hover:shadow-industrial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="grid size-11 place-items-center rounded-md bg-accent text-accent-foreground"><Icon aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{family.title}</h3>
                  <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">{family.detail}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                    Ver línea
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div><p className="text-xs font-normal uppercase text-primary">Consulta comercial</p><h2 className="mt-3 text-3xl font-semibold text-foreground">Encontrá la línea adecuada para tu proyecto o canal</h2></div>
          <Button asChild variant="industrial" size="lg"><Link to="/contacto">Consultar stock<ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </div>
  );
}
