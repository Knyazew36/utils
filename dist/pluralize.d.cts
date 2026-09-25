/** Формы слова: [для 1, для 2–4, для 5–20] — например `['товар', 'товара', 'товаров']`. */
type PluralForms = readonly [one: string, few: string, many: string];
interface PluralizeOptions {
    /** Добавить число перед словом: `5 товаров`. По умолчанию `false`. */
    withCount?: boolean;
    /** Разделять тысячи пробелом в числе (`1 000 товаров`). Работает только с `withCount`. По умолчанию `false`. */
    separator?: boolean;
}

/**
 * Склоняет слово в зависимости от числа по правилам русского языка.
 *
 * @param count Число, к которому относится слово.
 * @param forms Формы слова: [для 1, для 2–4, для 5–20].
 * @param options Опции вывода.
 * @returns Нужная форма слова (или число + слово при `withCount`).
 * @example
 * pluralize(1, ['товар', 'товара', 'товаров']) // 'товар'
 * pluralize(3, ['товар', 'товара', 'товаров']) // 'товара'
 * pluralize(11, ['товар', 'товара', 'товаров']) // 'товаров'
 * pluralize(21, ['товар', 'товара', 'товаров'], { withCount: true }) // '21 товар'
 * pluralize(1.5, ['час', 'часа', 'часов']) // 'часа'
 */
declare function pluralize(count: number, forms: PluralForms, options?: PluralizeOptions): string;

export { type PluralForms, type PluralizeOptions, pluralize };
