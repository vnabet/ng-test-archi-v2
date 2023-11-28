import { FarmAndIncumbentCIF, FollowUp, FollowUpDetail, FollowUpState } from 'pv.business/siex';
import { IFarmAndIncumbentCIFDTO, IFollowUpDTO, IFollowUpDetailDTO } from '../models/follow-up.dto';
import { Injectable } from '@angular/core';
import { IConverter } from 'pv.business/core';

/**
 * Convertisseur des DTO de suivi SIEX vers leurs objets métier
 * Elle étends l'interface IConverter définie dans "core" de PV.Business
 */
@Injectable(
  {
    providedIn: 'root'
  }
)
export class FollowUpConverter implements IConverter<IFollowUpDTO, FollowUp> {
  /**
   * Convertie le DTO de suivi en son objet métier
   * @param dto DTO du suivi Siex
   * @returns Objet métier du suivi Siex
   */
  public convertDTOToObject(dto: IFollowUpDTO): FollowUp {
    const fu = new FollowUp();

    fu.id = dto.id;
    if (dto.depositDate) fu.depositDate = new Date(dto.depositDate);
    if (dto.updateDate) fu.updateDate = new Date(dto.updateDate);
    fu.applicantFirstName = dto.applicantFirstName;
    fu.applicantLastName = dto.applicantLastName;
    fu.autonomousCommunityLabel = dto.autonomousCommunityLabel;
    fu.managementUnit = dto.managementUnit;

    fu.details = this._convertDTODetails(dto.details);
    fu.farmAndIncumbentCIFs = this._convertDTOFarmAndIncumbentCIFS(dto.farmAndIncumbentCIFs);

    fu.state = this._getStateFromString(dto.state);

    return fu;
  }

  /**
   * Converti un tableau de DTOs de détails de suivi SIEX en son équivalent métier
   * @param detailDTOs DTOs de détails de suivi SIEX
   * @returns tableau de classe métier correspondant
   */
  private _convertDTODetails(detailDTOs: IFollowUpDetailDTO[]): FollowUpDetail[] {
    const details: FollowUpDetail[] = [];

    let detail: FollowUpDetail;
    detailDTOs.forEach((d: IFollowUpDetailDTO) => {
      detail = new FollowUpDetail();
      detail.code = d.code;
      detail.detail = d.detail;
      detail.meaning = d.meaning;
      details.push(detail);
    });

    return details;
  }

  /**
   * Converti un tableau de DTOs Exploitations/Exploitants en son équivalent métier
   * @param farmAndIncumbentCIFDTOs DTOs des Exploitations/Exploitants
   * @returns tableau de classes métier correspondant
   */
  private _convertDTOFarmAndIncumbentCIFS(farmAndIncumbentCIFDTOs: IFarmAndIncumbentCIFDTO[]): FarmAndIncumbentCIF[] {
    const farmAndIncumbentCIFs: FarmAndIncumbentCIF[] = [];

    let farmAndIncumbentCIF: FarmAndIncumbentCIF;
    farmAndIncumbentCIFDTOs.forEach((d: IFarmAndIncumbentCIFDTO) => {
      farmAndIncumbentCIF = new FarmAndIncumbentCIF();

      farmAndIncumbentCIF.farmCIF = d.farmCIF;
      farmAndIncumbentCIF.incumbentCIF = d.incumbentCIF;

      farmAndIncumbentCIFs.push(farmAndIncumbentCIF);
    });

    return farmAndIncumbentCIFs;
  }

  /**
   * Conversion d'une chaîne en une valeur
   * @param stateStr string de l'état de suivi SIEX renvoyé par le DTO
   * @returns Renvoi la valeur de l'énuméré qui correspond à la chaîne
   */
  private _getStateFromString(stateStr: string): FollowUpState {
    for (const key in FollowUpState) {
      if (FollowUpState[key as keyof typeof FollowUpState] === stateStr) {
        return FollowUpState[key as keyof typeof FollowUpState];
      }
    }

    //green as keyof typeof Color
    return FollowUpState.undefined;
  }
}
