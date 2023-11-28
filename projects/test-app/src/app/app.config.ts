// import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import {provideSiex, provideUser} from 'pv.business/providers';
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [provideAnimations(),
    provideSiex(),
    provideUser(),
    provideHttpClient()
  ]
};
