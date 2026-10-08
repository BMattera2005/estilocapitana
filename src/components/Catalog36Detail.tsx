// src/components/Catalog36Detail.tsx
import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search } from 'lucide-react';
import { products36x36, CeramicProduct36 } from '../data/products36';

interface Catalog36DetailProps {
  onBack: () => void;
}

export const Catalog36Detail: React.FC<Catalog36DetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const finishes = ['Todos', 'Brillante', 'Mate', 'Colonial'];

  const filteredProducts = products36x36.filter((prod) => {
    const matchesFinish = selectedFinish === 'Todos' || prod.finish === selectedFinish;
    const matchesSearch =
      prod.name.toLowerCase().includes(search.toLowerCase()) ||
      prod.line.toLowerCase().includes(search.toLowerCase()) ||
      prod.designType.toLowerCase().includes(search.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  const handleWhatsAppQuote = (p: CeramicProduct36) => {
    const phone = "5491161208162";
    const message = `Hola estilo.capitana, quisiera cotizar la cerámica Ferrazzano 36x36: ${p.name} (Línea: ${p.line}, Acabado: ${p.finish}).`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-4 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver a los Catálogos
      </button>

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
            Ferrazzano — Formato 36×36 cm
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal">
            Cerámica Salteña · Esmaltados: 2,33 m² (18 pzs / 33.9 kg) · Coloniales: 2,20 m² (17 pzs / 33.9 kg) · Pallet de 36 cajas
          </p>
        </div>

        <a
          href="/catalogos/ferrazzano_36.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Ver / descargar catálogo
        </a>
      </div>

      {/* BARRA UNIFICADA DE FILTROS Y BUSCADOR */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-4">
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
          {finishes.map((fn) => (
            <button
              key={fn}
              type="button"
              onClick={() => setSelectedFinish(fn)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                selectedFinish === fn
                  ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {fn}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o diseño..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>
      </div>

      <p className="text-xs text-slate-500 mb-6 font-normal">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
      </p>

      {/* Grilla de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200"
          >
            <div>
              <div className="w-full h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute top-2 right-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {p.finish}
                </span>
              </div>

              <div className="p-4">
                <div className="text-[11px] font-semibold text-slate-500 uppercase">
                  {p.line} · {p.colorOrDesign}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {p.name}
                </h3>

                <div className="space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-2">
                  <div className="flex justify-between">
                    <span>Tránsito / Uso:</span>
                    <span className="font-semibold text-slate-800">{p.traffic.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Superficie:</span>
                    <span className="font-semibold text-slate-800">{p.surface}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Empaque por caja:</span>
                    <span className="font-semibold text-slate-800">{p.packaging.sqmPerBox} m² ({p.packaging.piecesPerBox} pzs)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <button
                type="button"
                onClick={() => handleWhatsAppQuote(p)}
                className="w-full py-2.5 bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Solicitar Cotización por WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
