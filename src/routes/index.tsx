import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Blocks, Download, FileText, Layers3, PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { routeMeta } from "@/config/seo";
import { officialCatalogs } from "@/data/catalogs";

const productFamilies = [
  { title: "Porcelanatos de Alta Gama", detail: "Colecciones importadas de India y China en terminaciones Glossy, Rustic, Carving y Velvet.", icon: PanelsTopLeft, filter: "porcelanatos" },
  { title: "Pisos Cerámicos Salteña", detail: "Pisos y revestimientos cerámicos esmaltados en formatos 36x36 cm y 43x43 cm.", icon: Layers3, filter: "ceramica" },
  { title: "Viguetas Pretensadas", detail: "Documentación técnica para sistemas de entrepisos y techos con tablas de cálculo y medidas.", icon: Blocks, filter: "estructuras" },
  { title: "EPS para techos y aislación", detail: "Bovedillas, bloques y placas de poliestireno expandido para soluciones livianas y térmicas.", icon: FileText, filter: "estructuras" },
] as const;

export const Route = createFileRoute("/")({
  head: () => routeMeta({ title: "Estilo Capitana — Documentación técnica oficial", description: "Centro oficial de catálogos técnicos Salteña para porcelanatos, cerámicos, viguetas pretensadas y EPS.", path: "/" }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="border-b border-border bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase text-technical">{siteConfig.officialBadge}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">Centro de Documentación y Descarga Técnica Oficial</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Accedé a los catálogos oficiales de materiales para obra, consultá especificaciones y contactá al equipo comercial para cotizaciones mayoristas.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="industrial" size="lg"><Link to="/catalogo"><Download aria-hidden="true" />Ver los 7 catálogos</Link></Button>
              <Button asChild variant="industrialOutline" size="lg"><Link to="/contacto">Solicitar cotización<ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            <div className="bg-card p-5"><strong className="block text-3xl text-foreground">{officialCatalogs.length}</strong><span className="mt-1 block text-sm text-muted-foreground">catálogos oficiales</span></div>
            <div className="bg-card p-5"><strong className="block text-lg text-foreground">Descarga directa</strong><span className="mt-1 block text-sm text-muted-foreground">archivos PDF disponibles</span></div>
            <div className="bg-card p-5"><strong className="block text-lg text-foreground">Atención B2B</strong><span className="mt-1 block text-sm text-muted-foreground">consultas para obras y corralones</span></div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs font-semibold uppercase text-technical">Familias de producto</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">Documentación organizada para especificar y construir</h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productFamilies.map((family) => {
              const Icon = family.icon;
              return <article key={family.title} className="border border-border bg-card p-6 shadow-glass"><span className="grid size-11 place-items-center rounded-md bg-accent text-accent-foreground"><Icon aria-hidden="true" /></span><h3 className="mt-5 text-lg font-semibold text-foreground">{family.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{family.detail}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div><p className="font-mono text-xs font-semibold uppercase text-technical">Biblioteca técnica</p><h2 className="mt-3 text-3xl font-semibold text-foreground">Toda la documentación, en un solo lugar.</h2></div>
          <Button asChild variant="industrial" size="lg"><Link to="/catalogo">Explorar catálogos<ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </div>
  );
}