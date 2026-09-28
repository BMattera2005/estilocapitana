import { ArrowLeft, Download, MessageCircle, Search } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { products43x43, type CeramicProduct } from "@/data/products43";

interface Catalog43DetailProps {
  onBack: () => void;
}

export function Catalog43Detail({ onBack }: Catalog43DetailProps) {
  const [selectedFinish, setSelectedFinish] = useState("Todos");
  const [search, setSearch] = useState("");

  const finishes = ["Todos", "Brillante", "Satinado", "Mate con Granilla", "Colonial"];

  const filteredProducts = products43x43.filter((prod) => {
    const matchesFinish = selectedFinish === "Todos" || prod.finish === selectedFinish;
    const matchesSearch = prod.name.toLowerCase().includes(search.toLowerCase()) ||
                          prod.line.toLowerCase().includes(search.toLowerCase()) ||
                          prod.designType.toLowerCase().includes(search.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  const handleWhatsAppQuote = (product: CeramicProduct) => {
    const message = `Hola Estilo Capitana, me interesa cotizar el piso cerámico ${product.name} (Formato ${product.format}, Acabado ${product.finish}). Quisiera consultar disponibilidad y precio por m².`;
    const url = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-surface px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-border bg-background shadow-industrial">
        <header className="brand-watermark-section px-5 py-6 sm:px-8 sm:py-8">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="-ml-3 mb-5 text-primary hover:bg-accent hover:text-accent-foreground"
          >
            <ArrowLeft aria-hidden="true" />
            Volver a los Catálogos
          </Button>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-normal text-accent-foreground">
                  Industria Argentina
                </span>
                <span className="text-xs font-semibold uppercase text-primary">Shop · Pisos Cerámicos</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Ferrazzano 43×43 cm
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Cerámica Salteña · 2,25 m² por caja · 12 piezas · 32 kg · Pallet de 48 cajas
              </p>
            </div>

            <Button asChild variant="industrial" className="shrink-0">
              <a href="/catalogos/ferrazzano_43x43.pdf" target="_blank" rel="noopener noreferrer">
                <Download aria-hidden="true" />
                Ver / descargar catálogo
              </a>
            </Button>
          </div>
        </header>

        <div className="border-y border-border bg-surface px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar modelos por acabado">
              {finishes.map((finish) => {
                const isActive = selectedFinish === finish;
                return (
                  <Button
                    key={finish}
                    type="button"
                    size="sm"
                    variant={isActive ? "industrial" : "industrialOutline"}
                    aria-pressed={isActive}
                    onClick={() => setSelectedFinish(finish)}
                  >
                    {finish}
                  </Button>
                );
              })}
            </div>

            <label className="relative block w-full lg:w-96">
              <span className="sr-only">Buscar modelo o diseño</span>
              <Search aria-hidden="true" className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Buscar modelo o diseño"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="min-h-11 w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
          </div>
          <p className="mt-4 text-xs text-muted-foreground" aria-live="polite">
            {filteredProducts.length} {filteredProducts.length === 1 ? "modelo disponible" : "modelos disponibles"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex min-h-[27rem] flex-col overflow-hidden rounded-lg border border-border bg-card shadow-glass transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-industrial"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-surface-elevated">
                <div className="p-6 text-center">
                  <span className="mb-2 block text-xs font-semibold uppercase text-muted-foreground">
                    {product.designType}
                  </span>
                  <span className="text-base font-semibold text-foreground">{product.name}</span>
                </div>
                <img
                  src={product.image}
                  alt={`Modelo ${product.name}`}
                  className="absolute inset-0 size-full object-cover transition-transform duration-200 motion-safe:group-hover:scale-[1.02]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="absolute right-3 top-3 rounded-full bg-overlay px-2.5 py-1 text-[10px] font-semibold text-primary-foreground">
                  {product.finish}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-normal uppercase text-primary">
                  {product.line} · {product.colorOrDesign}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-foreground">{product.name}</h2>

                <dl className="mt-4 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <div className="flex justify-between gap-3">
                    <dt>Tránsito / Resistencia</dt>
                    <dd className="text-right font-semibold text-foreground">{product.traffic}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Caras / Trama</dt>
                    <dd className="text-right font-semibold text-foreground">{product.faces}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Empaque por caja</dt>
                    <dd className="text-right font-semibold text-foreground">2,25 m² · 32 kg</dd>
                  </div>
                </dl>

                <Button
                  type="button"
                  variant="industrial"
                  className="mt-auto w-full whitespace-normal pt-4 text-xs"
                  onClick={() => handleWhatsAppQuote(product)}
                >
                  <MessageCircle aria-hidden="true" />
                  Solicitar cotización por WhatsApp
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
