import { Injectable } from '@angular/core';
import {SiexClientGateway, FollowUp} from 'pv.business/siex'
import { Observable, of } from 'rxjs';

@Injectable()
export class SiexClient extends SiexClientGateway {
  public getAllFollowUp(): Observable<FollowUp[]> {
    return of([]);
  }
}
