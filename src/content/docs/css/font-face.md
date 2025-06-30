---
title: '@font-face'
description: Importar fuentes
---

## Ejemplo

```css
@font-face {
  font-family: "MiFuente";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf") format("woff2") tech(color-COLRv1);
  font-weight: bold;
}
```

## Atributos
Estos no son todos los que se pueden usar, pero son de los más útiles.

### font-family (necesario)
Le das el nombre a la fuente.

### src (necesario)
Especificas de dónde se saca la fuente, si añades varios se intentará cargar desde el primero hasta el último hasta que alguno funcione, esos que "cubren" al primero se llaman [fallbacks](/glosario/fallback), son "segundas opciones".

### local()
Intenta conseguir la fuente del dispositivo del usuario.

### url()
Puede usar una fuente alojada en la web actual o de una externa.

### format
Indica el tipo de fuente, opentype (otf), truetype (ttf), woff y woff2 (la más recomendada) son los formatos más comunes.

### tech()
Indica la tecnología de color con la que se cargará la fuente, [COLRv1](https://developer.chrome.com/blog/colrv1-fonts?hl=es-419) es lo recomendado si se especifica, al menos en chrome, por su [mejor manejo de colores](https://colrv1-emoji-vs-cbdt.glitch.me/) y [menor peso](https://developer.chrome.com/static/blog/colrv1-fonts/image/bar-chart-comparing-noto-0067da3125e93.png?hl=es-419).

### font-weight
Especifica el grosor de la fuente, puede servir para fuentes estáticas, aunque tamibén existen variables que "incluyen" varios grosores.