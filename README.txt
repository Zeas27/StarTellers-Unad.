
EL_SECRETO_DEL_SOL - Guía rápida

Archivos incluidos:
- index.html       : Portada centrada con fondo (reemplaza assets/portada.jpg por tu imagen)
- cuento.html      : Cuento interactivo con 10 capítulos (editable)
- style.css        : Estilos (portada, pergamino claro, botones)
- script.js        : Lógica de navegación entre capítulos (fade)
- assets/          : Carpeta con imágenes de ejemplo (reemplaza por las tuyas)
  - portada.jpg
  - imagen1.jpg ... imagen10.jpg

Cómo personalizar:
1) Reemplaza las imágenes:
   - Coloca tu imagen de portada en assets/portada.jpg (recomiendo 1600x1000 px)
   - Reemplaza assets/imagen1.jpg ... imagen10.jpg por tus imágenes (recomiendo 1200x800 px)
2) Edita el texto de los capítulos:
   - Abre cuento.html y busca cada <section class="page">. Sustituye el texto dentro de <p>...</p> por tu propio contenido.
3) Cambiar enlace externo en portada:
   - En index.html encontrarás <a id="external-link" ...>. Reemplaza el href="#" por tu URL cuando la tengas.
4) Agregar capítulos:
   - Duplica una sección <section class="page"> en cuento.html y añade la nueva imagen en assets/ (recuerda actualizar el contador si lo deseas).
5) Publicar en GitHub Pages:
   - Crea un repositorio nuevo en GitHub (ej: el_secreto_del_sol).
   - Sube todo el contenido del folder (index.html, cuento.html, style.css, script.js, assets/).
   - En tu repo: Settings > Pages > Branch: main (o master) > /root > Save.
   - Tu sitio estará disponible en: https://tuusuario.github.io/el_secreto_del_sol/

Consejos de diseño:
- Mantén las imágenes en relación 3:2 o 4:3 para un mejor encuadre.
- Optimiza imágenes para web (calidad 70-80%) para tiempos de carga rápidos.
- Si quieres usar más tipografías, edita los <link> de Google Fonts en los .html.

¡Listo! Reemplaza las imágenes y los textos y tendrás tu cuento en línea.
