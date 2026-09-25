import { describe, expect, it } from 'vitest'

import { pluralize } from './pluralize'

const forms = ['товар', 'товара', 'товаров'] as const
const wordOnly = { withCount: false }

describe('pluralize', () => {
  it('должен выбрать форму для 1, 21, 101', () => {
    expect(pluralize(1, forms, wordOnly)).toBe('товар')
    expect(pluralize(21, forms, wordOnly)).toBe('товар')
    expect(pluralize(101, forms, wordOnly)).toBe('товар')
  })
  it('должен выбрать форму для 2–4, 22–24', () => {
    expect(pluralize(2, forms, wordOnly)).toBe('товара')
    expect(pluralize(4, forms, wordOnly)).toBe('товара')
    expect(pluralize(23, forms, wordOnly)).toBe('товара')
  })
  it('должен выбрать форму для 0, 5–20, 111–114', () => {
    expect(pluralize(0, forms, wordOnly)).toBe('товаров')
    expect(pluralize(5, forms, wordOnly)).toBe('товаров')
    expect(pluralize(11, forms, wordOnly)).toBe('товаров')
    expect(pluralize(14, forms, wordOnly)).toBe('товаров')
    expect(pluralize(112, forms, wordOnly)).toBe('товаров')
  })
  it('должен учитывать отрицательные числа по модулю', () => {
    expect(pluralize(-1, forms, wordOnly)).toBe('товар')
    expect(pluralize(-3, forms, wordOnly)).toBe('товара')
  })
  it('должен для дробных возвращать вторую форму', () => {
    expect(pluralize(1.5, ['час', 'часа', 'часов'], wordOnly)).toBe('часа')
    expect(pluralize(0.1, forms, wordOnly)).toBe('товара')
  })
  it('должен для NaN и Infinity возвращать третью форму', () => {
    expect(pluralize(NaN, forms, wordOnly)).toBe('товаров')
    expect(pluralize(Infinity, forms, wordOnly)).toBe('товаров')
  })
  it('должен по умолчанию добавлять число', () => {
    expect(pluralize(5, forms)).toBe('5 товаров')
    expect(pluralize(21, forms)).toBe('21 товар')
    expect(pluralize(1000, forms)).toBe('1000 товаров')
    expect(pluralize(1000, forms, { separator: true })).toBe('1 000 товаров')
  })
  it('должен при withCount: false возвращать только слово', () => {
    expect(pluralize(5, forms, { withCount: false })).toBe('товаров')
    expect(pluralize(1000, forms, { withCount: false, separator: true })).toBe('товаров')
  })
})
