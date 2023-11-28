import { IFollowUpDTO } from './models/follow-up.dto';
import { FollowUpConverter } from './converters/follow-up.converter';
import { inject, Injectable } from '@angular/core';
import {SiexClientGateway, FollowUp} from 'pv.business/siex'
import { Observable, of , map} from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class SiexClient extends SiexClientGateway {

  private http:HttpClient = inject(HttpClient) ;
  private converter:FollowUpConverter = inject(FollowUpConverter);

  public getAllFollowUp(): Observable<FollowUp[]> {
    //return of([]);
    return this.http.get<IFollowUpDTO[]>('./assets/follow-ups.fake.json')

    .pipe(map((fups:IFollowUpDTO[]) => {
      return fups.map((fup:IFollowUpDTO) => this.converter.convertDTOToObject(fup))
    }) )
  }
}
