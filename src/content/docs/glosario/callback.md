---
title: Callback
---

Un callback es básicamente una función pasada a otra como [parámetro](/glosario/parámetros-de-funciones).

```javascript
function númeroRandom (funcionPasadaComoParámetro) { // <- esta función acá es un callback
  const random = Math.random()
  funcionPasadaComoParámetro(random)
}

function mostrarEnConsola (número) {
  console.log(número)
}

númeroRandom(
  mostrarEnConsola // esta función se usará como un callback
)
```

Al ser funciones se pueden declarar con la palabra reservada [`function`](/js/palabra-function) o con arrow functions [`() => {}`](/js/arrow-function), se pueden pasar los nombres de las funciones o declarar en el momento y hacerlas [anónimas](/glosario/anónimas).

El mismo ejemplo pero más acortado sería:

```javascript
function númeroRandom (funcionPasadaComoParámetro) {
  const random = Math.random()
  funcionPasadaComoParámetro(random)
}

númeroRandom((número) => console.log(número)) // aprovecha el return implicito para omitir las llaves {}
```

## Recomendado ver
- [Callback vs Promesas | Midulive (YT)](https://www.youtube.com/watch?v=frm0CHyeSbE)