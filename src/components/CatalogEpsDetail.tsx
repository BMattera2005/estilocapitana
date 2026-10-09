import React, { useState } from 'react';
import { ArrowLeft, Download, MessageCircle, Search, X } from 'lucide-react';
import { productsEps } from '../data/productsEps';

interface Props {
  onBack: () => void;
}

export const CatalogEpsDetail: React.FC<Props> = ({ onBack }) => {
  const [selectedFamily, setSelectedFamily] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visibleProducts = productsEps.filter((p) => p.isVisible !== false);

  const families = ['Todas', 'Bovedillas', 'Placas', 'Casetones', 'Bloques', 'EPS Molido'];

  const filteredProducts = visibleProducts.filter((product) => {
    const matchesFamily =
      selectedFamily === 'Todas' || product.family === selectedFamily;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.family.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFamily && matchesSearch;
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
                Industria Argentina
              </span>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">
                CATÁLOGO · TELGOPOR DE CONSTRUCCIÓN
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              EPS Famapol — Telgopor de Construcción
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Bovedillas, placas, casetones y perlas de poliestireno expandido para forjados alivianados y aislación termoacústica superior.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/catalogos/eps_telgopor_aislaciones.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>VER / DESCARGAR CATÁLOGO</span>
            </a>
          </div>
        </div>

        {/* Barra de Controles y Filtros */}
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
              CATEGORÍA:
            </span>
            {families.map((fam) => (
              <button
                key={fam}
                type="button"
                onClick={() => setSelectedFamily(fam)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedFamily === fam
                    ? 'bg-gradient-to-r from-[#00b4d8] to-[#00a86b] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {fam}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all bg-slate-50/50"
            />
          </div>
        </div>

        {/* Muestra de modelos disponibles */}
        <div className="text-xs text-slate-500 px-1 font-medium">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'producto disponible' : 'productos disponibles'}
        </div>

        {/* Grilla de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col group hover:border-slate-300 transition-all duration-200"
            >
              {/* Imagen del Producto con Zoom Lightbox */}
              <div
                className="relative h-60 bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(product.image)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {product.family}
                  </span>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider mb-1">
                    {product.density}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Especificaciones Técnicas */}
                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Formato / Rendimiento:</span>
                    <span className="font-semibold text-slate-700">{product.dimensionsOrYield}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Seguridad al fuego:</span>
                    <span className="font-semibold text-slate-700">{product.fireRating}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Ventaja técnica:</span>
                    <span className="font-semibold text-slate-700">{product.technicalAdvantage}</span>
                  </div>
                </div>

                {/* Botón WhatsApp */}
                <a
                  href={`https://wa.me/5491161208162?text=${encodeURIComponent(
                    `Hola Estilo Capitana, quisiera solicitar cotización del producto EPS: ${product.name} (${product.family}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#00b4d8] to-[#00a86b] hover:brightness-105 shadow-sm transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Solicitar cotización por WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
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
