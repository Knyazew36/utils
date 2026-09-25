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
    /** Имя и инициал фамилии: «Анна К.» */
    nameWithInitial: string;
    initials: string;
    isValid: boolean;
    errors: string[];
}

/**
 * Нормализация имени (первая буква заглавная, остальные строчные)
 * @param name - строка для нормализации
 * @returns нормализованная строка
 * @example
 * normalizeName('  каренина   анна ') // 'Каренина Анна'
 * normalizeName('') // ''
 */
declare function normalizeName(name: string): string;
/**
 * Универсальная функция для обработки ФИО
 * @param input - может быть объектом с ФИО, строкой или массивом строк
 * @returns объект с результатами обработки
 * @example
 * getName('Каренина Анна Аркадьевна')
 * // {
 * //   fullName: 'Каренина Анна Аркадьевна',
 * //   shortName: 'Анна Каренина',
 * //   nameWithInitial: 'Анна К.',
 * //   initials: 'К.А.А.',
 * //   isValid: true,
 * //   errors: []
 * // }
 * getName({ firstName: 'анна', lastName: 'каренина' }).shortName // 'Анна Каренина'
 * getName(['Каренина', 'Анна']).fullName // 'Каренина Анна'
 * getName(null).errors // ['ФИО не предоставлено']
 */
declare function getName(input: IFullName | string | string[] | null | undefined): IFullNameResult;
/**
 * Проверка валидности ФИО
 * @param input - ФИО для проверки
 * @returns true если ФИО валидно
 * @example
 * isValidFullName('Каренина Анна Аркадьевна') // true
 * isValidFullName({ firstName: 'Анна' }) // true
 * isValidFullName('Каренина 123') // false
 * isValidFullName('') // false
 */
declare function isValidFullName(input: IFullName | string | string[] | null | undefined): boolean;
/**
 * Получение только полного имени без проверок
 * @param input - ФИО
 * @returns строка с полным именем
 * @example
 * getFullNameString('каренина анна аркадьевна') // 'Каренина Анна Аркадьевна'
 * getFullNameString({ firstName: 'Анна', lastName: 'Каренина' }) // 'Каренина Анна'
 */
declare function getFullNameString(input: IFullName | string | string[] | null | undefined): string;
/**
 * Получение короткого имени (имя + фамилия)
 * @param input - ФИО
 * @returns строка с коротким именем
 * @example
 * getShortNameString('Каренина Анна Аркадьевна') // 'Анна Каренина'
 * getShortNameString({ firstName: 'Анна' }) // 'Анна'
 */
declare function getShortNameString(input: IFullName | string | string[] | null | undefined): string;
/**
 * Получение имени с инициалом фамилии («Анна К.»)
 * @param input - ФИО
 * @returns строка с именем и инициалом фамилии
 * @example
 * getNameWithInitialString('Каренина Анна Аркадьевна') // 'Анна К.'
 * getNameWithInitialString({ firstName: 'Анна', lastName: 'Каренина' }) // 'Анна К.'
 * getNameWithInitialString('Анна') // 'Анна'
 */
declare function getNameWithInitialString(input: IFullName | string | string[] | null | undefined): string;
/**
 * Получение инициалов
 * @param input - ФИО
 * @returns строка с инициалами
 * @example
 * getInitialsString('Каренина Анна Аркадьевна') // 'К.А.А.'
 * getInitialsString(['Каренина', 'Анна']) // 'К.А.'
 */
declare function getInitialsString(input: IFullName | string | string[] | null | undefined): string;

export { type IFullName, type IFullNameResult, getFullNameString, getInitialsString, getName, getNameWithInitialString, getShortNameString, isValidFullName, normalizeName };
