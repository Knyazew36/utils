/**
 * Обработка ошибки, возвращает текст ошибки из мапы ошибок, если ошибка не найдена, возвращает текст ошибки из ошибки
 * @param error - ошибка
 *
 * @param  errorTextMap?: Record<string, string> - мапа ошибок
 * @returns строка с ошибкой
 */
declare function errorCatch(error: any, errorTextMap?: Record<string, string>): string;

/**
 * Интерфейс для ФИО
 */
interface IFullName {
    firstName?: string;
    lastName?: string;
    middleName?: string;
}
/**
 * Интерфейс для результата функции
 */
interface IFullNameResult {
    fullName: string;
    shortName: string;
    initials: string;
    isValid: boolean;
    errors: string[];
}

/**
 * Нормализация имени (первая буква заглавная, остальные строчные)
 * @param name - строка для нормализации
 * @returns нормализованная строка
 */
declare function normalizeName(name: string): string;
/**
 * Универсальная функция для обработки ФИО
 * @param input - может быть объектом с ФИО, строкой или массивом строк
 * @returns объект с результатами обработки
 */
declare function getName(input: IFullName | string | string[] | null | undefined): IFullNameResult;
/**
 * Проверка валидности ФИО
 * @param input - ФИО для проверки
 * @returns true если ФИО валидно
 */
declare function isValidFullName(input: IFullName | string | string[] | null | undefined): boolean;
/**
 * Получение только полного имени без проверок
 * @param input - ФИО
 * @returns строка с полным именем
 */
declare function getFullNameString(input: IFullName | string | string[] | null | undefined): string;
/**
 * Получение короткого имени (имя + фамилия)
 * @param input - ФИО
 * @returns строка с коротким именем
 */
declare function getShortNameString(input: IFullName | string | string[] | null | undefined): string;
/**
 * Получение инициалов
 * @param input - ФИО
 * @returns строка с инициалами
 */
declare function getInitialsString(input: IFullName | string | string[] | null | undefined): string;

/**
 * Форматирует число с пробелами как разделителями тысяч.
 * Поддерживает как целые, так и числа с плавающей запятой.
 *
 * @param value Число для форматирования.
 * @returns Строка с форматированным числом.
 * @example
 * numberSeparator(1000) // '1 000'
 * numberSeparator(1000000) // '1 000 000'
 * numberSeparator(-1000000) // '-1 000 000'
 */
declare function numberSeparator(value: number): string;

interface IParams {
    phone: string | number;
    variant: '+79999999999' | '79999999999' | '+7(999)999-99-99' | '89999999999' | '+7 999 999 99-99';
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
declare function formatPhone(phone: string | number, variant: IParams['variant']): string | number;

export { type IFullName, type IFullNameResult, errorCatch, formatPhone, getFullNameString, getInitialsString, getName, getShortNameString, isValidFullName, normalizeName, numberSeparator };
