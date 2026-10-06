import { createFileRoute } from "@tanstack/react-router";
import { Award, FileText, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { CatalogEpsDetail } from "../components/CatalogEpsDetail";
import { CatalogViguetasDetail } from "../components/CatalogViguetasDetail";
import { Catalog43Detail } from "../components/Catalog43Detail";
import { Catalog36Detail } from "../components/Catalog36Detail";
import { CatalogFullBodyDetail } from "../components/CatalogFullBodyDetail";
import { CatalogLaminasDetail } from "../components/CatalogLaminasDetail";
import { CatalogHabitat60x120Detail } from "../components/CatalogHabitat60x120Detail";
import { CatalogHabitatPorcelanatoDetail } from "../components/CatalogHabitatPorcelanatoDetail";

import { Button } from "@/components/ui/button";
import { routeMeta } from "@/config/seo";
import { officialCatalogs, type OfficialCatalog } from "@/data/catalogs";
import { buildWhatsAppUrl } from "@/lib/quote-message";
import { normalizeText } from "@/lib/text";

function slugifyLinea(value: string) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const lineFilters = Array.from(new Set(officialCatalogs.map((catalog) => catalog.filterGroup).filter(Boolean))).map(
  (group) => ({ id: slugifyLinea(group), label: group }),
);

type CatalogFilter = "todas" | (string & {});

const FILTER_IDS = lineFilters.map((filter) => filter.id);

function catalogHref(catalog: OfficialCatalog) {
  return catalog.fileUrl;
}

function matchesFilter(catalog: OfficialCatalog, filter: CatalogFilter) {
  if (filter === "todas") return true;
  return slugifyLinea(catalog.filterGroup ?? "") === filter;
}

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>): { linea?: CatalogFilter } => {
    const linea = typeof search["linea"] === "string" ? (search["linea"] as CatalogFilter) : undefined;
    return linea && FILTER_IDS.includes(linea) ? { linea } : {};
  },
  head: () =>
    routeMeta({
      title: "Catálogos de materiales — estilo.capitana",
      description: "Consultá las líneas de Sintered Stone, Porcelanato, Pisos Cerámicos, Viguetas Pretensadas y Telgopor de Construcción representadas por estilo.capitana.",
      path: "/catalogo",
    }),
  component: CatalogoPage,
});

function CatalogCard({ catalog, onSelect }: { catalog: OfficialCatalog; onSelect?: () => void }) {
  const href = catalogHref(catalog);
  const whatsappUrl = buildWhatsAppUrl(
    `Hola estilo.capitana, quisiera consultar stock y cotización de la línea ${catalog.title}.`,
  );

  const primaryActionClass =
    "inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-industrial transition-all duration-200 hover:brightness-105 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer";

  // Incluye todos los IDs con vista de modelos en pantalla
  const isInteractive = [
  "cat-habitat-full-body",
  "cat-habitat-laminas",
  "cat-habitat-porcelanato",
  "cat-habitat-60x120", 
  "cat-ferrazzano-36",
  "cat-ferrazzano-43",
  ].includes(catalog.id);

  return (
    <article className="flex min-h-[27rem] flex-col rounded-lg border border-border bg-card p-6 shadow-glass transition-all duration-200 hover:border-border-strong hover:shadow-industrial">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-normal text-accent-foreground">
          {catalog.origin}
        </span>
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary">
          <FileText aria-hidden="true" className="size-5" />
        </span>
      </div>

      <p className="mt-7 text-xs font-normal uppercase text-primary">{catalog.category}</p>
      <h2 className="mt-3 text-xl font-semibold leading-snug text-foreground">{catalog.title}</h2>
      <p className="mt-4 text-sm font-normal leading-6 text-muted-foreground">{catalog.description}</p>

      <div className="mt-auto grid gap-2 pt-7">
        {isInteractive ? (
          <button
            type="button"
            onClick={onSelect}
            className={primaryActionClass}
          >
            Ver modelos en pantalla
          </button>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryActionClass}
          >
            Ver / descargar catálogo
          </a>
        )}

        {catalog.certificateUrl ? (
          <a
            href={catalog.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-border-strong bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Award aria-hidden="true" className="size-4" />
            Ver Certificado Adjunto
          </a>
        ) : null}

        <Button asChild variant="industrialOutline">
          <a href={whatsappUrl ?? `https://wa.me/5491161208162`} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            Consultar Stock
          </a>
        </Button>
      </div>
    </article>
  );
}

