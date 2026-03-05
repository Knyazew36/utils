/**
 * Обработка ошибки, возвращает текст ошибки из мапы ошибок, если ошибка не найдена, возвращает текст ошибки из ошибки
 * @param error - ошибка
 *
 * @param  errorTextMap?: Record<string, string> - мапа ошибок
 * @returns строка с ошибкой
 */
declare function errorCatch(error: any, errorTextMap?: Record<string, string>): string;

export { errorCatch };
