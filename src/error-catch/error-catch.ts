/**
 * Режим сбора сообщений об ошибке из ответа.
 * - `first` — одна строка (как раньше: первое сообщение или строка из ответа).
 * - `all` — массив всех сообщений (для массива в `response.data.message`).
 */
export type ErrorCatchMode = 'first' | 'all'

export type ErrorCatchOptions = {
  mode?: ErrorCatchMode
}

/**
 * Обработка ошибки, возвращает текст ошибки из мапы ошибок, если ошибка не найдена, возвращает текст ошибки из ошибки
 * @param error - ошибка
 * @param errorTextMap - мапа ошибок (применяется к элементам массива в `response.data.message`)
 * @param options - необязательно: `mode` — вернуть одну строку или массив сообщений
 * @returns строка, массив строк или `error.message`, если в ответе нет `message`
 */
export function errorCatch(
  error: any,
  errorTextMap?: Record<string, string>,
  options?: ErrorCatchOptions,
): string | string[] {
  const mode = options?.mode ?? 'first'
  const message = error?.response?.data?.message

  if (message == null || message === '') {
    const fallback = error?.message
    if (mode === 'all') {
      return fallback != null && fallback !== '' ? [String(fallback)] : []
    }
    return fallback
  }

  if (typeof message === 'object' && message !== null) {
    if (Array.isArray(message)) {
      const mapped = message.map((item: unknown) => {
        const key = typeof item === 'string' ? item : String(item)
        return errorTextMap?.[key] ?? key
      })
      if (mode === 'all') {
        return mapped
      }
      return mapped[0] ?? ''
    }
    const first = message[0]
    const key = typeof first === 'string' ? first : String(first)
    const one = errorTextMap?.[key] ?? key
    if (mode === 'all') {
      return [one]
    }
    return one
  }

  if (mode === 'all') {
    return [message]
  }
  return message
}
