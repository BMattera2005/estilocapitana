import React, { useState } from "react";
import { ArrowLeft, MessageCircle, FileText, Search, Package, Truck, Layers, Minus, Plus } from "lucide-react";
import { products43x43, CeramicProduct, packingStandard43 } from "../data/products43";
import { buildWhatsAppUrl } from "../lib/quote-message";

interface Catalog43DetailProps {
  onBack: () => void;
}

const ProductCard43: React.FC<{ p: CeramicProduct; onZoom: (src: string, title: string) => void }> = ({ p, onZoom }) => {
  const pkg = p.packaging || packingStandard43;

  // Estado local e independiente por unidad
  const [pallets, setPallets] = useState<number>(1);
  const [boxes, setBoxes] = useState<number>(pkg.boxesPerPallet);
  const [sqm, setSqm] = useState<number>(pkg.sqmPerPallet);

  // Re-cálculos sincronizados
  const handlePalletsChange = (val: number) => {
    const newPallets = Math.max(1, val);
    setPallets(newPallets);
    setBoxes(newPallets * pkg.boxesPerPallet);
    setSqm(Number((newPallets * pkg.sqmPerPallet).toFixed(2)));
  };

  const handleBoxesChange = (val: number) => {
    const newBoxes = Math.max(1, val);
    setBoxes(newBoxes);
    const calculatedPallets = Math.max(1, Math.round(newBoxes / pkg.boxesPerPallet));
    setPallets(calculatedPallets);
    setSqm(Number((newBoxes * pkg.sqmPerBox).toFixed(2)));
  };

  const handleSqmChange = (val: number) => {
    const newSqm = Math.max(0.1, val);
    setSqm(newSqm);
    const calculatedBoxes = Math.max(1, Math.ceil(newSqm / pkg.sqmPerBox));
    setBoxes(calculatedBoxes);
    setPallets(Math.max(1, Math.ceil(calculatedBoxes / pkg.boxesPerPallet)));
  };

  const totalKg = Number((boxes * pkg.kgPerBox).toFixed(0));
  const totalTons = (totalKg / 1000).toFixed(2);

  const whatsappMsg = `Hola Estilo Capitana, quisiera solicitar cotización para la cerámica Ferrazzano 43x43: ${p.name} (Línea: ${p.line}, Acabado: ${p.finish}). Cantidad: ${pallets} pallet(s) (${boxes} cajas / ${sqm} m² / ${totalTons} tn).`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Imagen con visor Zoom flotante */}
        <div
          className="relative w-full h-52 bg-slate-100 overflow-hidden cursor-pointer group"
          onClick={() => onZoom(p.image, p.name)}
        >
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
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

        {/* Info del producto */}
        <div className="p-4 pb-2">
          <span className="text-[11px] font-bold text-sky-600 block mb-0.5 uppercase tracking-wide">
            {p.line} · {p.colorOrDesign}
          </span>
          <h3 className="text-base font-bold text-slate-900 font-['Montserrat'] leading-snug mb-2">
            {p.name}
          </h3>

          <div className="space-y-1 text-xs text-slate-600 border-t border-slate-100 pt-2 mb-3">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Tránsito / Uso:</span>
              <span className="font-semibold text-slate-800">{p.traffic.split(" ")[0]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Caras / Trama:</span>
              <span className="font-semibold text-slate-800">{p.faces} caras</span>
            </div>
          </div>

          {/* CALCULADORA DE UNIDADES ESTILIZADA Y COMPACTA */}
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3 my-2 space-y-2">
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
              Calculadora de Lote
            </span>

            <div className="grid grid-cols-3 gap-1.5 text-xs">
              {/* Selector Pallets */}
              <div className="bg-white border border-slate-200 rounded-lg p-1.5 text-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">Pallets</span>
                <div className="flex items-center justify-center gap-1">
                  <button
                    type="button"
                    onClick={() => handlePalletsChange(pallets - 1)}
                    className="text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={pallets}
                    onChange={(e) => handlePalletsChange(parseInt(e.target.value) || 1)}
                    className="w-7 text-center font-extrabold text-xs text-slate-900 focus:outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => handlePalletsChange(pallets + 1)}
                    className="text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Selector Cajas */}
              <div className="bg-white border border-slate-200 rounded-lg p-1.5 text-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">Cajas</span>
                <div className="flex items-center justify-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleBoxesChange(boxes - 1)}
                    className="text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={boxes}
                    onChange={(e) => handleBoxesChange(parseInt(e.target.value) || 1)}
                    className="w-8 text-center font-extrabold text-xs text-slate-900 focus:outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => handleBoxesChange(boxes + 1)}
                    className="text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Input m² */}
              <div className="bg-white border border-slate-200 rounded-lg p-1.5 text-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase block mb-0.5">m²</span>
                <input
                  type="number"
                  step="0.01"
                  min="0.1"
                  value={sqm}
                  onChange={(e) => handleSqmChange(parseFloat(e.target.value) || 0.1)}
                  className="w-full text-center font-extrabold text-xs text-slate-900 focus:outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Rendimiento Consolidado */}
            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-200/60 text-center">
              <div>
                <span className="text-[9px] font-semibold text-slate-400 uppercase block">Metraje</span>
                <span className="text-xs font-bold text-slate-900">{sqm} m²</span>
              </div>
              <div className="border-x border-slate-200/80">
                <span className="text-[9px] font-semibold text-slate-400 uppercase block">Empaque</span>
                <span className="text-xs font-bold text-slate-900">{boxes} cajas</span>
              </div>
              <div>
                <span className="text-[9px] font-semibold text-slate-400 uppercase block">Flete</span>
                <span className="text-xs font-bold text-slate-900">{totalTons} tn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón WhatsApp con Gradiente Corporativo Oficial */}
      <div className="p-4 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 text-white font-semibold text-xs rounded-xl transition-all shadow-xs cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          Cotizar Lote por WhatsApp
        </a>
      </div>
    </div>
  );
};

