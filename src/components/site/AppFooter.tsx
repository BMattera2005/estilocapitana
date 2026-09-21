import { Link } from "@tanstack/react-router";

import { siteConfig } from "@/config/site";

export function AppFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Estilo Capitana" className="h-10 w-auto object-contain" />
            <p className="text-base font-semibold text-foreground">{siteConfig.brandNameDisplay}</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{siteConfig.description}</p>
          <p className="mt-3 font-mono text-xs text-technical">{siteConfig.officialBadge}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <nav aria-label="Navegación del pie" className="grid gap-2 text-sm">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <address className="grid gap-2 text-sm not-italic text-muted-foreground">
            <span>{siteConfig.contact.whatsapp}</span>
            <span>{siteConfig.contact.email}</span>
            <span>{siteConfig.contact.address}</span>
            <span>{siteConfig.contact.hours}</span>
          </address>
        </div>
      </div>
    </footer>
  );
}