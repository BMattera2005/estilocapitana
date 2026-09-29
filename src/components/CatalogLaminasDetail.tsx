// src/components/CatalogLaminasDetail.tsx
import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search } from 'lucide-react';
import { productsLaminas, LaminaItem } from '../data/productsLaminas';

interface CatalogLaminasDetailProps {
  onBack: () => void;
}

export const CatalogLaminasDetail: React.FC<CatalogLaminasDetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const finishes = [
    'Todos',
    'Glossy',
    'Digital Glaze',
    'Composite Soft Polish',
    'Matte',
    'Micro-Mold',
  ];

  const filteredProducts = productsLaminas.filter((item) => {
    const matchesFinish =
      selectedFinish === 'Todos' ||
      item.finish === selectedFinish ||
      (selectedFinish === 'Micro-Mold' && (item.finish === 'Micro-Mold' || item.finish === 'Replica Glaze' || item.finish === 'Semi-Polished Granules'));
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  const handleWhatsAppQuote = (item: LaminaItem) => {
    const phone = "5491161208162";
    const message = `Hola estilo.capitana, me interesa cotizar la placa Sintered Stone ${item.name} [Código: ${item.code}] (Formato 1200x2700x9 mm, Acabado: ${item.finish}). Quisiera consultar disponibilidad y cotización.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Botón Volver */}
      <button 
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-4 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver a los Catálogos
      </button>

      {/* Cabecera y Botón Descargar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Novedad Importada
            </span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
              SHOP · SINTERED STONE LÁMINAS XL
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Habitat — Láminas 120×270 cm
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal">
            Sintered Stone 9 mm de espesor · Placas continuas XL de 3.24 m² · Diseños Bookmatch y vetas infinitas
          </p>
        </div>

        {/* Botón Descargar Catálogo Oficial */}
        <a
          href="/catalogos/slabs_sintered_stone.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Ver / descargar catálogo
        </a>
      </div>

      {/* Filtros por Acabado y Buscador */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-3">
        <div className="flex flex-wrap gap-2">
          {finishes.map((f) => {
            const isSelected = selectedFinish === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setSelectedFinish(f)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar por nombre o código..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>
      </div>

      <p className="text-xs text-slate-500 mb-8 font-normal">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
      </p>

      {/* Grilla de Placas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <div>
              {/* Imagen con Fallback */}
              <div className="w-full h-52 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-center p-4">
                  <span className="text-[11px] font-mono tracking-wider text-slate-400 font-semibold block mb-1">
                    {p.code}
                  </span>
                  <span className="text-base font-bold text-slate-700">
                    {p.name}
                  </span>
                </div>

                <span className="absolute top-2.5 right-2.5 bg-slate-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {p.finish}
                </span>
              </div>

              {/* Ficha Técnica de la placa */}
              <div className="p-4">
                <div className="text-[11px] font-mono text-cyan-700 font-bold uppercase tracking-wide">
                  {p.code}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {p.name}
                </h3>
                <div className="text-xs text-slate-400 mb-3">
                  {p.faces}
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
                  <div className="flex justify-between">
                    <span>Espesor:</span>
                    <span className="font-semibold text-slate-800">{p.thickness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Formato:</span>
                    <span className="font-semibold text-slate-800">{p.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rendimiento:</span>
                    <span className="font-semibold text-slate-800">{p.sqm} m² / placa</span>
                  </div>
                   <div className="flex justify-between">
                      <span>Peso placa:</span>
                     <span className="font-semibold text-slate-800">68 kg</span>
                    </div>
                  <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-50">
                    Uso: {p.recommendedSpaces}
                  </div>
                </div>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="p-4 pt-0">
              <button
                type="button"
                onClick={() => handleWhatsAppQuote(p)}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Solicitar cotización por WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
