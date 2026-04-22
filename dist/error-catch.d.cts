/**
 * Режим сбора сообщений об ошибке из ответа.
 * - `first` — одна строка (как раньше: первое сообщение или строка из ответа).
 * - `all` — массив всех сообщений (для массива в `response.data.message`).
 */
type ErrorCatchMode = 'first' | 'all';
type ErrorCatchOptions = {
    mode?: ErrorCatchMode;
};
/**
 * Обработка ошибки, возвращает текст ошибки из мапы ошибок, если ошибка не найдена, возвращает текст ошибки из ошибки
 * @param error - ошибка
 * @param errorTextMap - мапа ошибок (применяется к элементам массива в `response.data.message`)
 * @param options - необязательно: `mode` — вернуть одну строку или массив сообщений
 * @returns строка, массив строк или `error.message`, если в ответе нет `message`
 */
declare function errorCatch(error: any, errorTextMap?: Record<string, string>, options?: ErrorCatchOptions): string | string[];

export { type ErrorCatchMode, type ErrorCatchOptions, errorCatch };
