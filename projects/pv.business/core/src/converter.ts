/**
 * Interface de base des convertisseurs DTO => objets métiers
 */
export interface IConverter<T, U> {
  /**
   * Converti un DTO en son objet métier correspondant
   * @param dto DTO
   * @returns l'objet métier correspondant
   */
  convertDTOToObject(dto: T): U;
}
