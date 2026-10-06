// src/components/CatalogViguetasDetail.tsx
import React, { useState } from "react";
import { MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";
import { productsViguetas, productsBovedillasEPS } from "../data/productsViguetas";

const visibleViguetas = productsViguetas.filter((prod) => prod.isVisible !== false);
const visibleBovedillas = productsBovedillasEPS.filter((prod) => prod.isVisible !== false);
import { Button } from "./ui/button";
import { CatalogDetailHeader } from "./catalog/CatalogDetailHeader";

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
      <CatalogDetailHeader
        origin="Industria Argentina"
        category="Viguetas Pretensadas & Estructuras"
        title="Vigueta Perfecta — Sistemas de Entrepisos"
        description="Sistema de forjados y entrepisos con viguetas pretensadas de hormigón STONOVER y bovedillas de Poliestireno Expandido (EPS) Famapol. Reducción de peso propio de hasta un 45% y alta aislación termoacústica."
        downloadUrl="/catalogos/viguetas.pdf"
        onBack={onBack}
        secondaryAction={
          <Button asChild variant="industrialOutline" size="sm">
            <a href="/catalogos/certificado_viguetas.pdf" target="_blank" rel="noopener noreferrer">
              <ShieldCheck />
              Ver Certificado Adjunto
            </a>
          </Button>
        }
      />

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
          Series de Viguetas ({visibleViguetas.length})
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
          Bovedillas EPS Famapol ({visibleBovedillas.length})
        </button>
      </div>

      {/* Grilla de Viguetas */}
      {tab === "viguetas" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleViguetas.map((vig) => (
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
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-primary-foreground bg-brand-gradient hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Solicitar cotización por WhatsApp</span>
              </a>
            </article>
          ))}
        </div>
      )}

      {/* Grilla de Bovedillas */}
      {tab === "bovedillas" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {visibleBovedillas.map((bov) => (
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
                className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-primary-foreground bg-brand-gradient hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Solicitar cotización por WhatsApp</span>
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
