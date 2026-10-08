import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Blocks, Grid3x3, Layers3, MessageCircle, PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { routeMeta } from "@/config/seo";
import { officialCatalogs } from "@/data/catalogs";
import { buildAdvisorWhatsAppUrl } from "@/lib/contact-links";
import { WhyUsSection } from "@/components/site/WhyUsSection";

// Mismo criterio que /catalogo: solo cuentan los catálogos visibles (isVisible !== false).
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

// Composición visual del Hero: fotos reales del catálogo.
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
      {/* HERO PRINCIPAL SPLIT-SCREEN */}
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
                src={heroImages.wide}
                alt="Mesada de Sintered Stone Full Body en cocina contemporánea"
                className="col-span-2 h-52 w-full rounded-xl border border-border object-cover shadow-industrial sm:h-64"
                loading="eager"
                decoding="async"
              />
              <img
                src={heroImages.tallA}
                alt="Interior con porcelanato de gran formato"
                className="h-44 w-full rounded-xl border border-border object-cover shadow-industrial sm:h-52"
                loading="eager"
                decoding="async"
              />
              <img
                src={heroImages.tallB}
                alt="Superficie Sintered Stone en tono esmeralda"
                className="h-44 w-full rounded-xl border border-border object-cover shadow-industrial sm:h-52"
                loading="eager"
                decoding="async"
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

      {/* SECCIÓN POR QUÉ TRABAJAR CON NOSOTROS */}
      <WhyUsSection />

      {/* FAMILIAS DE PRODUCTOS */}
      <section className="brand-watermark-section bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-normal uppercase text-primary">Familias de productos</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-foreground sm:text-4xl">
            Cinco familias para proyectos y canales profesionales
          </h2>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {productFamilies.map((family) => {
              const Icon = family.icon;
              return (
                <Link
                  key={family.filter}
                  to="/catalogo"
                  search={{ linea: family.filter }}
                  aria-label={`Ver la familia ${family.title} en el catálogo`}
                  className="group flex min-h-[14rem] flex-col rounded-lg border border-border bg-card p-6 shadow-glass transition-all duration-200 hover:border-border-strong hover:shadow-industrial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <span className="grid size-11 place-items-center rounded-md bg-accent text-accent-foreground">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{family.title}</h3>
                  <p className="mt-3 text-sm font-normal leading-6 text-muted-foreground">{family.detail}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                    Ver familia
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONSULTA COMERCIAL FOOTER BANNER */}
      <section className="border-y border-border bg-background px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-normal uppercase text-primary">Consulta comercial</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Encontrá la familia adecuada para tu proyecto o canal
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
