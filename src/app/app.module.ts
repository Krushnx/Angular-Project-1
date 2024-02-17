import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeatureBoxComponent } from './feature-box/feature-box.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    NavbarComponent,
    FeatureBoxComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule , FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
