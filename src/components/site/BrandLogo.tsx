import logoAsset from "@/assets/logo-estilocapitana.jpg.asset.json";
import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-md border border-border-strong bg-surface shadow-glass">
        <img
          src={logoAsset.url}
          alt="Logo de Estilo Capitana"
          className="size-full object-cover"
        />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-foreground sm:text-base">
          {siteConfig.brandNameDisplay}
        </span>
        <span className="mt-1 block truncate font-mono text-[0.66rem] text-technical sm:text-xs">
          {siteConfig.officialBadge}
        </span>
      </span>
    </div>
  );
}