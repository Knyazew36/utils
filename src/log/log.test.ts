import { afterEach, describe, expect, test, vi } from 'vitest'

import log from './log'

describe('log', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('если data не передали то ничего не выводится в консоль и undefined', () => {
    const consoleSpy = vi.spyOn(console, 'log')

    expect(log({ name: 'test', data: undefined, type: 'request' })).toBeUndefined()
    expect(consoleSpy).not.toHaveBeenCalled()
  })

  describe('если data передали то выводится в консоль', () => {
    const cases = ['data', { test: 'test' }, { test: { test2: 'test2' } }, { arr: [1, 2, 3] }]

    test.each(cases)('выводится в консоль %s', data => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

      expect(log({ name: 'test', data, type: 'request' })).toBeUndefined()
      expect(consoleSpy).toHaveBeenCalledWith(data)
    })
  })
})
