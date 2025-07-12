---
title: <link>
description: Importación de datos
---

"Especifica la relación entre el documento actual y un recurso externo." - MDN

Sirve para, por ejemplo, importar archivos internos y externos del proyecto de CSS y JavaScript, importar scripts externos como CDNs, precargar páginas, importar fuentes, etc.

Esta es la forma recomendada de precargar fuentes:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Se añade ese &lt;link&gt; para precargar los datos de la fuente, con esto se intentan conseguir los datos de la fuente lo antes posible para que cuando se importe en CSS se cargue más rápido.

Recomendado:
[Importar fuentes en CSS](/vanilla/css)

## Referencias
- [link - HTML (es) | MDN](https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/link)
- [&lt;link&gt; (en-US) | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link)
- [Gemini](https://gemini.google.com/)