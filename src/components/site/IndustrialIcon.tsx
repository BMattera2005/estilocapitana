import { Bolt, HardHat, ShieldCheck, Wrench } from "lucide-react";

import type { Rubro } from "@/data/rubros";

const iconMap = {
  "hard-hat": HardHat,
  "shield-check": ShieldCheck,
  wrench: Wrench,
  bolt: Bolt,
} satisfies Record<Rubro["icono"], typeof HardHat>;

export function IndustrialIcon({ icono }: { icono: Rubro["icono"] }) {
  const Icon = iconMap[icono];

  return <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />;
}