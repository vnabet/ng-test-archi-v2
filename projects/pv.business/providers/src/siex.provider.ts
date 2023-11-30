import {SiexClientGateway, SiexStoreGateway} from 'pv.business/siex';
import {SiexClient} from 'pv.business/clients/siex';
import { EnvironmentProviders, Provider, makeEnvironmentProviders } from '@angular/core';
import { SiexStore } from 'pv.business/states/siex';

/**
 * Function qui construit la liste des services SIEX à provider
 * @returns Renvoi la liste des services à provider
 */
export function provideSiex():EnvironmentProviders {
  console.log('SON PERE');
  const providers: Provider[] = [
    {provide: SiexClientGateway, useClass: SiexClient},
    {provide: SiexStoreGateway, useClass: SiexStore}
  ]
  return makeEnvironmentProviders(providers);
}
