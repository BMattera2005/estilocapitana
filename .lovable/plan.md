# Centro de Documentación Técnica Oficial

## Objetivo
Reestructurar el sitio completo como un portal corporativo claro, centrado en consultar y descargar siete catálogos PDF oficiales y solicitar cotizaciones mayoristas.

## Cambios principales
- Reemplazar el tema oscuro por una identidad blanca y técnica, con superficies gris claro, texto grafito, azul petróleo y verde esmeralda mediante tokens semánticos.
- Conservar el logo actual `/logo.png` en un encabezado blanco y simplificar la navegación a Inicio, Catálogos, Quiénes somos y Contacto.
- Crear `src/data/catalogs.ts` con exactamente los siete catálogos indicados y usarlo como única fuente para la biblioteca documental.
- Rediseñar `/catalogo` como biblioteca de documentos con filtros por familia, badges, descripciones, descarga directa y consulta por WhatsApp.
- Actualizar Inicio con las cuatro familias reales: porcelanatos importados, cerámicos Salteña, viguetas y EPS.
- Adaptar Quiénes somos y Contacto al nuevo lenguaje visual y al foco documental/mayorista.
- Incorporar un botón flotante de WhatsApp con tooltip “Atención comercial”, deshabilitado honestamente mientras el número siga sin confirmar.
- Retirar navegación, pantallas y proveedores de login demo, listas de precios, carga de pedidos y lista de cotización.

## Detalles técnicos
- Mantener `/catalogo` como URL principal para no romper enlaces existentes; los siete PDF usarán exactamente las rutas solicitadas.
- Renombrar el PDF de viguetas existente para coincidir con `/catalogos/viguetas_pretensadas.pdf`.
- Usar descargas HTML directas con atributo `download`; las consultas abrirán WhatsApp solo cuando exista un número confirmado.
- Mantener metadatos únicos por página, accesibilidad de teclado, foco visible y reducción de movimiento.
- Validar escritorio y móvil, descargas, filtros, enlaces y ausencia de precios o acceso demo visible.
