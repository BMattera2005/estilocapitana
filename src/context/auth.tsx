import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

/**
 * Autenticación de DEMOSTRACIÓN.
 * No valida credenciales ni consulta ningún servidor: solo guarda el nivel elegido.
 * TODO: reemplazar por autenticación real cuando exista backend.
 */

export type DemoTierId = "estandar" | "mayorista" | "clave";

export type DemoTier = {
  id: DemoTierId;
  label: string;
  /** Descuento aplicado a los precios de demostración (0 a 1). */
  discount: number;
};

export const demoTiers: DemoTier[] = [
  { id: "estandar", label: "Cliente estándar", discount: 0 },
  { id: "mayorista", label: "Cuenta mayorista", discount: 0.15 },
  { id: "clave", label: "Cuenta clave", discount: 0.25 },
];

export function getDemoTier(id: DemoTierId): DemoTier {
  return demoTiers.find((tier) => tier.id === id) ?? demoTiers[0]!;
}

export type DemoClient = {
  /** CUIT o email ingresado en el modal (no se valida en modo demo). */
  identifier: string;
  tier: DemoTier;
};

type AuthContextValue = {
  client: DemoClient | null;
  login: (input: { identifier: string; tierId: DemoTierId }) => void;
  logout: () => void;
};

const STORAGE_KEY = "estilo-capitana.demo-session";

const AuthContext = createContext<AuthContextValue | null>(null);

function readStorage(): DemoClient | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { identifier?: unknown; tierId?: unknown } | null;
    if (!parsed || typeof parsed !== "object") return null;
    const tierId = demoTiers.find((tier) => tier.id === parsed.tierId)?.id;
    if (!tierId) return null;
    return {
      identifier: typeof parsed.identifier === "string" ? parsed.identifier : "",
      tier: getDemoTier(tierId),
    };
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<DemoClient | null>(null);

  useEffect(() => {
    setClient(readStorage());
  }, []);

  const login = useCallback(({ identifier, tierId }: { identifier: string; tierId: DemoTierId }) => {
    const next: DemoClient = { identifier: identifier.trim(), tier: getDemoTier(tierId) };
    setClient(next);
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ identifier: next.identifier, tierId: next.tier.id }),
      );
    } catch {
      // El almacenamiento puede no estar disponible (modo privado, cuota llena).
    }
  }, []);

  const logout = useCallback(() => {
    setClient(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Sin almacenamiento disponible: la sesión demo solo vive en memoria.
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ client, login, logout }),
    [client, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}
