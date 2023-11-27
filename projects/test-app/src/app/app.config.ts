// import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import {SiexClientGateway} from 'pv.business/siex';
import {SiexClient} from 'pv.business/clients/siex';

export const appConfig = {
  providers: [provideAnimations(),
    {provide: SiexClientGateway, useClass: SiexClient}
  ]
};
