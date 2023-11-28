import { GUID } from './GUID';

describe('GUID', () => {
  it('GUID Valide', () => {
    expect(() => new GUID('12345678-1234-1234-1234-123456789012')).toBeTruthy();
  });

  it('GUID Invalide', () => {
    expect(() => new GUID('coucou')).toThrow("coucou n'est pas un GUID valide");
  });

  it('Valeur du GUID', () => {
    const guid = new GUID('12345678-1234-1234-1234-123456789012');
    expect(guid.value).toBe('12345678-1234-1234-1234-123456789012');
  });

  it("comparaison d'un GUID et d'une chaine", () => {
    const guid = new GUID('12345678-1234-1234-1234-123456789012');
    expect(guid.isEqualString('12345678-1234-1234-1234-123456789012')).toBe(true);
    expect(guid.isEqualString('12345678-1234-1234-1234-123456789011')).toBe(false);
  });

  it('comparaison de 2 GUIDs', () => {
    const guid1 = new GUID('12345678-1234-1234-1234-123456789012');
    const guid2 = new GUID('12345678-1234-1234-1234-123456789012');
    const guid3 = new GUID('12345678-1234-1234-1234-123456789011');
    expect(guid1.isEqual(guid2)).toBe(true);
    expect(guid1.isEqual(guid3)).toBe(false);
  });
});
