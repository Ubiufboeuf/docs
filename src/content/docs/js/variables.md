---
title: Variables
---

## Tipos de variables
Hay 3 tipos de variables: [`var`](#var), [`let`](#let) y [`const`](#const). <br>
Ni `let` ni `const` se pueden [redeclarar](#redeclarar-variables). <br>
A `let` y `var` se les puede [reasignar](#reasignar-valores) valor.

### var
Yo no les recomiendo usarla, y no la vamos a usar en el proyecto.

Es similar a let en la mayoría de cosas, y ya. <br>
No voy a explicar más porque no la suelo usar, y no me gusta usarla.
Además, la mayoría del tiempo, en proyectos nuevos y ya no tan nuevos casi siempre se usa más const y let que var.

### let
Permite crear variables que pueden cambiar de valor. <br>
En JavaScript también se le puede cambiar el tipo (en TypeScript se puede si el tipo lo permite). <br>
No precisa inicialización.

```javascript
let nombre
console.log(nombre) // undefined

nombre = 'Pedro'
console.log(nombre, typeof nombre) // 'Pedro' 'string'

nombre = 5
console.log(nombre, typeof nombre) // 5 'number'

let nombre = 4 // SyntaxError: Identifier 'nombre' has already been declared
```

`let` no permite redeclarar la variable, o sea que si ya tienes una variable `x` y quieres cambiarle el nombre no debes volver a usar la palabra reservada `let`.

### const
Permite crear variables que no pueden cambiar en tiempo de ejecución. <br>
Precisa inicialización.

```javascript
const nombre // SyntaxError: Missing initializer in const declaration
```

```javascript
const nombre = 'Juan'
console.log(nombre, typeof nombre) // 'Juan' 'string'

nombre = 4 // TypeError: Assignment to constant variable
```

## Redeclaración de variable
Las declararciones no pueden estar en el mismo alcance que cualquier otra declaración, incluyendo: `let`, `const`, `var`, `class`, `function` e `import`

Ni siquiera tienen que declararse con la misma palabra reservada para dar error.

```javascript
import variable from './variables.js'

function variable () {...} // <- eso daría error

function función () {
  let variable // <- eso no
}
```

La declaración de `let variable` no daría error por estar en un scope o nivel diferente al de `import variable`

## Scope

## Referencias
- [let - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#redeclarations)