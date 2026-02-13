import { describe, expect, it } from 'vitest'

import { formatPhone } from './format-phone'

describe('formatPhone', () => {
  it('если не передали ничего то undefined', () => {
    expect(formatPhone('', '+79999999999')).toBeUndefined()
    expect(formatPhone(null as any, '+79999999999')).toBeUndefined()
    expect(formatPhone(undefined as any, '+79999999999')).toBeUndefined()
  })

  it('должен вернуть +79155555555, если variant +79999999999', () => {
    expect(formatPhone('9155555555', '+79999999999')).toBe('+79155555555')
    expect(formatPhone(9155555555, '+79999999999')).toBe('+79155555555')
    expect(formatPhone('79155555555', '+79999999999')).toBe('+79155555555')
    expect(formatPhone('+79155555555', '+79999999999')).toBe('+79155555555')
    expect(formatPhone('8 915 555 55 55', '+79999999999')).toBe('+79155555555')
  })

  it('должен вернуть +7(915)555-55-55, если variant +7(999)999-99-99', () => {
    expect(formatPhone('9155555555', '+7(999)999-99-99')).toBe('+7(915)555-55-55')
    expect(formatPhone(9155555555, '+7(999)999-99-99')).toBe('+7(915)555-55-55')
    expect(formatPhone('79155555555', '+7(999)999-99-99')).toBe('+7(915)555-55-55')
    expect(formatPhone('+79155555555', '+7(999)999-99-99')).toBe('+7(915)555-55-55')
    expect(formatPhone('8 (915) 555-55-55', '+7(999)999-99-99')).toBe('+7(915)555-55-55')
  })

  it('должен вернуть 89155555555, если variant 89999999999', () => {
    expect(formatPhone('9155555555', '89999999999')).toBe('89155555555')
    expect(formatPhone(9155555555, '89999999999')).toBe('89155555555')
    expect(formatPhone('79155555555', '89999999999')).toBe('89155555555')
    expect(formatPhone('89155555555', '89999999999')).toBe('89155555555')
    expect(formatPhone('+79155555555', '89999999999')).toBe('89155555555')
  })

  it('должен вернуть 79155555555, если variant 79999999999', () => {
    expect(formatPhone('9155555555', '79999999999')).toBe('79155555555')
    expect(formatPhone(9155555555, '79999999999')).toBe('79155555555')
    expect(formatPhone('79155555555', '79999999999')).toBe('79155555555')
    expect(formatPhone('89155555555', '79999999999')).toBe('79155555555')
    expect(formatPhone('+79155555555', '79999999999')).toBe('79155555555')
  })

  it('должен вернуть +7 915 555 55-55, если variant +7 999 999 99-99', () => {
    expect(formatPhone('9155555555', '+7 999 999 99-99')).toBe('+7 915 555 55-55')
    expect(formatPhone(9155555555, '+7 999 999 99-99')).toBe('+7 915 555 55-55')
    expect(formatPhone('79155555555', '+7 999 999 99-99')).toBe('+7 915 555 55-55')
    expect(formatPhone('+79155555555', '+7 999 999 99-99')).toBe('+7 915 555 55-55')
    expect(formatPhone('8 915 555 55 55', '+7 999 999 99-99')).toBe('+7 915 555 55-55')
  })

  it('должен обрабатывать номера с разными форматами ввода', () => {
    expect(formatPhone('+7 (915) 555-55-55', '+79999999999')).toBe('+79155555555')
    expect(formatPhone('8-915-555-55-55', '+7(999)999-99-99')).toBe('+7(915)555-55-55')
    expect(formatPhone('7 915 555 55 55', '89999999999')).toBe('89155555555')
  })

  it('должен возвращать undefined для некорректных номеров', () => {
    expect(formatPhone('123', '+79999999999')).toBeUndefined()
    expect(formatPhone('12345', '+79999999999')).toBeUndefined()
    expect(formatPhone('123456789', '+79999999999')).toBeUndefined()
  })

  it('должен возвращать исходный номер для некорректного варианта', () => {
    expect(formatPhone('+79999999999', '+722' as any)).toBe('+79999999999')
  })
})
