import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="grid size-12 shrink-0 place-items-center rounded-md border border-border-strong bg-surface shadow-glass">
        <svg
          role="img"
          aria-label="Isotipo de Estilo Capitana"
          viewBox="0 0 48 48"
          className="size-9 text-technical"
        >
          <path
            d="M36.5 12.8A17 17 0 1 0 36.5 35.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="square"
          />
          <path
            d="M36.5 12.8H27.8M36.5 35.2H27.8M15.5 24H31"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="square"
          />
          <circle cx="35.8" cy="24" r="2.5" fill="currentColor" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-bold text-foreground sm:text-base">
          {siteConfig.brandNameDisplay}
        </span>
        <span className="mt-1 block truncate font-mono text-[0.66rem] text-technical sm:text-xs">
          {siteConfig.officialBadge}
        </span>
      </span>
    </div>
  );
}