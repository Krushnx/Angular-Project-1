import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    NavbarComponent,
    FeatureBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
