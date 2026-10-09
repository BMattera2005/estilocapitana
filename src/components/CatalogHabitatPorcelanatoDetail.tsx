import { useState } from "react";
import { ArrowLeft, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productsHabitatPorcelanato } from "@/data/productsHabitatPorcelanato";
import { buildWhatsAppUrl } from "@/lib/quote-message";

export function CatalogHabitatPorcelanatoDetail({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<string>("Todos");
  const [selectedTexture, setSelectedTexture] = useState<string>("Todos");
  const [zoomedImage, setZoomedImage] = useState<{ src: string; name: string } | null>(null);

  // Filtra descartando modelos ocultos con isVisible: false
  const visibleProducts = productsHabitatPorcelanato.filter((p) => p.isVisible !== false);

  const filteredProducts = visibleProducts.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.series.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFormat = selectedFormat === "Todos" || p.format === selectedFormat;
    const matchesTexture =
      selectedTexture === "Todos" ||
      (p.finishes && p.finishes.includes(selectedTexture as any)) ||
      p.finishText?.toLowerCase().includes(selectedTexture.toLowerCase());

    return matchesSearch && matchesFormat && matchesTexture;
  });

  return (
    <div className="bg-surface min-h-screen">
      {/* CABECERA UNIFICADA DE MARCA */}
      <section className="brand-watermark-section border-b border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden">
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
                  Novedad Importada
                </span>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                  CATÁLOGO · PORCELANATO ESMALTADO
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Montserrat']">
                Habitat — Luxury Stone 120×120
              </h1>
              <p className="text-sm text-slate-500 mt-2 font-normal leading-relaxed max-w-3xl">
                Colección Habitat MA · Formato 120×120 cm (2.88 m² / 60 kg) · Venta mayorista por pallet
              </p>
            </div>
          </div>

          {/* BARRA DE FILTROS Y BÚSQUEDA TÉCNICA */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-4 shadow-sm overflow-hidden">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <span className="text-slate-400 font-semibold uppercase">MEDIDA:</span>
              {["Todos", "120x120 cm"].map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setSelectedFormat(fmt)}
                  className={`rounded-md px-3 py-1.5 transition-colors cursor-pointer ${
                    selectedFormat === fmt
                      ? "bg-cyan-600 text-white font-bold"
                      : "bg-surface hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  {fmt}
                </button>
              ))}

              <span className="ml-2 text-slate-400 font-semibold uppercase">TEXTURA:</span>
              {["Todos", "Glossy", "Velvet", "Matt"].map((tex) => (
                <button
                  key={tex}
                  type="button"
                  onClick={() => setSelectedTexture(tex)}
                  className={`rounded-md px-3 py-1.5 transition-colors cursor-pointer ${
                    selectedTexture === tex
                      ? "bg-cyan-600 text-white font-bold"
                      : "bg-surface hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  {tex}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar modelo o serie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-border bg-background pl-9 pr-4 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GRILLA DE PRODUCTOS BLINDADA CONTRA DESBORDES */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-xs font-normal text-slate-500 mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? "modelo disponible" : "modelos disponibles"}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const whatsappUrl = buildWhatsAppUrl(
              `Hola Estilo Capitana, quisiera consultar disponibilidad y cotización del modelo ${product.name} (${product.format}) de la colección Luxury Stone 120x120.`,
            );

            return (
              <article
                key={product.id}
                className="flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                {/* TARJETA DE IMAGEN Y ACCESO A LIGHTBOX */}
                <div
                  className="relative h-64 w-full bg-slate-100 overflow-hidden cursor-pointer group"
                  onClick={() => setZoomedImage({ src: product.image, name: product.name })}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.finishText && (
                    <span className="absolute top-3 right-3 rounded-md bg-slate-900/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      {product.finishText}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                    Hacé clic para ampliar 🔍
                  </div>
                </div>

                {/* DETALLES Y ESPECIFICACIONES TÉCNICAS */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-cyan-600 tracking-wider block truncate">
                      {product.series} · {product.faces}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-['Montserrat'] mt-1 truncate">
                      {product.name}
                    </h3>

                    <dl className="mt-4 grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-3">
                      <div>
                        <dt className="text-slate-400 font-normal">Formato:</dt>
                        <dd className="font-bold text-slate-800">{product.format}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 font-normal">Caja:</dt>
                        <dd className="font-bold text-slate-800">{product.sqmPerBox} m² ({product.piecesPerBox} pzs)</dd>
                      </div>
                    </dl>
                  </div>

                  {/* BOTÓN WHATSAPP CORPORATIVO */}
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

      {/* MODAL LIGHTBOX CON ZOOM */}
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
                Pasá el cursor o tocá sobre la imagen para inspeccionar la textura
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
