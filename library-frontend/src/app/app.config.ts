import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Added import
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Angular's change detection configuration
    provideRouter(routes), // Provides the router with the defined routes
    provideClientHydration(withEventReplay()), // Enables Angular's client-side hydration for SSR
    provideHttpClient(), // Provides the HttpClient service for making HTTP requests
  ],
};
