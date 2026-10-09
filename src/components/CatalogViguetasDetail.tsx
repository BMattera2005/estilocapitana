import { useState } from "react";
import { ArrowLeft, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productsViguetas } from "@/data/productsViguetas";
import { buildWhatsAppUrl } from "@/lib/quote-message";

export function CatalogViguetasDetail({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [zoomedImage, setZoomedImage] = useState<{ src: string; name: string } | null>(null);

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
      {/* CABECERA */}
      <section className="brand-watermark-section border-b border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline cursor-pointer mb-6"
          >
            <ArrowLeft className="size-4" /> Volver a las Colecciones
          </button>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-normal text-accent-foreground">
                Industria Argentina
              </span>
              <h1 className="mt-3 text-3xl font-bold text-foreground font-['Montserrat'] sm:text-4xl">
                Viguetas Pretensadas STONOVER
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Cerámica Salteña · Sección T-Invertida 12×9 cm · Memoria y tablas de cálculo estructural
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Buscador técnico de series y luces
            </span>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por serie o largo (ej: 4.20 m)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-border bg-background pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GRILLA DE PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-xs font-normal text-muted-foreground mb-6">
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
                className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:border-border-strong transition-all duration-200"
              >
                {/* FOTO DE TARJETA CON CLICK PARA ABRIR LIGHTBOX/ZOOM */}
                <div
                  className="relative h-60 w-full bg-slate-100 overflow-hidden cursor-pointer group"
                  onClick={() => setZoomedImage({ src: product.image, name: product.name })}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                    Hacé clic para ampliar 🔍
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-primary tracking-wider">
                      {product.series}
                    </span>
                    <h3 className="text-lg font-bold text-foreground font-['Montserrat'] mt-1">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>

                    <dl className="mt-4 grid grid-cols-2 gap-2 text-xs border-t border-border pt-3">
                      <div>
                        <dt className="text-muted-foreground">Sección:</dt>
                        <dd className="font-bold text-foreground">{product.section}</dd>
                      </div>
                      <div>
                        <dt className="text-muted-foreground">Rango de Largo:</dt>
                        <dd className="font-bold text-foreground">{product.lengthRange}</dd>
                      </div>
                      <div className="col-span-2">
                        <dt className="text-muted-foreground">Armadura:</dt>
                        <dd className="font-bold text-foreground">{product.reinforcement}</dd>
                      </div>
                    </dl>
                  </div>

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

      {/* MODAL LIGHTBOX PARA VER LA IMAGEN EN GRANDE Y CON ZOOM */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 cursor-default flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="overflow-auto max-h-[80vh] flex items-center justify-center p-2">
              <img
                src={zoomedImage.src}
                alt={zoomedImage.name}
                className="max-w-none w-auto h-auto min-w-full rounded-xl bg-slate-100 cursor-zoom-in hover:scale-125 transition-transform duration-300 object-contain"
              />
            </div>

            <div className="p-3 text-center border-t border-slate-100 bg-white">
              <h3 className="text-base font-bold text-slate-900 font-['Montserrat']">
                {zoomedImage.name}
              </h3>
              <p className="text-xs text-slate-500">
                Pasá el cursor o tocá sobre la imagen para inspeccionar en detalle
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
