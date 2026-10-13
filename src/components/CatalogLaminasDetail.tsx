import { ArrowLeft, Check, Download, MessageCircle, Search } from "lucide-react";
import React, { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  productsLaminas,
  type LaminasProductItem,
} from "@/data/productsLaminas";

interface CatalogLaminasDetailProps {
  onBack: () => void;
}

export const CatalogLaminasDetail: React.FC<CatalogLaminasDetailProps> = ({
  onBack,
}) => {
  const [selectedFinish, setSelectedFinish] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return productsLaminas.filter((product) => {
      const matchesFinish =
        selectedFinish === "todos" ||
        product.allFinishes.includes(selectedFinish);
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.series.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFinish && matchesSearch;
    });
  }, [selectedFinish, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header / Navegación */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="size-4" />
            <span>Volver a Catálogos</span>
          </Button>

          <div className="flex items-center gap-3">
            <a
              href="/catalogos/coleccion_habitat_MA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Download className="size-3.5" />
              Catálogo PDF
            </a>
          </div>
        </div>
      </div>

      {/* Hero Sección */}
      <div className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            Sintered Stone 120x270 cm
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Láminas de Piedra Sinterizada
          </h1>
          <p className="mt-2 max-w-3xl text-base text-slate-600">
            Formatos de gran porte (120x270 cm) con espesor de 6 mm. Ideales para revestimientos de alta gama, fachadas y grandes proyectos de arquitectura.
          </p>

          {/* Filtros */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-xs flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar por modelo o serie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-500">Acabado:</span>
              {["todos", "Glossy", "Matt", "Carving", "Bookmatch"].map((finish) => (
                <button
                  key={finish}
                  onClick={() => setSelectedFinish(finish)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    selectedFinish === finish
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {finish === "todos" ? "Todos" : finish}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grilla de Productos */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: LaminasProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedFinish, setSelectedFinish] = useState<string>(
    product.allFinishes[0] || "Glossy"
  );

  const whatsappMessage = encodeURIComponent(
    `Hola Estilo Capitana, quisiera consultar disponibilidad y cotización del modelo Láminas ${product.name} (120x270 cm - Acabado ${selectedFinish}).`
  );

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Contenedor de Imagen Limpio */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute right-3 top-3">
          <span className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
            {product.series}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
          <p className="mt-1 text-xs font-semibold text-slate-500">
            Formato: 1200x2700 mm | Espesor: {product.thickness}
          </p>
        </div>

        {/* Selección de Acabados */}
        <div className="mt-4">
          <span className="text-xs font-semibold uppercase text-slate-400">
            Acabados disponibles
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {product.allFinishes.map((finish) => (
              <button
                key={finish}
                onClick={() => setSelectedFinish(finish)}
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedFinish === finish
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {selectedFinish === finish && <Check className="size-3" />}
                {finish}
              </button>
            ))}
          </div>
        </div>

        {/* Detalles Técnicos de Empaque */}
        <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span>Rendimiento placa:</span>
            <span className="font-semibold text-slate-800">3.24 m²</span>
          </div>
          <div className="flex justify-between pt-1.5">
            <span>Peso estimado:</span>
            <span className="font-semibold text-slate-800">46 kg / placa</span>
          </div>
        </div>

        {/* Botón WhatsApp */}
        <div className="mt-auto pt-6">
          <a
            href={`https://wa.me/5491161208162?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            <MessageCircle className="size-4" />
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};
