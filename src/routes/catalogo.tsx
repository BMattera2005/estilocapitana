import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { useState } from "react";

import { Catalog36Detail } from "../components/Catalog36Detail";
import { Catalog43Detail } from "../components/Catalog43Detail";
import { CatalogFullBodyDetail } from "../components/CatalogFullBodyDetail";
import { CatalogHabitatPorcelanatoDetail } from "../components/CatalogHabitatPorcelanatoDetail";
import { CatalogLaminasDetail } from "../components/CatalogLaminasDetail";

import { Button } from "@/components/ui/button";
import { routeMeta } from "@/config/seo";
import { officialCatalogs, type OfficialCatalog } from "@/data/catalogs";
import { buildWhatsAppUrl } from "@/lib/quote-message";
import { normalizeText } from "@/lib/text";

/** Convierte una línea en slug de URL: "Línea Porcelanatos" -> "linea-porcelanatos". */
function slugifyLinea(value: string) {
  return normalizeText(value).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// Los filtros se derivan de los datos: cualquier filterGroup nuevo aparece solo.
const lineFilters = Array.from(
  new Set(officialCatalogs.map((catalog) => catalog.filterGroup).filter(Boolean))
).map((group) => ({ id: slugifyLinea(group as string), label: group as string }));

type CatalogFilter = "todas" | (string & {});

const FILTER_IDS = lineFilters.map((filter) => filter.id);

function matchesFilter(catalog: OfficialCatalog, filter: CatalogFilter) {
  if (filter === "todas") return true;
  return slugifyLinea(catalog.filterGroup || "") === filter;
}

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>): { linea?: CatalogFilter } => {
    const linea = typeof search["linea"] === "string" ? (search["linea"] as CatalogFilter) : undefined;
    return linea && FILTER_IDS.includes(linea) ? { linea } : {};
  },
  head: () =>
    routeMeta({
      title: "Colecciones y catálogos — Habitat MA",
      description: "Consultá las colecciones de Sintered Stone, Porcelanatos, Pisos Cerámicos, Viguetas Pretensadas y EPS de Construcción.",
      path: "/catalogo",
    }),
  component: CatalogoPage,
});

