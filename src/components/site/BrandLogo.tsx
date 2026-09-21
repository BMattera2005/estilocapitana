import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img src="/logo.png" alt="Estilo Capitana" className="h-10 w-auto object-contain" />

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