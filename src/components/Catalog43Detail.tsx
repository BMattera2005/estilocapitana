import React, { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Download,
  Search,
  Minus,
  Plus,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Layers,
  Box,
  Grid,
} from "lucide-react";
import { products43x43, CeramicProduct, packingStandard43 } from "../data/products43";
import { buildWhatsAppUrl } from "../lib/quote-message";

interface Catalog43DetailProps {
  onBack: () => void;
}

const ProductCard43: React.FC<{ product: CeramicProduct; onZoom: (src: string, title: string) => void }> = ({
  product,
  onZoom,
}) => {
  const pkg = product.packaging || packingStandard43;

  const [pallets, setPallets] = useState<number>(1);
  const [boxes, setBoxes] = useState<number>(pkg.boxesPerPallet);
  const [sqm, setSqm] = useState<number>(pkg.sqmPerPallet);

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

  const whatsappMsg = `Hola Estilo Capitana, quisiera solicitar cotización para la cerámica Ferrazzano 43x43: ${product.name} (Línea: ${product.line}, Acabado: ${product.finish}). Cantidad: ${pallets} pallet(s) (${boxes} cajas / ${sqm} m² / ${totalTons} tn).`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Imagen del Producto - Clic abre Zoom Lightbox */}
        <div
          className="relative w-full h-72 bg-slate-100 overflow-hidden group cursor-pointer"
          onClick={() => onZoom(product.image, product.name)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute top-3 right-3 pointer-events-none">
            <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
              {product.finish}
            </span>
          </div>
        </div>

        {/* Ficha e Información */}
        <div className="p-4">
          <span className="text-[11px] font-bold text-sky-600 block mb-0.5">
            {product.line} · {product.colorOrDesign}
          </span>
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {product.name}
          </h3>

          <div className="mt-3 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Tránsito / Uso:</span>
              <span className="font-semibold text-slate-800">{product.traffic.split(" ")[0]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 font-medium">Caras / Trama:</span>
              <span className="font-semibold text-slate-800">{product.faces} caras</span>
            </div>
          </div>

          {/* CALCULADORA DE UNIDADES REDISEÑADA Y HOLGADA */}
          <div className="mt-4 bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-2.5">
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block">
              Calculadora de Unidades
            </span>

            <div className="grid grid-cols-3 gap-2">
              {/* Pallets */}
              <div className="bg-white border border-slate-200 rounded-lg p-2 text-center flex flex-col justify-between shadow-2xs">
                <div className="flex items-center justify-center gap-1 text-[9px] text-slate-400 font-bold uppercase mb-1">
                  <Layers className="w-2.5 h-2.5 text-slate-400" />
                  <span>Pallets</span>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handlePalletsChange(pallets - 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={pallets}
                    onChange={(e) => handlePalletsChange(parseInt(e.target.value) || 1)}
                    className="w-full text-center font-bold text-xs sm:text-sm text-slate-800 focus:outline-none bg-transparent px-0.5"
                  />
                  <button
                    type="button"
                    onClick={() => handlePalletsChange(pallets + 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Cajas */}
              <div className="bg-white border border-slate-200 rounded-lg p-2 text-center flex flex-col justify-between shadow-2xs">
                <div className="flex items-center justify-center gap-1 text-[9px] text-slate-400 font-bold uppercase mb-1">
                  <Box className="w-2.5 h-2.5 text-slate-400" />
                  <span>Cajas</span>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleBoxesChange(boxes - 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={boxes}
                    onChange={(e) => handleBoxesChange(parseInt(e.target.value) || 1)}
                    className="w-full text-center font-bold text-xs sm:text-sm text-slate-800 focus:outline-none bg-transparent px-0.5"
                  />
                  <button
                    type="button"
                    onClick={() => handleBoxesChange(boxes + 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* m² */}
              <div className="bg-white border border-slate-200 rounded-lg p-2 text-center flex flex-col justify-between shadow-2xs">
                <div className="flex items-center justify-center gap-1 text-[9px] text-slate-400 font-bold uppercase mb-1">
                  <Grid className="w-2.5 h-2.5 text-slate-400" />
                  <span>m²</span>
                </div>
                <div className="flex items-center justify-center h-full">
                  <input
                    type="number"
                    step="0.01"
                    min="0.1"
                    value={sqm}
                    onChange={(e) => handleSqmChange(parseFloat(e.target.value) || 0.1)}
                    className="w-full text-center font-bold text-xs sm:text-sm text-slate-800 focus:outline-none bg-transparent py-0.5"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-slate-500 pt-1.5 border-t border-slate-200/60">
              <span>Peso estimado:</span>
              <span className="font-bold text-slate-800">{totalTons} tn ({totalKg} kg)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botón WhatsApp */}
      <div className="p-4 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 text-white font-semibold text-xs rounded-lg transition-all shadow-xs cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export const Catalog43Detail: React.FC<Catalog43DetailProps> = ({ onBack }) => {
  const [filterFinish, setFilterFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [zoomedImage, setZoomedImage] = useState<{ src: string; title: string } | null>(null);

  // Estados de control para el Modal con Zoom
  const [zoomScale, setZoomScale] = useState<number>(1);

  const finishes = ["Todos", "Brillante", "Satinado", "Mate con Granilla", "Colonial"];

  const filteredProducts = products43x43.filter((product) => {
    const matchesFinish = filterFinish === "Todos" || product.finish === filterFinish;
    const name = product.name ? product.name.toLowerCase() : "";
    const line = product.line ? product.line.toLowerCase() : "";
    const color = product.colorOrDesign ? product.colorOrDesign.toLowerCase() : "";
    const query = searchQuery.toLowerCase();
    return matchesFinish && (name.includes(query) || line.includes(query) || color.includes(query));
  });

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomScale(1);

  const openZoom = (src: string, title: string) => {
    setZoomScale(1);
    setZoomedImage({ src, title });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 font-['Montserrat']">
      {/* LIGHTBOX / MODAL CON BARRA DE HERRAMIENTAS DE ZOOM EXACTA A LA IMAGEN */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/85 backdrop-blur-md p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra de Herramientas Superior */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-white">
              <div className="flex items-center gap-3 text-slate-600">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                  title="Alejar"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                <span className="text-xs font-bold text-slate-700 min-w-[45px] text-center">
                  {Math.round(zoomScale * 100)}%
                </span>

                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                  title="Acercar"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors ml-1"
                  title="Restablecer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Área de Visualización con Scroll y Escala de Zoom */}
            <div className="relative flex-grow overflow-auto p-4 flex items-center justify-center bg-slate-50/50">
              <div
                className="transition-transform duration-200 ease-out origin-center flex items-center justify-center"
                style={{ transform: `scale(${zoomScale})` }}
              >
                <img
                  src={zoomedImage.src}
                  alt={zoomedImage.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Pie de Foto del Modal */}
            <div className="p-3 text-center border-t border-slate-100 bg-white">
              <h3 className="text-sm font-bold text-slate-800">{zoomedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Tarjeta / Contenedor Superior */}
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
                Industria Argentina
              </span>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                CATÁLOGO · PISOS CERÁMICOS
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ferrazzano — Formato 43×43 cm
            </h1>

            <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed font-normal">
              Cerámica Salteña · Rendimiento estándar: 2,25 m² por caja (12 piezas / 32 kg) · Pallet de 48 cajas (108 m² / 1.500 kg)
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="/catalogos/ferrazzano_43.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Ver / Descargar Catálogo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Filtros y Buscador */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase text-slate-400">MEDIDA:</span>
            <div className="flex gap-1">
              <button
                type="button"
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-xs cursor-default"
              >
                43x43 cm
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase text-slate-400">TEXTURA:</span>
            <div className="flex gap-1 flex-wrap">
              {finishes.map((finish) => {
                const isActive = filterFinish === finish;
                return (
                  <button
                    key={finish}
                    type="button"
                    onClick={() => setFilterFinish(finish)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {finish}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o serie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Grilla de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard43 key={product.id} product={product} onZoom={openZoom} />
        ))}
      </div>
    </div>
  );
};
