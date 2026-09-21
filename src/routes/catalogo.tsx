import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Building2, Download, FileText, Globe2, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";

import indiaAsset from "@/assets/catalogos/india.pdf.asset.json";
import viguetasAsset from "@/assets/catalogos/viguetas.pdf.asset.json";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { routeMeta } from "@/config/seo";
import { officialCatalogs, type OfficialCatalog } from "@/data/catalogs";
import { buildWhatsAppUrl } from "@/lib/quote-message";

type CatalogFilter = "todos" | "porcelanatos" | "ceramica" | "viguetas" | "eps";

const filters: { id: CatalogFilter; label: string }[] = [
  { id: "todos", label: "Todos (7)" },
  { id: "porcelanatos", label: "Porcelanatos Importados" },
  { id: "ceramica", label: "Cerámica Salteña" },
  { id: "viguetas", label: "Viguetas" },
  { id: "eps", label: "EPS Aislaciones" },
];

function matchesFilter(catalog: OfficialCatalog, filter: CatalogFilter) {
  if (filter === "todos") return true;
  if (filter === "porcelanatos") return catalog.category === "Porcelanatos Importados";
  if (filter === "ceramica") return catalog.category === "Cerámica Salteña";
  if (filter === "viguetas") return catalog.category === "Estructuras & Viguetas";
  return catalog.category === "Aislaciones & EPS";
}

function originLabel(catalog: OfficialCatalog) {
  if (catalog.origin === "India" || catalog.origin === "China") return `Importado ${catalog.origin}`;
  return catalog.origin;
}

// Los catálogos pesados (India y Viguetas) se sirven como archivos externos;
// el resto vive en /catalogos/ con su nombre de archivo exacto.
const externalHrefs: Record<string, string> = {
  "/catalogos/india.pdf": indiaAsset.url,
  "/catalogos/viguetas.pdf": viguetasAsset.url,
};

function catalogHref(catalog: OfficialCatalog) {
  return externalHrefs[catalog.fileUrl] ?? catalog.fileUrl;
}


export const Route = createFileRoute("/catalogo")({
  head: () =>
    routeMeta({
      title: "Catálogos oficiales — Estilo Capitana",
      description: "Descargá los siete catálogos técnicos oficiales de porcelanatos, cerámicos Salteña, viguetas pretensadas y EPS.",
      path: "/catalogo",
    }),
  component: CatalogoPage,
});

function CatalogCard({ catalog }: { catalog: OfficialCatalog }) {
  const href = catalogHref(catalog);
  const whatsappUrl = buildWhatsAppUrl(
    `Hola Estilo Capitana, consulto cotización y disponibilidad sobre el catálogo ${catalog.title}`,
  );

  return (
    <article className="flex min-h-[25rem] flex-col border border-border bg-card p-6 shadow-glass transition-all duration-200 hover:border-primary hover:shadow-industrial">
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-xs font-semibold text-accent-foreground">
          <Globe2 aria-hidden="true" className="size-3.5" />
          {originLabel(catalog)}
        </span>
        <span className="grid size-11 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary">
          <FileText aria-hidden="true" className="size-5" />
        </span>
      </div>

      <p className="mt-7 font-mono text-xs font-semibold uppercase text-technical">{catalog.category}</p>
      <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">{catalog.title}</h2>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{catalog.description}</p>

      <div className="mt-auto pt-7">
        <div className="mb-4 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs font-medium text-muted-foreground">Formato de archivo</span>
          <span className="font-mono text-xs font-semibold text-foreground">{catalog.format}</span>
        </div>
        <div className="grid gap-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold border border-border bg-surface text-foreground hover:border-primary hover:text-primary"
          >
            <BookOpen aria-hidden="true" className="size-4" />
            Ver Online
          </a>
          <a
            href={href}
            download={catalog.downloadName}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold bg-sky-600 text-white hover:bg-sky-500"
          >
            <Download aria-hidden="true" className="size-4" />
            Descargar PDF
          </a>
          {whatsappUrl ? (
            <Button asChild variant="industrialOutline">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </Button>
          ) : (
            <Button type="button" variant="industrialOutline" disabled title={siteConfig.contact.whatsapp}>
              <MessageCircle aria-hidden="true" />
              WhatsApp a confirmar
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

function CatalogoPage() {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>("todos");
  const visibleCatalogs = useMemo(
    () => officialCatalogs.filter((catalog) => matchesFilter(catalog, activeFilter)),
    [activeFilter],
  );

  return (
    <div>
      <section className="border-b border-border bg-background px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex max-w-4xl items-start gap-4">
            <span className="mt-1 grid size-12 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
              <Building2 aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs font-semibold uppercase text-technical">Centro de documentación oficial</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">Catálogos técnicos y documentación para obra</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">Consultá y descargá documentación oficial de porcelanatos, cerámicos, sistemas estructurales y aislaciones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar catálogos por familia">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                type="button"
                size="sm"
                variant={activeFilter === filter.id ? "industrial" : "industrialOutline"}
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <p className="mt-6 font-mono text-xs text-muted-foreground" aria-live="polite">
            {visibleCatalogs.length} {visibleCatalogs.length === 1 ? "documento disponible" : "documentos disponibles"}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleCatalogs.map((catalog) => <CatalogCard key={catalog.id} catalog={catalog} />)}
          </div>
        </div>
      </section>
    </div>
  );
}