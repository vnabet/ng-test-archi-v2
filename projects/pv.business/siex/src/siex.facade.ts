import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FollowUp } from './models';
import { SiexClientGateway } from './gateways';

@Injectable({
  providedIn: 'root'
})
export class SiexFacade {

  private client:SiexClientGateway = inject(SiexClientGateway);

  /**
   * Données de suivi des dossier SIEX
   */
  public allFollowUp$: Observable<FollowUp[]> = this.client.getAllFollowUp();
}