function CatalogCard({ catalog, onSelect }: { catalog: OfficialCatalog; onSelect?: () => void }) {
  const whatsappUrl = buildWhatsAppUrl(
    `Hola, Estilo Capitana quisiera consultar stock y cotización de la colección ${catalog.title}.`,
  );

  const primaryActionClass =
    "inline-flex min-h-11 w-full items-center justify-center rounded-md bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-industrial transition-all duration-200 hover:brightness-105 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer";

  const secondaryActionClass = 
    "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-accent hover:text-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer";

  // Incluimos Viguetas y EPS para que tengan el botón "Ver modelos en pantalla"
  const isInteractive = [
    "cat-habitat-full-body",
    "cat-habitat-laminas",
    "cat-habitat-porcelanato",
    "cat-habitat-60x120",
    "cat-ferrazzano-36",
    "cat-ferrazzano-43",
  ].includes(catalog.id);

  return (
    <article className="flex min-h-[27rem] flex-col rounded-xl border border-slate-200/80 bg-card shadow-glass transition-all duration-200 hover:border-border-strong hover:shadow-industrial overflow-hidden">
      
      {/* Imagen superior con aspect-ratio 16/10 y elementos flotantes */}
      {catalog.imageUrl ? (
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-border/50">
          <img 
            src={catalog.imageUrl} 
            alt={catalog.title}
            className="w-full h-full object-cover"
          />
          {/* Badge superior izquierdo */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md shadow-sm ${
              catalog.origin === "Novedad Importada" || (catalog as any).badge === "Novedad Importada"
                ? "bg-white/90 text-cyan-800 border border-cyan-200" 
                : "bg-white/90 text-emerald-800 border border-emerald-200"
            }`}>
              {catalog.origin || (catalog as any).badge}
            </span>
          </div>
          {/* Botón de PDF superior derecho para DESCARGA DIRECTA (con logo PDF) */}
          <div className="absolute top-3 right-3 z-10">
            <a 
              href={href} 
              download={catalog.downloadName || `${catalog.title}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              title="Descargar archivo directamente"
              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-white hover:text-cyan-600 transition-colors shadow-sm cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <FileText aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      ) : (
        /* Fallback si no tuviera imagen */
        <div className="flex items-start justify-between gap-4 p-6 pb-0">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-normal text-accent-foreground">
            {catalog.origin || (catalog as any).badge}
          </span>
          <a 
            href={href}
            download={catalog.downloadName || `${catalog.title}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            title="Descargar archivo directamente"
            className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary hover:text-cyan-600 transition-colors cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <FileText aria-hidden="true" className="size-5" />
          </a>
        </div>
      )}

      {/* Contenido de texto y botones */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="mt-1 text-xs font-bold uppercase text-primary tracking-wider">{catalog.category}</p>
          <h2 className="mt-2 text-xl font-semibold leading-snug text-foreground">{catalog.title}</h2>
          <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">{catalog.description}</p>
        </div>

        <div className="mt-auto grid gap-2 pt-6 border-t border-slate-100">
          
          {/* 1. Botón: Ver modelos en pantalla */}
          {isInteractive && onSelect ? (
            <button
              type="button"
              onClick={onSelect}
              className={primaryActionClass}
            >
              Ver modelos en pantalla
            </button>
          ) : null}

          {/* 2. Botón: Ver el PDF en pantalla */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={isInteractive ? secondaryActionClass : primaryActionClass}
          >
            {isInteractive ? "Ver el PDF en pantalla" : "Ver / descargar catálogo"}
          </a>

          {/* 3. Botón: Ver Certificado Adjunto (Solo Viguetas) */}
          {catalog.certificateUrl ? (
            <a
              href={catalog.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-border-strong bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            >
              <Award aria-hidden="true" className="size-4" />
              Ver Certificado Adjunto
            </a>
          ) : null}

          {/* 4. Botón: Consultar Stock (WhatsApp) */}
          <Button asChild variant="industrialOutline">
            <a href={whatsappUrl ?? `https://wa.me/5491161208162`} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              Consultar Stock
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

function CatalogoPage() {
  const { linea, catalogo } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>(linea ?? "todas");
  const [selectedCatalogId, setSelectedCatalogId] = useState<string | null>(catalogo ?? null);

  useEffect(() => {
    if (linea) setActiveFilter(linea);
  }, [linea]);

  useEffect(() => {
    if (catalogo) setSelectedCatalogId(catalogo);
  }, [catalogo]);

  const handleBack = () => {
    setSelectedCatalogId(null);
    navigate({ to: "/catalogo", search: {} });
  };

  const visibleCatalogs = useMemo(
    () =>
      officialCatalogs
        .filter((catalog) => catalog.isVisible !== false)
        .filter((catalog) => matchesFilter(catalog, activeFilter)),
    [activeFilter],
  );

  // Renderizados interactivos
  if (selectedCatalogId === "cat-ferrazzano-43") return <Catalog43Detail onBack={handleBack} />;
  if (selectedCatalogId === "cat-ferrazzano-36") return <Catalog36Detail onBack={handleBack} />;
  if (selectedCatalogId === "cat-habitat-full-body") return <CatalogFullBodyDetail onBack={handleBack} />;
  if (selectedCatalogId === "cat-habitat-laminas") return <CatalogLaminasDetail onBack={handleBack} />;
  if (selectedCatalogId === "cat-habitat-porcelanato") return <CatalogHabitatPorcelanatoDetail onBack={handleBack} />;
  if (selectedCatalogId === "cat-habitat-60x120") return <CatalogHabitat60x120Detail onBack={handleBack} />;
  if (selectedCatalogId === "cat-viguetas") return <CatalogViguetasDetail onBack={handleBack} />;
  if (selectedCatalogId === "cat-eps") return <CatalogEpsDetail onBack={handleBack} />;

  return (
    <div className="bg-surface">
      <section className="bg-surface px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-foreground font-['Montserrat']">
            Colecciones y catálogos
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Seleccioná una colección para ver los modelos interactivos o abrir el catálogo oficial en PDF.
          </p>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar catálogos por colección">
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
              Todas las Colecciones
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
