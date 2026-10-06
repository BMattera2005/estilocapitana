// src/components/CatalogHabitatPorcelanatoDetail.tsx
import React, { useState } from 'react';
import { MessageCircle, Search } from 'lucide-react';
import { productsHabitatPorcelanato, HabitatPorcelanatoItem } from '../data/productsHabitatPorcelanato';
import { CatalogDetailHeader } from './catalog/CatalogDetailHeader';

interface CatalogHabitatPorcelanatoDetailProps {
  onBack: () => void;
}

export const CatalogHabitatPorcelanatoDetail: React.FC<CatalogHabitatPorcelanatoDetailProps> = ({ onBack }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('Todos');
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const formats = ['Todos', '600x1200 mm', '1200x1200 mm'];
  const finishes = ['Todos', 'Glossy', 'Velvet', 'Rustic'];

  const filteredProducts = productsHabitatPorcelanato.filter((prod) => prod.isVisible !== false).filter((prod) => {
  // Coincidencia de formato
  const matchesFormat = selectedFormat === "Todos" || prod.format === selectedFormat;

  // Coincidencia de acabado (revisa si el array contiene el acabado o si es "Todos")
  const matchesFinish =
    selectedFinish === "Todos" || prod.finishes.includes(selectedFinish as any);

  // Coincidencia de búsqueda
  const matchesSearch =
    prod.name.toLowerCase().includes(search.toLowerCase()) ||
    prod.series.toLowerCase().includes(search.toLowerCase());

  return matchesFormat && matchesFinish && matchesSearch;
});
  const handleWhatsAppQuote = (item: HabitatPorcelanatoItem) => {
    const phone = "5491161208162";
    const message = `Hola estilo.capitana, me interesa cotizar el porcelanato ${item.name} (Formato: ${item.format}, Acabado: ${item.finishText}). Quisiera consultar disponibilidad por pallet.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CatalogDetailHeader
        origin="Novedad Importada"
        category="Porcelanato Esmaltado"
        title="Habitat — Porcelanato Esmaltado"
        description="Colección Habitat MA · Formatos 60×120 cm (1.44 m² / 30 kg) y 120×120 cm (2.88 m² / 60 kg) · Venta mayorista por pallet"
        downloadUrl="/catalogos/coleccion_habitat_MA.pdf"
        onBack={onBack}
      />

      {/* Filtros Combinados y Buscador */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-3">
        <div className="flex flex-wrap items-center gap-2">
          {/* Formatos */}
          <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
            {formats.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setSelectedFormat(f)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  selectedFormat === f
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Acabados */}
          <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
            {finishes.map((fn) => (
              <button
                key={fn}
                type="button"
                onClick={() => setSelectedFinish(fn)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  selectedFinish === fn
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {fn}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o serie..."
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
                    {p.series}
                  </span>
                  <span className="text-base font-bold text-slate-700">
                    {p.name}
                  </span>
                </div>

                <span className="absolute top-2.5 right-2.5 bg-slate-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  {p.finishText}
                </span>
              </div>

              {/* Ficha Técnica */}
              <div className="p-4">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                  {p.series} · {p.faces}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {p.name}
                </h3>

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
                    <span>Caja:</span>
                    <span className="font-semibold text-slate-800">{p.sqmPerBox} m² ({p.piecesPerBox} pzs · {p.weightBoxKg} kg)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pallet:</span>
                    <span className="font-semibold text-slate-800">{p.boxesPerPallet} cajas ({p.sqmPerPallet} m² · {p.weightPalletKg} kg)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="p-4 pt-0">
              <button
                type="button"
                onClick={() => handleWhatsAppQuote(p)}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-primary-foreground bg-brand-gradient hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Solicitar cotización por WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
