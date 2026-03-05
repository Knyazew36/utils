export { errorCatch } from './error-catch.cjs';
export { IFullName, IFullNameResult, getFullNameString, getInitialsString, getName, getShortNameString, isValidFullName, normalizeName } from './get-name.cjs';
export { numberSeparator } from './number-separator.cjs';
export { formatPhone } from './format-phone.cjs';

type Unit = 'milliseconds' | 'millisecond' | 'msecs' | 'msec' | 'ms' | 'seconds' | 'second' | 'secs' | 'sec' | 's' | 'minutes' | 'minute' | 'mins' | 'min' | 'm' | 'hours' | 'hour' | 'hrs' | 'hr' | 'h' | 'days' | 'day' | 'd' | 'weeks' | 'week' | 'w' | 'months' | 'month' | 'mos' | 'mo' | 'years' | 'year' | 'yrs' | 'yr' | 'y';
type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;
type StringValue = `${number}` | `${number}${UnitAnyCase}` | `${number} ${UnitAnyCase}`;

declare function ms(str: StringValue): number;

export { type StringValue, type Unit, type UnitAnyCase, ms };
