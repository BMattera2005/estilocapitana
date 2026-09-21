import { useMemo, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Copy, Download, Lock, MessageCircle, Minus, Plus, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { ClientAccessButton } from "@/components/site/ClientAccessButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routeMeta } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getDemoPrice } from "@/data/demoPrices";
import { products } from "@/data/products";
import { useAuth } from "@/context/auth";
import { formatARS } from "@/lib/money";
import { buildWhatsAppUrl } from "@/lib/quote-message";
import { normalizeText } from "@/lib/text";

export const Route = createFileRoute("/pedidos")({
  head: () =>
    routeMeta({
      title: "Carga de pedidos — Estilo Capitana",
      description:
        "Armá tu pedido por SKU con precios de demostración, exportá el resumen y coordinalo con el equipo comercial.",
      path: "/pedidos",
    }),
  component: PedidosPage,
});

type OrderLine = { sku: string; name: string; quantity: number };

function PedidosPage() {
  const { client } = useAuth();

  return (
    <section className="bg-background px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs text-technical">ÁREA DE CLIENTES</p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
          Carga de pedidos
        </h1>

        {client ? <OrderBuilder discount={client.tier.discount} tierLabel={client.tier.label} /> : <SignedOutPanel />}
      </div>
    </section>
  );
}

function SignedOutPanel() {
  return (
    <div className="mt-8 max-w-2xl rounded-lg border border-border-strong bg-surface-glass p-8 shadow-glass">
      <span className="grid size-10 place-items-center rounded-md border border-border-strong bg-background text-muted-foreground">
        <Lock aria-hidden="true" className="size-5" />
      </span>
      <h2 className="mt-5 text-xl font-semibold text-foreground">Ingresá para cargar pedidos</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        La carga de pedidos está reservada a cuentas comerciales. Si todavía no tenés cuenta,
        escribinos y la gestionamos.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ClientAccessButton label="Ingresar" variant="industrial" />
        <Button asChild variant="industrialOutline">
          <Link to="/contacto">Contactar a ventas</Link>
        </Button>
      </div>
    </div>
  );
}

function OrderBuilder({ discount, tierLabel }: { discount: number; tierLabel: string }) {
  const [query, setQuery] = useState("");
  const [lines, setLines] = useState<OrderLine[]>([]);

  const results = useMemo(() => {
    const term = normalizeText(query);
    if (!term) return products.slice(0, 8);
    return products
      .filter(
        (product) =>
          normalizeText(product.sku).includes(term) || normalizeText(product.name).includes(term),
      )
      .slice(0, 12);
  }, [query]);

  function addLine(sku: string, name: string) {
    setLines((current) => {
      const existing = current.find((line) => line.sku === sku);
      if (existing) {
        return current.map((line) =>
          line.sku === sku ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }
      return [...current, { sku, name, quantity: 1 }];
    });
  }

  function setQuantity(sku: string, quantity: number) {
    const safe = Math.max(1, Math.trunc(Number.isFinite(quantity) ? quantity : 1));
    setLines((current) =>
      current.map((line) => (line.sku === sku ? { ...line, quantity: safe } : line)),
    );
  }

  function removeLine(sku: string) {
    setLines((current) => current.filter((line) => line.sku !== sku));
  }

  const rows = lines.map((line) => {
    const unit = Math.round(getDemoPrice(line.sku) * (1 - discount));
    return { ...line, unit, subtotal: unit * line.quantity };
  });

  const total = rows.reduce((sum, row) => sum + row.subtotal, 0);

  const summary = [
    `Pedido (precios de demostración) — ${siteConfig.brandName}`,
    `Nivel demo: ${tierLabel} (${Math.round(discount * 100)}%)`,
    "",
    ...rows.map(
      (row) =>
        `${row.sku} — ${row.name} — Cant. ${row.quantity} — Unit. ${formatARS(row.unit)} — Subtotal ${formatARS(row.subtotal)}`,
    ),
    "",
    `Total: ${formatARS(total)}`,
    "",
    "Precios de demostración: no son valores comerciales reales.",
  ].join("\n");

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      toast.success("Resumen copiado al portapapeles.");
    } catch {
      toast.error("No se pudo copiar. Seleccioná el texto manualmente.");
    }
  }

  function downloadCsv() {
    const header = "SKU,Nombre,Cantidad,PrecioUnitarioDemo,SubtotalDemo";
    const body = rows.map(
      (row) => `"${row.sku}","${row.name.replace(/"/g, '""')}",${row.quantity},${row.unit},${row.subtotal}`,
    );
    const csv = [header, ...body, `"TOTAL","",,,${total}`].join("\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pedido-demo-estilo-capitana.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  const whatsappUrl = buildWhatsAppUrl(summary);
  const isEmpty = rows.length === 0;

  return (
    <>
      <div className="mt-6 rounded-lg border border-border-strong bg-surface-glass px-5 py-4 shadow-glass">
        <p className="font-mono text-sm text-foreground">
          Precios de demostración · Nivel {tierLabel} ({Math.round(discount * 100)}%)
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Los valores son ficticios y sirven solo para probar la pantalla.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
        <aside className="rounded-lg border border-border bg-card p-5 shadow-glass">
          <Label htmlFor="order-search">Buscar por SKU o nombre</Label>
          <div className="relative mt-2">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="order-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="MNC-001, Carrara…"
              className="pl-9"
            />
          </div>

          <ul className="mt-4 grid gap-2">
            {results.map((product) => (
              <li key={product.sku}>
                <button
                  type="button"
                  onClick={() => addLine(product.sku, product.name)}
                  className="w-full rounded-md border border-border bg-surface px-3 py-2 text-left transition-colors duration-200 hover:border-border-strong hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="block font-mono text-xs text-technical">{product.sku}</span>
                  <span className="mt-1 block text-sm text-foreground">{product.name}</span>
                </button>
              </li>
            ))}
            {results.length === 0 ? (
              <li className="text-sm text-muted-foreground">
                No encontramos artículos con ese criterio.
              </li>
            ) : null}
          </ul>
        </aside>

        <div className="rounded-lg border border-border bg-card p-5 shadow-glass">
          <h2 className="text-lg font-semibold text-foreground">Detalle del pedido</h2>

          {isEmpty ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Todavía no agregaste artículos. Buscá por SKU o nombre y agregalos al detalle.
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[40rem] text-sm">
                <caption className="sr-only">
                  Detalle del pedido con precios de demostración
                </caption>
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase text-muted-foreground">
                    <th scope="col" className="py-2 pr-3 font-medium">SKU</th>
                    <th scope="col" className="py-2 pr-3 font-medium">Artículo</th>
                    <th scope="col" className="py-2 pr-3 font-medium">Cantidad</th>
                    <th scope="col" className="py-2 pr-3 font-medium">Unitario</th>
                    <th scope="col" className="py-2 pr-3 font-medium">Subtotal</th>
                    <th scope="col" className="py-2 font-medium">
                      <span className="sr-only">Quitar</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.sku} className="border-b border-border/60">
                      <td className="py-3 pr-3 font-mono text-xs text-technical">{row.sku}</td>
                      <td className="py-3 pr-3 text-foreground">{row.name}</td>
                      <td className="py-3 pr-3">
                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="industrialOutline"
                            size="icon"
                            aria-label={`Restar cantidad de ${row.sku}`}
                            onClick={() => setQuantity(row.sku, row.quantity - 1)}
                          >
                            <Minus aria-hidden="true" className="size-4" />
                          </Button>
                          <Label htmlFor={`qty-${row.sku}`} className="sr-only">
                            Cantidad de {row.sku}
                          </Label>
                          <Input
                            id={`qty-${row.sku}`}
                            type="number"
                            min={1}
                            value={row.quantity}
                            onChange={(event) => setQuantity(row.sku, Number(event.target.value))}
                            className="w-16 text-center font-mono"
                          />
                          <Button
                            type="button"
                            variant="industrialOutline"
                            size="icon"
                            aria-label={`Sumar cantidad de ${row.sku}`}
                            onClick={() => setQuantity(row.sku, row.quantity + 1)}
                          >
                            <Plus aria-hidden="true" className="size-4" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-3 pr-3 font-mono text-xs text-foreground">
                        {formatARS(row.unit)}
                      </td>
                      <td className="py-3 pr-3 font-mono text-xs text-foreground">
                        {formatARS(row.subtotal)}
                      </td>
                      <td className="py-3">
                        <Button
                          type="button"
                          variant="industrialOutline"
                          size="icon"
                          aria-label={`Quitar ${row.sku} del pedido`}
                          onClick={() => removeLine(row.sku)}
                        >
                          <Trash2 aria-hidden="true" className="size-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4} className="py-3 text-right text-sm text-muted-foreground">
                      Total (demo)
                    </td>
                    <td className="py-3 font-mono text-sm font-semibold text-foreground">
                      {formatARS(total)}
                    </td>
                    <td />
                  </tr>
                </tfoot>
              </table>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Button type="button" variant="industrialOutline" disabled={isEmpty} onClick={copySummary}>
              <Copy aria-hidden="true" className="size-4" />
              Copiar resumen para carga en sistema
            </Button>
            <Button type="button" variant="industrialOutline" disabled={isEmpty} onClick={downloadCsv}>
              <Download aria-hidden="true" className="size-4" />
              Descargar CSV
            </Button>
            {whatsappUrl ? (
              <Button asChild variant="industrial" disabled={isEmpty}>
                <a
                  href={isEmpty ? undefined : whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={isEmpty}
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  Enviar por WhatsApp
                </a>
              </Button>
            ) : (
              <Button type="button" variant="industrialOutline" disabled>
                WhatsApp próximamente
              </Button>
            )}
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Precios de demostración: el pedido no queda registrado en ningún sistema.
          </p>
        </div>
      </div>
    </>
  );
}
