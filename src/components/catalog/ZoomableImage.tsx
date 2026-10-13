import { useEffect, useState, type ImgHTMLAttributes } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Button } from "@/components/ui/button";

/** Visor compartido: pellizco, doble toque, rueda y arrastre. */
export function ZoomableImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const animationTime = reducedMotion ? 0 : 200;

  return (
    <Dialog.Root open={open} onOpenChange={(next) => { setOpen(next); if (!next) setScale(1); }}>
      <Dialog.Trigger asChild>
      <Button
        type="button"
        variant="ghost"
        aria-label={`Ampliar imagen de ${props.alt ?? "producto"}`}
        className="block h-full min-w-0 w-full whitespace-normal cursor-zoom-in rounded-none p-0 hover:bg-transparent [&_img]:max-w-full"
      >
        <img {...props} />
      </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] cursor-zoom-out bg-foreground/90 backdrop-blur-md" />
        <Dialog.Content aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-[101] flex max-h-[94dvh] w-[calc(100vw-1rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-background p-2 shadow-industrial focus:outline-none sm:w-[calc(100vw-2rem)]">
          <TransformWrapper minScale={1} maxScale={5} centerOnInit smooth onTransform={(_, next) => setScale(next.scale)} wheel={{ step: 0.002 }} doubleClick={{ mode: "toggle", step: 1.5, animationTime }} zoomAnimation={{ animationTime }} autoAlignment={{ animationTime }} velocityAnimation={{ disabled: reducedMotion }}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <div className="flex shrink-0 items-center justify-between gap-2 px-1 pb-2">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" aria-label="Alejar imagen" title="Alejar imagen" disabled={scale <= 1} onClick={() => zoomOut(0.5, animationTime)}><ZoomOut aria-hidden="true" /></Button>
                    <span className="w-12 text-center text-xs tabular-nums text-muted-foreground" aria-live="polite">{Math.round(scale * 100)}%</span>
                    <Button variant="ghost" size="icon" aria-label="Acercar imagen" title="Acercar imagen" disabled={scale >= 5} onClick={() => zoomIn(0.5, animationTime)}><ZoomIn aria-hidden="true" /></Button>
                    <Button variant="ghost" size="icon" aria-label="Restablecer zoom" title="Restablecer zoom" onClick={() => resetTransform(animationTime)}><RotateCcw aria-hidden="true" /></Button>
                  </div>
                  <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Cerrar imagen ampliada" title="Cerrar imagen ampliada"><X aria-hidden="true" /></Button></Dialog.Close>
                </div>
                <div className="h-[65dvh] min-h-0 overflow-hidden rounded-xl bg-muted sm:h-[70dvh]">
                  <TransformComponent wrapperClass="!h-full !w-full touch-none cursor-grab active:cursor-grabbing" contentClass="!h-full !w-full">
                    <img src={props.src} srcSet={props.srcSet} sizes={props.sizes} alt={props.alt ?? "Imagen ampliada"} draggable={false} className="h-full w-full select-none object-contain" />
                  </TransformComponent>
                </div>
              </>
            )}
          </TransformWrapper>
          <div className="shrink-0 border-t border-border bg-background p-3 text-center">
            <Dialog.Title className="text-base font-bold text-foreground font-['Montserrat']">{props.alt ?? "Imagen ampliada"}</Dialog.Title>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
