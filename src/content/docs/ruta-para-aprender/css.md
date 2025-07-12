---
title: CSS
---

Les recomiendo ver CSS de esta forma o una parecida:

### Estructura de CSS
Entender cómo se divide css es lo más escencial.
De forma sencilla se divide así:

- Selectores
- Los "bloques" de estilos con clave-valor de propiedades
- Pseudo clases
- Pseudo elementos

### Selectores
Ver selectores básicos, cómo se dividen, cómo mezclarlos y encadenarlos:

```css
/* Por elemento */
div {...}

/* Por clase */
.clase {...}

/* Por id */
#id {...}

/* Por atributo */
dialog[open] {...}
```

### Los "bloques" de estilos
Esto se divide en clave-valor, y debe terminar en punto y coma:

```css
selector {
  /* clave: valor; */
  background-color: red;
  transform: rotateX(90deg) translate(10px, 10px);
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}
```

### Pseudo clases y pseudo elementos
Estos son en parte similar a los selectores:

```css
/* pseudo clases */
elemento:hover, elemento:active, elemento:visited, ... {...}

/* pseudo elementos */
elemento::placeholder, elemento::before, elemento::after, ... {...}
```

### Cálculos, variables, funciones

```css
elemento {
  /* Cálculos */
  height: calc(100% - 64px); /* Toda la altura del padre - 64px */

  /* Variables */
  color: var(--special-card-color);

  /* Funciones */
  filter: blur(10px); /* blur() es la función */
}
```

<br>
Hay una propuesta para CSS para poder crear funciones y mixins.

Aún sigue en desarrollo, pero por si quieren ver sobre eso les dejo un enlace abajo.

## Te puede interesar
- [CSS Functions and Mixins Module | W3C](https://www.w3.org/TR/css-mixins-1/)
