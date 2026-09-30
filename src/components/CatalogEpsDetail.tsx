// src/components/CatalogEpsDetail.tsx
import React, { useState } from "react";
import { ArrowLeft, Download, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { productsEps, EpsProduct } from "../data/productsEps";

interface CatalogEpsDetailProps {
  onBack: () => void;
}

export function CatalogEpsDetail({ onBack }: CatalogEpsDetailProps) {
  const [selectedFamily, setSelectedFamily] = useState<string>("Todas");

  const families = ["Todas", "Bovedillas", "Placas", "Casetones", "Bloques", "EPS Molido"];

  const filteredProducts = productsEps.filter(
    (item) => selectedFamily === "Todas" || item.family === selectedFamily
  );

  const handleWhatsAppQuote = (item: EpsProduct) => {
    const text = `Hola estilo.capitana, quisiera consultar cotización y disponibilidad de la línea EPS Famapol: ${item.name} (${item.family}).`;
    window.open(`https://wa.me/5491161208162?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Botón Volver */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-4 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Volver a los Catálogos</span>
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

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            EPS Famapol — Cerámica Salteña
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal max-w-3xl">
            Soluciones en poliestireno expandido para techos alivianados, aislación termoacústica y hormigón liviano. Material ignífugo clasificación RE2 según normas IRAM 11910 y 11918.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <a
            href="/catalogos/eps_telgopor_aislaciones.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Ver / descargar catálogo</span>
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
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer ${
              selectedFamily === fam
                ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm"
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
          <article
            key={p.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 p-6"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                  {p.family}
                </span>
                <span className="text-xs font-mono font-bold text-teal-600">
                  {p.density}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {p.name}
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {p.mainApplications}
              </p>

              <div className="space-y-2 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Formato/Rendimiento:</strong> {p.dimensionsOrYield}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Seguridad al fuego:</strong> {p.fireRating}</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ventaja técnica:</strong> {p.technicalAdvantage}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleWhatsAppQuote(p)}
              className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white shrink-0" />
              <span>Solicitar cotización por WhatsApp</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
