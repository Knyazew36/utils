export type ErrorCatchMode = 'first' | 'all'

export type ErrorCatchOptions = {
  mode?: ErrorCatchMode
  errorTextMap?: Record<string, string>
  priorityErrors?: boolean
}

export function errorCatch(error: any, options?: ErrorCatchOptions): string | string[] {
  const mode = options?.mode ?? 'first'
  const errorTextMap = options?.errorTextMap
  const priorityErrors = options?.priorityErrors ?? false

  // Поддержка обоих форматов:
  // 1) error.response.data.{message, errors}
  // 2) error.{message, errors}
  const data = error?.response?.data ?? error
  const message = data?.message
  const errors = data?.errors as { [key: string]: string[] } | undefined

  const mapMessage = (msg: unknown): string => {
    const key = typeof msg === 'string' ? msg : String(msg)
    return errorTextMap?.[key] ?? key
  }

  const fromErrors = (): string | string[] | undefined => {
    if (!errors || typeof errors !== 'object') return undefined

    const allErrors: string[] = Object.values(errors)
      .flat()
      .map(item => mapMessage(item))

    if (allErrors.length === 0) return undefined

    if (mode === 'all') {
      return allErrors
    }

    return allErrors[0]
  }

  // priorityErrors: сначала пробуем errors
  if (priorityErrors) {
    const byErrors = fromErrors()
    if (byErrors !== undefined) {
      return byErrors
    }
  }

  // message пустой или отсутствует
  if (message == null || message === '') {
    // если priorityErrors = false, но errors есть — можно использовать их как fallback
    if (!priorityErrors) {
      const byErrors = fromErrors()
      if (byErrors !== undefined) {
        return byErrors
      }
    }

    const fallback = error?.message
    if (mode === 'all') {
      return fallback != null && fallback !== '' ? [String(fallback)] : []
    }
    return fallback
  }

  // message есть

  if (typeof message === 'object' && message !== null) {
    if (Array.isArray(message)) {
      const mapped = message.map((item: unknown) => mapMessage(item))

      if (mode === 'all') {
        return mapped
      }
      return mapped[0] ?? ''
    }

    const first = (message as any)[0]
    const one = mapMessage(first)

    if (mode === 'all') {
      return [one]
    }
    return one
  }

  // message — строка/примитив
  const mapped = mapMessage(message)

  if (mode === 'all') {
    return [mapped]
  }
  return mapped
}
