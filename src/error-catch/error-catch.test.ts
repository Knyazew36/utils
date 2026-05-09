import { describe, expect, it } from 'vitest'

import { errorCatch } from '@/error-catch'

const errorBackend = {
  message: 'Request failed with status code 401',
  name: 'AxiosError',
  code: 'ERR_BAD_REQUEST',
  status: 401,
  response: {
    data: {
      message: 'Unauthorized access'
    }
  }
}

const errorBackendWithErrors = {
  message: 'The given data was invalid.',
  errors: {
    code: ['The code has already been taken.', 'second']
  }
}
const errorBackendWithoutErrors = {
  message: 'The given data was invalid.'
}

describe('errorCatch', () => {
  const error = { response: { data: { message: ['error'] } } }
  const errorTextMap = { error: 'текст ошибки' }

  describe('передаем мапу ошибок', () => {
    it('вернет текст ошибки из мапы ошибок', () => {
      expect(errorCatch(error, { errorTextMap })).toBe('текст ошибки')
    })
    it('вернет текст из ошибка, потому что в мапе нет подходящего ключа', () => {
      expect(errorCatch(errorBackend, { errorTextMap })).toBe('Unauthorized access')
    })
  })

  describe('передаем ошибку без мапы ошибок', () => {
    it('вернет текст ошибки из ошибки', () => {
      expect(errorCatch(error)).toBe('error')
    })

    it('вернет текст ошибки из ошибки backend из response.data.message', () => {
      expect(errorCatch(errorBackend)).toBe('Unauthorized access')
    })
  })

  describe('обрабатываем errors при priorityErrors', () => {
    it('вернет первую ошибку из массива', () => {
      expect(errorCatch(errorBackendWithErrors, { priorityErrors: true, mode: 'first' })).toBe(
        'The code has already been taken.'
      )
    })

    it('вернет массив ошибок', () => {
      expect(errorCatch(errorBackendWithErrors, { priorityErrors: true, mode: 'all' })).toStrictEqual([
        'The code has already been taken.',
        'second'
      ])
    })

    it('вернет message, если нет errors,', () => {
      expect(errorCatch(errorBackendWithoutErrors, { priorityErrors: true, mode: 'first' })).toBe(
        'The given data was invalid.'
      )
    })
  })
})
