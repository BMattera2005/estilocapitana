import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/site/ComingSoonPage";
import { routeMeta } from "@/config/seo";

export const Route = createFileRoute("/nosotros")({
  head: () =>
    routeMeta({
      title: "Quiénes somos — Estilo Capitana",
      description:
        "Información institucional de Estilo Capitana, distribuidor oficial Salteña para abastecimiento industrial B2B.",
      path: "/nosotros",
    }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return <ComingSoonPage title="Quiénes somos" />;
}