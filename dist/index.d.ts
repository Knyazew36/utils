export { errorCatch } from './error-catch.js';
export { IFullName, IFullNameResult, getFullNameString, getInitialsString, getName, getShortNameString, isValidFullName, normalizeName } from './get-name.js';
export { numberSeparator } from './number-separator.js';
export { formatPhone } from './format-phone.js';

type Unit = 'milliseconds' | 'millisecond' | 'msecs' | 'msec' | 'ms' | 'seconds' | 'second' | 'secs' | 'sec' | 's' | 'minutes' | 'minute' | 'mins' | 'min' | 'm' | 'hours' | 'hour' | 'hrs' | 'hr' | 'h' | 'days' | 'day' | 'd' | 'weeks' | 'week' | 'w' | 'months' | 'month' | 'mos' | 'mo' | 'years' | 'year' | 'yrs' | 'yr' | 'y';
type UnitAnyCase = Unit | Uppercase<Unit> | Lowercase<Unit>;
type StringValue = `${number}` | `${number}${UnitAnyCase}` | `${number} ${UnitAnyCase}`;

declare function ms(str: StringValue): number;

export { ms };
