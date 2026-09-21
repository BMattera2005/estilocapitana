import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/site/ComingSoonPage";
import { routeMeta } from "@/config/seo";

export const Route = createFileRoute("/catalogo")({
  validateSearch: (search: Record<string, unknown>) => {
    const rubro = search["rubro"];
    return typeof rubro === "string" ? { rubro } : {};
  },
  head: () =>
    routeMeta({
      title: "Catálogos técnicos — Estilo Capitana",
      description:
        "Catálogos técnicos de rubros industriales para solicitudes de cotización B2B de Estilo Capitana.",
      path: "/catalogo",
    }),
  component: CatalogoPage,
});

function CatalogoPage() {
  return <ComingSoonPage title="Catálogos técnicos" />;
}