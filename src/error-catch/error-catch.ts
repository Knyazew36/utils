/**
 * Обработка ошибки, возвращает текст ошибки из мапы ошибок, если ошибка не найдена, возвращает текст ошибки из ошибки
 * @param error - ошибка
 *
 * @param  errorTextMap?: Record<string, string> - мапа ошибок
 * @returns строка с ошибкой
 */
export function errorCatch(error: any, errorTextMap?: Record<string, string>): string {
  const message = error?.response?.data?.message
  return message
    ? typeof error?.response?.data?.message === 'object'
      ? errorTextMap?.[message[0]] || message[0]
      : message
    : error?.message
}
