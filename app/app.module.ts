import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import {enableProdMode} from '@angular/core';
import { Appcomponent} from './app.component';
import { Appemployee } from './app.employee';
enableProdMode();

@NgModule({
imports: [BrowserModule],
declarations: [Appcomponent,Appemployee],
bootstrap: [Appcomponent]
})
export class AppModule { }