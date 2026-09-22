import { siteConfig } from "@/config/site";

export function BrandLogo() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <img src="/logo.png" alt="estilo.capitana" className="h-9 w-auto object-contain" />

      <span className="min-w-0">
        <span className="block truncate text-sm font-bold text-foreground sm:text-base">
          {siteConfig.brandNameDisplay}
        </span>
        <span className="mt-0.5 block max-w-[15rem] truncate text-[0.62rem] font-normal text-muted-foreground sm:max-w-none sm:text-[0.68rem]">
          {siteConfig.descriptor}
        </span>
      </span>
    </div>
  );
}