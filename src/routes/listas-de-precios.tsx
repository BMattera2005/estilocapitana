import { Link, createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";

import { IndustrialIcon } from "@/components/site/IndustrialIcon";
import { Button } from "@/components/ui/button";
import { priceLists } from "@/config/site";
import { routeMeta } from "@/config/seo";
import { rubros } from "@/data/rubros";

export const Route = createFileRoute("/listas-de-precios")({
  head: () =>
    routeMeta({
      title: "Listas de precios — Estilo Capitana",
      description:
        "Listas mayoristas por rubro, sujetas a cuenta comercial y volumen. Acceso reservado a clientes de Estilo Capitana.",
      path: "/listas-de-precios",
    }),
  component: ListasDePreciosPage,
});

function ListasDePreciosPage() {
  return (
    <section className="bg-background px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-sm text-technical">ÁREA DE CLIENTES</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          Listas de precios mayoristas
        </h1>

        <div className="mt-6 rounded-lg border border-border-strong bg-surface-glass px-5 py-4 shadow-glass">
          <p className="font-mono text-sm text-foreground">
            Listas mayoristas sujetas a cuenta comercial y volumen.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rubros.map((rubro) => {
            const info = priceLists[rubro.slug];
            return (
              <article
                key={rubro.slug}
                className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-glass"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-md border border-border-strong bg-background text-technical">
                    <IndustrialIcon icono={rubro.icono} />
                  </span>
                  <span
                    className="grid size-9 place-items-center rounded-md border border-border-strong bg-background text-muted-foreground"
                    title="Acceso restringido"
                  >
                    <Lock aria-hidden="true" className="size-4" />
                    <span className="sr-only">Acceso restringido</span>
                  </span>
                </div>

                <h2 className="mt-5 text-lg font-semibold text-foreground">{rubro.nombre}</h2>
                <p className="mt-3 font-mono text-xs text-technical">
                  Vigencia {info.vigencia} · {info.formato}
                </p>

                <div className="mt-5 flex-1" />
                <div className="grid gap-2">
                  <Button type="button" variant="industrial" disabled>
                    Ingresar
                  </Button>
                  <Button asChild variant="industrialOutline">
                    <Link to="/contacto">Contactar a ventas</Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-muted-foreground">
          El ingreso de clientes todavía no está habilitado. Para solicitar una cuenta comercial y
          recibir la lista vigente, escribinos desde Contacto.
        </p>
      </div>
    </section>
  );
}
