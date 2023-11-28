// import { GuidHelper } from '@isagri-ng/core';

/**
 * Type GUID
 * @description entendu du type string, mais avec une validation de la valeur GUID
 */
export class GUID extends String {
  private _value: string;

  get value():string {
    return this._value.toString();
  }

  constructor(value: string) {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    //if (!GuidHelper.isValidKey(value)) {
    if(value.match(regex)) {
      throw new Error(`${value} n'est pas un GUID valide`);
    }
    super(value);

    this._value = value;
  }

  /**
   * Permet de tester l'égalité d'un GUID et d'un string
   * @param value String à tester
   * @returns true => égalité, false sinon
   */
  isEqualString(value: string): boolean
  {
    return this._value.toUpperCase() === value.toUpperCase()
  }

  /**
   * Permet de tester l'égalité entre deux GUID
   * @param value Le GUID a tester
   * @returns true => égalité, sinon false
   */
  isEqual(value: GUID): boolean
  {
    return this._value.toUpperCase() === value.value.toUpperCase()
  }
}
