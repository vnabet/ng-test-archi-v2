import {UserClientGateway} from 'pv.business/user';
import {UserClient} from 'pv.business/clients/user';
import { EnvironmentProviders, Provider, makeEnvironmentProviders } from '@angular/core';

/**
 * Function qui construit la liste des services SIEX à provider
 * @returns Renvoi la liste des services à provider
 */
export function provideUser():EnvironmentProviders {
  console.log('SA MERE');
  const providers: Provider[] = [
    {provide: UserClientGateway, useClass: UserClient}
  ]
  return makeEnvironmentProviders(providers);
}
