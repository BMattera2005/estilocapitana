import {
  BadgeCheck,
  Grid2x2,
  Handshake,
  Headset,
  Layers,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import type { Valor } from "@/data/valores";

const iconMap = {
  sparkles: Sparkles,
  layers: Layers,
  grid: Grid2x2,
  "shield-check": ShieldCheck,
  handshake: Handshake,
  truck: Truck,
  "scan-line": ScanLine,
  "badge-check": BadgeCheck,
  headset: Headset,
} satisfies Record<Valor["icono"] | "sparkles" | "layers" | "grid", typeof Sparkles>;

export type IndustrialIconName = keyof typeof iconMap;

export function IndustrialIcon({ icono }: { icono: IndustrialIconName }) {
  const Icon = iconMap[icono];

  return <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />;
}
