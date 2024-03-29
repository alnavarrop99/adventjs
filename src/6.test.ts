/**
 * Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.
 * Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:
 * - > = Avanza a la derecha
 * - < = Avanza a la izquierda
 * - * = Puede avanzar o retroceder
 *
 * Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.
 *
 * Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.
 *
 * En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.
 *
 * Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección.
 *
 * Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.
 */

const type = {
  left: '<',
  right: '>',
  both: '*',
} as const

export const maxDistance = jest.fn((movements: string): number => {
  return Math.max(
    ...[
      Math.abs(count(movements, type.right) - count(movements, type.left)) + count(movements, type.both),
      Math.abs(count(movements, type.right) - count(movements, type.left)) - count(movements, type.both),
    ]
  )
})

export const count = jest.fn((text: string, char: string): number => {
  let count = 0
  for (const val of text) {
    if (val === char) count++
  }
  return count
})

describe('TDD: maxDistance test', () => {
  test('SC1: maxDistance función', () => {
    expect(maxDistance('>>*<')).toBe(2)
    expect(maxDistance('<<<>')).toBe(2)
    expect(maxDistance('>***>')).toBe(5)
  })
  test('SC2: count function', () => {
    expect(count('>>>>>>>', '>')).toBe(7)
    expect(count('>>**>*>', '>')).toBe(4)
  })
})
