import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type QuoteItem = {
  sku: string;
  name: string;
  quantity: number;
};

type QuoteListState = {
  items: QuoteItem[];
  company: string;
  note: string;
};

type QuoteListContextValue = QuoteListState & {
  totalItems: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  addItem: (item: { sku: string; name: string }) => void;
  setQuantity: (sku: string, quantity: number) => void;
  removeItem: (sku: string) => void;
  clear: () => void;
  setCompany: (company: string) => void;
  setNote: (note: string) => void;
  hasItem: (sku: string) => boolean;
};

const STORAGE_KEY = "estilo-capitana.quote-list";

const emptyState: QuoteListState = { items: [], company: "", note: "" };

const QuoteListContext = createContext<QuoteListContextValue | null>(null);

function readStorage(): QuoteListState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState;

    const parsed = JSON.parse(raw) as Partial<QuoteListState> | null;
    if (!parsed || typeof parsed !== "object") return emptyState;

    const items = Array.isArray(parsed.items)
      ? parsed.items
          .filter(
            (item): item is QuoteItem =>
              Boolean(item) && typeof item.sku === "string" && typeof item.name === "string",
          )
          .map((item) => ({
            sku: item.sku,
            name: item.name,
            quantity: Math.max(1, Math.trunc(Number(item.quantity) || 1)),
          }))
      : [];

    return {
      items,
      company: typeof parsed.company === "string" ? parsed.company : "",
      note: typeof parsed.note === "string" ? parsed.note : "",
    };
  } catch {
    return emptyState;
  }
}

export function QuoteListProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuoteListState>(emptyState);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setState(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // El almacenamiento puede no estar disponible (modo privado, cuota llena).
    }
  }, [hydrated, state]);

  const addItem = useCallback(({ sku, name }: { sku: string; name: string }) => {
    setState((current) => {
      const existing = current.items.find((item) => item.sku === sku);
      const items = existing
        ? current.items.map((item) =>
            item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...current.items, { sku, name, quantity: 1 }];
      return { ...current, items };
    });
  }, []);

  const setQuantity = useCallback((sku: string, quantity: number) => {
    const safeQuantity = Math.max(1, Math.trunc(Number.isFinite(quantity) ? quantity : 1));
    setState((current) => ({
      ...current,
      items: current.items.map((item) =>
        item.sku === sku ? { ...item, quantity: safeQuantity } : item,
      ),
    }));
  }, []);

  const removeItem = useCallback((sku: string) => {
    setState((current) => ({
      ...current,
      items: current.items.filter((item) => item.sku !== sku),
    }));
  }, []);

  const clear = useCallback(() => {
    setState((current) => ({ ...current, items: [] }));
  }, []);

  const setCompany = useCallback((company: string) => {
    setState((current) => ({ ...current, company }));
  }, []);

  const setNote = useCallback((note: string) => {
    setState((current) => ({ ...current, note }));
  }, []);

  const value = useMemo<QuoteListContextValue>(
    () => ({
      ...state,
      totalItems: state.items.reduce((total, item) => total + item.quantity, 0),
      isOpen,
      setOpen,
      addItem,
      setQuantity,
      removeItem,
      clear,
      setCompany,
      setNote,
      hasItem: (sku: string) => state.items.some((item) => item.sku === sku),
    }),
    [addItem, clear, isOpen, removeItem, setCompany, setNote, setQuantity, state],
  );

  return <QuoteListContext.Provider value={value}>{children}</QuoteListContext.Provider>;
}

export function useQuoteList(): QuoteListContextValue {
  const context = useContext(QuoteListContext);
  if (!context) {
    throw new Error("useQuoteList debe usarse dentro de QuoteListProvider");
  }
  return context;
}
