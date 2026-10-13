import React, { useState } from "react";
import { ArrowLeft, MessageCircle, FileText, Search, X } from "lucide-react";
import { productsLaminas, type LaminaProductItem } from "../data/productsLaminas";

interface CatalogLaminasDetailProps {
  onBack: () => void;
}

export const CatalogLaminasDetail: React.FC<CatalogLaminasDetailProps> = ({ onBack }) => {
  const [filterFinish, setFilterFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string } | null>(null);

  const rawList = Array.isArray(productsLaminas) ? productsLaminas : [];

  const finishes = [
    "Todos",
    ...Array.from(
      new Set(
        rawList
          .map((p) => p?.finish)
          .filter((f): f is string => Boolean(f))
      )
    ),
  ];

  const filteredProducts = rawList.filter((product) => {
    if (!product) return false;
    const matchesFinish = filterFinish === "Todos" || product.finish === filterFinish;
    const name = product.name ? product.name.toLowerCase() : "";
    const code = product.code ? product.code.toLowerCase() : "";
    const query = searchQuery.toLowerCase();
    const matchesSearch = name.includes(query) || code.includes(query);
    return matchesFinish && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Botón Volver y Enlace PDF */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a las Colecciones
        </button>

        <a
          href="/catalogos/slabs_sintered_stone.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          Descargar PDF Oficial Láminas
        </a>
      </div>

      {/* Encabezado */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
          Slabs Sintered Stone
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1 font-['Montserrat']">
          Habitat — Láminas 120×270 cm
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl text-sm leading-relaxed">
          Placas sinterizadas continuas de gran escala para revestimientos completos de piso a techo, mesadas y arquitectura sin juntas visibles.
        </p>
      </div>

      {/* Barra de Filtros y Buscador */}
      <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold uppercase text-slate-500">Textura:</span>
          {finishes.map((finish) => (
            <button
              key={finish}
              type="button"
              onClick={() => setFilterFinish(finish)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterFinish === finish
                  ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {finish}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-700 font-bold pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o código..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-400 rounded-lg text-xs font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 shadow-xs transition-all"
          />
        </div>
      </div>

      {/* Grilla de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const whatsappMsg = `Hola estilo.capitana, consulto cotización por la Lámina ${product.name} (Código: ${product.code}, Medida: ${product.format}, Espesor: ${product.thickness}, Textura: ${product.finish}).`;
          const whatsappUrl = `https://wa.me/5491161208162?text=${encodeURIComponent(whatsappMsg)}`;

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Imagen del Producto */}
                <div
                  className="relative w-full h-72 bg-slate-100 overflow-hidden cursor-pointer group"
                  onClick={() => setZoomedImage({ src: product.image, title: product.name })}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                      {product.finish}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[11px] font-bold text-sky-600 block mb-0.5">
                    {product.code}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat'] leading-tight">
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
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-semibold text-xs rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Zoom / Lightbox */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.title}
              className="w-full h-[75vh] object-contain rounded-xl bg-slate-100"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-slate-900 font-['Montserrat']">
                {zoomedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
