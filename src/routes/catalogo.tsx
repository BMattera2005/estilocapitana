import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowDown, FileText, MessageCircle, Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";

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
import { catalogFiles, siteConfig } from "@/config/site";
import { routeMeta } from "@/config/seo";
import {
  countProductsByRubro,
  getProductRubroSlug,
  products,
  type Product,
  type ProductFormat,
} from "@/data/products";
import { rubros, type Rubro } from "@/data/rubros";
import { normalizeText } from "@/lib/text";

type FormatFilter = "todos" | ProductFormat;
type FinishFilter = "todos" | "Glossy (Pulido)" | "Rustic (Mate)" | "Velvet";

const formatOptions: { value: FormatFilter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "60x120 cm", label: "60x120 cm" },
  { value: "120x120 cm", label: "120x120 cm" },
];

const finishOptions: { value: FinishFilter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "Glossy (Pulido)", label: "Glossy (Pulido)" },
  { value: "Rustic (Mate)", label: "Rustic (Mate)" },
  { value: "Velvet", label: "Velvet" },
];

const technicalStandards = [
  "ISO 10545-2: dimensiones y calidad superficial",
  "ISO 10545-3: absorción de agua",
  "ISO 10545-4: carga de rotura y resistencia a la flexión",
  "ISO 10545-13 / 10545-14: resistencia química y manchas",
  "IRAM aplicable según ficha técnica oficial del lote",
];

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>) => {
    const rubro = search["rubro"];
    return typeof rubro === "string" ? { rubro } : {};
  },
  head: () =>
    routeMeta({
      title: "Catálogos técnicos — Estilo Capitana",
      description:
        "Catálogo técnico de porcelanatos importados, filtros por formato y acabado, fichas rápidas y consulta de cotización B2B.",
      path: "/catalogo",
    }),
  component: CatalogoPage,
});

function CatalogCard({ rubro, onExplore }: { rubro: Rubro; onExplore: (slug: Rubro["slug"]) => void }) {
  const file = catalogFiles[rubro.slug];

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
        {countProductsByRubro(rubro.slug)} artículos
      </p>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">
        Formatos: {file.formats.join(" | ")}
      </p>
      <div className="mt-5 grid gap-2">
        <Button type="button" variant="industrial" onClick={() => onExplore(rubro.slug)}>
          <ArrowDown aria-hidden="true" />
          Explorar artículos
        </Button>
        <Button asChild variant="industrialOutline">
          <Link to="/contacto" search={{ sku: rubro.nombre }}>
            <FileText aria-hidden="true" />
            Solicitar ficha técnica
          </Link>
        </Button>
      </div>
    </article>
  );
}

function getFinishBadge(finish: Product["finish"]): string {
  if (finish === "Glossy & Velvet") return "Glossy / Velvet";
  return finish.replace(" (Pulido)", "").replace(" (Mate)", "");
}

