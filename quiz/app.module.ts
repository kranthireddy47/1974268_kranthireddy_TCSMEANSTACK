import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizedataRetriveComponent } from './quizedata-retrive/quizedata-retrive.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizedataRetriveComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
