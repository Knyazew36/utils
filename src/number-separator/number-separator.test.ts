import { describe } from 'vitest'

import { numberSeparator } from './number-separator'

describe('numberSeparator', () => {
  it('должен вернуть строку с пробелами как разделителями тысяч', () => {
    expect(numberSeparator(1000)).toBe('1 000')
    expect(numberSeparator(1000000)).toBe('1 000 000')
    expect(numberSeparator(-1000000)).toBe('-1 000 000')
    expect(numberSeparator(0)).toBe('0')
    expect(numberSeparator(-0)).toBe('0')
    expect(numberSeparator(0.123)).toBe('0.123')
    expect(numberSeparator(0.123456789)).toBe('0.123456789')
  })
  it('должен вернуть строку с пробелами как разделителями тысяч для числа с плавающей запятой', () => {
    expect(numberSeparator(1000.123)).toBe('1 000.123')
    expect(numberSeparator(-1000.123)).toBe('-1 000.123')
  })
})
