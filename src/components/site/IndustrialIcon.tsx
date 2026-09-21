import { Grid2x2, Layers, ShieldCheck, Sparkles } from "lucide-react";

import type { Rubro } from "@/data/rubros";

const iconMap = {
  sparkles: Sparkles,
  layers: Layers,
  grid: Grid2x2,
  "shield-check": ShieldCheck,
} satisfies Record<Rubro["icono"], typeof Sparkles>;

export function IndustrialIcon({ icono }: { icono: Rubro["icono"] }) {
  const Icon = iconMap[icono];

  return <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />;
}
