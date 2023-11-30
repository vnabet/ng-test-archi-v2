import { Injectable, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { FollowUp } from './models';
import { SiexClientGateway, SiexStoreGateway } from './gateways';

@Injectable({
  providedIn: 'root'
})
export class SiexFacade {

  private client:SiexClientGateway = inject(SiexClientGateway);
  private store:SiexStoreGateway = inject(SiexStoreGateway);

  /**
   * Données de suivi des dossier SIEX
   */
  public followUps$: Observable<FollowUp[]> = this.store.followUps$;

  public getAllFollowUp() {
    this.client.getAllFollowUp().pipe(take(1)).subscribe((fups) => this.store.initializeFollowUps(fups));
  }
}
