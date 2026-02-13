interface IParams {
  phone: string | number
  variant: '+79999999999' | '79999999999' | '+7(999)999-99-99' | '89999999999' | '+7 999 999 99-99'
}

/**
 * Форматирует телефонный номер согласно указанному варианту.
 *
 * @param phone Телефонный номер (строка или число).
 * @param variant Вариант форматирования: '+79999999999', '79999999999', '+7(999)999-99-99', '89999999999', '+7 999 999 99-99'.
 * @returns Отформатированный телефонный номер или undefined, если phone не передан.
 * @example
 * formatPhone('9155555555', '+79999999999') // '+79155555555'
 * formatPhone('9155555555', '+7(999)999-99-99') // '+7(915)555-55-55'
 * formatPhone('9155555555', '89999999999') // '89155555555'
 * formatPhone('9155555555', '+7 999 999 99-99') // '+7 915 555 55-55'
 */
export function formatPhone(phone: string | number, variant: IParams['variant']): string | number {
  if (!phone) return undefined

  // Нормализуем номер: оставляем только цифры
  const digits = phone.toString().replace(/\D/g, '')

  // Если номер начинается с 7 или 8, убираем первую цифру (код страны/оператора)
  // Если номер начинается с других цифр, считаем что это уже без кода
  let phoneDigits = digits
  if (digits.length >= 10 && (digits.startsWith('7') || digits.startsWith('8'))) {
    phoneDigits = digits.slice(1)
  }

  // Берем последние 10 цифр (на случай если номер длиннее)
  const normalizedDigits = phoneDigits.slice(-10)

  // Если цифр меньше 10, возвращаем как есть или undefined
  if (normalizedDigits.length < 10) {
    return undefined
  }

  // Извлекаем части номера: код (3 цифры) + номер (7 цифр)
  const code = normalizedDigits.slice(0, 3)
  const part1 = normalizedDigits.slice(3, 6)
  const part2 = normalizedDigits.slice(6, 8)
  const part3 = normalizedDigits.slice(8, 10)

  switch (variant) {
    case '+79999999999':
      return `+7${code}${part1}${part2}${part3}`
    case '79999999999':
      return `7${code}${part1}${part2}${part3}`
    case '+7(999)999-99-99':
      return `+7(${code})${part1}-${part2}-${part3}`
    case '89999999999':
      return `8${code}${part1}${part2}${part3}`
    case '+7 999 999 99-99':
      return `+7 ${code} ${part1} ${part2}-${part3}`
    default:
      return phone
  }
}
