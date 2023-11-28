import { Injectable } from '@angular/core';
import { UserClientGateway } from 'pv.business/user';

@Injectable()
export class UserClient extends UserClientGateway {

  test():string {
    return 'VINCENT';
  }
}
