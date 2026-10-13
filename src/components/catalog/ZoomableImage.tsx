import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/**
 * Foto de producto que se abre ampliada en pantalla completa al hacer clic.
 * Dentro del modal la imagen escala al pasar el cursor y el contenedor
 * permite desplazarse para inspeccionar vetas y texturas en alta resolución.
 */
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-md motion-safe:animate-in motion-safe:fade-in cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative flex max-h-[90vh] w-full max-w-5xl cursor-default flex-col overflow-hidden rounded-2xl bg-background p-2 shadow-industrial"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                autoFocus
                onClick={() => setOpen(false)}
                aria-label="Cerrar imagen ampliada"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/80 text-background transition-colors hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Contenedor desplazable para inspeccionar la pieza en alta resolución */}
              <div className="flex max-h-[80vh] items-center justify-center overflow-auto p-2">
                <img
                  src={props.src}
                  alt={props.alt}
                  className="h-auto min-w-full max-w-none w-auto cursor-zoom-in rounded-xl object-contain bg-muted transition-transform duration-300 hover:scale-150"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              <div className="border-t border-border bg-background p-3 text-center">
                <h3 className="text-base font-bold text-foreground font-['Montserrat']">
                  {props.alt ?? "Imagen ampliada"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  Pasá el cursor o tocá sobre la imagen para hacer zoom e inspeccionar la textura
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
