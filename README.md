# Estilo Capitana Core

Vamos a construir de cero el sitio web de "Estilo Capitana", distribuidor oficial de Salteña Equipamientos & Suministros (distribución industrial B2B en Argentina). Todo el contenido en español rioplatense (es-AR), tono técnico y profesional. Esta primera tarea es solo la base: sistema de diseño, rutas, layout y página de Inicio. NO construyas todavía catálogo, listas de precios, contacto, nosotros ni portal: dejá esas rutas con una página simple "Próximamente". REGLAS PERMANENTES DEL PROYECTO (valen para todas las tareas siguientes) 1. No es un e-commerce: no hay carrito ni precios públicos. Los artículos se ofrecen con "Solicitar cotización". 2. Ningún precio real en el código ni en el repositorio. Todo precio que aparezca en pantallas de demo es ficticio, está aislado en src/data/ y se marca como "datos de demostración". Nunca incluir claves, tokens, endpoints ni URLs de APIs de terceros en el código. 3. Nada debe simular acciones que no ocurren: no mostrar "enviado" si no se envió nada. 4. Datos de contacto, cifras y certificaciones son placeholders editables en src/config/site.ts, marcados con // CONFIRMAR. No inventar datos duros (años de trayectoria, cantidad de clientes, nombres de certificaciones específicas). 5. TypeScript, componentes chicos y reutilizables, datos y textos separados de la UI. 6. Accesibilidad: contraste AA, foco visible, label asociado a cada input, modales que cierran con Escape y atrapan el foco, navegación por teclado, respetar prefers-reduced-motion. 7. Sin imágenes remotas de stock: usar íconos o ilustraciones SVG como placeholders. IDENTIDAD VISUAL - Tema oscuro industrial, estética de ingeniería moderna. - Definí los colores como tokens semánticos del sistema de diseño (index.css + tailwind config), nunca hardcodeados en componentes: fondos #08090c, #0f1218, #141822; bordes #1f2736; texto #f8fafc; acento cian #00d2ff; acento verde industrial #00e676. Un único gradiente de marca (cian a verde) para CTAs primarios, usado con moderación. - Tipografía: sans-serif limpia (Inter o similar) y monoespaciada (JetBrains Mono o similar) para SKUs, badges técnicos y cifras. - Glassmorphism sutil en tarjetas y modales; micro-interacciones de 150 a 250 ms; mobile-first y responsive. - html lang="es-AR". RUTAS (react-router, rutas reales, scroll al inicio al cambiar de ruta) / (Inicio), /catalogo, /listas-de-precios, /nosotros, /contacto, /pedidos, y una 404. HEADER (fijo) - Logo adjunto + texto "ESTILO CAPITANA" + badge mono "DISTRIBUIDOR OFICIAL SALTEÑA". - Links: Inicio, Catálogos, Listas de precios, Quiénes somos, Contacto, Carga de pedidos, con estado activo. - CTA a la derecha: "Ingreso clientes" (por ahora sin acción). - Mobile: menú hamburguesa accesible. INICIO - Hero: titular "Abastecimiento industrial con respaldo oficial Salteña"; subtítulo sobre catálogos técnicos, cotización por lote y atención comercial para corralones, constructoras e industrias; botones "Ver catálogos técnicos" (a /catalogo) y "Solicitar presupuesto" (a /contacto). - Fila de métricas leída desde src/config/site.ts, marcada // CONFIRMAR: "+1.200 artículos en red", "Todo el país", "Cotización en < 24 hs", "Respaldo oficial Salteña". - Grilla de 4 rubros con ícono, cada una linkea a /catalogo?rubro=<slug>. Definilos en src/data/rubros.ts (slug, nombre, ícono) y usá estos mismos 4 en todo el sitio: "Construcción & Obras Civiles", "EPP & Seguridad Laboral", "Herramientas & Maquinaria Pesada", "Bulonería & Fijaciones". - Sección "Cómo trabajamos" en 3 pasos: consultá el catálogo técnico, solicitá tu cotización, recibí propuesta y despacho. - Banda final con CTA a cotización. FOOTER Marca, links de navegación y datos de contacto desde src/config/site.ts (placeholders claros: WhatsApp, email, dirección, horarios). Sin links a páginas legales inexistentes. SEO Title y meta description por ruta, favicon a partir del logo, Open Graph básico.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/341f1761-d327-4839-990c-6a7e55dab404).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
