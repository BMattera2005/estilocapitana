// src/components/CatalogFullBodyDetail.tsx
import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search } from 'lucide-react';
import { productsFullBodyUnified, FullBodyProductUnified, FullBodyVariant } from '../data/productsFullBody';

interface CatalogFullBodyDetailProps {
  onBack: () => void;
}

// Subcomponente individual para manejar el estado de medida/terminación por tarjeta
const ProductCard: React.FC<{ product: FullBodyProductUnified }> = ({ product }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>(product.variants[0].format);
  const activeVariant = product.variants.find((v) => v.format === selectedFormat) || product.variants[0];
  const [selectedFinish, setSelectedFinish] = useState<string>(activeVariant.finishes[0]);

  // Si cambia el formato y el acabado no está en la nueva variante, actualizamos al primero
  const handleFormatChange = (fmt: "800x2400 mm" | "800x3000 mm") => {
    setSelectedFormat(fmt);
    const targetVar = product.variants.find((v) => v.format === fmt);
    if (targetVar && !targetVar.finishes.includes(selectedFinish as any)) {
      setSelectedFinish(targetVar.finishes[0]);
    }
  };

  const handleWhatsAppQuote = () => {
    const phone = "5491161208162";
    const message = `Hola estilo.capitana, me interesa cotizar la placa Sintered Stone ${product.name} (Medida: ${selectedFormat}, Acabado: ${selectedFinish}, Espesor: 15mm). Quisiera consultar disponibilidad y precio.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <div>
        {/* Imagen del producto */}
        <div className="w-full h-52 bg-slate-100 relative overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="text-center p-4">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              {product.series}
            </span>
            <span className="text-base font-bold text-slate-700">
              {product.name}
            </span>
          </div>

          <span className="absolute top-2.5 right-2.5 bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
            {product.thickness} · {product.body}
          </span>
        </div>

        {/* Información y selectores */}
        <div className="p-4">
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
            {product.series}
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 mb-4">
            {product.recommendedUses}
          </p>

          <div className="border-t border-slate-100 pt-3 space-y-3 text-xs">
            {/* Selector de Medida */}
            <div>
              <span className="block text-slate-600 font-medium mb-1.5">Seleccionar Medida:</span>
              <div className="flex flex-wrap gap-1.5">
                {product.variants.map((v) => (
                  <button
                    key={v.format}
                    type="button"
                    onClick={() => handleFormatChange(v.format)}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                      selectedFormat === v.format
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {v.format.replace(' mm', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Acabado */}
            <div>
              <span className="block text-slate-600 font-medium mb-1.5">Acabado disponible:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeVariant.finishes.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFinish(f)}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                      selectedFinish === f
                        ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Ficha Dinámica según la selección */}
            <div className="bg-slate-50 p-2.5 rounded-lg space-y-1 text-slate-600 text-[11px]">
              <div className="flex justify-between">
                <span>Rendimiento placa:</span>
                <span className="font-semibold text-slate-800">{activeVariant.sqm} m²</span>
              </div>
              <div className="flex justify-between">
                <span>Peso por unidad:</span>
                <span className="font-semibold text-slate-800">{activeVariant.weightKg} kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón WhatsApp */}
      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={handleWhatsAppQuote}
          className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" />
          <span>Cotizar {selectedFormat.replace(' mm', '')} por WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export const CatalogFullBodyDetail: React.FC<CatalogFullBodyDetailProps> = ({ onBack }) => {
  const [formatFilter, setFormatFilter] = useState<string>('Todos');
  const [finishFilter, setFinishFilter] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const formats = ['Todos', '800x2400 mm', '800x3000 mm'];
  const finishes = ['Todos', 'Glossy', 'Matt'];

  const filteredProducts = productsFullBodyUnified.filter((prod) => {
    const matchesFormat = formatFilter === 'Todos' || prod.allFormats.includes(formatFilter);
    const matchesFinish = finishFilter === 'Todos' || prod.allFinishes.includes(finishFilter);
    const matchesSearch =
      prod.name.toLowerCase().includes(search.toLowerCase()) ||
      prod.series.toLowerCase().includes(search.toLowerCase());
    return matchesFormat && matchesFinish && matchesSearch;
  });

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

      {/* Cabecera */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Novedad Importada
            </span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
              SHOP · SINTERED STONE FULL BODY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Habitat — Full Body Stone Collection
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal">
            Placas Sinterizadas 15 mm · Diseños continuos para mesadas, islas y frentes · Formatos 800×2400 y 800×3000 mm
          </p>
        </div>

        {/* Descargar Catálogo Oficial */}
        <a
          href="/catalogos/habitat_ma_full_body.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          Ver / descargar catálogo
        </a>
      </div>

      {/* Barra de Filtros Superiores */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Filtro Medidas */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <span className="text-[11px] font-semibold text-slate-500 px-2">Medida:</span>
            {formats.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormatFilter(f)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  formatFilter === f
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.replace(' mm', '')}
              </button>
            ))}
          </div>

          {/* Filtro Acabados */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <span className="text-[11px] font-semibold text-slate-500 px-2">Acabado:</span>
            {finishes.map((fn) => (
              <button
                key={fn}
                type="button"
                onClick={() => setFinishFilter(fn)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  finishFilter === fn
                    ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {fn}
              </button>
            ))}
          </div>
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
          />
        </div>
      </div>

      <p className="text-xs text-slate-500 mb-6 font-normal">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo encontrado' : 'modelos encontrados'}
      </p>

      {/* Grilla Limpia con 1 tarjeta por diseño */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
