/**
 * TODO: #fail-adventjs
 *
 * En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
 * Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
 * Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
 */

// TODO:
export const findNaughtyStep = jest.fn((original: string, modified: string): string => {
  const symetricDifference = (setA: Set<string>, setB: Set<string>) => {
    const _difference = new Set(setA)
    for (const elem of setB) {
      if (_difference.has(elem)) {
        _difference.delete(elem)
      } else {
        _difference.add(elem)
      }
    }
    return _difference
  }
  return Array.from(symetricDifference(new Set(original), new Set(modified))).join('')
})

describe.skip('TDD: Find Naughty Step', () => {
  test('Scenary 1: original is grether length than modified', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toMatch('e')
    expect(findNaughtyStep('abcd', 'abcdefgh')).toMatch('efgh')
    expect(findNaughtyStep('abcdabcdt', 'abcdefgh')).toMatch('abcdtefgh')
  })
  test('Scenary 1: original is lessy length than modified', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toMatch('f')
  })
  test('Scenary 1: original is equal length than modified', () => {
    expect(findNaughtyStep('abcde', 'abcde')).toBe('')
  })
})
