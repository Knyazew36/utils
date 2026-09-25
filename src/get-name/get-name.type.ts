/**
 * Интерфейс для ФИО
 */
export interface IFullName {
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  middleName?: string | null | undefined;
}

/**
 * Интерфейс для результата функции
 */
export interface IFullNameResult {
  fullName: string;
  shortName: string;
  /** Имя и инициал фамилии: «Анна К.» */
  nameWithInitial: string;
  initials: string;
  isValid: boolean;
  errors: string[];
}