function getProductWhatsAppUrl(product: Product): string {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const message = `Hola Estilo Capitana, consulto cotización y disponibilidad del porcelanato ${product.name} SKU: ${product.sku}`;
  const base = number ? `https://wa.me/${number}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ product }: { product: Product }) {
  const [isFichaOpen, setIsFichaOpen] = useState(false);
  const isLargeFormat = product.format === "120x120 cm";
  const shownSpecs = product.specs.slice(0, 3);

  return (
    <article className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-glass transition-colors duration-200 hover:border-primary">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-xs text-technical">{product.sku}</p>
        <span className="rounded-sm border border-border-strong bg-background px-2 py-1 font-mono text-[0.7rem] text-foreground">
          {product.format}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <h3 className="mr-auto text-lg font-semibold text-foreground">{product.name}</h3>
        <span className="rounded-sm border border-border-strong bg-surface px-2 py-1 font-mono text-[0.7rem] text-technical">
          {getFinishBadge(product.finish)}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-sm border border-border-strong bg-background px-2 py-1 font-mono text-[0.7rem] text-muted-foreground">
          {product.faces}
        </span>
        <span className="rounded-sm border border-border-strong bg-background px-2 py-1 font-mono text-[0.7rem] text-muted-foreground">
          {product.body}
        </span>
        {isLargeFormat ? (
          <span className="rounded-sm border border-border-strong bg-background px-2 py-1 font-mono text-[0.7rem] text-muted-foreground">
            📦 2 piezas · 2.88 m² · 60 kg/caja
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>

      <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
        {shownSpecs.map((spec) => (
          <li key={spec} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-industrial-green" />
            <span>{spec}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 font-mono text-xs text-muted-foreground">{product.packaging}</p>

      <div className="mt-5 flex-1" />
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        <Button asChild variant="industrial">
          <a href={getProductWhatsAppUrl(product)} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            Cotizar por WhatsApp
          </a>
        </Button>
        <Button type="button" variant="industrialOutline" onClick={() => setIsFichaOpen(true)}>
          <FileText aria-hidden="true" />
          Ver ficha técnica
        </Button>
      </div>

      <Dialog open={isFichaOpen} onOpenChange={setIsFichaOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-card">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>
              {product.sku} · {product.format} · {product.finish}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-5">
            <div>
              <p className="font-mono text-xs text-technical">ESPECIFICACIÓN DECLARADA</p>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {product.specs.map((spec) => (
                  <li key={spec}>· {spec}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-technical">NORMAS ISO / IRAM DE REFERENCIA</p>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {technicalStandards.map((standard) => (
                  <li key={standard}>· {standard}</li>
                ))}
              </ul>
            </div>
            <p className="rounded-md border border-border bg-background p-3 text-xs leading-5 text-muted-foreground">
              Confirmar disponibilidad, lote y documentación técnica oficial al momento de cotizar.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}

function CatalogoPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState<FormatFilter>("todos");
  const [finish, setFinish] = useState<FinishFilter>("todos");
  const explorerRef = useRef<HTMLElement>(null);

  const activeRubro = typeof search.rubro === "string" ? search.rubro : null;

  const filtered = useMemo(() => {
    const normalizedQuery = normalizeText(query);
    return products.filter((product) => {
      if (activeRubro && getProductRubroSlug(product) !== activeRubro) return false;
      if (format !== "todos" && product.format !== format) return false;
      if (finish === "Velvet" && !product.finish.includes("Velvet")) return false;
      if (finish !== "todos" && finish !== "Velvet" && product.finish !== finish) return false;
      if (!normalizedQuery) return true;
      const haystack = normalizeText(
        [
          product.sku,
          product.name,
          product.format,
          product.finish,
          product.body,
          product.faces,
          product.description,
          product.packaging,
          ...product.specs,
        ].join(" "),
      );
      return haystack.includes(normalizedQuery);
    });
  }, [activeRubro, finish, format, query]);

  function selectRubro(slug: string | null) {
    void navigate({ search: slug ? { rubro: slug } : {} });
  }

  function exploreRubro(slug: Rubro["slug"]) {
    void navigate({ search: { rubro: slug } });
    window.requestAnimationFrame(() => {
      explorerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("buscador-productos")?.focus({ preventScroll: true });
    });
  }

  function clearFilters() {
    setQuery("");
    setFormat("todos");
    setFinish("todos");
    selectRubro(null);
  }

  return (
    <div>
      <section className="border-b border-border bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-technical">CATÁLOGOS TÉCNICOS OFICIALES</p>
          <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Documentación técnica por rubro
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
            Consultá especificaciones técnicas de porcelanatos importados y solicitá cotización por
            modelo, SKU y disponibilidad. Sin precios públicos ni compra online.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rubros.map((rubro) => (
              <CatalogCard key={rubro.slug} rubro={rubro} onExplore={exploreRubro} />
            ))}
          </div>
        </div>
      </section>

      <section ref={explorerRef} className="scroll-mt-20 bg-surface px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-sm text-technical">EXPLORADOR DE PORCELANATOS</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Filtrá por medida, acabado o SKU</h2>

          <div className="mt-8 grid gap-5 rounded-lg border border-border bg-surface-glass p-5 shadow-glass lg:grid-cols-[1fr_1fr_1.4fr]">
            <div className="grid gap-2">
              <p id="formato-productos" className="text-sm font-medium text-foreground">
                Medida / Formato
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-labelledby="formato-productos">
                {formatOptions.map((option) => (
                  <Button
                    key={option.value}
                    type="button"
                    size="sm"
                    variant={format === option.value ? "industrial" : "industrialOutline"}
                    aria-pressed={format === option.value}
                    onClick={() => setFormat(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <p id="acabado-productos" className="text-sm font-medium text-foreground">
                Acabado
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-labelledby="acabado-productos">
                {finishOptions.map((option) => (
                  <Button
                    key={option.value}
                    type="button"
                    size="sm"
                    variant={finish === option.value ? "industrial" : "industrialOutline"}
                    aria-pressed={finish === option.value}
                    onClick={() => setFinish(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="buscador-productos">Buscador rápido por nombre o SKU</Label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  id="buscador-productos"
                  type="search"
                  className="pl-9"
                  placeholder="Ej.: MNC-001, Carrara, Unico"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
            </div>

            <div className="lg:col-span-3">
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

            <p aria-live="polite" className="font-mono text-xs text-technical lg:col-span-3">
              {filtered.length} {filtered.length === 1 ? "resultado" : "resultados"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-lg border border-border bg-card p-8 text-center shadow-glass">
              <p className="text-lg font-semibold text-foreground">Sin resultados</p>
              <p className="mt-2 text-sm text-muted-foreground">
                No encontramos porcelanatos con esos filtros. Probá otra medida, acabado o SKU.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <Button type="button" variant="industrialOutline" onClick={clearFilters}>
                  Limpiar filtros
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
    </div>
  );
}