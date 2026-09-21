# Corrección visual y de datos del catálogo

## Resultado
- Reemplazar el logo roto del encabezado por un isotipo SVG propio, manteniendo el nombre y el sello oficial.
- Renovar las cuatro portadas de rubro con una composición visual técnica, categoría, formato y textura diferenciada.
- Sustituir los pesos pendientes por formatos derivados de los productos existentes.
- Cambiar las acciones de cada rubro por “Explorar artículos” y “Solicitar ficha técnica”.
- Mostrar los 36 artículos de la fuente existente con SKU, nombre, descripción, especificaciones y etiquetas, sin precios.
- Conectar “Solicitar cotización” con `/contacto?sku=...` para precargar el artículo.

## Interacciones
- “Explorar artículos” aplicará el filtro del rubro, actualizará la dirección y desplazará el foco al explorador.
- “Solicitar ficha técnica” abrirá Contacto con el rubro ya cargado.
- Cada ficha de producto abrirá Contacto con su SKU precargado.

## Detalles técnicos
- Mantener los datos de productos exclusivamente en `src/data/products.ts`.
- Añadir formatos de catálogo tipados en la configuración, sin inventar pesos ni precios.
- Usar únicamente tokens visuales existentes y SVG en línea, sin archivos locales ni imágenes remotas.
- Verificar cantidad total, filtros, enlaces, encabezado y visualización en escritorio y móvil.
