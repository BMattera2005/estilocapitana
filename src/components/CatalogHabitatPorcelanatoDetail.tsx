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
import { productsHabitatPorcelanato } from '../data/productsHabitatPorcelanato';
import { ZoomableImage } from '@/components/catalog/ZoomableImage';

interface Props {
  onBack: () => void;
}

// Componente individual de Tarjeta con la Calculadora de Unidades integrada
const ProductCardHabitatPorcelanato: React.FC<{ product: any }> = ({ product }) => {
  const textureLabel =
    product.finishText ||
    product.finish ||
    (product.finishes ? product.finishes.join(' / ') : 'Matt');

  // Valores dinámicos según datos del producto con fallback a los valores del formato 120x120
  const sqmPerBox = parseFloat(product.sqmPerBox) || 2.88;
  const kgPerBox = parseFloat(product.weightKg || product.weightPerBox) || 60;
  const boxesPerPalletConst = 24; // Estimado estándar de empaque mayorista por pallet

  const [pallets, setPallets] = useState<number>(1);
  const [boxes, setBoxes] = useState<number>(boxesPerPalletConst);
  const [sqm, setSqm] = useState<number>(Number((boxesPerPalletConst * sqmPerBox).toFixed(2)));

  const handlePalletsChange = (val: number) => {
    const newPallets = Math.max(1, val);
    const newBoxes = newPallets * boxesPerPalletConst;
    setPallets(newPallets);
    setBoxes(newBoxes);
    setSqm(Number((newBoxes * sqmPerBox).toFixed(2)));
  };

  const handleBoxesChange = (val: number) => {
    const newBoxes = Math.max(1, val);
    setBoxes(newBoxes);
    setPallets(Math.max(1, Math.round(newBoxes / boxesPerPalletConst)));
    setSqm(Number((newBoxes * sqmPerBox).toFixed(2)));
  };

  const handleSqmChange = (val: number) => {
    const newSqm = Math.max(0.1, val);
    setSqm(newSqm);
    const calculatedBoxes = Math.max(1, Math.ceil(newSqm / sqmPerBox));
    setBoxes(calculatedBoxes);
    setPallets(Math.max(1, Math.ceil(calculatedBoxes / boxesPerPalletConst)));
  };

  const totalKg = Number((boxes * kgPerBox).toFixed(0));
  const totalTons = (totalKg / 1000).toFixed(2);

  const handleWhatsAppQuote = () => {
    const phone = "5491161208162";
    const message = `Hola Estilo Capitana, me interesa cotizar el porcelanato ${product.name} (${product.format || '120x120 cm'} - ${textureLabel}). Cantidad requerida: ${pallets} pallet(s) (${boxes} cajas / ${sqm} m² / ${totalTons} tn). Quisiera consultar disponibilidad.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between group hover:border-slate-300 transition-all duration-200">
      <div>
        {/* Imagen del Producto con ZoomableImage */}
        <div className="relative h-64 bg-slate-100 overflow-hidden">
          <ZoomableImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="pointer-events-none absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
              {textureLabel}
            </span>
          </div>
        </div>

        {/* Contenido de la Tarjeta */}
        <div className="p-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider mb-1">
              {product.series || 'LUXURY STONE 120X120'}
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {product.name}
            </h3>
            {product.description && (
              <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            )}
          </div>

          {/* Especificaciones Logísticas */}
          <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Packaging:</span>
              <span className="font-semibold text-slate-700">
                {sqmPerBox} m² / {kgPerBox} kg por caja
              </span>
            </div>
          </div>

          {/* CALCULADORA DE UNIDADES VERTICAL */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
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

              {/* Fila 2: Cajas */}
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                  <Box className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Cajas</span>
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

      {/* Botón WhatsApp */}
      <div className="p-5 pt-0">
        <button
          type="button"
          onClick={handleWhatsAppQuote}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" />
          <span>Consultar Stock por WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export const CatalogHabitatPorcelanatoDetail: React.FC<Props> = ({ onBack }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('Todos');
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const visibleProducts = productsHabitatPorcelanato.filter(
    (p) => p.isVisible !== false
  );

  const formats = [
    'Todos',
    ...Array.from(new Set(visibleProducts.map((p) => p.format))),
  ];

  const finishes = [
    'Todos',
    ...Array.from(new Set(visibleProducts.flatMap((p) => p.finishes || [p.finish || 'Matt']))),
  ];

  const filteredProducts = visibleProducts.filter((product) => {
    const matchesFormat =
      selectedFormat === 'Todos' || product.format === selectedFormat;

    const productFinishes = product.finishes || [product.finish || 'Matt'];
    const matchesFinish =
      selectedFinish === 'Todos' || productFinishes.includes(selectedFinish as any);

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.series.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFormat && matchesFinish && matchesSearch;
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
              <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                Novedad Importada
              </span>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                CATÁLOGO · PORCELANATO ESMALTADO
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Habitat — Luxury Stone 120×120
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Colección Habitat MA · Formato 120×120 cm (2.88 m² / 60 kg) · Venta mayorista por pallet
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/catalogos/coleccion_habitat_MA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Ver / Descargar Catálogo</span>
            </a>
          </div>
        </div>

        {/* Barra de Controles y Filtros */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            {/* Filtro Medida */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                MEDIDA:
              </span>
              <div className="flex flex-wrap gap-1">
                {formats.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFormat(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedFormat === f
                        ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro Textura */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                TEXTURA:
              </span>
              <div className="flex flex-wrap gap-1">
                {finishes.map((fn) => (
                  <button
                    key={fn}
                    type="button"
                    onClick={() => setSelectedFinish(fn)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedFinish === fn
                        ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {fn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Buscador */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar modelo o serie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all bg-slate-50/50"
            />
          </div>
        </div>

        {/* Muestra de modelos disponibles */}
        <div className="text-xs text-slate-500 px-1 font-medium">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCardHabitatPorcelanato key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogHabitatPorcelanatoDetail;
