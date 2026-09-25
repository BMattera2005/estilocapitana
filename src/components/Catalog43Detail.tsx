import React, { useState } from 'react';
import { products43x43, CeramicProduct } from '../data/products43';
import { buildStockWhatsAppUrl } from '@/lib/contact-links'; // O tu helper de WhatsApp

interface Catalog43DetailProps {
  onBack: () => void;
}

export const Catalog43Detail: React.FC<Catalog43DetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const finishes = ['Todos', 'Brillante', 'Satinado', 'Mate con Granilla', 'Colonial'];

  const filteredProducts = products43x43.filter((prod) => {
    const matchesFinish = selectedFinish === 'Todos' || prod.finish === selectedFinish;
    const matchesSearch = prod.name.toLowerCase().includes(search.toLowerCase()) ||
                          prod.line.toLowerCase().includes(search.toLowerCase()) ||
                          prod.designType.toLowerCase().includes(search.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  const handleWhatsAppQuote = (product: CeramicProduct) => {
    const message = `Hola Estilo Capitana, me interesa cotizar el piso cerámico ${product.name} (Formato ${product.format}, Acabado ${product.finish}). Quisiera consultar disponibilidad y precio por m².`;
    const url = `https://wa.me/5493512675960?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Barra superior de navegación */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <button 
            onClick={onBack}
            className="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1 mb-2"
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
            Ferrazzano — Formato 43×43 cm
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            Cerámica Salteña · Rendimiento estándar: 2.25 m² por caja (12 piezas / 32 kg) · Pallet de 48 cajas (108 m²)
          </p>
        </div>

        <a
          href="/catalogos/ferrazzano_43x43.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-neutral-300 rounded-lg text-sm font-bold text-neutral-700 hover:bg-neutral-50 shadow-sm"
        >
          Descargar Catálogo Completo (PDF) ↓
        </a>
      </div>

      {/* Controles de Filtro y Búsqueda */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {finishes.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFinish(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
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
          placeholder="Buscar por modelo o diseño (madera, mármol, cemento)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-neutral-200 rounded-lg px-3 py-2 text-sm w-full md:w-80 focus:outline-none focus:ring-1 focus:ring-sky-500"
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
                    // Si no encuentra la foto, muestra un placeholder prolijo
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
                    <span>Tránsito / Resistencia:</span>
                    <span className="font-semibold text-neutral-800">{p.traffic.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Caras / Trama:</span>
                    <span className="font-semibold text-neutral-800">{p.faces} caras</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Empaque por caja:</span>
                    <span className="font-semibold text-neutral-800">2.25 m² (32 kg)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón WhatsApp Lead */}
            <div className="p-4 pt-0">
              <button
                onClick={() => handleWhatsAppQuote(p)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <span>Solicitar Cotización por WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
