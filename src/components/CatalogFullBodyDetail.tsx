import React, { useState } from 'react';
import {
  ArrowLeft,
  Download,
  MessageCircle,
  Search,
  Minus,
  Plus,
  Layers,
  Box,
  Grid,
} from 'lucide-react';
import { productsFullBody, FullBodyProductItem } from '../data/productsFullBody';
import { ZoomableImage } from '@/components/catalog/ZoomableImage';

interface CatalogFullBodyDetailProps {
  onBack: () => void;
}

// Componente de Tarjeta individual con la Calculadora de Unidades Integrada
const ProductCardFullBody: React.FC<{ item: FullBodyProductItem }> = ({ item }) => {
  // Datos del producto (Sintered Stone Full Body 15 mm)
  const sqmPerPiece = 1.92;
  const kgPerPiece = 67;

  const [pallets, setPallets] = useState<number>(1);
  const [boxes, setBoxes] = useState<number>(1); // En placas XL, equivalen a piezas/placas
  const [sqm, setSqm] = useState<number>(sqmPerPiece);

  const handlePalletsChange = (val: number) => {
    const newPallets = Math.max(1, val);
    setPallets(newPallets);
    setBoxes(newPallets * 20); 
    setSqm(Number((newPallets * 20 * sqmPerPiece).toFixed(2)));
  };

  const handleBoxesChange = (val: number) => {
    const newBoxes = Math.max(1, val);
    setBoxes(newBoxes);
    const calculatedPallets = Math.max(1, Math.round(newBoxes / 20));
    setPallets(calculatedPallets);
    setSqm(Number((newBoxes * sqmPerPiece).toFixed(2)));
  };

  const handleSqmChange = (val: number) => {
    const newSqm = Math.max(0.1, val);
    setSqm(newSqm);
    const calculatedBoxes = Math.max(1, Math.ceil(newSqm / sqmPerPiece));
    setBoxes(calculatedBoxes);
    setPallets(Math.max(1, Math.ceil(calculatedBoxes / 20)));
  };

  const totalKg = Number((boxes * kgPerPiece).toFixed(0));
  const totalTons = (totalKg / 1000).toFixed(2);

  const handleWhatsAppQuote = () => {
    const phone = "5491161208162";
    const message = `Hola Estilo Capitana, me interesa cotizar la placa Sintered Stone Full Body ${item.name} (${item.series}, Espesor: 1,5 cm). Cantidad requerida: ${pallets} pallet(s) (${boxes} placas / ${sqm} m² / ${totalTons} tn). Quisiera consultar disponibilidad.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200">
      <div>
        {/* Imagen del Producto */}
        <div className="w-full h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
          <ZoomableImage
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover block"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="pointer-events-none absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
              {item.allFinishes && item.allFinishes.length > 0 ? item.allFinishes.join(' / ') : 'Glossy'}
            </span>
          </div>
        </div>

        {/* Ficha e Información */}
        <div className="p-5">
          <div className="text-[11px] font-semibold text-sky-600 uppercase tracking-wide mb-1">
            {item.series}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 font-['Montserrat'] leading-tight">
            {item.name}
          </h3>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
            {item.recommendedUses}
          </p>

          <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Formatos:</span>
              <span className="font-semibold text-slate-800">{item.allFormats.join(' / ')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Acabados:</span>
              <span className="font-semibold text-slate-800">{item.allFinishes.join(' / ')}</span>
            </div>
          </div>

          {/* CALCULADORA DE UNIDADES VERTICAL */}
          <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
              Calculadora de Unidades
            </span>

            <div className="space-y-2">
              {/* Fila 1: Pallets */}
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                  <Layers className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Pallets</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePalletsChange(pallets - 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={pallets}
                    onChange={(e) => handlePalletsChange(parseInt(e.target.value) || 1)}
                    className="w-12 text-center font-bold text-sm text-slate-900 focus:outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => handlePalletsChange(pallets + 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Fila 2: Placas / Cajas */}
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                  <Box className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Placas</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleBoxesChange(boxes - 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={boxes}
                    onChange={(e) => handleBoxesChange(parseInt(e.target.value) || 1)}
                    className="w-12 text-center font-bold text-sm text-slate-900 focus:outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => handleBoxesChange(boxes + 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Fila 3: m² */}
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                  <Grid className="w-3.5 h-3.5 text-cyan-600" />
                  <span>m²</span>
                </div>
                <div className="flex items-center justify-end">
                  <input
                    type="number"
                    step="0.01"
                    min="0.1"
                    value={sqm}
                    onChange={(e) => handleSqmChange(parseFloat(e.target.value) || 0.1)}
                    className="w-20 text-right font-bold text-sm text-slate-900 focus:outline-none bg-transparent pr-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-500 pt-2 border-t border-slate-200/70">
              <span>Peso estimado:</span>
              <span className="font-bold text-slate-800">{totalTons} tn ({totalKg} kg)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Cotización por WhatsApp */}
      <div className="p-5 pt-0">
        <button
          type="button"
          onClick={handleWhatsAppQuote}
          className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" />
          <span>Cotizar por WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export const CatalogFullBodyDetail: React.FC<CatalogFullBodyDetailProps> = ({ onBack }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('Todos');
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [search, setSearch] = useState<string>('');

  const formats = ['Todos', '80x240 cm'];
  const finishes = ['Todos', 'Glossy', 'Matt'];

  const filteredProducts = productsFullBody
    .filter((item) => item.isVisible !== false)
    .filter((item) => {
      const matchesFormat = selectedFormat === 'Todos' || item.allFormats.includes(selectedFormat);
      const matchesFinish = selectedFinish === 'Todos' || item.allFinishes.includes(selectedFinish);
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.series.toLowerCase().includes(search.toLowerCase());
      return matchesFormat && matchesFinish && matchesSearch;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-['Montserrat']">
      {/* RECTÁNGULO / CONTENEDOR SUPERIOR DE CABECERA */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            {/* Botón Volver */}
            <button 
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-4 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a las Colecciones</span>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                Novedad Importada
              </span>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                CATÁLOGO · SINTERED STONE FULL BODY 15 MM
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Habitat — Full Body 1,5 cm
            </h1>

            <p className="text-sm text-slate-500 mt-2 font-normal max-w-3xl leading-relaxed">
              Superficies de Sintered Stone de masa homogénea (1,5 cm) para mesadas de cocina, islas y mobiliario técnico.
            </p>
          </div>

          {/* Botón superior de descarga */}
          <div className="shrink-0">
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
        </div>
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
          <ProductCardFullBody key={p.id} item={p} />
        ))}
      </div>
    </div>
  );
};

export default CatalogFullBodyDetail;
