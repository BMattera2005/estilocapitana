import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Blocks, Grid3x3, Layers3, MessageCircle, PanelsTopLeft, ShieldCheck, UserCheck, PackageCheck, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";
import { routeMeta } from "@/config/seo";
import { officialCatalogs } from "@/data/catalogs";
import { buildAdvisorWhatsAppUrl } from "@/lib/contact-links";

// Componente interno seguro para evitar errores de importación/empaquetado
function WhyUsSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Representación comercial",
      description: "Trabajamos con fabricantes y líneas seleccionadas para ofrecer soluciones competitivas."
    },
    {
      icon: UserCheck,
      title: "Atención personalizada",
      description: "Asesoramiento comercial directo para distribuidores, arquitectos y profesionales."
    },
    {
      icon: PackageCheck,
      title: "Stock y disponibilidad",
      description: "Consultá disponibilidad, formatos y condiciones comerciales directamente con nuestro equipo."
    },
    {
      icon: Layers,
      title: "Soluciones para cada proyecto",
      description: "Desde superficies premium hasta soluciones estructurales y de aislación."
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
            VALOR AGREGADO B2B
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Montserrat'] tracking-tight">
            ¿Por qué trabajar con Estilo Capitana?
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Articulamos soluciones logísticas e insumos de arquitectura conectando directo con fábrica para que adquieras con previsibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-['Montserrat'] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Mismo criterio que /catalogo: solo cuentan los catálogos visibles
const visibleCatalogCount = officialCatalogs.filter(
  (catalog) => catalog.isVisible !== false,
).length;

const productFamilies = [
  {
    filter: "sintered-stone",
    title: "Sintered Stone",
    detail: "Mesadas de 15 mm y láminas de 120×270 cm para arquitectura de alta gama.",
    icon: Layers3,
  },
  {
    filter: "porcelanato",
    title: "Porcelanatos",
    detail: "Colección Habitat Importada en grandes formatos y terminaciones premium.",
    icon: PanelsTopLeft,
  },
  {
    filter: "pisos-ceramicos",
    title: "Pisos Cerámicos",
    detail: "Línea Ferrazzano Salteña en formatos 36×36 cm y 43×43 cm de alta rotación.",
    icon: Grid3x3,
  },
  {
    filter: "viguetas-pretensadas",
    title: "Viguetas Pretensadas",
    detail: "Vigueta Perfecta Salteña para cubiertas y entrepisos de alta resistencia.",
    icon: Blocks,
  },
  {
    filter: "telgopor-de-construccion",
    title: "Telgopor de Construcción",
    detail: "EPS Famapol Salteña: bovedillas y paneles para techos alivianados.",
    icon: PanelsTopLeft,
  },
] as const;

const heroImages = {
  wide: "/products/sinteredstone/carrara.jpg",
  tallA: "/products/habitat60x120/yta66w12.jpg",
  tallB: "/products/sinteredstone/emerald_green.jpg",
} as const;

const heroBadges = [
  { label: "Full Body 15 mm", position: "left-5 top-5 sm:left-7 sm:top-7" },
  { label: "Láminas 120×270 cm", position: "right-5 top-5 sm:right-7 sm:top-7" },
  { label: "Gran Formato 120×120 cm", position: "bottom-6 right-5 sm:bottom-8 sm:right-7" },
  { label: "Porcelanato 60×120 cm", position: "bottom-6 left-5 sm:bottom-8 sm:left-7" },
] as const;

export const Route = createFileRoute("/")({
  head: () =>
    routeMeta({
      title: "Estilo Capitana — Agencia comercial de materiales de arquitectura",
      description:
        "Representación comercial B2B de superficies Sintered Stone, porcelanatos Habitat, cerámicos Ferrazzano, viguetas pretensadas y EPS Telgopor.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  const advisorWhatsAppUrl = buildAdvisorWhatsAppUrl();

  return (
    <div>
      {/* HERO PRINCIPAL */}
      <section className="brand-watermark-section border-b border-border bg-background px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-2xl">
            <span className="badge-emerald inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest">
              Representación comercial B2B
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
              Materiales de arquitectura para proyectos y distribuidores
            </h1>
            <p className="mt-6 max-w-xl text-lg font-normal leading-8 text-muted-foreground">
              Representación comercial especializada en superficies, pisos, viguetas pretensadas y soluciones constructivas de alta gama.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="industrial" size="lg">
                <Link to="/catalogo">
                  Explorar catálogos <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="industrialOutline" size="lg">
                <a href={advisorWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Hablar con un asesor
                </a>
              </Button>
            </div>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              <div className="bg-card p-5">
                <dt className="sr-only">Catálogos comerciales disponibles</dt>
                <dd>
                  <strong className="block text-3xl font-bold text-foreground">{visibleCatalogCount}</strong>
                  <span className="mt-1 block text-sm font-normal text-muted-foreground">catálogos comerciales</span>
                </
