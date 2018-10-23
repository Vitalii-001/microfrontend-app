import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SimplyWebComponentComponent } from './simply-web-component/simply-web-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplyWebComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [AppComponent, SimplyWebComponentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customWebComponent = createCustomElement(SimplyWebComponentComponent, {injector});
    customElements.define('simply-web-component', customWebComponent);
  }

  ngDoBootstrap() {

  }
}
