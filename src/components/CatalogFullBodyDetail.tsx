// src/components/CatalogFullBodyDetail.tsx
import React, { useState } from "react";
import { ArrowLeft, MessageCircle, FileText, Search } from "lucide-react";
import { productsFullBody } from "../data/productsFullBody";
import { buildWhatsAppUrl } from "../lib/quote-message";

interface CatalogFullBodyDetailProps {
  onBack: () => void;
}

export const CatalogFullBodyDetail: React.FC<CatalogFullBodyDetailProps> = ({ onBack }) => {
  const [filterFormat, setFilterFormat] = useState<string>("Todos");
  const [filterFinish, setFilterFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [selectedVariants, setSelectedVariants] = useState<Record<string, { format: string; finish: string }>>({
    "hab-fb-brown-flakes": { format: "800x2400 mm", finish: "Glossy" },
    "hab-fb-black-salt-pepper": { format: "800x2400 mm", finish: "Glossy" },
    "hab-fb-saga-white": { format: "800x2400 mm", finish: "Glossy" },
  });

  const handleSelectFormat = (productId: string, format: string, defaultFinish: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: { format, finish: defaultFinish },
    }));
  };

  const handleSelectFinish = (productId: string, finish: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: { format: prev[productId]?.format ?? "", finish },
    }));
  };

  const filteredProducts = productsFullBody.filter((product) => {
    const matchFormat = filterFormat === "Todos" || product.allFormats.includes(filterFormat);
    const matchFinish = filterFinish === "Todos" || product.allFinishes.includes(filterFinish);
    const matchSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.series.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFormat && matchFinish && matchSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Volver y PDF */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Catálogos
        </button>

        <a
          href="/catalogos/habitat_ma_full_body.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm"
        >
          <FileText className="w-4 h-4" />
          Descargar PDF Oficial (15 mm)
        </a>
      </div>

      {/* Cabecera */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Sintered Stone Full Body</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1 font-['Montserrat']">
          Habitat — Mesadas & Placas 15 mm
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl text-sm leading-relaxed">
          Placas sinterizadas de masa homogénea (Full Body) especialmente diseñadas para mesadas de cocina, islas y aplicaciones de alta exigencia superficial.
        </p>
      </div>

      {/* BARRA UNIFICADA DE FILTROS + BUSCADOR DESTACADO */}
      <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-500">Medida:</span>
            {["Todos", "800x2400 mm", "800x3000 mm"].map((f) => (
              <button
                key={f}
                onClick={() => setFilterFormat(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterFormat === f
                    ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-slate-500">Terminación:</span>
            {["Todos", "Glossy", "Matt"].map((t) => (
              <button
                key={t}
                onClick={() => setFilterFinish(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filterFinish === t
                    ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Buscador Prominente */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-700 font-bold pointer-events-none" />
          <input
            type="text"
            placeholder="Buscar modelo o código..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-slate-400 rounded-lg text-xs font-semibold text-slate-900 placeholder-slate-500 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 shadow-xs transition-all"
          />
        </div>
      </div>

      {/* Grilla Limpia con Tarjetas Estables */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const currentSelection = selectedVariants[product.id] || {
            format: product.allFormats[0],
            finish: product.allFinishes[0],
          };

          const activeVariant =
            product.variants.find((v) => v.format === currentSelection.format) ??
            product.variants[0]!;

          const whatsappMsg = `Hola estilo.capitana, consulto cotización de la placa Full Body ${product.name} (Medida: ${currentSelection.format}, Terminación: ${currentSelection.finish}, Espesor: 15 mm).`;
          const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Imagen del Modelo perfectamente aislada */}
                <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/85 text-white backdrop-blur-xs shadow-xs">
                      15 mm · Full Body
                    </span>
                  </div>
                </div>

                {/* Contenido Ficha */}
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {product.series}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-['Montserrat'] leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {product.recommendedUses}
                  </p>

                  {/* Selector Medida */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Seleccionar Formato
                    </span>
                    <div className="flex gap-2">
                      {product.allFormats.map((fmt) => (
                        <button
                          key={fmt}
                          onClick={() => {
                            const variant = product.variants.find((v) => v.format === fmt);
                            handleSelectFormat(product.id, fmt, variant?.finishes[0] || "Glossy");
                          }}
                          className={`px-2.5 py-1 rounded text-xs font-semibold border transition-all cursor-pointer ${
                            currentSelection.format === fmt
                              ? "bg-sky-50 border-sky-600 text-sky-700"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {fmt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selector Acabado */}
                  <div className="mt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Terminación Superficial
                    </span>
                    <div className="flex gap-2">
                      {activeVariant.finishes.map((fnsh) => (
                        <button
                          key={fnsh}
                          onClick={() => handleSelectFinish(product.id, fnsh)}
                          className={`px-2.5 py-1 rounded text-xs font-semibold border transition-all cursor-pointer ${
                            currentSelection.finish === fnsh
                              ? "bg-slate-900 border-slate-900 text-white"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {fnsh}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rendimiento Dinámico */}
                  <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-center">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Rendimiento</span>
                      <span className="text-xs font-bold text-slate-800">{activeVariant.sqm} m² / placa</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Peso pieza</span>
                      <span className="text-xs font-bold text-slate-800">{activeVariant.weightKg} kg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón Cotización */}
              <div className="p-5 pt-0">
                <a
                  href={whatsappUrl ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-semibold text-sm rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Cotizar Medida por WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
