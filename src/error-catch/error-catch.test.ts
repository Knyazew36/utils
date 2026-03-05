import { describe, expect, it } from 'vitest'

import { errorCatch } from '@/error-catch'

describe('errorCatch', () => {
  const error = { response: { data: { message: ['error'] } } }
  const errorTextMap = { error: 'текст ошибки' }

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

  describe('передаем мапу ошибок', () => {
    it('вернет текст ошибки из мапы ошибок', () => {
      expect(errorCatch(error, errorTextMap)).toBe('текст ошибки')
    })
    it('вернет текст из ошибка, потопу что в мапе нет подходящего ключа', () => {
      expect(errorCatch(errorBackend, errorTextMap)).toBe('Unauthorized access')
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
})
