import { describe, expect, it } from 'vitest';

import { getName, normalizeName } from '@/get-name';

describe('ErrorMessages', () => {
  describe.todo('validateName');
  describe('normalizeName', () => {
    it('вернет пустую строку если данные невалидны', () => {
      expect(normalizeName('')).toBe('');
      expect(normalizeName({} as any)).toBe('');
      expect(normalizeName(null as any)).toBe('');
      expect(normalizeName(undefined as any)).toBe('');
      expect(normalizeName(123 as any)).toBe('');
      expect(normalizeName(true as any)).toBe('');
      expect(normalizeName(false as any)).toBe('');
      expect(normalizeName(Symbol('test') as any)).toBe('');
      expect(normalizeName(BigInt(123) as any)).toBe('');
    });
    it('вернет отформатированную строку в формате "Иванов Иван Иванович"', () => {
      expect(normalizeName('ivanov ivan ivanovich')).toBe('Ivanov Ivan Ivanovich');
      expect(normalizeName('   ivanov ivan ivanovich   ')).toBe('Ivanov Ivan Ivanovich');
      expect(normalizeName('   ivanov ivan     ivanovich   ')).toBe('Ivanov Ivan Ivanovich');
      expect(normalizeName('   ivanov Ivan     ivanovich   ')).toBe('Ivanov Ivan Ivanovich');
      expect(normalizeName('   Ivanov Ivan     ivanovich   ')).toBe('Ivanov Ivan Ivanovich');
    });
  });
  describe.todo('getInitials');
  describe('getName', () => {
    it('вернет пустой объект если данные невалидны', () => {
      expect(getName('').fullName).toBe('');
      expect(getName({} as any).fullName).toBe('');
      expect(getName(null as any).fullName).toBe('');
      expect(getName(undefined as any).fullName).toBe('');
      expect(getName(123 as any).fullName).toBe('');
      expect(getName(true as any).fullName).toBe('');
      expect(getName(false as any).fullName).toBe('');
      expect(getName('').shortName).toBe('');
      expect(getName({} as any).shortName).toBe('');
      expect(getName(null as any).shortName).toBe('');
      expect(getName(undefined as any).shortName).toBe('');
      expect(getName(123 as any).shortName).toBe('');
      expect(getName(true as any).shortName).toBe('');
      expect(getName(false as any).shortName).toBe('');
      expect(getName('').initials).toBe('');
      expect(getName({} as any).initials).toBe('');
      expect(getName(null as any).initials).toBe('');
      expect(getName(undefined as any).initials).toBe('');
      expect(getName(123 as any).initials).toBe('');
      expect(getName(true as any).initials).toBe('');
      expect(getName(false as any).initials).toBe('');
      expect(getName('').isValid).toBeFalsy();
      expect(getName({} as any).isValid).toBeFalsy();
      expect(getName(null as any).isValid).toBeFalsy();
      expect(getName(undefined as any).isValid).toBeFalsy();
      expect(getName(123 as any).isValid).toBeFalsy();
      expect(getName(true as any).isValid).toBeFalsy();
      expect(getName(false as any).isValid).toBeFalsy();
    });
    describe.todo('передаем объект');
    describe.todo('передаем строку');
    describe.todo('передаем массив строк');
  });
  describe.todo('isValidFullName');
  describe.todo('getNameString');
  describe.todo('getShortNameString');
  describe.todo('getInitialsString');
});
