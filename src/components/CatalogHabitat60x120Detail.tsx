// src/components/CatalogHabitat60x120Detail.tsx
import React, { useState } from "react";
import { ArrowLeft, MessageCircle, FileText, Search } from "lucide-react";
import { productsHabitat60x120 } from "../data/productsHabitat60x120";
import { buildWhatsAppUrl } from "../lib/quote-message";

interface CatalogHabitat60x120DetailProps {
  onBack: () => void;
}

export const CatalogHabitat60x120Detail: React.FC<CatalogHabitat60x120DetailProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = productsHabitat60x120.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Botón Volver y Descarga de PDF */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Catálogos
        </button>

        <a
          href="/catalogos/coleccion_habitat_60x120.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          Descargar PDF Oficial 60×120
        </a>
      </div>

      {/* Cabecera */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
          Porcelanatos Importados · Colección Habitat
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1 font-['Montserrat']">
          Línea Luxury Stone 60×120 cm
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl text-sm leading-relaxed">
          Placas porcelánicas rectificadas de 9 mm de espesor en formato 600×1200 mm con diseño pétreo y marmolado continuo para arquitectura residencial y comercial.
        </p>
      </div>

      {/* Buscador */}
      <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
        <span className="text-xs font-bold uppercase text-slate-500">
          Modelos Disponibles ({filteredProducts.length})
        </span>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por código o modelo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Grilla Limpia sin textos desbordados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const whatsappMsg = `Hola estilo.capitana, consulto cotización por el Porcelanato ${product.name} (Código: ${product.code}, Formato: ${product.format}, Acabado: ${product.finish}).`;
          const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-72 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-900/85 text-white backdrop-blur-xs shadow-xs">
                      60×120 · 9 mm
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[11px] font-bold text-sky-600 block mb-0.5">
                    {product.code}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat'] leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Acabado:</span>
                      <span className="font-semibold text-slate-800">{product.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Patrón:</span>
                      <span className="font-semibold text-slate-800">{product.faces} caras random</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Rendimiento:</span>
                      <span className="font-semibold text-slate-800">1.44 m² / caja (30 kg)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={whatsappUrl ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-semibold text-xs rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cotizar por WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
