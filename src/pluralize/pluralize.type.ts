/** Формы слова: [для 1, для 2–4, для 5–20] — например `['товар', 'товара', 'товаров']`. */
export type PluralForms = readonly [one: string, few: string, many: string]

export interface PluralizeOptions {
  /** Добавить число перед словом: `5 товаров`. По умолчанию `false`. */
  withCount?: boolean
  /** Разделять тысячи пробелом в числе (`1 000 товаров`). Работает только с `withCount`. По умолчанию `false`. */
  separator?: boolean
}
