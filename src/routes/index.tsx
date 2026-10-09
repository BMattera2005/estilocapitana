import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck, UserCheck, PackageCheck, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";
import { routeMeta } from "@/config/seo";
import { officialCatalogs } from "@/data/catalogs";
import { buildAdvisorWhatsAppUrl } from "@/lib/contact-links";

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

const visibleCatalogCount = officialCatalogs.filter(
  (catalog) => catalog.isVisible !== false,
).length;

// Colecciones con fotos ÚNICAS que NO se repiten con las del Hero arriba
const productFamilies = [
  {
    filter: "sintered-stone",
    title: "Sintered Stone",
    detail: "Mesadas de 15 mm y láminas de 120×270 cm para arquitectura de alta gama.",
    image: "/products/sinteredstone/carrara.jpg",
  },
  {
    filter: "porcelanato",
    title: "Porcelanatos",
    detail: "Colección Habitat Importada en grandes formatos y terminaciones premium.",
    image: "/products/habitatIndia/olister_bianco.jpg",
  },
  {
    filter: "pisos-ceramicos",
    title: "Pisos Cerámicos",
    detail: "Línea Ferrazzano Salteña en formatos 36×36 cm y 43×43 cm de alta rotación.",
    image: "/products/43x43/calacatta_blanco.jpg",
  },
  {
    filter: "viguetas-pretensadas",
    title: "Viguetas Pretensadas",
    detail: "Vigueta Perfecta Salteña para cubiertas y entrepisos de alta resistencia.",
    image: "/products/viguetas/viguetas_obra.jpg",
  },
  {
    filter: "telgopor-de-construccion",
    title: "Telgopor de Construcción",
    detail: "EPS Famapol Salteña: bovedillas y paneles para techos alivianados.",
    image: "/products/eps/eps_paneles.jpg",
  },
] as const;

// Fotos exclusivas del Hero Mosaico (distintas a las de productFamilies)
const heroImages = {
  wideTop: "/products/fullbody/black_salt_pepper.jpg",
  tallA: "/products/habitat60x120/yta66w12.jpg",
  tallB: "/products/habitatIndia/sand_light.jpg",
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
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-foreground font-['Montserrat']">
              Representación comercial especializada en terminaciones, pisos y materiales de obra
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg font-normal leading-8 text-muted-foreground">
              Conectamos proyectos, distribuidores y profesionales directamente con fábrica para adquirir insumos con previsibilidad.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="industrial" size="lg">
                <Link to="/catalogo">
                  Explorar colecciones <ArrowRight aria-hidden="true" />
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
                <dt className="sr-only">Colecciones disponibles</dt>
                <dd>
                  <strong className="block text-3xl font-bold text-foreground">{visibleCatalogCount}</strong>
                  <span className="mt-1 block text-sm font-normal text-muted-foreground">colecciones disponibles</span>
                </dd>
              </div>
              <div className="bg-card p-5">
                <dt className="sr-only">Selección de materiales</dt>
                <dd>
                  <strong className="block text-lg font-semibold text-foreground">Selección especializada</strong>
                  <span className="mt-1 block text-sm font-normal text-muted-foreground">materiales para arquitectura</span>
                </dd>
              </div>
              <div className="bg-card p-5">
                <dt className="sr-only">Modalidad de atención</dt>
                <dd>
                  <strong className="block text-lg font-semibold text-foreground">Atención B2B</strong>
                  <span className="mt-1 block text-sm font-normal text-muted-foreground">stock y cotización directa</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={heroImages.wideTop}
                alt="Mesada Sintered Stone Full Body"
                className="col-span-2 h-52 w-full rounded-xl border border-border object-cover shadow-industrial sm:h-64"
                loading="eager"
              />
              <img
                src={heroImages.tallA}
                alt="Porcelanato 60x120 cm"
                className="h-44 w-full rounded-xl border border-border object-cover shadow-industrial sm:h-52"
                loading="eager"
              />
              <img
                src={heroImages.tallB}
                alt="Porcelanato Gran Formato 120x120 cm"
                className="h-44 w-full rounded-xl border border-border object-cover shadow-industrial sm:h-52"
                loading="eager"
              />
            </div>
            {heroBadges.map((badge) => (
              <span
                key={badge.label}
                className={`pointer-events-none absolute ${badge.position} rounded-lg border border-border bg-surface-glass px-3.5 py-2 text-xs font-bold text-foreground shadow-glass backdrop-blur-md`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN VALOR B2B */}
      <WhyUsSection />

      {/* COLECCIONES DE PRODUCTOS CON IMÁGENES ÚNICAS CON LINK */}
      <section className="brand-watermark-section bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-normal uppercase text-primary">Colecciones disponibles</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">
            Cinco colecciones para proyectos y canales profesionales
          </h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {productFamilies.map((family) => (
              <Link
                key={family.filter}
                to="/catalogo"
                search={{ linea: family.filter }}
                aria-label={`Ver la colección ${family.title}`}
                className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="w-full h-36 bg-slate-100 overflow-hidden relative">
                  <img
                    src={family.image}
                    alt={family.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-bold text-foreground font-['Montserrat']">{family.title}</h3>
                    <p className="mt-2 text-xs font-normal leading-relaxed text-muted-foreground">{family.detail}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-600">
                    Ver colección
                    <ArrowRight
                      aria-hidden="true"
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTA COMERCIAL */}
      <section className="border-y border-border bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-normal uppercase text-primary">Consulta comercial</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Encontrá la colección adecuada para tu proyecto o canal
            </h2>
          </div>
          <Button asChild variant="industrial" size="lg">
            <Link to="/contacto">
              Consultar stock <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Index;
