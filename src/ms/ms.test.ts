import { describe, expect, test } from 'vitest'

import { ms } from './ms'
import { StringValue } from './ms.type'

describe('ms', () => {
  describe('вернет ошибку, если значение не валидное', () => {
    const cases = [
      1,
      null,
      undefined,
      NaN,
      Infinity,
      -Infinity,
      true,
      false,
      Symbol('test'),
      BigInt(123),
      123,
      123.456,
      123.456789,
      123.4567890123456789
    ]
    const cases2 = ['foo', '1x', '1 s m', 'abc123']

    test.each(cases)('вернет ошибку, если значение %s не валидное', value => {
      expect(() => ms(value as any)).toThrow()
    })
    test('пустая строка', () => {
      expect(() => ms('' as StringValue)).toThrow()
    })
    test('строка длиннее 100 символов', () => {
      expect(() => ms('1'.repeat(101) as StringValue)).toThrow()
    })

    test.each(cases2)('"%s" -> NaN', value => {
      expect(ms(value as StringValue)).toBeNaN()
    })
  })

  describe('вернет число, если значение валидное', () => {
    const cases = [
      { value: '1s', result: 1000 },
      { value: '1sec', result: 1000 },
      { value: '1m', result: 60000 },
      { value: '1h', result: 3600000 },
      { value: '4h', result: 3600000 * 4 },
      { value: '1d', result: 86400000 },
      { value: '2d', result: 86400000 * 2 },
      { value: '2day', result: 86400000 * 2 },
      { value: '1w', result: 604800000 },
      { value: '1y', result: 31557600000 },
      { value: '1year', result: 31557600000 },
      { value: '2years', result: 31557600000 * 2 },
      { value: '2year', result: 31557600000 * 2 },
      { value: '1mo', result: 2629800000 },
      { value: '2mos', result: 2629800000 * 2 },
      { value: '2month', result: 2629800000 * 2 },
      { value: '2months', result: 2629800000 * 2 },
      { value: '2month', result: 2629800000 * 2 },
      { value: '100', result: 100 },
      { value: '100ms', result: 100 },
      { value: '1 second', result: 1000 },
      { value: '1s', result: 1000 },
      { value: '1 seconds', result: 1000 },
      { value: '1 sec', result: 1000 },
      { value: '1 secs', result: 1000 },
      { value: '1 minute', result: 60000 },
      { value: '1 minutes', result: 60000 },
      { value: '1m', result: 60000 },
      { value: '1 min', result: 60000 },
      { value: '1 mins', result: 60000 },
      { value: '1 hour', result: 3600000 },
      { value: '1 hours', result: 3600000 },
      { value: '1 hr', result: 3600000 },
      { value: '1 hrs', result: 3600000 },
      { value: '1 day', result: 86400000 },
      { value: '1 days', result: 86400000 },
      { value: '1 week', result: 604800000 },
      { value: '1 weeks', result: 604800000 },
      { value: '1 month', result: 2629800000 },
      { value: '1 months', result: 2629800000 },
      { value: '1 year', result: 31557600000 },
      { value: '1 years', result: 31557600000 },
      { value: '0.5s', result: 500 },
      { value: '1.5m', result: 90000 },
      { value: '2.5h', result: 9000000 },
      { value: '-1s', result: -1000 },
      { value: '-1m', result: -60000 }
    ]

    test.each(cases)('вернет число, если значение %s валидное', ({ value, result }) => {
      expect(ms(value as StringValue)).toBe(result)
    })
  })
})
