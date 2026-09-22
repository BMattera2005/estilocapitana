import { siteConfig } from "@/config/site";

export function AppFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="estilo.capitana" className="h-9 w-auto object-contain" />
            <p className="text-base font-semibold text-foreground">{siteConfig.brandNameDisplay}</p>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{siteConfig.descriptor}</p>
        </div>

        <address className="grid gap-2 text-sm not-italic md:text-right">
          <a className="text-muted-foreground hover:text-primary" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          <a className="text-muted-foreground hover:text-primary" href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer">{siteConfig.contact.whatsapp}</a>
        </address>
      </div>
    </footer>
  );
}