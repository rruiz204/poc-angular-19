import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from "primeng/config";

import Aura from "@primeng/themes/aura";
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: Aura } }),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ]
};
