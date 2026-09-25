/** Формы слова: [для 1, для 2–4, для 5–20] — например `['товар', 'товара', 'товаров']`. */
type PluralForms = readonly [one: string, few: string, many: string];
interface PluralizeOptions {
    /** Выводить число перед словом: `5 товаров`. `false` — только слово. По умолчанию `true`. */
    withCount?: boolean;
    /** Разделять тысячи пробелом в числе (`1 000 товаров`). Не работает при `withCount: false`. По умолчанию `false`. */
    separator?: boolean;
}

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
declare function pluralize(count: number, forms: PluralForms, options?: PluralizeOptions): string;

export { type PluralForms, type PluralizeOptions, pluralize };