export const Catalog43Detail: React.FC<Catalog43DetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string } | null>(null);

  const finishes = ["Todos", "Brillante", "Satinado", "Mate con Granilla", "Colonial"];

  const filteredProducts = products43x43.filter((p) => {
    const matchesFinish = selectedFinish === "Todos" || p.finish === selectedFinish;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.line.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.colorOrDesign.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Lightbox / Modal Ampliado de Inspección */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.title}
              className="w-full h-[75vh] object-contain rounded-xl bg-slate-100"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-slate-900 font-['Montserrat']">{zoomedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Botones de Navegación de Cabecera */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Colecciones
        </button>

        <a
          href="/catalogos/ferrazzano_43.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Ver/Descargar Catalogo</span>
        </a>
      </div>

      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Industria Argentina</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1 font-['Montserrat']">
          Ferrazzano — Formato 43×43 cm
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl text-sm leading-relaxed">
          Cerámica Salteña · Rendimiento estándar: 2,25 m² por caja (12 piezas / 32 kg) · Pallet de 48 cajas (108 m² / 1.500 kg)
        </p>
      </div>

      {/* BARRA UNIFICADA CON BUSCADOR Y FILTROS EN CIAN CORPORATIVO */}
      <div className="mb-8 p-4 bg-slate-50/80 border border-slate-200/80 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold uppercase text-slate-500 mr-1">Textura:</span>
          {finishes.map((fn) => (
            <button
              key={fn}
              onClick={() => setSelectedFinish(fn)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedFinish === fn
                  ? "bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-xs"
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
            className="w-full pl-10 pr-4 py-2 bg-white border-2 border-slate-300 rounded-xl text-xs font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 shadow-xs transition-all"
          />
        </div>
      </div>

      {/* GRILLA DE MODELOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard43 key={p.id} p={p} onZoom={(src, title) => setZoomedImage({ src, title })} />
        ))}
      </div>
    </div>
  );
};
