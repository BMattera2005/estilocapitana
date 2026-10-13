// src/components/CatalogLaminasDetail.tsx

import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search, X } from 'lucide-react';
import { productsLaminas } from '../data/productsLaminas';

interface CatalogLaminasDetailProps {
  onBack: () => void;
}

export const CatalogLaminasDetail: React.FC<CatalogLaminasDetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Eliminamos "Brillante" de los botones de filtro
  const finishes = ['Todos', 'Mate', 'Glossy', 'Satin'];

  const filteredProducts = productsLaminas.filter((prod) => {
    // Control opcional de visibilidad (isVisible: false no se muestra)
    if (prod.isVisible === false) return false;

    // Normalización de coincidencia para "Mate" / "Matt" y "Satin"
    let matchesFinish = false;
    if (selectedFinish === 'Todos') {
      matchesFinish = true;
    } else if (selectedFinish === 'Mate') {
      matchesFinish = prod.finish === 'Matt' || prod.finish === 'Mate';
    } else {
      matchesFinish = prod.finish === selectedFinish;
    }

    const matchesSearch =
      prod.name.toLowerCase().includes(search.toLowerCase()) ||
      prod.code.toLowerCase().includes(search.toLowerCase());

    return matchesFinish && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8 font-['Montserrat']">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div>
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-3 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a las Colecciones</span>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                Sintered Stone
              </span>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                CATÁLOGO · LÁMINAS 120×270 CM
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Habitat — Láminas Sinterizadas 120×270 cm
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Placas sinterizadas de gran formato · Espesor 9 mm · Rendimiento: 3.24 m² por placa
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/catalogos/slabs_sintered_stone.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer uppercase"
            >
              <Download className="w-4 h-4" />
              <span>Ver / Descargar Catálogo</span>
            </a>
          </div>
        </div>

        {/* Filtros de Textura y Buscador */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              TEXTURA:
            </span>
            <div className="flex flex-wrap gap-1">
              {finishes.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setSelectedFinish(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedFinish === f
                      ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar modelo o código..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all bg-slate-50/50"
            />
          </div>
        </div>

        {/* Conteo de modelos */}
        <div className="text-xs text-slate-500 px-1 font-medium">
          {filteredProducts.length} modelos disponibles
        </div>

       {/* Grilla de Productos */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col group hover:border-slate-300 transition-all duration-200"
    >
      {/* Contenedor de Imagen */}
      <div
        className="relative h-80 bg-slate-100 overflow-hidden cursor-pointer"
        onClick={() => setSelectedImage(product.image)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Píldora Flotante Negra Única (Solo Textura) */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded bg-slate-900 text-white text-[10px] font-semibold uppercase tracking-wider shadow-sm">
            {product.finish}
          </span>
        </div>
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <div className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider mb-1">
            CÓDIGO: {product.code}
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {product.name}
          </h3>
        </div>

        <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
          <div className="flex justify-between">
            <span className="text-slate-400">Diseño / Caras:</span>
            <span className="font-semibold text-slate-700">{product.faces}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Rendimiento:</span>
            <span className="font-semibold text-slate-700">{product.sqmPerSlab} m² / placa</span>
          </div>
        </div>

        <a
          href={`https://wa.me/5491161208162?text=${encodeURIComponent(
            `Hola Estilo Capitana, me interesa cotizar la lámina sinterizada ${product.name} (${product.code} - Textura${product.finish}).`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar Stock por WhatsApp</span>
        </a>
      </div>
    </div>
  ))}
</div>

      {/* Lightbox Modal de Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
