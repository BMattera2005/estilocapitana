import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/site/ComingSoonPage";
import { routeMeta } from "@/config/seo";

export const Route = createFileRoute("/pedidos")({
  head: () =>
    routeMeta({
      title: "Carga de pedidos — Estilo Capitana",
      description:
        "Base de la futura carga de pedidos para clientes de Estilo Capitana. Actualmente en preparación.",
      path: "/pedidos",
    }),
  component: PedidosPage,
});

function PedidosPage() {
  return <ComingSoonPage title="Carga de pedidos" />;
}