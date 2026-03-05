/**
 * Форматирует число с пробелами как разделителями тысяч.
 * Поддерживает как целые, так и числа с плавающей запятой.
 *
 * @param value Число для форматирования.
 * @returns Строка с форматированным числом.
 * @example
 * numberSeparator(1000) // '1 000'
 * numberSeparator(1000000) // '1 000 000'
 * numberSeparator(-1000000) // '-1 000 000'
 */
declare function numberSeparator(value: number): string;

export { numberSeparator };
