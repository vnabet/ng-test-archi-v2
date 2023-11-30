import { Injectable } from '@angular/core';
import { Store } from 'pv.business/core';
import { FollowUp, SiexStoreGateway } from 'pv.business/siex';

/**
 * Store du Siex
 */
@Injectable()
export class SiexStore extends SiexStoreGateway {

  private followUpsStore = new Store<FollowUp[]>([]);

  followUps$ = this.followUpsStore.select((followUps) => followUps);

  initializeFollowUps(followUps:FollowUp[]):void {
    this.followUpsStore.update(_ => followUps);
  }

}
