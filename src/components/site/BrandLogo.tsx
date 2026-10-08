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
        {/* Marca principal */}
        <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-none font-['Montserrat']">
          Estilo Capitana
        </span>
        {/* Subtítulo en minúsculas comenzando en mayúscula con la A de Agencia */}
        <span className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground tracking-wide mt-0.5 normal-case">
          Agencia comercial especializada en materiales de arquitectura
        </span>
      </div>
    </div>
  );
}
