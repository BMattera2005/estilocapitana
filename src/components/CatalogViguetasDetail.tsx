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
import { productsViguetas } from '@/data/productsViguetas';
import { ZoomableImage } from '@/components/catalog/ZoomableImage';

interface CatalogViguetasDetailProps {
  onBack: () => void;
}

// Componente individual de Tarjeta con la Calculadora de Unidades integrada para Viguetas
const ProductCardViguetas: React.FC<{ product: any }> = ({ product }) => {
  // Parámetros dinámicos / estimados para Viguetas Pretensadas
  const avgMetersPerPiece = 4.0; // Largo promedio de referencia para cálculo de metros lineales
  const kgPerMeter = 12.5; // Peso promedio por metro lineal en sección 12x9 cm
  const defaultPiecesPerPackage = 10; // Atado / Paquete estándar de estiba

  const [packages, setPackages] = useState<number>(1);
  const [pieces, setPieces] = useState<number>(defaultPiecesPerPackage);
  const [totalMeters, setTotalMeters] = useState<number>(
    Number((defaultPiecesPerPackage * avgMetersPerPiece).toFixed(2))
  );

  const handlePackagesChange = (val: number) => {
    const newPackages = Math.max(1, val);
    const newPieces = newPackages * defaultPiecesPerPackage;
    setPackages(newPackages);
    setPieces(newPieces);
    setTotalMeters(Number((newPieces * avgMetersPerPiece).toFixed(2)));
  };

  const handlePiecesChange = (val: number) => {
    const newPieces = Math.max(1, val);
    setPieces(newPieces);
    setPackages(Math.max(1, Math.ceil(newPieces / defaultPiecesPerPackage)));
    setTotalMeters(Number((newPieces * avgMetersPerPiece).toFixed(2)));
  };

  const handleMetersChange = (val: number) => {
    const newMeters = Math.max(1, val);
    setTotalMeters(newMeters);
    const calculatedPieces = Math.max(1, Math.ceil(newMeters / avgMetersPerPiece));
    setPieces(calculatedPieces);
    setPackages(Math.max(1, Math.ceil(calculatedPieces / defaultPiecesPerPackage)));
  };

  const totalKg = Number((totalMeters * kgPerMeter).toFixed(0));
  const totalTons = (totalKg / 1000).toFixed(2);

  const handleWhatsAppQuote = () => {
    const phone = "5491161208162";
    const message = `Hola Estilo Capitana, me interesa cotizar de la línea STONOVER: ${product.name} (${product.series}, Rango: ${product.lengthRange}). Requerimiento estimado: ${packages} atado/paquete(s) (${pieces} viguetas / aprox ${totalMeters} m.l. / ${totalTons} tn). Quisiera consultar disponibilidad y precio.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200">
      {/* TARJETA DE IMAGEN Y ACCESO A LIGHTBOX */}
      <div className="relative h-64 w-full bg-slate-100 overflow-hidden group">
        <ZoomableImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
          Hacé clic para ampliar 🔍
        </div>
      </div>

      {/* DETALLES Y ESPECIFICACIONES TÉCNICAS */}
      <div className="p-5 flex flex-col flex-1 justify-between font-['Montserrat']">
        <div>
          <span className="text-[11px] font-bold uppercase text-cyan-600 tracking-wider">
            {product.series}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-1">
            {product.name}
          </h3>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
            {product.description}
          </p>

          <dl className="mt-4 grid grid-cols-2 gap-2 text-xs border-t border-slate-100 pt-3">
            <div>
              <dt className="text-slate-400 font-normal">Sección:</dt>
              <dd className="font-bold text-slate-800">{product.section}</dd>
            </div>
            <div>
              <dt className="text-slate-400 font-normal">Rango de Largo:</dt>
              <dd className="font-bold text-slate-800">{product.lengthRange}</dd>
            </div>
            <div className="col-span-2 mt-1">
              <dt className="text-slate-400 font-normal">Armadura:</dt>
              <dd className="font-bold text-slate-800">{product.reinforcement}</dd>
            </div>
          </dl>

          {/* CALCULADORA DE UNIDADES VERTICAL */}
          <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
            <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
              Calculadora de Unidades / Metrazo
            </span>

            <div className="space-y-2">
              {/* Fila 1: Atados / Paquetes */}
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                  <Layers className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Paquetes</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePackagesChange(packages - 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={packages}
                    onChange={(e) => handlePackagesChange(parseInt(e.target.value) || 1)}
                    className="w-12 text-center font-bold text-sm text-slate-900 focus:outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => handlePackagesChange(packages + 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Fila 2: Viguetas (Unidades) */}
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                  <Box className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Viguetas</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePiecesChange(pieces - 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={pieces}
                    onChange={(e) => handlePiecesChange(parseInt(e.target.value) || 1)}
                    className="w-12 text-center font-bold text-sm text-slate-900 focus:outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => handlePiecesChange(pieces + 1)}
                    className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Fila 3: Metros Lineales Estimados */}
              <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                  <Grid className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Metros l.</span>
                </div>
                <div className="flex items-center justify-end">
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    value={totalMeters}
                    onChange={(e) => handleMetersChange(parseFloat(e.target.value) || 1)}
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

        {/* BOTÓN WHATSAPP CORPORATIVO DEGRADADO */}
        <div className="mt-6">
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
    </article>
  );
};

export function CatalogViguetasDetail({ onBack }: CatalogViguetasDetailProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtro de visibilidad activa
  const visibleProducts = productsViguetas.filter((p) => p.isVisible !== false);

  const filteredProducts = visibleProducts.filter((p) => {
    return (
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.series.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lengthRange.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CABECERA */}
        <section className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm mb-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors cursor-pointer mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Volver a las Colecciones
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-2">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 text-[11px] font-medium">
                  Industria Argentina
                </span>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                  CATÁLOGO · VIGUETAS PRETENSADAS
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Montserrat']">
                Viguetas Pretensadas STONOVER
              </h1>
              <p className="text-sm text-slate-500 mt-2 font-normal leading-relaxed max-w-3xl">
                Cerámica Salteña · Sección T-Invertida 12×9 cm · Memoria y tablas de cálculo estructural
              </p>
            </div>

            {/* BOTÓN DESCARGAR CATÁLOGO PDF */}
            <a
              href="/catalogos/viguetas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Ver / Descargar Catálogo</span>
            </a>
          </div>

          {/* BARRA DE BÚSQUEDA TÉCNICA */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-2xs">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              BUSCADOR TÉCNICO DE SERIES Y LUCES
            </span>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por serie o largo (ej: 4.20 m)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white pl-9 pr-4 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              />
            </div>
          </div>
        </section>

        {/* GRILLA DE TARJETAS DE PRODUCTOS */}
        <section>
          <p className="text-xs font-normal text-slate-500 mb-6">
            {filteredProducts.length} {filteredProducts.length === 1 ? "serie disponible" : "series disponibles"}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCardViguetas key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CatalogViguetasDetail;
