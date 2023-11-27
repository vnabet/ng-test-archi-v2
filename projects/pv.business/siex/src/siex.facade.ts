import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FollowUp } from './models';
import { SiexClientGateway } from './gateways';

@Injectable({
  providedIn: 'root'
})
export class SiexFacade {

  constructor(private client:SiexClientGateway) {

  }

  /**
   * Récupère les données de suivi des dossier SIEX
   * @returns tableau de données de suivi
   */
  public getAllFollowUp(): Observable<FollowUp[]> {
    return this.client.getAllFollowUp();
  }
}
