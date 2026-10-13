import { useState } from "react";
import { ArrowLeft, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productsViguetas } from "@/data/productsViguetas";
import { buildWhatsAppUrl } from "@/lib/quote-message";
import { ZoomableImage } from "@/components/catalog/ZoomableImage";

export function CatalogViguetasDetail({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");


  // Filtro de visibilidad activa
  const visibleProducts = productsViguetas.filter((p) => p.isVisible !== false);

  const filteredProducts = visibleProducts.filter((p) => {
    return (
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.series.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lengthRange.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-surface min-h-screen">
      {/* CABECERA ALINEADA CON EL RESTO DE COLECCIONES */}
      <section className="brand-watermark-section border-b border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors cursor-pointer mb-6"
          >
            <ArrowLeft className="size-4" /> Volver a las Colecciones
          </button>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 text-[11px] font-medium">
                  Industria Argentina
                </span>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                  CATÁLOGO · VIGUETAS PRETENSADAS
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Montserrat']">
                Viguetas Pretensadas STONOVER
              </h1>
              <p className="text-sm text-slate-500 mt-2 font-normal leading-relaxed max-w-3xl">
                Cerámica Salteña · Sección T-Invertida 12×9 cm · Memoria y tablas de cálculo estructural
              </p>
            </div>
          </div>

          {/* BARRA DE BÚSQUEDA TÉCNICA */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              BUSCADOR TÉCNICO DE SERIES Y LUCES
            </span>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por serie o largo (ej: 4.20 m)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-border bg-background pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GRILLA DE TARJETAS DE PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-xs font-normal text-slate-500 mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? "serie disponible" : "series disponibles"}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const whatsappUrl = buildWhatsAppUrl(
              `Hola Estilo Capitana, quisiera consultar disponibilidad y cotización de la ${product.name} (Largo: ${product.lengthRange}).`,
            );

            return (
              <article
                key={product.id}
                className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                {/* TARJETA DE IMAGEN Y ACCESO A LIGHTBOX */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden group">
                  <ZoomableImage
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                    Hacé clic para ampliar 🔍
                  </div>
                </div>

                {/* DETALLES Y ESPECIFICACIONES TÉCNICAS */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-cyan-600 tracking-wider">
                      {product.series}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-['Montserrat'] mt-1">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                      {product.description}
                    </p>

                    <dl className="mt-4 grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-3">
                      <div>
                        <dt className="text-slate-400 font-normal">Sección:</dt>
                        <dd className="font-bold text-slate-800">{product.section}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 font-normal">Rango de Largo:</dt>
                        <dd className="font-bold text-slate-800">{product.lengthRange}</dd>
                      </div>
                      <div className="col-span-2 mt-1">
                        <dt className="text-slate-400 font-normal">Armadura:</dt>
                        <dd className="font-bold text-slate-800">{product.reinforcement}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* BOTÓN WHATSAPP CORPORATIVO CON DEGRADADO */}
                  <div className="mt-6">
                    <Button asChild variant="industrial" className="w-full">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle aria-hidden="true" />
                        Cotizar por WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

    </div>
  );
}