function CatalogoPage() {
  const { linea } = Route.useSearch();
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>(linea ?? "todas");
  const [selectedCatalogId, setSelectedCatalogId] = useState<string | null>(null);

  useEffect(() => {
    if (linea) setActiveFilter(linea);
  }, [linea]);

const visibleCatalogs = useMemo(
  () =>
    officialCatalogs
      .filter((catalog) => catalog.isVisible !== false) // Oculta automáticamente los que tengan isVisible: false[cite: 2, 8]
      .filter((catalog) => matchesFilter(catalog, activeFilter)),
  [activeFilter],
);

  if (selectedCatalogId === "cat-ferrazzano-43") {
    return <Catalog43Detail onBack={() => setSelectedCatalogId(null)} />;
  }

  if (selectedCatalogId === "cat-ferrazzano-36") {
    return <Catalog36Detail onBack={() => setSelectedCatalogId(null)} />;
  }

  if (selectedCatalogId === "cat-habitat-full-body") {
    return <CatalogFullBodyDetail onBack={() => setSelectedCatalogId(null)} />;
  }

  if (selectedCatalogId === "cat-habitat-laminas") {
    return <CatalogLaminasDetail onBack={() => setSelectedCatalogId(null)} />;
  }

  if (selectedCatalogId === "cat-habitat-porcelanato") {
    return <CatalogHabitatPorcelanatoDetail onBack={() => setSelectedCatalogId(null)} />;
  }

  if (selectedCatalogId === "cat-habitat-60x120") {
  return <CatalogHabitat60x120Detail onBack={() => setSelectedCatalogId(null)} />;
}

  if (selectedCatalogId === "cat-viguetas") {
  return <CatalogViguetasDetail onBack={() => setSelectedCatalogId(null)} />;
}

if (selectedCatalogId === "cat-eps") {
  return <CatalogEpsDetail onBack={() => setSelectedCatalogId(null)} />;
}
  
  return (
    <div>
      <section className="brand-watermark-section border-b border-border bg-background px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-normal uppercase text-primary">Representación comercial B2B</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Líneas y catálogos de materiales
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-normal leading-8 text-muted-foreground">
            Explorá cada línea de productos, consultá su documentación y contactanos para disponibilidad y cotización comercial
          </p>
        </div>
      </section>

      <section className="brand-watermark-section bg-surface px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar catálogos por línea de productos">
            <Button
              key="todas"
              type="button"
              size="sm"
              variant="ghost"
              className={
                activeFilter === "todas"
                  ? "text-brand-gradient relative rounded-none bg-transparent px-1 pb-3 font-semibold shadow-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:rounded-full after:bg-brand-gradient hover:bg-transparent"
                  : "rounded-none px-1 pb-3 text-muted-foreground hover:bg-transparent hover:text-foreground"
              }
              aria-pressed={activeFilter === "todas"}
              onClick={() => setActiveFilter("todas")}
            >
              Todas las Líneas
            </Button>
            {lineFilters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <Button
                  key={filter.id}
                  type="button"
                  size="sm"
                  variant="ghost"
                  className={
                    isActive
                      ? "text-brand-gradient relative rounded-none bg-transparent px-1 pb-3 font-semibold shadow-none after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:rounded-full after:bg-brand-gradient hover:bg-transparent"
                      : "rounded-none px-1 pb-3 text-muted-foreground hover:bg-transparent hover:text-foreground"
                  }
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              );
            })}
          </div>

          <p className="mt-6 text-xs font-normal text-muted-foreground" aria-live="polite">
            {visibleCatalogs.length} {visibleCatalogs.length === 1 ? "catálogo disponible" : "catálogos disponibles"}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleCatalogs.map((catalog) => (
              <CatalogCard
                key={catalog.id}
                catalog={catalog}
                onSelect={() => setSelectedCatalogId(catalog.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CatalogoPage;
