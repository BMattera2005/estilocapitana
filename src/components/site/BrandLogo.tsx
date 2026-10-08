// src/components/BrandLogo.tsx
import React from 'react';
import { siteConfig } from '@/config/site';

export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      {/* Isotipo / Logo de la marca */}
      <img
        src="/logo.png"
        alt="Estilo Capitana"
        className="h-10 w-auto object-contain transition-transform hover:scale-105"
        onError={(e) => {
          (e.currentTarget as HTMLElement).style.display = 'none';
        }}
      />

      <div className="flex flex-col justify-center">
        {/* Marca en Mayúsculas, Negrita Fuerte y Sin Punto */}
        <span className="text-lg sm:text-xl font-black tracking-tight text-foreground uppercase leading-none font-['Montserrat']">
          Estilo Capitana
        </span>
        {/* Subtítulo / Descriptor */}
        <span className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
          {siteConfig.descriptor || 'Agencia comercial especializada en materiales de arquitectura'}
        </span>
      </div>
    </div>
  );
}
