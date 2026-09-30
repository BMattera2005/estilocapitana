// src/components/CatalogViguetasDetail.tsx
import React, { useState } from "react";
import { ArrowLeft, Download, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
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
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-4 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Volver a los Catálogos</span>
      </button>

      {/* Cabecera y Botón Descargar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
              Industria Argentina
            </span>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
              VIGUETAS PRETENSADAS & ESTRUCTURAS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vigueta Perfecta — Cerámica Salteña & EPS Famapol
          </h1>

          <p className="text-sm text-slate-500 mt-2 font-normal max-w-3xl">
            Sistema de forjados y entrepisos con viguetas pretensadas de hormigón STONOVER y bovedillas de Poliestireno Expandido (EPS) Famapol. Reducción de peso propio de hasta un 45% y alta aislación termoacústica.
          </p>
        </div>

        {/* Botones de Cabecera */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
          <a
            href="/catalogos/viguetas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Ver / descargar catálogo</span>
          </a>
          <a
            href="/catalogos/certificado_viguetas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Ver Certificado Adjunto</span>
          </a>
        </div>
      </div>

      {/* Pestañas de Filtro */}
      <div className="flex gap-2 mb-8">
        <button
          type="button"
          onClick={() => setTab("viguetas")}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer ${
            tab === "viguetas"
              ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Series de Viguetas ({productsViguetas.length})
        </button>
        <button
          type="button"
          onClick={() => setTab("bovedillas")}
          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer ${
            tab === "bovedillas"
              ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-sm"
              : "bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
        >
          Bovedillas EPS Famapol ({productsBovedillasEPS.length})
        </button>
      </div>

      {/* Grilla de Viguetas */}
      {tab === "viguetas" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsViguetas.map((vig) => (
            <article
              key={vig.id}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-100">
                    {vig.series}
                  </span>
                  <span className="text-xs font-mono font-bold text-teal-600">
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Armadura:</strong> {vig.reinforcement}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Sección:</strong> {vig.section}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Apoyo mínimo:</strong> {vig.supportMin}</span>
                  </div>
                </div>
              </div>

              {/* Botón WhatsApp con el degradado idéntico a Habitat Porcelanato */}
              <a
                href={buildViguetaWhatsAppUrl(vig.name, vig.series, vig.lengthRange)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Solicitar cotización por WhatsApp</span>
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
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 p-6"
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

              {/* Botón WhatsApp */}
              <a
                href={buildBovedillaWhatsAppUrl(bov.name, bov.heightCm, bov.axisSpacingCm)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" />
                <span>Solicitar cotización por WhatsApp</span>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
