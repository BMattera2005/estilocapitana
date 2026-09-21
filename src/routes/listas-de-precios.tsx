import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/site/ComingSoonPage";
import { routeMeta } from "@/config/seo";

export const Route = createFileRoute("/listas-de-precios")({
  head: () =>
    routeMeta({
      title: "Listas de precios — Estilo Capitana",
      description:
        "Área de listas de precios para clientes de Estilo Capitana. Sin precios públicos en el sitio.",
      path: "/listas-de-precios",
    }),
  component: ListasDePreciosPage,
});

function ListasDePreciosPage() {
  return <ComingSoonPage title="Listas de precios" />;
}