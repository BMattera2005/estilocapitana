// src/components/Catalog43Detail.tsx
import React, { useState } from "react";
import { ArrowLeft, MessageCircle, FileText, Search } from "lucide-react";
import { products43x43 } from "../data/products43";
import { buildWhatsAppUrl } from "../lib/quote-message";

interface Catalog43DetailProps {
  onBack: () => void;
}

export const Catalog43Detail: React.FC<Catalog43DetailProps> = ({ onBack }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Catálogos
        </button>

        <a
          href="/catalogos/ferrazzano_43.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-lg text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          Descargar PDF 43×43
        </a>
      </div>

      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Industria Argentina</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-1 font-['Montserrat']">
          Ferrazzano — Formato 43×43 cm
        </h1>
        <p className="text-slate-600 mt-2 max-w-3xl text-sm leading-relaxed">
          Cerámica Salteña · Rendimiento estándar: 2,25 m² por caja (12 piezas / 32 kg) · Pallet de 48 cajas (108 m²)
        </p>
      </div>

      {/* BARRA UNIFICADA CON BUSCADOR PROMINENTE */}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => {
          const whatsappMsg = `Hola estilo.capitana, quisiera cotizar la cerámica Ferrazzano 43x43: ${p.name} (Línea: ${p.line}, Acabado: ${p.finish}).`;
          const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

          return (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
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

                <div className="p-4">
                  <span className="text-[11px] font-bold text-sky-600 block mb-0.5 uppercase">
                    {p.line} · {p.colorOrDesign}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-['Montserrat'] leading-tight">
                    {p.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Tránsito / Uso:</span>
                      <span className="font-semibold text-slate-800">{p.traffic.split(" ")[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Empaque:</span>
                      <span className="font-semibold text-slate-800">2,25 m² (12 pzs)</span>
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
