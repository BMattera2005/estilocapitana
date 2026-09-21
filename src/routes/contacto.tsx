import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonPage } from "@/components/site/ComingSoonPage";
import { routeMeta } from "@/config/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    routeMeta({
      title: "Contacto comercial — Estilo Capitana",
      description:
        "Canales comerciales de Estilo Capitana para solicitar cotizaciones industriales B2B.",
      path: "/contacto",
    }),
  component: ContactoPage,
});

function ContactoPage() {
  return <ComingSoonPage title="Contacto comercial" />;
}