import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainInnerComponent } from './main-inner/main-inner.component';

import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainInnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
