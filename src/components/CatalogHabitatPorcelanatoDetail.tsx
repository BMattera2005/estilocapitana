import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Search, Minus, Plus, Package, Grid, Weight, ZoomIn, X, RotateCcw, ZoomOut } from 'lucide-react';
import { productsPorcelanato, PorcelanatoProduct } from '../data/productsHabitatPorcelanato.ts';

interface CatalogHabitatPorcelanatoDetailProps {
  onBack: () => void;
}

// Componente para la imagen ampliada (Zoom)
const ZoomableImage = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  const [scale, setScale] = useState(1.4);
  const [rotation, setRotation] = useState(0);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale((prev) => Math.min(Math.max(1, prev - e.deltaY * 0.005), 3));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="absolute top-4 right-4 flex gap-2">
        <button onClick={(e) => { e.stopPropagation(); setScale(s => Math.max(1, s - 0.2)); }} className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <ZoomOut className="w-5 h-5" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); setScale(s => Math.min(3, s + 0.2)); }} className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <ZoomIn className="w-5 h-5" />
        </button>
        <button onClick={(e) => { e.stopPropagation(); setRotation(r => r - 90); }} className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <RotateCcw className="w-5 h-5" />
        </button>
        <button onClick={onClose} className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="overflow-hidden w-full h-full flex items-center justify-center" onWheel={handleWheel}>
        <img 
          src={src} 
          alt={alt} 
          style={{ transform: `scale(${scale}) rotate(${rotation}deg)`, transition: 'transform 0.2s ease-out' }}
          className="max-w-[90vw] max-h-[90vh] object-contain cursor-grab active:cursor-grabbing"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

// Componente individual de Tarjeta
const ProductCard = ({ item, onZoom }: { item: PorcelanatoProduct; onZoom: (img: string) => void }) => {
  const [pallets, setPallets] = useState<number | "">(1);

  // Obtener datos de empaque directos o anidados
  const boxesPerPallet = (item as any).packaging?.boxesPerPallet ?? (item as any).boxesPerPallet ?? 32;
  const sqmPerPallet = (item as any).packaging?.sqmPerPallet ?? (item as any).sqmPerPallet ?? 92.16;
  const kgPerPallet = (item as any).packaging?.kgPerPallet ?? (item as any).weightPalletKg ?? 1400;

  const handlePalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 1) {
      setPallets("");
    } else {
      setPallets(val);
    }
  };

  const handleBlur = () => {
    if (pallets === "" || pallets < 1) setPallets(1);
  };

  const safePallets = pallets === "" ? 1 : pallets;
  const totalBoxes = safePallets * boxesPerPallet;
  const totalSqm = safePallets * sqmPerPallet;
  const totalWeight = safePallets * kgPerPallet;

  const handleWhatsAppQuote = () => {
    const phone = "5491161208162";
    const message = `Hola, quiero consultar por ${safePallets} pallet(s) de ${item.name} 120x120 cm (equivale a ~${totalBoxes} cajas / ~${totalSqm.toFixed(2)} m²).`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const textureText = (item as any).finish || (item as any).texture || "Matt";

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
      <div className="relative aspect-square cursor-zoom-in group bg-slate-50 border-b border-slate-100" onClick={() => onZoom(item.image)}>
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 drop-shadow-md" />
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider">Luxury Stone 120x120</span>
            <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200/80">{textureText}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">{item.name}</h3>
        </div>

        {/* Línea Informativa Fija */}
        <div className="bg-slate-50 rounded-lg p-3 mb-5 border border-slate-100">
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Equivalencia de 1 Pallet:</p>
          <div className="grid grid-cols-3 gap-2 text-xs text-slate-700 font-medium">
            <div className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5 text-cyan-600" /> {boxesPerPallet} cajas</div>
            <div className="flex items-center gap-1.5"><Grid className="w-3.5 h-3.5 text-cyan-600" /> {sqmPerPallet.toFixed(2)} m²</div>
            <div className="flex items-center gap-1.5"><Weight className="w-3.5 h-3.5 text-cyan-600" /> {kgPerPallet} kg</div>
          </div>
        </div>

        {/* Calculadora (Solo Pallets) */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Cantidad de pallets:</label>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden w-full max-w-[140px] shadow-sm">
              <button 
                onClick={() => setPallets(p => typeof p === 'number' && p > 1 ? p - 1 : 1)}
                className="px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-cyan-600 transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input 
                type="number" 
                min="1"
                value={pallets}
                onChange={handlePalletChange}
                onBlur={handleBlur}
                className="w-full text-center text-sm font-bold text-slate-900 focus:outline-none focus:ring-0 appearance-none p-0"
              />
              <button 
                onClick={() => setPallets(p => (typeof p === 'number' ? p : 0) + 1)}
                className="px-3 py-2 text-slate-500 hover:bg-slate-50 hover:text-cyan-600 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-sm font-medium text-slate-600">Pallet(s)</span>
          </div>

          {/* Valores Calculados Solo Lectura */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600 mb-5 bg-cyan-50/50 px-3 py-2.5 rounded-lg border border-cyan-100/50">
            <span className="font-semibold text-cyan-800 w-full mb-0.5">Total calculado:</span>
            <span className="font-medium">{totalBoxes} cajas</span>
            <span className="text-cyan-200">|</span>
            <span className="font-medium">{totalSqm.toFixed(2)} m²</span>
            <span className="text-cyan-200">|</span>
            <span className="font-medium">{totalWeight.toLocaleString()} kg</span>
          </div>

          <button 
            onClick={handleWhatsAppQuote}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white hover:brightness-105 transition-all shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar por {safePallets} Pallet(s)
          </button>
        </div>
      </div>
    </div>
  );
};

export const CatalogHabitatPorcelanatoDetail: React.FC<CatalogHabitatPorcelanatoDetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>('Todas');
  const [search, setSearch] = useState<string>('');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const finishes = ['Todas', 'Matt', 'Glossy', 'Satinado'];

  const filteredProducts = productsPorcelanato
    .filter(item => (item as any).isVisible !== false)
    .filter(item => {
      const finishVal = (item as any).finish || (item as any).texture || 'Matt';
      const matchesFinish = selectedFinish === 'Todas' || finishVal === selectedFinish;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchesFinish && matchesSearch;
    });

  return (
    <>
      {zoomedImage && <ZoomableImage src={zoomedImage} alt="Vista ampliada" onClose={() => setZoomedImage(null)} />}
      
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-6 cursor-pointer">
          <ArrowLeft className="w-3.5 h-3.5" /> Volver a las Colecciones
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Novedad Importada</span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">PORCELANATOS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Montserrat']">Habitat — Luxury Stone 120×120 cm</h1>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {finishes.map(finish => (
                <button
                  key={finish}
                  onClick={() => setSelectedFinish(finish)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    selectedFinish === finish 
                      ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {finish === 'Todas' ? 'Todas las texturas' : finish}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar modelo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border-2 border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(item => (
            <ProductCard key={item.id} item={item} onZoom={setZoomedImage} />
          ))}
        </div>
      </div>
    </>
  );
};
