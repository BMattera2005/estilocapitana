// src/components/Catalog43Detail.tsx
import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search } from 'lucide-react';
import { products43x43, CeramicProduct } from '../data/products43';

interface Catalog43DetailProps {
  onBack: () => void;
}

export const Catalog43Detail: React.FC<Catalog43DetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const finishes = ['Todos', 'Brillante', 'Satinado', 'Mate con Granilla', 'Colonial'];

  const filteredProducts = products43x43.filter((prod) => {
    const matchesFinish = selectedFinish === 'Todos' || prod.finish === selectedFinish;
    const matchesSearch =
      prod.name.toLowerCase().includes(search.toLowerCase()) ||
      prod.line.toLowerCase().includes(search.toLowerCase()) ||
      prod.designType.toLowerCase().includes(search.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  const handleWhatsAppQuote = (product: CeramicProduct) => {
    const phone = "5491161208162";
    const message = `Hola estilo.capitana, me interesa cotizar el piso cerámico ${product.name} (Formato ${product.format}, Acabado ${product.finish}). Quisiera consultar disponibilidad y precio por m².`;
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

      {/* Cabecera y Botón Descargar Catálogo */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Industria Argentina
            </span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
              SHOP · PISOS CERÁMICOS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ferrazzano 43×43 cm
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal">
            Cerámica Salteña · Rendimiento estándar: 2,25 m² por caja (12 piezas / 32 kg) · Pallet de 48 cajas (108 m²)
          </p>
        </div>

        {/* Botón Descargar Catálogo Oficial */}
        <a
          href="/catalogos/ferrazzano_43x43.pdf"
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
            placeholder="Buscar modelo o diseño (madera, mármol, piedras)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>
      </div>

      <p className="text-xs text-slate-500 mb-8 font-normal">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
      </p>

      {/* Grilla de Modelos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <div>
              {/* Imagen con Fallback */}
              <div className="w-full h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-center p-4">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    {p.designType}
                  </span>
                  <span className="text-base font-bold text-slate-700">
                    {p.name}
                  </span>
                </div>

                <span className="absolute top-2.5 right-2.5 bg-slate-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {p.finish}
                </span>
              </div>

              {/* Ficha Técnica */}
              <div className="p-4">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                  {p.line} · {p.colorOrDesign}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {p.name}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
                  <div className="flex justify-between">
                    <span>Tránsito / Resistencia:</span>
                    <span className="font-semibold text-slate-800">{p.traffic.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Caras / Trama:</span>
                    <span className="font-semibold text-slate-800">{p.faces} caras</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Empaque por caja:</span>
                    <span className="font-semibold text-slate-800">2,25 m² (12 pzs · 32 kg)</span>
                  </div>
                  {p.shadeVariation && (
                    <div className="text-[11px] text-teal-700 font-medium pt-0.5">
                      Variación tonal: {p.shadeVariation}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botón WhatsApp de Cotización */}
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
