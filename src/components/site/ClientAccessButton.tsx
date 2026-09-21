import { useState } from "react";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth";

import { LoginDialog } from "./LoginDialog";

export function ClientAccessButton({
  className,
  label = "Ingreso clientes",
  variant = "industrialOutline",
}: {
  className?: string;
  label?: string;
  variant?: "industrial" | "industrialOutline";
}) {
  const { client, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (client) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md border border-border-strong bg-surface px-3 py-1.5 font-mono text-xs text-technical">
          DEMO · {client.tier.label}
        </span>
        <Button type="button" variant="industrialOutline" onClick={logout}>
          <LogOut aria-hidden="true" className="size-4" />
          Salir
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button type="button" variant={variant} className={className} onClick={() => setOpen(true)}>
        {label}
      </Button>
      <LoginDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
