import { ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useQuoteList } from "@/context/quote-list";

export function QuoteListButton() {
  const { totalItems, setOpen } = useQuoteList();

  return (
    <Button
      type="button"
      variant="industrialOutline"
      size="icon"
      className="relative"
      aria-label={
        totalItems > 0
          ? `Abrir lista de cotización, ${totalItems} ítems`
          : "Abrir lista de cotización, vacía"
      }
      onClick={() => setOpen(true)}
    >
      <ClipboardList aria-hidden="true" />
      {totalItems > 0 ? (
        <span
          aria-hidden="true"
          className="absolute -right-1.5 -top-1.5 grid min-w-5 place-items-center rounded-full bg-brand-gradient px-1 font-mono text-[0.65rem] font-semibold text-primary-foreground"
        >
          {totalItems}
        </span>
      ) : null}
    </Button>
  );
}
