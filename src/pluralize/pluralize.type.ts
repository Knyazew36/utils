/** Формы слова: [для 1, для 2–4, для 5–20] — например `['товар', 'товара', 'товаров']`. */
export type PluralForms = readonly [one: string, few: string, many: string]

export interface PluralizeOptions {
  /** Выводить число перед словом: `5 товаров`. `false` — только слово. По умолчанию `true`. */
  withCount?: boolean
  /** Разделять тысячи пробелом в числе (`1 000 товаров`). Не работает при `withCount: false`. По умолчанию `false`. */
  separator?: boolean
}
