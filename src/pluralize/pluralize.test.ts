import { describe, expect, it } from 'vitest'

import { pluralize } from './pluralize'

const forms = ['товар', 'товара', 'товаров'] as const

describe('pluralize', () => {
  it('должен выбрать форму для 1, 21, 101', () => {
    expect(pluralize(1, forms)).toBe('товар')
    expect(pluralize(21, forms)).toBe('товар')
    expect(pluralize(101, forms)).toBe('товар')
  })
  it('должен выбрать форму для 2–4, 22–24', () => {
    expect(pluralize(2, forms)).toBe('товара')
    expect(pluralize(4, forms)).toBe('товара')
    expect(pluralize(23, forms)).toBe('товара')
  })
  it('должен выбрать форму для 0, 5–20, 111–114', () => {
    expect(pluralize(0, forms)).toBe('товаров')
    expect(pluralize(5, forms)).toBe('товаров')
    expect(pluralize(11, forms)).toBe('товаров')
    expect(pluralize(14, forms)).toBe('товаров')
    expect(pluralize(112, forms)).toBe('товаров')
  })
  it('должен учитывать отрицательные числа по модулю', () => {
    expect(pluralize(-1, forms)).toBe('товар')
    expect(pluralize(-3, forms)).toBe('товара')
  })
  it('должен для дробных возвращать вторую форму', () => {
    expect(pluralize(1.5, ['час', 'часа', 'часов'])).toBe('часа')
    expect(pluralize(0.1, forms)).toBe('товара')
  })
  it('должен для NaN и Infinity возвращать третью форму', () => {
    expect(pluralize(NaN, forms)).toBe('товаров')
    expect(pluralize(Infinity, forms)).toBe('товаров')
  })
  it('должен добавлять число при withCount', () => {
    expect(pluralize(5, forms, { withCount: true })).toBe('5 товаров')
    expect(pluralize(1000, forms, { withCount: true })).toBe('1000 товаров')
    expect(pluralize(1000, forms, { withCount: true, separator: true })).toBe('1 000 товаров')
  })
})
