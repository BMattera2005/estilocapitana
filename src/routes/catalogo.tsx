import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Download, FileText, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { CatalogCover } from "@/components/site/CatalogCover";
import { IndustrialIcon } from "@/components/site/IndustrialIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { catalogFiles } from "@/config/site";
import { routeMeta } from "@/config/seo";
import { useQuoteList } from "@/context/quote-list";
import { countProductsByRubro, products, type Product } from "@/data/products";
import { getRubro, rubros, type Rubro } from "@/data/rubros";
import { normalizeText } from "@/lib/text";

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>) => {
    const rubro = search["rubro"];
    return typeof rubro === "string" ? { rubro } : {};
  },
  head: () =>
    routeMeta({
      title: "Catálogos técnicos — Estilo Capitana",
      description:
        "Catálogos técnicos de porcelanatos y piezas especiales, con explorador de productos y solicitud de cotización B2B.",
      path: "/catalogo",
    }),
  component: CatalogoPage,
});

function CatalogCard({ rubro, onOpenViewer }: { rubro: Rubro; onOpenViewer: (rubro: Rubro) => void }) {
  const file = catalogFiles[rubro.slug];
  const hasFile = file.pdfUrl.trim().length > 0;

  return (
    <article className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-glass">
      <CatalogCover rubro={rubro} />
      <div className="mt-5 flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border-strong bg-background text-technical">
          <IndustrialIcon icono={rubro.icono} />
        </span>
        <h3 className="text-lg font-semibold text-foreground">{rubro.nombre}</h3>
      </div>
      <p className="mt-4 font-mono text-xs text-technical">
        {countProductsByRubro(rubro.slug)} ítems · {file.fileSize}
      </p>
      <div className="mt-5 grid gap-2">
        {hasFile ? (
          <>
            <Button type="button" variant="industrial" onClick={() => onOpenViewer(rubro)}>
              <FileText aria-hidden="true" />
              Ver catálogo digital
            </Button>
            <Button asChild variant="industrialOutline">
              <a href={file.pdfUrl} download target="_blank" rel="noreferrer">
                <Download aria-hidden="true" />
                Descargar PDF
              </a>
            </Button>
          </>
        ) : (
          <>
            <Button type="button" variant="industrial" disabled>
              <FileText aria-hidden="true" />
              Próximamente
            </Button>
            <Button type="button" variant="industrialOutline" disabled>
              <Download aria-hidden="true" />
              Próximamente
            </Button>
          </>
        )}
      </div>
    </article>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { addItem, setOpen, hasItem } = useQuoteList();
  const rubro = getRubro(product.rubroSlug);

  return (
    <article className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-glass transition-colors duration-200 hover:border-primary">
      <p className="font-mono text-xs text-technical">{product.sku}</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{product.name}</h3>
      {rubro ? <p className="mt-1 text-xs text-muted-foreground">{rubro.nombre}</p> : null}

      {product.tags.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border-strong bg-background px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      {product.description ? (
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>
      ) : null}

      {product.specs.length > 0 ? (
        <ul className="mt-4 grid gap-1 text-sm text-muted-foreground">
          {product.specs.map((spec) => (
            <li key={spec} className="font-mono text-xs">
              · {spec}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex-1" />
      <Button
        type="button"
        variant="industrialOutline"
        onClick={() => {
          addItem({ sku: product.sku, name: product.name });
          setOpen(true);
        }}
      >
        <Plus aria-hidden="true" />
        {hasItem(product.sku) ? "Sumar a cotización" : "Agregar a cotización"}
      </Button>
    </article>
  );
}

function CatalogoPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const [query, setQuery] = useState("");
  const [viewerRubro, setViewerRubro] = useState<Rubro | null>(null);

  const activeRubro = typeof search.rubro === "string" ? search.rubro : null;

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeText(query);
    return products.filter((product) => {
      if (activeRubro && product.rubroSlug !== activeRubro) return false;
      if (!normalizedQuery) return true;
      const haystack = normalizeText(
        [product.sku, product.name, product.description, ...product.specs, ...product.tags].join(" "),
      );
      return haystack.includes(normalizedQuery);
    });
  }, [activeRubro, query]);

  function selectRubro(slug: string | null) {
    void navigate({ search: slug ? { rubro: slug } : {} });
  }

  const viewerFile = viewerRubro ? catalogFiles[viewerRubro.slug] : null;

  return (
    <div>
      <section className="border-b border-border bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-technical">CATÁLOGOS TÉCNICOS OFICIALES</p>
          <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Documentación técnica por rubro
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Consultá las especificaciones de cada familia y armá tu solicitud de cotización. Sin
            precios públicos ni compra online.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rubros.map((rubro) => (
              <CatalogCard key={rubro.slug} rubro={rubro} onOpenViewer={setViewerRubro} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-technical">EXPLORADOR DE PRODUCTOS</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Buscá por SKU o palabra clave</h2>

          <div className="mt-8 grid gap-5 rounded-lg border border-border bg-surface-glass p-5 shadow-glass">
            <div className="grid gap-2">
              <Label htmlFor="buscador-productos">Buscar producto</Label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="buscador-productos"
                  type="search"
                  className="pl-9"
                  placeholder="Ej.: MNC-001, velvet, 1200x1200"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-foreground">Filtrar por rubro</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={activeRubro ? "industrialOutline" : "industrial"}
                  aria-pressed={!activeRubro}
                  onClick={() => selectRubro(null)}
                >
                  Todos
                </Button>
                {rubros.map((rubro) => (
                  <Button
                    key={rubro.slug}
                    type="button"
                    size="sm"
                    variant={activeRubro === rubro.slug ? "industrial" : "industrialOutline"}
                    aria-pressed={activeRubro === rubro.slug}
                    onClick={() => selectRubro(rubro.slug)}
                  >
                    {rubro.nombre}
                  </Button>
                ))}
              </div>
            </div>

            <p aria-live="polite" className="font-mono text-xs text-technical">
              {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-lg border border-border bg-card p-8 text-center shadow-glass">
              <p className="text-lg font-semibold text-foreground">Sin resultados</p>
              <p className="mt-2 text-sm text-muted-foreground">
                No encontramos artículos con esa búsqueda. Probá con otro SKU o quitá el filtro de
                rubro.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <Button type="button" variant="industrialOutline" onClick={() => setQuery("")}>
                  Limpiar búsqueda
                </Button>
                <Button type="button" variant="industrialOutline" onClick={() => selectRubro(null)}>
                  Ver todos los rubros
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.sku} product={product} />
              ))}
            </div>
          )}

          <p className="mt-8 font-mono text-xs text-muted-foreground">
            CARGA PARCIAL: faltan productos del catálogo completo.
          </p>
        </div>
      </section>

      <Dialog open={Boolean(viewerRubro)} onOpenChange={(open) => !open && setViewerRubro(null)}>
        <DialogContent className="max-w-4xl border-border-strong">
          <DialogHeader>
            <DialogTitle>Catálogo digital — {viewerRubro?.nombre}</DialogTitle>
            <DialogDescription>Visor del catálogo técnico en PDF.</DialogDescription>
          </DialogHeader>
          {viewerFile?.pdfUrl ? (
            <iframe
              title={`Catálogo ${viewerRubro?.nombre}`}
              src={viewerFile.pdfUrl}
              className="h-[70dvh] w-full rounded-md border border-border bg-background"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
