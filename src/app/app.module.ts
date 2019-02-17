import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms'
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';

imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    AppComponent,DetailsComponent,FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
