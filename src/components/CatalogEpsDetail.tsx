import React, { useState } from 'react';
import {
  ArrowLeft,
  Download,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Minus,
  Plus,
  Layers,
  Box,
  Grid,
} from 'lucide-react';
import { productsEps, EpsProduct } from '../data/productsEps';

interface CatalogEpsDetailProps {
  onBack: () => void;
}

// Componente individual de Tarjeta con la Calculadora de Unidades adaptable según tipo de EPS
const ProductCardEps: React.FC<{ product: EpsProduct }> = ({ product }) => {
  // Configuración de rendimiento según tipo de producto (Ej: Bovedillas usalmente 2 u/m² para intereje de 50cm)
  const isBovedilla = product.family === 'Bovedillas' || product.family === 'Casetones';
  const unitsPerSqm = isBovedilla ? 2 : 1; 
  const defaultUnitsPerPackage = 10; // Paquete promedio de venta/transporte

  const [packages, setPackages] = useState<number>(1);
  const [units, setUnits] = useState<number>(defaultUnitsPerPackage);
  const [sqm, setSqm] = useState<number>(
    Number((defaultUnitsPerPackage / unitsPerSqm).toFixed(2))
  );

  const handlePackagesChange = (val: number) => {
    const newPackages = Math.max(1, val);
    const newUnits = newPackages * defaultUnitsPerPackage;
    setPackages(newPackages);
    setUnits(newUnits);
    setSqm(Number((newUnits / unitsPerSqm).toFixed(2)));
  };

  const handleUnitsChange = (val: number) => {
    const newUnits = Math.max(1, val);
    setUnits(newUnits);
    setPackages(Math.max(1, Math.ceil(newUnits / defaultUnitsPerPackage)));
    setSqm(Number((newUnits / unitsPerSqm).toFixed(2)));
  };

  const handleSqmChange = (val: number) => {
    const newSqm = Math.max(0.1, val);
    setSqm(newSqm);
    const calculatedUnits = Math.max(1, Math.ceil(newSqm * unitsPerSqm));
    setUnits(calculatedUnits);
    setPackages(Math.max(1, Math.ceil(calculatedUnits / defaultUnitsPerPackage)));
  };

  const handleWhatsAppQuote = () => {
    const text = `Hola Estilo Capitana, me interesa cotizar de la línea EPS Famapol: ${product.name} (${product.family}). Cantidad estimada: ${packages} paquete(s) (${units} unidades / aprox ${sqm} m² de cobertura). Quisiera consultar disponibilidad y precio.`;
    window.open(`https://wa.me/5491161208162?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <article className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 p-5">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            {product.family}
          </span>
          <span className="text-xs font-mono font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
            {product.density}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 font-['Montserrat']">
          {product.name}
        </h3>
        <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
          {product.mainApplications}
        </p>

        <div className="space-y-2 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Formato/Rendimiento:</strong> {product.dimensionsOrYield}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Seguridad al fuego:</strong> {product.fireRating}</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Ventaja técnica:</strong> {product.technicalAdvantage}</span>
          </div>
        </div>

        {/* CALCULADORA DE UNIDADES VERTICAL */}
        <div className="mb-4 bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2 font-['Montserrat']">
          <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-1">
            Calculadora de Unidades / Losa
          </span>

          <div className="space-y-2">
            {/* Fila 1: Paquetes */}
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

            {/* Fila 2: Unidades / Bloques */}
            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                <Box className="w-3.5 h-3.5 text-cyan-600" />
                <span>Unidades</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleUnitsChange(units - 1)}
                  className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={units}
                  onChange={(e) => handleUnitsChange(parseInt(e.target.value) || 1)}
                  className="w-12 text-center font-bold text-sm text-slate-900 focus:outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => handleUnitsChange(units + 1)}
                  className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Fila 3: m² Cobertura estimado */}
            <div className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 w-24">
                <Grid className="w-3.5 h-3.5 text-cyan-600" />
                <span>m² Losa</span>
              </div>
              <div className="flex items-center justify-end">
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={sqm}
                  onChange={(e) => handleSqmChange(parseFloat(e.target.value) || 0.1)}
                  className="w-20 text-right font-bold text-sm text-slate-900 focus:outline-none bg-transparent pr-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleWhatsAppQuote}
        className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer font-['Montserrat']"
      >
        <MessageCircle className="w-4 h-4 text-white shrink-0" />
        <span>Cotizar por WhatsApp</span>
      </button>
    </article>
  );
};

export function CatalogEpsDetail({ onBack }: CatalogEpsDetailProps) {
  const [selectedFamily, setSelectedFamily] = useState<string>("Todas");

  const families = ["Todas", "Bovedillas", "Placas", "Casetones", "Bloques", "EPS Molido"];

  const filteredProducts = productsEps.filter(
    (item) => selectedFamily === "Todas" || item.family === selectedFamily
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-['Montserrat']">
      {/* Botón Volver */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-4 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Volver a las Colecciones</span>
      </button>

      {/* Cabecera y Botón Descarga */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Industria Argentina
            </span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
              AISLACIONES & TELGOPOR INDUSTRIAL
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Montserrat']">
            EPS Famapol — Cerámica Salteña
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal max-w-3xl leading-relaxed">
            Soluciones en poliestireno expandido para techos alivianados, aislación termoacústica y hormigón liviano. Material ignífugo clasificación RE2 según normas IRAM 11910 y 11918.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <a
            href="/catalogos/eps_telgopor_aislaciones.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Ver / Descargar Catálogo</span>
          </a>
        </div>
      </div>

      {/* Selector de Familias */}
      <div className="flex flex-wrap gap-2 mb-8">
        {families.map((fam) => (
          <button
            key={fam}
            type="button"
            onClick={() => setSelectedFamily(fam)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
              selectedFamily === fam
                ? "bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
          >
            {fam}
          </button>
        ))}
      </div>

      {/* Grilla de Productos EPS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <ProductCardEps key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default CatalogEpsDetail;
