// src/components/CatalogViguetasDetail.tsx
import React, { useState } from "react";
import { ArrowLeft, Download, MessageCircle, Layers, CheckCircle2, ShieldCheck } from "lucide-react";
import { productsViguetas, productsBovedillasEPS } from "../data/productsViguetas";

interface CatalogViguetasDetailProps {
  onBack: () => void;
}

export function CatalogViguetasDetail({ onBack }: CatalogViguetasDetailProps) {
  const [tab, setTab] = useState<"viguetas" | "bovedillas">("viguetas");

  const buildViguetaWhatsAppUrl = (item: string, series: string, range: string) => {
    const text = `Hola estilo.capitana, quisiera consultar cotización y stock de la línea Vigueta Perfecta: ${item} (${series}), rango ${range}.`;
    return `https://wa.me/5491161208162?text=${encodeURIComponent(text)}`;
  };

  const buildBovedillaWhatsAppUrl = (item: string, h: number, eje: number) => {
    const text = `Hola estilo.capitana, quisiera consultar cotización de Bovedillas EPS Famapol: ${item} (H=${h}cm, Eje=${eje}cm).`;
    return `https://wa.me/5491161208162?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Botón Volver */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 mb-6 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a Catálogos</span>
      </button>

      {/* Encabezado del Catálogo */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Industria Argentina
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                Viguetas Pretensadas & Estructuras
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Vigueta Perfecta · Cerámica Salteña & EPS Famapol
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              Sistema de forjados y entrepisos con viguetas pretensadas de hormigón STONOVER y bovedillas de Poliestireno Expandido (EPS) Famapol. Reducción de peso propio de hasta un 45% y alta aislación termoacústica.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
            <a
              href="/catalogos/viguetas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Manual Técnico (PDF)</span>
            </a>
            <a
              href="/catalogos/certificado_viguetas.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Certificado Adjunto</span>
            </a>
          </div>
        </div>

        {/* Pestañas internas para alternar Viguetas / Bovedillas */}
        <div className="flex gap-2 mt-6 pt-6 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setTab("viguetas")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              tab === "viguetas"
                ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Series de Viguetas ({productsViguetas.length})
          </button>
          <button
            type="button"
            onClick={() => setTab("bovedillas")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              tab === "bovedillas"
                ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Bovedillas EPS Famapol ({productsBovedillasEPS.length})
          </button>
        </div>
      </div>

      {/* Grilla de Viguetas */}
      {tab === "viguetas" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsViguetas.map((vig) => (
            <article
              key={vig.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
                    {vig.series}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-600">
                    {vig.lengthRange}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {vig.name}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {vig.application}
                </p>

                <div className="space-y-2 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Armadura:</strong> {vig.reinforcement}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Sección:</strong> {vig.section}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Apoyo mínimo:</strong> {vig.supportMin}</span>
                  </div>
                </div>
              </div>

              <a
                href={buildViguetaWhatsAppUrl(vig.name, vig.series, vig.lengthRange)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Cotizar Viguetas</span>
              </a>
            </article>
          ))}
        </div>
      )}

      {/* Grilla de Bovedillas */}
      {tab === "bovedillas" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {productsBovedillasEPS.map((bov) => (
            <article
              key={bov.id}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Altura: {bov.heightCm} cm · Eje: {bov.axisSpacingCm} cm
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {bov.consumptionPerSqm} bloques / m²
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {bov.name}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {bov.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-500 block">Peso aprox:</span>
                    <strong>{bov.weightAppx}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Comportamiento al fuego:</span>
                    <strong>{bov.fireRating}</strong>
                  </div>
                </div>
              </div>

              <a
                href={buildBovedillaWhatsAppUrl(bov.name, bov.heightCm, bov.axisSpacingCm)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Cotizar Bovedillas</span>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
