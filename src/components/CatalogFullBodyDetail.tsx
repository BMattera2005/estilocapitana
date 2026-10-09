import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search } from 'lucide-react';
import { productsFullBody, FullBodyProductItem } from '../data/productsFullBody';
import { ZoomableImage } from '@/components/catalog/ZoomableImage';

interface CatalogFullBodyDetailProps {
  onBack: () => void;
}

export const CatalogFullBodyDetail: React.FC<CatalogFullBodyDetailProps> = ({ onBack }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('Todos');
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const formats = ['Todos', '80x240 cm'];
  const finishes = ['Todos', 'Glossy', 'Matt'];

  const filteredProducts = productsFullBody.filter((item) => {
    const matchesFormat = selectedFormat === 'Todos' || item.allFormats.includes(selectedFormat);
    const matchesFinish = selectedFinish === 'Todos' || item.allFinishes.includes(selectedFinish);
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.series.toLowerCase().includes(search.toLowerCase());
    return matchesFormat && matchesFinish && matchesSearch;
  });

  const handleWhatsAppQuote = (item: FullBodyProductItem) => {
    const phone = "5491161208162";
    const message = `Hola Estilo Capitana, me interesa cotizar la placa Sintered Stone Full Body ${item.name} (${item.series}, Espesor: 1,5 cm). Quisiera consultar disponibilidad.`;
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
        Volver a las Colecciones
      </button>

      {/* Cabecera */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Novedad Importada
            </span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
              SHOP · SINTERED STONE FULL BODY 15 MM
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Montserrat']">
            Habitat — Full Body 1,5 cm
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal">
            Superficies de Sintered Stone de masa homogénea (1,5 cm) para mesadas de cocina, islas y mobiliario técnico.
          </p>
        </div>

        {/* Botón superior de descarga */}
        <a
          href="/catalogos/habitat_ma_full_body.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Ver/Descargar Catalogo</span>
        </a>
      </div>

      {/* BARRA DE FILTROS Y BUSCADOR */}
      <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-500">Formato:</span>
            {formats.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setSelectedFormat(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFormat === f
                    ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-500">Textura:</span>
            {finishes.map((fn) => (
              <button
                key={fn}
                type="button"
                onClick={() => setSelectedFinish(fn)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFinish === fn
                    ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {fn}
              </button>
            ))}
          </div>
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-700 font-bold pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o serie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-400 rounded-lg text-xs font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 shadow-xs transition-all"
          />
        </div>
      </div>

      <p className="text-xs text-slate-500 mb-6 font-normal">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
      </p>

      {/* Grilla de Modelos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            <div>
              <div className="w-full h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <ZoomableImage
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover block"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/85 text-white backdrop-blur-xs shadow-xs">
                    1,5 cm Masa Homogénea
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-[11px] font-semibold text-sky-600 uppercase tracking-wide mb-1">
                  {p.series}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-['Montserrat'] leading-tight">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  {p.recommendedUses}
                </p>

                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Formatos:</span>
                    <span className="font-semibold text-slate-800">{p.allFormats.join(' / ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Acabados:</span>
                    <span className="font-semibold text-slate-800">{p.allFinishes.join(' / ')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                type="button"
                onClick={() => handleWhatsAppQuote(p)}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Cotizar por WhatsApp</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CatalogFullBodyDetail;
