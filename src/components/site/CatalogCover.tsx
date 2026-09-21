import type { Rubro } from "@/data/rubros";

/** Portada SVG placeholder: sin imágenes remotas ni fotos de stock. */
export function CatalogCover({ rubro }: { rubro: Rubro }) {
  const patternId = `cover-grid-${rubro.slug}`;

  return (
    <svg
      role="img"
      aria-label={`Portada del catálogo ${rubro.nombre}`}
      viewBox="0 0 320 180"
      className="h-36 w-full rounded-md border border-border-strong bg-background"
    >
      <defs>
        <pattern id={patternId} width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M20 0H0v20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-border-strong"
          />
        </pattern>
        <linearGradient id={`${patternId}-brand`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--technical)" />
          <stop offset="100%" stopColor="var(--industrial-green)" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill={`url(#${patternId})`} />
      <rect x="20" y="24" width="120" height="8" rx="4" fill={`url(#${patternId}-brand)`} />
      <rect x="20" y="48" width="200" height="6" rx="3" fill="currentColor" className="text-border-strong" />
      <rect x="20" y="64" width="160" height="6" rx="3" fill="currentColor" className="text-border-strong" />
      <rect
        x="20"
        y="96"
        width="84"
        height="60"
        rx="6"
        fill="none"
        stroke={`url(#${patternId}-brand)`}
        strokeWidth="1.5"
      />
      <rect
        x="116"
        y="96"
        width="84"
        height="60"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-border-strong"
      />
      <rect
        x="212"
        y="96"
        width="84"
        height="60"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-border-strong"
      />
    </svg>
  );
}
