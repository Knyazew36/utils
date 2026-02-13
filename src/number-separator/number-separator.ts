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
export function numberSeparator(value: number): string {
  const [integerPart, decimalPart] = value.toString().split('.')
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger
}
