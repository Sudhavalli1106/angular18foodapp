import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { OrderHistoryModule } from './app/features/order-history/order-history.module';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
   // provideRouter(routes),
    provideHttpClient(),
    //importProvidersFrom(OrderHistoryModule),
    ...appConfig.providers, // Spread this only if you already have providers in app.config.ts
  ],
}).catch((err) => console.error(err));
