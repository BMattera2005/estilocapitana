import type { ReactNode } from "react";
import { ArrowLeft, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CatalogDetailHeaderProps {
  origin: string;
  category: string;
  title: string;
  description: string;
  downloadUrl: string;
  onBack: () => void;
  secondaryAction?: ReactNode;
}

export function CatalogDetailHeader({
  origin,
  category,
  title,
  description,
  downloadUrl,
  onBack,
  secondaryAction,
}: CatalogDetailHeaderProps) {
  return (
    <header>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="mb-4 min-h-0 px-0 py-0 text-xs font-semibold text-primary hover:bg-transparent hover:text-primary/80"
      >
        <ArrowLeft className="size-3.5" />
        Volver a las Colecciones
      </Button>

      <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full border border-accent bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
              {origin}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              SHOP · {category}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm font-normal leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row md:flex-col">
          <Button asChild variant="industrial" className="px-5 text-sm font-semibold">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download />
              Ver / descargar catálogo
            </a>
          </Button>
          {secondaryAction}
        </div>
      </div>
    </header>
  );
}