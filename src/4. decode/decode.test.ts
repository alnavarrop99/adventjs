/**
 * En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
 * Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres
 * dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes
 * invertir los caracteres en el orden correcto.
 *
 * Notas:
 * - Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
 * - En el mensaje final no deben quedar paréntesis.
 * - El nivel máximo de anidamiento es 2.
 */

/**
```ts
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```
 * */

import { decode, revertInner } from './decode'

describe('TDD: revertInner test', () => {
  test('Scenario 1: Sin Anidacion', () => {
    expect(revertInner('(odnum)')).toBe('mundo')
  })
  test('Scenario 2: Anidacion profunda', () => {
    expect(revertInner('sa(u(cla)atn)s')).toBe('santaclaus')
  })
})

describe('TDD: decode test', () => {
  test('Scenario 1', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
  })
  test('Scenario 2', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
  })
  test('Scenario 3', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
    expect(decode('sa(u(cla)atn)s (apap)')).toBe('santaclaus papa')
  })
})
