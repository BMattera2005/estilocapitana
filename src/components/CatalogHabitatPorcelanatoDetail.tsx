import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search, X } from 'lucide-react';
import { productsHabitatPorcelanato } from '../data/productsHabitatPorcelanato';

interface Props {
  onBack: () => void;
}

export const CatalogHabitatPorcelanatoDetail: React.FC<Props> = ({ onBack }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('Todos');
  const [selectedFinish, setSelectedFinish] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visibleProducts = productsHabitatPorcelanato.filter(
    (p) => p.isVisible !== false
  );

  const formats = [
    'Todos',
    ...Array.from(new Set(visibleProducts.map((p) => p.format))),
  ];

  const finishes = [
    'Todos',
    ...Array.from(new Set(visibleProducts.flatMap((p) => p.finishes || [p.finish || 'Matt']))),
  ];

  const filteredProducts = visibleProducts.filter((product) => {
    const matchesFormat =
      selectedFormat === 'Todos' || product.format === selectedFormat;
    
    const productFinishes = product.finishes || [product.finish || 'Matt'];
    const matchesFinish =
      selectedFinish === 'Todos' || productFinishes.includes(selectedFinish as any);

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.series.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFormat && matchesFinish && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8 font-['Montserrat']">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div>
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mb-3 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a las Colecciones</span>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                Novedad Importada
              </span>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                CATÁLOGO · PORCELANATO ESMALTADO
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Habitat — Luxury Stone 120×120
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Colección Habitat MA · Formato 120×120 cm (2.88 m² / 60 kg) · Venta mayorista por pallet
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/catalogos/coleccion_habitat_MA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Ver / Descargar Catálogo</span>
            </a>
          </div>
        </div>

        {/* Barra de Controles y Filtros */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            {/* Filtro Medida */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                MEDIDA:
              </span>
              <div className="flex flex-wrap gap-1">
                {formats.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFormat(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedFormat === f
                        ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro Textura */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                TEXTURA:
              </span>
              <div className="flex flex-wrap gap-1">
                {finishes.map((fn) => (
                  <button
                    key={fn}
                    type="button"
                    onClick={() => setSelectedFinish(fn)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedFinish === fn
                        ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {fn}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Buscador */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar modelo o serie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all bg-slate-50/50"
            />
          </div>
        </div>

        {/* Muestra de modelos disponibles */}
        <div className="text-xs text-slate-500 px-1 font-medium">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'modelo disponible' : 'modelos disponibles'}
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const textureLabel = product.finishText || product.finish || (product.finishes ? product.finishes.join(' / ') : 'Matt');

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col group hover:border-slate-300 transition-all duration-200"
              >
                {/* Imagen del Producto con Zoom Lightbox */}
                <div
                  className="relative h-64 bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Badge unificado con la textura real (se elimina el cuadrado azul) */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {textureLabel}
                    </span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider mb-1">
                      {product.series || 'LUXURY STONE 120X120'}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Especificaciones Logísticas */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Packaging:</span>
                      <span className="font-semibold text-slate-700">
                        {product.sqmPerBox || '2.88'} m² / kg por caja
                      </span>
                    </div>
                  </div>

                  {/* Botón WhatsApp */}
                  <a
                    href={`https://wa.me/5491161208162?text=${encodeURIComponent(
                      `Hola Estilo Capitana, quisiera consultar disponibilidad y cotizar el modelo ${product.name} (${product.format \vert{}\vert{} '120x120 cm'} -${textureLabel}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar Stock por WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Zoom de Imagen Ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
