// src/components/CatalogLaminasDetail.tsx

import React, { useState } from 'react';
import {
  ArrowLeft,
  MessageCircle,
  Search,
  Minus,
  Plus,
  Box,
  Grid,
  Weight,
  ZoomIn,
  X,
  RotateCcw,
  ZoomOut,
} from 'lucide-react';
import { productsLaminas, LaminaItem } from '../data/productsLaminas';

interface CatalogLaminasDetailProps {
  onBack: () => void;
}

// Componente para imagen ampliada (Zoom Lightbox)
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

// Tarjeta individual con Calculadora vertical por Pallet / Placas
const ProductCardLaminas: React.FC<{ item: LaminaItem; onZoom: (img: string) => void }> = ({ item, onZoom }) => {
  const platesPerPallet = 20;
  const sqmPerPallet = item.sqm * platesPerPallet;
  const weightKgPerPallet = item.weightKg * platesPerPallet;

  const [pallets, setPallets] = useState<number | "">(1);

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
  const totalPlates = safePallets * platesPerPallet;
  const totalSqm = safePallets * sqmPerPallet;
  const totalWeightKg = safePallets * weightKgPerPallet;
  const totalTons = (totalWeightKg / 1000).toFixed(2);

  // Normalización estricta: si no es Glossy ni Matt, es Satin[cite: 16]
  const getNormalizedTexture = (finish: string) => {
    const lower = finish.toLowerCase();
    if (lower.includes('glossy') || lower.includes('brillante')) return 'Glossy';
    if (lower.includes('matt') || lower.includes('mate')) return 'Matt';
    return 'Satin';
  };

  const textureName = getNormalizedTexture(item.finish);

  const handleWhatsAppQuote = () => {
    const phone = "5491161208162";
    const message = `Hola Estilo Capitana, quiero consultar por ${safePallets} pallet(s) de Sintered Stone Láminas 120x270 cm — ${item.name} (${textureName}). Equivalencia: ~${totalPlates} placas / ~${totalSqm.toFixed(2)} m² / ~${totalTons} tn.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200">
      <div>
        <div className="w-full h-56 bg-slate-100 relative overflow-hidden group cursor-zoom-in" onClick={() => onZoom(item.image)}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-7 h-7 drop-shadow-md" />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <div className="text-[11px] font-semibold text-cyan-600 uppercase tracking-wide">
              CÓD: {item.code}
            </div>
            <div className="flex items-center gap-1.5 bg-cyan-50 border border-cyan-200 px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse"></span>
              <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider">{textureName}</span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Montserrat'] leading-tight">
            {item.name}
          </h3>

          <div className="bg-slate-50 rounded-lg p-2.5 mb-3 border border-slate-100">
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Equivalencia de 1 Pallet:</p>
            <div className="grid grid-cols-3 gap-1 text-[11px] text-slate-700 font-medium">
              <div className="flex items-center gap-1"><Box className="w-3 h-3 text-cyan-600" /> {platesPerPallet} placas</div>
              <div className="flex items-center gap-1"><Grid className="w-3 h-3 text-cyan-600" /> {sqmPerPallet.toFixed(2)} m²</div>
              <div className="flex items-center gap-1"><Weight className="w-3 h-3 text-cyan-600" /> {weightKgPerPallet} kg</div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Cantidad de Pallets:</label>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden w-full max-w-[130px] shadow-2xs">
                <button
                  type="button"
                  onClick={() => setPallets(p => typeof p === 'number' && p > 1 ? p - 1 : 1)}
                  className="px-2.5 py-1.5 text-slate-500 hover:bg-slate-50 hover:text-cyan-600 transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={pallets}
                  onChange={handlePalletChange}
                  onBlur={handleBlur}
                  className="w-full text-center font-bold text-xs text-slate-900 focus:outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setPallets(p => (typeof p === 'number' ? p : 0) + 1)}
                  className="px-2.5 py-1.5 text-slate-500 hover:bg-slate-50 hover:text-cyan-600 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-xs font-medium text-slate-600">Pallet(s)</span>
            </div>

            <div className="flex flex-col gap-1 text-[11px] text-slate-600 bg-cyan-50/50 px-3 py-2.5 rounded-lg border border-cyan-100/50">
              <span className="font-semibold text-cyan-800 mb-0.5">Total calculado:</span>
              <div className="flex items-center gap-1.5"><Box className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> <span className="font-medium text-slate-800">{totalPlates} placas</span></div>
              <div className="flex items-center gap-1.5"><Grid className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> <span className="font-medium text-slate-800">{totalSqm.toFixed(2)} m²</span></div>
              <div className="flex items-center gap-1.5"><Weight className="w-3.5 h-3.5 text-cyan-600 shrink-0" /> <span className="font-medium text-slate-800">{totalTons} tn ({totalWeightKg} kg)</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={handleWhatsAppQuote}
          className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-white shrink-0" />
          <span>Consultar por {safePallets} Pallet(s)</span>
        </button>
      </div>
    </div>
  );
};

export const CatalogLaminasDetail: React.FC<CatalogLaminasDetailProps> = ({ onBack }) => {
  const [search, setSearch] = useState<string>('');
  const [selectedTexture, setSelectedTexture] = useState<string>('Todos');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const textures = ['Todos', 'Glossy', 'Satin', 'Matt'];

  const filteredProducts = productsLaminas.filter((item) => {
    // Normalización de textura según la regla requerida[cite: 16]
    const raw = item.finish.trim().toLowerCase();
    let t = 'Satin';
    if (raw.includes('matt') || raw.includes('mate')) t = 'Matt';
    else if (raw.includes('glossy') || raw.includes('brillante')) t = 'Glossy';

    if (selectedTexture !== 'Todos' && t !== selectedTexture) return false;

    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
      {zoomedImage && <ZoomableImage src={zoomedImage} alt="Vista ampliada" onClose={() => setZoomedImage(null)} />}

      <div className="w-full max-w-7xl mx-auto px-4 py-8 font-['Montserrat']">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors cursor-pointer mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver a las Colecciones</span>
              </button>

              <div className="flex items-center gap-2 flex-wrap mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[11px] font-medium">
                  Novedad Importada
                </span>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                  CATÁLOGO · SINTERED STONE LÁMINAS 120X270 CM
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Habitat — Láminas 120×270 cm
              </h1>

              <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed font-normal">
                Colección Habitat MA · Formato 120×270 cm (3.24 m² / 68 kg) · Venta mayorista por pallet
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-500">Textura:</span>
            {textures.map((fn) => (
              <button
                key={fn}
                type="button"
                onClick={() => setSelectedTexture(fn)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedTexture === fn
                    ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {fn}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar modelo o código..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500 shadow-2xs transition-all"
            />
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-6 font-normal">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
            <ProductCardLaminas key={p.id} item={p} onZoom={setZoomedImage} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogLaminasDetail;
