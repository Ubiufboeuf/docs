---
title: Closures
---

## ¿Qué es?
El "closure" o "cierre" es la capacidad de una función de recordar y acceder a su ámbito léxico externo (sus variables y funciones circundantes) incluso después de que la función externa que la creó haya terminado de ejecutarse.

Un ejemplo con JavaScript:

```javascript
function crearContador() {
    // 'conteo' es una variable LOCAL a la función crearContador
    let conteo = 0;

    // Esta es la función interna.
    // Forma un closure porque "cierra" sobre la variable 'conteo'
    return function() {
        conteo++; // Accede y modifica 'conteo' del scope superior
        return conteo;
    };
}

// Ahora creamos dos contadores diferentes
const miContador1 = crearContador();
const miContador2 = crearContador();

console.log(miContador1()); // Salida: 1
console.log(miContador1()); // Salida: 2 (miContador1 recuerda su propio 'conteo')

console.log(miContador2()); // Salida: 1 (miContador2 tiene su propio 'conteo' independiente)
console.log(miContador1()); // Salida: 3 (miContador1 sigue aumentando su propio 'conteo')
console.log(miContador2()); // Salida: 2 (miContador2 sigue aumentando el suyo)
```

El return no es estrictamente necesario para el closure, pero sin él el closure seguramente quede inservible para la mayoría de casos.

El closure es lo que permite que esa función anónima dentro de `crearContador` "recuerde" el estado de `conteo` incluso después de ser ejecutada la función `crearContador`.

Como miContador1 y miContador2 se declaran y no dependen de la otra de ninguna forma guardan estados diferentes, por eso los logs muestran valores diferentes.

Si por ejemplo miContador2 tuviese como valor miContador1 entonces compartirían estado, esto porque miContador2 apuntaría exactamente a la misma función que miContador1, o sea que **comparten la misma referencia**.

```javascript
// Ahora creamos dos contadores diferentes
const miContador1 = crearContador();
const miContador2 = miContador1

console.log(miContador1()); // Salida: 1
console.log(miContador2()); // Salida: 2 (el conteno de miContador2 es el mismo que el de miContador1)
```

___

## Por si te ayuda a entenderlo
Si "closure" fuese una propiedad que se tuviera que establecer manualmente, las variables y funciones "marcadas como closure" serían las que se mantengan en el estado interno de la función, por ejemplo:

```javascript
function a () {
  let variable1 = 0 as closure for b() // <- si se tuviese que marcar así
  let variable2 = 0

  function b () {...} // <- se podría usar acá
}
```

Si ese ejemplo fuese válido, sólo la variable `variable1` mantendría su estado después de la ejecución de la función `a` y se podría acceder desde la función `b`.

## Diferencia con el ámbito global
Para diferenciarlo fácil, si una función accede a una variable, y ambas están en la raíz del archivo o script, es ámbito global.
Si ambas están en el ámbito de una función, es closure.

Y si una función dentro de otra accede a una variable en la raíz del archivo o documento también es por el ámbito global.

## Referencias
- [Closure - Glossary | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Closure)
- [Closures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
- [Gemini](https://gemini.google.com/)