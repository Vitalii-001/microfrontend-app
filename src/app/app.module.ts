import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import {MessageBusModule} from 'ngx-message-bus';
// import { ProductHeaderModule } from 'mf-ph'; is also available as npm
import { ProductHeaderComponent } from '../../components/widgets/product-header/dist-npm/app/productheader/productheaer.component';
import { ProductViewModule } from 'mf-pv/app/app.module';
import {ProductCartModule} from 'mf-pc/app/app.module';
// import { defineCustomElements as myNameModule } from 'vitalijdemo-stencil/dist/loader'; is also available as npm
import { defineCustomElements as myStencilComponent } from '../../components/widgets/stencil-component/dist/loader';

@NgModule({
  declarations: [AppComponent, ProductHeaderComponent],
  imports: [
      MessageBusModule,
      BrowserModule,
      // web components
      // ProductHeaderModule, if from npm
      ProductViewModule,
      ProductCartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}

myStencilComponent(window);

