import { AppRoutingModule } from './app/app-routing.module';
// import { AnalyticsService } from 'src/app/shared/analytics.service';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // AnalyticsService
    importProvidersFrom(AppRoutingModule)
  ]
})