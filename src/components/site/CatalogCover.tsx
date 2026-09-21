import { catalogFiles } from "@/config/site";
import type { Rubro, RubroSlug } from "@/data/rubros";

const texturePaths: Record<RubroSlug, readonly string[]> = {
  "porcelanatos-glossy": [
    "M-20 132C54 72 82 144 160 82S272 40 350 108",
    "M-16 150C68 92 104 160 184 100S282 72 344 126",
  ],
  "carving-posh": [
    "M-10 30L82 122L162 42L258 138L336 60",
    "M-18 62L74 154L164 64L250 150L340 60",
  ],
  "rusticos-grandes-formatos": [
    "M0 42H320M0 92H320M0 142H320",
    "M72 0V180M168 0V180M260 0V180",
  ],
  "piezas-tecnicas-especiales": [
    "M34 150L98 34L158 150L222 34L286 150",
    "M14 128H306M14 62H306",
  ],
};

export function CatalogCover({ rubro }: { rubro: Rubro }) {
  const patternId = `cover-texture-${rubro.slug}`;
  const file = catalogFiles[rubro.slug];
  const primaryFormat = file.formats[file.formats.length - 1] ?? "Formato técnico";

  return (
    <svg
      role="img"
      aria-label={`Portada del catálogo ${rubro.nombre}`}
      viewBox="0 0 320 180"
      className="h-44 w-full rounded-md border border-border-strong bg-background"
    >
      <defs>
        <linearGradient id={patternId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--surface-elevated)" />
          <stop offset="100%" stopColor="var(--background)" />
        </linearGradient>
        <filter id={`${patternId}-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      <rect width="320" height="180" fill={`url(#${patternId})`} />
      <circle cx="272" cy="38" r="38" fill="var(--technical)" opacity="0.13" filter={`url(#${patternId}-glow)`} />
      {texturePaths[rubro.slug].map((path) => (
        <path key={path} d={path} fill="none" stroke="var(--border-strong)" strokeWidth="1.25" opacity="0.8" />
      ))}
      <rect x="18" y="18" width="116" height="25" rx="3" fill="var(--surface-glass)" stroke="var(--border-strong)" />
      <text x="30" y="35" fill="var(--technical)" fontSize="9" fontFamily="var(--font-mono-industrial)">
        CATÁLOGO TÉCNICO
      </text>
      <text x="20" y="112" fill="var(--foreground)" fontSize="15" fontWeight="700" fontFamily="var(--font-sans-industrial)">
        {rubro.nombre.length > 27 ? `${rubro.nombre.slice(0, 27)}…` : rubro.nombre}
      </text>
      <line x1="20" y1="127" x2="300" y2="127" stroke="var(--border-strong)" />
      <text x="20" y="151" fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono-industrial)">
        FORMATO PRINCIPAL
      </text>
      <text x="300" y="151" textAnchor="end" fill="var(--industrial-green)" fontSize="11" fontWeight="700" fontFamily="var(--font-mono-industrial)">
        {primaryFormat}
      </text>
    </svg>
  );
}
