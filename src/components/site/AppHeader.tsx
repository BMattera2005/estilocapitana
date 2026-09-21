import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig, type SiteNavigationItem } from "@/config/site";

import { BrandLogo } from "./BrandLogo";

const navBaseClass =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const activeNavClass = "bg-accent text-accent-foreground";

function NavLink({ item }: { item: SiteNavigationItem }) {
  return (
    <Link
      to={item.to}
      className={navBaseClass}
      activeProps={{ className: activeNavClass }}
      activeOptions={{ exact: item.to === "/" }}
    >
      {item.label}
    </Link>
  );
}

function MobileNavLink({ item }: { item: SiteNavigationItem }) {
  return (
    <SheetClose asChild>
      <Link
        to={item.to}
        className="rounded-md border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        activeProps={{ className: activeNavClass }}
        activeOptions={{ exact: item.to === "/" }}
      >
        {item.label}
      </Link>
    </SheetClose>
  );
}

export function AppHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)_auto] lg:px-8">
        <Link
          to="/"
          aria-label="Ir al inicio de Estilo Capitana"
          className="min-w-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <BrandLogo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden min-w-0 items-center justify-end gap-1 lg:flex">
          {siteConfig.navigation.map((item) => (
            <NavLink key={item.to} item={item} />
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 lg:flex">
          <Button type="button" variant="industrialOutline" disabled>
            Ingreso clientes
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button type="button" variant="industrialOutline" size="icon" aria-label="Abrir menú">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[min(92vw,24rem)] border-border-strong">
              <SheetHeader className="pr-10 text-left">
                <SheetTitle>Menú</SheetTitle>
                <SheetDescription>{siteConfig.brandNameDisplay}</SheetDescription>
              </SheetHeader>
              <div className="mt-8 grid gap-3">
                {siteConfig.navigation.map((item) => (
                  <MobileNavLink key={item.to} item={item} />
                ))}
                <Button type="button" variant="industrialOutline" disabled className="mt-2 justify-start">
                  Ingreso clientes
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}