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

export { type IFullName, type IFullNameResult, getFullNameString, getInitialsString, getName, getShortNameString, isValidFullName, normalizeName };
