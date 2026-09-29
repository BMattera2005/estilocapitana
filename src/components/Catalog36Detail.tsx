// src/components/Catalog36Detail.tsx
import React, { useState } from 'react';
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

  const handleWhatsAppQuote = (product: CeramicProduct36) => {
    const phone = "5493512675960";
    const message = `Hola Estilo Capitana, me interesa cotizar el piso cerámico ${product.name} (Formato ${product.format}, Acabado ${product.finish}). Quisiera consultar disponibilidad y precio por m².`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Botón Volver y Cabecera */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <button 
            onClick={onBack}
            className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 mb-2 cursor-pointer"
          >
            ← Volver a todos los catálogos
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wide">
              Industria Argentina
            </span>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wide">
              Pisos Cerámicos
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-neutral-900 mt-1">
            Ferrazzano — Formato 36×36 cm
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            Cerámica Salteña · Esmaltados: 2.33 m² (18 pzs / 33.9 kg) · Coloniales: 2.20 m² (17 pzs / 33.9 kg) · Pallet de 36 cajas
          </p>
        </div>

        <a
          href="/catalogos/ferrazzano_36x36.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm"
        >
          Descargar Catálogo Completo (PDF) ↓
        </a>
      </div>

      {/* Filtros por Acabado y Buscador */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {finishes.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFinish(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                selectedFinish === f
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Buscar modelo (burano, calacatta, animaná)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-neutral-300 rounded-lg px-3 py-2 text-sm w-full md:w-80 focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>

      {/* Grilla de Modelos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              {/* Contenedor de Imagen con Fallback */}
              <div className="w-full h-48 bg-neutral-100 relative overflow-hidden flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-center p-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-1">
                    {p.designType}
                  </span>
                  <span className="text-base font-bold text-neutral-700">
                    {p.name}
                  </span>
                </div>

                <span className="absolute top-2 right-2 bg-neutral-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {p.finish}
                </span>
              </div>

              {/* Ficha Técnica */}
              <div className="p-4">
                <div className="text-[11px] font-semibold text-neutral-500 uppercase">
                  {p.line} · {p.colorOrDesign}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {p.name}
                </h3>

                <div className="space-y-1 text-xs text-neutral-600 border-t border-neutral-100 pt-2">
                  <div className="flex justify-between">
                    <span>Tránsito / Uso:</span>
                    <span className="font-semibold text-neutral-800">{p.traffic.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Superficie:</span>
                    <span className="font-semibold text-neutral-800">{p.surface}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Empaque por caja:</span>
                    <span className="font-semibold text-neutral-800">{p.packaging.sqmPerBox} m² ({p.packaging.piecesPerBox} pzs)</span>
                  </div>
                  {p.specialFeature && (
                    <div className="text-[11px] text-amber-700 font-medium pt-1">
                      ★ {p.specialFeature}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botón WhatsApp de Cotización */}
            <div className="p-4 pt-0">
              <button
                onClick={() => handleWhatsAppQuote(p)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                Solicitar Cotización por WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
