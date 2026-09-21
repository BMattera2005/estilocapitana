import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { demoTiers, useAuth, type DemoTierId } from "@/context/auth";

export function LoginDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { login } = useAuth();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [tierId, setTierId] = useState<DemoTierId>("estandar");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // En modo demo no se validan credenciales: solo importa el nivel elegido.
    login({ identifier, tierId });
    setPassword("");
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-border-strong bg-surface-glass shadow-glass">
        <DialogHeader>
          <DialogTitle>Ingreso clientes</DialogTitle>
          <DialogDescription>
            Modo demostración: el acceso real se habilitará más adelante.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="login-identifier">CUIT o email</Label>
            <Input
              id="login-identifier"
              name="identifier"
              autoComplete="username"
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              placeholder="30-12345678-9 o ventas@empresa.com.ar"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="login-password">Contraseña</Label>
            <Input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="login-tier">Modo demo — nivel de cuenta</Label>
            <Select value={tierId} onValueChange={(value) => setTierId(value as DemoTierId)}>
              <SelectTrigger id="login-tier">
                <SelectValue placeholder="Elegí un nivel" />
              </SelectTrigger>
              <SelectContent>
                {demoTiers.map((tier) => (
                  <SelectItem key={tier.id} value={tier.id}>
                    {tier.label} ({Math.round(tier.discount * 100)}%)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              En modo demostración no se validan credenciales: solo se aplica el nivel elegido a los
              precios ficticios.
            </p>
          </div>

          <DialogFooter>
            <Button type="submit" variant="industrial">
              Ingresar en modo demo
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
