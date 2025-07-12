---
title: Fallback
---

Un fallback es una "opción secundaria" por si la principal falla.
No es específico de un lenguaje de programación, es un término más general que eso, y seguramente se pueda usar en la vida real (aunque la mayoría de personas te queden mirando raro 😐).

Tampoco es que el elemento principal deba fallar para que un fallback sea útil, puede usarse también como espera hasta que el principal o deseado esté listo.

## Ejemplo en HTML

```html
<img src='imagen-pequeña.png' /> (3 KB)
<img src='imagen-detallada.png' /> (4 MB)
```

En este ejemplo cargaría mucho más rápido la imagen pequeña, y aunque se vea con menor calidad puede servir para darle informacion al usuario hasta que termine de cargar la detallada. De hecho, eso queda mucho mejor si se aplica un efecto de borrosidad con CSS a la pequeña.

## Ejemplo en CSS

```css
p {
  color: blue; /* soportada por todos los navegadores - fallback si light-dark() falla */
  color: light-dark(blue, red); /* <- soportada por los navegadores modernos, lo siento internet explorer */
}
```

Como todos los navegadores, o prácticamente todos soportan la propiedad `color`, se aplicaría el color azul al párrafo, y luego se intentaría aplicar el siguiente color. Como sólo los "navegadores modernos" (chrome, firefox, edge, brave, etc) soportan la función [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) estos aplicarían el valor correctamente, y los navegadores más viejos se quedarían con el color azul.

## Ejemplo en JavaScript
Un buen ejemplo de fallbacks en JavaScript son los [polyfill](/glosario/polyfill), código que le permite a navegadores usar una funcionalidad que no tienen.
Otra serían los valores por defecto de los [parámetros de una función](/js/parametros):

```javascript
function suma (x = 0, y = 0) {
  return x + y
}

suma() // 0
suma(4) // 4 + 0
suma(, 5) // error
suma(8, 1) // 9
```

`suma(, 5)` no da error por los fallback, es simplemente una sintáxis inválida.
Para aprovechar el valor por defecto o fallback del parámetro `x` se debería pasar `undefined`:

```javascript
suma(undefined, 5) // 0 + 5
```

## Te puede interesar
- ["light-dark()" | Can I use](https://caniuse.com/?search=light-dark())
- [light-dark() - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
- [polyfill | dw](/glosario/polyfill)