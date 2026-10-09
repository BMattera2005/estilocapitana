import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/** Foto de producto que se abre ampliada en pantalla completa al hacer clic. */
export function ZoomableImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagen de ${props.alt ?? "producto"}`}
        className="block h-full w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <img {...props} />
      </button>
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={props.alt ?? "Imagen ampliada"}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 motion-safe:animate-in motion-safe:fade-in"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              autoFocus
              onClick={() => setOpen(false)}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-industrial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <img
              src={props.src}
              alt={props.alt}
              className="max-h-full max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
