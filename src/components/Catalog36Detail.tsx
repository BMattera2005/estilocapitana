// src/components/Catalog36Detail.tsx
import React, { useState } from "react";
import { ArrowLeft, MessageCircle, FileText, Search, Package, Truck, Layers, Minus, Plus } from "lucide-react";
import { products36x36, CeramicProduct36, packingEsmaltados36 } from "../data/products36";
import { buildWhatsAppUrl } from "../lib/quote-message";

interface Catalog36DetailProps {
  onBack: () => void;
}

// Subcomponente de tarjeta individual con su propio estado de calculadora
const ProductCard36: React.FC<{ p: CeramicProduct36 }> = ({ p }) => {
  const [pallets, setPallets] = useState<number>(1);

  // Selecciona automáticamente packaging de esmaltado o colonial según el modelo
  const pkg = p.packaging || packingEsmaltados36;

  // Cálculos dinámicos en tiempo real
  const totalBoxes = pallets * pkg.boxesPerPallet;
  const totalSqm = (pallets * pkg.sqmPerPallet).toFixed(2);
  const totalKg = pallets * pkg.kgPerPallet;
  const totalTons = (totalKg / 1000).toFixed(2);

  const whatsappMsg = `Hola estilo.capitana, quisiera solicitar cotización para la cerámica Ferrazzano 36x36: ${p.name} (Línea: ${p.line}, Acabado: ${p.finish}). Cantidad: ${pallets} pallet(s) (${totalSqm} m² / ${totalBoxes} cajas / ${totalTons} tn).`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Imagen del modelo */}
        <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover block"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-900/85 text-white backdrop-blur-xs shadow-xs">
              {p.finish}
            </span>
          </div>
        </div>

        {/* Información del Producto */}
        <div className="p-4 pb-2">
          <span className="text-[11px] font-bold text-sky-600 block mb-0.5 uppercase">
            {p.line} · {p.colorOrDesign}
          </span>
          <h3 className="text-lg font-bold text-slate-900 font-['Montserrat'] leading-tight mb-2">
            {p.name}
          </h3>

          <div className="space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-2 mb-3">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Tránsito / Uso:</span>
              <span className="font-semibold text-slate-800">{p.traffic.split(" ")[0]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Superficie:</span>
              <span className="font-semibold text-slate-800">{p.surface}</span>
            </div>
          </div>

          {/* CALCULADORA DE UNIDADES / PALLETS */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 my-2">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase text-slate-500">Pallets Cerrados:</span>
              <div className="flex items-center bg-white border border-slate-300 rounded-md overflow-hidden">
                <button
                  type="button"
                  onClick={() => setPallets(Math.max(1, pallets - 1))}
                  className="px-2 py-1 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Restar pallet"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={pallets}
                  onChange={(e) => setPallets(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-10 text-center font-bold text-xs text-slate-900 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setPallets(pallets + 1)}
                  className="px-2 py-1 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                  aria-label="Sumar pallet"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Rendimiento Dinámico */}
            <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-200/80 text-center">
              <div>
                <div className="flex items-center justify-center gap-1 text-sky-600 mb-0.5">
                  <Layers className="w-3 h-3" />
                  <span className="text-[9px] font-bold uppercase">Superficie</span>
                </div>
                <span className="text-xs font-extrabold text-slate-900">{totalSqm} m²</span>
              </div>

              <div className="border-x border-slate-200">
                <div className="flex items-center justify-center gap-1 text-emerald-600 mb-0.5">
                  <Package className="w-3 h-3" />
                  <span className="text-[9px] font-bold uppercase">Cajas</span>
                </div>
                <span className="text-xs font-extrabold text-slate-900">{totalBoxes} cajas</span>
              </div>

              <div>
                <div className="flex items-center justify-center gap-1 text-amber-600 mb-0.5">
                  <Truck className="w-3 h-3" />
                  <span className="text-[9px] font-bold uppercase">Peso</span>
                </div>
                <span className="text-xs font-extrabold text-slate-900">{totalTons} tn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón Acción WhatsApp */}
      <div className="p-4 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-semibold text-xs rounded-lg transition-all shadow-sm cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          Cotizar Lote por WhatsApp
        </a>
      </div>
    </div>
  );
};

export const Catalog36Detail: React.FC<Catalog36DetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const finishes = ["Todos", "Brillante", "Mate", "Colonial"];

  const filteredProducts = products36x36.filter((p) => {
    const matchesFinish = selectedFinish === "Todos" || p.finish === selectedFinish;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.line.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.colorOrDesign.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Catálogos
        </button>

        <a
          href="/catalogos/ferrazzano_36.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          Descargar PDF 36×36
        </a>
      </div>

      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Industria Argentina</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1 font-['Montserrat']">
          Ferrazzano — Formato 36×36 cm
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl text-sm leading-relaxed">
          Cerámica Salteña · Esmaltados: 2,33 m² por caja (83,98 m² / pallet) · Coloniales: 2,20 m² por caja (79,32 m² / pallet) · Pallet de 36 cajas (1.220 kg)
        </p>
      </div>

      {/* BARRA UNIFICADA CON BUSCADOR Y FILTROS */}
      <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold uppercase text-slate-500">Acabado:</span>
          {finishes.map((fn) => (
            <button
              key={fn}
              onClick={() => setSelectedFinish(fn)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFinish === fn
                  ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {fn}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-700 font-bold pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o diseño..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-400 rounded-lg text-xs font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 shadow-xs transition-all"
          />
        </div>
      </div>

      {/* GRILLA DE MODELOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard36 key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};
