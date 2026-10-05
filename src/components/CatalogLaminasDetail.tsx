// src/components/CatalogLaminasDetail.tsx
import React, { useState } from "react";
import { MessageCircle, Search } from "lucide-react";
import { productsLaminas } from "../data/productsLaminas";
import { buildWhatsAppUrl } from "../lib/quote-message";
import { CatalogDetailHeader } from "./catalog/CatalogDetailHeader";

interface CatalogLaminasDetailProps {
  onBack: () => void;
}

export const CatalogLaminasDetail: React.FC<CatalogLaminasDetailProps> = ({ onBack }) => {
  const [filterFinish, setFilterFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const finishes = ["Todos", ...Array.from(new Set(productsLaminas.map((p) => p.finish)))];

  const filteredProducts = productsLaminas.filter((product) => {
    const matchesFinish = filterFinish === "Todos" || product.finish === filterFinish;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFinish && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <CatalogDetailHeader
        origin="Novedad Importada"
        category="Sintered Stone"
        title="Habitat — Láminas 120×270 cm"
        description="Placas sinterizadas continuas de gran escala para revestimientos completos de piso a techo, mesadas y arquitectura sin juntas visibles."
        downloadUrl="/catalogos/slabs_sintered_stone.pdf"
        onBack={onBack}
      />

      {/* Filtros dinámicos y Buscador */}
      <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold uppercase text-slate-500">Terminación:</span>
          {finishes.map((finish) => (
            <button
              key={finish}
              onClick={() => setFilterFinish(finish)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterFinish === finish
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {finish}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar modelo o código..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Grilla Limpia 100% libre de texto lateral cortado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const whatsappMsg = `Hola estilo.capitana, consulto cotización por la Lámina ${product.name} (Código: ${product.code}, Medida: ${product.format}, Espesor: ${product.thickness}, Acabado: ${product.finish}).`;
          const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Contenedor estricto de imagen: ocupa el 100% y corta cualquier desborde */}
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
                      120×270 · 9 mm
                    </span>
                  </div>
                </div>

                {/* Info en el cuerpo: el nombre y serie se muestran completos y abajo */}
                <div className="p-4">
                  <span className="text-[11px] font-bold text-sky-600 block mb-0.5">
                    {product.code}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat'] leading-tight">
                    {product.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Acabado:</span>
                      <span className="font-semibold text-slate-800">{product.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Diseño:</span>
                      <span className="font-semibold text-slate-800">{product.faces}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Rendimiento:</span>
                      <span className="font-semibold text-slate-800">{product.sqmPerSlab} m² / placa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp con degradado oficial */}
              <div className="p-4 pt-0">
                <a
                  href={whatsappUrl ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-brand-gradient hover:brightness-105 text-primary-foreground font-semibold text-xs rounded-lg transition-all shadow-sm cursor-pointer"
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
