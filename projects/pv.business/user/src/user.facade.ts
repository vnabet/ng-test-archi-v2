import { Injectable, inject } from '@angular/core';
import { UserClientGateway } from './gateways/user.client.gateway';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  private client = inject(UserClientGateway);

  test():string {
    return this.client.test();
  }
}
