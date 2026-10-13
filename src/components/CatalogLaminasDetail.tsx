import React, { useState } from "react";
import { ArrowLeft, MessageCircle, Download, Search } from "lucide-react";
import { productsLaminas } from "../data/productsLaminas";
import { ZoomableImage } from "@/components/catalog/ZoomableImage";

interface CatalogLaminasDetailProps {
  onBack: () => void;
}

export const CatalogLaminasDetail: React.FC<CatalogLaminasDetailProps> = ({ onBack }) => {
  const [filterFinish, setFilterFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const rawList = Array.isArray(productsLaminas) ? productsLaminas : [];

  const finishes = [
    "Todos",
    ...Array.from(
      new Set(
        rawList
          .map((p) => p?.finish)
          .filter((f) => f != null)
      )
    ),
  ];

  const filteredProducts = rawList.filter((product) => {
    if (!product) return false;
    const matchesFinish = filterFinish === "Todos" || product.finish === filterFinish;
    const name = product.name ? product.name.toLowerCase() : "";
    const code = product.code ? product.code.toLowerCase() : "";
    const query = searchQuery.toLowerCase();
    return matchesFinish && (name.includes(query) || code.includes(query));
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 font-['Montserrat']">
      {/* Tarjeta / Contenedor Superior */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            {/* Botón Volver a las Colecciones */}
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors cursor-pointer mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a las Colecciones</span>
            </button>

            {/* Badges y Categoría */}
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[11px] font-medium">
                Novedad Importada
              </span>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                CATÁLOGO · SINTERED STONE
              </span>
            </div>

            {/* Título Principal H1 */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Habitat — Láminas 120×270 cm
            </h1>

            {/* Descripción Técnica */}
            <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed font-normal">
              Colección Habitat MA · Formato 120×270 cm (3.24 m² / 46 kg) · Venta mayorista por placa
            </p>
          </div>

          {/* Botón Superior Ver / Descargar Catálogo con el Color Cian Corporativo Corregido */}
          <div className="shrink-0">
            <a
              href="/catalogos/slabs_sintered_stone.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Ver / Descargar Catálogo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Filtros y Buscador */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Filtro por Medida */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase text-slate-400">MEDIDA:</span>
            <div className="flex gap-1">
              <button
                type="button"
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-xs cursor-default"
              >
                120x270 cm
              </button>
            </div>
          </div>

          {/* Filtro por Textura */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase text-slate-400">TEXTURA:</span>
            <div className="flex gap-1 flex-wrap">
              {finishes.map((finish) => {
                const isActive = filterFinish === finish;
                return (
                  <button
                    key={finish}
                    type="button"
                    onClick={() => setFilterFinish(finish)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {finish}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o serie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Grilla de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const whatsappMsg = `Hola estilo.capitana, consulto cotización por la Lámina ${product.name} (Código: ${product.code}, Medida: ${product.format}, Textura: ${product.finish}).`;
          const whatsappUrl = `https://wa.me/5491161208162?text=${encodeURIComponent(whatsappMsg)}`;

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Imagen con Zoom Modal */}
                <div className="relative w-full h-72 bg-slate-100 overflow-hidden group">
                  <ZoomableImage
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="pointer-events-none absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {product.finish}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[11px] font-bold text-sky-600 block mb-0.5">
                    {product.code}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {product.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Textura:</span>
                      <span className="font-semibold text-slate-800">{product.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Diseño:</span>
                      <span className="font-semibold text-slate-800">{product.faces}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Rendimiento:</span>
                      <span className="font-semibold text-slate-800">{product.sqmPerSlab} m² / placa</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 text-white font-semibold text-xs rounded-lg transition-all shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
