import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { defineCustomElements } from 'npm-vitalijdemo-stencil/dist/loader'; from npm is also available
import { defineCustomElements } from '../components/widgets/stencil-component/dist/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
defineCustomElements(window);
