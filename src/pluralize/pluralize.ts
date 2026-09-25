import { numberSeparator } from '../number-separator'

import type { PluralForms, PluralizeOptions } from './pluralize.type'

/**
 * Склоняет слово в зависимости от числа по правилам русского языка.
 *
 * @param count Число, к которому относится слово.
 * @param forms Формы слова: [для 1, для 2–4, для 5–20].
 * @param options Опции вывода.
 * @returns Число + слово (или только слово при `withCount: false`).
 * @example
 * pluralize(1, ['товар', 'товара', 'товаров']) // '1 товар'
 * pluralize(3, ['товар', 'товара', 'товаров']) // '3 товара'
 * pluralize(11, ['товар', 'товара', 'товаров']) // '11 товаров'
 * pluralize(21, ['товар', 'товара', 'товаров'], { withCount: false }) // 'товар'
 * pluralize(1.5, ['час', 'часа', 'часов']) // '1.5 часа'
 */
export function pluralize(count: number, forms: PluralForms, options: PluralizeOptions = {}): string {
  const { withCount = true, separator = false } = options
  const word = forms[getPluralIndex(count)]

  if (!withCount) return word

  const countText = separator ? numberSeparator(count) : String(count)
  return `${countText} ${word}`
}

function getPluralIndex(count: number): 0 | 1 | 2 {
  if (!Number.isFinite(count)) return 2

  // Дробные всегда в родительном падеже единственного числа: «1,5 часа», «0,1 процента»
  if (!Number.isInteger(count)) return 1

  const abs = Math.abs(count)
  const lastTwo = abs % 100
  const last = abs % 10

  if (lastTwo >= 11 && lastTwo <= 14) return 2
  if (last === 1) return 0
  if (last >= 2 && last <= 4) return 1
  return 2
}
