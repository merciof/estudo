import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarMdlComponent } from './title-bar-mdl/title-bar-mdl.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarMdlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
